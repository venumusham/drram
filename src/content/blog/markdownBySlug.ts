/**
 * Eager-load all blog markdown bodies from this folder.
 * Keeps slug keys stable on Windows and macOS (no path.endsWith('/slug.md') hacks).
 */
const modules = import.meta.glob('./*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function rawFromModule(value: unknown): string {
  if (typeof value === 'string') return value;
  if (value != null && typeof value === 'object' && 'default' in value) {
    const d = (value as { default: unknown }).default;
    if (typeof d === 'string') return d;
  }
  return '';
}

const bySlug: Record<string, string> = {};

for (const [path, mod] of Object.entries(modules)) {
  const slug = path.replace(/^\.\//, '').replace(/\.md$/i, '');
  const text = rawFromModule(mod).trim();
  if (slug && text) {
    bySlug[slug] = text;
  }
}

export function getBlogMarkdown(slug: string): string | undefined {
  return bySlug[slug];
}
