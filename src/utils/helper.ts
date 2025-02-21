import { NavigateFunction } from "react-router-dom";
import { UserAuthSteps } from "../constants";
import { toast } from "react-toastify";

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
  setFormData((prev: any) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

export const getNextAuthUrl = (step: number) => {
  let url: string = "";
  switch (step) {
    case UserAuthSteps.VERIFICATION:
      url = "/verify";
      break;
    case UserAuthSteps.CREATE_PASSWORD:
      url = "/create-password";
      break;
    case UserAuthSteps.HOST_OR_RENT:
      url = "/host-or-rent";
      break;
    default:
      url = "/";
      break;
  }
  return url;
};

export const handleError = (error: any, navigate: NavigateFunction) => {
  console.log("Error:", error,error.status);
  toast.error(error.data.message);
  if (error.status == 401) {
    removeToken();
    navigate("/logout");
  }
};

export const setToken = (token: string) => localStorage.setItem("token", token);
export const removeToken = () => localStorage.removeItem("token");
export const getToken = () => localStorage.getItem("token");


