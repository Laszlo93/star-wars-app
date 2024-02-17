import { Theme } from '@mui/material/styles';
import Card from './Card';

export const ComponentsOverrides = (theme: Theme) => {
  return Object.assign(Card(theme));
};
