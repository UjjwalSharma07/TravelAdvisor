
import { GoogleMap,useJsApiLoader ,Marker ,InfoWindow} from '@react-google-maps/api'
import './Map.scss'
import React, { useState } from 'react'
import {ImLocation2} from 'react-icons/im'

const Map = ({setCoordinates,setBounds,coordinates,places}) => {
  console.log("map places",places)
  // const places = [
  //   { name: "cool place" },
  //   { name: "Best beer" },
  //   { name: "Best Streak" },
  //   { name: "cool place" },
  //   { name: "Best beer" },
  //   { name: "Best Streak" },
  //   { name: "cool place" },
  //   { name: "Best beer" },
  //   { name: "Best Streak" },
  // ];

  const [mapref, setMapRef] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:"AIzaSyCUjhi7suz4ASW0b9hju6n4qJ1MDazdtoA",
  });
   
 
  const containerStyle = {
    width: '100%',
    height: "100vh"
  
  }; 

  const handleOnLoad = (map) => {
    setMapRef(map);
  };

  const handleChanged = () => {
 
    if (mapref) {
      const newCenter = mapref.getCenter();
      const newBounds = mapref.getBounds();

      setCoordinates(newCenter);
      setBounds(newBounds);
      console.log(newCenter);
      console.log(newBounds);
    }
  };
 
  return (
    <div className="map">
      {!isLoaded ? (
        <div className="load">Loading....</div>
      ) : (
        <GoogleMap
          zoom={10}
          onLoad={handleOnLoad}
          onCenterChanged={handleChanged}
          onBoundsChanged={handleChanged}
          center={coordinates}
          mapContainerStyle={containerStyle}
        >
          {places?.map((place, i) => (
            <Marker
              key={i}
              position={{ lat: Number(place.latitude), lng: Number(place.longitude) }}
              icon={{
                url: 'https://cdn-icons-png.flaticon.com/32/149/149059.png',
                scaledSize: new window.google.maps.Size(32, 32),
              }}
              onClick={() => {
                setSelectedPlace(place);
              }}
            />
          ))}
          {selectedPlace && (
            <InfoWindow
              position={{ lat: Number(selectedPlace.latitude), lng: Number(selectedPlace.longitude) }}
              onCloseClick={() => {
                setSelectedPlace(null);
              }}
            >
              <div className="info-window">
                <div>
                <img
                  src={selectedPlace.photo ? selectedPlace.photo.images.large.url : 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                  alt={selectedPlace.name}
                />
                </div>
                <h3>{selectedPlace.name}</h3>
                <span>{selectedPlace.address}</span>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;