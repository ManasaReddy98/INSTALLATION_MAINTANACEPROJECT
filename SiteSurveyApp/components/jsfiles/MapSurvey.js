import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { openDatabase } from 'react-native-sqlite-storage';
import { Constants } from '../Constants/Constants';
import TODOService from '../ReUsableMethods/TODOService';
//import NetWorkStatus from '../ReUsableMethods/NetworkStatus';
const { height, width } = Dimensions.get('window');
import { useTranslation } from 'react-i18next';


var db = openDatabase({ name: 'AssetDatabase.db' });

const DATA = [
  {
    id: 1,
    iconimage: require('../imagesv1/combinedcircle.png'),
    assetname: 'Feeder',
  },
  {
    id: 2,
    iconimage: require('../imagesv1/trianglecircle.png'),
    assetname: 'AutoReclosure',
  },
  {
    id: 3,
    iconimage: require('../imagesv1/doublerectangle.png'),
    assetname: 'Sectionaliser',
  },
  {
    id: 4,
    iconimage: require('../imagesv1/campfire.png'),
    assetname: 'Meter',
  },
  {
    id: 5,
    iconimage: require('../imagesv1/doublesquare.png'),
    assetname: 'DTR',
  },
  {
    id: 6,
    iconimage: require('../imagesv1/square.png'),
    assetname: 'RMU',
  },
];

