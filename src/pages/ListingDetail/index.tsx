import { Navigate, useNavigate, useParams } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery";
import ListingInfoDetails from "../../components/ListingInfoDetails";
import PoliciesInfo from "../../components/PoliciesInfo";
import ProfileNavbar from "../../components/ProfileNavbar";
import { useGetListingByIdQuery } from "../../redux/api";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";
import DatePicker from "../../components/DatePicker";
import ListingReviews from "../../components/ListingReviews";

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState<any>();
  if (!id) return <Navigate to="/" />;
  const { data, isLoading } = useGetListingByIdQuery(id);

  useEffect(() => {
    if (data?.success) {
      if (!data?.listing) {
        navigate("/", { replace: true });
        return;
      }
      setListing(data.listing);
    }
  }, [data]);

  if (isLoading) return <Loader />;
  return (
    <div className="">
      <ProfileNavbar />
      <div className="max-w-[1120px] mx-auto pt-[24px]">
        {listing && (
          <ImageGallery
            storageImages={listing?.storageImages.map(
              (image: string) => import.meta.env.VITE_BACKEND_URL + image
            )}
          />
        )}
        <div className="flex justify-between gap-[20px] max-lg:flex-col">
          <div className="max-w-[700px] max-lg:max-w-[100%]">
            {listing && <ListingInfoDetails listing={listing} />}
          </div>
          <div className="py-[16px] w-full max-w-[370px]">
            {listing && <DatePicker price={listing?.price} id={listing?._id} />}
          </div>
        </div>
        <div className="">
          <div className="max-w-[520px]">
            {listing && <PoliciesInfo listing={listing} />}
            <ListingReviews />
          </div>
          <div className="for-map"></div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
