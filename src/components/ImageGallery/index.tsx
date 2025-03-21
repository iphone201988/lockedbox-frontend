const ImageGallery = ({ storageImages }: { storageImages: string[] }) => {
  return (
    <div className="flex min-h-[480px] max-h-[480px] max-md:min-h-[320px] ">
      <div className="w-[50%] max-md:w-full"> 
        <img
          className="rounded-l-[16px] w-full h-full object-cover max-md:rounded-[16px]"
          src={storageImages[0]}
          alt=""
        />
      </div>
      <div className="w-[25%] mx-[12px] max-lg:mr-[0] flex flex-col gap-[12px] max-lg:w-[50%] max-lg:ml-[12px] max-md:hidden">
        <img
          className="w-full h-[49%] object-cover max-lg:min-h-[49%]"
          src={storageImages[1]}
          alt=""
        />
        {storageImages[2] && (
          <img
            className="w-full h-[49%] object-cover max-lg:min-h-[49%]"
            src={storageImages[2]}
            alt=""
          />
        )}
      </div>
      <div className="w-[25%]  flex flex-col gap-[12px] max-lg:hidden">
        {storageImages[3] && (
          <img
            className="w-full h-[49%] rounded-tr-[16px] object-cover"
            src={storageImages[3]}
            alt=""
          />
        )}
        {storageImages[4] && (
          <img
            className="w-full h-[49%] rounded-br-[16px] object-cover"
            src={storageImages[4]}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
