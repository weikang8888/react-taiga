import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./googlemap.css";

const TaigaGoogleMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA7gYO-ccMvFIN5W5740OMqApRnzU930gQ",
  });

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
        center={{ lat: 2.5047310916342886, lng: 102.82445677545776 }}
        mapContainerClassName="map">
        <Marker
          position={{ lat: 2.494001743274743, lng: 102.85915383087884 }}
        />
      </GoogleMap>
    </div>
  );
};

export default TaigaGoogleMap;
