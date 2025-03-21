import { useEffect, useState } from "react";
import StarIcon from "../../../../../assets/icons/review-star-icn-empty.png";
import { useFindHostReviewsQuery } from "../../../../../redux/api";
import HostReviewBox from "./host-review-card";
import Loader from "../../../../../components/Loader";
import NoReviews from "../../../../../components/Dashboard/NoReviews";

const HostReviews = () => {
  const { data, isLoading } = useFindHostReviewsQuery();
  const [reviewsData, setReviewsData] = useState<any>();

  useEffect(() => {
    if (data?.success) {
      setReviewsData({
        averageRating: data?.averageRating,
        percentagerentAgain: data?.percentagerentAgain,
        reviews: data?.reviews,
      });
    }
  }, [data]);
  return (
    <div>
      {isLoading && <Loader />}
      {reviewsData?.reviews?.length > 0 && (
        <div className="border border-[#EEEEEE] rounded-[8px] p-[20px] max-w-[600px] flex justify-between max-md:flex-col max-md:gap-[16px]">
          <div className="flex items-center gap-[12px] w-[50%] justify-center border-r border-[#EEEEEE] max-md:border-0 max-md:justify-start max-md:w-full">
            <span className="bg-[#235370] p-[16px] rounded-full">
              <img className="w-[24px] h-[24px]" src={StarIcon} alt="" />
            </span>
            <p className="text-[18px] font-semibold">
              {Number(reviewsData?.averageRating).toFixed(2)} (
              {reviewsData?.reviews.length} reviews)
            </p>
          </div>
          <div className="flex items-center gap-[12px] w-[50%] justify-center max-md:justify-start max-md:w-full">
            <span className="bg-[#235370] py-[16px] px-[8px] rounded-full">
              <p
                className={`text-[20px] font-semibold text-white px-2 ${
                  reviewsData?.percentagerentAgain > 9 ? "" : "px-2"
                }`}
              >
                {reviewsData?.percentagerentAgain}%
              </p>
            </span>
            <p className="text-[18px] font-semibold">would rent again</p>
          </div>
        </div>
      )}

      <div className="mt-[16px] flex gap-[16px] flex-wrap">
        {reviewsData?.reviews?.length ? (
          reviewsData.reviews.map((review: any) => (
            <HostReviewBox review={review} />
          ))
        ) : (
          <NoReviews />
        )}
      </div>
    </div>
  );
};

export default HostReviews;
