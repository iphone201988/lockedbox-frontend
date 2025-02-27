const ImageGallery = ({ storageImages }: { storageImages: string[] }) => {
  return (
    <div className="flex min-h-[480px]">
      <div className="w-[50%]">
        <img
          className="rounded-l-[16px] w-full h-full object-cover"
          src={storageImages[0]}
          alt=""
        />
      </div>
      <div className="w-[25%] mx-[12px] flex flex-col gap-[12px]">
        <img
          className="w-full h-full object-cover"
          src={storageImages[1]}
          alt=""
        />
        {storageImages[2] && (
          <img
            className="w-full h-full object-cover"
            src={storageImages[2]}
            alt=""
          />
        )}
      </div>
      <div className="w-[25%] flex flex-col gap-[12px]">
        {storageImages[3] && (
          <img
            className="w-full h-full rounded-tr-[16px] object-cover"
            src={storageImages[3]}
            alt=""
          />
        )}
        {storageImages[4] && (
          <img
            className="w-full h-full rounded-br-[16px] object-cover"
            src={storageImages[4]}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
