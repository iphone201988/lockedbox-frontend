import { StarIcon } from "../../icons";
import HostReviewBox from "../../pages/Dashboard/Host/Review/components/host-review-card";
import NoReviews from "../Dashboard/NoReviews";

const ListingReviews = ({ listing }: { listing: any }) => {
  return (
    <div>
      {/* reviews */}
      <div className="py-[16px] border-b border-[#EEEEEE]">
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-semibold mb-[6px]">Reviews</p>
          <div className="flex justify-center items-center ">
            <span className="flex gap-[4px] items-center">
              <StarIcon />
              {listing.averageRating ? (
                <b className="text-[16px] font-normal">
                  {Number(listing.averageRating).toFixed(1)}
                </b>
              ) : (
                <></>
              )}
            </span>
            <p className="text-[16px] ml-[4px]">
              ({listing.totalReviews ? listing.totalReviews : "No"} reviews)
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(2,_1fr)] gap-[16px] max-sm:grid-cols-[repeat(1,_1fr)]">
          {listing.reviews.length ? (
            listing.reviews.map((review: any) => {
              return (
                <HostReviewBox
                  review={{ ...review, userId: review.userId[0] }}
                />
              );
            })
          ) : (
            <NoReviews />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingReviews;
