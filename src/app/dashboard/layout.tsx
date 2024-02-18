'use client';

import { Planet } from '@/@types/planet';
import { SwapiResponse } from '@/@types/types';
import LoadingPage from '@/components/LoadingPage';
import { useGetFilmsQuery } from '@/redux/api/userAPI';
import { useAppDispatch } from '@/redux/hook';
import { planetsActions } from '@/redux/locations';
import axiosInstance from '@/utils/axios';
import { Grid } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const { isLoading: isLoadingGetFilms } = useGetFilmsQuery({});

  const dispatch = useAppDispatch();
  const { setPlanets } = planetsActions;

  const [isLoadingGetPlanets, setIsLoadingGetPlanets] = useState(true);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = [];
      let nextPage: string | null = 'planets';

      while (!!nextPage) {
        try {
          const { data }: { data: SwapiResponse<Planet> } = await axiosInstance.get(nextPage);

          planets.push(...data.results.map((result) => result.name));
          nextPage = data.next;
        } catch (error) {
          console.error(error);
        }
      }

      setIsLoadingGetPlanets(false);
      dispatch(setPlanets(planets));
    };

    getPlanets();
  }, []);

  if (isLoadingGetFilms || isLoadingGetPlanets) {
    return <LoadingPage />;
  }

  return (
    <Grid container justifyContent="center" marginTop={4}>
      <Grid item xs={12} md={11} lg={9} xl={9} padding={3}>
        {children}
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
