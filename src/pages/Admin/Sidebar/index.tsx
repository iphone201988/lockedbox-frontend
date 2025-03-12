import Logo from "../../../assets/logo.png";
import NoUser from "../../../assets/icons/if-no-user.png";
import AdminProfilePopup from "../components/admin-profile-popup";
import { HomeIcon } from "../../../icons";
import { useGetUserQuery } from "../../../redux/api/admin";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const { data } = useGetUserQuery();
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="h-[100vh] max-lg:hidden">
      <div className="flex flex-col border-r border-[#EEEEEE] fixed left-0 top-0 bg-white z-[999] py-[32px] px-[16px] h-full w-[250px] min-w-[220px] max-w-[220px]">
        <Link className="mb-[45px] block " to="/admin/home">
          <img className="max-w-[158px] mx-auto" src={Logo} alt="" />
        </Link>
        <div className="side-bar flex flex-col gap-[6px] w-full">
          <div className="profile-link active">
            <HomeIcon />
            Home
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-[10px]">
            <img
              className="w-[48px] h-[48px] object-cover"
              src={NoUser}
              alt=""
            />
            <h5 className="text-[20px] font-semibold capitalize">
              {data?.userExists?.firstName}
            </h5>
          </div>
          <div className="flex">
            <button
              className=" cursor-pointer relative"
              onClick={() => setShowPopup(!showPopup)}
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
              {showPopup && <AdminProfilePopup />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
