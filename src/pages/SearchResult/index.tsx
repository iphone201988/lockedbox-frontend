import { useState, useEffect } from "react";
import SearchListing from "./components/search-listing";
import ItemsFilter from "./components/items-filter";
import SortFilter from "./components/sort-filter";
import PriceFilter from "./components/price-filter";
import MainFilter from "./components/main-filter";
import ProfileNavbar from "../../components/ProfileNavbar";
import Map from "../../components/Map";
import { FiltersIcon } from "../../icons";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { useLazyFindListingQuery } from "../../redux/api";
import { handleError } from "../../utils/helper";

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
  const [showFilters, setShowFilters] = useState(initialState);
  const [filters, setFilters] = useState();
  const [properties, setProperties] = useState<Properties[]>([]);
  const [showGrid, setShowGrid] = useState(true);
  const [locationPermissionGranted, setLocationPermissionGranted] = useState<
    boolean | null
  >(null);

  const [userLocation, setUserLocation] = useState<any>({
    latitude: "",
    longitude: "",
  });
  const [findListing, { data, isLoading }] = useLazyFindListingQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const customLocation =
    !location.state?.formData?.longitude || !location.state?.formData?.latitude;

  useEffect(() => {
    if (location.state?.formData) {
      setUserLocation({
        latitude: location.state.formData.latitude,
        longitude: location.state.formData.longitude,
      });
    }
  }, [location.state]);

  useEffect(() => {
    if (navigator.geolocation && customLocation) {
      console.log("not enetered");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log("latitude longitude", latitude, longitude);
          setUserLocation({
            latitude,
            longitude,
          });
          setLocationPermissionGranted(true);
        },
        (error) => {
          setLocationPermissionGranted(false);
        }
      );
    } else {
      setLocationPermissionGranted(false);
    }
  }, []);

  useEffect(() => {
    if (!userLocation.latitude || !userLocation.longitude) return;

    (async () => {
      console.log("userLocation :::", userLocation);
      await findListing({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      })
        .unwrap()
        .catch((error) => handleError(error, navigate));
    })();
  }, [userLocation]);

  useEffect(() => {
    console.log("listings data :::", data);
    if (data?.success) {
      const properties = data.listings.map((item: any) => ({
        id: item._id,
        title: item.spaceType,
        distance: item.distance,
        price: item.price,
        lat: item.location.coordinates[1],
        lng: item.location.coordinates[0],
        image: item.storageImages[0],
      }));
      setProperties(properties);
    }
  }, [data]);

  const handleFilterChange = (e: any) => {
    const filterName = e.currentTarget.name;
    setShowFilters((prevFilters: any) => ({
      ...initialState,
      [filterName]: !prevFilters[filterName],
    }));
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

  if (!userLocation.latitude || !userLocation.longitude) return <Loader />;

  return (
    <div>
      {isLoading && <Loader />}
      <ProfileNavbar />
      <div className="flex h-[90vh] max-lg:flex-col">
        {showGrid && (
          <div className="w-max-[50%] w-[50%] max-lg:w-max-[100%] max-lg:w-[100%] max-lg:h-[50%]">
            <Map properties={properties} />
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
                className={`${showFilters.items ? "active" : ""}`}
                name="items"
                onClick={handleFilterChange}
              >
                Items <ItemsFilter showFilters={showFilters.items} />
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
                  />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
