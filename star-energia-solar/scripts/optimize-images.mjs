/**
 * Gera as variações responsivas das imagens de /public/images em /public/_img.
 * Necessário porque o site é exportado como arquivos estáticos (sem o otimizador do Next no servidor).
 * Roda automaticamente antes de `npm run dev` e `npm run build`.
 *
 * Para adicionar fotos: salve o arquivo em /public/images/... e rode o build de novo.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Precisa bater com deviceSizes + imageSizes em next.config.ts
const WIDTHS = [240, 480, 768, 1080, 1600];
const SRC = path.resolve("public/images");
const OUT = path.resolve("public/_img/images");

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) yield full;
  }
}

let created = 0;
let skipped = 0;
for (const file of walk(SRC)) {
  const rel = path.relative(SRC, file);
  const ext = path.extname(rel).toLowerCase();
  const base = rel.slice(0, -ext.length);
  const input = fs.readFileSync(file);
  const srcTime = fs.statSync(file).mtimeMs;

  for (const width of WIDTHS) {
    const target = path.join(OUT, `${base}-${width}.webp`);
    if (fs.existsSync(target) && fs.statSync(target).mtimeMs >= srcTime) {
      skipped++;
      continue;
    }
    fs.mkdirSync(path.dirname(target), { recursive: true });
    const pipeline = sharp(input).resize({ width, withoutEnlargement: true });
    // Tudo sai em WebP (com transparência quando a origem é PNG, como a logo): arquivos bem menores
    const output = await pipeline.webp({ quality: ext === ".png" ? 90 : 78 }).toBuffer();
    fs.writeFileSync(target, output);
    created++;
  }
}
console.log(`Imagens responsivas: ${created} geradas, ${skipped} já estavam atualizadas.`);
