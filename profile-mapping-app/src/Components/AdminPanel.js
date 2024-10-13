import React, { useEffect, useState } from 'react';
import { fetchProfiles, addProfile, deleteProfile, updateProfile } from '../Api/Profile';
import ProfileModal from './Modal';  
import './AdminPanel.css';

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({ name: '', email: '', address: '', photo: '', geo: { lat: '', lng: '' } });
  const [editingProfile, setEditingProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 


  useEffect(() => {
    const loadProfiles = async () => {
      setLoading(true);
      const data = await fetchProfiles();
      setProfiles(data);
      setLoading(false);
    };
    loadProfiles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProfile({ ...currentProfile, [name]: value });
  };

  const handleGeoChange = (e) => {
    const { name, value } = e.target;
    setCurrentProfile({ ...currentProfile, geo: { ...currentProfile.geo, [name]: value } });
  };

  const openAddModal = () => {
    setCurrentProfile({ name: '', email: '', address: '', photo: '', geo: { lat: '', lng: '' } });
    setEditingProfile(null);
    setIsModalOpen(true);
  };


  const handleAddProfile = async () => {
    if (!validateProfile(currentProfile)) return;
    
    try {
      const profileToAdd = await addProfile(currentProfile);
      setProfiles([...profiles, profileToAdd]);
      closeModal();
    } catch (error) {
      console.error('Error adding profile:', error);
    }
  };


  const handleEditProfile = (profile) => {
    setCurrentProfile(profile);
    setEditingProfile(true);
    setIsModalOpen(true);
  };


  const handleSaveEditProfile = async () => {
    if (!validateProfile(currentProfile)) return;

    try {
      const updatedProfile = await updateProfile(currentProfile.id, currentProfile);
      const updatedProfiles = profiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      );
      setProfiles(updatedProfiles);
      closeModal();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };


  const handleDeleteProfile = async (id) => {
    try {
      await deleteProfile(id);
      setProfiles(profiles.filter(profile => profile.id !== id));
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  const validateProfile = (profile) => {
    if (!profile.name || !profile.email || !profile.address || !profile.photo || !profile.geo.lat || !profile.geo.lng) {
      alert('Please fill out all fields.');
      return false;
    }
    return true;
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProfile(null);
  };

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <h1>Admin Panel</h1>
        <div className='header-right'>
          <button onClick={() => window.location.href = '/'}>Home</button>
          <button onClick={openAddModal}>Add Profile</button>
        </div>
      </header>
      {loading && <p>Loading profiles...</p>}
      <h2 style={{textAlign:'center'}}>Existing Profiles</h2>
      <div className="admin-profiles">
        {profiles.length === 0 ? (
          <p>No profiles available.</p>
        ) : (
          profiles.map((profile) => (
            <div key={profile.id} className="profile-card">
              <img src={profile.photo} alt={profile.name} />
              <h3>{profile.name}</h3>
              <p>{profile.email}</p>
              <p>{profile.address}</p>
              <p>Latitude: {profile.geo.lat}</p>
              <p>Longitude: {profile.geo.lng}</p>
              <button onClick={() => handleEditProfile(profile)}>Edit</button>
              <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <ProfileModal
          isEditing={editingProfile}
          currentProfile={currentProfile}
          onChange={handleInputChange}
          onGeoChange={handleGeoChange}
          onSave={editingProfile ? handleSaveEditProfile : handleAddProfile}
          onCancel={closeModal}
        />
      )}
    </div>
  );
};

export default AdminPanel;
