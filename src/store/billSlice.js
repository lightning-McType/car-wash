import { createSlice } from "@reduxjs/toolkit";

let id = 1;
const billSlice = createSlice({
  name: "bills",
  initialState: [],
  reducers: {
    add(state, action) {
      action.payload = { ...action.payload, id };
      state.push(action.payload);
      id++;
    },
    remove(state, action) {
      return state.filter((bill) => bill.id !== action.payload);
    },
    edit(state, action) {
      return state.map((bill) => {
        if (Number(bill.id) === Number(action.payload.id)) return action.payload;
        else return bill;
      });
    },
  },
});

export const { add, remove, edit } = billSlice.actions;
export default billSlice.reducer;
