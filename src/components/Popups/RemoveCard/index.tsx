import CloseIcon from "../../../assets/icons/close-icn.png";
import { CrossIcon } from "../../../icons";

const RemoveCard = ({
  onSubmit,
  onClose,
}: {
  onSubmit: () => void;
  onClose: () => void;
}) => {
  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.2)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button className=" absolute right-[20px] top-[20px]">
          <img
            src={CloseIcon}
            alt=""
            onClick={onClose}
            className="cursor-pointer"
          />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
            Remove Card
          </p>
        </header>
        <body className="mx-auto">
          <div className="mb-[24px] flex justify-center items-center flex-col">
            <span className="mb-[10px]">
              <CrossIcon />
            </span>

            <p className=" font-semibold text-center text-[18px] mb-[16px]">
              Are you sure you want to <br /> remove your Card?
            </p>
          </div>
          <div className="flex gap-[20px] items-center justify-center">
            <button className="btn-sec" onClick={onClose}>
              Close
            </button>
            <button className="btn-pri" onClick={onSubmit}>
              Confirm
            </button>
          </div>
        </body>
      </div>
    </div>
  );
};

export default RemoveCard;
