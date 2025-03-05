import { allowedStorage } from "../../../constants";

const ItemsFilter = ({
  showFilters,
  selectedFilters,
  handleItemsFilterChange,
}: {
  showFilters: boolean;
  selectedFilters: any;
  handleItemsFilterChange: any;
}) => {
  return (
    <div
      className={`${
        showFilters ? "flex" : "hidden"
      } flex-col items-stretch gap-[12px] shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[38px] bg-white z-[999] w-max p-[12px] max-md:left-[0px]`}
      onClick={(e) => e.stopPropagation()}
    >
      {allowedStorage.map((item: any) => (
        <button
          className={`text-black text-left rounded-[8px] border border-[#EEEEEE] p-[6px] cursor-pointer hover:bg-[#235370] hover:text-white ${
            selectedFilters.includes(item.name) ? "active" : ""
          }`}
          onClick={() => handleItemsFilterChange(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ItemsFilter;
