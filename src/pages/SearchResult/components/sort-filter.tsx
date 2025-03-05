const SortFilter = ({
  showFilters,
  handleChange,
  sort,
}: {
  showFilters: boolean;
  handleChange: any;
  sort: string;
}) => {
  return (
    <div
      className={`${
        showFilters ? "flex" : "hidden"
      } flex-col items-stretch gap-[12px] shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[38px] bg-white z-[999] w-max p-[12px] `}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={`text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white ${
          sort == "low_price" ? "active" : ""
        }`}
        onClick={() => handleChange("low_price")}
      >
        Price (low to high)
      </button>
      <button
        className={`text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white ${
          sort == "high_price" ? "active" : ""
        }`}
        onClick={() => handleChange("high_price")}
      >
        Price (high to low)
      </button>
      <button
        className={`text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white ${
          sort == "small_size" ? "active" : ""
        }`}
        onClick={() => handleChange("small_size")}
      >
        Size (small to large)
      </button>
      <button
        className={`text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white ${
          sort == "large_size" ? "active" : ""
        }`}
        onClick={() => handleChange("large_size")}
      >
        Size (large to small)
      </button>
    </div>
  );
};

export default SortFilter;
