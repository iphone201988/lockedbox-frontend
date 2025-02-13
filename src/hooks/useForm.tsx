import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { validateForm } from "../schema";

export const useForm = <T extends yup.AnyObject>(
  schema: yup.ObjectSchema<T>,
  initialState: T,
  successRedirectPath: string = "/" // Default redirect path
) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<T>(initialState);
  const [errors, setErrors] = useState<T>(initialState);

  const handleSubmit = async () => {
    const validationErrors: any = await validateForm(schema, formData);

    console.log("validationErrors:::", validationErrors);

    if (validationErrors) {
      setErrors(validationErrors);
      return false;
    } else {
      setErrors(initialState);
    }

    // navigate(successRedirectPath);
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    errors,
  };
};
