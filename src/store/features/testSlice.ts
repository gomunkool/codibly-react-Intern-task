import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  firstTest: string;
  secondTest: string;
}

const initialState: IAuthState = {
  firstTest: '',
  secondTest: 'test',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setFirstTest: (state, action: PayloadAction<string>) => {
      state.firstTest = action.payload;
    },
    setSecondTest: (state, action: PayloadAction<string>) => {
      state.secondTest = action.payload;
    },
  },
});

export const { setFirstTest, setSecondTest } = testSlice.actions;
export default testSlice.reducer;
