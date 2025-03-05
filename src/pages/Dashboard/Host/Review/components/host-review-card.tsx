import moment from "moment";
import NoUser from "../../../../../assets/icons/if-no-user.png";
import { getUrl } from "../../../../../utils/helper";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

const HostReviewBox = ({ review }: { review: any }) => {
  const { userId: user } = review;
  const date = moment(review.createdAt).format("MMM DD YYYY");
  return (
    <div className="p-[10px] border border-[#EEEEEE] rounded-[16px] max-w-[260px] min-w-[260px] min-h-[160px]">
      <div className="flex items-center gap-[8px]">
        <img
          className="w-[48px] h-[48px] rounded-full object-cover"
          src={user.profileImage ? getUrl(user.profileImage) : NoUser}
          alt=""
        />
        <div className="">
          {user?.firstName && (
            <p className=" font-semibold">{user?.firstName}</p>
          )}
          <p className="text-[14px] text-[#959595]">{date}</p>
        </div>
      </div>
      <div className="flex pt-[10px] gap-[4px]">
        <ReactStars
          value={review?.averageRating}
          count={5}
          size={30}
          activeColor="#235370"
          isHalf={true}
          edit={false}
        />
      </div>
      <p className="text-[14px] mt-[8px]">{review.comment}</p>
    </div>
  );
};

export default HostReviewBox;
