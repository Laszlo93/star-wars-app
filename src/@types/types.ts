export type SwapiResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Language {
  HU = 'hu',
  EN = 'en',
}
