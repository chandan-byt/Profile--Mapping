import React, { useEffect, useState } from 'react';
import { fetchProfiles } from '../Api/Profile';
import { Link, useLocation } from 'react-router-dom'; 
import './ProfileList.css'; 

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const location = useLocation(); 

  useEffect(() => {
    const getProfiles = async () => {
      const data = await fetchProfiles();
      setProfiles(data);
      setLoading(false);
    };
    getProfiles();
  }, []);

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="loading">Loading profiles...</div>;

  return (
    <div className="profile-page">
      <div className="header">
        
        <h1>Profiles</h1>

        <div className="header-center">
          <input
            type="text"
            className="search-bar"
            placeholder="Search profiles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="header-right">
          {location.pathname === '/admin' ? (
            <Link to="/">
              <button className="home-button">Home</button>
            </Link>
          ) : (
            <Link to="/admin">
              <button className="admin-button">Admin Panel</button>
            </Link>
          )}
        </div>
      </div>

      <div className="profile-list">
        {filteredProfiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <img src={profile.photo} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.address}</p>
            <Link to={`/profile/${profile.id}`}>
              <button className='summary'>Summary</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
