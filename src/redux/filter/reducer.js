import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./actions";

const filter = createReducer('', {
  [setFilter]: (state, action) => action.payload,
});

export default filter;
