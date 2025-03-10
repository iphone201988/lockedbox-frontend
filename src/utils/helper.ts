import { NavigateFunction } from "react-router-dom";
import { HomeNotificationsType, UserAuthSteps } from "../constants";
import { toast } from "react-toastify";
import moment from "moment";

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
  console.log("Error:", error, error.status);
  toast.error(error.data.message);
  if (error.status == 401) {
    removeToken();
    navigate("/logout");
  }
};

export const setToken = (token: string) => localStorage.setItem("token", token);
export const removeToken = () => localStorage.removeItem("token");
export const getToken = () => localStorage.getItem("token");

export const urlToFile = async (url: string) => {
  const fileName = url.split("/").pop();
  const mimeType = url.split(".").pop()?.toLowerCase();

  console.timeLog("urlToFile::::", fileName, mimeType);

  const response = await fetch(url);
  const blob = await response.blob();
  return new File([blob], fileName ?? "", { type: mimeType });
};

export const getUrl = (path: string) => import.meta.env.VITE_BACKEND_URL + path;

export const groupedData = (data: any) => {
  const grouped = data.reduce((acc: any, item: any) => {
    const itemDate = moment(item.createdAt);
    const today = moment();
    const yesterday = moment().subtract(1, "days");

    let key;
    if (itemDate.isSame(today, "day")) {
      key = "today";
    } else if (itemDate.isSame(yesterday, "day")) {
      key = "yesterday";
    } else {
      key = itemDate.format("DD MMM YYYY");
    }

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);
    return acc;
  }, {});

  // Sort the keys based on date, ensuring "today" is last
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    if (a === "today") return 1;
    if (b === "today") return -1;
    return moment(a, "DD MMM YYYY").diff(moment(b, "DD MMM YYYY"));
  });

  return sortedKeys.reduce((acc: any, key: string) => {
    acc[key] = grouped[key].sort((a: any, b: any) =>
      moment(a.createdAt).diff(moment(b.createdAt))
    ); // Sort messages inside each key
    return acc;
  }, {});
};

export const getHomeKeys = (
  type: number,
  role: string,
  name: string,
  startDate: string,
  bookingId: string,
  listingId: string
) => {
  const currentDate = moment.utc();
  const differenceInDays = currentDate.diff(moment.utc(startDate), "days");

  let obj = { description: "", path: "", btnText: "" };

  switch (type) {
    case HomeNotificationsType.NEW_REQUEST:
      obj = {
        description:
          role == "host"
            ? `New request from ${name}`
            : `The host is reviewing your request`,
        path: "/dashboard/booking",
        btnText: "View Request",
      };
      break;
    case HomeNotificationsType.CHECK_IN:
      obj = {
        description: `Check-in date in ${differenceInDays} days`,
        path: `/dashboard/booking/${bookingId}/check-in/${listingId}`,
        btnText: `Check-in in ${differenceInDays} days`,
      };
      break;
    case HomeNotificationsType.REVIEW_REQUEST:
      obj = {
        description: "Leave a review for your recent rental",
        path: "/dashboard/reviews",
        btnText: "Begin Review",
      };
      break;
    case HomeNotificationsType.REQUEST_ACCEPTED:
      obj = {
        description: "Your reservation was confirmed",
        path: "/dashboard/booking",
        btnText: "View Request",
      };
      break;
  }

  return obj;
};
