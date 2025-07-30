import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  InteractionManager
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
//import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import TODOService from '../ReUsableMethods/TODOService';

// const Alignment = ({
//   setHello,
//   color,
//   setActive,
//   setIcon,
//   Language,
//   assetStatus,
// }) => {
// //   const imag = require('../images/arrow.png');
// //   const imag1 = require('../images/crossmark.png');
// //   const imag2 = require('../images/tick.png');
//   const navigation = useNavigation();
//   return (
//     <View
//       style={{
//         height: '20%',
//         width: '100%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         backgroundColor: color,
//         borderBottomLeftRadius: 30,
//         borderBottomRightRadius: 30,
//       }}>
//       <TouchableOpacity onPress={() => assetStatus=='NotStarted'}>
//         <View
//           style={{
//             flexDirection: 'row',
//             borderRadius: 10,
//             height: 30,
//             width: 100,
//             alignItems: 'center',
//             justifyContent: 'space-around',
//             backgroundColor: 'white',
//           }}>
//           <Text style={{fontSize: 12, color: 'black'}}>{assetStatus}</Text>
//           <Image source={imag1} style={{height: 16, width: 16}} />
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() =>
//           setActive(false) & setHello('Completed') & setIcon(imag2)
//         }>
//         <View
//           style={{
//             flexDirection: 'row',
//             borderRadius: 10,
//             height: 30,
//             width: 100,
//             alignItems: 'center',
//             justifyContent: 'space-around',
//             backgroundColor: 'white',
//           }}>
//           <Text style={{fontSize: 12, color: 'black'}}>
//             {Language.AssetDataCompleted}
//           </Text>
//           <Image source={imag2} style={{height: 16, width: 16}} />
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() =>
//           setActive(false) & setHello('ReAssigned') & setIcon(imag)
//         }>
//         <View
//           style={{
//             flexDirection: 'row',
//             borderRadius: 10,
//             height: 30,
//             width: 100,
//             alignItems: 'center',
//             justifyContent: 'space-around',
//             backgroundColor: 'white',
//           }}>
//           <Text style={{fontSize: 12, color: 'black'}}>
//             {Language.AssetReAssigned}
//           </Text>
//           <Image source={imag} style={{height: 16, width: 16}} />
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };
const AssetDataList = ({ route, navigation }) => {
  const todoService = new TODOService();
  const [Location, setLocation] = useState('17.4248742, 78.4583377');
  const [
    selectedAssetInstallationDetails,
    setSelectedAssetInstallationDetails,
  ] = useState([]);
  const [assetId, setAssetID] = useState('');
  const [icon, setIcon] = useState();
  const [hello, setHello] = useState();
  const [active, setActive] = useState(true);
  const [assetStatus, setAssetStatus] = useState(true);
  const [flag, setFlag] = useState(1);
  const {
    AssetDetails,
    ti,
    color,
    Language,
    resourceId,
    selectedAssetTypeName,
    installationID,
    LanguageOpt,
    processType,
    AssetType,
    assettypename
  } = route.params;
  const imag = require('../images/arrow.png');
  const imag1 = require('../images/crossmark.png');
  const imag2 = require('../images/tick.png');

  const [notStartedList, setNotStartedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [reAssignedList, setReAssignedList] = useState([]);

  // console.log(
  //   'RESOURCE DETAILS FROM NAVIGATION :::::' + AssetDetails,
  //   selectedAssetTypeName,
  // );
  //selectedAssetTypeName

  const onInprogressClicked = () => {
    setFlag(1);
  };

  //const handleOnChangeText = (value, fieldName) => {
  const onCompletedClicked = () => {
    setFlag(2);
  };

  const onReassignedClicked = () => {
    setFlag(3);
  };

  useEffect(() => {
    segregateData();
  }, [AssetDetails]);


  const [servicedatanotstarted, setServicedatanotstarted] = useState([])

  useEffect(() => {
    if (AssetType == "METER") {
      getInstallationDetailsByResourceId();
    }
  }, []);


  const getInstallationDetailsByResourceId = async () => {
    const req_url = "http://mapp.eficaa.com:8080/Eam_java_ms_V2.1_dev/servicedata/Servicedetails"
    // console.log(
    //   'Installation Details Request ### ',
    //   'Installation Details Request ' + req_url,
    // );
    let token = '';
    const { data, status } = await todoService.getDataFromApi(req_url, token);
    setNotStartedList(data);
    // console.log(
    //   'INSTALLATION DASHBOARD',
    //   methodname,
    //   LogMessages.CODE_HTTP,
    //   status,
    // );
  };


  const segregateData = () => {
    const con37 = AssetDetails.filter(
      item => item.installationStatus === 'CON_000066',
    );
    const con27 = AssetDetails.filter(
      item => item.installationStatus === 'CON_000027',
    );
    const con36 = AssetDetails.filter(
      item => item.installationStatus === 'CON_000036',
    );
    setCompletedList(con37);
    setNotStartedList(con27);
    setReAssignedList(con36);
  };

  // console.log(
  //   'Asset Status',
  //   'Asset Status ------ @@@@@@@@@@@@@@@@@  ' + notStartedList.length,
  //   completedList.length,
  //   reAssignedList.length,
  // );
  // console.log(
  //   'Asset Status',
  //   'Asset TYPE NAME ------  ' + selectedAssetTypeName,
  // );

  const navigateAsset = item => {
    if (selectedAssetTypeName == 'DCU') {
      navigation.navigate('DCU_GatewayDataList', {
        coloring: color,
        color: color,
        Language: Language,
        assettypename: assettypename,
        AssetDetails: AssetDetails,
        LanguageOpt: LanguageOpt,
        item: item,
        resourceId: resourceId,
        selectedAssetTypeName: selectedAssetTypeName,
        installationID: item.installationId,
        LanguageOpt: LanguageOpt,
        processType: 'Installation',
      });
    }
    else if (selectedAssetTypeName == "Meter") {
      InteractionManager.runAfterInteractions(() => {
        navigation.navigate('MeterDetailsServiceIntegration', {
          coloring: color,
          color: color,
          Language: Language,
          AssetDetails: AssetDetails,
          LanguageOpt: LanguageOpt,
          item: item,
          resourceId: resourceId,
          selectedAssetTypeName: selectedAssetTypeName,
          installationID: item.installationId,
          LanguageOpt: LanguageOpt,
          processType: 'Installation',
        });
      })
    }
    else {
      navigation.navigate('MapView', {
        coloring: color,
        color: color,
        Language: Language,
        AssetDetails: AssetDetails,
        LanguageOpt: LanguageOpt,
        assettypename: assettypename,
        item: item,
        resourceId: resourceId,
        selectedAssetTypeName: selectedAssetTypeName,
        installationID: item.installationId,
        LanguageOpt: LanguageOpt,
        processType: 'Installation',
      });
    }
  };

  const navigateAssetReject = item => {
    navigation.navigate('TicketAcceptReject', {
      coloring: color,
      color: color,
      Language: Language,
      AssetDetails: AssetDetails,
      LanguageOpt: LanguageOpt,
      item: item,
      resourceId: resourceId,
      selectedAssetTypeName: selectedAssetTypeName,
      installationID: item.installationId,
      LanguageOpt: LanguageOpt,
      processType: 'Installation',
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: '#18253f', marginLeft: 25, marginTop: 10 }}>Total Count:{notStartedList.length}</Text>
        <View
          style={{
            height: 40,
            marginTop: 10,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            // backgroundColor: color,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>

          <TouchableOpacity onPress={() => onInprogressClicked()}>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 10,
                marginLeft: 10,
                height: 30,
                width: 100,
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#e00404'
              }}>
              <Text style={{ fontSize: 11, color: '#e00404' }}>
                {LanguageOpt('Not_Started')}
              </Text>
              <Image source={imag1} style={{ height: 14, width: 14 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onCompletedClicked()}>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 10,
                height: 30,
                width: 100,
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#28a404'
              }}>
              <Text style={{ fontSize: 11, color: '#28a404' }}>
                {LanguageOpt('Completed')}
              </Text>
              <Image source={imag2} style={{ height: 14, width: 14 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onReassignedClicked()}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 10,
                borderRadius: 10,
                height: 30,
                width: 100,
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#00bdec'
              }}>
              <Text style={{ fontSize: 11, color: '#00bdec' }}>
                {LanguageOpt('Reassigned')}
              </Text>
              <Image source={imag} style={{ height: 14, width: 14 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Alignment
        setIcon={setIcon}
        color={color}
        Language={Language}
        setActive={setActive}
        setHello={setHello}
        assetStatus={assetStatus}
      /> */}
      <ScrollView>
        <View style={styles.body}>
          {(() => {
            if (flag == 1) {
              return (
                <ScrollView
                  style={{
                    flexDirection: 'column',
                    marginLeft: 1,
                    marginRight: 1,
                  }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      fontWeight: 'bold',
                      color: 'red'
                    }}>
                    {' '}
                    Ticket Status : Not Started
                  </Text>
                  <FlatList
                    data={notStartedList}
                    windowSize={5}
                    // maxToRenderPerBatch={30}
                    // initialNumToRender={20}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <View key={index} style={styles.body1}>
                        {AssetType === 'METER' ? (
                          <View style={{ marginBottom: 5, marginTop: 5 }}>
                            <Text style={styles.text2}>
                              {LanguageOpt('uniqueServiceNo')} : {item.uniqueServiceNo}
                            </Text>
                            <Text style={styles.text2}>
                              {LanguageOpt('SERVICE_NO')} : {item.serviceNo}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                              <Text style={styles.text3}>
                                {LanguageOpt('Status')} : {LanguageOpt('Not_Started')}
                              </Text>
                            </View>
                            <Text style={styles.text3}>
                              {LanguageOpt('Latitude')} : {item.latitude}
                            </Text>
                          </View>
                        ) : (
                          <View style={{ marginBottom: 5, marginTop: 5 }}>
                            <Text style={styles.text2}>{item.assetId}</Text>
                            <Text style={styles.text2}>
                              {LanguageOpt('Installation_ID')} : {item.installationId}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                              <Text style={styles.text3}>
                                {LanguageOpt('Status')} : {LanguageOpt('Not_Started')}
                              </Text>
                            </View>
                            <Text style={styles.text3}>{item.Location}</Text>
                          </View>
                        )}

                        <View
                          style={{
                            position: 'absolute',
                            right: 20,
                            marginTop: 15,
                            flexDirection: 'column',
                          }}>
                          <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                              onPress={() => navigateAsset(item)}
                              style={{
                                borderRadius: 15,
                                height: 35,
                                width: 85,
                                borderColor: '#28a404',
                                borderWidth: 1,
                              }}>
                              <Text
                                style={{
                                  marginTop: 5,
                                  alignSelf: 'center',
                                  color: '#28a404',
                                  fontWeight: '500',
                                }}>
                                {LanguageOpt('TicketAccept')}
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <TouchableOpacity
                            onPress={() => navigateAssetReject(item)}
                            style={{
                              borderRadius: 15,
                              height: 35,
                              marginTop: 10,
                              width: 85,
                              borderColor: '#e00404',
                              borderWidth: 1,
                            }}>
                            <Text
                              style={{
                                marginTop: 5,
                                alignSelf: 'center',
                                color: '#e00404',
                                fontWeight: '500',
                              }}>
                              {LanguageOpt('TicketReject')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                  />

                </ScrollView>
              );
            } else if (flag == 2) {
              return (
                <ScrollView
                  style={{
                    flexDirection: 'column',
                    marginLeft: 1,
                    marginRight: 1,
                  }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    Ticket Status : Completed
                  </Text>

                  {completedList.map((item, index) => {
                    return (
                      <View key={index} style={styles.body1}>
                        <View
                          key={index}
                          style={{ marginBottom: 5, marginTop: 5 }}>
                          <Text style={styles.text2}>{item.assetId}</Text>
                          <Text style={styles.text2}>
                            {LanguageOpt('Installation_ID')} :
                            {item.installationId}
                          </Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text3}>
                              {LanguageOpt('Status')} :{' '}
                              {LanguageOpt('Completed')}
                            </Text>
                            <View
                              style={{
                                position: 'absolute',
                                right: 20,
                                flexDirection: 'row',
                              }}>
                              {/* <TouchableOpacity>
                                <Image
                                  style={{
                                    height: 22,
                                    width: 22,
                                    marginTop:3,
                                    marginRight: 30,
                                  }}
                                  source={imag1}
                                />
                              </TouchableOpacity> */}
                              {/* <TouchableOpacity
                                onPress={() =>
                                  navigateAsset(item)                                  
                                }
                                >
                                <Image
                                  style={{height: 25, width: 25}}
                                  source={require('../images/map.png')}
                                />
                              </TouchableOpacity> */}
                            </View>
                          </View>
                          <Text style={styles.text3}>{item.Location}</Text>
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
              );
            } else if (flag == 3) {
              return (
                <ScrollView
                  style={{
                    flexDirection: 'column',
                    marginLeft: 1,
                    marginRight: 1,
                  }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      marginBottom: 10,
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    Ticket Status : Re-Assigned
                  </Text>
                  {reAssignedList.map((item, index) => {
                    return (
                      <View key={index} style={styles.body1}>
                        <View
                          key={index}
                          style={{ marginBottom: 5, marginTop: 5 }}>
                          <Text style={styles.text2}>{item.assetId}</Text>
                          <Text style={styles.text2}>
                            {LanguageOpt('Installation_ID')} :
                            {item.installationId}
                          </Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text3}>
                              {LanguageOpt('Status')} :{' '}
                              {LanguageOpt('Reassigned')}
                            </Text>
                            <View
                              style={{
                                position: 'absolute',
                                right: 20,
                                flexDirection: 'row',
                              }}>
                              {/* <TouchableOpacity>
                                <Image
                                  style={{
                                    height: 22,
                                    width: 22,
                                    marginTop:3,
                                    marginRight: 30,
                                  }}
                                  source={imag1}
                                />
                              </TouchableOpacity> */}
                              <TouchableOpacity
                                onPress={() => navigateAsset(item)}>
                                <Image
                                  style={{ height: 25, width: 25 }}
                                  source={require('../images/map.png')}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                          <Text style={styles.text3}>{item.Location}</Text>
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
              );
            }

            // return null;
          })()}
        </View>
      </ScrollView>
    </View>
  );
};

/*
 */
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  texting: {
    color: 'red',
  },
  body: {
    flexDirection: 'column',
    margin: 20,
  },
  text1: {
    color: 'black',
    fontSize: 15,
    fontStyle: 'normal',
    paddingLeft: 20,
  },
  text2: {
    marginTop: 5,
    color: 'black',
    fontSize: 15,
    fontStyle: 'normal',
    paddingLeft: 20,
  },
  text3: {
    color: 'black',
    fontSize: 15,
    fontStyle: 'normal',
    paddingLeft: 20,
    marginTop: 5,
  },
  body1: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 20,
    elevation: 5,
  },
});
export default AssetDataList;
