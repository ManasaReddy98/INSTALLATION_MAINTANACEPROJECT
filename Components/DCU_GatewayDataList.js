import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  View,
  Button,
  LogBox,
  FlatList,
  Dimensions,
} from 'react-native';
var screenWidth = Dimensions.get('window').width;
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import GlobalAppStyles from '../appstyles/GlobalAppStyles';
import left_dashbord from '../images/left_dashbord.png';
import notifications from '../images/notifications.png';
import logout from '../images/logout.png';
import {ScrollView} from 'react-native-gesture-handler';
import three_dots from '../images/three_dots_1.png';
import Constants from '../Constants/Constants';
import eficaalogo from '../images/eficaa_logo.png';
import CheckNetworkConnectivity from '../ReusableFunctions/CheckNetworkConnectivity';
import TODOService from '../ReUsableMethods/TODOService';
import {LogMessages} from '../LogManager/LogMessages';

import MapView, {Marker, Polygon} from 'react-native-maps';
import DrawPolygon from './DrawPolygon';
import DrawSinglePolygon from './DrawSinglePolygon';
import {GlobalStyles} from '../appstyles/GlobalStyles';
// import {useNavigation} from '@react-navigation/native';
// import {COLOR_PLOT_BORDER} from '../../utils/colors';

function DCU_GatewayDataList({route, navigation}) {
  const {
    AssetDetails,
    LanguageOpt,
    ti,
    coloring,
    color,
    Language,
    resourceId,
    item,
  } = route.params;
  const [assetStatus, setAssetStatus] = useState(true);
  const [Location, setLocation] = useState('');
  const [latitude, setLatitude] = useState('17.4248742');
  const [longitude, setLongitude] = useState('78.4583377');
  const checkNetworkState = new CheckNetworkConnectivity();

  const [dcuLatitude, setdcuLatitude] = useState('17.4248742');
  const [dcuLongitude, setdcuLongitude] = useState('78.4583377');

  const todoService = new TODOService();
  const [assetId, setAssetID] = useState();
  const [dcuId, setDCUID] = useState();
  const [assetImage, setassetImage] = useState();
  const [gatewayMetersByDCUID, setGatewayMetersByDCUID] = useState([]);
  console.log(
    'RESOURCE DETAILS FROM DCU_GatewayDataList  :::::' +
      JSON.stringify(AssetDetails),
  );

  const imag = require('../images/arrow.png');
  const imag1 = require('../images/crossmark.png');
  const imag2 = require('../images/tick.png');
  const [specificLocation, setSpecificLocation] = useState({
    latitude: parseFloat(17.4248742),
    longitude: parseFloat(78.4583377),
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  useEffect(() => {
    {
      AssetDetails.map(item => {
        let itemStatus = item.installationStatus;
        if (itemStatus.includes('CON_000027')) {
          setAssetStatus('NotStarted');
        }
      });
      setAssetID(item.assetId);
    }
  }, [item, AssetDetails]);
  console.log('RESOURCE DETAILS FROM DCU_GatewayDataList  :::::' + assetId);

  useEffect(() => {
    getGatewayDetailsByAssetID('', assetId);
  }, [assetId]);

  const getGatewayDetailsByAssetID = async (methodname, paramName) => {
    const req_url =
      'http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/dcudata/' + assetId;
    console.log('Gateway Details  ### ', 'Gateway AssetDetails ' + req_url);
    let token = '';
    const {data, status} = await todoService.getDataFromApi(req_url, token);

    setDCUID(data.dcuId);
    setLocation(data.location);
    //setassetImage(data.dtrPicture);
    setSpecificLocation({
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
  };

  console.log(
    'DCUID  DETAILS FROM DCU_GatewayDataList DCU ID  ::::: ' + dcuId,
    specificLocation,
  );

  useEffect(() => {
    getGatewayMeterDetailsDetailsByDCU_ID('', dcuId);
  }, [dcuId]);

  const getGatewayMeterDetailsDetailsByDCU_ID = async (
    methodname,
    paramName,
  ) => {
    const req_url =
      'http://mapp.eficaa.com:8080/Eam_Installation_v2.0/meterdata/MeterDetailsbydcuIdPrim/' +
      dcuId;

    console.log(
      'Gatwway Details  ### ',
      'Gateway METER DETAILS BY DCU ID #### ' + req_url,
    );
    let token = '';
    const {data, status} = await todoService.getDataFromApi(req_url, token);
    setGatewayMetersByDCUID(data);
    setdcuLatitude(data.latitude);
    setdcuLongitude(data.longitude);
    console.log(
      'INSTALLATION DASHBOARD',
      methodname,
      LogMessages.CODE_HTTP,
      status,
    );
  };

  console.log(
    'DCU GATEWAY LIST PAGE ',
    'Meter Details Under DCU_Gateway Meters Length    :::::' +
      gatewayMetersByDCUID.length,
  );

  //http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/dcudata/DCU-202402-000000001
  //http://mapp.eficaa.com:8080/Eam_Installation_v2.0/meterdata/MeterDetailsbydcuIdPrim/5

  return (
    <View>
      <View
        style={{
          height: 120,
          width: '100%',
          backgroundColor: coloring,
          justifyContent: 'center',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        {/* <View><Text style={{fontWeight: 'bold', color: '#fff',marginLeft:25}}>Asset Details</Text></View> */}

        <View style={{marginLeft: 25, flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', flex: 2}}>
            <Text style={{fontWeight: 'bold', color: '#fff'}}>
              {LanguageOpt('dcu_gateway_id')} : {item.assetId}
            </Text>

            <Text style={{marginTop: 5, color: '#fff'}}>
              {LanguageOpt('Gateway_Initial_Positioning')} : {latitude},
              {longitude}
            </Text>

            <Text style={{marginTop: 5, color: '#fff'}}>
              {LanguageOpt('Meters_Under_Gateway')} :{' '}
              {gatewayMetersByDCUID.length}
            </Text>
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
              source={{uri: assetImage}}
            />
          </View> */}
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 15,
            margin: 10,
            height: 220,
          }}>
          <Text style={{color: {coloring}, margin: 10, fontWeight: '400'}}>
            {LanguageOpt('AI_Simulation_View')}
          </Text>
          <Text style={{color: {coloring}, marginLeft: 10}}>
            {LanguageOpt('High_Altitude_Defence_colony')}{' '}
          </Text>
          <Text style={{color: {coloring}, marginLeft: 10}}>
            {LanguageOpt('Communication_Technology_wirepass')}{' '}
          </Text>
          <Text style={{color: {coloring}, marginLeft: 10}}>
            {LanguageOpt('Suggested_Meter_Count')} -{' '}
            {gatewayMetersByDCUID.length}
          </Text>
          <Text style={{color: {coloring}, marginLeft: 10}}>
            {LanguageOpt('Line_of_sight_Trees_density_more')}
          </Text>

          <Image
            style={{height: 150, width: 150, marginLeft: 50}}
            source={require('../images/ai_sim_map.png')} // Adjust width and height as needed
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            margin: 10,
            marginBottom: 50,
          }}>
          {(() => {
            console.log(
              'DCU Gateway list',
              'DCU Gateway list BEFORE SENDING  @@@@@ ' +
                gatewayMetersByDCUID.length,
            );
            if (gatewayMetersByDCUID.length > 0) {
              return (
                <View>
                  <Text style={{marginLeft: 10}}>
                    {' '}
                    {LanguageOpt('DCU_Gateway_Meters_List_Size')}{' '}
                    {gatewayMetersByDCUID.length}
                  </Text>
                  <DrawSinglePolygon
                    gatewayMetersByDCUID={gatewayMetersByDCUID}
                    specificLocation={specificLocation}
                    coloring={coloring}
                    color={coloring}
                    item={item}
                    Language={Language}
                  />
                </View>
              );
            } else {
              return (
                <View>
                  <Text style={{marginLeft: 10}}>
                    {' '}
                    {LanguageOpt('DCU_Gateway_Meters_List_Size')}{' '}
                    {gatewayMetersByDCUID.length}
                  </Text>
                  {(() => {
                    if (
                      typeof specificLocation.latitude === 'number' &&
                      specificLocation.latitude <= 90 &&
                      specificLocation.latitude >= -90
                    ) {
                      return (
                        <MapView
                          style={styles(color).mapStyle}
                          initialRegion={{
                            latitude: 17.394822,
                            longitude: 78.424593,
                            latitudeDelta: 6.795218101812615,
                            longitudeDelta: 79.9008869173333,
                          }}>
                          <Marker
                            coordinate={specificLocation}
                            title={item.assetId}
                            pinColor="blue"></Marker>
                        </MapView>
                      );
                    } else {
                    }
                  })()}
                </View>
              );
            }
          })()}

          {/* <DrawPolygon gatewayMeters={gatewayMeters} coloring={coloring} color={coloring} item={item} Language={Language} />      */}
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 15,
            margin: 10,
            height: 200,
          }}>
          <Text style={{margin: 10}}>{LanguageOpt('First_Iteration')}</Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 15,
            margin: 10,
            height: 200,
          }}>
          <Text style={{margin: 10}}>{LanguageOpt('Second_Iteration')}</Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 15,
            margin: 10,
            height: 200,
            marginBottom: 100,
          }}>
          <Text style={{margin: 10}}>{LanguageOpt('Final_Iteration')}</Text>
        </View>

        <View
          style={{
            borderRadius: 15,
            margin: 10,
            height: 200,
            marginBottom: 100,
          }}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigation.navigate('MapView', {
                //MapNavigation
                AssetDetails: item, //Language.dtData,
                item: item, //Language.AssetDataTitleTextDT,
                color: '#E27D39',
                Language: Language,
                resourceId: resourceId,
                // address:address,
                // geoLocation:geoLocation,
                // selectedAssetDetails:selectedAssetDetails,
                coloring: coloring,
                // Language: Language,
                AssetDetails: AssetDetails,
                item: item,
                installationID: item.installationId,
                LanguageOpt: LanguageOpt,
              });
              //& handlechange(index) & setIndex(index + 1)
            }}>
            <Text
              style={[
                GlobalStyles.dcu_inst_button,
                {backgroundColor: coloring},
              ]}>
              {' '}
              {LanguageOpt('Go_to_Installation')}{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default DCU_GatewayDataList;
const styles = coloring =>
  StyleSheet.create({
    MainContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
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
      alignItems: 'center',
      justifyContent: 'center',
      //margin: 10,
    },
    mapcontainer: {
      flex: 1,
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

//   <View style={styles(coloring).fixToText}>
//   <TouchableOpacity
//     style={styles(coloring).touchable}
//     onPress={() =>
//       navigation.navigate('ScanQrCode', {
//         AssetDetails: item, //Language.dtData,
//         item: item, //Language.AssetDataTitleTextDT,
//         color: '#E27D39',
//         Language: Language,
//         resourceId:resourceId,
//         address:Location,
//         geoLocation:specificLocation,
//         selectedAssetDetails:assetDetailsByAssetId,
//         coloring: coloring,
//         Language: Language,
//         AssetDetails: AssetDetails,
//         item: item,
//         Location: Location,
//       })
//     }>
//     <Text style={{color: '#fff'}}>{Language.SkipButtonText}</Text>
//   </TouchableOpacity>

//   <TouchableOpacity
//     style={styles(coloring).touchable}
//     onPress={() =>
//       navigation.navigate('MapNavigation', {
//         AssetDetails: item, //Language.dtData,
//         item: item, //Language.AssetDataTitleTextDT,
//         color: '#E27D39',
//         Language: Language,
//         resourceId:resourceId,
//         address:Location,
//         geoLocation:specificLocation,
//         selectedAssetDetails:assetDetailsByAssetId,
//         coloring: coloring,
//         Language: Language,
//         AssetDetails: AssetDetails,
//         item: item,
//         Location: Location,
//       })
//     }>
//     <Text style={{color: '#fff'}}>
//       {Language.GoToNavigationButtonText}
//     </Text>
//   </TouchableOpacity>
// </View>

{
  /* <View style={styles(coloring).MainContainer}> */
}

{
  /* <TouchableOpacity
          style={styles(coloring).touchable}
          onPress={() =>
            navigation.navigate('DrawPolygon', {
              AssetDetails: item, //Language.dtData,
              item: item, //Language.AssetDataTitleTextDT,
              color: '#E27D39',
              Language: Language,
              resourceId:resourceId,
              address:Location,
              geoLocation:specificLocation,
              coloring: coloring,
              Language: Language,
              AssetDetails: AssetDetails,
              item: item,
              Location: Location,
            })
          }>
          <Text style={{color: '#fff'}}>{Language.SkipButtonText}</Text>
        </TouchableOpacity> */
}

{
  /* <MapView
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
           
        //   </MapView> */
}
{
  /* // </View> */
}
