import { configureStore } from '@reduxjs/toolkit';
import testSlice from './features/testSlice';

const store = configureStore({
  reducer: {
    test: testSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
