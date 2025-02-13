import ProfilPic from "../../../../../assets/rent-profile-pic.png";
import LocationImage from "../../../../../assets/icons/location-icn-grey.png";
import { LocationIcon } from "../../../../../icons";
import { useRef, useState } from "react";

const RenterProfile = () => {
  const imageRef = useRef<any>(null);
  const [profilePic, setProfilePic] = useState(ProfilPic);
  return (
    <div className="flex flex-col">
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
                <span className=" font-semibold">Joined:</span> 01/02/2024
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
              <button className="btn-sec ml-auto">Update Pic</button>
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
                placeholder="First Name"
              >
                Hi, I’m Xander! I’m a responsible and organized individual
                offering a secure and clean storage space in a safe
                neighborhood. My space is ideal for storing items like
                furniture, boxes, or seasonal gear, with easy access and
                flexible scheduling to meet your needs.
              </textarea>
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
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Location"
                  value="Vancouver, Canada"
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
            <span className="text-[#0BB82B] font-semibold">Verified</span>
          </div>
          <div className="flex justify-between relative py-[16px]">
            <p className=" font-semibold">Phone</p>
            <span className="text-[#235370] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]">
              Not Confirmed
            </span>
            <button className="text-[14px] underline text-[#235370] cursor-pointer absolute right-[-80px] max-mlg:relative max-mlg:right-0">
              Verify now
            </button>
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
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Work"
                  value="Director"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-pri mt-[24px] ml-auto ">Update</button>
    </div>
  );
};

export default RenterProfile;
