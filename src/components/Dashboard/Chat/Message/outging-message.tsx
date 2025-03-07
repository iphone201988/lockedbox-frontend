const OutgoingMessage = ({ message }: { message: string }) => {
  return (
    <div className="bg-[#235370] p-[12px] max-w-[480px] text-white rounded-[8px] ml-auto mb-[16px] mt-4 w-fit">
      <p className="text-white">{message}</p>
    </div>
  );
};

export default OutgoingMessage;
