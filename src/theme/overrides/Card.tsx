import { Theme } from '@mui/material/styles';

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          boxShadow: `0 0 10px 0 ${theme.palette.background.default}`,
          background: theme.palette.background.paper,
        },
      },
    },
  };
}
