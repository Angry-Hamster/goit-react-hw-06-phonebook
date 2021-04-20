import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add');
export const postContacts = createAction('contacts/post');
export const deleteContact = createAction('contact/delete');