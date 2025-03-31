import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { useState, useEffect, useRef } from "react";
import Loader from "../Loader";
import { LocationIcon } from "../../icons";

const createPriceMarker = (price: string) => {
  if (!window.google || !window.google.maps) return null;

  const svg = `
    <svg width="80" height="40" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 5 L55 5 A15 15 0 0 1 70 20 A15 15 0 0 1 55 35 L25 35 A15 15 0 0 1 10 20 A15 15 0 0 1 25 5 Z" 
            fill="#ffffff" stroke="#235370" stroke-width="2"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
            font-family="Arial" font-size="16" font-weight="bold" fill="#235370">
        $${price}
      </text>
    </svg>
  `;

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new window.google.maps.Size(80, 40),
    anchor: new window.google.maps.Point(40, 35),
  };
};

const Map = ({
  properties,
  userLocation,
  setUserLocation,
  value,
}: {
  properties: any;
  userLocation: any;
  setUserLocation: any;
  value: string;
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY!,
    libraries: ["places"],
  });

  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | null>(null);
  const [markers, setMarkers] = useState<
    { lat: number; lng: number; icon: google.maps.Icon }[]
  >([]);

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [address, setAddress] = useState(value ?? "");
  const isInitialRender = useRef(true);

  const [zoom, setZoom] = useState(15); // Default zoom level
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: userLocation.latitude,
    lng: userLocation.longitude,
  });

  useEffect(() => {
    if (isLoaded && properties.length > 0) {
      const newBounds = new window.google.maps.LatLngBounds();
      properties.forEach((property: any) => {
        newBounds.extend(
          new window.google.maps.LatLng(property.lat, property.lng)
        );
      });

      // setBounds(newBounds);
    }
  }, [properties, isLoaded]);

  useEffect(() => {
    if (mapRef && bounds) {
      mapRef.fitBounds(bounds);
      const currentZoom = mapRef.getZoom();
      if (currentZoom && currentZoom > 15) {
        mapRef.setZoom(15);
      }
    }
  }, [mapRef, bounds]);

  // useEffect(() => {
  //   if (mapRef && properties.length > 1 && bounds) {
  //     mapRef.fitBounds(bounds);
  //     const currentZoom = mapRef.getZoom();
  //     if (currentZoom > 15) {
  //       mapRef.setZoom(15); // Prevent zooming in too much
  //     }
  //   } else if (properties.length === 1) {
  //     mapRef.setCenter({ lat: properties[0].lat, lng: properties[0].lng });
  //     mapRef.setZoom(14); // Reasonable zoom for one property
  //   }
  // }, [mapRef, bounds, properties]);

  useEffect(() => {
    if (mapRef && userLocation) {
      const marker = new window.google.maps.Marker({
        position: { lat: userLocation.latitude, lng: userLocation.longitude },
        map: mapRef,
      });
      return () => marker.setMap(null);
    }
  }, [mapRef, userLocation]);

  useEffect(() => {
    if (isLoaded) {
      geocodeLatLng(userLocation.latitude, userLocation.longitude);
      setMarkers(
        properties
          .map((property: any) => {
            const icon = createPriceMarker(property.price);
            if (!icon) return null;
            return {
              lat: property.lat,
              lng: property.lng,
              icon,
            };
          })
          .filter((marker: any) => marker !== null) as {
          lat: number;
          lng: number;
          icon: google.maps.Icon;
        }[]
      );
    }
  }, [isLoaded, properties]);

  const handleMarkerClick = (lat: number, lng: number) => {
    setCenter({ lat, lng });
    setZoom(18); // Set zoom level closer
  };

  const geocodeLatLng = async (lat: number, lng: number) => {
    if (!geocoderRef.current) {
      geocoderRef.current = new window.google.maps.Geocoder();
    }
    const geocoder = geocoderRef.current;
    const location = { lat, lng };

    geocoder.geocode({ location }, async (results, status) => {
      if (status === "OK" && results && results[0]) {
        setAddress(results[0].formatted_address);
      } else {
        setAddress("Address not found");
      }
    });
  };

  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();

      if (place?.geometry) {
        const location: any = place.geometry.location;
        const newCenter = {
          lat: location.lat(),
          lng: location.lng(),
        };
        setBounds(null);
        setCenter(newCenter);

        setUserLocation({
          latitude: location.lat(),
          longitude: location.lng(),
        });

        setCenter({ lat: location.lat(), lng: location.lng() });
        geocodeLatLng(location.lat(), location.lng());
      }
    }
  };

  const handleIdle = () => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (mapRef) {
      const center = mapRef.getCenter();
      if (center) {
        const newLocation = {
          latitude: center.lat(),
          longitude: center.lng(),
        };

        // Prevent unnecessary state updates to stop infinite loop
        if (
          newLocation.latitude !== userLocation.latitude ||
          newLocation.longitude !== userLocation.longitude
        ) {
          console.log("center:::", newLocation.latitude, newLocation.longitude);
          setUserLocation(newLocation);
          geocodeLatLng(newLocation.latitude, newLocation.longitude);
        }
      }
    }
  };

  if (!isLoaded) return <Loader />;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-gray-200 relative max-lg:max-h-full max-lg:h-[360px]">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={zoom}
        center={center}
        onLoad={(map) => {
          setMapRef(map);
          // if (properties.length === 0) {
          map.setCenter(center);
          // }
        }}
        onIdle={handleIdle}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {isLoaded && mapRef && (
          <Marker
            key={`${userLocation.latitude}-${userLocation.longitude}`}
            position={{
              lat: userLocation.latitude,
              lng: userLocation.longitude,
            }}
            draggable={true}
            onDragEnd={(e: any) => {
              const lat = e.latLng.lat();
              const lng = e.latLng.lng();
              setUserLocation({ latitude: lat, longitude: lng });
              geocodeLatLng(lat, lng);
            }}
          />
        )}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={marker.icon}
            onClick={() => handleMarkerClick(marker.lat, marker.lng)} // Handle marker click
          />
        ))}
      </GoogleMap>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-2xl">
        <Autocomplete
          onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          onPlaceChanged={handlePlaceChanged}
        >
          <div className="w-full px-[16px]">
            <input
              type="text"
              placeholder="Search Location"
              ref={inputRef}
              className="border w-full border-[#EEEEEE] py-[20px] pl-[16px] pr-[40px] rounded-2xl cursor-pointer bg-white"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <span className=" absolute right-[28px] top-[20px]">
              <LocationIcon />
            </span>
          </div>
        </Autocomplete>
      </div>
    </div>
  );
};

export default Map;
