import { Link } from "react-router-dom";
import Logo from "../Logo";
import { getToken } from "../../utils/helper";

const NavBar = () => {
  const token = getToken();
  return (
    <div className=" border-b border-[#EEEEEE]">
      <div className=" py-5 px-10 mx-auto flex flex-row items-center justify-between max-lg:px-[20px]">
        <Logo className="max-w-[158px] max-lg:max-w-[120px]" />
        <div className="menu flex gap-x-[32px] text-[18px] text-[#1E1E1E] font-light max-lg:text-[16px] max-lg:gap-x-[16px] max-lg:hidden">
          <Link className="hover:text-[#235370]" to="/search">
            Find a Space
          </Link>
          <Link className="hover:text-[#235370]" to="#">
            How it Works
          </Link>
          <Link className="hover:text-[#235370]" to="#">
            Contact Us
          </Link>
          <Link className="hover:text-[#235370]" to="#">
            Host your Space
          </Link>
        </div>
        <div className="flex gap-x-4">
          {!token && (
            <>
              <Link to="/signin" className="btn-sec">
                Login
              </Link>
              <Link to="/signup" className="btn-pri">
                Sign Up
              </Link>
            </>
          )}
          {token && (
            <Link to="/logout" className="btn-sec">
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
