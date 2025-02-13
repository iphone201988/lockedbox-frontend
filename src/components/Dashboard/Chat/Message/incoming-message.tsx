import RenterProfileImg from "../../../../assets/host-profile-pic.png";

const IncomingMessage = () => {
  return (
    <div className="flex items-start mt-[16px] gap-[8px]">
      <img src={RenterProfileImg} alt="" />
      <div className="bg-[#EEEEEE] p-[12px] max-w-[480px]  rounded-[8px] ">
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};

export default IncomingMessage;
