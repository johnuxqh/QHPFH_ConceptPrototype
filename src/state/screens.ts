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

export type AppScreen = (typeof screens)[number];

export const screenLabels: Record<AppScreen, string> = {
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
