import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://192.168.1.12:9999/api/v1/";

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
const tag = "USER";
export const lockedBoxApi = createApi({
  reducerPath: "lockedBoxApi",
  baseQuery,
  tagTypes: [tag],
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
      invalidatesTags: [tag],
    }),
    sendOTP: builder.mutation({
      query: (body) => ({
        url: `user/send_otp`,
        method: "POST",
        body,
      }),
      invalidatesTags: [tag],
    }),
    getUser: builder.query<any, void>({
      query: () => ({
        url: `user/me`,
        method: "GET",
      }),
      providesTags: [tag],
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
  useSendOTPMutation,
} = lockedBoxApi;
