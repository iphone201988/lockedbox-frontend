import LoginBgImg from "../../assets/login-img.png";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Logo from "../../components/Logo";

const PasswordSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="max-w-[1440px] w-full px-[40px] py-[40px] mx-auto flex  gap-10 max-lg:px-[20px] max-md:flex-col">
        <div className=" relative w-full">
          <img className="rounded-4xl max-md:hidden" src={LoginBgImg} alt="" />
          <BackButton />
        </div>
        <div className="w-full relative h-full flex items-center justify-center flex-col">
          <Logo className="max-w-[158px] max-lg:max-w-[120px] mb-[8rem] max-mlg:mb-[2rem]"/>
          <h1 className="text-[52px] font-bold max-lg:text-[36px] text-center">
            Password reset <br />
            <span className="text-[#235370]">Successfully</span>
          </h1>

          <button
            className="btn-pri mt-[40px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccess;
