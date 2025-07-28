// import React, { useState, useRef } from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import Geolocation from 'react-native-geolocation-service';
// //import { getAddressFromCoordinates } from './Geocoding';
// const Camera = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const [location, setLocation] = useState(null);
//   const [address, setAddress] = useState('');
//   const [displaycurrentAddress,setDisplayCurrentAddress] = useState();
//   const cameraRef = useRef(null);
//  // const GOOGLE_MAPS_API_KEY ='AIzaSyBus3pF2IG-g78Vrvs5Z8ZChN0wdEH26xU';
//   const handleCapture = async () => {
//     if (cameraRef.current) {
//       // Capture the image
//       const options = { quality: 0.5, base64: true };
//       const data = await cameraRef.current.takePictureAsync(options);
//       // Update the state with the captured image URI
//       setImageUri(data.uri);
//       // Retrieve the current location
//       Geolocation.getCurrentPosition(
//        async (position) => {
//           // Update the state with the location coordinates
//           const { latitude, longitude } = position.coords;
//           {/*let response = await Location.reverseGeocodeAsync({
//             latitude,
//             longitude
//           })
//           for(let item of response){
//             let address = `${item.name},${item.street},${item.postalCode},${item.city}`;
//             setDisplayCurrentAddress(address);
//           }*/}
//           setLocation({ latitude, longitude });
//           getAddress(latitude, longitude);
//           {/*const address = await getAddressFromCoordinates(latitude, longitude, GOOGLE_MAPS_API_KEY);
//          setAddress(address)
//        console.log('Address:', address);*/}
//         },
//         (error) => {
//           console.log(error);
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     }
//   };
//   const getAddress = (latitude, longitude) => {
//     const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && data.address) {
//           const { road, city, country } = data.address;
//           const formattedAddress = `${road}, ${city}, ${country}`;
//           setAddress(formattedAddress);
//         } else {
//           console.log('Unable to retrieve address');
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving address: ', error);
//       });
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <RNCamera
//         ref={cameraRef}
//         style={{ flex: 1 }}
//       />
//       <TouchableOpacity
//         style={{ alignSelf: 'center', margin: 20 }}
//         onPress={handleCapture}
//       >
//         <Text style={{ fontSize: 20, color: 'black' }}>Capture Image</Text>
//       </TouchableOpacity>
//       {imageUri && (
//         <Text style={{ margin: 10,color:'black' }}>Image URI: {imageUri}</Text>
//       )}
//       {location && (
//         <Text style={{ margin: 10 ,color:"#000"}}>
//           Location: {location.latitude}, {location.longitude}
//         </Text>
//       )}
//       {address !== '' && <Text style={{ margin: 10 ,color:"#000"}}>Address: {address}</Text>}
//     </View>
//   );
// };
// export default Camera;
"use strict";