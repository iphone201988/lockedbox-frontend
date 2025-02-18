import { Link } from "react-router-dom";
import { profileMenu, profileSubMenu } from "../../constants";

const ProfileDropDown = ({ showDropDown }: { showDropDown: boolean }) => {
  return (
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
      <div className="p-[12px] border-t border-[#EEEEEE] w-max flex flex-col gap-[16px] max-md:gap-[8px]">
        {profileSubMenu.map((item: any) => (
          <Link className="profile-link" to={item.url}>
            {item.icon}
            {item.label}
            {item.hasNotification && <i className="notify-dot"></i>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileDropDown;
