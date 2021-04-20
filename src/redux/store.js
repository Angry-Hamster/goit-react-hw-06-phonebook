import { configureStore } from "@reduxjs/toolkit";

import filter from "./filter/reducer";
import contact from "./contact/reducer"

const store = configureStore({
  reducer: {
    filter,
    contact,
  },
});

export default store;
