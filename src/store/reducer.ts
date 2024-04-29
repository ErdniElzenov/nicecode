import { createSlice } from "@reduxjs/toolkit";
import userData from "../utils/index.ts";
import { UserData } from "../utils/index.ts";
const initialState = {
  userData: userData as UserData[],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = dataSlice.actions;
export const selectUserData = (state) => state.userData;
export default dataSlice.reducer;
