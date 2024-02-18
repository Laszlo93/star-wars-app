import { ThemeMode } from './types';

export type SettingsValueProps = {
  themeMode: ThemeMode;
};

export type SettingsContextProps = {
  themeMode: ThemeMode;
  onToggleMode: VoidFunction;
};
