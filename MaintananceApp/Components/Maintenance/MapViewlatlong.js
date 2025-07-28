import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Text,
  Dimensions,
  ActivityIndicator,
  Platform,
} from 'react-native';
import MapView, {
  Marker,
  Callout,
  showsUserLocation,
  Circle,
  Polyline,
} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
import {getDistance, latitude, longitude} from 'geolib';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
import {useTranslation} from 'react-i18next';

const MapViewlatlong = ({navigation, route}) => {
  const {t} = useTranslation();
  const {
    Language,
    color,
    resourceName,
    AssetDetails,
    resourceid,
    id,
    LanguageOpt,
  } = route.params;
  console.log('mapviewlatlongsss', resourceName, resourceid);
  const [passid, setPassid] = useState(id);
  const mapRef = useRef(null);
  const [specificLocation, setSpecificLocation] = useState({
    latitude: parseFloat(17.4248742),
    longitude: parseFloat(78.4583377),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [data, setData] = useState([]);
  const [assetId, setAssetId] = useState();
  const [ticketSubject, setTicketSubject] = useState([]);
  const [ticketDescription, setTicketDescription] = useState([]);
  const [ticketRaisedDate, setTicketRaisedDate] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    try {
      setLoader(true);
      const response = await fetch(
        'http://mapp.eficaa.com:8080/Eam_mobileapp_microservices/maintenancedata/maintenance/' +
          id,
      );
      const result = await response.json();
      console.log('result assetid', result[0]?.existingAssetId);
      setData(result);
      setAssetId(result[0]?.existingAssetId);
      if (result.status == '500') {
        Alert.alert(t('Server_Error'));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoader(false);
    }
  };

  const fetchTicketData = async () => {
    try {
      setLoader(true);
      const url =
        'http://mapp.eficaa.com:8080/Eam_mobileapp_microservices/maintenancedata/MaintenanceWithTickets/' +
        id;
      const response = await fetch(url);
      //   `http://mapp.eficaa.com:8080/EAM_Maintanance_V1.0/maintenancedata/maintenance/${id}`,
      // );
      const result = await response.json();
      console.log(
        'TICKET DATA DESCRIPTION  ##### ',
        result[0].ticketDetails.ticketSubject,
      );
      setTicketSubject(result[0].ticketDetails.ticketSubject);
      setTicketDescription(result[0].ticketDetails.ticketDescription);
      setTicketRaisedDate(result[0].ticketDetails.tickerRaisedDate);
      if (result.status == '500') {
        Alert.alert(t('Server_Error'));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData(
      'http://mapp.eficaa.com:8080/Eam_mobileapp_microservices/maintenancedata/maintenance/' +
        id,
    );
    fetchTicketData();
  }, [id]);

  useEffect(() => {
    if (data.geoLatitude && data.geoLongitude) {
      setSpecificLocation({
        latitude: parseFloat(data.geoLatitude),
        longitude: parseFloat(data.geoLongitude),
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    }
  }, [data]);

  console.log('TICKET DESCRIPTION ###### ' + ticketDescription, ticketSubject);

  useEffect(() => {
    // Zoom to specific location after component mounts
    if (mapRef.current) {
      mapRef.current.animateToRegion(specificLocation, 1000); // 1000ms animation duration
      //  mapRef.current.animateToRegion(keeneRegion, 1 * 1000);
    }
  }, [specificLocation]);

  const [standard, setStandard] = useState(true);
  const [satellite, setSatellite] = useState(false);
  const [terrain, setTerrain] = useState(false);

  const [mapViewing, setMapViewing] = useState('standard');
  if (loader) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  const Fourlines = ({lefttext, righttext}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{width: width * 0.28, color: '#fff', fontWeight: '600'}}>
          {lefttext}
        </Text>
        <Text style={{width: width * 0.02, color: '#fff', fontWeight: '600'}}>
          :
        </Text>
        <Text
          style={{flex: 1, color: '#fff', paddingLeft: 8, fontWeight: '500'}}>
          {righttext}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{backgroundColor: '#fff'}}>
        <Text
          style={{
            fontWeight: '600',
            color: '#000',
            marginTop: 15,
            marginLeft: 15,
          }}>
          {t('Asset_Id')}: {assetId}
        </Text>

        <Text
          style={{
            fontWeight: '600',
            color: '#000',
            marginTop: 5,
            marginLeft: 15,
          }}>
          {t('Latitude')}: {data[0]?.geoLatitude}
        </Text>
        <Text
          style={{
            fontWeight: '600',
            color: '#000',
            marginTop: 5,
            marginLeft: 15,
          }}>
          {t('Longitude')}: {data[0]?.geoLongitude}
        </Text>

        <View>
          {(() => {
            if (!ticketSubject || !ticketDescription) {
              return (
                <View>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: '#000',
                      marginTop: 5,
                      marginLeft: 15,
                    }}>
                    {LanguageOpt('ticket_Details')} : Not Available
                  </Text>
                </View>
              );
            } else {
              return (
                <View>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: '#000',
                      marginTop: 5,
                      marginLeft: 15,
                    }}>
                    {LanguageOpt('ticket_Details')} :{ticketSubject}
                    {', '}
                    {ticketDescription}
                  </Text>
                </View>
              );
            }
          })()}
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {(() => {
          if (
            typeof specificLocation.latitude === 'number' &&
            specificLocation.latitude <= 90 &&
            specificLocation.latitude >= -90
          ) {
            return (
              <MapView
                // style={styles(coloring).mapStyle}
                style={styles.map}
                ref={mapRef}
                initialRegion={{
                  latitude: 17.394822,
                  longitude: 78.424593,
                  latitudeDelta: 6.795218101812615,
                  longitudeDelta: 79.9008869173333,
                }}>
                {/* onMapReady={zoomToMarker}> */}

                <Marker
                  coordinate={specificLocation}
                  title={data.existingAssetId}
                  pinColor={color}></Marker>
              </MapView>
            );
          } else {
          }
        })()}
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('StepperLogic', {
            Language: Language,
            AssetDetails: AssetDetails,
            existingAssetId: data[0].existingAssetId,
            resourceid: resourceid,
            passid: passid,
            color: color,
            latitude: data.geoLatitude,
            longitude: data.geoLongitude,
            Language: Language,
            maintenancetype: data.maintenanceType,
            resourceName: resourceName,
            LanguageOpt: LanguageOpt,
          })
        }
        style={{
          alignSelf: 'center',
          minWidth: 150,
          borderRadius: 40,
          justifyContent: 'center',
          height: 50,
          marginBottom: 20,
          backgroundColor: color,
        }}>
        <Text style={{color: '#fff', fontWeight: '600', textAlign: 'center'}}>
          {t('Next')}
        </Text>
      </TouchableOpacity>
    </View>
    // <View style={{flex: 1, backgroundColor: '#fff'}}>
    //   {typeof specificLocation.latitude === 'number' &&
    //   specificLocation.latitude <= 90 &&
    //   specificLocation.latitude >= -90 &&
    //   typeof specificLocation.longitude === 'number' &&
    //   specificLocation.longitude <= 180 &&
    //   specificLocation.longitude >= -180 ? (
    //     <MapView
    //       style={styles.map}
    //       initialRegion={{
    //         latitude: parseFloat(data.geoLatitude),
    //         longitude: parseFloat(data.geoLongitude),
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //       }}
    //       mapType={mapViewing}>
    //       <Marker
    //         coordinate={specificLocation}
    //         // onPress={data =>
    //         //   console.log('marker data', data.nativeEvent.coordinate)
    //         // }
    //       >
    //         <Callout>
    //           <View>
    //             <Text style={{fontWeight: '600', color: '#000'}}>
    //               {t('Asset_Id')}: {data.existingAssetId}
    //             </Text>
    //             {/* <Text style={{fontWeight: '600', color: '#000'}}>
    //               {t('Asset_Type')}: {data.existingAssetId.substring(0, 3)}
    //             </Text> */}
    //             <Text style={{fontWeight: '600', color: '#000'}}>
    //               {t('Latitude')}: {data.geoLatitude}
    //             </Text>
    //             <Text style={{fontWeight: '600', color: '#000'}}>
    //               {t('Longitude')}: {data.geoLongitude}
    //             </Text>
    //           </View>
    //         </Callout>
    //       </Marker>
    //     </MapView>
    //   ) : (
    //     <MapView
    //       style={styles.map}
    //       initialRegion={{
    //         latitude: 17.394822,
    //         longitude: 78.424593,
    //         latitudeDelta: 6.795218101812615,
    //         longitudeDelta: 79.9008869173333,
    //       }}
    //       mapType={mapViewing}
    //     />
    //   )}

    //   <View
    //     style={{
    //       position: 'absolute',
    //       height: height * 0.2,
    //       width: '100%',
    //       justifyContent: 'center',
    //       borderBottomLeftRadius: 50,
    //       borderBottomRightRadius: 50,
    //       backgroundColor: color,
    //     }}>
    //     <View style={{marginLeft: 25}}>
    //       <Fourlines
    //         lefttext={t('Asset_Id')}
    //         righttext={data.existingAssetId}
    //       />
    //       {/* <Fourlines
    //         lefttext={t('Asset_Type')}
    //         righttext={data.existingAssetId.substring(0, 3)}
    //       /> */}
    //       {/* <Fourlines lefttext={t('Latitude')} righttext={data.geoLatitude} />
    //       <Fourlines lefttext={t('Longitude')} righttext={data.geoLongitude} /> */}
    //       <Fourlines lefttext={t('Ticket Info')} righttext={ticketSubject} />
    //       <Fourlines righttext={ticketDescription} />

    //       {/* <Text style={{fontWeight: '600', color: '#000'}}>
    //         Ticket Info: {ticketSubject}
    //       </Text>
    //       <Text style={{fontWeight: '600', color: '#000'}}>
    //         {ticketDescription}

    //       </Text> */}
    //     </View>
    //     {/* <View style={{ position: 'absolute', right: 60, bottom: 60 }}>
    //       <Image source={require('../images/info.png')} style={{ height: 30, width: 30 }} />
    //     </View> */}
    //   </View>
    //   <View
    //     style={{
    //       position: 'absolute',
    //       bottom: 20,
    //       width: '100%',
    //     }}>
    //     <TouchableOpacity
    //       onPress={() =>
    //         navigation.navigate('StepperLogic', {
    //           Language: Language,
    //           AssetDetails: AssetDetails,
    //           existingAssetId: data.existingAssetId,
    //           resourceid: resourceid,
    //           passid: passid,
    //           color: color,
    //           latitude: data.geoLatitude,
    //           longitude: data.geoLongitude,
    //           Language: Language,
    //           maintenancetype: data.maintenanceType,
    //           resourceName: resourceName,
    //           LanguageOpt: LanguageOpt,
    //         })
    //       }
    //       style={{
    //         alignSelf: 'center',
    //         minWidth: 150,
    //         borderRadius: 40,
    //         justifyContent: 'center',
    //         height: 50,
    //         backgroundColor: color,
    //       }}>
    //       <Text style={{color: '#fff', fontWeight: '600', textAlign: 'center'}}>
    //         {t('Next')}
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View
    //     style={{
    //       position: 'absolute',
    //       right: 10,
    //       flexDirection: 'row',
    //       top: height * 0.25,
    //     }}>
    //     <TouchableOpacity
    //       onPress={() =>
    //         setMapViewing('standard') &
    //         setStandard(true) &
    //         setSatellite(false) &
    //         setTerrain(false)
    //       }>
    //       <View
    //         style={{
    //           backgroundColor: standard ? 'grey' : 'white',
    //           height: 30,
    //           borderTopLeftRadius: 5,
    //           borderTopWidth: 2,
    //           borderRightWidth: 1,
    //           borderBottomWidth: 2,
    //           borderLeftWidth: 2,
    //           width: 80,
    //           borderColor: 'grey',
    //           borderBottomLeftRadius: 5,
    //           justifyContent: 'center',
    //         }}>
    //         <Text
    //           style={{
    //             color: standard ? 'white' : 'black',
    //             textAlign: 'center',
    //           }}>
    //           {t('Standard')}
    //         </Text>
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() =>
    //         setMapViewing('satellite') &
    //         setSatellite(true) &
    //         setStandard(false) &
    //         setTerrain(false)
    //       }>
    //       <View
    //         style={{
    //           backgroundColor: satellite ? 'grey' : 'white',
    //           height: 30,
    //           borderTopWidth: 2,
    //           borderLeftWidth: 1,
    //           borderBottomWidth: 2,
    //           borderRightWidth: 1,
    //           borderColor: 'grey',
    //           width: 80,
    //           justifyContent: 'center',
    //         }}>
    //         <Text
    //           style={{
    //             color: satellite ? 'white' : 'black',
    //             textAlign: 'center',
    //           }}>
    //           {t('Satellite')}
    //         </Text>
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() =>
    //         setMapViewing('terrain') &
    //         setTerrain(true) &
    //         setSatellite(false) &
    //         setStandard(false)
    //       }>
    //       <View
    //         style={{
    //           backgroundColor: terrain ? 'grey' : 'white',
    //           marginRight: 5,
    //           borderTopRightRadius: 5,
    //           borderWidth: 2,
    //           borderLeftWidth: 1,
    //           borderColor: 'grey',
    //           borderBottomRightRadius: 5,
    //           width: 80,
    //           height: 30,
    //           justifyContent: 'center',
    //         }}>
    //         <Text
    //           style={{color: terrain ? 'white' : 'black', textAlign: 'center'}}>
    //           {t('Terrain')}
    //         </Text>
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  map: {
    marginTop: 40,
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
export default MapViewlatlong;
