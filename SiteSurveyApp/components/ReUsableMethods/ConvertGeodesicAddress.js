import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default class ConvertGeodesicAddress {
  async convertGeodesicAddress() {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (position) => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            Geocoder.from(position.coords.latitude, position.coords.longitude)
                .then(json => {
                    console.log(json);
                    var addressComponent = json.results[0].address_components;
                    this.setState({
                        Address: addressComponent
                    })
                    console.log(addressComponent);
                })
                .catch(error => console.warn(error));
        },
        (error) => {
            // See error code charts below.
             this.setState({ error: error.message }),
               console.log(error.code, error.message);
         },
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 100000 }
    );
      // fetch(
      //   'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      //    latitude +
      //     ',' +
      //     longitude +
      //     '&key=' +
      //     'AIzaSyChJmLa9YJXOF0N5tYeKl7a8fQW55H5YzU',  //GeoCoding API key
      // )
      //   .then(response => response.json())
      //   .then(responseJson => {
      //     console.log(
      //       'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
      //     );
      //     resolve(responseJson);
      //   })
      //   .catch(ex => {
      //   //   if (Exception(ex)) {
      //       const {code, message} = ex;
      //        console.warn(code, message);
      //   //     //setError(code);
      //       reject(code);
      //   //   } else {
      //   //     console.warn(ex);
      //   //   }        
      //   });
    });
  }
}
