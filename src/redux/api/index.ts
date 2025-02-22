import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BACKEND_URL + "/api/v1/";
console.log("import.meta.env.BACKEND_URL:::", import.meta.env.BACKEND_URL);
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
        invalidateTags: [USER_TAG],
      }),
    }),

    // Payment apis
    addPaymentMethod: builder.mutation({
      query: (body) => ({
        url: `user/payment_method`,
        method: "POST",
        body,
        invalidateTags: [PAYMENT_TAG],
      }),
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
        invalidateTags: [PAYMENT_TAG],
      }),
    }),

    // Host listing page
    createListing: builder.mutation({
      query: () => ({
        url: `listing/create`,
        method: "POST",
        invalidateTags: [LISTING_TAG],
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
  useChangeUserAuthMutation,
  useSendOTPMutation,
  useUpdateUserMutation,
  useUpdateUserProfileImageMutation,
  useAddPaymentMethodMutation,
  useGetPaymentMethodsQuery,
  useRemovePaymentMethodMutation,
  useCreateListingMutation,
} = lockedBoxApi;
