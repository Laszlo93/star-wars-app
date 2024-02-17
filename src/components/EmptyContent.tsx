import { styled } from '@mui/material/styles';
import { Typography, Box, BoxProps } from '@mui/material';

const RootStyle = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  rowGap: 16,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
}));

interface Props extends BoxProps {
  title: string;
}

export default function EmptyContent({ title, ...other }: Props) {
  return (
    <RootStyle {...other}>
      <Box
        component="img"
        src="/assets/illustrations/empty-content.svg"
        alt="empty content"
        sx={{ maxWidth: 200 }}
      />

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
    </RootStyle>
  );
}
