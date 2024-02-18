import { Film } from '@/@types/film';
import { SwapiResponse } from '@/@types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/',
  }),
  endpoints: (build) => ({
    getFilms: build.query<string[], {}>({
      query: () => `films`,
      transformResponse(response: SwapiResponse<Film>) {
        return response.results.map((film) => film.title);
      },
    }),
  }),
});

export const { useGetFilmsQuery } = userApi;
