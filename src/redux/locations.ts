import { createSlice } from '@reduxjs/toolkit';

type PlanetsState = {
  planets: string[];
};

const initialState: PlanetsState = { planets: [] };

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets(state: PlanetsState, action) {
      state.planets = action.payload;
    },
  },
});

export const planetsActions = planetsSlice.actions;

export default planetsSlice.reducer;