const MapSurvey = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  console.log("tea tea tea tea", t, i18n)
  const { asset, title, LanguageOpt, lang } = route.params;
  const { selectedUserName } = route.params;
  const listRef = useRef(0);
  const [markers, setMarkers] = useState([]);
  const [newmarkers, setnewmarkers] = useState([]);
  const [pageInitialState, setPageInitialState] = useState('1');
  const [assetData, setAssetData] = useState([]);
  const todoService = new TODOService();
  console.log('ASSET MAP PAGE  ####### ' + asset);
  const data = [
    'Section',
    'Substation',
    'Feeder',
    'DTR',
    'TMU',
    'DCU',
    'Router',
    'Meter',
    'Sectionaliser',
    'RMU',
    'AutoReclosure',
    'FPI',
    'RTU',
    'FRT',
    'Pole',
    'HT_Line',
    'LT_Line',
    'UG-HT-Line',
    'UG-LT-Line',
    'Others',
  ];

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      let itemData = data[i];
      console.log('data   Item ', 'Data Item ' + itemData);
      if (asset === itemData) {
        console.log('CALLING SECTION API ####### ' + asset);
        fetchAssetsData(asset);
      }
    }
  }, [asset]);

  const handleMarkerDragEnd = (event, slno) => {
    // setMarkerCoordinate(event.nativeEvent.coordinate);
    console.log(
      'EVENTFOUND ####### ' + JSON.stringify(event.nativeEvent.coordinate),
    );
    console.log('EVENTFOUND ####### ' + slno);

    const x = event.nativeEvent.coordinate.longitude;
    const y = event.nativeEvent.coordinate.latitude;
    console.log(
      'markercoordinate is::::::::' + JSON.stringify(x),
      JSON.stringify(y),
    );
    console.log('markercoordinate is::::::::' + slno);

    if (asset === 'DTR') {
      db.transaction(tx => {
        tx.executeSql(
          //table_assetdetails  , asset_id
          'UPDATE Dtr_table set Latitude=?, Longitude=? where slno=?',
          [y, x, slno],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Success', 'User updated successfully');
            } else alert('Updation Failed');
          },
        );
      });
    }
    if (asset === 'DCU') {
      db.transaction(tx => {
        tx.executeSql(
          //table_assetdetails  , asset_id
          'UPDATE Dcu_table set Latitude=?, Longitude=? where slno=?',
          [y, x, slno],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Success', 'User updated successfully');
            } else alert('Updation Failed');
          },
        );
      });
    }
    if (asset === 'Feeder') {
      db.transaction(tx => {
        tx.executeSql(
          //table_assetdetails  , asset_id
          'UPDATE Feeder_table set Latitude=?, Longitude=? where slno=?',
          [y, x, slno],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Success', 'User updated successfully');
            } else alert('Updation Failed');
          },
        );
      });
    }
    if (asset === 'RMU') {
      db.transaction(tx => {
        tx.executeSql(
          //table_assetdetails  , asset_id
          'UPDATE Rmu_table set Latitude=?, Longitude=? where slno=?',
          [y, x, slno],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Success', 'User updated successfully');
            } else alert('Updation Failed');
          },
        );
      });
    }
    if (asset === 'AutoReclosure') {
      db.transaction(tx => {
        tx.executeSql(
          //table_assetdetails  , asset_id
          'UPDATE AutoReclosure_table set Latitude=?, Longitude=? where slno=?',
          [y, x, slno],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Success', 'User updated successfully');
            } else alert('Updation Failed');
          },
        );
      });
    }
    if (asset === 'Sectionaliser') {
      db.transaction(tx => {
        tx.executeSql(
          //table_assetdetails  , asset_id
          'UPDATE Sectionaliser_table set Latitude=?, Longitude=? where slno=?',
          [y, x, slno],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Success', 'User updated successfully');
            } else alert('Updation Failed');
          },
        );
      });
    }
    if (asset === 'Meter') {
      db.transaction(tx => {
        tx.executeSql(
          //table_assetdetails  , asset_id
          'UPDATE Meter_table set Latitude=?, Longitude=? where slno=?',
          [y, x, slno],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Success', 'User updated successfully');
            } else alert('Updation Failed');
          },
        );
      });
    }
  };

  const fetchAssetsData = async () => {
    try {
      const url = Constants.API_BASE_URL + '/AllAssetTypes/' + 'GetAll' + asset;
      const allAssets = await todoService.getDataFromApi(url);
      if (allAssets == []) {
        Alert.alert(' No Data Available');
      }
      setAssetData(allAssets);
      setnewmarkers(allAssets);

    } catch (error) {
      console.log(error);
      Alert.alert(' No Data Available');
    }
  };
  console.log('Assets Data From API :: ' + JSON.stringify(assetData));

  const handleNextItemPress = (index, assettypename) => {
    if (index < 5) {
      const nextIndex = index + 1;
      listRef.current.scrollToIndex({ index: nextIndex });
    } else if (index == 5) {
      listRef.current.scrollToIndex({ index: 0 });
    }
    console.log('assettypename is::::' + assettypename);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM  table_assetdetails where asset_typename = ?',
        [assettypename],
        (tx, results) => {
          const len = results.rows.length;
          const data = [];
          for (let i = 0; i < len; i++) {
            const item = results.rows.item(i);
            console.log('markers are:' + JSON.stringify(item));
            data.push(item);
          }
          setnewmarkers(data);
        },
      );
    });
  };

  const handleDefaultItemPress = item => {
    if (item === '1') {
      setPageInitialState('1');
    } else if (item === '2') {
      setPageInitialState('2');
    }
  };

  console.log('Selected Button Option :   ', +pageInitialState);
  const getLocalizedtext = () => {
    if (lang == "te") {
      return ` ${title}ల జాబితా `; // Telugu translation for "List of"
    } else if (lang == "en") {
      return `List of ${title}'s`;
    }
    return title; // Fallback if languageId doesn't match
  }

  return (
    <View style={{ flex: 1 }}>
      {/*TouchableOpacity worked by adding zindex to absolute positioned view*/}
      {/* <View
        style={{
          height: 200,
          width: 75,
          backgroundColor: '#0e294f',
          right: 0,
          top: 150,
          position: 'absolute',
          zIndex: 1,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}>
        <View style={{height: 55}}>
          <Text
            style={{fontSize: 20, color: 'white', marginLeft: 6, marginTop: 5}}>
            Assets
          </Text>
        </View>
        <FlatList
          ref={listRef}
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => handleNextItemPress(index, item.assetname)}>
                <View
                  style={{
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={item.iconimage}
                  />
                  <Text>{item.assetname}</Text>
                </View>
                <Text style={{marginTop: 5}}></Text>
              </TouchableOpacity>
            );
          }}
        />
      </View> */}
      {(() => {
        console.log('Selected Asset Nmae :: ' + pageInitialState);
        if (pageInitialState == '1') {
          return (
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  alignSelf: 'center',
                  margin: 20,
                  fontWeight: '400',
                  color: '#162855',
                  fontSize: 20,
                }}>
                {' '}
                {getLocalizedtext()}{' '}
              </Text>
              {(newmarkers !== 'undefined') & (newmarkers.length > 0) ? (
                <View>
                  <FlatList
                    ref={listRef}
                    data={newmarkers}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                      return (
                        <View>
                          <TouchableOpacity
                            style={{
                              width: '95%',
                              backgroundColor: '#fff',
                              marginLeft: 30,
                              marginRight: 30,
                              marginTop: 10,
                              padding: 10,
                              borderRadius: 15,
                              elevation: 3,
                              alignSelf: 'center',
                            }}
                          // onPress={() => handleNextItemPress(index, item.assetname)}
                          >
                            {(() => {
                              if (asset == 'Section') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      //marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 30,
                                          width: 30,
                                          marginTop: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/ic_section.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Section Name : {item.sectionName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat ,Lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'Substation') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/sub_stn.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Substation Name:{item.substationName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'Feeder') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/doublerectangle.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'DTR') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/dtr.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        DTR Name:{item.transformerSno}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Structure Code : {item.structureCode}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'TMU') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/square.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        TMU SNO :{item.tmuSerialNumber}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Mount Type : {item.tmuType}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'DCU') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/doublesquare.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        DCU SNO:{item.dcuSno}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        PAN : {item.panId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'Router') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/router.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'Meter') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/asset_meter.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Meter Serial Number:{item.serialNumber}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Meter Id : {item.meterId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Description : {item.description}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'Sectioaliser') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/sectionalizer.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'RMU') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/rmu.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Section :{item.section}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Substation : {item.substation}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'AutoReclosure') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/ar.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'FPI') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/trianglecircle.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'RTU') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/rtu.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'FRT') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/fpi_indicator.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'Pole') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/pole.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'HT-Line') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/ht_line.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'LT-Line') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <View
                                      style={{
                                        height: 50,
                                        width: 50,
                                        borderWidth: 1,
                                        borderColor: '#909090',
                                        borderRadius: 50,
                                      }}>
                                      <Image
                                        style={{
                                          height: 35,
                                          width: 35,
                                          padding: 5,
                                          transform: [{ scale: 0.55 }],
                                          margin: 8,
                                          alignSelf: 'center',
                                        }}
                                        source={require('../imagesv1/ht_line.png')}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'UG-HT-Line') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <Image
                                      style={{ height: 50, width: 50 }}
                                      source={item.iconimage}
                                    />
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else if (asset == 'UG-LT-Line') {
                                return (
                                  <View
                                    style={{
                                      alignItems: 'center',
                                      marginTop: 10,
                                      flexDirection: 'row',
                                    }}>
                                    <Image
                                      style={{ height: 50, width: 50 }}
                                      source={item.iconimage}
                                    />
                                    <View
                                      style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                      }}>
                                      <Text
                                        style={{
                                          fontWeight: '600',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Feeder Name:{item.feederName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        substationId : {item.substationId}
                                      </Text>

                                      <Text
                                        style={{
                                          fontWeight: '300',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Location : {item.location}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Lat, lon : {item.latitude} ,
                                        {item.longitude}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Name: {item.inchargeName}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '400',
                                          color: '#162855',
                                          fontSize: 15,
                                        }}>
                                        Incharge Contact:{' '}
                                        {item.inchargeMobileNumber}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              }
                            })()}

                            <Text style={{ marginTop: 5 }}></Text>
                          </TouchableOpacity>
                        </View>
                      );
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: 'red', fontSize: 20 }}>
                    {' '}
                    Data Not Available
                  </Text>
                </View>
              )}
            </View>
          );
        } else if (pageInitialState == '2') {
          return (
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: 17.42502,
                longitude: 78.45851,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}>
              {newmarkers.map((marker, index) => (
                <View>
                  {(() => {
                    // if (marker.AssetTypeName === 'Feeder') {
                    //   return (
                    //     <Marker
                    //       // key={index}
                    //       draggable={true}
                    //       coordinate={{
                    //         latitude: parseFloat(marker.Latitude),
                    //         longitude: parseFloat(marker.Longitude),
                    //       }}
                    //       pinColor={'green'}
                    //       onDragEnd={e => handleMarkerDragEnd(e, marker.slno)}>
                    //       <View
                    //         style={{
                    //           height: 35,
                    //           width: 35,
                    //           borderRadius: 18,
                    //           borderWidth: 1,
                    //           borderWidthColor: 'red',
                    //           justifyContent: 'center',
                    //           alignItems: 'center',
                    //         }}>
                    //         <Image
                    //           style={{height: 20, width: 20}}
                    //           source={require('../imagesv1/combinedcircle.png')}></Image>
                    //       </View>

                    //       <Callout>
                    //         <View style={{width: 200, height: 150}}>
                    //           <ScrollView>
                    //             <View>
                    //               <Text
                    //                 style={{
                    //                   color: 'green',
                    //                   fontWeight: '500',
                    //                   fontSize: 15,
                    //                 }}>
                    //                 {marker.AssetTypeName}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 Latitude is:{marker.Latitude}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 Longitude is:{marker.Longitude}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 Assetname:{marker.asset_name}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 feedername:{marker.asset_feedername}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 feedernumber:{marker.asset_feedernumber}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 mftdyear:{marker.mftd_year}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 vendor:{marker.asset_vendor}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 mftrid:{marker.asset_mftrid}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 mftrname:{marker.asset_mftrname}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 Installationtype:{marker.installationtype}
                    //               </Text>
                    //               <Text style={{color: 'green'}}>
                    //                 capacity:{marker.capacity}
                    //               </Text>
                    //             </View>
                    //           </ScrollView>
                    //         </View>
                    //       </Callout>
                    //     </Marker>
                    //   );
                    // } else if (marker.AssetTypeName === 'Sectionaliser') {
                    //   return (
                    //     <Marker
                    //       key={index}
                    //       draggable={true}
                    //       coordinate={{
                    //         latitude: parseFloat(marker.Latitude),
                    //         longitude: parseFloat(marker.Longitude),
                    //       }}
                    //       pinColor={'red'}
                    //       onDragEnd={e => handleMarkerDragEnd(e, marker.slno)}>
                    //       <View
                    //         style={{
                    //           height: 35,
                    //           width: 35,
                    //           borderRadius: 20,
                    //           borderWidth: 1,
                    //           borderWidthColor: 'red',
                    //           justifyContent: 'center',
                    //           alignItems: 'center',
                    //         }}>
                    //         <Image
                    //           style={{height: 20, width: 20}}
                    //           source={require('../imagesv1/doublerectangle.png')}></Image>
                    //       </View>
                    //       <Callout>
                    //         <View style={{width: 200, height: 150}}>
                    //           <Text style={{color: 'red'}}>
                    //             {marker.AssetTypeName}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             Latitude is:{marker.Latitude}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             Longitude is:{marker.Longitude}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             Assetname:{marker.asset_name}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             feedername:{marker.asset_feedername}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             feedernumber:{marker.asset_feedernumber}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             mftdyear:{marker.mftd_year}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             vendor:{marker.asset_vendor}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             mftrid:{marker.asset_mftrid}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             mftrname:{marker.asset_mftrname}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             Installationtype:{marker.installationtype}
                    //           </Text>
                    //           <Text style={{color: 'red'}}>
                    //             capacity:{marker.capacity}
                    //           </Text>
                    //         </View>
                    //       </Callout>
                    //     </Marker>
                    //   );
                    // } else if (marker.AssetTypeName === 'RMU') {
                    //   return (
                    //     <Marker
                    //       key={index}
                    //       draggable={true}
                    //       coordinate={{
                    //         latitude: parseFloat(marker.Latitude),
                    //         longitude: parseFloat(marker.Longitude),
                    //       }}
                    //       pinColor={'purple'}
                    //       onDragEnd={e => handleMarkerDragEnd(e, marker.slno)}>
                    //       <View
                    //         style={{
                    //           height: 35,
                    //           width: 35,
                    //           borderRadius: 25,
                    //           borderWidth: 1,
                    //           borderWidthColor: 'red',
                    //           justifyContent: 'center',
                    //           alignItems: 'center',
                    //         }}>
                    //         <Image
                    //           style={{height: 20, width: 20}}
                    //           source={require('../imagesv1/square.png')}></Image>
                    //       </View>
                    //       <Callout>
                    //         <View style={{width: 200, height: 150}}>
                    //           <Text style={{color: 'purple'}}>
                    //             {marker.AssetTypeName}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Latitude is:{marker.Latitude}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Longitude is:{marker.Longitude}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Assetname:{marker.asset_name}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             feedername:{marker.asset_feedername}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             feedernumber:{marker.asset_feedernumber}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftdyear:{marker.mftd_year}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             vendor:{marker.asset_vendor}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftrid:{marker.asset_mftrid}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftrname:{marker.asset_mftrname}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Installationtype:{marker.installationtype}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             capacity:{marker.capacity}
                    //           </Text>
                    //         </View>
                    //       </Callout>
                    //     </Marker>
                    //   );
                    // } else if (marker.AssetTypeName === 'AutoReclosure') {
                    //   return (
                    //     <Marker
                    //       key={index}
                    //       draggable={true}
                    //       coordinate={{
                    //         latitude: parseFloat(marker.Latitude),
                    //         longitude: parseFloat(marker.Longitude),
                    //       }}
                    //       pinColor={'purple'}
                    //       onDragEnd={e => handleMarkerDragEnd(e, marker.slno)}>
                    //       <View
                    //         style={{
                    //           height: 35,
                    //           width: 35,
                    //           borderRadius: 25,
                    //           borderWidth: 1,
                    //           borderWidthColor: 'red',
                    //           justifyContent: 'center',
                    //           alignItems: 'center',
                    //         }}>
                    //         <Image
                    //           style={{height: 20, width: 20}}
                    //           source={require('../imagesv1/trianglecircle.png')}></Image>
                    //       </View>
                    //       <Callout>
                    //         <View style={{width: 200, height: 150}}>
                    //           <Text style={{color: 'purple'}}>
                    //             {marker.AssetTypeName}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Latitude is:{marker.Latitude}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Longitude is:{marker.Longitude}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Assetname:{marker.asset_name}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             feedername:{marker.asset_feedername}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             feedernumber:{marker.asset_feedernumber}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftdyear:{marker.mftd_year}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             vendor:{marker.asset_vendor}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftrid:{marker.asset_mftrid}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftrname:{marker.asset_mftrname}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Installationtype:{marker.installationtype}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             capacity:{marker.capacity}
                    //           </Text>
                    //         </View>
                    //       </Callout>
                    //     </Marker>
                    //   );
                    // } else if (marker.AssetTypeName === 'DTR') {
                    //   return (
                    //     <Marker
                    //       key={index}
                    //       draggable={true}
                    //       coordinate={{
                    //         latitude: parseFloat(marker.Latitude),
                    //         longitude: parseFloat(marker.Longitude),
                    //       }}
                    //       pinColor={'purple'}
                    //       onDragEnd={e => handleMarkerDragEnd(e, marker.slno)}>
                    //       <View
                    //         style={{
                    //           height: 35,
                    //           width: 35,
                    //           borderRadius: 25,
                    //           borderWidth: 1,
                    //           borderWidthColor: 'red',
                    //           justifyContent: 'center',
                    //           alignItems: 'center',
                    //         }}>
                    //         <Image
                    //           style={{height: 20, width: 20}}
                    //           source={require('../imagesv1/doublesquare.png')}></Image>
                    //       </View>
                    //       <Callout>
                    //         <View style={{width: 200, height: 150}}>
                    //           <Text style={{color: 'purple'}}>
                    //             {marker.AssetTypeName}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Latitude is:{marker.Latitude}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Longitude is:{marker.Longitude}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Assetname:{marker.asset_name}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             feedername:{marker.asset_feedername}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             feedernumber:{marker.asset_feedernumber}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftdyear:{marker.mftd_year}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             vendor:{marker.asset_vendor}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftrid:{marker.asset_mftrid}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftrname:{marker.asset_mftrname}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Installationtype:{marker.installationtype}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             capacity:{marker.capacity}
                    //           </Text>
                    //         </View>
                    //       </Callout>
                    //     </Marker>
                    //   );
                    // } else if (marker.AssetTypeName === 'DCU') {
                    //   return (
                    //     <Marker
                    //       key={index}
                    //       draggable={true}
                    //       coordinate={{
                    //         latitude: parseFloat(marker.Latitude),
                    //         longitude: parseFloat(marker.Longitude),
                    //       }}
                    //       pinColor={'purple'}
                    //       onDragEnd={e => handleMarkerDragEnd(e, marker.slno)}>
                    //       <View
                    //         style={{
                    //           height: 35,
                    //           width: 35,
                    //           borderRadius: 25,
                    //           borderWidth: 1,
                    //           borderWidthColor: 'red',
                    //           justifyContent: 'center',
                    //           alignItems: 'center',
                    //         }}>
                    //         <Image
                    //           style={{height: 20, width: 20}}
                    //           source={require('../imagesv1/doublerectangle.png')}></Image>
                    //       </View>
                    //       <Callout>
                    //         <View style={{width: 200, height: 150}}>
                    //           <Text style={{color: 'purple'}}>
                    //             {marker.AssetTypeName}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Latitude is:{marker.Latitude}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Longitude is:{marker.Longitude}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Assetname:{marker.asset_name}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             feedername:{marker.asset_feedername}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             feedernumber:{marker.asset_feedernumber}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftdyear:{marker.mftd_year}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             vendor:{marker.asset_vendor}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftrid:{marker.asset_mftrid}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftrname:{marker.asset_mftrname}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Installationtype:{marker.installationtype}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             capacity:{marker.capacity}
                    //           </Text>
                    //         </View>
                    //       </Callout>
                    //     </Marker>
                    //   );
                    // } else if (marker.AssetTypeName === 'Meter') {
                    //   return (
                    //     <Marker
                    //       key={index}
                    //       draggable={true}
                    //       coordinate={{
                    //         latitude: parseFloat(marker.Latitude),
                    //         longitude: parseFloat(marker.Longitude),
                    //       }}
                    //       pinColor={'purple'}
                    //       onDragEnd={e => handleMarkerDragEnd(e, marker.slno)}>
                    //       <View
                    //         style={{
                    //           height: 35,
                    //           width: 35,
                    //           borderRadius: 25,
                    //           borderWidth: 1,
                    //           borderWidthColor: 'red',
                    //           justifyContent: 'center',
                    //           alignItems: 'center',
                    //         }}>
                    //         <Image
                    //           style={{height: 20, width: 20}}
                    //           source={require('../imagesv1/campfire.png')}></Image>
                    //       </View>
                    //       <Callout>
                    //         <View style={{width: 200, height: 150}}>
                    //           <Text style={{color: 'purple'}}>
                    //             {marker.AssetTypeName}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Latitude is:{marker.Latitude}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Longitude is:{marker.Longitude}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Assetname:{marker.asset_name}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             feedername:{marker.asset_feedername}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             feedernumber:{marker.asset_feedernumber}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftdyear:{marker.mftd_year}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             vendor:{marker.asset_vendor}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftrid:{marker.asset_mftrid}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             mftrname:{marker.asset_mftrname}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             Installationtype:{marker.installationtype}
                    //           </Text>
                    //           <Text style={{color: 'purple'}}>
                    //             capacity:{marker.capacity}
                    //           </Text>
                    //         </View>
                    //       </Callout>
                    //     </Marker>
                    //   );
                    // } else
                    console.log('Asset Selected', 'Asset selected : ' + asset);
                    if (asset === 'Section') {
                      return (
                        <Marker
                          // key={index}
                          draggable={true}
                          coordinate={{
                            //17.431710, 78.460221
                            latitude: parseFloat(marker.latitude),
                            longitude: parseFloat(marker.longitude),
                          }}
                          pinColor={'green'}
                          onDragEnd={e => handleMarkerDragEnd(e, marker.slno)}>
                          <View
                            style={{
                              height: 35,
                              width: 35,
                              borderRadius: 18,
                              borderWidth: 1,
                              borderWidthColor: 'red',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            {/* <Text style={{color: 'red', fontSize: 20}}>
                                HAI
                              </Text> */}
                            <Image
                              style={{ height: 20, width: 20 }}
                              source={require('../imagesv1/combinedcircle.png')}></Image>
                          </View>

                          <Callout>
                            <View style={{ width: 200, height: 150 }}>
                              <ScrollView>
                                <View>
                                  <Text
                                    style={{
                                      color: 'green',
                                      fontWeight: '500',
                                      fontSize: 15,
                                    }}>
                                    {marker.AssetTypeName}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    Latitude is:{marker.Latitude}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    Longitude is:{marker.Longitude}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    Assetname:{marker.asset_name}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    feedername:{marker.asset_feedername}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    feedernumber:{marker.asset_feedernumber}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    mftdyear:{marker.mftd_year}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    vendor:{marker.asset_vendor}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    mftrid:{marker.asset_mftrid}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    mftrname:{marker.asset_mftrname}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    Installationtype:{marker.installationtype}
                                  </Text>
                                  <Text style={{ color: 'green' }}>
                                    capacity:{marker.capacity}
                                  </Text>
                                </View>
                              </ScrollView>
                            </View>
                          </Callout>
                        </Marker>
                      );
                    }
                  })()}
                </View>
              ))}
            </MapView>
          );
        }
      })()}

      <View style={styles.icontab}>
        <View>
          <TouchableOpacity
            style={{
              height: 50,
              width: 150,
              borderWidth: 2,
              borderColor: '#192442',
              backgroundColor: '#192442',
              borderRadius: 60,
              marginLeft: 20,
            }}
            // onPress={() => navigation.navigate('ViewAllUser', {asset: asset})}
            onPress={() => handleDefaultItemPress('1')}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={[styles.icontabicon, { marginLeft: 5, marginTop: 2 }]}
                source={require('../imagesv1/listicon.png')}
              />
              <Text
                style={{
                  color: '#dbf9c7',
                  fontSize: 18,
                  fontWeight: '500',
                  marginTop: 8,
                  marginLeft: 10,
                }}>
                {LanguageOpt('List View')}{' '}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: 30 }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 150,
              borderWidth: 2,
              borderColor: '#192442',
              backgroundColor: '#192442',
              borderRadius: 50,
              marginLeft: 10,
            }}
            onPress={() => handleDefaultItemPress('2')}
          //onPress={() => navigation.navigate('ViewAllUser', {asset: asset})}
          >
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 40,
                  borderWidth: 2,
                  margin: 3,
                  borderColor: '#192442',
                }}>
                <Image
                  style={[styles.icontabicon_1]}
                  source={require('../imagesv1/icon_map_location.png')}
                />
              </View>
              <Text
                style={{
                  color: '#dbf9c7',
                  fontSize: 18,
                  fontWeight: '500',
                  marginTop: 8,
                }}>
               {LanguageOpt('MapView')} 
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.iconcircle}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AssetDetailsInfo', {asset: asset})
            }>
            <View style={{flexDirection:'row'}}>
                <Image
                  style={styles.icontabicon}
                  source={require('../imagesv1/plus.png')}
                />
                <Text style={{color:"#192442",fontSize:18,fontWeight:'500',marginTop:10,marginLeft:10}}> MapView</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>

      {/* 
      <View style={styles.icontab}>
        <View style={styles.iconcircle}>
        <TouchableOpacity onPress={() => navigation.navigate('ViewAllUser', { asset: asset })}>
          <Image style={[styles.icontabicon, { marginLeft: 30 }]} source={require('../imagesv1/listicon.png')} />
        </TouchableOpacity>
        </View>
        <View style={styles.iconcircle}>
        <TouchableOpacity onPress={() => navigation.navigate('AssetDetailsInfo', { asset: asset })}>
            <Image style={styles.icontabicon} source={require('../imagesv1/plus.png')} />
        </TouchableOpacity>
        </View>
        <View style={styles.iconcircle}>

        <TouchableOpacity>
            <Image style={styles.icontabicon} source={require('../imagesv1/edit.png')} />
        </TouchableOpacity>
        </View>
        <View style={styles.iconcircle}>

        <TouchableOpacity>

          <Image style={[styles.icontabicon, { marginRight: 30 }]} source={require('../imagesv1/download.png')} />
        </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

MapSurvey.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  icontab: {
    height: 70,
    width: width,
    backgroundColor: '#dbf9c7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    borderColor: '#909090',
    // borderWidth:1
  },
  icontabicon: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#dbf9c7',
  },
  icontabicon_1: {
    height: 33,
    width: 33,
    padding: 5,
    borderRadius: 40,
    backgroundColor: '#dbf9c7',
  },
  map: {
    height: height - 120,
  },
  icon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginTop: 8,
  },
});

export default MapSurvey;

// useEffect(() => {
//   if (asset === 'DTR') {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT  * FROM Dtr_table',
//         [],
//         (tx, results) => {
//           const len = results.rows.length;
//           const data = [];
//           for (let i = 0; i < len; i++) {
//             const item = results.rows.item(i);

//             data.push(item);
//           }
//           setnewmarkers(data);
//         },
//         error => console.log(error),
//       );
//     });
//   }
//   if (asset === 'DCU') {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT  * FROM Dcu_table',
//         [],
//         (tx, results) => {
//           const len = results.rows.length;
//           const data = [];
//           for (let i = 0; i < len; i++) {
//             const item = results.rows.item(i);

//             data.push(item);
//           }
//           setnewmarkers(data);
//         },
//         error => console.log(error),
//       );
//     });
//   }
//   if (asset === 'Feeder') {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT  * FROM Feeder_table',
//         [],
//         (tx, results) => {
//           const len = results.rows.length;
//           const data = [];
//           for (let i = 0; i < len; i++) {
//             const item = results.rows.item(i);

//             data.push(item);
//           }
//           setnewmarkers(data);
//         },
//         error => console.log(error),
//       );
//     });
//   }
//   if (asset === 'RMU') {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT  * FROM Rmu_table',
//         [],
//         (tx, results) => {
//           const len = results.rows.length;
//           const data = [];
//           for (let i = 0; i < len; i++) {
//             const item = results.rows.item(i);

//             data.push(item);
//           }
//           setnewmarkers(data);
//         },
//         error => console.log(error),
//       );
//     });
//   }
//   if (asset === 'AutoReclosure') {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT  * FROM AutoReclosure_table',
//         [],
//         (tx, results) => {
//           const len = results.rows.length;
//           const data = [];
//           for (let i = 0; i < len; i++) {
//             const item = results.rows.item(i);

//             data.push(item);
//           }
//           setnewmarkers(data);
//         },
//         error => console.log(error),
//       );
//     });
//   }
//   if (asset === 'Sectionaliser') {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT  * FROM Sectionaliser_table',
//         [],
//         (tx, results) => {
//           const len = results.rows.length;
//           const data = [];
//           for (let i = 0; i < len; i++) {
//             const item = results.rows.item(i);

//             data.push(item);
//           }
//           setnewmarkers(data);
//         },
//         error => console.log(error),
//       );
//     });
//   }
//   if (asset === 'Meter') {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT  * FROM Meter_table',
//         [],
//         (tx, results) => {
//           const len = results.rows.length;
//           const data = [];
//           for (let i = 0; i < len; i++) {
//             const item = results.rows.item(i);

//             data.push(item);
//           }
//           setnewmarkers(data);
//         },
//         error => console.log(error),
//       );
//     });
//   }
// });
