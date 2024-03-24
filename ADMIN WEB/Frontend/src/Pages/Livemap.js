import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import "./Livemap.css"
import Sidebar from '../Components/SideBar/SideBar';
import Profile from '../Components/Profile/Profile';

function Map() {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyBDs-1qXDH-ZUtTsEEJxZldmMd94r2kpog',
      version: 'weekly',
    });
    loader.load().then(() => {
      const options = {
        center: { lat: 6.821617, lng: 80.041594 },
        zoom: 13,
      };
      const map = new window.google.maps.Map(mapRef.current, options);
      setMap(map);
    });
  }, []);
  return (
    <div className="LiveMap-container">
      <div className="LiveMap-map" ref={mapRef}></div>
      <div className="LiveMap-sidebar">
        <div className='tittle'>LiveMap</div>
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}
export default Map;


