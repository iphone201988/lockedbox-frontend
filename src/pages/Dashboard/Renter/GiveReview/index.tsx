import { useEffect, useState } from "react";
import ConfirmReview from "../../../../components/Popups/ConfirmReview";
import Ratings from "./components/ratings";
import ReviewFor from "./components/review-for";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  useGetListingByIdQuery,
  useGetUserQuery,
  useGiveReviewToHostMutation,
} from "../../../../redux/api";
import Loader from "../../../../components/Loader";
import { handleError } from "../../../../utils/helper";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../../../constants/api-responses";

const ReviewYourHost = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) return <Navigate to="/" />;

  const { data: userData } = useGetUserQuery();
  const { data, isLoading } = useGetListingByIdQuery(id);
  const [
    giveReviewToHost,
    { data: hostRatingData, isLoading: hostRatingLoading },
  ] = useGiveReviewToHostMutation();
  const [listing, setListing] = useState<any>();
  const [comments, setComments] = useState("");

  const [ratings, setRatings] = useState({
    communication: 0,
    accuracy: 0,
    safety: 0,
    cleanliness: 0,
    rentAgain: true,
  });

  const handleSubmit = async () => {
    await giveReviewToHost({
      ...ratings,
      comment: comments ? comments : undefined,
      listingId: listing?._id,
      hostId: listing?.userId[0]._id,
    })
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      setListing(data.listing);
    }
  }, [data]);

  useEffect(() => {
    if (hostRatingData?.success) {
      toast.success(ResponseMessages.REVIEW_GIVEN);
      navigate("/dashboard/reviews");
    }
  }, [hostRatingData]);

  return (
    <div className="px-[30px] max-lg:px-[20px] ">
      {(isLoading || hostRatingLoading) && <Loader />}
      <div className=" py-[10px]  border-b border-[#EEEEEE]">
        <h4 className="text-[22px] font-bold">
          Review your Host {userData?.userExists?.firstName}
        </h4>
        <p>Give review</p>
      </div>
      <div className=" py-[24px] flex gap-[16px] max-md:flex-col">
        <div className=" w-full max-w-[440px] max-md:max-w-full">
          {listing && <ReviewFor listing={listing} />}

          <div className="w-full mt-[16px]">
            <textarea
              className="border border-[#EEEEEE] rounded-[16px] p-[16px] w-full min-h-[140px]"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Add Comments"
            ></textarea>
          </div>
        </div>
        <div className=" w-full">
          <Ratings
            ratings={ratings}
            setRatings={setRatings}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>

      <div className="">
        {showPopup && <ConfirmReview setShowPopup={setShowPopup} />}
      </div>
    </div>
  );
};

export default ReviewYourHost;
