import fs from 'node:fs/promises';
import syncFs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const sourceDirs = ['src'];
const sourceExtPattern = /\.(tsx?|jsx?|md)$/i;
const publicImageRefPattern = /\/(?:images\/[^'"`)\\\s]+|banner(?:-desktop)?)(?:\.png|\.jpe?g)/gi;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
      continue;
    }
    if (entry.isFile() && sourceExtPattern.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

let touched = 0;
let replacements = 0;

for (const sourceDir of sourceDirs) {
  const files = await walk(path.join(root, sourceDir));

  for (const file of files) {
    const original = await fs.readFile(file, 'utf8');
    let changed = false;

    const next = original.replace(publicImageRefPattern, (match) => {
      const webpRef = match.replace(/\.(png|jpe?g)$/i, '.webp');
      const webpFile = path.join(publicDir, webpRef.replace(/^\//, ''));
      if (!syncFs.existsSync(webpFile)) return match;
      changed = true;
      replacements += 1;
      return webpRef;
    });

    if (changed) {
      await fs.writeFile(file, next);
      touched += 1;
      console.log(`Updated ${path.relative(root, file)}`);
    }
  }
}

console.log(`Updated ${touched} file(s), replaced ${replacements} image reference(s).`);
