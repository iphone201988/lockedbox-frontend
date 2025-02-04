const PriceFilter = () => {
  return (
    <div className="hidden shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[38px] bg-white z-[999] w-max p-[12px] min-w-[300px] max-md:min-w-[240px] max-md:right-[-40px]">
      <label className="text-black flex justify-between">
        Filter by price <span className="font-bold">$250</span>
      </label>
      <input
        id="range"
        type="range"
        className="border-0 focus:ring-0 block w-full py-2 mt-2 text-gray-700 bg-white border-gray-300 rounded-md focus:border-[#235370] focus:outline-none accent-[#235370]"
      />
      <button className="px-[16px] py-[6px] bg-[#235370] rounded-[8px] text-[#fff] cursor-pointer ml-auto block mt-[16px]">
        Set
      </button>
    </div>
  );
};

export default PriceFilter;
