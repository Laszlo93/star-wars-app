'use client';

import { styled } from '@mui/material/styles';
import { Button, Typography, Container } from '@mui/material';
import Link from 'next/link';
import useLocales from '@/hooks/useLocales';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const Page404 = () => {
  const { translate } = useLocales();

  return (
    <Container>
      <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Typography variant="h3" paragraph>
          {translate('page404.title')}
        </Typography>

        <Typography sx={{ color: 'text.secondary', marginBottom: 3 }}>
          {translate('page404.content')}
        </Typography>

        <Button href="/dashboard/people" size="large" variant="contained" LinkComponent={Link}>
          {translate('page404.goPeople')}
        </Button>
      </ContentStyle>
    </Container>
  );
};

export default Page404;
