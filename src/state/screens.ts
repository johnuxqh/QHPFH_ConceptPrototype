export const screens = [
  'setup',
  'home',
  'options',
  'gameSelection',
  'gamePlay',
  'result',
  'lockdown',
  'previousOverthinks',
  'shareResult',
] as const;

export type Screen = (typeof screens)[number];

export const screenLabels: Record<Screen, string> = {
  setup: 'Setup',
  home: 'Home / New Overthink',
  options: 'Options',
  gameSelection: 'Game Selection',
  gamePlay: 'Game Play',
  result: 'Result',
  lockdown: 'Lockdown',
  previousOverthinks: 'Previous Overthinks',
  shareResult: 'Share Result',
};

export const firstScreen: Screen = 'setup';
export const newOverthinkScreen: Screen = 'home';

export function getPreviousScreen(currentScreen: Screen): Screen {
  const currentIndex = screens.indexOf(currentScreen);
  return screens[Math.max(0, currentIndex - 1)];
}

export function getNextScreen(currentScreen: Screen): Screen {
  const currentIndex = screens.indexOf(currentScreen);
  return screens[Math.min(screens.length - 1, currentIndex + 1)];
}
