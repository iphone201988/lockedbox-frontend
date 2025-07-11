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
const REVIEW_TAG = "REVIEW";
const NOTIFICATIONS_TAG = "NOTIFICATION";
const BOOKINGS_TAG = "BOOKING";
export const SIDEBAR_TAG = "SIDEBAR";
export const CONVERSATION_TAG = "CONVERSATION";
export const STRIPE_CUSTOM_IDENTIFICATION_TAG = "STRIPE_CUSTOM_IDENTIFICATION";

export const lockedBoxApi = createApi({
  reducerPath: "lockedBoxApi",
  baseQuery,
  tagTypes: [
    USER_TAG,
    PAYMENT_TAG,
    LISTING_TAG,
    REVIEW_TAG,
    NOTIFICATIONS_TAG,
    BOOKINGS_TAG,
    SIDEBAR_TAG,
    CONVERSATION_TAG,
    STRIPE_CUSTOM_IDENTIFICATION_TAG,
  ],
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
    getUserEarnings: builder.query<any, void>({
      query: () => ({
        url: `user/earning_summary`,
        method: "GET",
      }),
      providesTags: [USER_TAG],
    }),
    getHomeListings: builder.query<any, void>({
      query: () => ({
        url: `user/home_screen`,
        method: "GET",
      }),
    }),
    changeUserAuth: builder.mutation({
      query: (body) => ({
        url: `user/change_email_phone`,
        method: "POST",
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),
    uploadImage: builder.mutation({
      query: (body) => ({
        url: `user/update_media`,
        method: "POST",
        body,
      }),
      invalidatesTags: [USER_TAG],
    }),
    dashboardHome: builder.query<any, void>({
      query: () => ({
        url: `user/dashboard`,
        method: "GET",
      }),
      providesTags: [NOTIFICATIONS_TAG],
    }),
    readNotification: builder.mutation({
      query: ({ notificationId, body = {} }) => ({
        url: `user/notifications/${notificationId}/read`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [NOTIFICATIONS_TAG],
    }),
    getTotalNotifications: builder.query<any, void>({
      query: () => ({
        url: `user/total_notification`,
        method: "GET",
      }),
      providesTags: [SIDEBAR_TAG],
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
    getBankAccounts: builder.query<any, void>({
      query: () => ({
        url: `user/stripe_bank_account`,
        method: "GET",
      }),
      providesTags: [PAYMENT_TAG],
    }),
    getLoginLink: builder.query<any, void>({
      query: () => ({
        url: `user/stripe_account_login`,
        method: "GET",
      }),
      providesTags: [PAYMENT_TAG],
    }),
    getTransactions: builder.query<any, any>({
      query: ({ page = 1, sort = "latest" }) => ({
        url: `user/transaction?page=${page}&sort=${sort}`,
        method: "GET",
      }),
      providesTags: [PAYMENT_TAG, LISTING_TAG],
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
    updateStripeConnect: builder.mutation({
      query: () => ({
        url: `user/update_stripe_account`,
        method: "POST",
      }),
      invalidatesTags: [USER_TAG],
    }),

    // Host listing page
    createListing: builder.mutation({
      query: (body) => ({
        url: `listing/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: [LISTING_TAG, USER_TAG],
    }),
    updateListing: builder.mutation({
      query: ({ id, body }) => ({
        url: `listing/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [LISTING_TAG],
    }),
    cancelListing: builder.mutation({
      query: (id) => ({
        url: `listing/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [LISTING_TAG],
    }),
    getAllListings: builder.query<any, any>({
      query: ({ page = 1 }) => ({
        url: `listing/me?page=${page}`,
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
      query: ({
        latitude,
        longitude,
        userId,
        price,
        sort,
        features,
        allowedStorage,
        width,
        length,
        page,
      }) => {
        const params = new URLSearchParams();

        if (latitude) params.append("latitude", latitude);
        if (longitude) params.append("longitude", longitude);
        if (userId) params.append("userId", userId);
        if (price) params.append("price", price);
        if (sort) params.append("sort", sort);
        if (features) params.append("features", features);
        if (allowedStorage) params.append("allowedStorage", allowedStorage);
        if (width) params.append("width", width);
        if (length) params.append("length", length);
        if (page) params.append("page", page);

        return {
          url: `listing/find_listing?${params.toString()}`,
          method: "GET",
        };
      },
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
      providesTags: [BOOKINGS_TAG],
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
      providesTags: [BOOKINGS_TAG],
    }),
    updateBookingStatus: builder.mutation({
      query: ({ bookingId, body }) => ({
        url: `booking/${bookingId}/status`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [BOOKINGS_TAG, SIDEBAR_TAG],
    }),
    bookingCheckIn: builder.mutation({
      query: (body) => ({
        url: `booking/check_in`,
        method: "POST",
        body,
      }),
      invalidatesTags: [BOOKINGS_TAG],
    }),
    bookingDispute: builder.mutation({
      query: (body) => ({
        url: `booking/dispute_storage`,
        method: "POST",
        body,
      }),
      invalidatesTags: [BOOKINGS_TAG],
    }),
    getBookingReceipt: builder.query<any, any>({
      query: (bookingId) => ({
        url: `booking/${bookingId}/receipt`,
        method: "GET",
      }),
    }),
    cancelBooking: builder.mutation({
      query: ({ bookingId, body = {} }) => ({
        url: `booking/${bookingId}/cancel`,
        method: "POST",
        body,
      }),
      invalidatesTags: [BOOKINGS_TAG],
    }),

    // Booking apis
    fetchPendingReviewsByRenter: builder.query<any, void>({
      query: () => ({
        url: `listing/without_review`,
        method: "GET",
      }),
      providesTags: [REVIEW_TAG],
    }),
    giveReviewToHost: builder.mutation({
      query: (body) => ({
        url: `listing/write_review_and_rating`,
        method: "POST",
        body,
      }),
      invalidatesTags: [REVIEW_TAG, SIDEBAR_TAG],
    }),
    findHostReviews: builder.query<any, void>({
      query: () => ({
        url: `listing/host_review`,
        method: "GET",
      }),
    }),
    findMyReviews: builder.query<any, void>({
      query: () => ({
        url: `listing/my_review`,
        method: "GET",
      }),
      providesTags: [REVIEW_TAG],
    }),

    // Chat apis
    findConversations: builder.query<any, any>({
      query: (page) => ({
        url: `user/conversation?page=${page}`,
        method: "GET",
      }),
      providesTags: [CONVERSATION_TAG],
    }),
    findMessages: builder.query<any, any>({
      query: ({ conversationId, page }) => ({
        url: `user/conversation/${conversationId}?page=${page}`,
        method: "GET",
      }),
    }),

    // Feedback apis
    contactUs: builder.mutation({
      query: (body) => ({
        url: `feedback`,
        method: "POST",
        body,
      }),
    }),
    customStripeConnect: builder.mutation({
      query: (body) => ({
        url: `stripe/createCustomStripeConnectAccount`,
        method: "POST",
        body,
      }),
      invalidatesTags: [STRIPE_CUSTOM_IDENTIFICATION_TAG, USER_TAG],
    }),
    uploadStripeDocuments: builder.mutation({
      query: (body) => ({
        url: `stripe/uploadDocuments`,
        method: "POST",
        body,
      }),
      invalidatesTags: [STRIPE_CUSTOM_IDENTIFICATION_TAG],
    }),
    attachBankAccount: builder.mutation({
      query: (body) => ({
        url: `stripe/attachBankAccountStripeConnect`,
        method: "POST",
        body,
      }),
      invalidatesTags: [STRIPE_CUSTOM_IDENTIFICATION_TAG,USER_TAG],
    }),
    getStripeConnectInfo: builder.query<any, void>({
      query: () => ({
        url: `stripe`,
        method: "GET",
        providesTags: [STRIPE_CUSTOM_IDENTIFICATION_TAG],
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
  useUploadImageMutation,
  useLazyGetUserQuery,
  useGetUserEarningsQuery,
  useGetHomeListingsQuery,
  useChangeUserAuthMutation,
  useSendOTPMutation,
  useUpdateUserMutation,
  useDashboardHomeQuery,
  useGetTotalNotificationsQuery,
  useReadNotificationMutation,
  useUpdateUserProfileImageMutation,
  useAddPaymentMethodMutation,
  useAddStripeConnectMutation,
  useUpdateStripeConnectMutation,
  useGetPaymentMethodsQuery,
  useRemovePaymentMethodMutation,
  useGetBankAccountsQuery,
  useLazyGetLoginLinkQuery,
  useLazyGetTransactionsQuery,
  useCreateListingMutation,
  useGetAllListingsQuery,
  useLazyGetAllListingsQuery,
  useGetListingByIdQuery,
  useFindListingQuery,
  useLazyFindListingQuery,
  useUpdateListingMutation,
  useRequestBookingMutation,
  useCancelBookingMutation,
  useFindRenterBookingsQuery,
  useLazyFindRenterBookingsQuery,
  useFindHostBookingsQuery,
  useLazyFindHostBookingsQuery,
  useUpdateBookingStatusMutation,
  useLazyCheckBookingAvailabilityQuery,
  useGetInsurancePlansQuery,
  useBookingCheckInMutation,
  useBookingDisputeMutation,
  useGetBookingReceiptQuery,
  useFindHostReviewsQuery,
  useFindMyReviewsQuery,
  useFetchPendingReviewsByRenterQuery,
  useGiveReviewToHostMutation,
  useFindConversationsQuery,
  useLazyFindConversationsQuery,
  useFindMessagesQuery,
  useLazyFindMessagesQuery,
  useCancelListingMutation,
  useContactUsMutation,
  useUploadStripeDocumentsMutation,
  useCustomStripeConnectMutation,
  useAttachBankAccountMutation,
  useGetStripeConnectInfoQuery,
} = lockedBoxApi;
