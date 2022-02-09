import { createSlice } from '@reduxjs/toolkit';

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    isError: null,
    isLoading: true,
    data: [],
  },
  reducers: {
    saveUserInfo(state, action) {
      state.data = [...action.payload];
      state.isLoading = false;
    },
    catchError(state, action) {
      state.isError = action.payload;
    },
  },
});

export default userInfoSlice.reducer;
export const userInfoAction = userInfoSlice.actions;
