// import MapImg from "../../assets/map-img.png";

// const Map = () => {
//   return (
//     <div className="h-full">
//       <div className=" relative h-full">
//         <img className="w-full h-full object-cover" src={MapImg} alt="" />
//         <div className=" absolute bottom-[24px] w-full">
//           <div className="input-with-icon relative  w-full max-w-[500px] mx-auto px-[20px]">
//             <input
//               className="border bg-white  border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl "
//               type="text"
//               placeholder="Search location"
//             />
//             <span className=" absolute right-[36px] top-[20px]">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M11.262 22.134C11.262 22.134 4 16.018 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 16.018 12.738 22.134 12.738 22.134C12.334 22.506 11.669 22.502 11.262 22.134ZM12 13.5C12.4596 13.5 12.9148 13.4095 13.3394 13.2336C13.764 13.0577 14.1499 12.7999 14.4749 12.4749C14.7999 12.1499 15.0577 11.764 15.2336 11.3394C15.4095 10.9148 15.5 10.4596 15.5 10C15.5 9.54037 15.4095 9.08525 15.2336 8.66061C15.0577 8.23597 14.7999 7.85013 14.4749 7.52513C14.1499 7.20012 13.764 6.94231 13.3394 6.76642C12.9148 6.59053 12.4596 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10C8.5 10.9283 8.86875 11.8185 9.52513 12.4749C10.1815 13.1313 11.0717 13.5 12 13.5Z"
//                   fill="#235370"
//                 />
//               </svg>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Map;

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const createPriceMarker = (price: string) => {
  if (!window.google || !window.google.maps) return null;

  const svg = `
    <svg width="80" height="40" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0 L70 0 Q75 0 75 5 L75 25 Q75 30 70 30 L40 30 L35 40 L30 30 L10 30 Q5 30 5 25 L5 5 Q5 0 10 0" 
            fill="#ffffff" stroke="#235370" stroke-width="2"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
            font-family="Arial" font-size="14" font-weight="bold" fill="#235370">
        ${price}
      </text>
    </svg>
  `;

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new window.google.maps.Size(80, 40),
    anchor: new window.google.maps.Point(40, 40),
  };
};

const Map = ({ properties }: { properties: Array<{ lat: number; lng: number; price: string }> }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY!,
    libraries: ["places"],
  });

  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | null>(null);
  const [markers, setMarkers] = useState<{ lat: number; lng: number; icon: google.maps.Icon }[]>([]);
  const [zoom, setZoom] = useState(12); // Default zoom level
  const [center, setCenter] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (isLoaded && properties.length > 0) {
      const newBounds = new window.google.maps.LatLngBounds();
      properties.forEach((property) => {
        newBounds.extend(new window.google.maps.LatLng(property.lat, property.lng));
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
          .map((property) => {
            const icon = createPriceMarker(property.price);
            if (!icon) return null;
            return {
              lat: property.lat,
              lng: property.lng,
              icon,
            };
          })
          .filter((marker) => marker !== null) as { lat: number; lng: number; icon: google.maps.Icon }[]
      );
    }
  }, [isLoaded, properties]);

  const handleMarkerClick = (lat: number, lng: number) => {
    setCenter({ lat, lng });
    setZoom(18); // Set zoom level closer
  };

  if (!isLoaded) return <div className="p-4 text-gray-500">Loading Map...</div>;

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={zoom}
        center={center ?? { lat: 37.7749, lng: -122.4194 }}
        onLoad={(map) => {
          setMapRef(map);
          if (properties.length === 0) {
            map.setCenter({ lat: 37.7749, lng: -122.4194 });
          }
        }}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }],
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
