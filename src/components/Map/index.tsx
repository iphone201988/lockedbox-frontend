import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import Loader from "../Loader";

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
}: {
  properties: any;
  userLocation: any;
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
  const [zoom, setZoom] = useState(12); // Default zoom level
  const [center, setCenter] = useState<{ lat: number; lng: number }>(
    properties.length
      ? { lat: 37.7749, lng: -122.4194 }
      : { lat: userLocation.latitude, lng: userLocation.longitude }
  );

  useEffect(() => {
    if (isLoaded && properties.length > 0) {
      const newBounds = new window.google.maps.LatLngBounds();
      properties.forEach((property: any) => {
        newBounds.extend(
          new window.google.maps.LatLng(property.lat, property.lng)
        );
      });
      setBounds(newBounds);
    }
  }, [properties, isLoaded]);

  useEffect(() => {
    if (mapRef && bounds) {
      mapRef.fitBounds(bounds);
    }
  }, [mapRef, bounds]);

  useEffect(() => {
    if (isLoaded) {
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

  if (!isLoaded) return <Loader />;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={zoom}
        center={center}
        onLoad={(map) => {
          setMapRef(map);
          if (properties.length === 0) {
            map.setCenter(center);
          }
        }}
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
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={marker.icon}
            onClick={() => handleMarkerClick(marker.lat, marker.lng)} // Handle marker click
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
