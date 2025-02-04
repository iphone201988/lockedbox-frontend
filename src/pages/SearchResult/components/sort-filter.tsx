const SortFilter = () => {
  return (
    <div className="hidden flex flex-col items-stretch gap-[12px] shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[38px] bg-white z-[999] w-max p-[12px] ">
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white active">
        Recommended
      </button>
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white">
        Price (low to high)
      </button>
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white">
        Price (high to low)
      </button>
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white">
        Size (small to large)
      </button>
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white">
        Size (large to small)
      </button>
    </div>
  );
};

export default SortFilter;
