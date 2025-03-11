import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BACKEND_URL + "/api/v1/";
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const auth = sessionStorage.getItem("token");
    if (auth) {
      headers.set("Authorization", `Bearer ${auth}`);
    }
    return headers;
  },
});
const ADMIN_TAG = "ADMIN";
export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery,
  tagTypes: [ADMIN_TAG],
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (body) => ({
        url: `admin/log_in`,
        method: "POST",
        body,
      }),
    }),
    getUser: builder.query<any, void>({
      query: () => ({
        url: `user/me`,
        method: "GET",
      }),
      providesTags: [ADMIN_TAG],
    }),
    searchUser: builder.query<any, any>({
      query: (search) => ({
        url: `admin/user/${search}`,
        method: "GET",
      }),
    }),
    getUserDetails: builder.query<any, any>({
      query: (id) => ({
        url: `admin/user/${id}/details`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useGetUserQuery,
  useLazySearchUserQuery,
  useGetUserDetailsQuery,
} = adminApi;
