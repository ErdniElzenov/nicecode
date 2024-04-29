import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer.ts";
import { UserData } from "../utils/index";

export interface RootState {
  userData: UserData[];
}

const store = configureStore({
  reducer: reducer,
});

export default store;
