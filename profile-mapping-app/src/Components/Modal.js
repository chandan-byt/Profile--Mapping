// ProfileModal.js
import React from 'react';
import './Modal.css'
const ProfileModal = ({
  isEditing,
  currentProfile,
  onChange,
  onGeoChange,
  onSave,
  onCancel,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isEditing ? 'Edit Profile' : 'Add New Profile'}</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={currentProfile.name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={currentProfile.email}
          onChange={onChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={currentProfile.address}
          onChange={onChange}
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={currentProfile.photo}
          onChange={onChange}
        />
        <input
          type="text"
          name="lat"
          placeholder="Latitude"
          value={currentProfile.geo.lat}
          onChange={onGeoChange}
        />
        <input
          type="text"
          name="lng"
          placeholder="Longitude"
          value={currentProfile.geo.lng}
          onChange={onGeoChange}
        />
        <button onClick={onSave}>{isEditing ? 'Save Profile' : 'Add Profile'}</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ProfileModal;
