// @ts-ignore
import ReactStars from "react-rating-stars-component";

const Ratings = ({
  setShowPopup,
}: {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ratingChanged = (newRating: number) => {
    console.log(newRating);
  };

  return (
    <div className="flex flex-col">
      <div className="border border-[#EEEEEE] rounded-[16px] p-[24px] flex flex-col gap-[30px] mb-[24px] max-md:p-[16px]">
        <div className="flex justify-center gap-[8px] flex-col items-center">
          <p className=" font-semibold">Communication</p>
          <div className="flex gap-[8px]">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={50}
              activeColor="#235370"
              isHalf={true}
            />
            {/* <img src={StarFill} alt="" />
            <img src={StarFill} alt="" />
            <img src={StarFill} alt="" />
            <img src={StarFill} alt="" />
            <img src={StarEmpty} alt="" /> */}
          </div>
        </div>
        <div className="flex justify-center gap-[8px] flex-col items-center">
          <p className=" font-semibold">Accuracy</p>
          <div className=" flex gap-[8px]">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={50}
              activeColor="#235370"
              isHalf={true}
            />
          </div>
        </div>
        <div className="flex justify-center gap-[8px] flex-col items-center">
          <p className=" font-semibold">Safety</p>
          <div className=" flex gap-[8px]">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={50}
              activeColor="#235370"
              isHalf={true}
            />
          </div>
        </div>
        <div className="flex justify-center gap-[8px] flex-col items-center">
          <p className=" font-semibold">Cleanliness</p>
          <div className=" flex gap-[8px]">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={50}
              activeColor="#235370"
              isHalf={true}
            />
          </div>
        </div>
        <div className="flex justify-center gap-[8px] flex-col items-center">
          <p className=" font-semibold">
            Would you likely rent from them again?
          </p>
          <div className=" flex gap-[16px]">
            <button className="btn-sec">No</button>
            <button className="btn-pri">Yes</button>
          </div>
        </div>
      </div>
      <button className="btn-pri ml-auto" onClick={() => setShowPopup(true)}>
        Submit
      </button>
    </div>
  );
};

export default Ratings;
