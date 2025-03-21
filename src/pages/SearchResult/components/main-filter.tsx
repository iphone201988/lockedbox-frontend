import { useState, useEffect, useRef } from "react";
import { spaceFeatures } from "../../../constants";

interface MainFilterProps {
  showFilters: boolean;
  selectedFilters: string[];
  onFilterChange: any;
}

const MainFilter = ({
  showFilters,
  selectedFilters,
  onFilterChange,
}: MainFilterProps) => {
  const [tempSelectedIds, setTempSelectedIds] = useState(selectedFilters);
  const prevShowFiltersRef = useRef(false);

  useEffect(() => {
    // Only sync tempSelectedIds with selectedFilters when showFilters transitions to true
    if (!prevShowFiltersRef.current && showFilters) {
      setTempSelectedIds(selectedFilters);
    }
    // Update the ref to the current value of showFilters
    prevShowFiltersRef.current = showFilters;
  }, [showFilters]);

  // Optional: Keep this for debugging if needed
  useEffect(() => {
    console.log("tempSelectedIds::::::", tempSelectedIds);
  }, [tempSelectedIds]);

  const handleCheckboxChange = (id: string) => {
    setTempSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div
      className={`${
        showFilters ? "flex" : "hidden"
      } flex-col items-stretch gap-[16px] shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[48px] bg-white z-[999] w-max p-[12px]`}
      onClick={(e) => e.stopPropagation()}
    >
      {spaceFeatures.map((feature) => (
        <label
          key={feature.id}
          className="inline-flex items-center cursor-pointer justify-between"
        >
          <p className="mr-[32px] text-black">{feature.name}</p>
          <input
            type="checkbox"
            value={feature.id}
            checked={tempSelectedIds.includes(feature.id)}
            onChange={(e) => {
              e.stopPropagation();
              handleCheckboxChange(feature.id);
            }}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
        </label>
      ))}
      <button
        onClick={() => onFilterChange(tempSelectedIds)}
        className="px-[16px] py-[6px] bg-[#235370] rounded-[8px] text-[#fff] cursor-pointer ml-auto block mt-[10px]"
      >
        Apply
      </button>
    </div>
  );
};

export default MainFilter;
