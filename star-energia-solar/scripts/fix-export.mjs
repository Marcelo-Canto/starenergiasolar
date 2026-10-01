/**
 * Ajustes na pasta /out depois do build:
 * 1. O Next exporta os arquivos de pré-carregamento como __next.rota/__PAGE__.txt, mas com trailingSlash
 *    o navegador pede __next.rota.__PAGE__.txt. Copiamos para o nome pedido, evitando 404 na navegação.
 * 2. .nojekyll: sem ele o GitHub Pages ignora pastas iniciadas por "_" (como _next e _img).
 */
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
let copied = 0;

function flatten(dir, prefix, target) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const name = `${prefix}.${entry.name}`;
    if (entry.isDirectory()) flatten(full, name, target);
    else {
      fs.copyFileSync(full, path.join(target, name));
      copied++;
    }
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) flatten(full, entry.name, dir);
    else if (!["_next", "_img", "images"].includes(entry.name)) walk(full);
  }
}

walk(OUT);
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");
console.log(`Pós-build: ${copied} arquivos de pré-carregamento ajustados, .nojekyll criado.`);
