import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const minBytes = Number(process.env.MIN_IMAGE_BYTES ?? 120_000);
const maxWidth = Number(process.env.MAX_IMAGE_WIDTH ?? 1600);
const quality = Number(process.env.WEBP_QUALITY ?? 78);

const imagePattern = /\.(png|jpe?g)$/i;
const skipPattern = /(?:favicon|apple-touch-icon|logo|whatsapp\.svg)/i;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
      continue;
    }
    if (entry.isFile() && imagePattern.test(entry.name) && !skipPattern.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await walk(publicDir);
let converted = 0;
let skipped = 0;

for (const file of files) {
  const stat = await fs.stat(file);
  if (stat.size < minBytes) {
    skipped += 1;
    continue;
  }

  const output = file.replace(imagePattern, '.webp');
  const image = sharp(file, { failOn: 'none' });
  const metadata = await image.metadata();

  await image
    .resize({
      width: metadata.width && metadata.width > maxWidth ? maxWidth : undefined,
      withoutEnlargement: true,
    })
    .webp({ quality, effort: 5 })
    .toFile(output);

  const outStat = await fs.stat(output);
  converted += 1;
  console.log(`${path.relative(root, file)} -> ${path.relative(root, output)} (${Math.round(stat.size / 1024)}KB -> ${Math.round(outStat.size / 1024)}KB)`);
}

console.log(`Converted ${converted} image(s), skipped ${skipped} below ${Math.round(minBytes / 1024)}KB.`);
