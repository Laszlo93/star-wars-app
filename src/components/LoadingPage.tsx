import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Logo from './navbar/Logo';

export default function LoadingPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 80px)',
      }}
    >
      <Box sx={{ m: 1, position: 'relative' }}>
        <Logo sx={{ width: 80 }} />
        <CircularProgress
          size={120}
          sx={{
            color: green[500],
            position: 'absolute',
            top: -20,
            left: -20,
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
}
