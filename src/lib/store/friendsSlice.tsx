/**
 * Friends store slice to keep previous loaded friends and allow
 * to reduce the perception of delay when the user return to friends
 * list after navigating to a friend detail page.
 */
import { createSlice } from "@reduxjs/toolkit";
import { IFriend } from "../types";

const initialState: {
  friends: IFriend[],
  targetFriend: number,
} = {
  friends: [],
  targetFriend: -1,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state, action) => {
      state.friends = action.payload
    },
    setTargetFriend: (state, action) => {
      state.targetFriend = action.payload
    }
  },
});

export const { setFriends, setTargetFriend } = friendsSlice.actions;
export default friendsSlice.reducer;
