import ProfilPic from "../../../../../assets/icons/if-no-user.png";
import LocationImage from "../../../../../assets/icons/location-icn-grey.png";
import { LocationIcon } from "../../../../../icons";
import { useEffect, useRef, useState } from "react";
import {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdateUserProfileImageMutation,
} from "../../../../../redux/api";
import * as yup from "yup";
import { ProfileSchema } from "../../../../../schema";
import { useForm } from "../../../../../hooks/useForm";
import { handleError, handleInputChange } from "../../../../../utils/helper";
import Input from "../../../../../components/Input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../../../../constants/api-responses";
import Loader from "../../../../../components/Loader";
import VerifyPhonePopup from "../../../../../components/Popups/Phone";
import VerificationCodePopup from "../../../../../components/Popups/Verify";
import VerifEmailPopup from "../../../../../components/Popups/Email";

type ProfileFormType = yup.InferType<typeof ProfileSchema>;

const initialState: ProfileFormType = {
  bio: "",
  work: "",
  address: "",
};

const RenterProfile = () => {
  const imageRef = useRef<any>(null);
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState<any>(ProfilPic);
  const [file, setFile] = useState<any>();

  const [showPopup, setShowPopup] = useState({
    email: false,
    phone: false,
    verification: false,
  });

  const [data, setData] = useState({
    id: "",
    isEmailVerified: "",
    isPhoneVerified: "",
    createdAt: "",
  });
  const { data: userData, refetch } = useGetUserQuery();

  const { formData, setFormData, validate, errors } = useForm(
    ProfileSchema,
    initialState
  );

  const [updateUserProfileImage] = useUpdateUserProfileImageMutation();
  const [updateUser, { isLoading, data: updatedData }] =
    useUpdateUserMutation();

  const handleUpdatePic = async () => {
    if (!imageRef.current.value) {
      imageRef.current.click();
      return;
    }

    try {
      const formData = new FormData();
      formData.set("profileImage", file);
      await updateUserProfileImage(formData).unwrap();
      toast.success(ResponseMessages.PROFILE_UPDATED);
    } catch (error) {
      handleError(error, navigate);
    }
  };

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();
    if (hasErrors) return;

    try {
      const { bio, work, address } = userData.userExists;

      if (
        (formData.bio != "" || formData.work != "" || formData.address != "") &&
        (formData.bio != bio ||
          formData.work != work ||
          formData.address != address)
      ) {
        await updateUser({
          bio: formData.bio ? formData.bio : undefined,
          work: formData.work ? formData.work : undefined,
          address: formData.address ? formData.address : undefined,
        }).unwrap();
      }
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (userData?.success) {
      const {
        _id: id,
        profileImage,
        bio,
        work,
        address,
        createdAt,
        isEmailVerified,
        isPhoneVerified,
      } = userData.userExists;
      if (profileImage) {
        setProfilePic(import.meta.env.VITE_BACKEND_URL + profileImage);
      }

      setFormData({
        bio: bio ? bio : "",
        work: work ? work : "",
        address: address ? address : "",
      });

      if (createdAt) {
        const formattedDate = new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }).format(new Date(createdAt));

        setData({
          id,
          createdAt: formattedDate,
          isEmailVerified,
          isPhoneVerified,
        });
      }
    }
  }, [userData]);

  useEffect(() => {
    if (updatedData?.success) toast.success(ResponseMessages.PROFILE_UPDATED);
  }, [updatedData]);

  return (
    <div className="flex flex-col">
      {isLoading && <Loader />}
      {showPopup.phone && <VerifyPhonePopup setShowPopup={setShowPopup} />}
      {showPopup.email && <VerifEmailPopup setShowPopup={setShowPopup} />}
      {showPopup.verification && (
        <VerificationCodePopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          refetch={refetch}
        />
      )}
      <div className="flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Your Profile
          </p>
          <p className="max-w-[280px] mt-[6px]">
            This is your personal information that you can update anytime.
          </p>
        </div>
        <div className=" max-w-[480px] w-full max-md:max-w-full">
          {/* profile pic */}
          <div className="border border-[#EEEEEE] rounded-[16px] overflow-hidden">
            <div className="bg-[#235370] p-[20px] text-[#fff] text-right">
              <p>
                <span className=" font-semibold">User ID:</span> 123456789
              </p>
              <p>
                <span className=" font-semibold">Joined:</span> {data.createdAt}
              </p>
            </div>
            <div className="p-[20px] flex flex-col">
              <div className="flex gap-[16px] pb-[16px]">
                <div className="w-[130px] h-[130px] p-[5px] bg-white rounded-full mt-[-80px] overflow-hidden">
                  <img
                    className="cursor-pointer w-full h-full rounded-full object-contain"
                    src={profilePic}
                    alt="profile-pic"
                    onClick={() => {
                      if (imageRef?.current) imageRef.current.click();
                    }}
                  />
                  <input
                    type="file"
                    ref={imageRef}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        const imageUrl = URL.createObjectURL(e.target.files[0]);
                        setFile(e.target.files[0]);
                        setProfilePic(imageUrl);
                      }
                    }}
                  />
                </div>
                <div className="">
                  <h5 className="text-[24px] font-semibold">Xander</h5>
                  <p className="flex items-center gap-[6px]">
                    <img src={LocationImage} alt="" />
                    Vancouver, Canada
                  </p>
                </div>
              </div>
              <button className="btn-sec ml-auto" onClick={handleUpdatePic}>
                Update Pic
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* short bio    */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">Short Bio</p>
          <p className="max-w-[280px] mt-[6px]">
            Write something about yourself that you like to share with others.
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <textarea
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer h-[180px]"
                placeholder="Bio"
                name="bio"
                value={formData.bio}
                onChange={(e: any) => handleInputChange(e, setFormData)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Your Location */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Your Location
          </p>
          <p className="max-w-[280px] mt-[6px]">
            You can add your location or you can skip it.{" "}
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Select Location</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <Input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  name="address"
                  placeholder="Location"
                  value={formData.address}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  error={errors.address}
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <LocationIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Identity Confirmed   */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Identity Confirmed
          </p>
          <p className="max-w-[280px] mt-[6px]">
            Verify your email, phone number and Identification to confirm your
            identity.
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="flex justify-between relative">
            <p className=" font-semibold">Email address</p>
            {data.isEmailVerified ? (
              <Verified
                handleClick={() => {
                  setShowPopup((prev: any) => ({
                    ...prev,
                    email: true,
                  }));
                }}
              />
            ) : (
              <NotVerified
                handleClick={() => {
                  setShowPopup((prev: any) => ({
                    ...prev,
                    email: true,
                  }));
                }}
              />
            )}
          </div>
          <div className="flex justify-between relative py-[16px]">
            <p className=" font-semibold">Phone</p>
            {data.isPhoneVerified ? (
              <Verified
                handleClick={() => {
                  setShowPopup((prev: any) => ({
                    ...prev,
                    phone: true,
                  }));
                }}
              />
            ) : (
              <NotVerified
                handleClick={() => {
                  setShowPopup((prev: any) => ({
                    ...prev,
                    phone: true,
                  }));
                }}
              />
            )}
          </div>
          <div className="flex justify-between relative">
            <p className=" font-semibold">Identification</p>
            <span className="text-[#235370] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]">
              Not Confirmed
            </span>
            <button className="text-[14px] underline text-[#235370] cursor-pointer absolute right-[-80px] max-mlg:relative max-mlg:right-0">
              Verify now
            </button>
          </div>
        </div>
      </div>

      {/* Your Work */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">Work</p>
          <p className="max-w-[280px] mt-[6px]">Enter your work here </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Work</p>
              <div className=" w-full max-w-[100%]">
                <Input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  name="work"
                  placeholder="Work"
                  value={formData.work}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  error={errors.work}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-pri mt-[24px] ml-auto " onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
};

const Verified = ({
  handleClick,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <span className="text-[#0BB82B] font-semibold">Verified</span>
      <button
        className="text-[14px] underline text-[#235370] cursor-pointer absolute right-[-80px] max-mlg:relative max-mlg:right-0"
        onClick={handleClick}
      >
        Change
      </button>
    </>
  );
};

const NotVerified = ({
  handleClick,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <span className="text-[#235370] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]">
        Not Confirmed
      </span>
      <button
        className="text-[14px] underline text-[#235370] cursor-pointer absolute right-[-80px] max-mlg:relative max-mlg:right-0"
        onClick={handleClick}
      >
        Verify now
      </button>
    </>
  );
};

export default RenterProfile;
