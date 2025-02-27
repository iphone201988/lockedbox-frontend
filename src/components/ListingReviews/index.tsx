import ListingReviewBox from "../ListingReviewBox";

const ListingReviews = () => {
  return (
    <div>
      {/* reviews */}
      <div className="py-[16px] border-b border-[#EEEEEE]">
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-semibold mb-[6px]">Reviews</p>
          <div className="flex justify-center items-center ">
            <span className="flex gap-[4px] items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_196_1218)">
                  <path
                    d="M5.99995 1.23802L7.37259 4.60759L10.9999 4.87669L8.21955 7.22836L9.08987 10.7617L5.99995 8.84295L2.91003 10.7617L3.78034 7.22836L1 4.87669L4.6273 4.60759L5.99995 1.23802Z"
                    fill="#235370"
                  />
                  <path
                    d="M5.99995 1.23802L4.6273 4.60759L1 4.87669L3.78034 7.22836L2.91003 10.7617L5.99995 8.84295M5.99995 1.23802L7.37259 4.60759L10.9999 4.87669L8.21955 7.22836L9.08987 10.7617L5.99995 8.84295"
                    stroke="#235370"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_196_1218">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <b className="text-[16px] font-normal">4.5</b>
            </span>
            <p className="text-[16px] ml-[4px]">(7 reviews)</p>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(2,_1fr)] gap-[16px] max-sm:grid-cols-[repeat(1,_1fr)]">
          <ListingReviewBox />
          <ListingReviewBox />
          <ListingReviewBox />
          <ListingReviewBox />
        </div>
      </div>
    </div>
  );
};

export default ListingReviews;
