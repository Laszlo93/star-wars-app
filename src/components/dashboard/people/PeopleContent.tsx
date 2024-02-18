'use client';

import { Box, Card, Grid, TablePagination, Typography } from '@mui/material';
import EmptyContent from '../../EmptyContent';
import { useEffect, useState } from 'react';
import axios from '@/utils/axios';
import CustomizedModal from '@/components/CustomizedModal';
import CharacterDetails from './CharacterDetails';
import { Character, People } from '@/@types/people';
import CharacterSummary from './CharacterSummary';

const defaultUrl = 'people';

const PeopleContent = () => {
  const [people, setPeople] = useState<People>();
  const [charachters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>({} as Character);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [url, setUrl] = useState(defaultUrl);

  const [openModal, setOpenModal] = useState(false);

  const noData = !charachters.length;

  const handleOpenCharacterDetails = (character: Character) => {
    setOpenModal(true);
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleChangePage = (event: unknown, newPage: number) => {
    if (newPage > page) {
      setUrl(people?.next ?? defaultUrl);
    } else {
      setUrl(people?.previous ?? defaultUrl);
    }

    setPage(newPage);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get<People>(`${url}`);

        setPeople(data);
        setCharacters(data.results);
        setTotal(data.count);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [url]);

  return (
    <Card>
      <CustomizedModal open={openModal} onClose={handleCloseModal}>
        <CharacterDetails character={selectedCharacter} />
      </CustomizedModal>

      <Grid container sx={{ padding: 3 }} spacing={2}>
        {charachters.map((character, index) => (
          <Grid item key={index} xs={6} md={4}>
            <CharacterSummary character={character} onDetails={handleOpenCharacterDetails} />
          </Grid>
        ))}
      </Grid>

      {noData && <EmptyContent title="Nincs adat" />}

      <Box
        position="relative"
        borderTop={0.5}
        sx={{ borderColor: (theme) => theme.palette.divider }}
      >
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={total}
          rowsPerPage={10}
          page={page}
          onPageChange={handleChangePage}
        />

        <Typography
          variant="body2"
          sx={{
            paddingLeft: 1,
            paddingRight: 3,
            paddingY: 1.5,
            top: 4,
            right: { sm: 150 },
            position: 'absolute',
          }}
        >
          Oldalankénti sorok: 10
        </Typography>
      </Box>
    </Card>
  );
};

export default PeopleContent;
