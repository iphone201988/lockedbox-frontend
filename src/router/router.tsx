import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "../layout/Dashboard";
import PublicRoute from "../components/Route/public-route";
import HostAccess from "../components/Route/host-access";
import Loader from "../components/Loader";
import Reviews from "../pages/Dashboard/Review";
import ChatLayout from "../layout/Chat";
import MessageArea from "../components/Dashboard/Chat/MessageArea";
import AdminLogin from "../pages/Admin/Auth";
import AdminHome from "../pages/Admin/Home";
import AdminDashboardLayout from "../layout/Admin";
import AdminAccount from "../pages/Admin/Home/User/Account";
import AdminListing from "../pages/Admin/Home/User/Listing";
import AdminBooking from "../pages/Admin/Home/User/Booking";
import AdminDispute from "../pages/Admin/Home/User/Dispute";
import AdminCheckIN from "../pages/Admin/Home/User/CheckIn";
import AdminLogout from "../pages/Admin/Logout";
import BookingReceipt from "../pages/Dashboard/BookingReceipt";
import ContactUs from "../pages/ContactUs";
import FAQ from "../pages/FAQ";
import RenterBasics from "../pages/RenterBasics";
import PageNotFound from "../pages/404";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import AdminUserHome from "../pages/Admin/Home/User";
import SupportCentre from "../pages/SupportCentre";
// import StripeOnboaridng from "../pages/Dashboard/Host/StripeOnboarding";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const SignIn = lazy(() => import("../pages/Auth/signin"));
const Signup = lazy(() => import("../pages/Auth/signup"));
const Verify = lazy(() => import("../pages/Auth/verify"));
const CreatePassword = lazy(() => import("../pages/Auth/create-password"));
const ForgotPassword = lazy(() => import("../pages/Auth/forgot-password"));
const ResetPassword = lazy(() => import("../pages/Auth/reset-password"));
const HostOrRent = lazy(() => import("../pages/Auth/host-or-rent"));
const PasswordSuccess = lazy(() => import("../pages/Auth/password-success"));
const Search = lazy(() => import("../pages/Search"));
const ListingDetail = lazy(() => import("../pages/ListingDetail"));
const SearchResult = lazy(() => import("../pages/SearchResult"));
const BookingReview = lazy(() => import("../pages/BookingReview"));
const Logout = lazy(() => import("../pages/Logout"));
const CheckIn = lazy(() => import("../pages/Dashboard/CheckIn"));

// Renter Dashboard Pages
const RenterHome = lazy(() => import("../pages/Dashboard/Home"));
const RenterAccount = lazy(() => import("../pages/Dashboard/Account"));
const RenterBasicInfo = lazy(
  () => import("../pages/Dashboard/Account/BasicInfo")
);
const RenterProfile = lazy(() => import("../pages/Dashboard/Account/Profile"));
const RenterSecurity = lazy(
  () => import("../pages/Dashboard/Account/Security")
);
const RenterNotification = lazy(
  () => import("../pages/Dashboard/Account/Notification")
);
const RenterPayment = lazy(() => import("../pages/Dashboard/Account/Payment"));
const Booking = lazy(() => import("../pages/Dashboard/Booking"));
const ReviewYourHost = lazy(
  () => import("../pages/Dashboard/Renter/GiveReview")
);

