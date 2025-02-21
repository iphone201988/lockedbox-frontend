import CommonListing from "../../../../components/Dashboard/CommonListing";

const RenterHome = () => {
  
  return (
    <div className="px-[30px] max-lg:px-[20px] ">
      <div className=" py-[10px]  border-b border-[#EEEEEE]">
        <h4 className="text-[22px] font-bold">Hello Xander!</h4>
        <p>Let’s see what’s new</p>
      </div>
      <div className=" py-[24px] flex flex-col gap-[16px]">
        <CommonListing type="RenterHome" btnTxt="View Booking" path="" />
        <CommonListing type="RenterHome" btnTxt="View Booking" path="" />
        <CommonListing type="RenterHome" btnTxt="View Booking" path="" />
        <CommonListing type="RenterHome" btnTxt="View Booking" path="" />
      </div>
    </div>
  );
};

export default RenterHome;
