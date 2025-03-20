import { useLocation } from "react-router-dom";
import { useGetUserQuery } from "../../redux/api";

const HeaderBar = () => {
  const location = useLocation();
  const path = location.pathname;

  const { data } = useGetUserQuery();
  const role = data?.userExists.dashboardRole;

  const headerMap: any = {
    "/dashboard/home": "Dashboard",
    "/dashboard/booking": "Bookings",
    "/dashboard/listing": "Listings",
    "/dashboard/reviews": `${
      role == "host" ? "Performance & Reviews" : "Reviews"
    }`,
  };
  let header = "";
  if (headerMap[path]) {
    header = headerMap[path];
  } else {
    if (path.includes("check-in")) {
      header = `${role == "host" ? "Host" : "Renter"} Check In`;
    }
    if (path.includes("/dashboard/account")) {
      header = `Your Account`;
    }
    if (path.includes("/dashboard/message")) {
      header = `Messages`;
    }
    if (path.includes("/dashboard/listing/create-listing")) {
      header = `Create Listing`;
    }
  }

  return (
    <div className="p-[30px] border-b border-[#EEEEEE] bg-white">
      <h2 className="text-[32px] text-[#235370] font-bold">{header}</h2>
    </div>
  );
};

export default HeaderBar;
