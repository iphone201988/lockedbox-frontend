import SearchListing from "./components/search-listing";
import ItemsFilter from "./components/items-filter";
import SortFilter from "./components/sort-filter";
import PriceFilter from "./components/price-filter";
import MainFilter from "./components/main-filter";
import ProfileNavbar from "../../components/ProfileNavbar";
import Map from "../../components/Map";
import { useState } from "react";
import { FiltersIcon } from "../../icons";

const initialState = {
  items: false,
  price: false,
  sort: false,
  main: false,
};
const properties: any = [
  {
    id: "1",
    lat: 37.7749,
    lng: -122.4194,
    title: "Downtown Luxury Apartment",
    price: "$500,000",
  },
  {
    id: "2",
    lat: 37.7859,
    lng: -122.4014,
    title: "Golden Gate View Home",
    price: "$1,200,000",
  },
];

const SearchResult = () => {
  const [filters, setFilters] = useState<SearchFilters>(initialState);
  const [showGrid, setShowGrid] = useState<boolean>(true);

  const handleFilterChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const filterName = e.currentTarget.name as keyof SearchFilters;
    setFilters((prevFilters) => ({
      ...initialState,
      [filterName]: !prevFilters[filterName],
    }));
  };

  return (
    <div>
      <ProfileNavbar />
      <div className="flex h-[90vh] max-lg:flex-col">
        {showGrid && (
          <div className="w-max-[50%] w-[50%] max-lg:w-max-[100%] max-lg:w-[100%] max-lg:h-[50%]">
            <Map
              properties={properties}
              // initialCenter={{ lat: 37.7749, lng: -122.4194 }}
            />
          </div>
        )}
        <div
          className={`${
            showGrid ? "w-max-[50%] min-w-[50%]" : "w-max-[100%] min-w-[100%]"
          } pl-[20px] pr-[40px] pt-[10px] max-lg:pr-[20px]`}
        >
          <div className="fliters-row flex items-center justify-between mb-[16px] flex-wrap ">
            <div className="flex items-center">
              <div className="input-with-icon relative w-[60px]  ">
                <input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl text-center"
                  type="text"
                  value="5ft"
                />
                <span className=" absolute right-[16px] top-[20px]"></span>
              </div>
              <p className="text-[26px] font-semibold px-[12px] leading-[26px]">
                X
              </p>
              <div className="input-with-icon relative  w-[60px]  ">
                <input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl text-center"
                  type="text"
                  value="5ft"
                />
                <span className=" absolute right-[16px] top-[20px]"></span>
              </div>
            </div>
            <div className="filter-btns-row">
              <button onClick={() => setShowGrid(!showGrid)}>
                {showGrid ? "Grid" : "Map"}
              </button>
              <button
                className={`${filters.items ? "active" : ""}`}
                name="items"
                onClick={handleFilterChange}
              >
                Items <ItemsFilter showFilters={filters.items} />
              </button>
              <button
                name="price"
                className={`${filters.price ? "active" : ""}`}
                onClick={handleFilterChange}
              >
                Price <PriceFilter showFilters={filters.price} />
              </button>
              <button
                name="sort"
                className={`${filters.sort ? "active" : ""}`}
                onClick={handleFilterChange}
              >
                Sort <SortFilter showFilters={filters.sort} />
              </button>
              <button
                className={`${filters.main ? "active" : ""} !p-[10px]`}
                name="main"
                onClick={handleFilterChange}
              >
                <FiltersIcon />
                <MainFilter showFilters={filters.main} />
              </button>
            </div>
          </div>
          <div className="h-[calc(100%-78px)] overflow-auto no-scrollbar max-lg:h-auto">
            <div className="grid grid-cols-[repeat(5,_1fr)] gap-[16px] pb-[20px] max-mlg:grid-cols-[repeat(3,_1fr)] max-lg:grid-cols-[repeat(2,_1fr)] max-sm:grid-cols-[repeat(1,_1fr)]">
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
              <SearchListing />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
