import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'Services/ContactsMethodsForApi';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { reject }) => {
    try {
      const data = await fetchContacts();
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { reject }) => {
    try {
      const data = await addContact(contact);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { reject }) => {
    try {
      const data = await deleteContact(id);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
