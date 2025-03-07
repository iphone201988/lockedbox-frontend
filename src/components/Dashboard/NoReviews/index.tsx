import { NoReviewIcon } from "../../../icons";

const NoReviews = () => {
  return (
    <div className="flex flex-col border border-[#EEEEEE] rounded-[16px] p-[40px] gap-[20px] justify-center items-center max-w-[360px]">
      <span>
        <NoReviewIcon />
      </span>
      <p className="text-[18px] font-semibold">No Reviews for now</p>
    </div>
  );
};

export default NoReviews;
