// @ts-ignore
import ReactStars from "react-rating-stars-component";

const Ratings = ({
  ratings,
  setRatings,
  handleSubmit,
}: {
  ratings: any;
  setRatings: any;
  handleSubmit: any;
}) => {
  const ratingChanged = (category: string, newRating: number) => {
    setRatings((prev: any) => ({ ...prev, [category]: newRating }));
  };

  return (
    <div className="flex flex-col">
      <div className="border border-[#EEEEEE] rounded-[16px] p-[24px] flex flex-col gap-[30px] mb-[24px] max-md:p-[16px]">
        <div className="flex justify-center gap-[8px] flex-col items-center">
          <p className=" font-semibold">Communication</p>
          <div className="flex gap-[8px]">
            <ReactStars
              count={5}
              onChange={(newRating: number) =>
                ratingChanged("communication", newRating)
              }
              size={50}
              activeColor="#235370"
              isHalf={true}
            />
          </div>
        </div>
        <div className="flex justify-center gap-[8px] flex-col items-center">
          <p className=" font-semibold">Accuracy</p>
          <div className=" flex gap-[8px]">
            <ReactStars
              count={5}
              onChange={(newRating: number) =>
                ratingChanged("accuracy", newRating)
              }
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
              onChange={(newRating: number) =>
                ratingChanged("safety", newRating)
              }
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
              onChange={(newRating: number) =>
                ratingChanged("cleanliness", newRating)
              }
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
            <button
              className={`${ratings.rentAgain ? "btn-sec" : "btn-pri"}`}
              onClick={() =>
                setRatings((prev: any) => ({ ...prev, rentAgain: false }))
              }
            >
              No
            </button>
            <button
              className={`${ratings.rentAgain ? "btn-pri" : "btn-sec"}`}
              onClick={() =>
                setRatings((prev: any) => ({ ...prev, rentAgain: true }))
              }
            >
              Yes
            </button>
          </div>
        </div>
      </div>
      <button className="btn-pri ml-auto" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Ratings;
