'use client'
import React from 'react'

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 51.5074, 
  lng: -0.1278,
};

export default function page() {
  return (
    <div>
           <LoadScript googleMapsApiKey="AIzaSyAHqxlh7rQzVcqZkKAq69Vhrksa5L2_jQg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        />
      </LoadScript>
    </div>
  )
}
