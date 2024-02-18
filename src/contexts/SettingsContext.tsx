import { SettingsContextProps } from '@/@types/settings';
import { ThemeMode } from '@/@types/types';
import { defaultSettings } from '@/config';
import { ReactNode, createContext, useState } from 'react';

const initialState: SettingsContextProps = {
  ...defaultSettings,
  onToggleMode: () => {},
};

const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useState(defaultSettings);

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
