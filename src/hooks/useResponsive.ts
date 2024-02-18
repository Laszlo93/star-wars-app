import { Breakpoint } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type Query = 'up' | 'down';
type Key = Breakpoint | number;

const useResponsive = (query: Query, key?: Key) => {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key as Key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key as Key));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }
};

export default useResponsive;
