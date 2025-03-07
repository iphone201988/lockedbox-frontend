import { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";
import { LocationIcon } from "../../icons";
const libraries: "places"[] = ["places"];

const MapInput = ({
  value,
  setFormData,
  showLabel = true,
}: {
  value: string;
  setFormData: any;
  showLabel?: boolean;
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY!,
    libraries,
  });

  const [location, setLocation] = useState<any>({});
  const [showMap, setShowMap] = useState(false);
  const [address, setAddress] = useState(value);
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Function to get the address from lat/lng
  const geocodeLatLng = async (lat: number, lng: number) => {
    if (!geocoderRef.current) return;
    const geocoder = geocoderRef.current;
    const location = { lat, lng };

    geocoder.geocode({ location }, async (results, status) => {
      if (status === "OK" && results && results[0]) {
        setAddress(results[0].formatted_address);

        let city = "";
        if (results[0].address_components) {
          console.log(
            "Geocode Address Components:",
            results[0].address_components
          );
          for (const component of results[0].address_components) {
            if (component.types.includes("locality")) {
              city = component.long_name;
              break;
            }
          }
        }

        setFormData((prev: any) => ({
          ...prev,
          address: results[0].formatted_address,
          city,
          latitude: lat,
          longitude: lng,
        }));

        console.log("city::::", city);
      } else {
        setAddress("Address not found");
      }
    });
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const newLocation = {
      lat: event.latLng!.lat(),
      lng: event.latLng!.lng(),
    };

    setLocation(newLocation);
    geocodeLatLng(newLocation.lat, newLocation.lng);
    setShowMap(false);
  };

  const handleMapLoad = (map: google.maps.Map) => {
    // Initialize geocoder when the map loads
    geocoderRef.current = new window.google.maps.Geocoder();
    mapRef.current = map; // <-- Store the map instance
  };

  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      console.log("place.address_components::::", place.address_components);
      if (place?.geometry && mapRef.current) {
        const location: any = place.geometry.location;

        if (place.geometry.viewport) {
          // If the place has a viewport (which means it's an area, not a specific point)
          mapRef.current.fitBounds(place.geometry.viewport); // Fit the map to the area
        } else {
          // If it's a specific location, like an address
          setLocation({ lat: location.lat(), lng: location.lng() });
          mapRef.current.panTo({ lat: location.lat(), lng: location.lng() });
          mapRef.current.setZoom(15); // Set a closer zoom for specific locations
        }

        geocodeLatLng(location.lat(), location.lng());
      }
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          console.log({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
          // Default to a location if geolocation fails (e.g., San Francisco)
          setLocation({ lat: 37.7749, lng: -122.4194 });
        }
      );
    } else {
      // If geolocation is not supported, set a default location
      setLocation({ lat: 37.7749, lng: -122.4194 });
    }
  }, []);

  return (
    <div>
      {isLoaded && (
        <>
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceChanged}
          >
            <>
              {showLabel && (
                <p className=" font-semibold mb-[6px]">Enter Address</p>
              )}
              <div className="input-with-icon relative w-full max-w-[100%]">
                <input
                  type="text"
                  className="border w-full border-[#EEEEEE] py-[20px] pl-[16px] pr-[40px] rounded-2xl cursor-pointer"
                  placeholder="Enter address"
                  ref={inputRef}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setShowMap(true);
                  }}
                  value={address}
                  onClick={() => setShowMap(!showMap)}
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <LocationIcon />
                </span>

                {showMap && (
                  <div className="absolute w-full h-[400px] z-10">
                    <GoogleMap
                      mapContainerStyle={{ height: "100%", width: "100%" }}
                      center={location}
                      zoom={15}
                      onClick={handleMapClick}
                      onLoad={handleMapLoad} // Ensure geocoder is initialized after the map loads
                    >
                      <Marker
                        position={location}
                        draggable={true} // Allow users to drag the marker
                        onDragEnd={handleMapClick} // Get the new location on drag end
                      />
                    </GoogleMap>
                  </div>
                )}
              </div>
            </>
          </Autocomplete>
        </>
      )}
    </div>
  );
};

export default MapInput;
