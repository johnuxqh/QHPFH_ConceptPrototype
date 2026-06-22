import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = new URL('../dist/', import.meta.url);
await rm(dist, { recursive: true, force: true });
await mkdir(new URL('./assets/', dist), { recursive: true });

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const builtHtml = html.replace('/src/main.tsx', '/assets/main.js');
await writeFile(new URL('./index.html', dist), builtHtml);

const files = [
  ['../src/main.tsx', './assets/main.js'],
  ['../src/App.tsx', './assets/App.js'],
  ['../src/state/screens.ts', './assets/screens.js'],
  ['../src/views/PlaceholderScreen.tsx', './assets/PlaceholderScreen.js'],
  ['../src/styles/base.css', './assets/base.css'],
];

for (const [source, target] of files) {
  const targetUrl = new URL(target, dist);
  await mkdir(dirname(fileURLToPath(targetUrl)), { recursive: true });
  await copyFile(new URL(source, import.meta.url), targetUrl);
}

console.log('Built mobile app shell into dist/.');
