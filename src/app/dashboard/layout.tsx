import { Grid } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={9} padding={3}>
        {children}
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
