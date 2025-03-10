import { useLocation } from "react-router-dom";
import { useGetUserQuery } from "../../redux/api";

const HeaderBar = () => {
  const location = useLocation();
  const path = location.pathname;

  const { data } = useGetUserQuery();
  const role = data?.userExists.dashboardRole;

  const headerMap: any = {
    "/dashboard/home": "Dashboard",
    "/dashboard/account/basic-info": "Your Account",
    "/dashboard/booking": "Bookings",
    "/dashboard/listing": "Listings",
    "/dashboard/message": "Messages",
    "/dashboard/reviews": "Reviews",
  };
  return (
    <div className="p-[30px] border-b border-[#EEEEEE] bg-white">
      <h2 className="text-[32px] text-[#235370] font-bold">
        {headerMap[path]}
      </h2>
    </div>
  );
};

export default HeaderBar;
