import { useState } from "react";
import ImageCarousel from "../ImageCarousel";

const ImageGallery = ({ storageImages }: { storageImages: string[] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) =>
      prev !== null
        ? (prev - 1 + storageImages.length) % storageImages.length
        : null
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev + 1) % storageImages.length : null
    );
  };

  return (
    <div className="flex min-h-[480px] max-h-[480px] max-md:min-h-[320px]">
      {/* Left main image */}
      <div
        className={`for-fix-image ${
          storageImages.length == 1 ? "w-[100%]" : "w-[50%]"
        } max-md:w-full`}
      >
        <ImageCarousel
          className="rounded-l-[16px] w-full h-full object-cover max-md:rounded-[16px] overflow-hidden"
          url={storageImages[0]}
          onClick={() => handleImageClick(0)}
        />
      </div>

      {/* Middle column */}
      <div className="for-fix-image w-[25%] mx-[12px] max-lg:mr-[0] flex flex-col gap-[12px] max-lg:w-[50%] max-lg:ml-[12px] max-md:hidden">
        {storageImages[1] && (
          <ImageCarousel
            className="w-full h-full object-cover max-lg:min-h-[49%] overflow-hidden"
            url={storageImages[1]}
            onClick={() => handleImageClick(1)}
          />
        )}
        {storageImages[2] && (
          <ImageCarousel
            className="w-full h-full object-cover max-lg:min-h-[49%] overflow-hidden"
            url={storageImages[2]}
            onClick={() => handleImageClick(2)}
          />
        )}
      </div>

      {/* Right column */}
      <div className="for-fix-image for-fix-image w-[25%] flex flex-col gap-[12px] max-lg:hidden">
        {storageImages[3] && (
          <ImageCarousel
            className="w-full h-full rounded-tr-[16px] object-cover overflow-hidden"
            url={storageImages[3]}
            onClick={() => handleImageClick(3)}
          />
        )}
        {storageImages[4] && (
          <ImageCarousel
            className="w-full h-full rounded-br-[16px] object-cover overflow-hidden"
            url={storageImages[4]}
            onClick={() => handleImageClick(4)}
          />
        )}
      </div>

      {/* Modal overlay */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-[#000000bf] bg-opacity-20 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className=" max-w-5xl max-h-[90vh]">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-white text-4xl z-50 hover:opacity-75 cursor-pointer"
              >
                &times;
              </button>

              <img
                src={storageImages[selectedImageIndex]}
                className="max-w-full max-h-[90vh] object-contain"
                alt=""
              />

              {storageImages.length > 1 && (
                <>
                  <div className="">
                    <button
                      onClick={goToPrevious}
                      className="flex justify-center items-center leading-[1] w-[56px] h-[56px] absolute left-16 top-1/2 -translate-y-1/2 text-white text-4xl bg-[#235370] bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 cursor-pointer max-mlg:bottom-[20px] max-mlg:top-auto"
                    >
                      &#8249;
                    </button>
                    <button
                      onClick={goToNext}
                      className="flex justify-center items-center leading-[1] w-[56px] h-[56px] absolute right-16 top-1/2 -translate-y-1/2 text-white text-4xl bg-[#235370] bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 cursor-pointer max-mlg:bottom-[20px] max-mlg:top-auto"
                    >
                      &#8250;
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
