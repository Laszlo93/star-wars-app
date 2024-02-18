'use client';

import { ReactNode, useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import { ComponentsOverrides } from './overrides';
import useSettings from '@/hooks/useSettings';
import { ThemeMode } from '@/@types/types';
import palette from './palette';

type Props = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: Props) => {
  const { themeMode } = useSettings();

  const baseTheme = createTheme();

  const lightPalette = palette.light;
  const darkPalette = palette.dark;

  const themePalette = themeMode === ThemeMode.LIGHT ? lightPalette : darkPalette;

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: { ...baseTheme.palette, ...themePalette },
      shape: { borderRadius: 8 },
    }),
    [themeMode]
  );

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
};

export default ThemeProvider;
