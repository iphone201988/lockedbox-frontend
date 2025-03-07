const IncomingMessage = ({
  image,
  message,
}: {
  image: any;
  message: string;
}) => {
  return (
    <div className="flex items-center mt-[16px] gap-[8px]">
      <img src={image} alt="" className="w-[34px] h-[34px] rounded-full" />
      <div className="bg-[#EEEEEE] p-[12px] max-w-[480px]  rounded-[8px] ">
        <p className="">{message}</p>
      </div>
    </div>
  );
};

export default IncomingMessage;
