import { createSlice } from '@reduxjs/toolkit';
//самый начальный, глобальный state
const defaultState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: defaultState,

  reducers: {
    addContact: (state, action) => {
      //action.payload это действие.содержание действия
      // распыляем старый массив и добавляем новый с помощью action.payload(это и есть наш новый контакт)
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    switchFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, switchFilter } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
