import { useState } from "react";
import RenterPic from "../../assets/rent-profile-pic.png";
import Logo from "../Logo";
import { profileMenu } from "../../constants";
import { Link } from "react-router-dom";
import ProfileSubMenu from "../ProfileSubMenu";

const ProfileNavbar = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  return (
    <div className=" border-b border-[#EEEEEE]">
      <div className=" py-5 px-10 mx-auto flex flex-row items-center justify-between max-lg:px-[20px]">
        <Logo className="max-w-[158px] max-lg:max-w-[120px]" />
        <div className="">
          <button
            className=" cursor-pointer w-[48px] h-[48px] relative"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <img className=" object-cover" src={RenterPic} alt="" />
            {/* <ProfileDropDown showDropDown={showDropDown} /> */}
            <div
              className={`shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[58px] bg-white z-[999] ${
                showDropDown ? "block" : "hidden"
              }`}
            >
              <div className="p-[12px] w-max flex flex-col gap-[16px] max-md:gap-[8px]">
                {profileMenu.map((item: any) => (
                  <Link className="profile-link" to={item.url}>
                    {item.icon}
                    {item.label}
                    {item.hasNotification && <i className="notify-dot"></i>}
                  </Link>
                ))}
              </div>
              <ProfileSubMenu setShowDropDown={setShowDropDown} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
