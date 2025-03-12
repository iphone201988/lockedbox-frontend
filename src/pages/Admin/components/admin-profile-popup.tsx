import { Link } from "react-router-dom";
import { HelpIcon, LogoutIcon } from "../../../icons";

const AdminProfilePopup = () => {
  return (
    // siderbar dropdown
    <div className="shadow rounded-[16px] border border-[#EEEEEE] absolute right-[-8px] bottom-[48px] bg-white z-[999]">
      <div className="p-[12px] w-max flex flex-col gap-[12px] max-md:gap-[8px]">
        <Link className="profile-link !text-[16px] !gap-[8px]" to="">
          <HelpIcon />
          Help
        </Link>
        <Link className="profile-link !text-[16px] !gap-[8px]" to="/admin/logout">
          <LogoutIcon />
          Log-out
        </Link>
      </div>
    </div>
  );
};

export default AdminProfilePopup;
