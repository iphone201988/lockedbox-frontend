import { useEffect, useState } from "react";
import CheckInConfirmPopup from "../../../components/Popups/ConfirmCheckIn";
import CheckInPopup from "../../../components/Popups/CheckInPopUp";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  useBookingCheckInMutation,
  useGetListingByIdQuery,
  useGetUserQuery,
} from "../../../redux/api";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";
import { getUrl, handleError } from "../../../utils/helper";
import moment from "moment";

const initialState = {
  images: false,
  dispute: false,
  confirm: false,
};

const CheckIn = () => {
  const { bookingId, listingId } = useParams();
  const navigate = useNavigate();
  if (!bookingId || !listingId) return <Navigate to="/" />;

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [listing, setListing] = useState<any>({});
  const [imageItems, setImageItems] = useState<ImageItem[]>([]);
  const [showPopups, setShowPopups] = useState(initialState);
  const [note, setNote] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const { data: userData } = useGetUserQuery();
  const { data: listingData, isLoading } = useGetListingByIdQuery(listingId);

  const [bookingCheckIn, { data, isLoading: checkingIn }] =
    useBookingCheckInMutation();

  useEffect(() => {
    if (listingData?.success) {
      setListing(listingData?.listing);
    }
  }, [listingData]);

  useEffect(() => {
    if (userData?.success) {
      const { dashboardRole } = userData?.userExists;
      setRole(dashboardRole);
    }
  }, [userData]);

  const completeCheckIn = async () => {
    if (!imageItems.length) {
      toast.error("Please upload images");
      return;
    }
    if (imageItems.length < 2) {
      toast.error("Please upload atleast 2 images");
      return;
    }

    const formData = new FormData();
    formData.append("bookingId", bookingId);
    formData.append("agree", "true");
    formData.append("checkInDate", moment().toString());
    if (note) formData.append("note", note);

    imageItems.forEach((image) => {
      if (image?.file) formData.append("images", image.file);
    });

    await bookingCheckIn(formData)
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      setShowPopups({ ...initialState, confirm: true });
    }
  }, [data]);

  return (
    <>
      {(isLoading || checkingIn) && <Loader />}
      <div className="px-[30px] py-[32px] max-lg:px-[20px]">
        <div className="max-w-[500px] border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
          <div className="flex gap-[12px] max-md:flex-col w-full ">
            <img
              className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
              src={getUrl(listing?.storageImages?.[0])}
              alt=""
            />
            <div className="storage-details flex flex-col gap-[4px] w-full">
              <p className="text-[18px] font-semibold max-md:text-[16px]">
                {listing.spaceType} for Storage at {listing.city}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[24px]">
          <div className="flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]">
            <div className="max-w-[380px] w-full max-md:max-w-full">
              <p className="text-[18px] text-[#235370] font-semibold">
                Step 1: Confirm {role == "rent" ? "Host" : "Renter"} Space{" "}
                <span className="text-red-500">*</span>
              </p>
            </div>
            <div className=" max-w-[440px] w-full max-md:max-w-full">
              <div className="">
                <label className="flex  items-start gap-[8px]" htmlFor="">
                  <input
                    className="w-[24px] h-[24px] min-w-[24px] rounded-[5px] accent-[#235370] cursor-pointer"
                    type="checkbox"
                    value={isChecked ? 1 : 0}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <p>
                    I confirm that I have read and understood the{" "}
                    <Link
                      className="text-[#235370] underline"
                      to="/terms-and-conditions"
                    >
                      Safe Storage
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-[#235370] underline"
                      to="/privacy-policy"
                    >
                      Prohibited Items Policy
                    </Link>
                    {role == "rent"
                      ? ". I agree that I am satisfied with the host's storage space and that the items I am storing comply fully with the prohibited items policy."
                      : ". I agree that I am satisfied with the items the renter will store in my space and that the items the renter is storing comply fully with the prohibited items policy."}
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
            <div className="max-w-[380px] w-full max-md:max-w-full">
              <p className="text-[18px] text-[#235370] font-semibold">
                Step 2: Upload photos of {role == "rent" ? "your" : "Renter"}'s
                items <span className="text-red-500">*</span>
              </p>
            </div>
            <div className=" max-w-[440px] w-full max-md:max-w-full">
              <div className="flex flex-col gap-[16px]">
                <p>
                  Please upload a minimum of two (2) photos. These images will
                  serve as a reference in the event of any disputes.
                </p>
                <div className="flex items-center">
                  {imageItems.length >= 2 && (
                    <p className="text-green-500">Photos Uploaded!</p>
                  )}
                  <button
                    className="btn-pri ml-auto"
                    onClick={() =>
                      setShowPopups({ ...initialState, images: true })
                    }
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For Host  */}

          {role == "host" && (
            <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
              <div className="max-w-[380px] w-full max-md:max-w-full">
                <p className="text-[18px] text-[#235370] font-semibold">
                  Step 3: Note Existing Damages
                </p>
              </div>
              <div className=" max-w-[600px] w-full max-md:max-w-full">
                <div className="flex flex-col gap-[8px]">
                  <p className=" font-semibold">
                    Please note any existing damages on the renters items. This
                    protects you from the renter making false claims (Optional)
                  </p>
                  <textarea
                    className="h-[180px] border border-[#EEEEEE] rounded-[16px] p-[16px]"
                    placeholder="Enter here"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          <div className="flex py-[24px] max-md:flex-col max-md:gap-[20px]">
            <div className="max-w-[380px] w-full max-md:max-w-full">
              <p className="max-w-[300px]">
                You must confirm the {role == "rent" ? "Host" : "Renter"}'s
                space is adequate before completing renter check in. Problem
                with the {role == "rent" ? "Host" : "Renter"}'s space? Please
                see our{" "}
                <Link to="/faq" className="text-[#235370] underline">
                  FAQ
                </Link>{" "}
                page for dispute options.
              </p>
            </div>
            <div className=" max-w-[440px] w-full max-md:max-w-full">
              <div className="flex flex-col gap-[16px]">
                {!isChecked && (
                  <button
                    className="btn-pri ml-auto !bg-[#FF3636] !border-0"
                    onClick={() =>
                      setShowPopups({ ...initialState, dispute: true })
                    }
                  >
                    Dispute Booking
                  </button>
                )}

                {isChecked && (
                  <button
                    className={`btn-pri ml-auto  ${
                      imageItems.length >= 2 ? "!bg-green-600" : "!bg-[#959595]"
                    } !border-0`}
                    onClick={completeCheckIn}
                  >
                    Complete {role == "rent" ? "Renter" : "Host"} Check in
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {showPopups.images && (
          <CheckInPopup
            listing={listing}
            handleClose={() =>
              setShowPopups({ ...initialState, images: false })
            }
            dispute={false}
            imageItems={imageItems}
            setImageItems={setImageItems}
            role={role}
            bookingId={bookingId}
          />
        )}
        {showPopups.dispute && (
          <CheckInPopup
            listing={listing}
            handleClose={() =>
              setShowPopups({ ...initialState, images: false })
            }
            dispute={true}
            imageItems={imageItems}
            setImageItems={setImageItems}
            role={role}
            bookingId={bookingId}
          />
        )}
        {showPopups.confirm && (
          <CheckInConfirmPopup
            listing={listing}
            handleClose={() =>
              setShowPopups({ ...initialState, images: false })
            }
          />
        )}
      </div>
    </>
  );
};

export default CheckIn;
