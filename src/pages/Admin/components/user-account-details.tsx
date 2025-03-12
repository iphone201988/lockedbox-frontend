import { useNavigate, useParams } from "react-router-dom";
import NoUser from "../../../assets/icons/if-no-user.png";
import {
  useBanUserMutation,
  useGetUserDetailsQuery,
} from "../../../redux/api/admin";
import Loader from "../../../components/Loader";
import { useEffect, useState } from "react";
import moment from "moment";
import { getUrl, handleError } from "../../../utils/helper";

const initialState: AdminAccountType = {
  firstName: "",
  lastName: "",
  userId: "",
  email: "",
  phone: "",
  createdAt: "",
  profileImage: "",
  isEmailVerified: false,
  isPhoneVerified: false,
  isStripeAccountConnected: false,
  isAccountBanByAdmin: false,
};
const UserAccountDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userDetails, setUserDetails] =
    useState<AdminAccountType>(initialState);
  const { data, isLoading, isFetching } = useGetUserDetailsQuery(id || "", {
    skip: !id,
  });

  const [banUser, { data: updatedData, isLoading: loading }] =
    useBanUserMutation();

  const handleBanUser = async () => {
    await banUser({
      id,
      body: { isAccountBanByAdmin: !userDetails.isAccountBanByAdmin },
    })
      .unwrap()
      .catch((error:any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (updatedData?.success) {
      setUserDetails((prev) => ({
        ...prev,
        isAccountBanByAdmin: !prev.isAccountBanByAdmin,
      }));
    }
  }, [updatedData]);

  useEffect(() => {
    console.log("data:", data);
    if (data?.success) {
      const { userDetails } = data;
      setUserDetails({
        userId: userDetails._id,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        phone: userDetails.phone,
        profileImage: userDetails.profileImage,
        createdAt: moment(userDetails.createdAt).format("DD/MM/YYYY"),
        isPhoneVerified: userDetails.isPhoneVerified,
        isEmailVerified: userDetails.isEmailVerified,
        isStripeAccountConnected: userDetails.isStripeAccountConnected,
        isAccountBanByAdmin: userDetails.isAccountBanByAdmin,
      });
    }
  }, [data]);

  return (
    <div className="flex flex-col">
      {(isLoading || isFetching || loading) && <Loader />}
      <div className="flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            User Profile Info
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="">
            <img
              className="w-[120px] h-[120px] object-cover rounded-full"
              src={
                userDetails.profileImage
                  ? getUrl(userDetails.profileImage)
                  : NoUser
              }
              alt=""
            />
            <div className=" flex flex-col gap-[10px] mt-[10px]">
              <p className=" font-semibold">
                Full Name:{" "}
                <span className=" font-normal text-[#959595]">
                  {userDetails.firstName} {userDetails.lastName}
                </span>
              </p>
              <p className=" font-semibold">
                User ID:{" "}
                <span className=" font-normal text-[#959595]">
                  {userDetails.userId}
                </span>
              </p>
              <p className=" font-semibold">
                Email:{" "}
                <span className=" font-normal text-[#959595]">
                  {userDetails.email}
                </span>
              </p>
              <p className=" font-semibold">
                Phone:{" "}
                <span className=" font-normal text-[#959595]">
                  {userDetails.phone
                    ? "+" + userDetails.phone
                    : userDetails.phone}
                </span>
              </p>
              <p className=" font-semibold">
                Account creation:{" "}
                <span className=" font-normal text-[#959595]">
                  {userDetails.createdAt}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            User Identity Confirmed
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          {/* profile inputs */}

          <div className=" max-w-[400px] w-full max-md:max-w-full">
            <div className="flex justify-between relative">
              <p className=" font-semibold">Email address</p>
              {userDetails.isEmailVerified ? (
                <span className="text-[#0BB82B] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]">
                  Verified
                </span>
              ) : (
                <span className="text-[#235370] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]">
                  Not Confirmed
                </span>
              )}{" "}
            </div>
            <div className="flex justify-between relative py-[16px]">
              <p className=" font-semibold">Phone</p>
              {userDetails.isPhoneVerified ? (
                <span className="text-[#0BB82B] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]">
                  Verified
                </span>
              ) : (
                <span className="text-[#235370] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]">
                  Not Confirmed
                </span>
              )}
            </div>
            <div className="flex justify-between relative">
              <p className=" font-semibold">Identification</p>
              {userDetails.isStripeAccountConnected ? (
                <span className="text-[#0BB82B] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]">
                  Verified
                </span>
              ) : (
                <span className="text-[#235370] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]">
                  Not Confirmed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="btn-pri mt-[24px] ml-auto" onClick={handleBanUser}>
        {userDetails.isAccountBanByAdmin ? "Remove Ban" : "Ban User"}
      </button>
    </div>
  );
};

export default UserAccountDetails;
