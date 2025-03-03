import { useNavigate } from "react-router-dom";
import CommonListing from "../../../../components/Dashboard/CommonListing";
import { useGetUserQuery } from "../../../../redux/api";
import { useEffect, useState } from "react";

const RenterHome = () => {
  const navigate = useNavigate();
  const { data } = useGetUserQuery();
  const [name, setName] = useState("");
  useEffect(() => {
    if (data?.success && data?.userExists) {
      let name = "";
      if (data?.userExists.firstName) name = data?.userExists.firstName;
      if (data?.userExists.lastName) name += " " + data?.userExists.lastName;

      if (name) setName(name);
    }
  }, [data]);
  return (
    <div className="px-[30px] max-lg:px-[20px] ">
      <div className=" py-[10px]  border-b border-[#EEEEEE]">
        <h4 className="text-[22px] font-bold">Hello {name}!</h4>
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
