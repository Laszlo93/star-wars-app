import { Language, ThemeMode } from './types';

export type SettingsValueProps = {
  themeMode: ThemeMode;
  language: Language;
};

export type SettingsContextProps = {
  themeMode: ThemeMode;
  onToggleMode: VoidFunction;
};
