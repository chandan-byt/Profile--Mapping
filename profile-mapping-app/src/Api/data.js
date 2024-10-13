const profilesData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Main St, Springfield',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      geo: {
        lat: 18.5204303,
        lng: 73.8567437,
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      address: '456 Maple Ave, Metropolis',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      geo: {
        lat: 40.7128,
        lng: -74.0060,
      },
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      address: '789 Oak St, Gotham',
      photo: 'https://randomuser.me/api/portraits/women/3.jpg',
      geo: {
        lat: 34.0522,
        lng: -118.2437,
      },
    },
    {
      id: 4,
      name: 'Bob Martin',
      email: 'bob.martin@example.com',
      address: '321 Birch St, Star City',
      photo: 'https://randomuser.me/api/portraits/men/4.jpg',
      geo: {
        lat: 36.1699,
        lng: -115.1398,
      },
    },
    {
      id: 5,
      name: 'Emily Clarke',
      email: 'emily.clarke@example.com',
      address: '654 Oak Ave, Central City',
      photo: 'https://randomuser.me/api/portraits/women/5.jpg',
      geo: {
        lat: 29.7604,
        lng: -95.3698,
      },
    },
    {
      id: 6,
      name: 'Frank Harris',
      email: 'frank.harris@example.com',
      address: '876 Cedar St, Coast City',
      photo: 'https://randomuser.me/api/portraits/men/6.jpg',
      geo: {
        lat: 47.6062,
        lng: -122.3321,
      },
    },
    {
      id: 7,
      name: 'Grace Hall',
      email: 'grace.hall@example.com',
      address: '987 Pine St, Bludhaven',
      photo: 'https://randomuser.me/api/portraits/women/7.jpg',
      geo: {
        lat: 25.7617,
        lng: -80.1918,
      },
    },
    {
      id: 8,
      name: 'Henry Adams',
      email: 'henry.adams@example.com',
      address: '543 Spruce St, Keystone City',
      photo: 'https://randomuser.me/api/portraits/men/8.jpg',
      geo: {
        lat: 34.0522,
        lng: -118.2437,
      },
    },
    {
      id: 9,
      name: 'Isabella Murphy',
      email: 'isabella.murphy@example.com',
      address: '678 Redwood Dr, Smallville',
      photo: 'https://randomuser.me/api/portraits/women/9.jpg',
      geo: {
        lat: 39.7392,
        lng: -104.9903,
      },
    },
    {
      id: 10,
      name: 'Jack Wilson',
      email: 'jack.wilson@example.com',
      address: '876 Palm St, Starling City',
      photo: 'https://randomuser.me/api/portraits/men/10.jpg',
      geo: {
        lat: 51.5074,
        lng: -0.1278,
      },
    },
    {
      id: 11,
      name: 'Kimberly Scott',
      email: 'kimberly.scott@example.com',
      address: '432 Elm St, Hub City',
      photo: 'https://randomuser.me/api/portraits/women/11.jpg',
      geo: {
        lat: 33.4484,
        lng: -112.0740,
      },
    },
    {
      id: 12,
      name: 'Liam White',
      email: 'liam.white@example.com',
      address: '213 Maple St, Fawcett City',
      photo: 'https://randomuser.me/api/portraits/men/12.jpg',
      geo: {
        lat: 35.2271,
        lng: -80.8431,
      },
    },
    {
      id: 13,
      name: 'Mia Young',
      email: 'mia.young@example.com',
      address: '123 Cypress St, Midway City',
      photo: 'https://randomuser.me/api/portraits/women/13.jpg',
      geo: {
        lat: 39.1031,
        lng: -84.5120,
      },
    },
    {
      id: 14,
      name: 'Nathan Lee',
      email: 'nathan.lee@example.com',
      address: '654 Cedar St, Opal City',
      photo: 'https://randomuser.me/api/portraits/men/14.jpg',
      geo: {
        lat: 38.6270,
        lng: -90.1994,
      },
    },
    {
      id: 15,
      name: 'Olivia Brown',
      email: 'olivia.brown@example.com',
      address: '987 Willow Dr, Midvale',
      photo: 'https://randomuser.me/api/portraits/women/15.jpg',
      geo: {
        lat: 40.7608,
        lng: -111.8910,
      },
    },
    {
      id: 16,
      name: 'Paul Davis',
      email: 'paul.davis@example.com',
      address: '543 Oak St, New York City',
      photo: 'https://randomuser.me/api/portraits/men/16.jpg',
      geo: {
        lat: 40.7128,
        lng: -74.0060,
      },
    },
    {
      id: 17,
      name: 'Quinn Moore',
      email: 'quinn.moore@example.com',
      address: '876 Pine St, Gotham',
      photo: 'https://randomuser.me/api/portraits/women/17.jpg',
      geo: {
        lat: 34.0522,
        lng: -118.2437,
      },
    },
    {
      id: 18,
      name: 'Rachel Taylor',
      email: 'rachel.taylor@example.com',
      address: '432 Birch St, Central City',
      photo: 'https://randomuser.me/api/portraits/women/18.jpg',
      geo: {
        lat: 39.9612,
        lng: -82.9988,
      },
    },
    {
      id: 19,
      name: 'Steven Anderson',
      email: 'steven.anderson@example.com',
      address: '213 Cedar Dr, Hub City',
      photo: 'https://randomuser.me/api/portraits/men/19.jpg',
      geo: {
        lat: 29.7604,
        lng: -95.3698,
      },
    },
    {
      id: 20,
      name: 'Victoria Martinez',
      email: 'victoria.martinez@example.com',
      address: '123 Oak St, Fawcett City',
      photo: 'https://randomuser.me/api/portraits/women/20.jpg',
      geo: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
  ];
  
  export default profilesData;  