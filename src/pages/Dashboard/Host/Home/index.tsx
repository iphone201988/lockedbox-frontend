import { useNavigate } from "react-router-dom";
import CommonListing from "../../../../components/Dashboard/CommonListing";

const HostHome = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[30px] max-lg:px-[20px] ">
      <div className=" py-[10px] border-b border-[#EEEEEE]">
        <h4 className="text-[22px] font-bold">Hello Frank!</h4>
        <p>Let’s see what’s new</p>
      </div>
      <div className=" py-[24px] flex flex-col gap-[16px] border-b border-[#EEEEEE]">
        <CommonListing
          type="RenterHome"
          btnTxt="View Booking"
          path=""
          checkout={false}
        />
        <CommonListing
          type="RenterHome"
          btnTxt="View Booking"
          path=""
          checkout={true}
        />
      </div>
      <div className="mt-[24px] flex">
        <button
          className="btn-pri ml-auto"
          onClick={() => navigate("/dashboard/listing/create-listing")}
        >
          Create new listing
        </button>
      </div>
    </div>
  );
};

export default HostHome;
