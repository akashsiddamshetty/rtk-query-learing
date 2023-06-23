import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../models/contact.model";

export const contactApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: () => "/contacts",
      providesTags: ["contact"],
    }),
    contact: builder.query<Contact, string>({
      query: (id) => `contacts/${id}`,
      providesTags: ["contact"],
    }),
    addContact: builder.mutation<{}, Contact>({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["contact"],
    }),

    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
    updateContact: builder.mutation<void, Contact>({
      query: ({ id, ...rest }) => ({
        url: `contacts/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useContactsQuery,
  useAddContactMutation,
  useContactQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;
