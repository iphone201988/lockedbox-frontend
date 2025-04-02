import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import NoUser from "../../assets/icons/if-no-user.png";
import { HostRoutes, RenterRoutes } from "../../constants";
import { Link, Navigate, useLocation } from "react-router-dom";
import {
  useGetTotalNotificationsQuery,
  useGetUserQuery,
} from "../../redux/api";
import Loader from "../Loader";
import ProfileSubMenu from "../ProfileSubMenu";
import { getUrl } from "../../utils/helper";

const SideBar = ({ showSidebar }: { showSidebar: boolean }) => {
  const location = useLocation();
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [role, setRole] = useState<any>("rent");
  const [notifications, setNotifications] = useState({
    totalUnGiveReview: 0,
    totalUnderReviewBooking: 0,
    totalUnreadMessage: 0,
  });
  const sidebarRef = useRef<HTMLButtonElement>(null);
  const {
    data: userData,
    isLoading: isUserLoading,
    isError,
  } = useGetUserQuery();

  const { data: notificationsData, isLoading: notificationsLoading } =
    useGetTotalNotificationsQuery();

  const routesMap: any = {
    host: HostRoutes,
    rent: RenterRoutes,
  };

  useEffect(() => {
    if (userData?.success) {
      const { dashboardRole } = userData?.userExists;
      setRole(dashboardRole);
    }
  }, [userData]);

  useEffect(() => {
    if (notificationsData?.success) {
      const { totalUnGiveReview, totalUnderReviewBooking, totalUnreadMessage } =
        notificationsData;
      setNotifications({
        totalUnGiveReview,
        totalUnderReviewBooking,
        totalUnreadMessage,
      });
    }
  }, [notificationsData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setShowProfilePopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isUserLoading || notificationsLoading) return <Loader />;
  if (isError) return <Navigate to="/logout" />;

  return (
    <div className={`h-[100vh] ${showSidebar ? "" : "max-lg:hidden"}`}>
      <div className="flex flex-col border-r border-[#EEEEEE] fixed left-0 top-0 bg-white z-[999] py-[32px] px-[16px] h-full w-[250px] min-w-[220px] max-w-[220px]">
        <Link className="mb-[45px] block" to="/">
          <img className="max-w-[158px] mx-auto" src={Logo} alt="" />
        </Link>
        <div className="side-bar w-full flex flex-col gap-[6px]">
          {routesMap[role].map((item: any, index: any) => (
            <Link
              className={`profile-link ${
                item.path != "" && location.pathname.startsWith(item.path)
                  ? "active"
                  : ""
              }`}
              to={item.path}
              key={index}
            >
              {item.icon}
              <div className="flex w-full justify-between">
                {item.name}
                {notifications.totalUnreadMessage && item.name == "Messages" ? (
                  <span className="bg-[#235370] text-white rounded-full text-xs flex justify-center items-center w-[20px] h-[20px]">
                    {notifications.totalUnreadMessage}
                  </span>
                ) : (
                  ""
                )}
                {notifications.totalUnderReviewBooking &&
                item.name == "Bookings" ? (
                  <span className="bg-[#235370] text-white rounded-full text-xs flex justify-center items-center w-[20px] h-[20px]">
                    {notifications.totalUnderReviewBooking}
                  </span>
                ) : (
                  ""
                )}
                {notifications.totalUnGiveReview && item.name == "Reviews" ? (
                  <span className="bg-[#235370] text-white rounded-full text-xs flex justify-center items-center w-[20px] h-[20px]">
                    {notifications.totalUnGiveReview}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </Link>
          ))}
        </div>
        {/* profile pic */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-[10px]">
            <img
              className="w-[48px] h-[48px] object-cover rounded-full"
              src={
                userData?.userExists.profileImage
                  ? getUrl(userData?.userExists.profileImage)
                  : NoUser
              }
              alt=""
            />
            <h5 className="text-[20px] font-semibold">
              {userData?.userExists.firstName}
            </h5>
          </div>
          <div className="flex">
            <button
              className=" cursor-pointer relative"
              onClick={() => {
                setShowProfilePopup(!showProfilePopup);
              }}
              ref={sidebarRef}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="#1E1E1E"
                />
              </svg>
              <div className="shadow rounded-[16px] border border-[#EEEEEE] absolute right-[-8px] bottom-[48px] bg-white z-[999]">
                {showProfilePopup && (
                  // <ProfilePopup role={role} handleRoleChange={handleRoleChange} />
                  <ProfileSubMenu setShowDropDown={setShowProfilePopup} />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
