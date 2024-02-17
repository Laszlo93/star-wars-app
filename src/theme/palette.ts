import { ThemeMode } from '@/@types/types';
import { alpha } from '@mui/material/styles';

const PRIMARY = {
  lighter: '#d0fbd5',
  light: '#7bea9c',
  main: '#0CB586 ',
  dark: '#009969',
  darker: '#005249',
};

const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
};

const MAIN_COLOR = {
  0: '#FFFFFF',
  100: '#dce2ef',
  200: '#b9c5df',
  300: '#96a8cf',
  400: '#738bbf',
  500: '#506eaf',
  600: '#40588c',
  700: '#304269',
  800: '#202c46',
  900: '#111827',
  500_8: alpha('#506eaf', 0.08),
  500_12: alpha('#506eaf', 0.12),
  500_16: alpha('#506eaf', 0.16),
  500_24: alpha('#506eaf', 0.24),
  500_32: alpha('#506eaf', 0.32),
  500_48: alpha('#506eaf', 0.48),
  500_56: alpha('#506eaf', 0.56),
  500_80: alpha('#506eaf', 0.8),
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  grey: MAIN_COLOR,
  divider: MAIN_COLOR[500_24],
  action: {
    hover: MAIN_COLOR[500_8],
    selected: MAIN_COLOR[500_16],
    disabled: MAIN_COLOR[500_80],
    disabledBackground: MAIN_COLOR[500_24],
    focus: MAIN_COLOR[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: ThemeMode.LIGHT,
    text: {
      primary: MAIN_COLOR[800],
      secondary: MAIN_COLOR[600],
      disabled: MAIN_COLOR[500],
    },
    background: {
      paper: '#f2f2f2',
      default: '#e6e6e6',
      neutral: MAIN_COLOR[100],
    },
    action: { active: MAIN_COLOR[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: ThemeMode.DARK,
    text: {
      primary: MAIN_COLOR[100],
      secondary: MAIN_COLOR[300],
      disabled: MAIN_COLOR[200],
    },
    background: {
      paper: MAIN_COLOR[800],
      default: MAIN_COLOR[900],
      neutral: MAIN_COLOR[500_16],
    },
    action: { active: MAIN_COLOR[500], ...COMMON.action },
  },
} as const;

export default palette;
