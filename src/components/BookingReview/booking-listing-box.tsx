import ListingImg from "../../assets/Listing-1.png";

const BookingListingBox = () => {
  return (
    <div className="bg-white rounded-[16px] relative max-w-[260px] ">
      <img className="rounded-[10px]" src={ListingImg} alt="" />
      <div className="flex justify-center items-center flex-col bg-[#235370] text-[#ffffff] rounded-[8px] p-[5px] absolute right-[15px] top-[15px]">
        <span className="flex gap-[4px] items-center">
          {" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2.5L11.9583 7.3L17.1333 7.68333L13.1667 11.0333L14.4083 16.0667L10 13.3333L5.59167 16.0667L6.83334 11.0333L2.86667 7.68333L8.04167 7.3L10 2.5Z"
              fill="white"
            />
            <path
              d="M10 2.5L8.04167 7.3L2.86667 7.68333L6.83334 11.0333L5.59167 16.0667L10 13.3333M10 2.5L11.9583 7.3L17.1333 7.68333L13.1667 11.0333L14.4083 16.0667L10 13.3333"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
          <b>4.5</b>
        </span>
        <p className="text-[14px] mt-[-2px]">(7 reviews)</p>
      </div>
      <p className="text-[18px] font-semibold mt-[10px]">
        Room for storage in Surrey
      </p>
      <p className="text-[#959595] ">
        {" "}
        <span className="text-[#000]">Size:</span> 10’x15’
      </p>
    </div>
  );
};

export default BookingListingBox;
