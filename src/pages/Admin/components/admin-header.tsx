import HostProfilePic from "../../../assets/host-profile-pic.png";
import SearchIcon from "../../../assets/icons/search-icn.png";

const AdminHeader = () => {
  return (
    <div className="px-[30px] py-[20px] border-b border-[#EEEEEE] bg-white flex items-center justify-between max-lg:p-[20px] max-md:flex-col max-md:gap-[16px]">
      <h2 className="text-[32px] text-[#235370] font-bold max-lg:text-[26px] text-nowrap">
        User Management
      </h2>
      <div className="flex items-center w-full">
        <div className="flex ml-auto w-[100%] justify-end gap-[12px] max-lg:mr-[12px] max-md:justify-start">
          <div className="flex justify-between border border-[#EEEEEE] rounded-[16px] px-[16px] py-[18px] max-w-[400px] w-full max-lg:max-w-[250px]">
            <input
              className=""
              type="text"
              placeholder="Search User ID / Name / Phone"
            />
            <img src={SearchIcon} alt="" />
          </div>
          <button className="btn-pri">Select User</button>
        </div>
        <div className=" hidden max-lg:block relative ">
          <button className="cursor-pointer w-[48px] h-[48px] relative">
            <img src={HostProfilePic} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
