import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    mode: "cors",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
    }),
    getHappens: builder.query({
      query: () => `/happens`,
    }),
    addPost: builder.mutation({
      query: (body) => {
        return {
          url: "/posts",
          method: "POST",
          body,
        };
      },
    }),
    updatePost: builder.mutation({
      query: (body) => {
        return {
          url: `/posts/${body.id}`,
          method: "PUT",
          body,
        };
      },
    }),
    getUser: builder.query({
      query: () => "/users",
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useGetUserQuery,
  useGetHappensQuery,
} = api;
