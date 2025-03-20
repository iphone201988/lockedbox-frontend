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
  { name: "Find Storage", path: "/search" },
  { name: "How it Works", path: "/" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Host your Space", path: "/dashboard/home" },
];

export const RenterRoutes = [
  { name: "Home", icon: <HomeIcon />, path: "/dashboard/home" },
  { name: "Find Storage", icon: <SearchIcon />, path: "/search" },
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
  { name: "Listings", icon: <ListingIcon />, path: "/dashboard/listing" },
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
  { icon: <AccountIcon />, label: "Account", url: "/dashboard/account" },
  { icon: <BookingIcon />, label: "Bookings", url: "/dashboard/booking" },
  { icon: <MessageIcon />, label: "Messages", url: "/dashboard/message" },
  {
    icon: <ReviewIcon />,
    label: "Reviews",
    url: "/dashboard/reviews",
    hasNotification: true,
  },
];

export const profileSubMenu = [
  { icon: <SwitchIcon />, label: "Switch to hosting" },
  { icon: <HelpIcon />, label: "Help", url: "/faq" },
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

export const spaceType = [
  "Room",
  "Basement",
  "Warehouse",
  "Closet",
  "Garage",
  "Shed",
  "Office",
  "Attic",
  "Driveway",
  "Vacant Lot",
  "Restaurant",
  "Small business",
];

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

export const HomeNotificationsType = {
  NEW_REQUEST: 1,
  CHECK_IN: 2,
  REVIEW_REQUEST: 3,
  REQUEST_ACCEPTED: 4,
};

export const FAQS = [
  {
    question:
      "Lorem Lockedbox Ipsum is simply dummy text of the printing and typesetting industry?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question:
      "Lorem Lockedbox Ipsum is simply dummy text of the printing and typesetting industry?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export const RenterBasicsContent = [
  {
    question:
      "Lorem Ipsum Lockedbox is simply dummy text of the printing and typesetting industry?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
