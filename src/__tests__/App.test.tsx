import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import App from '../App';

describe('App shell', () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it('renders the app title and initial placeholder screen', () => {
    act(() => root.render(<App />));

    expect(container.textContent).toContain('OVERTHINK-O-MATIC');
    expect(container.textContent).toContain('Setup');
  });

  it('can navigate between placeholder screens', () => {
    act(() => root.render(<App />));

    const forwardButton = getButtonByText(container, 'Forward');
    act(() => forwardButton.click());
    expect(container.textContent).toContain('Home / New Overthink');

    const gamePlayButton = getButtonByText(container, 'Game Play');
    act(() => gamePlayButton.click());
    expect(container.textContent).toContain('Game Play');

    const newOverthinkButton = getButtonByText(container, 'New Overthink');
    act(() => newOverthinkButton.click());
    expect(container.textContent).toContain('Home / New Overthink');
  });
});

function getButtonByText(container: HTMLElement, text: string): HTMLButtonElement {
  const button = Array.from(container.querySelectorAll('button')).find((element) => element.textContent === text);

  if (!button) {
    throw new Error(`Button not found: ${text}`);
  }

  return button;
}
