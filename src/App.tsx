import { useMemo, useState } from 'react';
import { AppScreen, screenLabels, screens } from './state/screens';
import { PlaceholderScreen } from './views/PlaceholderScreen';

const initialScreen: AppScreen = 'setup';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(initialScreen);

  const currentIndex = screens.indexOf(currentScreen);
  const previousScreen = currentIndex > 0 ? screens[currentIndex - 1] : undefined;
  const nextScreen = currentIndex < screens.length - 1 ? screens[currentIndex + 1] : undefined;

  const allScreens = useMemo(
    () => screens.map((screen) => ({ id: screen, label: screenLabels[screen] })),
    [],
  );

  return (
    <main className="app-shell" aria-labelledby="app-title">
      <p className="eyebrow">Let&apos;s Underthink This</p>
      <h1 id="app-title">OVERTHINK-O-MATIC</h1>

      <PlaceholderScreen screenName={screenLabels[currentScreen]} />

      <nav className="primary-actions" aria-label="Screen navigation">
        <button type="button" onClick={() => setCurrentScreen('home')}>
          New Overthink
        </button>
        <button
          type="button"
          onClick={() => previousScreen && setCurrentScreen(previousScreen)}
          disabled={!previousScreen}
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => nextScreen && setCurrentScreen(nextScreen)}
          disabled={!nextScreen}
        >
          Forward
        </button>
      </nav>

      <nav className="screen-list" aria-label="Placeholder screens">
        {allScreens.map((screen) => (
          <button
            key={screen.id}
            type="button"
            aria-current={screen.id === currentScreen ? 'page' : undefined}
            onClick={() => setCurrentScreen(screen.id)}
          >
            {screen.label}
          </button>
        ))}
      </nav>
    </main>
  );
}

export default App;
