import {
  AccountIcon,
  AutoPartsIcon,
  BookingIcon,
  BusinessIcon,
  ElectronicsIcon,
  FurnitureIcon,
  HelpIcon,
  HomeIcon,
  HomePageAppliancesIcon,
  HomePageAutoPartsIcons,
  HomePageFurtinureIcon,
  HomePageOfficeIcon,
  HomePageSeasonalIcon,
  HomePageVehichleIcon,
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
  { name: "Become a Host", path: "/dashboard/home" },
];

export const RenterRoutes = [
  { name: "Home", icon: <HomeIcon />, path: "/dashboard/home" },
  { name: "Find Storage", icon: <SearchIcon />, path: "/search-results" },
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
  { icon: <HomeIcon />, label: "Home", url: "/dashboard/home" },
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
  {
    name: "Furniture & Household",
    icon: <FurnitureIcon />,
    homePageIcon: <HomePageFurtinureIcon />,
  },
  {
    name: "Auto Parts & Accessories",
    icon: <AutoPartsIcon />,
    homePageIcon: <HomePageAutoPartsIcons />,
  },
  {
    name: "Seasonal & Recreation",
    icon: <RecreationIcon />,
    homePageIcon: <HomePageSeasonalIcon />,
  },
  {
    name: "Appliances & Electronics",
    icon: <ElectronicsIcon />,
    homePageIcon: <HomePageAppliancesIcon />,
  },
  {
    name: "Office, School & Business",
    icon: <BusinessIcon />,
    homePageIcon: <HomePageOfficeIcon />,
  },
  {
    name: "Vehicles",
    icon: <VehicleIcon />,
    homePageIcon: <HomePageVehichleIcon />,
  },
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

export const frequencyPolicy = [
  "Upon Request",
  "Daily",
  "Weekly",
  "Monthly",
  "Weekends Only",
  "M-F",
  "24/7",
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

export const RenterFAQS = [
  {
    question: "What is LockedBox?",
    answer:
      "We are a platform that helps you find a place to store your stuff for less and closer to home! You can browse available spaces, book a space, and then securely store your belongings.",
  },
  {
    question: "Is it safe?",
    answer:
      "All hosts are vetted and storage spaces are often monitored by the hosts themselves. Some listings may offer additional security features such as cameras, locks, or gated access. You view each listing's security details before booking.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      `You get 100% free cancellation 5 days or more prior to reservation start. If you cancel within 4 days of the reservation start date, you get a 75% refund.\n\nIf a monthly contract has started, the day you start your contract is the “anniversary date”. In order to cancel the rest of your contract free of charge, you must cancel before this date. If you cancel after your anniversary date, you forfeit the current month and service fee.\n\nExample - If you book storage from May 1st to August 1st, your “anniversary date” is the first of every month. May 1st, June 1st, July 1st.  We assume on May 15th, you decide you want to move to a larger space. You cancel on May 15th. You will receive a full refund for June 1 - August 1, or two unused months.\n\nIf you decide to cancel on June 3rd instead, you will get a refund July 1 - August 1. There is no refund for the month of June despite removing your items.`,
  },
  {
    question: "Is my property/items insured?",
    answer:
      "We do not currently offer any insurance. However, you may let your existing insurance policy know (example your renters insurance) and they potentially will endorse and extend their coverage to the temporary storage location.",
  },
  {
    question: "What am I allowed to store?",
    answer:
      "We allow common household items, office/school related, recreational items, autoparts, and vehicles. See Permitted Belongings for a full list. Hazardous materials, illegal items, perishables and highly valuable goods are prohibited. You may review our Prohibited Items Policy within our Terms of Service for more details.",
  },
  {
    question: "How much does it cost to rent storage space?",
    answer:
      "Prices vary based on location, space, and amenities. In general the larger and more urban the space is, the higher the price it will be.",
  },
  {
    question: "How do I access my stored items?",
    answer:
      "Access policies vary by host. Some hosts may allow 24/7 visits, while others may require advanced notice. You can view the access policy on the space listing. We provide a messaging function to help coordinate access with hosts.",
  },
  {
    question: "What happens if I don’t pay my rental fees?",
    answer:
      "Rental fees are charged automatically every month. If you do not pay your rental fees, you may be restricted access, imposed late fees, or even have your items disposed of after a certain period. We encourage renters to stay on-top of payments.",
  },
  {
    question: "What happens if my items are lost or damaged?",
    answer:
      "If damage or loss occurs, renters should report the issue to LockedBox.",
  },
  {
    question: "What is the 12% service fee?",
    answer:
      "Our platform collects a 12% fee in addition to your booking amount to help cover platform maintenance, customer support, and dispute resolution.",
  },
];

export const HostFAQS = [
  {
    question: "How does hosting on LockedBox work?",
    answer:
      "We provide you a platform to list your available storage space, set your own prices, and rent it out to people who need storage. Renters book the space and you earn money each month for safekeeping their stuff.",
  },
  {
    question: "Does being a host cost money?",
    answer:
      "Hosting on our platform is free! We do require you to pay to use any of our services. We do collect a 3% fee from each booking to help cover platform maintenance, customer support, and dispute resolution.",
  },
  {
    question: "What kind of spaces can I rent out?",
    answer:
      "We allow hosts to rent out their garages, basements, attics, spare rooms, sheds, and driveways. Spaces should be dry, secure, and accessible.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Earnings depend on your space size, location, and demand. Spaces in urban areas or those that are climate controlled generally fetch a higher price.",
  },
  {
    question: "What is the cancellation policy for hosts?",
    answer:
      "If the booking has not started, hosts may cancel without penalty. If a booking has started, hosts must give 30 days notice to the renter or be charged a $70 cancellation fee.",
  },
  {
    question: "What kind of items are allowed?",
    answer:
      "We allow typical household items, office/school related, recreational items, autoparts, and vehicles. We do not allow hazardous materials, perishables, illegal substances, and flammable liquids. A full list can be found in our Prohibited Items Policy within our Terms of Service. You are encouraged to review and enforce these policies for everyone’s safety.",
  },
  {
    question: "How do I handle renter access?",
    answer:
      "We leave access frequency and processes to the host. You may indicate the frequency the renter can access their items (daily, weekly, 24/7 etc.) when creating the listing. We provide you a messaging function to make coordinating access with the renter as simple as possible. We ask renters to respect the frequency indicated by you and also to do your best to adhere to the frequency you indicated.",
  },
  {
    question: "What happens if a renter stops paying?",
    answer:
      "If a renter stops paying, you may restrict access after 14 days. The renter may be charged a late fee which will be compensated to you. If the renter continues to not pay, you are entitled to dispose of their items after 60 days.",
  },
  {
    question: "What if a renter damages my property?",
    answer:
      "If a renter damages your storage space, they may be held liable and are responsible for the repairs or compensation. If this occurs, please document the damage and report it to damages@lockedbox.ca.",
  },
  {
    question: "Can I decline a renter?",
    answer:
      "Yes, you are able to choose who you rent to. We ask to limit rejections to those who request to store prohibited items or appear unreliable. We do not tolerate renter discrimination.",
  },
  {
    question: "How do taxes work on my earnings?",
    answer:
      "You must report your rental income to the CRA and you may deduct eligible expenses like insurance and maintenance. If earnings exceed $30,000/year, the CRA may need to register for GST/HST. Renting out space could also impact home insurance and property taxes, so it's best to check with your provider.",
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

export const RenterCancellationPolicies = [
  "A: 100% free cancellation 5 days or more prior to reservation start. Refund listing fee and service fees",
  "B: 75% refund if the renter cancels within 4 days. No refund of service fee.",
  "C: If a monthly contract has started, cancellation of the next month and remaining months can only occur on or before the anniversary date free of charge. If a renter cancels after their anniversary date, they lose out on the next month and service fee.",
];

export const HostCancellationPolicies = [
  "The host is entitled to the following cancellation policy: the host must provide 30 day notice. If the host fails to provide a 30 day notice, they will be charged a $70 cancellation fee.",
];
