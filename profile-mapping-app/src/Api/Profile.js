import profiles from './data'
export const fetchProfiles = async () => {
  return profiles; 
};


export const fetchProfileById = async (id) => {
  return profiles.find(profile => profile.id === parseInt(id)); 
};


export const updateProfile = async (id, updatedProfile) => {
  const index = profiles.findIndex(profile => profile.id === parseInt(id)); 
  if (index !== -1) {
    profiles[index] = { ...profiles[index], ...updatedProfile }; 
    return profiles[index];
  }
  throw new Error('Profile not found'); 
};

export const deleteProfile = async (id) => {
  const index = profiles.findIndex(profile => profile.id === parseInt(id)); 
  if (index !== -1) {
    const deletedProfile = profiles.splice(index, 1); 
    return deletedProfile; 
  }
  throw new Error('Profile not found'); 
};


export const addProfile = async (newProfile) => {
  const newId = profiles.length > 0 ? profiles[profiles.length - 1].id + 1 : 1; 
  const profileToAdd = { ...newProfile, id: newId }; 
  profiles.concat(profileToAdd);
  return profileToAdd; 
};
