import { configureStore } from "@reduxjs/toolkit";
import billReducer from "./billSlice";

const store = configureStore({
  reducer: {
    bills: billReducer,
  },
});

export default store;