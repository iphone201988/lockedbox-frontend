import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileNavbar from "../../components/ProfileNavbar";
import Loader from "../../components/Loader";
import Map from "../../components/Map";
import SearchListing from "./components/search-listing";
import { useLazyFindListingQuery } from "../../redux/api";
import { handleError } from "../../utils/helper";
import ItemsFilter from "./components/items-filter";
import PriceFilter from "./components/price-filter";
import SortFilter from "./components/sort-filter";
import { FiltersIcon, PropertyIcon } from "../../icons";
import MainFilter from "./components/main-filter";

const initialState = {
  items: false,
  price: false,
  sort: false,
  main: false,
};

const SearchResult = () => {
  const [locationPermissionGranted, setLocationPermissionGranted] = useState<
    boolean | null
  >(null);
  const [showFilters, setShowFilters] = useState(initialState);

  const [selectedFilters, setSelectedFilters] = useState({
    items: [],
    price: { min: null, max: null },
    sort: null,
    main: null,
  });

  const [showGrid, setShowGrid] = useState(true);
  const [userLocation, setUserLocation] = useState<any>({
    latitude: "",
    longitude: "",
  });
  const [properties, setProperties] = useState<any>([]);
  const [findListing, { data, isLoading }] = useLazyFindListingQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const customLocation =
    !location.state?.formData?.longitude || !location.state?.formData?.latitude;

  useEffect(() => {
    if (
      location.state?.formData?.latitude &&
      location.state?.formData?.longitude
    ) {
      console.log(
        "Setting userLocation from formData:",
        location.state.formData
      );
      setUserLocation({
        latitude: location.state.formData.latitude,
        longitude: location.state.formData.longitude,
      });
    }
  }, [location.state]);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported by browser");
      setLocationPermissionGranted(false);
      return;
    }
    if (customLocation) {
      console.log("Requesting geolocation");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Position received:", { latitude, longitude });
          setUserLocation({ latitude, longitude });
          setLocationPermissionGranted(true);
        },
        (error) => {
          console.log("Geolocation error:", error);
          setLocationPermissionGranted(false);
        }
      );
    } else {
      console.log("Using custom location from formData");
      setLocationPermissionGranted(true);
    }
  }, []);

  useEffect(() => {
    if (!userLocation.latitude || !userLocation.longitude) return;
    console.log("Fetching listings with userLocation:", userLocation);
    findListing({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
    })
      .unwrap()
      .catch((error) => handleError(error, navigate));
  }, [userLocation, findListing, navigate]);

  useEffect(() => {
    if (data?.success) {
      const mappedProperties = data.listings.map((item: any) => ({
        id: item._id,
        title: item.spaceType,
        distance: item.distance,
        price: item.price,
        lat: item.location.coordinates[1],
        lng: item.location.coordinates[0],
        image: item.storageImages[0],
      }));
      setProperties(mappedProperties);
    }
  }, [data]);

  const handleItemsFilterChange = (itemName: string) => {
    setSelectedFilters((prev: any) => {
      const items = prev.items.includes(itemName)
        ? prev.items.filter((i: any) => i !== itemName)
        : [...prev.items, itemName];
      return { ...prev, items };
    });
  };

  if (
    locationPermissionGranted != null &&
    !locationPermissionGranted &&
    customLocation
  ) {
    return (
      <div>
        <ProfileNavbar />
        <div className="flex items-center justify-center h-[90vh]">
          <p className="text-2xl font-semibold">
            Location permission is required to view this page.
          </p>
        </div>
      </div>
    );
  }

  const handleFilterChange = (e: any) => {
    const filterName = e.currentTarget.name;
    setShowFilters((prevFilters: any) => ({
      ...initialState,
      [filterName]: !prevFilters[filterName],
    }));
  };

  if (!userLocation.latitude || !userLocation.longitude) {
    return <Loader />;
  }

  return (
    <div>
      {isLoading && <Loader />}
      <ProfileNavbar />
      <div className="flex h-[90vh] max-lg:flex-col">
        {showGrid && (
          <div className="w-max-[50%] w-[50%] max-lg:w-max-[100%] max-lg:w-[100%] max-lg:h-[50%]">
            <Map properties={properties} userLocation={userLocation} />
          </div>
        )}
        <div
          className={`${
            showGrid ? "w-max-[50%] min-w-[50%]" : "w-max-[100%] min-w-[100%]"
          } pl-[20px] pr-[40px] pt-[10px] max-lg:pr-[20px]`}
        >
          <div className="fliters-row flex items-center justify-between mb-[16px] flex-wrap ">
            <div className="flex items-center">
              <div className="input-with-icon relative w-[70px]  ">
                <input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl  text-center"
                  type="number"
                  value="500"
                />
                <span className=" absolute right-[16px] top-[21px]">ft</span>
              </div>
              <p className="text-[26px] font-semibold px-[12px] leading-[26px]">
                X
              </p>
              <div className="input-with-icon relative  w-[70px]  ">
                <input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl  text-left"
                  type="number"
                  value="5"
                />
                <span className=" absolute right-[16px] top-[21px]">ft</span>
              </div>
            </div>
            <div className="filter-btns-row">
              <button onClick={() => setShowGrid(!showGrid)}>
                {showGrid ? "Grid" : "Map"}
              </button>
              <button
                className={`${showFilters.items ? "active" : ""}`}
                name="items"
                onClick={handleFilterChange}
              >
                Items{" "}
                <ItemsFilter
                  showFilters={showFilters.items}
                  selectedFilters={selectedFilters.items}
                  handleItemsFilterChange={handleItemsFilterChange}
                />
              </button>
              <button
                name="price"
                className={`${showFilters.price ? "active" : ""}`}
                onClick={handleFilterChange}
              >
                Price <PriceFilter showFilters={showFilters.price} />
              </button>
              <button
                name="sort"
                className={`${showFilters.sort ? "active" : ""}`}
                onClick={handleFilterChange}
              >
                Sort <SortFilter showFilters={showFilters.sort} />
              </button>
              <button
                className={`${showFilters.main ? "active" : ""} !p-[10px]`}
                name="main"
                onClick={handleFilterChange}
              >
                <FiltersIcon />
                <MainFilter showFilters={showFilters.main} />
              </button>
            </div>
          </div>
          <div className="h-[calc(100%-78px)] overflow-auto no-scrollbar max-lg:h-auto">
            <div className="grid grid-cols-[repeat(5,_1fr)] gap-[16px] pb-[20px] max-mlg:grid-cols-[repeat(3,_1fr)] max-lg:grid-cols-[repeat(2,_1fr)] max-sm:grid-cols-[repeat(1,_1fr)]">
              {properties.length ? (
                properties.map((property: Properties) => (
                  <SearchListing
                    id={property.id}
                    title={property.title}
                    price={property.price}
                    distance={Number((property.distance / 1000).toFixed(2))}
                    image={property.image}
                    lat={property.lat}
                    lng={property.lng}
                    totalReviews={property.totalReviews}
                    averageRating={property.averageRating}
                  />
                ))
              ) : (
                <div className="flex flex-col border border-[#EEEEEE] rounded-[16px] p-[40px] gap-[20px] justify-center items-center max-w-[360px]">
                  <span>
                    <PropertyIcon />
                  </span>
                  <p className="text-[18px] font-semibold">
                    No Storage Room found{" "}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
