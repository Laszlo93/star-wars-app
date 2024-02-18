'use client';

import { Box, Typography } from '@mui/material';
import { Character } from '@/@types/people';

type Props = {
  character: Character;
};

const CharacterDetails = ({ character }: Props) => {
  const { name, height, mass, films, url } = character;

  const characterId = url.split('/').at(-2);

  return (
    <Box display="flex" alignItems="center" gap={3} marginY={4} sx={{ padding: { xs: 3, sm: 4 } }}>
      <Box
        component="img"
        src={`/assets/img/people/${characterId}.jpg`}
        alt="empty content"
        sx={{ height: { xs: 100, sm: 150 }, border: 1, borderRadius: '50%' }}
      />

      <Box>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">{`Magasság: ${height}`}</Typography>
        <Typography variant="body1">{`Súly: ${mass}`}</Typography>
        <Typography variant="body1">{`Filmek: ${films.join(', ')}`}</Typography>
      </Box>
    </Box>
  );
};

export default CharacterDetails;
