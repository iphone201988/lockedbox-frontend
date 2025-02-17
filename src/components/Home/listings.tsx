import ListingBox from "./listing-box";

const Listings = () => {
  return (
    <div className="bg-[#EEEEEE] py-[60px] max-lg:py-[40px]">
      <div className="max-w-[1440px] px-[40px] mx-auto max-lg:px-[20px]">
        <h2 className="text-[36px] font-bold max-lg:text-[26px] max-lg:text-center">
          Featured listings to{" "}
          <span className="text-[#235370]">choose from</span>
        </h2>
        <div className="grid grid-cols-4 gap-[26px] mt-10 max-lg:gap-[16px] max-lg:flex max-lg:flex-wrap max-lg:justify-center">
          <ListingBox />
          <ListingBox />
          <ListingBox />
          <ListingBox />
        </div>
      </div>
    </div>
  );
};

export default Listings;
