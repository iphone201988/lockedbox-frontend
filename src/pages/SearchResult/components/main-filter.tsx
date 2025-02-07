const MainFilter = ({ showFilters }: { showFilters: boolean }) => {
  return (
    <div
      className={`${
        showFilters ? "flex" : "hidden"
      } flex-col items-stretch gap-[12px] shadow rounded-[16px] border border-[#EEEEEE] absolute right-0 top-[48px] bg-white z-[999] w-max p-[12px]`}
    >
      <label className="inline-flex items-center cursor-pointer justify-between">
        <p className="mr-[32px] text-black">Climate control</p>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
      </label>
      <label className="inline-flex items-center cursor-pointer justify-between">
        <p className="mr-[32px] text-black">Security</p>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
      </label>
      <label className="inline-flex items-center cursor-pointer justify-between">
        <p className="mr-[32px] text-black">Cameras</p>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
      </label>
      <label className="inline-flex items-center cursor-pointer justify-between">
        <p className="mr-[32px] text-black">Outside</p>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
      </label>
      <label className="inline-flex items-center cursor-pointer justify-between">
        <p className="mr-[32px] text-black">Garage access</p>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
      </label>
      <label className="inline-flex items-center cursor-pointer justify-between">
        <p className="mr-[32px] text-black">Frequent access</p>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
      </label>
      <label className="inline-flex items-center cursor-pointer justify-between">
        <p className="mr-[32px] text-black">Public Transit</p>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
      </label>
      <label className="inline-flex items-center cursor-pointer justify-between">
        <p className="mr-[32px] text-black">RV Parking</p>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
      </label>
    </div>
  );
};

export default MainFilter;
