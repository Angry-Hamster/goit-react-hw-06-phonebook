import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, postContacts } from "./actions";

const contact = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => {
    return state.filter((w) => w.id != payload);
  },
  [postContacts]: (state, { payload }) => payload,
});

export default contact;
