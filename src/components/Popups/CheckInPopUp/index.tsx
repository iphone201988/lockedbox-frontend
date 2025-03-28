import { useEffect, useRef, useState } from "react";
import CloseIcon from "../../../assets/icons/close-icn.png";
import DeleteIcon from "../../../assets/icons/delete-icn.png";
import { useBookingDisputeMutation } from "../../../redux/api";
import Loader from "../../Loader";
import { useNavigate } from "react-router-dom";
import { getUrl, handleError } from "../../../utils/helper";
import { toast } from "react-toastify";

const MIN_LIMIT = 2;
const MAX_LIMIT = 5;

const CheckInPopup = ({
  listing,
  handleClose,
  dispute,
  imageItems,
  setImageItems,
  role,
  bookingId,
}: CheckInPopup) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [issue, setIssue] = useState<string>("");
  const navigate = useNavigate();

  const [bookingDispute, { data, isLoading }] = useBookingDisputeMutation();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const totalImages = imageItems.length + files.length;

    if (totalImages > MAX_LIMIT) {
      alert(`Maximum ${MAX_LIMIT} images allowed`);
      return;
    }

    const validImages = files.filter((file) => file.type.startsWith("image/"));
    const newItems = validImages.map((file) => {
      const url = URL.createObjectURL(file);
      return {
        id: url, // Using temp URL as ID; could use a UUID if preferred
        url,
        file,
      };
    });
    setImageItems((prev) => [...prev, ...newItems]);
  };

  const handleImageRemove = (id: string) => {
    setImageItems((prev) => prev.filter((image) => image.id !== id));
  };

  const handleSubmit = () => {
    const totalImages = imageItems.length;

    if (totalImages < MIN_LIMIT) {
      alert(`Minimum ${MIN_LIMIT} images are required`);
      return;
    }

    handleClose();
  };

  const handleDispute = async () => {
    if (!imageItems.length) {
      toast.error("Please upload images");
      return;
    }
    if (imageItems.length < 2) {
      toast.error("Please upload atleast 2 images");
      return;
    }

    const formData = new FormData();
    formData.append("bookingId", bookingId!);
    formData.append("desc", issue);

    imageItems.forEach((image) => {
      if (image?.file) formData.append("images", image.file);
    });

    await bookingDispute(formData)
      .unwrap()
      .catch((error) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      navigate("/dashboard/booking");
      handleClose();
    }
  }, [data]);

  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      {isLoading && <Loader />}
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button className=" absolute right-[20px] top-[20px]">
          <img
            src={CloseIcon}
            alt=""
            className="cursor-pointer"
            onClick={handleClose}
          />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
            Upload Photos
          </p>
        </header>
        <body className="max-w-full mx-auto">
          <div className="flex flex-col items-center justify-center border-b border-[#EEEEEE] pb-[10px] mb-[10px]">
            <img
              className="w-[130px] h-[115px] rounded-[12px] object-cover"
              src={getUrl(listing?.storageImages?.[0])}
              alt=""
            />
            <p className="text-[18px] font-semibold mt-[10px]">
              {listing.spaceType} for Storage at {listing.city}
            </p>
          </div>
          {dispute && (
            <div className="mb-[16px]">
              <p className=" font-semibold mb-[6px]">
                {role == "rent"
                  ? "Describe the issue and include pictures if applicable. The host may be notified if the investigation progresses."
                  : "Describe the reason for cancellation for the renter."}
              </p>
              <div className="w-full max-w-[100%]">
                <textarea
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer h-[120px]"
                  placeholder="Describe issue"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                ></textarea>
              </div>
            </div>
          )}

          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">
              {dispute
                ? "Entering into a dispute will cancel the booking. Are you sure you  wish to continue with the dispute?"
                : "Please upload or take a minimum of two (2) photos of your items"}
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            {imageItems.map((image) => (
              <div className="border w-full border-[#EEEEEE] p-[8px] flex rounded-[16px] items-center gap-[8px] ">
                <img
                  className="w-[46px] h-[46px] rounded-[8px] object-cover"
                  src={image.url}
                  alt=""
                />
                <p>Dispute {image?.file?.name}</p>
                <img
                  className="ml-auto cursor-pointer"
                  src={DeleteIcon}
                  alt=""
                  onClick={() => handleImageRemove(image.id)}
                />
              </div>
            ))}
          </div>

          <div className="flex gap-[10px]">
            <input
              type="file"
              className="hidden"
              ref={imageRef}
              onChange={handleImageUpload}
              multiple
            />
            <button
              className="btn-sec mr-auto !block mt-[16px]"
              onClick={() => {
                if (imageRef.current) imageRef.current.click();
              }}
            >
              Upload Pic
            </button>
            {!dispute && (
              <button
                className="btn-pri !block mt-[16px]"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
            {dispute && (
              <>
                <button
                  className="btn-sec !block mt-[16px] cursor-pointer"
                  onClick={handleClose}
                >
                  No
                </button>
                <button
                  className="btn-pri !block mt-[16px] bg-red-600! cursor-pointer"
                  onClick={handleDispute}
                >
                  Dispute & Cancel
                </button>
              </>
            )}
          </div>
        </body>
      </div>
    </div>
  );
};

export default CheckInPopup;
