import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    <div className="col-12 col-md-6">
      <MapContainer
        center={[51.505, -0.09]} // Set the initial coordinates
        zoom={13} // Set the initial zoom level
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          {' '}
          {/* Set marker coordinates */}
          <Popup>A sample popup. Replace with your location details.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
