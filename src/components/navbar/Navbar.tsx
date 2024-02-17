'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from './Logo';
import Link from 'next/link';
import LanguagePopover from './LanguagePopover';
import ThemeModeSettings from './ThemeModeSettings';

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar
        disableGutters
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          paddingX: 3,
        }}
      >
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Logo />

          <Box>
            <LanguagePopover />

            <ThemeModeSettings />

            <Button LinkComponent={Link} href="/login" sx={{ my: 2, textTransform: 'capitalize' }}>
              Kijelentkezés
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
