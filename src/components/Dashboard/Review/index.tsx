import moment from "moment";
import { getUrl } from "../../../utils/helper";
import NoUser from "../../../assets/icons/if-no-user.png";

const YourReviews = ({ review }: { review: any }) => {
  const { hostId: host } = review;
  const date = moment(review.createdAt).format("MMM DD YYYY");
  return (
    <div className="p-[10px] border border-[#EEEEEE] rounded-[16px] max-w-[260px] min-w-[260px] min-h-[160px]">
      <div className="flex items-center gap-[8px]">
        <img
          className="w-[48px] h-[48px] rounded-full object-cover"
          src={host?.profileImage ? getUrl(host?.profileImage) : NoUser}
          alt=""
        />
        <div className="">
          {host?.firstName && (
            <p className=" font-semibold">{host.firstName}</p>
          )}
          <p className="text-[14px] text-[#959595]">{date}</p>
        </div>
      </div>
      <p className="text-[14px] mt-[8px]">{review?.comment}</p>
    </div>
  );
};

export default YourReviews;
