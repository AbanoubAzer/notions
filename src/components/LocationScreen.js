import React, {useRef, useEffect, useState} from 'react';
import {Button, View, Text, Alert, ActivityIndicator} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const LocationScreen = () => {
  const mapRef = useRef(null);
  const [location, setlocation] = useState({});
  const updateCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setlocation(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };
  useEffect(() => {
    updateCurrentLocation();
  }, []);
  return (
    <View style={{flex: 1}}>
      {location?.latitude ? (
        <MapView
          style={{flex: 1}}
          ref={mapRef}
          initialRegion={{
            latitude: location?.latitude ? location?.latitude : 30.033333,
            longitude: location?.latitude ? location?.longitude : 31.233334,
            latitudeDelta: 15,
            longitudeDelta: 15,
          }}>
          {location?.latitude && (
            <Marker
              coordinate={{
                latitude: location?.latitude ? location?.latitude : 30.033333,
                longitude: location?.latitude ? location?.longitude : 31.233334,
              }}
              title="Origin"
              identifier="origin"
              pinColor="#0175ff"
            />
          )}
        </MapView>
      ) : (
        <ActivityIndicator size="large" color="#0175ff" />
      )}
    </View>
  );
};

export default LocationScreen;
