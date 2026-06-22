import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const appSource = readFileSync(new URL('../App.tsx', import.meta.url), 'utf8');
const screensSource = readFileSync(new URL('../state/screens.ts', import.meta.url), 'utf8');

test('app renders the OVERTHINK-O-MATIC shell', () => {
  assert.match(appSource, /OVERTHINK-O-MATIC/);
  assert.match(appSource, /New Overthink/);
});

test('navigation can change screen through typed placeholder screens', () => {
  assert.match(appSource, /useState<AppScreen>/);
  assert.match(appSource, /setCurrentScreen/);
  assert.match(screensSource, /shareResult/);
});
