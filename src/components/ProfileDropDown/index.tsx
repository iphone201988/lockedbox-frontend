import {
  AccountIcon,
  BookingIcon,
  HelpIcon,
  HomeIcon,
  LogoutIcon,
  MessageIcon,
  ReviewIcon,
  SearchIcon,
  SwitchIcon,
} from "../../icons";

const ProfileDropDown = ({ showDropDown }: { showDropDown: boolean }) => {
  return (
    <div
      className={`shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[58px] bg-white z-[999] ${
        showDropDown ? "block" : "hidden"
      }`}
    >
      <div className="p-[12px] w-max flex flex-col gap-[16px] max-md:gap-[8px]">
        <a className="profile-link" href="">
          <HomeIcon />
          Home
        </a>
        <a className="profile-link" href="">
          <SearchIcon />
          Find a space
        </a>
        <a className="profile-link" href="">
          <AccountIcon />
          Account
        </a>
        <a className="profile-link" href="">
          <BookingIcon />
          Bookings
        </a>
        <a className="profile-link" href="">
          <MessageIcon />
          Messages
        </a>
        <a className="profile-link" href="">
          <ReviewIcon />
          Reviews <i className="notify-dot"></i>
        </a>
      </div>
      <div className="p-[12px] border-t border-[#EEEEEE] w-max flex flex-col gap-[16px] max-md:gap-[8px]">
        <a className="profile-link" href="">
          <SwitchIcon />
          Switch to hosting
        </a>
        <a className="profile-link" href="">
          <HelpIcon />
          Help
        </a>
        <a className="profile-link" href="">
          <LogoutIcon />
          Log-out
        </a>
      </div>
    </div>
  );
};

export default ProfileDropDown;
