import { configureStore } from '@reduxjs/toolkit';
import planetsReduces from './locations';
import { userApi } from './api/userAPI';

const store = configureStore({
  reducer: {
    planets: planetsReduces,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export type GetState = typeof store.getState;
export type RootState = ReturnType<GetState>;

export type AppDispatch = typeof store.dispatch;

export default store;
