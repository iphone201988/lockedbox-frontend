import { useEffect, useRef, useState } from "react";
import NoUser from "../../assets/icons/if-no-user.png";
import Logo from "../Logo";
import { profileMenu } from "../../constants";
import { Link } from "react-router-dom";
import ProfileSubMenu from "../ProfileSubMenu";
import { useGetUserQuery } from "../../redux/api";
import { getToken, getUrl } from "../../utils/helper";

const ProfileNavbar = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const token = getToken();
  let data: any = null;
  const profileMenuRef = useRef<HTMLDivElement>(null);

  if (token) {
    const { data: userData } = useGetUserQuery();
    data = userData;
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" border-b border-[#EEEEEE]">
      <div className=" py-5 px-10 mx-auto flex flex-row items-center justify-between max-lg:px-[20px]">
        <Logo className="max-w-[158px] max-lg:max-w-[120px]" />
        {token ? (
          <div className="">
            <button
              className="cursor-pointer w-[48px] h-[48px] relative"
              onClick={() => setShowDropDown(!showDropDown)}
            >
              <img
                className="w-[48px] h-[48px] object-cover rounded-full"
                src={
                  data?.userExists.profileImage
                    ? getUrl(data?.userExists.profileImage)
                    : NoUser
                }
                alt=""
              />
              <div
                className={`shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[58px] bg-white z-[999] ${
                  showDropDown ? "block" : "hidden"
                }`}
                ref={profileMenuRef}
              >
                <div className="p-[12px] w-max flex flex-col gap-[16px] max-md:gap-[8px]">
                  {profileMenu.map((item: any) => (
                    <Link className="profile-link" to={item.url}>
                      {item.icon}
                      {item.label}
                      {/* {item.hasNotification && <i className="notify-dot"></i>} */}
                    </Link>
                  ))}
                </div>
                <ProfileSubMenu setShowDropDown={setShowDropDown} />
              </div>
            </button>
          </div>
        ) : (
          <>
            <div className="menu flex gap-x-[32px] text-[18px] text-[#1E1E1E] font-light max-lg:text-[16px] max-lg:gap-x-[16px] max-md:hidden ml-auto mr-[12px]">
              <Link className="hover:text-[#235370]" to="/">
                Back to home page
              </Link>
            </div>
            <div className="flex gap-x-4">
              <Link to="/signin" className="btn-sec">
                Login
              </Link>
              <Link to="/signup" className="btn-pri">
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileNavbar;
