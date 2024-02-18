'use client';

import { SettingsProvider } from '@/contexts/SettingsContext';
import ThemeProvider from '@/theme';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <SettingsProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SettingsProvider>
  );
}
