import ImageGallery from "../../components/ImageGallery";
import ListingInfoDetails from "../../components/ListingInfoDetails";
import PoliciesInfo from "../../components/PoliciesInfo";
import ProfileNavbar from "../../components/ProfileNavbar";

const ListingDetail = () => {
  return (
    <div className="">
      <ProfileNavbar />
      <div className="max-w-[1120px] mx-auto pt-[24px]">
        <ImageGallery />
        <div className="">
          <div className="max-w-[700px]">
            <ListingInfoDetails />
          </div>
          <div className="select-dates"></div>
        </div>
        <div className="">
          <div className="max-w-[520px]">
            <PoliciesInfo />
          </div>
          <div className="for-map"></div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
