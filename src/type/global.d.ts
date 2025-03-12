type InputProps = {
  type: string;
  name: string;
  value: string | number | undefined;
  className: string;
  placeholder: string;
  onChange: any;
  error: string | undefined;
  disable?: boolean;
};

type SelectProps = {
  options: string[];
  className: string;
  value: string;
  name: string;
  onChange: any;
  error: string | undefined;
};

type PasswordProps = {
  value: string;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  error: string;
  name: string;
  classes: string;
  placeholder: string;
};

type PhoneProps = {
  value: string | undefined;
  onChange?: (phone: string, data: any) => void;
  error: string | undefined;
  disable?: boolean;
};

type VerificationPopupProps = {
  setShowPopup: React.Dispatch<React.SetStateAction<any>>;
};
type VerificationCodePopupProps = {
  setShowPopup: React.Dispatch<React.SetStateAction<any>>;
  showPopup: any;
  refetch: () => void;
};

type SignUpFormType = {
  email: string;
  phone: string;
  countryCode: string;
};

type AuthType = {
  email: boolean;
  phone: boolean;
};

type VerifyFormType = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

type CreatePasswordFormType = {
  password: string;
  confirmPassword: string;
};

type SearchFilters = {
  items: boolean;
  price: boolean;
  sort: boolean;
  main: boolean;
};

type RenterProfileFormType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type PaymentMethodProps = {
  brand: string;
  last4: string;
  paymentMethodId: string;
  refetch: () => void;
  remove?: boolean;
};

type VerifyPopUp = {
  title: string;
  placeholder: string;
  type: string;
};

type BookingCard = {
  booking: any;
  type: "future" | "current" | "past" | "dispute";
  role: string;
};

type CommonListing = {
  type: "RenterHome" | "HostHome" | "Review";
  btnTxt: string;
  path: string;
  checkout?: boolean;
  booking?: any;
};

type UserState = {
  id: string;
  email: string;
  phone: string;
  countryCode: string;
};

type CustomOptionProps = {
  name: string;
  icon?: JSX.Element;
};

type ListingType = {
  id: string;
  address: string;
  spaceType: string;
  city: string;
  status: string;
  length: number;
  width: number;
  price: number;
  storageImages: string[];
  allowedStorage: string[];
};

type CustomOptions = {
  options: CustomOptionProps[];
  handleChange: any;
  className: string;
  value: any;
  name: string;
  error?: string | undefined;
  multiple?: boolean;
};

type Properties = {
  id: string;
  image: string;
  title: string;
  lat: number;
  lng: number;
  distance: number;
  price: number;
  totalReviews: number;
  averageRating: number;
};

interface ImageItem {
  id: string; // Unique identifier (URL for existing, temp URL for new)
  url: string; // Display URL
  isNew?: boolean; // True for new images, false for existing
  file?: File; // File object for new images, undefined for existing
}

type CheckInPopup = {
  listing: any;
  handleClose: any;
  dispute: boolean;
  imageItems: ImageItem[];
  setImageItems: React.Dispatch<React.SetStateAction<ImageItem[]>>;
  role: string;
};

type ChatProfileProps = {
  conversationId: string;
  lastMessage: string;
  profile: {
    firstName: string;
    lastName: string;
    profileImage: string;
  };
};

type HomeNotifications = {
  id: string;
  spaceType: string;
  city: string;
  image: string;
  description: string;
  path: string;
  btnText: string;
};

// Admin

type AdminAccountType = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  profileImage: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isStripeAccountConnected: boolean;
  isAccountBanByAdmin: boolean;
};

type AdminListingType = {
  id: string;
  city: string;
  spaceType: string;
  address: string;
  price: string;
  status: string;
  image: string;
  length: number;
  width: number;
  allowedStorage: any;
};