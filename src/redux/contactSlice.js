import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './ContactAsyncThunk';
//самый начальный, глобальный state
const defaultState = {
  items: [],
  isLoading: false,
  error: null,
};
//action.payload это действие.содержание действия
// распыляем старый массив и добавляем новый с помощью action.payload(это и есть наш новый контакт)
const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const contactsSlice = createSlice({
  //просто имя слайса
  name: 'contacts',

  initialState: defaultState,

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, handlePending)
      .addCase(fetchContactsThunk.rejected, handleReject)
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.rejected, handleReject)
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.rejected, handleReject)
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
