import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(projectRoot, "index.html");
const notesPath = path.join(projectRoot, "IMAGE_GENERATION_NOTES.md");
const html = fs.readFileSync(indexPath, "utf8");
const notes = fs.readFileSync(notesPath, "utf8");
const inlineScriptMatch = html.match(/<script>\s*([\s\S]*?)\s*<\/script>/);

if (!inlineScriptMatch) {
  throw new Error("Could not find the app's inline script in index.html.");
}

const appScript = inlineScriptMatch[1];

// Parse the complete app script so ordinary JavaScript syntax errors fail too.
new vm.Script(appScript, { filename: "index.html" });

const dataStart = appScript.indexOf("const sentences =");
const dataEnd = appScript.indexOf("const sentenceElement");

if (dataStart === -1 || dataEnd === -1 || dataEnd <= dataStart) {
  throw new Error("Could not find the sentence and illustration data in index.html.");
}

const dataScript = `${appScript.slice(dataStart, dataEnd)}\n({ sentences, illustrations });`;
const { sentences, illustrations } = vm.runInNewContext(dataScript);
const expectedDifficulties = ["easy", "mixed", "hard"];
const errors = [];

if (Object.keys(sentences).join(",") !== expectedDifficulties.join(",")) {
  errors.push("Sentence decks must be easy, mixed, and hard.");
}

for (const difficulty of expectedDifficulties) {
  const entries = sentences[difficulty];

  if (!Array.isArray(entries)) {
    errors.push(`${difficulty} is not a sentence list.`);
    continue;
  }

  if (entries.length !== 25) {
    errors.push(`${difficulty} should contain exactly 25 sentences; found ${entries.length}.`);
  }

  if (new Set(entries).size !== entries.length) {
    errors.push(`${difficulty} contains a duplicate sentence.`);
  }

  for (const sentence of entries) {
    const markers = (sentence.match(/\*/g) || []).length;
    const targetCount = markers / 2;

    if (markers % 2 !== 0 || targetCount < 3) {
      errors.push(`${difficulty} has invalid target markup: ${sentence}`);
    }

    const ending = sentence
      .split(/;|,\s*|\s+(?:and|but|because|so|then|while|until)\s+/i)
      .at(-1);

    if (!ending.includes("*")) {
      errors.push(`${difficulty} has an ending without an R target: ${sentence}`);
    }
  }
}

const availableSentences = new Set(Object.values(sentences).flat());
const plainSentences = [...availableSentences].map((sentence) => sentence.replaceAll("*", ""));
const documentedSentences = [...notes.matchAll(/^- `[^`]+` — \*(.+)\* /gm)]
  .map((match) => match[1]);
const imagePaths = illustrations.map((item) => item.src);
const mappedSentences = illustrations.map((item) => item.sentence);

if (documentedSentences.length !== plainSentences.length) {
  errors.push(
    `Image notes should document ${plainSentences.length} sentences; found ${documentedSentences.length}.`
  );
}

if (new Set(documentedSentences).size !== documentedSentences.length) {
  errors.push("Image notes contain a duplicate sentence.");
}

for (const sentence of plainSentences) {
  if (!documentedSentences.includes(sentence)) {
    errors.push(`Image notes are missing or differ from this sentence: ${sentence}`);
  }
}

for (const sentence of documentedSentences) {
  if (!plainSentences.includes(sentence)) {
    errors.push(`Image notes contain an unknown sentence: ${sentence}`);
  }
}

for (const [filename, contents] of [
  ["index.html", html],
  ["IMAGE_GENERATION_NOTES.md", notes]
]) {
  if (/[‘’]/.test(contents)) {
    errors.push(`${filename} contains curly single quotation marks; use curly double quotes.`);
  }

  contents.split("\n").forEach((line, index) => {
    const openingQuotes = (line.match(/“/g) || []).length;
    const closingQuotes = (line.match(/”/g) || []).length;
    if (openingQuotes !== closingQuotes) {
      errors.push(`${filename}:${index + 1} has unbalanced curly double quotation marks.`);
    }
  });
}

if (illustrations.length === 0) {
  errors.push("At least one illustration mapping is required.");
}

if (new Set(imagePaths).size !== imagePaths.length) {
  errors.push("An image path is mapped more than once.");
}

if (new Set(mappedSentences).size !== mappedSentences.length) {
  errors.push("A sentence has more than one illustration mapping.");
}

for (const illustration of illustrations) {
  if (!availableSentences.has(illustration.sentence)) {
    errors.push(`Illustration maps an unknown sentence: ${illustration.sentence}`);
  }

  if (!fs.existsSync(path.join(projectRoot, illustration.src))) {
    errors.push(`Illustration file does not exist: ${illustration.src}`);
  }
}

if (errors.length > 0) {
  console.error(`Content validation failed with ${errors.length} error(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  const sentenceCount = Object.values(sentences).flat().length;
  console.log(`Content valid: ${sentenceCount} sentences and ${illustrations.length} illustrations.`);
}
