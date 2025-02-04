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
