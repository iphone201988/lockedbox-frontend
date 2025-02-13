import ReviewProfilePic from "../../../assets/garry-profile-pic.png";

const YourReviews = () => {
  return (
    <div className="p-[10px] border border-[#EEEEEE] rounded-[16px] max-w-[260px]">
      <div className="flex items-center gap-[8px]">
        <img
          className="w-[48px] h-[48px] rounded-full object-cover"
          src={ReviewProfilePic}
          alt=""
        />
        <div className="">
          <p className=" font-semibold">Garry S.</p>
          <p className="text-[14px] text-[#959595]">June 2024</p>
        </div>
      </div>
      <p className="text-[14px] mt-[8px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum is simply dummy
      </p>
    </div>
  );
};

export default YourReviews;
