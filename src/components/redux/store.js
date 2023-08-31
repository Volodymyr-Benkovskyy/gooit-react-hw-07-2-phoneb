import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});

// createAsyncThunk - @reduxjs/toolkit, rejectWithValue, extraReducers:
