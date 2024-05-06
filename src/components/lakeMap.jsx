import * as React from "react";
import { useState, useCallback } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import MapPin from "./mapPin";
import ControlPanel from "./mapControlPanel";

const TOKEN =
  "pk.eyJ1IjoibWF6dW5kZSIsImEiOiJjbGJrazd4aWMwMTNwM29wN3prZ2dja3AyIn0.-wPx8orrju3s2kgauEJfDQ";

export default function LakeMap({ longitude, latitude }) {
  return (
    <>
      <Map
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 6,
        }}
        mapboxAccessToken={TOKEN}
        style={{ width: "100%", height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={longitude} latitude={latitude} anchor="bottom">
          <MapPin size={20} />
        </Marker>

        <NavigationControl />
      </Map>
    </>
  );
}
