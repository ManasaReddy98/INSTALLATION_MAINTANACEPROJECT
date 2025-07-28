import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useTranslation} from 'react-i18next';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

// const Alignment = ({color, notificationcount}) => {
//   const {t} = useTranslation();
//   return (
//     <View>
//       <Text
//         style={{
//           color: color,
//           fontSize: 18,
//           fontWeight: 'bold',
//           marginLeft: DEVICE_WIDTH * 0.12,
//           marginTop: DEVICE_HEIGHT * 0.05,
//         }}>
//         {t('Issues_Count')}: {notificationcount}
//       </Text>
//     </View>
//   );
// };

const MaintananceAssetDataList = ({navigation, route}) => {
  const {t} = useTranslation();
  const [icon, setIcon] = useState();
  const {resourceName, color, Language, resourceid, LanguageOpt} = route.params;
  const [AssetDetails, setAssetDetails] = useState([]);
  // console.log('Length####', AssetDetails.length);

  const fetchData = async () => {
    const url =
      'http://mapp.eficaa.com:8080/Eam_mobileapp_microservices/maintenancedata/maintenanceresourcebyid/' +
      resourceid +
      '/NEW';
    try {
      const response = await fetch(url);
      const result = await response.json();

      setAssetDetails(result);
      if (result.status == '500') {
        Alert.alert(t('Server_Error'));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Update listData with the notification count after fetching dataissues
  useEffect(() => {
    fetchData();
  }, [resourceid]);

  return (
    <View style={styles.container}>
      {/* <View>
        <Text
          style={{
            color: color,
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: DEVICE_WIDTH * 0.12,
            marginTop: 10,
            // marginTop: DEVICE_HEIGHT * 0.05,
          }}>
          {t('Issues_Count')}: {AssetDetails.length}
        </Text>
      </View> */}
      {/* <Alignment color={color} notificationcount={notificationcount} /> */}
      <ScrollView style={styles.scrollView}>
        {(() => {
          if (JSON.stringify(AssetDetails) === '[]') {
            return <Text> New Tickets Data Not Available</Text>;
          } else if (AssetDetails.length > 0) {
            return (
              <View>
                <Text
                  style={{
                    marginLeft: 20,
                    marginBottom: 10,
                    color: '#000000',
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  Maintanance Status : NEW , Count :{AssetDetails.length}
                </Text>
                {AssetDetails.map((item, index) => (
                  // <View key={index} style={styles.body1}>
                  //   <View style={{margin: 10}}>
                  //     <Text style={styles.text2}>
                  //       MaintananceId: {item.maintenanceId}
                  //     </Text>
                  //     <Text style={styles.text2}>Asset Id: {item.assetId}</Text>

                  //     <View style={{flexDirection: 'row'}}>
                  //       <View
                  //         style={{
                  //           position: 'absolute',
                  //           right: 20,
                  //           flexDirection: 'row',
                  //         }}>
                  //         <TouchableOpacity>
                  //           <Image
                  //             style={{height: 30, width: 30, marginRight: 30}}
                  //             source={icon}
                  //           />
                  //         </TouchableOpacity>
                  //         <TouchableOpacity
                  //           onPress={() =>
                  //             navigation.navigate('MapViewlatlong', {
                  //               AssetDetails: AssetDetails,
                  //               resourceid: resourceid,
                  //               id: item.maintenanceId,
                  //               color: color,
                  //               Language: Language,
                  //               resourceName: resourceName,
                  //               LanguageOpt: LanguageOpt,
                  //             })
                  //           }>
                  //           <Image
                  //             style={{height: 25, width: 25}}
                  //             source={require('../../../images/map.png')}
                  //           />
                  //         </TouchableOpacity>
                  //       </View>
                  //     </View>
                  //     <View
                  //       style={{
                  //         flexDirection: 'row',
                  //         marginTop: 5,
                  //         flex: 1,
                  //         marginBottom: 10,
                  //       }}>
                  //       <Text style={styles.text4}>Status:</Text>
                  //       <Text style={styles.text4}>NEW</Text>
                  //       {/* <Image
                  //                         style={{height: 20, width: 20, marginLeft: 110}}
                  //                         source={require('../../../images/resolve.png')}
                  //                       /> */}
                  //     </View>
                  //   </View>
                  // </View>

                  <View key={index} style={styles.body1}>
                    <View
                      key={index}
                      style={{marginBottom: 5, marginTop: 5, height: 100}}>
                      <Text style={styles.text2}>
                        {LanguageOpt('MaintananceId')} :{item.maintenanceId}
                      </Text>
                      {/* <Text style={styles.text2}>
                        {' '}
                        Asset Id :{item.assetId}
                      </Text> */}
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text3}>
                          {LanguageOpt('Status')} : NEW
                        </Text>
                      </View>
                      <Text style={styles.text3}>{item.Location}</Text>
                    </View>
                    <View
                      style={{
                        position: 'absolute',
                        right: 20,
                        marginTop: 15,
                        flexDirection: 'column',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('MapViewlatlong', {
                              AssetDetails: AssetDetails,
                              resourceid: resourceid,
                              id: item.maintenanceId,
                              color: color,
                              Language: Language,
                              resourceName: resourceName,
                              LanguageOpt: LanguageOpt,
                              resourceId: resourceid,
                            })
                          }
                          style={{
                            //backgroundColor: '#28a404',
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
                            {/* Accept */}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('TicketAcceptReject', {
                            AssetDetails: AssetDetails,
                            resourceid: resourceid,
                            id: item.maintenanceId,
                            color: color,
                            Language: Language,
                            resourceName: resourceName,
                            LanguageOpt: LanguageOpt,
                            resourceId: resourceid,
                            item: item,
                          })
                        }
                        style={{
                          // backgroundColor: '#e00404',
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
                          }}
                          // source={imag1}
                        >
                          {LanguageOpt('TicketReject')}
                          {/* Reject */}
                        </Text>
                      </TouchableOpacity>
                      <Text></Text>
                    </View>
                  </View>
                ))}
              </View>
            );
          }
        })()}
        {/* <View style={styles.body}>
          {AssetDetails.map((item, index) => (
            <View key={index} style={styles.body1}>
              <View style={{marginBottom: 5, marginTop: 5}}>
                <Text style={styles.text2}>
                  {t('Maintenance_Id')}: {item.maintenanceId}
                </Text>
                <View></View>
                <View style={{flexDirection: 'row'}}>               

                  <View
                    style={{
                      position: 'absolute',
                      right: 20,
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity>
                      <Image
                        style={{height: 30, width: 30, marginRight: 30}}
                        source={icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('MapViewlatlong', {
                          AssetDetails: AssetDetails,
                          resourceid: resourceid,
                          id: item.maintenanceId,
                          color: color,
                          Language: Language,
                          resourceName: resourceName,
                          LanguageOpt: LanguageOpt,
                        })
                      }>
                      <Image
                        style={{height: 25, width: 25}}
                        source={require('../../../images/map.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
               
                <View></View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    flex: 1,
                    marginBottom: 10,
                  }}>
                  <Text style={styles.text4}>{t('Status')}:</Text>
                  <Text style={styles.text4}>{t('New')}</Text>
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      right: 20,
                      position: 'absolute',
                    }}
                    source={require('../../../images/t_info.png')}
                  />

                  <Image
                    style={{
                      height: 30,
                      width: 30,
                      right: 20,
                      position: 'absolute',
                    }}
                    source={require('../../../images/new_icon.png')}
                  />
                </View>
              </View>
            </View>
          ))}
        </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    marginTop: DEVICE_HEIGHT * 0.04, // Adding margin to create space between "Issues Count" and list items
  },
  body: {
    flexDirection: 'column',
    marginHorizontal: 20,
    //backgroundColor: 'violet',
    //    height:300
  },
  text2: {
    marginTop: 15,
    color: 'black',
    fontSize: 15,
    paddingLeft: 20,
  },
  text3: {
    color: 'black',
    fontSize: 15,
    paddingLeft: 20,
    marginTop: 5,
  },
  text4: {
    color: '#9a1507',
    fontSize: 15,
    paddingLeft: 20,
    marginTop: 5,
  },
  body1: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    elevation: 5,
  },
});

export default MaintananceAssetDataList;
