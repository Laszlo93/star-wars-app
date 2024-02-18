'use client';

import { useState } from 'react';
import { Box, IconButton, MenuItem, Popover, Stack } from '@mui/material';
import { Language } from '@/@types/types';
import useLocales from '@/hooks/useLocales';

export const allLangs = [
  {
    label: 'Magyar',
    value: Language.HU,
    icon: '/assets/icons/flags/hu.svg',
  },
  {
    label: 'English',
    value: Language.EN,
    icon: '/assets/icons/flags/gb.svg',
  },
];

const LanguagePopover = () => {
  const { currentLang, onChangeLang } = useLocales();

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeLang = (newLang: string) => {
    onChangeLang(newLang);
    handleClose();
  };

  const selectedLanguage = allLangs.find((lang) => lang.value === currentLang);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && { bgcolor: 'action.selected' }),
        }}
      >
        <Box
          component="img"
          src={selectedLanguage?.icon}
          alt={selectedLanguage?.label}
          sx={{ width: 1, height: 1, objectFit: 'cover', borderRadius: 1 }}
        />
      </IconButton>

      <Popover
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              p: 1,
              overflow: 'inherit',
              mt: 1.5,
              ml: 0.75,
              width: 180,
              '& .MuiMenuItem-root': {
                px: 1,
                typography: 'body2',
                borderRadius: 0.75,
              },
            },
          },
        }}
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
      >
        <Stack spacing={0.75}>
          {allLangs.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang}
              onClick={() => handleChangeLang(option.value)}
            >
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
};

export default LanguagePopover;
