import { useNavigate } from "react-router-dom";
import PropertyListingCard from "../../../../components/Dashboard/PropertyListingCard";
import { useLazyGetAllListingsQuery } from "../../../../redux/api";
import { useEffect, useState } from "react";
import Loader from "../../../../components/Loader";
import { usePagination } from "../../../../hooks/usePagination";

const HostListings = () => {
  const navigate = useNavigate();
  // const { data, isLoading } = useGetAllListingsQuery();
  const [getAllListings, { data, isLoading, isFetching }] =
    useLazyGetAllListingsQuery();
  const [listing, setListing] = useState<ListingType[]>([]);

  const {
    pagination,
    setPagnation,
    scrollableRef,
    handleScroll,
    restoreScrollPosition,
  } = usePagination({
    scrollDown: false,
    fetchData: () => {
      getAllListings({ page: pagination.page });
    },
  });

  useEffect(() => {
    if (data?.success) {
      const { pagination } = data;

      const listings: ListingType[] = data.listings.map((listing: any) => ({
        id: listing._id,
        address: listing.address,
        city: listing.city,
        spaceType: listing.spaceType,
        status: listing.status,
        width: listing.width,
        length: listing.length,
        price: listing.price,
        storageImages: listing.storageImages,
        allowedStorage: listing.allowedStorage,
      }));

      setPagnation((prev: any) => ({
        ...prev,
        totalPages: pagination.totalPages,
      }));

      setListing((prev: any) => [...prev, ...listings]);
      restoreScrollPosition();
    }
  }, [data]);

  useEffect(() => {
    getAllListings({ page: pagination.page });
  }, []);

  return (
    <div className="px-[30px] max-lg:px-[20px] pb-[100px] relative  h-[calc(100%-100px)]">
      {(isLoading || isFetching) && <Loader />}
      <div className=" flex pb-[12px] pt-[32px] border-b border-[#EEEEEE] max-md:hidden">
        <p className="text-[#235370] font-semibold w-[60%] max-lg:w-[50%]">
          Property
        </p>
        <p className="text-[#235370] font-semibold w-[15%] max-lg:w-[20%]">
          Measurements
        </p>
        <p className="text-[#235370] font-semibold w-[15%]">List Price</p>
        <p className="text-[#235370] text-right font-semibold w-[10%]  max-lg:w-[15%]">
          Status
        </p>
      </div>
      <div
        className="mt-[16px] flex flex-col gap-[16px] h-full overflow-auto no-scrollbar"
        ref={scrollableRef}
        onScroll={!isLoading && !isFetching ? handleScroll : () => {}}
      >
        {listing &&
          listing.map((list, index: number) => (
            <PropertyListingCard key={index} {...list} />
          ))}
      </div>
      <div className="w-full py-[24px] flex justify-end fixed left-[-30px] bottom-[10px] z-[999]">
        <button
          className="btn-pri"
          onClick={() => navigate("/dashboard/listing/create-listing")}
        >
          Create new listing
        </button>
      </div>
    </div>
  );
};

export default HostListings;
