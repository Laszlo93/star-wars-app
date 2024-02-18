'use client';

import { SettingsProvider } from '@/contexts/SettingsContext';
import store from '@/redux';
import ThemeProvider from '@/theme';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <SettingsProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </SettingsProvider>
    </Provider>
  );
}
