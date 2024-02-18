'use client';

import { Box, Typography } from '@mui/material';
import { Character } from '@/@types/people';
import useResponsive from '@/hooks/useResponsive';

type Props = {
  character: Character;
};

const CharacterDetails = ({ character }: Props) => {
  const isMobile = useResponsive('down', 'sm');

  const { name, height, mass, films, url } = character;

  const characterId = url.split('/').at(-2);

  return (
    <Box marginY={4} sx={{ padding: { xs: 3, sm: 4 } }}>
      <Box display="flex" alignItems="center" gap={3} paddingBottom={2}>
        <Box
          component="img"
          src={`/assets/img/people/${characterId}.jpg`}
          alt="empty content"
          sx={{ height: { xs: 100, sm: 120 }, border: 1, borderRadius: '50%' }}
        />

        <Box>
          <Typography variant={isMobile ? 'h6' : 'h5'}>{name}</Typography>
          <Typography variant="body1">{`Magasság: ${height}`}</Typography>
          <Typography variant="body1">{`Súly: ${mass}`}</Typography>
        </Box>
      </Box>

      <Typography variant="body1">{`Filmek: ${films.join(', ')}`}</Typography>
    </Box>
  );
};

export default CharacterDetails;
