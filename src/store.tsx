import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { contactApi } from "./services/contactsApi";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
