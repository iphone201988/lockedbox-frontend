import { useLocation } from "react-router-dom";
import { useGetUserQuery } from "../../redux/api";
import { HamburgerIcon } from "../../icons";
import { Dispatch, SetStateAction } from "react";

const HeaderBar = ({
  setShowSidebar,
}: {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
  const location = useLocation();
  const path = location.pathname;

  const { data } = useGetUserQuery();
  const role = data?.userExists.dashboardRole;

  const headerMap: any = {
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
    if (path.includes("/dashboard/home")) {
      header = `${role == "host" ? "Host" : "Renter"} Dashboard`;
    }
  }

  return (
    <div className="p-[30px] border-b border-[#EEEEEE] bg-white flex items-center justify-between max-lg:p-[20px] ">
      <h2 className="text-[32px] text-[#235370] font-bold">{header}</h2>

      {/* added hamburger menu for responsive */}
      <button
        className=" hidden max-lg:block relative "
        onClick={() => setShowSidebar((prev: boolean) => !prev)}
      >
        <HamburgerIcon />
      </button>
    </div>
  );
};

export default HeaderBar;
