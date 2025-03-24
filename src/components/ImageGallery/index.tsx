import ImageModal from "../ImageModal";

const ImageGallery = ({ storageImages }: { storageImages: string[] }) => {
  return (
    <div className="flex min-h-[480px] max-h-[480px] max-md:min-h-[320px] ">
      <div className="for-fix-image w-[50%] max-md:w-full">
        <ImageModal
          className="rounded-l-[16px] w-full h-full object-cover max-md:rounded-[16px]"
          url={storageImages[0]}
        />
      </div>
      <div className="for-fix-image w-[25%] mx-[12px] max-lg:mr-[0] flex flex-col gap-[12px] max-lg:w-[50%] max-lg:ml-[12px] max-md:hidden">
        <ImageModal
          className="w-full h-[49%] object-cover max-lg:min-h-[49%]"
          url={storageImages[1]}
        />
        {storageImages[2] && (
          <ImageModal
            className="w-full h-[49%] object-cover max-lg:min-h-[49%]"
            url={storageImages[2]}
          />
        )}
      </div>
      <div className="for-fix-image for-fix-image w-[25%]  flex flex-col gap-[12px] max-lg:hidden">
        {storageImages[3] && (
          <ImageModal
            className="w-full h-[49%] rounded-tr-[16px] object-cover"
            url={storageImages[3]}
          />
        )}
        {storageImages[4] && (
          <ImageModal
            className="w-full h-[49%] rounded-br-[16px] object-cover"
            url={storageImages[4]}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;