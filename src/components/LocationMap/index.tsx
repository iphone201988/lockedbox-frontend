import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const LocationMap = ({
  lat,
  lng,
  zoom = 15,
}: {
  lat: number;
  lng: number;
  zoom?: number;
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map && window.google) {
      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map,
      });

      const circle = new window.google.maps.Circle({
        map,
        center: { lat, lng },
        radius: 400,
        fillColor: "#FF0000",
        fillOpacity: 0.2,
        strokeColor: "#FF0000",
        strokeOpacity: 0.6,
        strokeWeight: 1,
      });

      return () => {
        marker.setMap(null);
        circle.setMap(null);
      };
    }
  }, [map, lat, lng]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div
      style={{ height: "250px" }}
      className="w-full rounded-2xl overflow-hidden"
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat, lng }}
        zoom={zoom}
        onLoad={(mapInstance: any) => setMap(mapInstance)}
      />
    </div>
  );
};

export default LocationMap;
