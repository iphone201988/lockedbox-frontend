import { useState } from "react";
import RenterPic from "../../assets/rent-profile-pic.png";
import ProfileDropDown from "../ProfileDropDown";
import Logo from "../Logo";

const ProfileNavbar = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  return (
    <div className=" border-b border-[#EEEEEE]">
      <div className=" py-5 px-10 mx-auto flex flex-row items-center justify-between max-lg:px-[20px]">
        <Logo className="max-w-[158px] max-lg:max-w-[120px]"/>
        <div className="">
          <button
            className=" cursor-pointer w-[48px] h-[48px] relative"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <img className=" object-cover" src={RenterPic} alt="" />
            <ProfileDropDown showDropDown={showDropDown} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
