import {
  AccountIcon,
  AutoPartsIcon,
  BookingIcon,
  BusinessIcon,
  ElectronicsIcon,
  FurnitureIcon,
  HelpIcon,
  HomeIcon,
  ListingIcon,
  LogoutIcon,
  MessageIcon,
  PerformanceIcon,
  RecreationIcon,
  ReviewIcon,
  SearchIcon,
  SwitchIcon,
  VehicleIcon,
} from "../icons";

export const routes = [
  { name: "Find a Space", path: "/search" },
  { name: "How it Works", path: "/" },
  { name: "Contact Us", path: "/" },
  { name: "Host your Space", path: "/dashboard/home" },
];

export const RenterRoutes = [
  { name: "Home", icon: <HomeIcon />, path: "/dashboard/home" },
  { name: "Find a space", icon: <SearchIcon />, path: "/search" },
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
  { icon: <SwitchIcon />, label: "Switch to hosting" },
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

export const allowedStorage = [
  { name: "Furniture & Household", icon: <FurnitureIcon /> },
  { name: "Auto Parts & Accessories", icon: <AutoPartsIcon /> },
  { name: "Seasonal & Recreation", icon: <RecreationIcon /> },
  { name: "Appliances & Electronics", icon: <ElectronicsIcon /> },
  { name: "Office, School & Business", icon: <BusinessIcon /> },
  { name: "Vehicles", icon: <VehicleIcon /> },
];

export const spaceType = ["Basement", "Warehouse"];

export const accessPolicyType = [
  { name: "Access requires \n appointment." },
  { name: " No appointment \n required for access." },
];

export const spaceFeatures = [
  {
    name: "Climate Control",
    id: "10",
  },
  {
    name: "Security",
    id: "11",
  },
  {
    name: "Cameras",
    id: "12",
  },
  {
    name: "Outside",
    id: "13",
  },
  {
    name: "Garage access",
    id: "14",
  },
  {
    name: "Frequent access",
    id: "15",
  },
  {
    name: "Public Transit",
    id: "16",
  },
  {
    name: "RV Parking",
    id: "17",
  },
];
