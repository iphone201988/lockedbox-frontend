type InputProps = {
  type: string;
  name: string;
  value: string | undefined;
  className: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setFormData: React.Dispatch<React.SetStateAction<any>>
  ) => void;
  error: string | undefined;
};

type PhoneProps = {
  value: string | undefined;
  onChange: (phone: string) => void;
  error: string | undefined;
};

type SignUpFormType = {
  email: string;
  phone: string;
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
};