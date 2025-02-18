import {
  AccountIcon,
  BookingIcon,
  HelpIcon,
  HomeIcon,
  ListingIcon,
  LogoutIcon,
  MessageIcon,
  PerformanceIcon,
  ReviewIcon,
  SearchIcon,
  SwitchIcon,
} from "../icons";

export const RenterRoutes = [
  { name: "Home", icon: <HomeIcon />, path: "/dashboard/home" },
  { name: "Find a space", icon: <SearchIcon />, path: "" },
  {
    name: "Account",
    icon: <AccountIcon />,
    path: "/dashboard/account/basic-info",
  },
  { name: "Bookings", icon: <BookingIcon />, path: "/dashboard/booking" },
  { name: "Messages", icon: <MessageIcon />, path: "/dashboard/message" },
  {
    name: "Reviews",
    icon: <ReviewIcon />,
    path: "/dashboard/reviews",
    notify: true,
  },
];

export const HostRoutes = [
  { name: "Home", icon: <HomeIcon />, path: "/dashboard/home" },
  {
    name: "Account",
    icon: <AccountIcon />,
    path: "/dashboard/account/basic-info",
  },
  { name: "Listing", icon: <ListingIcon />, path: "/dashboard/listing" },
  { name: "Bookings", icon: <BookingIcon />, path: "/dashboard/booking" },
  { name: "Messages", icon: <MessageIcon />, path: "/dashboard/message" },
  {
    name: "Performance & Reviews",
    icon: <PerformanceIcon />,
    path: "/dashboard/reviews",
    notify: true,
  },
];

export const profileMenu = [
  { icon: <HomeIcon />, label: "Home", url: "/" },
  { icon: <SearchIcon />, label: "Find a space", url: "/search" },
  { icon: <AccountIcon />, label: "Account", url: "/account" },
  { icon: <BookingIcon />, label: "Bookings", url: "/bookings" },
  { icon: <MessageIcon />, label: "Messages", url: "/messages" },
  {
    icon: <ReviewIcon />,
    label: "Reviews",
    url: "/reviews",
    hasNotification: true,
  },
];

export const profileSubMenu = [
  { icon: <SwitchIcon />, label: "Switch to hosting", url: "/hosting" },
  { icon: <HelpIcon />, label: "Help", url: "/help" },
  { icon: <LogoutIcon />, label: "Log-out", url: "/logout" },
];

export const UserAuthSteps = {
  VERIFICATION: 1,
  CREATE_PASSWORD: 2,
  HOST_OR_RENT: 3,
};

export const OtpType = {
  REGISTER: 1,
  RESEND_REGISTER: 2,
  FORGET: 3,
  RESEND_FORGET: 4,
};
