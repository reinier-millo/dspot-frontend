/**
 * Layout store slice to keep the current layout state.
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  showBackBtn: boolean,
} = {
  showBackBtn: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setShowBackBtn: (state, action) => {
      state.showBackBtn = action.payload;
    },
  },
});

export const { setShowBackBtn } = layoutSlice.actions;
export default layoutSlice.reducer;
