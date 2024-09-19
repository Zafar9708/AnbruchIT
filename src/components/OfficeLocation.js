
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const OfficeLocation = () => {
    const officeLocations = [
        { city: 'Noida', imgSrc: '/kloudrac.jpg', lat: 28.5355, lng: 77.3910 },
        // Add coordinates for other locations
        // { city: 'Delhi', imgSrc: 'https://via.placeholder.com/400x300?text=Delhi', lat: <latitude>, lng: <longitude> },
        // { city: 'Gurugram', imgSrc: 'https://via.placeholder.com/400x300?text=Gurugram', lat: <latitude>, lng: <longitude> },
    ];

    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: officeLocations[0].lat, // You can change this to a default or dynamic center
        lng: officeLocations[0].lng
    };

    return (
        <div>
            <div className="container mx-auto px-4 py-2">
                <h2 className="text-2xl font-bold mb-1">Our Office Locations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {officeLocations.map((location, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={location.imgSrc}
                                alt={`${location.city} Office`}
                                className="w-150 h-80 object-contain" // Use object-contain instead of object-cover
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{location.city}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <LoadScript
                        googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your API key
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                            {officeLocations.map((location, index) => (
                                <Marker
                                    key={index}
                                    position={{ lat: location.lat, lng: location.lng }}
                                    label={location.city}
                                />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    );
}

export default OfficeLocation;
