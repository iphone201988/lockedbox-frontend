import { useEffect, useState } from "react";
import ToggleButton from "../../../../../components/ToggleButton";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../../../../redux/api";
import Loader from "../../../../../components/Loader";
import { handleError } from "../../../../../utils/helper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../../../../constants/api-responses";

const RenterNotification = () => {
  const navigate = useNavigate();
  const { data: userData } = useGetUserQuery();
  const [notifications, setNotifications] = useState({
    email: false,
    sms: false,
  });

  const [updateUser, { isLoading, data }] = useUpdateUserMutation();

  const handleSubmit = async () => {
    try {
      await updateUser({
        emailNotification: notifications.email,
        smsNotification: notifications.sms,
      }).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (userData?.success) {
      const { emailNotification, smsNotification } = userData.userExists;
      setNotifications({
        email: emailNotification,
        sms: smsNotification,
      });
    }
  }, [userData]);

  useEffect(() => {
    if (data?.success) toast.success(ResponseMessages.PROFILE_UPDATED);
  }, [data]);

  return (
    <div className="flex flex-col">
      {isLoading && <Loader />}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Notifications
          </p>
          <p className="max-w-[280px] mt-[6px]">
            Customize your preferred notification settings.{" "}
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <label className="inline-flex items-center cursor-pointer justify-between w-full">
            <p className="mr-[32px] text-black">Email notifications</p>
            <input
              type="checkbox"
              checked={notifications.email}
              className="sr-only peer"
            />
            <ToggleButton
              handleClick={() =>
                setNotifications({
                  ...notifications,
                  email: !notifications.email,
                })
              }
            />
          </label>

          <label className="inline-flex items-center cursor-pointer justify-between w-full mt-[20px]">
            <p className="mr-[32px] text-black">SMS notifications</p>
            <input
              type="checkbox"
              checked={notifications.sms}
              className="sr-only peer"
            />
            <ToggleButton
              handleClick={() =>
                setNotifications({
                  ...notifications,
                  sms: !notifications.sms,
                })
              }
            />
          </label>
        </div>
      </div>
      <button className="btn-pri mt-[24px] ml-auto" onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
};

export default RenterNotification;
