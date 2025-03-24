import { allowedStorage as allowedStorageType } from "../../constants/index";
import NoUser from "../../assets/icons/if-no-user.png";
import { getUrl } from "../../utils/helper";

const ListingInfoDetails = ({ listing }: { listing: any }) => {
  console.log("listing::::", listing);
  const icons = listing.allowedStorage.map((storage: string) => {
    return allowedStorageType.find((allowedStorage: any) => {
      if (allowedStorage.name == storage) return allowedStorage;
    });
  });
  return (
    <div className="">
      <div className="flex justify-between items-center py-[16px] border-b border-[#EEEEEE]">
        <div className="">
          <p className="text-[26px] font-semibold max-md:text-[20px] max-sm:text-[18px]">
            {listing?.spaceType} for Storage
          </p>
          <p className="location text-[18px] text-[#959595] max-sm:text-[16px]">{listing?.city}</p>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <span className="flex gap-[4px] items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_196_1218)">
                  <path
                    d="M5.99995 1.23802L7.37259 4.60759L10.9999 4.87669L8.21955 7.22836L9.08987 10.7617L5.99995 8.84295L2.91003 10.7617L3.78034 7.22836L1 4.87669L4.6273 4.60759L5.99995 1.23802Z"
                    fill="#235370"
                  />
                  <path
                    d="M5.99995 1.23802L4.6273 4.60759L1 4.87669L3.78034 7.22836L2.91003 10.7617L5.99995 8.84295M5.99995 1.23802L7.37259 4.60759L10.9999 4.87669L8.21955 7.22836L9.08987 10.7617L5.99995 8.84295"
                    stroke="#235370"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_196_1218">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {listing.averageRating ? (
                <b className="text-[16px] font-normal max-md:text-[14px]">
                  {Number(listing.averageRating).toFixed(2)}
                </b>
              ) : (
                <></>
              )}
            </span>
            <p className="text-[16px] ml-[4px]">
              ({listing.totalReviews ? listing.totalReviews : "No"} reviews)
            </p>
          </div>
          <p className="text-[18px] text-[#959595] mt-[6px] text-right max-sm:text-[16px]">
            <b className="text-[#000000]">Size:</b> {listing.length}’x
            {listing.width}’
          </p>
        </div>
      </div>

      {/* host name */}
      <div className=" py-[16px] border-b border-[#EEEEEE]">
        <div className=" flex gap-[8px] items-center">
          <img
            className="w-[48px] h-[48px] object-cover rounded-full"
            src={
              listing.userId[0]?.profileImage
                ? getUrl(listing.userId[0]?.profileImage)
                : NoUser
            }
            alt=""
          />
          <div className="">
            <p>Meet your host {listing.userId[0]?.firstName}</p>
            <span className="text-[14px] text-[#959595]">
              5+ years of hosting experience
            </span>
          </div>
        </div>
      </div>
      {/* About this place */}
      <div className="py-[16px] border-b border-[#EEEEEE]">
        <p className="text-[18px] font-semibold mb-[6px]">About this place</p>
        <p>{listing?.description}</p>
      </div>

      {/* Additional features */}
      <div className="py-[16px] border-b border-[#EEEEEE]">
        <p className="text-[18px] font-semibold mb-[6px]">
          Additional features
        </p>
        <ul className="list-disc list-inside flex flex-col gap-[6px]">
          <li>Climate Control</li>
          <li>Security</li>
          <li>Cameras</li>
        </ul>
      </div>

      {/* storage info */}
      <div className="py-[16px] border-b border-[#EEEEEE]">
        <div className=" flex flex-wrap gap-x-[40px] gap-y-[16px]">
          {icons.map((item: any) => (
            <div className="w-[40%] flex items-center gap-[8px] max-sm:w-full">
              <span className="flex gap-[5px] w-[24px] h-[24px] items-center">
                {item.icon}
              </span>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingInfoDetails;
