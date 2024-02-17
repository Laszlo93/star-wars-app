'use client';

import { IconButton } from '@mui/material';
import { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/NightsStay';
import { ThemeMode } from '@/@types/types';

const defaultThemeMode = ThemeMode.DARK;

const ThemeModeSettings = () => {
  const [themeMode, setThemeMode] = useState(defaultThemeMode);

  const handleThemeMode = () =>
    setThemeMode((prev) => (prev === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT));

  return (
    <>
      <IconButton
        onClick={handleThemeMode}
        sx={{
          width: 40,
          height: 40,
        }}
      >
        {themeMode === ThemeMode.DARK ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </>
  );
};

export default ThemeModeSettings;
