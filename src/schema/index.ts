import * as yup from "yup";

export const SignUpSchema = yup
  .object({
    email: yup.string().email("Must be a valid email"),
    phone: yup.string(),
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

export const CreatePasswordSchema = yup.object({
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirm Password is required"),
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
