import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BACKEND_URL + "/api/v1/";
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const auth = localStorage.getItem("token");
    if (auth) {
      headers.set("Authorization", `Bearer ${auth}`);
    }
    return headers;
  },
});
const USER_TAG = "USER";
const PAYMENT_TAG = "PAYMENT";
const LISTING_TAG = "LISTING";
export const lockedBoxApi = createApi({
  reducerPath: "lockedBoxApi",
  baseQuery,
  tagTypes: [USER_TAG, PAYMENT_TAG, LISTING_TAG],
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (body) => ({
        url: `user/sign_up`,
        method: "POST",
        body,
      }),
    }),
    verifyOTP: builder.mutation({
      query: (body) => ({
        url: `user/verify`,
        method: "POST",
        body,
      }),
    }),
    createPassword: builder.mutation({
      query: (body) => ({
        url: `user/set_password`,
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `user/log_in`,
        method: "POST",
        body,
      }),
    }),
    addRole: builder.mutation({
      query: (body) => ({
        url: `user/add_dashboard_role`,
        method: "POST",
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),
    sendOTP: builder.mutation({
      query: (body) => ({
        url: `user/send_otp`,
        method: "POST",
        body,
      }),
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: `user/me`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),
    updateUserProfileImage: builder.mutation({
      query: (body) => ({
        url: `user/me/profile_update`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),
    getUser: builder.query<any, void>({
      query: () => ({
        url: `user/me`,
        method: "GET",
      }),
      providesTags: [USER_TAG],
    }),
    changeUserAuth: builder.mutation({
      query: (body) => ({
        url: `user/change_email_phone`,
        method: "POST",
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),

    // Payment apis
    addPaymentMethod: builder.mutation({
      query: (body) => ({
        url: `user/payment_method`,
        method: "POST",
        body,
      }),
      invalidatesTags: [PAYMENT_TAG],
    }),
    getPaymentMethods: builder.query<any, void>({
      query: () => ({
        url: `user/payment_method`,
        method: "GET",
      }),
      providesTags: [PAYMENT_TAG],
    }),
    removePaymentMethod: builder.mutation({
      query: (paymentMethodId) => ({
        url: `user/payment_method/${paymentMethodId}`,
        method: "DELETE",
      }),
      invalidatesTags: [PAYMENT_TAG],
    }),
    addStripeConnect: builder.mutation({
      query: () => ({
        url: `user/create_stripe_account`,
        method: "POST",
      }),
    }),

    // Host listing page
    createListing: builder.mutation({
      query: (body) => ({
        url: `listing/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: [LISTING_TAG],
    }),
    updateListing: builder.mutation({
      query: ({ id, body }) => ({
        url: `listing/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [LISTING_TAG],
    }),
    getAllListings: builder.query<any, void>({
      query: () => ({
        url: `listing/me`,
        method: "GET",
      }),
      providesTags: [LISTING_TAG],
    }),
    getListingById: builder.query<any, string>({
      query: (listingId) => ({
        url: `listing/${listingId}`,
        method: "GET",
      }),
      providesTags: [LISTING_TAG],
    }),
    findListing: builder.query<any, any>({
      query: ({ latitude, longitude }) => ({
        url: `listing/find_listing?latitude=${latitude}&longitude=${longitude}`,
        method: "GET",
      }),
    }),

    // Booking apis
    requestBooking: builder.mutation({
      query: (body) => ({
        url: `booking/request`,
        method: "POST",
        body,
      }),
    }),
    findRenterBookings: builder.query<any, any>({
      query: ({ type }) => ({
        url: `booking/rent_booking?type=${type}`,
        method: "GET",
      }),
    }),
    getInsurancePlans: builder.query<any, void>({
      query: () => ({
        url: `booking/insurance_plan`,
        method: "GET",
      }),
    }),
    checkBookingAvailability: builder.query<any, any>({
      query: ({ id, startDate, endDate }) => ({
        url: `booking/check_availability?listingId=${id}&startDate=${startDate}&endDate=${endDate}`,
        method: "GET",
      }),
    }),
    findHostBookings: builder.query<any, any>({
      query: ({ type }) => ({
        url: `booking/host_booking?type=${type}`,
        method: "GET",
      }),
    }),
    updateBookingStatus: builder.mutation({
      query: ({ bookingId, body }) => ({
        url: `booking/${bookingId}/status`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useVerifyOTPMutation,
  useCreatePasswordMutation,
  useLoginUserMutation,
  useAddRoleMutation,
  useGetUserQuery,
  useLazyGetUserQuery,
  useChangeUserAuthMutation,
  useSendOTPMutation,
  useUpdateUserMutation,
  useUpdateUserProfileImageMutation,
  useAddPaymentMethodMutation,
  useAddStripeConnectMutation,
  useGetPaymentMethodsQuery,
  useRemovePaymentMethodMutation,
  useCreateListingMutation,
  useGetAllListingsQuery,
  useGetListingByIdQuery,
  useFindListingQuery,
  useLazyFindListingQuery,
  useUpdateListingMutation,
  useRequestBookingMutation,
  useFindRenterBookingsQuery,
  useLazyFindRenterBookingsQuery,
  useFindHostBookingsQuery,
  useLazyFindHostBookingsQuery,
  useUpdateBookingStatusMutation,
  useLazyCheckBookingAvailabilityQuery,
  useGetInsurancePlansQuery
} = lockedBoxApi;
