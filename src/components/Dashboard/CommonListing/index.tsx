import { useNavigate } from "react-router-dom";
import { getUrl } from "../../../utils/helper";

const CommonListing = ({
  notification,
}: {
  notification: HomeNotifications;
}) => {
  const navigate = useNavigate();
  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
      <i className="notify-dot absolute right-[10px] top-[10px]"></i>
      <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={getUrl(notification.image)}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px] max-mlg:max-w-[280px]">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            {notification.spaceType} for storage in {notification.city}
          </p>
          <p className="text-[20px] max-md:text-[16px]">
            {notification.description}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
        <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
          <button
            className="btn-sec"
            onClick={() => navigate(notification.path)}
          >
            {notification.btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonListing;
