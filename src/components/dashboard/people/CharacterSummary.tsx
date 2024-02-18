'use client';

import { Box, Card, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import { Character } from '@/@types/people';

const AnimatedCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.neutral,
  transition: theme.transitions.create(['transform', 'box-shadow'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    transform: 'scale(1.02)',
    cursor: 'pointer',
    boxShadow: `0 0 10px 5px ${theme.palette.background.default}`,
  },
}));

type Props = {
  character: Character;
  onDetails: (character: Character) => void;
};

const CharacterSummary = ({ character, onDetails }: Props) => {
  const { name, url } = character;

  const characterId = url.split('/').at(-2);

  const handleDetails = () => {
    onDetails(character);
  };

  return (
    <AnimatedCard
      sx={{ background: (theme) => theme.palette.background.neutral }}
      onClick={handleDetails}
    >
      <Box
        component="img"
        src={`/assets/img/people/${characterId}.jpg`}
        alt="empty content"
        sx={{ width: '100%' }}
      />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingX={2}
        paddingY={1}
      >
        <Typography variant="h6">{name}</Typography>

        <Tooltip enterTouchDelay={0} leaveTouchDelay={15000} title="Részletek" placement="top">
          <InfoIcon color="disabled" />
        </Tooltip>
      </Box>
    </AnimatedCard>
  );
};

export default CharacterSummary;
