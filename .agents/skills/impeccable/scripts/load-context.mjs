import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const root = process.cwd();

function load(fileName) {
  const path = resolve(root, fileName);
  if (existsSync(path)) {
    return readFileSync(path, "utf-8");
  }
  return null;
}

function section(content, label) {
  if (!content) return `\n--- ${label} ---\n[Arquivo não encontrado]`;
  return `\n--- ${label} ---\n${content}`;
}

const product = load("PRODUCT.md");
const design = load("DESIGN.md");
const skill = load(".agents/skills/impeccable/SKILL.md");

let output = "";
output += section(product, "PRODUCT CONTEXT");
output += section(design, "DESIGN SYSTEM");
output += section(skill, "SKILL RULES");

if (!product) {
  output += "\n\n[AVISO] PRODUCT.md não encontrado na raiz. Crie-o antes de editar UI.";
}
if (!design) {
  output += "\n\n[AVISO] DESIGN.md não encontrado na raiz. Crie-o antes de editar UI.";
}

console.log(output);
