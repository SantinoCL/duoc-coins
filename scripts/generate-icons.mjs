/**
 * Genera iconos PNG desde el SVG del logo para el manifest PWA.
 * Requiere: npm install -D sharp
 * Uso: node scripts/generate-icons.mjs
 */
import sharp from "sharp";
import { readFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svgPath = join(root, "public", "logo-duoc-coins.svg");
const outDir = join(root, "public", "icons");

mkdirSync(outDir, { recursive: true });

const svgBuffer = readFileSync(svgPath);

const BG = { r: 8, g: 9, b: 15, alpha: 1 };

const sizes = [
  { name: "icon-192.png",        size: 192, maskable: false },
  { name: "icon-512.png",        size: 512, maskable: false },
  { name: "apple-touch-icon.png", size: 180, maskable: false },
  { name: "icon-maskable-512.png", size: 512, maskable: true },
];

for (const { name, size, maskable } of sizes) {
  const logoSize = maskable ? Math.round(size * 0.6) : Math.round(size * 0.7);
  const padding = Math.round((size - logoSize) / 2);

  await sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([
      {
        input: await sharp(svgBuffer).resize(logoSize, logoSize).png().toBuffer(),
        top: padding,
        left: padding,
      },
    ])
    .png()
    .toFile(join(outDir, name));

  console.log(`✓ ${name} (${size}×${size})`);
}

console.log("Icons generated in public/icons/");
