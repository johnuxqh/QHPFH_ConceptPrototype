import { useState } from 'react';
import {
  firstScreen,
  getNextScreen,
  getPreviousScreen,
  newOverthinkScreen,
  type Screen,
  screenLabels,
  screens,
} from './state/screens';

function PlaceholderScreen({ screen }: { screen: Screen }) {
  return (
    <section className="screen-card" aria-labelledby="screen-title">
      <p className="eyebrow">Current screen</p>
      <h2 id="screen-title">{screenLabels[screen]}</h2>
      <p className="placeholder-copy">
        Placeholder only. Game logic, visual polish, animations, and persistence will be added in later phases.
      </p>
    </section>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(firstScreen);
  const currentIndex = screens.indexOf(currentScreen);
  const isFirstScreen = currentIndex === 0;
  const isLastScreen = currentIndex === screens.length - 1;

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="kicker">Let&apos;s Underthink This</p>
        <h1>OVERTHINK-O-MATIC</h1>
      </header>

      <PlaceholderScreen screen={currentScreen} />

      <nav className="primary-nav" aria-label="Placeholder screen navigation">
        <button type="button" onClick={() => setCurrentScreen(getPreviousScreen(currentScreen))} disabled={isFirstScreen}>
          Back
        </button>
        <button type="button" onClick={() => setCurrentScreen(newOverthinkScreen)}>
          New Overthink
        </button>
        <button type="button" onClick={() => setCurrentScreen(getNextScreen(currentScreen))} disabled={isLastScreen}>
          Forward
        </button>
      </nav>

      <div className="screen-list" aria-label="All placeholder screens">
        {screens.map((screen) => (
          <button
            className={screen === currentScreen ? 'screen-link active' : 'screen-link'}
            key={screen}
            type="button"
            aria-current={screen === currentScreen ? 'page' : undefined}
            onClick={() => setCurrentScreen(screen)}
          >
            {screenLabels[screen]}
          </button>
        ))}
      </div>
    </main>
  );
}
