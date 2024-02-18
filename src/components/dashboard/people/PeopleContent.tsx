'use client';

import { Box, Card, Grid, TablePagination, Typography } from '@mui/material';
import EmptyContent from '../../EmptyContent';
import { useEffect, useState } from 'react';
import axios from '@/utils/axios';
import CustomizedModal from '@/components/CustomizedModal';
import CharacterDetails from './CharacterDetails';
import { Character } from '@/@types/people';
import CharacterSummary from './CharacterSummary';
import { useGetFilmsQuery } from '@/redux/api/userAPI';
import { SwapiResponse } from '@/@types/types';
import CharacterSummarySkeleton from '@/components/skeletons/CharacterSummarySkeleton';
import useResponsive from '@/hooks/useResponsive';

const defaultUrl = 'people';

const PeopleContent = () => {
  const { data: films } = useGetFilmsQuery({});

  const mdUp = useResponsive('up', 'md');

  const [people, setPeople] = useState<SwapiResponse<Character>>();
  const [charachters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>({} as Character);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [url, setUrl] = useState(defaultUrl);

  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const noData = !isLoading && !charachters.length;

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
    setIsLoading(true);

    const getPeople = async () => {
      try {
        const { data } = await axios.get<SwapiResponse<Character>>(`${url}`);

        setPeople(data);
        setCharacters(data.results);
        setTotal(data.count);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    getPeople();
  }, [url]);

  const getCharacterWithFilmNames = (character: Character) => {
    if (films) {
      const filmNames = character.films.map((film) => {
        const filmId = film.split('/').at(-2);

        return filmId ? films[Number(filmId) - 1] : '';
      });

      return { ...character, films: filmNames };
    } else {
      return character;
    }
  };

  return (
    <Card>
      <CustomizedModal open={openModal} onClose={handleCloseModal}>
        <CharacterDetails character={selectedCharacter} />
      </CustomizedModal>

      <Grid container sx={{ padding: 3 }} spacing={2} justifyContent="center">
        {isLoading ? (
          <>
            <Grid item xs={6} md={3}>
              <CharacterSummarySkeleton />
            </Grid>
            <Grid item xs={6} md={3}>
              <CharacterSummarySkeleton />
            </Grid>
            {mdUp && (
              <>
                <Grid item xs={6} md={3}>
                  <CharacterSummarySkeleton />
                </Grid>
                <Grid item xs={6} md={3}>
                  <CharacterSummarySkeleton />
                </Grid>
              </>
            )}
          </>
        ) : (
          charachters.map((character, index) => (
            <Grid item key={index} xs={6} md={3}>
              <CharacterSummary
                character={getCharacterWithFilmNames(character)}
                onDetails={handleOpenCharacterDetails}
              />
            </Grid>
          ))
        )}
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
      </Box>
    </Card>
  );
};

export default PeopleContent;
