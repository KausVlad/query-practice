import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_BASE_URL;
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Pizza"],
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getPizzas: builder.query({
      query: () => "/pizza/all",
    }),
  }),
});

export const { useGetPizzasQuery } = api;
