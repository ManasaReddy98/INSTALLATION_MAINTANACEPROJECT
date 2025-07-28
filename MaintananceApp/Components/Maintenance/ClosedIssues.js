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
import {useNavigation} from '@react-navigation/native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const Alignment = ({color}) => {
  return (
    <View>
      <Text
        style={{
          color: color,
          fontSize: 18,
          fontWeight: 'bold',
          marginLeft: DEVICE_WIDTH * 0.12,
          marginTop: DEVICE_HEIGHT * 0.05,
        }}>
        {/* Resolved Count: 4 */}
      </Text>
    </View>
  );
};

const ClosedIssues = ({route}) => {
  const navigation = useNavigation();
  const [icon, setIcon] = useState();
  const {color, Language, resourceid} = route.params;
  const [AssetDetails, setAssetDetails] = useState([]);

  const fetchData = async () => {
    const url =
      'http://mapp.eficaa.com:8080/EMap_WebIntegrator_ms/maintenancedata/maintenanceresourcebyid/' +
      resourceid +
      '/CLOSED';
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

  console.log(
    'CLOSED ISSUES ASSET DATA ##### ' + AssetDetails.length,
    JSON.stringify(AssetDetails),
  );
  return (
    <View style={styles.container}>
      {/* <Alignment color={color} /> */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.body}>
          {(() => {
            if (JSON.stringify(AssetDetails) === '[]') {
              return <Text> Closed Tickets Data Not Available</Text>;
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
                    Maintanance Status : Closed , Count :{AssetDetails.length}
                  </Text>
                  {AssetDetails.map((item, index) => (
                    <View key={index} style={styles.body1}>
                      <View style={{marginBottom: 5, marginTop: 5}}>
                        <Text style={styles.text2}>
                          MaintananceId: {item.maintenanceId}
                        </Text>
                        {/* <View style={{flexDirection: 'row'}}>
                        <View>
                          <Text style={styles.text3}>Description:</Text>
                          <Text style={styles.text3}>{item.Description}</Text>
                        </View>
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
                                coloring: color,
                                Language: Language,
                              })
                            }>
                            <Image
                              style={{height: 30, width: 30}}
                              source={require('../../../images/map.png')}
                            />
                          </TouchableOpacity>
                        </View>
                      </View> */}
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 5,
                            flex: 1,
                            marginBottom: 10,
                          }}>
                          <Text style={styles.text5}>Status:</Text>
                          <Text style={styles.text5}>Closed</Text>
                          {/* <Image
                      style={{height: 20, width: 20, marginLeft: 110}}
                      source={require('../../../images/resolve.png')}
                    /> */}
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              );
            }
          })()}
        </View>
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
  },
  text2: {
    marginTop: 5,
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
  text5: {
    color: '#6f9341',
    fontSize: 15,
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

export default ClosedIssues;
