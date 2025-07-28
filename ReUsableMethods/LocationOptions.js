import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

import GetLocation, {
  Location,
  LocationErrorCode,
  isLocationError,
} from 'react-native-get-location';
export default class LocationOptions {
  async requestLocation(){    
    return new Promise((resolve, reject) => {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 30000,
        rationale: {
          title: 'Location permission',
          message: 'The app needs the permission to request your location.',
          buttonPositive: 'Ok',
        },
      })
        .then(newLocation => {
         // setLoading(false);
         // setLocation(newLocation);
          resolve(newLocation)
        })
        .catch(ex => {
          if (isLocationError(ex)) {
            const {code, message} = ex;
            console.warn(code, message);
            //setError(code);
            reject(code);
          } else {
            console.warn(ex);
          }
          setLoading(false);
          setLocation(null);
        });
    });

  }
}

 

// return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>Welcome to React Native!</Text>
//       <Text style={styles.instructions}>
//         To get location, press the button:
//       </Text>

//       <View style={styles.button}>
//         <TouchableOpacity style={{width:100,height:50,backgroundColor:"#909090"}}
//             onPress={() => requestLocation()} >
//               <Text style={{color:"#fff"}}>Get Location</Text>
         
//           </TouchableOpacity>  
//       </View>
//       <Text style={styles.instructions}>
//        Location Data  : {location.latitude},{location.longitude}
//       </Text>
//     </View>
//   );
//}

// export default LocationOptions;
/*


  const requestLocation = () => {
    setLoading(true);
    setLocation(null);
    setError(null);

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 30000,
      rationale: {
        title: 'Location permission',
        message: 'The app needs the permission to request your location.',
        buttonPositive: 'Ok',
      },
    })
      .then(newLocation => {
        setLoading(false);
        setLocation(newLocation);
      })
      .catch(ex => {
        if (isLocationError(ex)) {
          const {code, message} = ex;
          console.warn(code, message);
          setError(code);
        } else {
          console.warn(ex);
        }
        setLoading(false);
        setLocation(null);
      });
  };
console.log("Location Data ####### "+ JSON.stringify(location));


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    location: {
      color: '#333333',
      marginBottom: 5,
    },
    button: {
      marginBottom: 8,
    },
  });
  */

  