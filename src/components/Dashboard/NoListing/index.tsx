import { useNavigate } from "react-router-dom";
import { NoMessageIcon, NoPaymentIcon, NoRequestIcon } from "../../../icons";

const NoListing = ({
  type,
}: {
  type: "messages" | "payments" | "requests";
}) => {
  const navigate = useNavigate();

  const iconMap = {
    messages: <NoMessageIcon />,
    requests: <NoRequestIcon />,
    payments: <NoPaymentIcon />,
  };
  return (
    <div className="w-full p-[20px] h-full flex items-center justify-center flex-col">
      {iconMap[type]}

      <div className="mt-[16px] mb-[20px]">
        <p className="text-[18px] text-center mb-[10px]">
          You currently do not have any <br />{" "}
          <span className=" capitalize"> {type}</span> yet
        </p>
        <p className="text-[24px] font-semibold"></p>
      </div>
      {type == "messages" || type == "payments" ? (
        <button className="btn-pri" onClick={() => navigate("/dashboard/home")}>
          Back to home
        </button>
      ) : (
        <button
          className="btn-pri"
          onClick={() => navigate("/dashboard/listing/create-listing")}
        >
          Create New Listing
        </button>
      )}
    </div>
  );
};

export default NoListing;
