import React, {useState, useEffect, useRef} from 'react';
// import MapView from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker, InfoWindow} from 'react-native-maps';
import {
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import moment from 'moment';
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').hight;

const MapNavigation = ({navigation, route}) => {
  const mapRef = useRef(null);
  // const {coloring, Language, AssetDetails, item, Location} = route.params;
  const [Location, setLocation] = useState('');

  const [assetDetailsByAssetId, setAssetDetailsByAssetId] = useState([]);
  const [AssetInstallationData, setAssetInstallationData] = useState([]);
  const [assetImage, setAssetImage] = useState();
  const [addressLocation, setAddressLocation] = useState();
  const {
    color,
    Language,
    AssetDetails,
    item,
    selectedAssetTypeName,
    address,
    geoLocation,
    resourceId,
    LanguageOpt,
    selectedAssetDetails,
    coloring,
  } = route.params;

  // console.log("MAP NAVIGATION #####" ,selectedAssetDetails);

  useEffect(() => {
    setAssetImage(selectedAssetDetails.dtrPicture);
    setAddressLocation(selectedAssetDetails.address);
  }, [selectedAssetDetails]);

  const now = moment();
  const workStartedDateTime = now.format('YYYY-MM-DD HH:mm:ss');

  useEffect(() => {
    // Zoom to specific location after component mounts
    if (mapRef.current) {
      mapRef.current.animateToRegion(geoLocation, 1000); // 1000ms animation duration
      //  mapRef.current.animateToRegion(keeneRegion, 1 * 1000);
    }
  }, [geoLocation]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#18253f" />
      <View
        style={{
          marginLeft: 10,
          height: 40,
          flexDirection: 'column',
          marginTop: 10,
        }}>
        {(() => {
          if (
            typeof geoLocation.latitude === 'number' &&
            geoLocation.latitude <= 90 &&
            geoLocation.latitude >= -90
          ) {
            return (
              <View>
                <Text>
                  {' '}
                  {LanguageOpt('Location_Status_From_DB')} : {geoLocation.latitude},
                  {geoLocation.longitude}{' '}
                </Text>
              </View>
            );
          } else {
            return (
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: coloring}}>
                  {' '}
                  Location Data From DB : {geoLocation.latitude},
                  {geoLocation.longitude}{' '}
                </Text>
                <Text> Location Marker not found </Text>
                <Text> check Lat ,Long values from DB </Text>
              </View>
            );
          }
        })()}
      </View>

      <View style={styles(coloring).MainContainer}>
        {(() => {
          if (
            typeof geoLocation.latitude === 'number' &&
            geoLocation.latitude <= 90 &&
            geoLocation.latitude >= -90
          ) {
            return (
              <MapView
                style={styles(coloring).map}
                ref={mapRef}
                initialRegion={{
                  latitude: 17.394822,
                  longitude: 78.424593,
                  latitudeDelta: 6.795218101812615,
                  longitudeDelta: 79.9008869173333,
                }}>
                {/* onMapReady={zoomToMarker}> */}

                <Marker
                  coordinate={geoLocation}
                  title={item.assetId}
                  pinColor={coloring}></Marker>
              </MapView>
            );
          } else {
          }
        })()}
      </View>
      {/* {(() => {
              if (typeof geoLocation.latitude==='number' && geoLocation.latitude<=90 && geoLocation.latitude>= -90){
                  return (
                    <MapView
                          style={styles(coloring).map}
                          showsUserLocation={false}
                          zoomEnabled={true}
                          zoomControlEnabled={true}
                          initialRegion={{
                            latitude: 17.4248742,
                            longitude: 78.4583377,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                          }}>

                        
                                  <Marker
                                  coordinate={geoLocation}
                                  title={selectedAssetDetails.assetId}
                                  description={selectedAssetDetails.location}>
                                  <Image
                                    source={{uri: assetImage}} // Replace with your image path
                                    style={{width: 35,height: 35,borderRadius:35}} // Adjust width and height as needed
                                  />
                                </Marker>
                              
                        
                      </MapView>
                )
              }else{
                <Text>Invalid cordinates found from DB </Text>              }              
            
            })()} */}
      {/* <Marker
        coordinate={geoLocation}
        title={selectedAssetDetails.assetId}
        description={selectedAssetDetails.location}>
        <Image
          source={{uri: assetImage}} // Replace with your image path
          style={{width: 35,height: 35,borderRadius:35}} // Adjust width and height as needed
        />
      </Marker> */}

      <View
        style={{
          position: 'absolute',
          right: 130,
          bottom: 100,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ScanQrCode', {
              // AssetDetails: item, //Language.dtData,
              // item: item, //Language.AssetDataTitleTextDT,
              AssetDetails: item, //Language.dtData,
              item: item, //Language.AssetDataTitleTextDT,
              color: '#E27D39',
              Language: Language,
              resourceId: resourceId,
              address: address,
              geoLocation: geoLocation,
              selectedAssetDetails: selectedAssetDetails,
              coloring: coloring,
              Language: Language,
              AssetDetails: AssetDetails,
              item: item,
              Location: Location,
              LanguageOpt:LanguageOpt,
              installationID: item.installationId,
              workStartedDateTime: workStartedDateTime,
              //  selectedAssetTypeName:selectedAssetTypeName
            })
          }
          style={{
            backgroundColor: coloring,
            borderRadius: 40,
            height: 40,
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: '500'}}>
            {LanguageOpt('Next')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MapNavigation;
const styles = coloring =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    map: {
      width: '100%',
      height: '90%',
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 5,
      marginTop: 30,
    },
  });
// import React from 'react';
// import { View, Text, TouchableOpacity,StyleSheet ,Dimensions} from 'react-native';
// import MapView, { Marker, Callout, Circle } from 'react-native-maps';

// const MapNavigation = ({ navigation, route }) => {
//     const { coloring } = route.params;
//     return (
//         <View>
//               <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     latitude: 37.78825,
//                     longitude: -122.4324,
//                     latitudeDelta: 0.1922,
//                     longitudeDelta: 0.0421,
//                 }}
//                 provider="google">
//                 <Marker
//                     coordinate={{
//                         latitude: 37.78825,
//                         longitude: -122.4324
//                     }}
//                     pinColor="black"
//                     draggable={true}
//                     onDragStart={(e) => {
//                         console.log('Drag Start', e.nativeEvent.coordinate);
//                     }}
//                 >
//                 </Marker>
//             </MapView>
//         </View>
//     )
// }
// export default MapNavigation;
// const styles = StyleSheet.create({
//     map: {
//         width: Dimensions.get('window').width,
//         height: Dimensions.get('window').height,
//     },
//     bottomView: {
//         width: '100%',
//         height: 50,
//         backgroundColor: '#000',
//         justifyContent: 'center',
//         alignItems: 'center',
//         //position: 'absolute', //Here is the trick
//         // bottom: 0, //Here is the trick
//         marginBottom: 100
//     },
//     modal: {
//         width: "100%",
//         height: 60,

//         alignItems: "center",
//         justifyContent: "center",
//         borderStyle: 'solid',
//         backgroundColor: "black"
//     },
// });
