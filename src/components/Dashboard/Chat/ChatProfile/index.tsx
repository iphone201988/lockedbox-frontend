import RenterProfileImg from "../../../../assets/host-profile-pic.png";
const ChatProfile = () => {
  return (
    <div className="active flex gap-[8px] p-[12px] rounded-[12px] border border-[#EEEEEE] hover:bg-[#EEEEEE] cursor-pointer items-center bg-[#EEEEEE]">
      <img
        className="w-[48px] h-[48px] object-cover"
        src={RenterProfileImg}
        alt=""
      />
      <div className="">
        <p className=" font-semibold">Frank S.</p>
        <p className="text-[14px] text-[#959595]">
          {" "}
          Hello I am looking to rent...
        </p>
      </div>
    </div>
  );
};

export default ChatProfile;
