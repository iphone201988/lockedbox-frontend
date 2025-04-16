import * as yup from "yup";

export const SignUpSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Must be a valid email"),
    phone: yup.string(),
    countryCode: yup.string(),
  })
  .test(
    "email-or-phone",
    "Either email or phone must be provided",
    function (value) {
      const { email, phone } = value;
      if (!email && !phone) {
        return this.createError({
          path: "email", // Key for error
          message: "Either email or phone must be provided",
        });
      }
      return true;
    }
  );

export const SignInSchema = yup
  .object({
    email: yup.string().email("Must be a valid email"),
    phone: yup.string(),
    countryCode: yup.string(),
    password: yup.string().required("Password is required"),
  })
  .test(
    "email-or-phone",
    "Either email or phone must be provided",
    function (value) {
      const { email, phone } = value;
      if (!email && !phone) {
        return this.createError({
          path: "email", // Key for error
          message: "Either email or phone must be provided",
        });
      }
      return true;
    }
  );

export const ForgotPasswordSchema = yup
  .object({
    email: yup.string().email("Must be a valid email"),
    phone: yup.string(),
    countryCode: yup.string(),
  })
  .test(
    "email-or-phone",
    "Either email or phone must be provided",
    function (value) {
      const { email, phone } = value;
      if (!email && !phone) {
        return this.createError({
          path: "email", // Key for error
          message: "Either email or phone must be provided",
        });
      }
      return true;
    }
  );
export const CreatePasswordSchema = yup.object({
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const UpdatePasswordSchema = yup.object({
  oldPassword: yup.string().required("Old Password is required"),
  newPassword: yup.string().required("New Password is required"),
});

export const BasicInfoSchema = yup.object({
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  email: yup.string().email("Must be a valid email").optional(),
  phone: yup.string().optional(),
  countryCode: yup.string().optional(),
});

export const ProfileSchema = yup.object({
  bio: yup.string().optional(),
  address: yup.string().optional(),
  city: yup.string().optional(),
  latitude: yup.string().optional(),
  longitude: yup.string().optional(),
  work: yup.string().optional(),
});

export const VerifyPhonechema = yup.object({
  phone: yup.string().required("Phone is required"),
  countryCode: yup.string().required("Country Code is required"),
});
export const VerifyEmailSchema = yup.object({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
});

export const AddCardSchema = yup.object({
  name: yup.string().required("Cardholder name is required"),
});
export const VerificationCodeSchema = yup.object({
  otp: yup.number().required("OTP is required"),
});

export const StepOneSchema = yup.object({
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  latitude: yup.string().required("Latitude is required"),
  longitude: yup.string().required("Longitude is required"),
  spaceType: yup.string().required("Space type is required"),
  features: yup
    .array()
    .optional()
    .of(
      yup.object().shape({
        id: yup.string().required("Feature ID is required"),
        name: yup.string().required("Feature name is required"),
      })
    ),
  // .required("Features are required")
  // .min(1, "At least one feature is required"),
  allowedStorage: yup
    .array()
    .of(yup.string())
    .required("Allowed storage is required")
    .min(1, "At least one allowed storage is required"),
  length: yup.string().required("Length is required"),
  width: yup.string().required("Width is required"),
  price: yup.string().required("Price is required"),
});

export const StepTwoSchema = yup.object({
  description: yup.string().required("Description is required"),
  policies: yup.string().required("Policies are required"),
  accessPolicy: yup.string().required("Access policy is required"),
  frequency: yup.string().required("Frequency is required"),
  storageImages: yup
    .array()
    .of(yup.mixed())
    .min(1, "You must have to upload 1 image")
    .required("Storage images are required"),
});

export const SearchPropertySchema = yup.object({
  address: yup.string().required("Address is required"),
  latitude: yup.string().required("Latitude is required"),
  longitude: yup.string().required("Longitude is required"),
  length: yup.string().optional(),
  width: yup.string().optional(),
});

export const BillingAddressSchema = yup.object({
  street: yup.string().required("Address is required"),
  country: yup.string().required("City is required"),
  province: yup.string().required("State is required"),
  postalCode: yup.string().required("Zip is required"),
});

export const ContactUsSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

export const validateForm = async (
  schema: yup.ObjectSchema<any>,
  data: any
) => {
  try {
    console.log("data::::::::", data);
    await schema.validate(data, {
      abortEarly: false,
    });
  } catch (error: any) {
    const formattedErrors: Record<string, string> = {};
    error.inner.forEach((err: any) => {
      if (err.type == "at-least-one") {
        formattedErrors.phone = err.message;
        formattedErrors.email = err.message;
      }
      if (err.path) {
        formattedErrors[err.path] = err.message;
      }
    });

    return formattedErrors;
  }
};
