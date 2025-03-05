import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import YourReviews from "../../../../components/Dashboard/Review";
import {
  useFetchPendingReviewsByRenterQuery,
  useFindMyReviewsQuery,
} from "../../../../redux/api";
import Loader from "../../../../components/Loader";
import { useEffect, useState } from "react";
import ReviewCard from "./components/review-card";
import { NoReviewIcon } from "../../../../icons";

const RenterReviews = () => {
  const { data, isLoading } = useFetchPendingReviewsByRenterQuery();
  const { data: reviewsData, isLoading: reviewsLoading } =
    useFindMyReviewsQuery();
  const [bookings, setBookings] = useState([]);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    if (data?.success) {
      setBookings(data?.bookingsWithoutReviews);
    }
  }, [data]);

  useEffect(() => {
    if (reviewsData?.success) {
      setMyReviews(reviewsData?.reviews);
    }
  }, [reviewsData]);

  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      {(isLoading || reviewsLoading) && <Loader />}
      <Tabs className={" border-0"}>
        <TabList>
          <Tab>Review a host</Tab>
          <Tab>Your reviews</Tab>
        </TabList>

        <TabPanel>
          <div className=" flex gap-[16px] flex-col">
            {bookings.length ? (
              bookings.map((booking: any) => (
                <ReviewCard
                  path={`/dashboard/reviews/give-review/${booking.listingId._id}`}
                  booking={booking}
                />
              ))
            ) : (
              <div className="flex flex-col border border-[#EEEEEE] rounded-[16px] p-[40px] gap-[20px] justify-center items-center max-w-[360px]">
                <span>
                  <NoReviewIcon />
                </span>
                <p className="text-[18px] font-semibold">No Reviews for now</p>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex gap-[16px] flex-wrap">
            {myReviews.length ? (
              myReviews.map((review, index: number) => (
                <YourReviews key={index} review={review} />
              ))
            ) : (
              <div className="flex flex-col border border-[#EEEEEE] rounded-[16px] p-[40px] gap-[20px] justify-center items-center max-w-[360px]">
                <span>
                  <NoReviewIcon />
                </span>
                <p className="text-[18px] font-semibold">No Reviews for now</p>
              </div>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RenterReviews;
