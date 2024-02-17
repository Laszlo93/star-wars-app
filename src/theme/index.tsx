'use client';

import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import palette from './palette';
import { ComponentsOverrides } from './overrides';

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const baseTheme = createTheme();

  const themeOptions: ThemeOptions = {
    palette: { ...baseTheme.palette, ...palette.dark },
    shape: { borderRadius: 8 },
  };

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
