import { useEffect, useState } from "react";
import { useGetHomeListingsQuery } from "../../redux/api";
import Loader from "../Loader";
import ListingBox from "./listing-box";

const Listings = () => {
  const { data, isLoading } = useGetHomeListingsQuery();
  const [listings, setListings] = useState([]);
  useEffect(() => {
    if (data?.success) {
      setListings(data?.listings);
    }
  }, [data]);

  if (isLoading) return <Loader />;
  if (!listings.length) return <></>;
  return (
    <div className="bg-[#f7f7f7] py-[60px] max-lg:py-[40px]">
      {isLoading && <Loader />}
      <div className="max-w-[1440px] px-[40px] mx-auto max-lg:px-[20px]">
        <h2 className="text-[36px] font-bold max-lg:text-[26px] max-lg:text-center">
          Available storage space near
          <span className="text-[#235370]"> Vancouver</span>
        </h2>
        <p className="text-[24px] font-medium mt-[6px] max-lg:text-center">Store in safe, affordable, and convenient spaces near you</p>
        <div className=" relative ">
          <button className="flex z-[9999] justify-center items-center leading-[1] w-[42px] h-[42px] absolute left-[-60px] top-[calc(50%-50px)] text-white text-4xl bg-[#235370] bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 cursor-pointer  hover:bg-[#235270cb] max-2xl:left-[20px]">‹</button>
          <div className="grid grid-cols-4 gap-[26px] mt-10 max-lg:gap-[16px] max-lg:flex max-lg:flex-wrap max-lg:justify-center">
          {listings.length ? (
            listings.map((listing: any, index: number) => (
              <ListingBox listing={listing} key={index} />
            ))
          ) : (
            <></>
          )}
        </div>
        <button className="flex z-[9999] justify-center items-center leading-[1] w-[42px] h-[42px] absolute right-[-60px] top-[calc(50%-50px)] text-white text-4xl bg-[#235370] bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 cursor-pointer  hover:bg-[#235270cb] max-2xl:right-[20px]">›</button>
        </div>
        
      </div>
    </div>
  );
};

export default Listings;
