import { Navigate, useLocation, useNavigate } from "react-router-dom";
import HostRentImg from "../../assets/host-rent-img.png";
import BackButton from "../../components/BackButton";
import { HostingIcon, RentingIcon } from "../../icons";
import Logo from "../../components/Logo";
import { useAddRoleMutation } from "../../redux/api";
import { useEffect } from "react";
import { getNextAuthUrl, handleError, setToken } from "../../utils/helper";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../constants/api-responses";

const HostOrRent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.state || !location.state.id) {
    return <Navigate to="/" />;
  }

  const [addRole, { isLoading, data }] = useAddRoleMutation();
  const id = location.state?.id;

  const handleClick = async (role: string) => {
    try {
      await addRole({ id, role }).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.LOGGED_IN);
      const { step, accessToken } = data.userExists;
      setToken(accessToken);
      const url = getNextAuthUrl(step);
      navigate(url, { replace: true });
    }
  }, [data]);
  return (
    <div className="flex items-center justify-center h-[100vh]">
      {isLoading && <Loader />}
      <div className="max-w-[1440px] w-full px-[40px] py-[40px] mx-auto flex  gap-10 max-lg:px-[20px] max-md:flex-col">
        <div className=" relative w-full">
          <img className="rounded-4xl max-md:hidden" src={HostRentImg} alt="" />
          <BackButton />
        </div>
        <div className="w-full relative h-full flex items-center justify-center flex-col">
          <Logo className="max-w-[158px] max-lg:max-w-[120px] mb-[8rem] max-mlg:mb-[2rem]" />
          <h1 className="text-[52px] font-bold max-lg:text-[36px] text-center">
            Are you <span className="text-[#235370]">hosting</span> <br />
            or renting?
          </h1>

          <div className="host-rent-btns mt-[30px] flex flex-col gap-[20px]">
            <button
              className="text-[36px] font-bold monts-font"
              onClick={() => handleClick("host")}
            >
              <HostingIcon />
              Hosting
            </button>
            <button
              className="text-[36px] font-bold monts-font"
              onClick={() => handleClick("rent")}
            >
              <RentingIcon />
              Renting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostOrRent;
