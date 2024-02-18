'use client';

import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/NightsStay';
import { ThemeMode } from '@/@types/types';
import useSettings from '@/hooks/useSettings';

const ThemeModeSettings = () => {
  const { themeMode, onToggleMode } = useSettings();

  const handleMode = () => {
    onToggleMode();
  };

  return (
    <>
      <IconButton
        onClick={handleMode}
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
