import { useParams } from "react-router-dom";
import ListingManagement from "../../components/listing-management";
import { useLazyGetUserListingsQuery } from "../../../../redux/api/admin";
import Loader from "../../../../components/Loader";
import { usePagination } from "../../../../hooks/usePagination";
import { useEffect, useState } from "react";
import { allowedStorage as allowedStorageType } from "../../../../constants/index";

const AdminListing = () => {
  const { id } = useParams();
  const [listings, setListings] = useState<AdminListingType[] | null>(null);
  const [getUserListings, { data, isLoading, isFetching }] =
    useLazyGetUserListingsQuery();
  const {
    pagination,
    setPagnation,
    scrollableRef,
    handleScroll,
    restoreScrollPosition,
  } = usePagination({
    scrollDown: false,
    fetchData: () => getUserListings({ id, page: pagination.page }),
  });

  useEffect(() => {
    if (data?.success) {
      const { pagination, listings } = data;

      const listingsData: AdminListingType[] = listings.map((listing: any) => {
        const icons = listing.allowedStorage.map((storage: string) => {
          return allowedStorageType.map((allowedStorage: any) => {
            if (allowedStorage.name == storage) return allowedStorage.icon;
          });
        });
        return {
          id: listing._id,
          city: listing.city,
          spaceType: listing.spaceType,
          address: listing.address,
          price: listing.price,
          status: listing.status,
          image: listing.storageImages[0],
          length: listing.length,
          width: listing.width,
          allowedStorage: icons,
        };
      });

      setListings((prev) => [...(prev ? prev : []), ...listingsData]);
      setPagnation((prev: any) => ({
        ...prev,
        totalPages: pagination.totalPages,
      }));
      restoreScrollPosition();
    }
  }, [data]);

  useEffect(() => {
    if (id) {
      getUserListings({ id, page: pagination.page });
    }
  }, []);

  return (
    <div
      className="flex flex-col gap-[16px] h-full overflow-auto no-scrollbar"
      ref={scrollableRef}
      onScroll={handleScroll}
    >
      {(isLoading || isFetching) && <Loader />}
      {listings ? (
        listings.map((listing, index: number) => (
          <ListingManagement key={index} listing={listing} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdminListing;
