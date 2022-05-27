import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
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
          body
        }
      }
    })
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useUpdatePostMutation } = api;
