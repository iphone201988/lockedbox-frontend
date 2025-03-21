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
  return (
    <div className="bg-[#EEEEEE] py-[60px] max-lg:py-[40px]">
      {isLoading && <Loader />}
      <div className="max-w-[1440px] px-[40px] mx-auto max-lg:px-[20px]">
        <h2 className="text-[36px] font-bold max-lg:text-[26px] max-lg:text-center">
          Featured listings to
          <span className="text-[#235370]"> choose from</span>
        </h2>
        <div className="grid grid-cols-4 gap-[26px] mt-10 max-lg:gap-[16px] max-lg:flex max-lg:flex-wrap max-lg:justify-center">
          {listings.length ? (
            listings.map((listing: any) => <ListingBox listing={listing} />)
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;