// Host Dashboard Pages
const HostListings = lazy(() => import("../pages/Dashboard/Host/Listing"));
const CreateListing = lazy(
  () => import("../pages/Dashboard/Host/CreateListing")
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/logout",
    element: (
      <Suspense fallback={<Loader />}>
        <Logout />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loader />}>
        <PublicRoute>
          <Signup />
        </PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "/verify",
    element: (
      <Suspense fallback={<Loader />}>
        <PublicRoute>
          <Verify />
        </PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "/create-password",
    element: (
      <Suspense fallback={<Loader />}>
        <PublicRoute>
          <CreatePassword />
        </PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "/host-or-rent",
    element: (
      <Suspense fallback={<Loader />}>
        <HostOrRent />
      </Suspense>
    ),
  },
  {
    path: "/signin",
    element: (
      <Suspense fallback={<Loader />}>
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<Loader />}>
        <PublicRoute>
          <ForgotPassword />
        </PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<Loader />}>
        <PublicRoute>
          <ResetPassword />
        </PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "/password-success",
    element: (
      <Suspense fallback={<Loader />}>
        <PublicRoute>
          <PasswordSuccess />
        </PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "/search",
    element: (
      <Suspense fallback={<Loader />}>
        <Search />
      </Suspense>
    ),
  },
  {
    path: "/listing-details/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <ListingDetail />
      </Suspense>
    ),
  },
  {
    path: "/search-results",
    element: (
      <Suspense fallback={<Loader />}>
        <SearchResult />
      </Suspense>
    ),
  },
  {
    path: "/booking-review/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <BookingReview />
      </Suspense>
    ),
  },
  {
    path: "/faq",
    element: (
      <Suspense fallback={<Loader />}>
        <FAQ />
      </Suspense>
    ),
  },
  {
    path: "/about-us",
    element: (
      <Suspense fallback={<Loader />}>
        <AboutUs />
      </Suspense>
    ),
  },
  {
    path: "/terms-and-conditions",
    element: (
      <Suspense fallback={<Loader />}>
        <TermsAndConditions />
      </Suspense>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <Suspense fallback={<Loader />}>
        <PrivacyPolicy />
      </Suspense>
    ),
  },
  {
    path: "/support-centre",
    element: (
      <Suspense fallback={<Loader />}>
        <SupportCentre />
      </Suspense>
    ),
  },
  {
    path: "/renter-basics",
    element: (
      <Suspense fallback={<Loader />}>
        <RenterBasics />
      </Suspense>
    ),
  },
  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      {
        path: "home",
        element: <AdminHome />,
      },
      {
        path: "user",
        element: <AdminUserHome />,
        children: [
          { path: "account/:id?", element: <AdminAccount /> },
          { path: "listings/:id?", element: <AdminListing /> },
          { path: "bookings/:id?", element: <AdminBooking /> },
          { path: "disputes/:id?", element: <AdminDispute /> },
          { path: "check-in/:id?", element: <AdminCheckIN /> },
        ],
      },
      {
        path: "logout",
        element: <AdminLogout />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "booking/:bookingId/receipt",
    element: (
      <Suspense fallback={<Loader />}>
        <BookingReceipt />
      </Suspense>
    ),
  },
  {
    path: "contact-us",
    element: (
      <Suspense fallback={<Loader />}>
        <ContactUs />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<Loader />}>
            <RenterHome />
          </Suspense>
        ),
      },
      {
        path: "account",
        element: (
          <Suspense fallback={<Loader />}>
            <RenterAccount />
          </Suspense>
        ),
        children: [
          {
            path: "basic-info",
            element: (
              <Suspense fallback={<Loader />}>
                <RenterBasicInfo />
              </Suspense>
            ),
          },
          {
            path: "profile",
            element: (
              <Suspense fallback={<Loader />}>
                <RenterProfile />
              </Suspense>
            ),
          },
          {
            path: "security",
            element: (
              <Suspense fallback={<Loader />}>
                <RenterSecurity />
              </Suspense>
            ),
          },
          {
            path: "notification",
            element: (
              <Suspense fallback={<Loader />}>
                <RenterNotification />
              </Suspense>
            ),
          },
          {
            path: "payment",
            element: (
              <Suspense fallback={<Loader />}>
                <RenterPayment />
              </Suspense>
            ),
          },
        ],
      },


// okay sir
// Before committing your code, undo this file


      // {
      //   path: "stripe-onboarding",
      //   element: (
      //     <Suspense fallback={<Loader />}>
      //       <StripeOnboaridng />
      //     </Suspense>
      //   ),
      // },
      {
        path: "booking",
        element: (
          <Suspense fallback={<Loader />}>
            <Booking />
          </Suspense>
        ),
      },
      {
        path: "booking/:bookingId/check-in/:listingId",
        element: (
          <Suspense fallback={<Loader />}>
            <CheckIn />
          </Suspense>
        ),
      },
      {
        path: "listing",
        element: (
          <Suspense fallback={<Loader />}>
            <HostAccess>
              <HostListings />
            </HostAccess>
          </Suspense>
        ),
      },
      {
        path: "listing/create-listing",
        element: (
          <Suspense fallback={<Loader />}>
            <HostAccess>
              <CreateListing />
            </HostAccess>
          </Suspense>
        ),
      },
      {
        path: "listing/edit-listing/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <HostAccess>
              <CreateListing />
            </HostAccess>
          </Suspense>
        ),
      },
      {
        path: "message",
        element: (
          <Suspense fallback={<Loader />}>
            <ChatLayout />
          </Suspense>
        ),
        children: [
          {
            path: ":id",
            element: (
              <Suspense fallback={<Loader />}>
                <MessageArea />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "reviews",
        element: (
          <Suspense fallback={<Loader />}>
            <Reviews />
          </Suspense>
        ),
      },
      {
        path: "reviews/give-review/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ReviewYourHost />
          </Suspense>
        ),
      },
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);

export default Router;
