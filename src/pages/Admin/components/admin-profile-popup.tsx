import { HelpIcon, LogoutIcon } from "../../../icons";

const AdminProfilePopup = () => {
  return (
    // siderbar dropdown
    <div className="shadow rounded-[16px] border border-[#EEEEEE] absolute right-[-8px] bottom-[48px] bg-white z-[999]">
      <div className="p-[12px] w-max flex flex-col gap-[12px] max-md:gap-[8px]">
        <a className="profile-link !text-[16px] !gap-[8px]" href="">
         <HelpIcon/>
          Help
        </a>
        <a className="profile-link !text-[16px] !gap-[8px]" href="">
          <LogoutIcon/>
          Log-out
        </a>
      </div>
    </div>
  );
};

export default AdminProfilePopup;
