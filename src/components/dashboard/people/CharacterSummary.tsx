'use client';

import { Box, Card, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import { Character } from '@/@types/people';
import useResponsive from '@/hooks/useResponsive';

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
  const smDown = useResponsive('down', 'sm');
  const mdUp = useResponsive('up', 'md');
  const lgDown = useResponsive('down', 'lg');

  const { name, url } = character;

  const characterId = url.split('/').at(-2);

  let modifiedName = '';
  let hasTooltip = false;

  if (smDown && name.length > 6) {
    modifiedName = name.replace(/^(.{4}).{3,}$/, '$1...');

    hasTooltip = true;
  } else if (mdUp && lgDown && name.length > 8) {
    modifiedName =
      mdUp && lgDown && name.length > 8 ? name.replace(/^(.{8}).{3,}$/, '$1...') : name;

    hasTooltip = true;
  } else {
    modifiedName = name;
  }

  const handleDetails = () => {
    onDetails(character);
  };

  return (
    <AnimatedCard onClick={handleDetails}>
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
        <Tooltip
          enterTouchDelay={0}
          leaveTouchDelay={15000}
          title={hasTooltip ? name : ''}
          placement="top"
        >
          <Typography variant="h6">{modifiedName}</Typography>
        </Tooltip>

        <Tooltip enterTouchDelay={0} leaveTouchDelay={15000} title="Részletek" placement="top">
          <InfoIcon color="disabled" />
        </Tooltip>
      </Box>
    </AnimatedCard>
  );
};

export default CharacterSummary;
