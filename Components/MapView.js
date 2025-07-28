import React, {useState, useEffect, useMemo, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker, InfoWindow} from 'react-native-maps';

import Constants from '../Constants/Constants';
import eficaalogo from '../images/eficaa_logo.png';
import CheckNetworkConnectivity from '../ReusableFunctions/CheckNetworkConnectivity';
import TODOService from '../ReUsableMethods/TODOService';
import {LogMessages} from '../LogManager/LogMessages';
import {format} from 'date-fns';
//import moment from 'moment';

const MapViewAssigned = ({navigation, route}) => {
  const mapRef = useRef(null);
  const checkNetworkState = new CheckNetworkConnectivity();
  const todoService = new TODOService();
  const [LocationFromDb, setLocation] = useState('');
  const [latitude, setLatitude] = useState('17.4248742');
  const [longitude, setLongitude] = useState('78.4583377');
  const [specificLocation, setSpecificLocation] = useState({
    latitude: parseFloat(17.4248742),
    longitude: parseFloat(78.4583377),
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  const [ticketContent, setTicketContent] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  // const now = moment();
  // const workStartedDateTime = now.format('YYYY-MM-DD HH:mm:ss');

  const currentDateTime = new Date();
  const workStartedDateTime = format(currentDateTime, 'yyyy-MM-dd HH:mm:ss');

  const [assetImageFrmDB, setassetImage] = useState();
  const [assetID, setAssetID] = useState('');
  const [assetDetailsByAssetId, setAssetDetailsByAssetId] = useState([]);
  const [AssetInstallationData, setAssetInstallationData] = useState([]);
  const {
    coloring,
    Language,
    AssetDetails,
    item,
    selectedAssetTypeName,
    resourceId,
    LanguageOpt,
    processType,
    assettypename
  } = route.params;
  console.log('MAP VIEW PAGE', 'MAP VIEW PAGE' + AssetDetails.length);
  useEffect(() => {
    if (item !== null) {
      setAssetInstallationData(item);
      setAssetID(item.assetId);
      fetchData();
    }
  }, [item]);

  // console.log(
  //   'MAP VIEW PAGE',
  //   'Asset Data  ##### ' + AssetInstallationData.assetId
  // );
  // console.log(
  //   'MAP VIEW PAGE',
  //   'Asset Data AAAAAAAAAssetID ##### ' + assetID,
  // );

  useEffect(() => {
    console.log(
      'MAP VIEW PAGE',
      'Asset Data AsetIDINSIDE USE EFFECT @@@@@@@@@ ##### ' + assetID,
    );
    var assetTypeName = assetID.substring(0, 3);
    console.log(
      'MAP VIEW PAGE',
      'Asset Data Aset TYPE NAME INSIDE USE EFFECT @@@@@@@@@ ##### ' +
        assetTypeName,
    );
    if (assetTypeName === 'DTR') {
      getAssetDetailsByAssetID('dtrdata', assetID);
    } else if (assetTypeName === 'TMU') {
      getAssetDetailsByAssetID('tmudata', assetID);
    } else if (assetTypeName === 'MTR') {
      getAssetDetailsByAssetID('meterdata', assetID);
    } else if (assetTypeName === 'DCU') {
      getAssetDetailsByAssetID('dcudata', assetID);
    } else if (assetTypeName === 'ROU') {
      getAssetDetailsByAssetID('routerdata', assetID);
    }
  }, [assetID]);

  const getAssetDetailsByAssetID = async (methodname, paramName) => {
    //http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/tmudata/TMU-202403-000000002

    const req_url =
      'http://mapp.eficaa.com:8080/Eam_mobileapp_microservices/' +
      methodname +
      '/' +
      paramName;
    //const req="http://172.16.15.24:91/api/v1/ServicePoints/2";
    console.log(
      'Installation Details Request ### ',
      'Installation Details Request ' + req_url,
    );
    let token = '';
    const {data, status} = await todoService.getDataFromApi(req_url, token);
    console.log(
      ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',
      data,
    );

    setAssetDetailsByAssetId(data);
    setLocation(data.location);
    setLatitude(data.latitude);
    setLongitude(data.longitude);
    setassetImage(data.dtrPicture);

    console.log(
      'DATA FROM DATA BASE ',
      'DATA FROM DATABASE LATITUDE  LONGITUDE #### ',
      data.latitude,
      data.longitude,
    );

    setSpecificLocation({
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    console.log(
      'INSTALLATION DASHBOARD',
      methodname,
      LogMessages.CODE_HTTP,
      status,
    );
  };

  // useEffect(() => {
  //   if (mapRef.current) {
  //     // Trigger zoom after a short delay or map load to ensure it's rendered
  //     setTimeout(zoomToMarker, 1000); // Delay for better UX (optional)
  //   }
  // }, []);

  useEffect(() => {
    // Zoom to specific location after component mounts
    if (mapRef.current) {
      mapRef.current.animateToRegion(specificLocation, 1000); // 1000ms animation duration
      //  mapRef.current.animateToRegion(keeneRegion, 1 * 1000);
    }
  }, [specificLocation]);
  // useEffect(() => {
  //   //http://mapp.eficaa.com:8080/Eam_mobileapp_microservices/ticketdata/ProcessType/1132

  //   console.log('Item INSTALLATION ID #### ' + item.installationId);
  //   fetchData();
  // }, [item]);

  const fetchData = async () => {
    const url =
      'http://mapp.eficaa.com:8080/Eam_mobileapp_microservices/ticketdata/ProcessType/' +
      item.installationId; //need a check...
    console.log('TICKETS DATA URL@@@@@@@@@@@@@@@@22', url);
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(
        'TICKETS DATA RETURNED FROM API $$$$$$$$$$$',
        JSON.stringify(result),
      );
      setTicketContent(result.ticketSubject);
      setTicketDescription(result.ticketDescription);
      // if (result.status == '500') {
      //   Alert.alert(LanguageOpt('Server_Error'));
      // }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(
    'TICKET SUBJECT DESCRIPTION  $$$$$$$$$$$$ ' + ticketContent,
    ticketDescription,
  );

  let str = 'sailaja';
  let str1 = 'cheela';
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={{
          height: screenHeight / 6 + 20,
          width: '100%',
          // backgroundColor: coloring,
          justifyContent: 'center',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        {/* <View><Text style={{fontWeight: 'bold', color: '#fff',marginLeft:25}}>Asset Details</Text></View> */}

        <View style={{marginLeft: 25, flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', flex: 2}}>
            <Text style={{fontWeight: 'bold', color: '#18253f'}}>
              {item.assetId}
            </Text>
            <Text style={{marginTop: 5, color: '#18253f'}}>
              {LanguageOpt('Location')} :{LocationFromDb}
            </Text>
            <Text style={{marginTop: 5, color: '#18253f'}}>
              {LanguageOpt('Lat_Long')} :{latitude},{longitude}
            </Text>
            <View>
              {(() => {
                if (!ticketContent || !ticketDescription) {
                  return (
                    <View>
                      <Text style={{color: '#18253f', marginTop: 5}}>
                        {LanguageOpt('ticket_Details')} : Not Available
                      </Text>
                    </View>
                  );
                } else {
                  return (
                    <View>
                      <Text style={{marginTop: 5, color: '#18253f'}}>
                        {LanguageOpt('ticket_Details')} :{ticketContent}
                      </Text>
                      <Text
                        style={{marginTop: 5, marginLeft: 20, color: '#18253f'}}>
                        {ticketDescription}
                      </Text>
                    </View>
                  );
                }
              })()}
            </View>
          </View>

          {/* <View
            style={{
              flexDirection: 'column',
              backgroundColor: 'white',
              width: 60,
              height: 60,
              borderRadius: 60,
              marginRight: 20,
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                marginTop: 10,
              }}
              source={{uri: assetImageFrmDB}}
            />
          </View> */}
        </View>
      </View>

      <View
        style={{
          marginLeft: 10,
          height: 40,
          flexDirection: 'column',
          marginTop: 10,
        }}>
        {(() => {
          if (
            typeof specificLocation.latitude === 'number' &&
            specificLocation.latitude <= 90 &&
            specificLocation.latitude >= -90
          ) {
            return (
              <View>
                <Text>
                  {' '}
                  {LanguageOpt('Location_Status_From_DB')} :{' '}
                  {specificLocation.latitude},{specificLocation.longitude}{' '}
                </Text>

                {/* <MapView
                    style={styles(coloring).mapStyle}
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
                      coordinate={specificLocation}
                      title={item.assetId}
                      description={Location}>
                      <Image
                        source={{uri: assetImage}} // Replace with your image path
                        style={{width: 35,height: 35,borderRadius:35}} // Adjust width and height as needed
                      />
                    </Marker>           
                  </MapView> */}
              </View>
            );
          } else {
            return (
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: coloring}}>
                  {' '}
                  Location Data From DB : {specificLocation.latitude},
                  {specificLocation.longitude}{' '}
                </Text>
                <Text> Location Marker not found </Text>
                <Text> check Lat ,Long values from DB </Text>
              </View>
            );
          }
        })()}
      </View>

      <View style={{marginTop: 20, height: '60%', borderRadius: 30}}>
        <View style={styles(coloring).MainContainer}>
          {(() => {
            if (
              typeof specificLocation.latitude === 'number' &&
              specificLocation.latitude <= 90 &&
              specificLocation.latitude >= -90
            ) {
              return (
                <MapView
                  style={styles(coloring).mapStyle}
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
                    title={item.assetId}
                    pinColor={coloring}></Marker>
                </MapView>
              );
            } else {
            }
          })()}
        </View>
      </View>

      {/*This is Skip Navigation & Go to QR code page */}
      <View style={styles(coloring).fixToText}>
        {/* <TouchableOpacity
          style={styles(coloring).touchable}
          onPress={() =>
            navigation.navigate('ScanQrCode', {
              AssetDetails: item, //Language.dtData,
              item: item, //Language.AssetDataTitleTextDT,
              color: '#E27D39',
              Language: Language,
              resourceId: resourceId,
              address: Location,
              geoLocation: specificLocation,
              selectedAssetDetails: assetDetailsByAssetId,
              coloring: coloring,
              Language: Language,
              AssetDetails: AssetDetails,
              item: item,
              Location: Location,
              selectedAssetTypeName: selectedAssetTypeName,
              installationID: item.installationId,
              workStartedDateTime: workStartedDateTime,
            })
          }>
          <Text style={{color: '#fff'}}>{Language.SkipButtonText}</Text>
        </TouchableOpacity> */}

        {/* Goto Navigation Page Button */}
        <TouchableOpacity
          style={styles(coloring).touchable}
          onPress={() =>
            navigation.navigate('ScanQrCode', {
              AssetDetails: item, //Language.dtData,
              item: item, //Language.AssetDataTitleTextDT,
              color: '#E27D39',
              Language: Language,
              assettypename:assettypename,
              resourceId: resourceId,
              address: LocationFromDb,
              geoLocation: specificLocation,
              selectedAssetDetails: assetDetailsByAssetId,
              coloring: coloring,
              Language: Language,
              AssetDetails: AssetDetails,
              item: item,
              LanguageOpt: LanguageOpt,
              Location: LocationFromDb,
              selectedAssetTypeName: selectedAssetTypeName,
              installationID: item.installationId,
              workStartedDateTime: workStartedDateTime,
            })
          }>
          <Text style={{color: '#fff'}}>{LanguageOpt('Navigate_To')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MapViewAssigned;
const styles = coloring =>
  StyleSheet.create({
    MainContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // alignItems: 'center',
      // justifyContent: 'flex-end',
    },
    containerCamera: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    mapStyle: {
      position: 'absolute',
      top: 5,
      left: 15,
      right: 15,
      bottom: 5,
    },
    container: {
      flex: 2,
      backgroundColor: '#ffffff', //'#464646',//'#323232',//'#243034',
      /*backgroundImage: 'url('+bg+')',*/
      alignItems: 'center',
      justifyContent: 'center',
      //margin: 10,
    },
    mapcontainer: {
      flex: 1,
      /* ...StyleSheet.absoluteFillObject,
            flex: 1, //the container will fill the whole screen.
            justifyContent: "flex-end",
            alignItems: "center",*/
    },
    mapmarker: {
      ...StyleSheet.absoluteFillObject,
    },

    inputView: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      width: '80%',
      height: 40,
      marginBottom: 10,
      alignItems: 'center',
    },

    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 10,
    },
    tinyLogo: {
      //margin: '30',
      alignSelf: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      marginBottom: 10,
    },
    headtext: {
      alignSelf: 'center',
      justifyContent: 'center',
      //fontSize: '100',
      marginBottom: 10,
      color: '#fff',
      fontSize: 18,
      fontWeight: '500',
    },

    loginBtn: {
      width: '50%',
      borderRadius: 20,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      color: '#fff',
      backgroundColor: '#61dafb',
    },

    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      margin: 20,
    },

    cardImage: {
      height: 60,
      width: 60,
      alignSelf: 'center',
    },
    card: {
      shadowColor: '#474747',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      marginVertical: 10,
      marginHorizontal: 10,
      backgroundColor: '#ffffff',
      //backgroundColor: "#e2e2e2",
      //flexBasis: '42%',
      //borderRadius: 60,
      width: 90,
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
    },

    touchable: {
      width: 140,
      borderRadius: 40,
      backgroundColor: coloring,
      alignItems: 'center',
      height: 40,
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-around',

      alignItems: 'center',
      height: '10%',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
// const styles = coloring =>
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       marginHorizontal: 16,
//     },

//   });
