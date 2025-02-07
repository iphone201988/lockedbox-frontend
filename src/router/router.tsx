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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/create-password",
    element: <CreatePassword />,
  },
  {
    path: "/host-or-rent",
    element: <HostOrRent />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/password-success",
    element: <PasswordSuccess />,
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
    ],
  },
]);

export default Router;
