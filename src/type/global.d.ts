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
};

type VerifyPopUp = {
  title: string;
  placeholder: string;
  type: string;
};

type BookingCard = {
  type: "future" | "current" | "past" | "dispute";
};

type CommonListing = {
  type: "RenterHome" | "HostHome" | "Review";
  btnTxt: string;
  path: string;
  checkout?: boolean;
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
