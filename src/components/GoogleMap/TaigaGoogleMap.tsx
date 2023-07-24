import React, { useState } from "react";
import {
  GoogleMap,
  MarkerF,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import "./googlemap.css";
import customerMarker from "../../assets/contact/map-marker_orange.svg";

const TaigaGoogleMap = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const markers = [
    {
      id: 1,
      labelText: "Taiga",
      position: { lat: 2.494001743274743, lng: 102.85915383087884 },
      icon: customerMarker,
    },
  ];

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GoogleMap
        zoom={13}
        center={{ lat: 2.494001743274743, lng: 102.85915383087884 }}
        mapContainerClassName="map">
        {markers.map((marker) => (
          <MarkerF
            key={marker.id}
            position={marker.position}
            icon={{
              url: marker.icon, // Use the custom SVG icon for this marker
              scaledSize: new window.google.maps.Size(60, 60), // Adjust the size of the icon if needed
            }}
            onClick={() => handleMarkerClick(marker)}
            label={{
              text: marker.labelText, // Use the labelText property as the label text
              className: "marker-label", // Add a class name for styling
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default TaigaGoogleMap;
