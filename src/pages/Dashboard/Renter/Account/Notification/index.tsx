import ToggleButton from "../../../../../components/ToggleButton";

const RenterNotification = () => {
  return (
    <div className="flex flex-col">
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
            <input type="checkbox" value="" className="sr-only peer" />
            <ToggleButton />
          </label>

          <label className="inline-flex items-center cursor-pointer justify-between w-full mt-[20px]">
            <p className="mr-[32px] text-black">SMS notifications</p>
            <input type="checkbox" value="" className="sr-only peer" />
            <ToggleButton />
          </label>
        </div>
      </div>
      <button className="btn-pri mt-[24px] ml-auto ">Update</button>
    </div>
  );
};

export default RenterNotification;
