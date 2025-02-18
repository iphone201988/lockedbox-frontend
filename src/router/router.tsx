import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/Auth/signin";
import Signup from "../pages/Auth/signup";
import Verify from "../pages/Auth/verify";
import CreatePassword from "../pages/Auth/create-password";
import ForgotPassword from "../pages/Auth/forgot-password";
import ResetPassword from "../pages/Auth/reset-password";
import HostOrRent from "../pages/Auth/host-or-rent";
import PasswordSuccess from "../pages/Auth/password-success";
import Search from "../pages/Search";
import ListingDetail from "../pages/ListingDetail";
import SearchResult from "../pages/SearchResult";
import BookingReview from "../pages/BookingReview";
import DashboardLayout from "../layout/Dashboard";
import RenterAccount from "../pages/Dashboard/Renter/Account";
import RenterBasicInfo from "../pages/Dashboard/Renter/Account/BasicInfo";
import RenterProfile from "../pages/Dashboard/Renter/Account/Profile";
import RenterSecurity from "../pages/Dashboard/Renter/Account/Security";
import RenterNotification from "../pages/Dashboard/Renter/Account/Notification";
import RenterPayment from "../pages/Dashboard/Renter/Account/Payment";
import RenterHome from "../pages/Dashboard/Renter/Home";
import RenterBooking from "../pages/Dashboard/Renter/Booking";
import RenterMessage from "../pages/Dashboard/Renter/Message";
import RenterReviews from "../pages/Dashboard/Renter/Reviews";
import ReviewYourHost from "../pages/Dashboard/Renter/GiveReview";
import HostHome from "../pages/Dashboard/Host/Home";
import HostListings from "../pages/Dashboard/Host/Listing";
import CreateListing from "../pages/Dashboard/Host/CreateListing";
import PublicRoute from "../components/Route/public-route";
import Logout from "../pages/Logout";

const host = true;

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  {
    path: "/verify",
    element: (
      <PublicRoute>
        <Verify />
      </PublicRoute>
    ),
  },
  {
    path: "/create-password",
    element: (
      <PublicRoute>
        <CreatePassword />
      </PublicRoute>
    ),
  },
  {
    path: "/host-or-rent",
    element: <HostOrRent />,
  },
  {
    path: "/signin",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <PublicRoute>
        <ResetPassword />
      </PublicRoute>
    ),
  },
  {
    path: "/password-success",
    element: (
      <PublicRoute>
        <PasswordSuccess />
      </PublicRoute>
    ),
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/listing-details",
    element: <ListingDetail />,
  },
  {
    path: "/search-results",
    element: <SearchResult />,
  },
  {
    path: "/booking-review",
    element: <BookingReview />,
  },
  //   {
  //     path: "/",
  //     element: (
  //       <PublicRoute>
  //         <Auth />
  //       </PublicRoute>
  //     ),
  //   },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // {
      //   path: "",
      //   element: (
      //     <ProtectedRoute>
      //       <Home />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "home",
        element: host ? <HostHome /> : <RenterHome />,
      },
      {
        path: "account",
        element: <RenterAccount />,
        children: [
          { path: "basic-info", element: <RenterBasicInfo /> },
          { path: "profile", element: <RenterProfile /> },
          { path: "security", element: <RenterSecurity /> },
          { path: "notification", element: <RenterNotification /> },
          { path: "payment", element: <RenterPayment /> },
        ],
      },
      {
        path: "booking",
        element: <RenterBooking />,
      },
      {
        path: "listing",
        element: <HostListings />,
      },
      {
        path: "listing/create-listing",
        element: <CreateListing />,
      },
      {
        path: "message",
        element: <RenterMessage />,
      },
      {
        path: "reviews",
        element: <RenterReviews />,
      },
      {
        path: "reviews/give-review",
        element: <ReviewYourHost />,
      },
    ],
  },
]);

export default Router;
