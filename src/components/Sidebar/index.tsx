import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import RenterProfilePic from "../../assets/rent-profile-pic.png";
import { HostRoutes, RenterRoutes, profileSubMenu } from "../../constants";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useGetUserQuery, useUpdateUserMutation } from "../../redux/api";
import Loader from "../Loader";
import { handleError } from "../../utils/helper";
import ProfileSubMenu from "../ProfileSubMenu";

const ProfilePopup = ({
  role,
  handleRoleChange,
}: {
  role: string;
  handleRoleChange: (role: string) => void;
}) => {
  console.log("role:::", role);
  const isHost = role == "host";
  return (
    <div className="shadow rounded-[16px] border border-[#EEEEEE] absolute right-[-8px] bottom-[48px] bg-white z-[999]">
      <div className="p-[12px] w-max flex flex-col gap-[12px] max-md:gap-[8px]">
        {profileSubMenu.map((item: any) => {
          return item?.url ? (
            <Link
              className="profile-link !text-[16px] !gap-[8px]"
              to={item.url}
            >
              {item.icon}
              {item.label}
              {item.hasNotification && <i className="notify-dot"></i>}
            </Link>
          ) : (
            <button
              className="profile-link !text-[16px] !gap-[8px]"
              onClick={() => handleRoleChange(isHost ? "rent" : "host")}
            >
              {item.icon}
              {isHost ? "Switch to renting" : "Switch to hosting"}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [role, setRole] = useState<any>("rent");
  const {
    data: userData,
    isLoading: isUserLoading,
    isError,
    refetch,
  } = useGetUserQuery();
  const [updateUserData, { data, isLoading }] = useUpdateUserMutation();

  const routesMap: any = {
    host: HostRoutes,
    rent: RenterRoutes,
  };

  const handleRoleChange = async (role: string) => {
    try {
      await updateUserData({ dashboardRole: role }).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (userData?.success) {
      const { dashboardRole } = userData?.userExists;
      setRole(dashboardRole);
    }
  }, [userData]);

  useEffect(() => {
    if (data?.success) {
      refetch();
    }
  }, [data]);

  if (isUserLoading) return <Loader />;
  if (isError) return <Navigate to="/logout" />;

  return (
    <div className="h-[100vh]">
      {isLoading && <Loader />}
      <div className="flex flex-col border-r border-[#EEEEEE] fixed left-0 top-0 bg-white z-[999] py-[32px] px-[16px] h-full w-[250px] min-w-[220px] max-w-[220px]">
        <a className="mb-[45px] block" href="">
          <img className="max-w-[158px] mx-auto" src={Logo} alt="" />
        </a>
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
              {item.name}
              {item.notify ? <i className="notify-dot"></i> : ""}
            </Link>
          ))}
        </div>
        {/* profile pic */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-[10px]">
            <img
              className="w-[48px] h-[48px] object-cover"
              src={RenterProfilePic}
              alt=""
            />
            <h5 className="text-[20px] font-semibold">Xander</h5>
          </div>
          <div className="flex">
            <button
              className=" cursor-pointer relative"
              onClick={() => setShowProfilePopup(!showProfilePopup)}
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
