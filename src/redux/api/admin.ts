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
    banUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `admin/user/${id}/ban`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [ADMIN_TAG],
    }),
    getUserListings: builder.query<any, any>({
      query: ({ id, page = 1 }) => ({
        url: `admin/user/${id}/listing?page=${page}`,
        method: "GET",
      }),
    }),
    getUserBooking: builder.query<any, any>({
      query: ({ id, page = 1 }) => ({
        url: `admin/user/${id}/booking?page=${page}`,
        method: "GET",
      }),
    }),
    changeListingStatus: builder.mutation({
      query: ({ userId, listingId, body }) => ({
        url: `admin/user/${userId}/listing/${listingId}`,
        method: "PUT",
        body,
      }),
    }),
    getUserDisputes: builder.query<any, any>({
      query: ({ id, page = 1 }) => ({
        url: `admin/user/${id}/dispute?page=${page}`,
        method: "GET",
      }),
    }),
    getUserCheckIns: builder.query<any, any>({
      query: ({ id, page = 1 }) => ({
        url: `admin/user/${id}/check_in?page=${page}`,
        method: "GET",
      }),
    }),
    getBookingReceiptForAdmin: builder.query<any, any>({
      query: (bookingId) => ({
        url: `admin/booking/${bookingId}/receipt`,
        method: "GET",
      }),
    }),
    closeDispute: builder.mutation({
      query: ({ userId, bookingId, body = {} }) => ({
        url: `admin/user/${userId}/booking/${bookingId}/close`,
        method: "PUT",
        body,
      }),
    }),
    makeRefund: builder.mutation({
      query: ({ userId, bookingId, body }) => ({
        url: `admin/user/${userId}/booking/${bookingId}/refund`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useGetUserQuery,
  useLazySearchUserQuery,
  useGetUserDetailsQuery,
  useBanUserMutation,
  useLazyGetUserListingsQuery,
  useChangeListingStatusMutation,
  useLazyGetUserDisputesQuery,
  useLazyGetUserCheckInsQuery,
  useLazyGetUserBookingQuery,
  useCloseDisputeMutation,
  useMakeRefundMutation,
  useGetBookingReceiptForAdminQuery,
} = adminApi;
