import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_BASE_URL;
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Pizza"],
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getPizzas: builder.query<Array<string>, { ingredientName: string }>({
      query: ({ ingredientName }) => ({
        url: "/pizza/all",
        params: {
          ingredientName,
        },
      }),
    }),
    getPizzaById: builder.query<string, string>({
      query: (id) => ({
        url: `/pizza/${id}`,
      }),
    }),
  }),
});

export const { useGetPizzasQuery } = api;
