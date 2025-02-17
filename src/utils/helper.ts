import { UserAuthSteps } from "../constants";

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
  }
  return url;
};
