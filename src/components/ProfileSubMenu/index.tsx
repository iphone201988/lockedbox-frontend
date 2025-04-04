import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { profileSubMenu } from "../../constants";
import { useGetUserQuery, useUpdateUserMutation } from "../../redux/api";
import { getToken, handleError } from "../../utils/helper";
import Loader from "../Loader";
import { useEffect, useState } from "react";

const ProfileSubMenu = ({
  setShowDropDown,
}: {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const token = getToken();
  const location = useLocation();
  const path = location.pathname;
  const {
    data: userData,
    isLoading: isUserLoading,
    isError,
  } = useGetUserQuery();
  const [role, setRole] = useState();
  const [updateUserData, { data, isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    if (userData?.success) {
      const { dashboardRole } = userData?.userExists;
      setRole(dashboardRole);
    }
  }, [userData]);

  useEffect(() => {
    if (data?.success) {
      window.location.href = path;
    }
  }, [data]);

  const handleRoleChange = async (role: string) => {
    try {
      await updateUserData({ dashboardRole: role }).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  if (isUserLoading) return <Loader />;
  if (isError && token) return <Navigate to="/logout" />;
  return (
    <div
      className="p-[12px] border-t border-[#EEEEEE] w-max flex flex-col gap-[16px] max-md:gap-[8px]"
      onClick={() => setShowDropDown(false)}
    >
      {isLoading && <Loader />}
      {profileSubMenu.map((item: any, index: number) => {
        return item?.url ? (
          <Link
            className="profile-link !text-[16px] !gap-[8px]"
            to={item.url}
            key={index}
          >
            {item.icon}
            {item.label}
            {item.hasNotification && <i className="notify-dot"></i>}
          </Link>
        ) : (
          <button
            className="profile-link !text-[16px] !gap-[8px]"
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleRoleChange(role == "host" ? "rent" : "host");
            }}
          >
            {item.icon}
            {role == "host" ? "Switch to renting" : "Switch to hosting"}
          </button>
        );
      })}
    </div>
  );
};

export default ProfileSubMenu;
