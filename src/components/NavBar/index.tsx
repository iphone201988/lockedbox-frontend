import { Link } from "react-router-dom";
import Logo from "../Logo";
import { getToken } from "../../utils/helper";
import { routes } from "../../constants";
import ProfileNavbar from "../ProfileNavbar";

const NavBar = () => {
  const token = getToken();
  return (
    <div className="fixed border-b border-[#EEEEEE] w-full bg-white z-10">
      <div className=" py-5 px-10 mx-auto flex flex-row items-center justify-between max-lg:px-[20px]">
        <Logo className="max-w-[158px] max-lg:max-w-[120px] max-sm:max-w-[100px]" />
        <div className="menu flex gap-x-[32px] text-[18px] text-[#1E1E1E] font-light max-lg:text-[16px] max-lg:gap-x-[16px] max-lg:hidden">
          {routes.map((link: any, index: number) => (
            <Link
              className="hover:text-[#235370]"
              to={
                !token && link.path == "/dashboard/home" ? "/signup" : link.path
              }
              key={index}
              state={link.name == "How it Works" ? { scrollTo: "rent" } : {}}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-x-4 max-md:gap-[8px] items-center">
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
            <>
              <ProfileNavbar showLogo={false} />
              <Link to="/logout" className="btn-sec">
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
