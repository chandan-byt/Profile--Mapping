import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProfileById } from '../Api/Profile';
import Map, { Marker } from 'react-map-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css'; 
import './ProfileDetails.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2hhbmR1NTYzNCIsImEiOiJjbTI2YjhzbXoxMmd2Mm1zajBmd2liOXd6In0.0tJYChC_AFLJdcr1gBXR4Q'; // Replace with your Mapbox token

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const data = await fetchProfileById(id);
      setProfile(data);
    };
    getProfile();
  }, [id]);

  if (!profile) return <div className="loading">Loading...</div>;

  const { lat, lng } = profile.geo;

  return (
    <div className="profile-container">
      <div className='profile'>
        <div>
          <img src={profile.photo} alt={profile.name}></img>
        </div>
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.email}</p>
          <p>{profile.address}</p>
        </div>
      </div>
      
      <div className="map-container">
        <Map
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 1
          }}
          style={{ width: '100%', height: '100%' }} 
          mapStyle="mapbox://styles/mapbox/streets-v11" 
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <Marker longitude={lng} latitude={lat} color="red" />
        </Map>
      </div>
    </div>
  );
};

export default ProfileDetails;

