const ItemsFilter = ({ showFilters }: { showFilters: boolean }) => {
  return (
    <div
      className={`${
        showFilters ? "flex" : "hidden"
      } flex-col items-stretch gap-[12px] shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[38px] bg-white z-[999] w-max p-[12px] max-md:left-[0px]`}
    >
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white active">
        Furniture & Household
      </button>
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white">
        Auto Parts & Accessories
      </button>
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white">
        Seasonal & Recreation
      </button>
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white">
        Appliances & Electronics
      </button>
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white">
        Office, School, & Business
      </button>
      <button className="text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white">
        Vehicle
      </button>
    </div>
  );
};

export default ItemsFilter;
