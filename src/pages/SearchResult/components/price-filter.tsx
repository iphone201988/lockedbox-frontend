import { useState, useEffect, useRef } from "react";

const PriceFilter = ({
  showFilters,
  price,
  onPriceChange,
}: {
  showFilters: any;
  price: any;
  onPriceChange: any;
}) => {
  // Local state for the slider value, initialized to the parent's price
  const [tempPrice, setTempPrice] = useState(price);
  // Ref to track previous showFilters value for detecting false-to-true transition
  const prevShowFiltersRef = useRef(false);

  // Reset tempPrice to the parent's price when showFilters becomes true
  useEffect(() => {
    if (!prevShowFiltersRef.current && showFilters) {
      setTempPrice(price);
    }
    prevShowFiltersRef.current = showFilters;
  }, [showFilters, price]);

  return (
    <div
      className={`${
        showFilters ? "block" : "hidden"
      } shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[38px] bg-white z-[999] w-max p-[12px] min-w-[300px] max-md:min-w-[240px] max-md:right-[-40px]`}
      onClick={(e) => e.stopPropagation()}
    >
      <label className="text-black flex justify-between">
        Filter by price <span className="font-bold">${tempPrice}</span>
      </label>
      <input
        id="range"
        type="range"
        min="0"
        max="10000"
        step="1"
        value={tempPrice}
        onChange={(e) => setTempPrice(Number(e.target.value))}
        className="border-0 focus:ring-0 block w-full py-2 mt-2 text-gray-700 bg-white border-gray-300 rounded-md focus:border-[#235370] focus:outline-none accent-[#235370]"
      />
      <button
        onClick={() => onPriceChange(tempPrice)}
        className="px-[16px] py-[6px] bg-[#235370] rounded-[8px] text-[#fff] cursor-pointer ml-auto block mt-[16px]"
      >
        Set
      </button>
    </div>
  );
};

export default PriceFilter;
