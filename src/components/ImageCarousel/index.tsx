const ImageCarousel = ({
  className,
  url,
  onClick,
}: {
  className: string;
  url: string;
  onClick: () => void;
}) => {
  return (
    <div className={`cursor-pointer ${className}`} onClick={onClick}>
      <img src={url} className="w-full h-full object-cover" alt="" />
    </div>
  );
};

export default ImageCarousel;
