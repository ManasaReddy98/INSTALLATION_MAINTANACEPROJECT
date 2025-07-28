import React, {useState, useEffect, useRef} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  FlatList,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

var screenWidth = Dimensions.get('window').width;

import tick from '../../images/tick.png';

const MaintananceNumberingProgress = ({navigation, route}) => {
  const {
    coloring,
    Language,
    passid,
    maintenancetype,
    existingAssetId,
    mapresourceid,
    assetId,
  } = route.params;
  const [numberingresource, setNumberingresource] = useState(mapresourceid);
  console.log('existingAssetId', existingAssetId);
  const [type, setType] = useState(maintenancetype);

  const [getid, setGetid] = useState(passid);

  const [listdata, setListdata] = useState([
    {
      inde: 2,
      id: '01',
      unique: '01',
    },
    {
      inde: 2,
      id: '02',
      unique: '02',
    },
    {
      inde: 3,
      id: '03',
      unique: '03',
    },
    {
      inde: 4,
      id: '04',
      unique: '04',
    },
    {
      inde: 5,
      id: '05',
      unique: '05',
    },
    {
      inde: 6,
      id: '06',
      unique: '06',
    },
    {
      inde: 7,
      id: '07',
      unique: '07',
    },
  ]);

  const [index, setIndex] = useState(0);

  const scrollRef = useRef();

  const [sopData, setSoPData] = useState([]);

  const [sopResponse, setSopResponse] = useState([
    {
      SopId: '1234',
      Name: 'TMU Installation',
      InstallationId: 'TMU_I-23455678',
      BRNo: '1',
      Category: 'Installation',
      SubCategory: 'Load',
      Type: 'Manual',
      CreatedBy: 'SE',
      Modifiedby: 'SE',
      Steps: [
        {
          StepID: 1,
          StepName: 'TMU Installation Step - 1',
          Activities: [
            {
              ActivityID: 1,
              Activity: 'Location Finding',
            },
            {
              ActivityID: 2,
              Activity: 'Recieve Exact location from the department',
            },
            {
              ActivityID: 3,
              Activity: 'for where TMU has to be installed',
            },
            {
              ActivityID: 4,
              Activity: 'Check the TMU functionalities before transport',
            },
          ],
        },
        {
          StepID: 2,
          StepName: 'TMU Installation Step - 2',
          Activities: [
            {
              ActivityID: 5,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 6,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 3,
          StepName: 'TMU Installation Step - 3',
          Activities: [
            {
              ActivityID: 7,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 8,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 4,
          StepName: 'TMU Installation Step - 4',
          Activities: [
            {
              ActivityID: 9,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 10,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 5,
          StepName: 'TMU Installation Step - 5',
          Activities: [
            {
              ActivityID: 11,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 12,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 6,
          StepName: 'TMU Installation Step - 6',
          Activities: [
            {
              ActivityID: 13,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 14,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 7,
          StepName: 'TMU Installation Step - 7',
          Activities: [
            {
              ActivityID: 15,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 16,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
      ],
    },
  ]);

  // const [specificLocation, setSpecificLocation] = useState(null); // Initialize specificLocation

  const fetchData = async () => {
    try {
      const response = await fetch(
        'http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/installationdata/SopDetails/1234',
      );
      const result = await response.json();
      setSoPData(result);
      // console.log("Fetched Data:", result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlechangse = index => {
    const images = () => {
      return (
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 40, width: 40, alignSelf: 'center'}}
            source={tick}
          />
        </View>
      );
    };
    const newUsers = [...listdata];
    newUsers[index].id = images();
    setListdata(newUsers);
  };

  const [data, setData] = useState([
    'hello world',
    'hello',
    'react',
    'native',
    'phone',
    'chocolate',
    'busicuit',
    'bun',
  ]);
  return (
    <View style={styles.MainContainer}>
      <View style={{height: DEVICE_HEIGHT * 0.2}}>
        <FlatList
          style={{
            backgroundColor: '#fff',
            flex: 1,
            elevation: 5,
            borderBottomLeftRadius: 40,
            flexDirection: 'row',
            borderBottomRightRadius: 40,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listdata}
          keyExtractor={item => item.unique}
          renderItem={({item, index: findex}) => {
            return (
              <View
                key={item.unique}
                style={{
                  marginHorizontal: 20,
                  height: findex == index ? 80 : 40,
                  width: findex == index ? 80 : 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'red',
                  borderRadius: 40,
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                  {item.id}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <ScrollView
        horizontal={true}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}>
        <View style={styles.ScrollContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginTop: DEVICE_HEIGHT * 0.05,
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepID:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[0].StepID}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepName:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[0].StepName}
            </Text>
          </View>
          <ScrollView
            style={{
              // backgroundColor: 'lightblue', // Background color for ScrollView
              marginHorizontal: DEVICE_WIDTH * 0.04,
              marginBottom: DEVICE_HEIGHT * 0.12,
              marginTop: DEVICE_HEIGHT * 0.04, // Padding for the entire ScrollView
            }}
            showsVerticalScrollIndicator={false}>
            {sopResponse[0].Steps[0].Activities.map(item => {
              return (
                <View
                  style={{
                    marginVertical: 15,
                    borderRadius: 15,
                    elevation: 5,
                    alignSelf: 'center',
                    padding: 15,
                    backgroundColor: '#fff',
                    width: DEVICE_WIDTH * 0.75,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginVertical: 10,
                    }}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      ActivityID:
                    </Text>
                    <Text>{item.ActivityID}</Text>
                  </View>

                  <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      Activity:
                    </Text>
                    <Text style={{flex: 1}}>{item.Activity}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: DEVICE_HEIGHT * 0.04,
            }}
            onPress={() => {
              scrollRef.current.scrollTo({x: screenWidth}) &
                setIndex(index + 1) &
                handlechangse(index);
            }}>
            <Text style={[styles.button, {backgroundColor: 'green'}]}>01</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ScrollContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginTop: DEVICE_HEIGHT * 0.05,
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepID:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[1].StepID}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepName:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[1].StepName}
            </Text>
          </View>
          <ScrollView
            style={{
              // backgroundColor: 'lightblue', // Background color for ScrollView
              marginHorizontal: DEVICE_WIDTH * 0.04,
              marginBottom: DEVICE_HEIGHT * 0.12,
              marginTop: DEVICE_HEIGHT * 0.04, // Padding for the entire ScrollView
            }}
            showsVerticalScrollIndicator={false}>
            {sopResponse[0].Steps[1].Activities.map(item => {
              return (
                <View
                  style={{
                    marginVertical: 15,
                    borderRadius: 15,
                    elevation: 5,
                    alignSelf: 'center',
                    padding: 15,
                    backgroundColor: '#fff',
                    width: DEVICE_WIDTH * 0.75,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginVertical: 10,
                    }}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      ActivityID:
                    </Text>
                    <Text>{item.ActivityID}</Text>
                  </View>

                  <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      Activity:
                    </Text>

                    <Text style={{flex: 1}}>{item.Activity}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: DEVICE_HEIGHT * 0.04,
            }}
            onPress={() => {
              scrollRef.current.scrollTo({x: screenWidth * 2}) &
                setIndex(index + 1) &
                handlechangse(index);
            }}>
            <Text style={[styles.button, {backgroundColor: 'green'}]}>02</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ScrollContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginTop: DEVICE_HEIGHT * 0.05,
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepID:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[2].StepID}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepName:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[2].StepName}
            </Text>
          </View>
          <ScrollView
            style={{
              // backgroundColor: 'lightblue', // Background color for ScrollView
              marginHorizontal: DEVICE_WIDTH * 0.04,
              marginBottom: DEVICE_HEIGHT * 0.12,
              marginTop: DEVICE_HEIGHT * 0.04, // Padding for the entire ScrollView
            }}
            showsVerticalScrollIndicator={false}>
            {sopResponse[0].Steps[2].Activities.map(item => {
              return (
                <View
                  style={{
                    marginVertical: 15,
                    borderRadius: 15,
                    elevation: 5,
                    alignSelf: 'center',
                    padding: 15,
                    backgroundColor: '#fff',
                    width: DEVICE_WIDTH * 0.75,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginVertical: 10,
                    }}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      ActivityID:
                    </Text>
                    <Text>{item.ActivityID}</Text>
                  </View>

                  <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      Activity:
                    </Text>
                    <Text style={{flex: 1}}>{item.Activity}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: DEVICE_HEIGHT * 0.04,
            }}
            onPress={() => {
              scrollRef.current.scrollTo({x: screenWidth * 3}) &
                setIndex(index + 1) &
                handlechangse(index);
            }}>
            <Text style={[styles.button, {backgroundColor: 'green'}]}>03</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ScrollContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginTop: DEVICE_HEIGHT * 0.05,
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepID:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[3].StepID}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepName:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[3].StepName}
            </Text>
          </View>
          <ScrollView
            style={{
              // backgroundColor: 'lightblue', // Background color for ScrollView
              marginHorizontal: DEVICE_WIDTH * 0.04,
              marginBottom: DEVICE_HEIGHT * 0.12,
              marginTop: DEVICE_HEIGHT * 0.04, // Padding for the entire ScrollView
            }}
            showsVerticalScrollIndicator={false}>
            {sopResponse[0].Steps[3].Activities.map(item => {
              return (
                <View
                  style={{
                    marginVertical: 15,
                    borderRadius: 15,
                    elevation: 5,
                    alignSelf: 'center',
                    padding: 15,
                    backgroundColor: '#fff',
                    width: DEVICE_WIDTH * 0.75,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginVertical: 10,
                    }}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      ActivityID:
                    </Text>
                    <Text>{item.ActivityID}</Text>
                  </View>

                  <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      Activity:
                    </Text>

                    <Text style={{flex: 1}}>{item.Activity}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: DEVICE_HEIGHT * 0.04,

              // borderRadius: 40,
              // alignSelf: 'center', marginBottom: 5
            }}
            onPress={() => {
              scrollRef.current.scrollTo({x: screenWidth * 4}) &
                setIndex(index + 1) &
                handlechangse(index);

              // navigation.navigate('SignatureCapturepage', { Language: Language }) & handlechangse(index) & setIndex(index + 1)
            }}>
            <Text style={[styles.button, {backgroundColor: 'green'}]}>04</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ScrollContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginTop: DEVICE_HEIGHT * 0.05,
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepID:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[4].StepID}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepName:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[4].StepName}
            </Text>
          </View>
          <ScrollView
            style={{
              // backgroundColor: 'lightblue', // Background color for ScrollView
              marginHorizontal: DEVICE_WIDTH * 0.04,
              marginBottom: DEVICE_HEIGHT * 0.12,
              marginTop: DEVICE_HEIGHT * 0.04, // Padding for the entire ScrollView
            }}
            showsVerticalScrollIndicator={false}>
            {sopResponse[0].Steps[4].Activities.map(item => {
              return (
                <View
                  style={{
                    marginVertical: 15,
                    borderRadius: 15,
                    elevation: 5,
                    alignSelf: 'center',
                    padding: 15,
                    backgroundColor: '#fff',
                    width: DEVICE_WIDTH * 0.75,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginVertical: 10,
                    }}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      ActivityID:
                    </Text>
                    <Text>{item.ActivityID}</Text>
                  </View>

                  <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      Activity:
                    </Text>

                    <Text style={{flex: 1}}>{item.Activity}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: DEVICE_HEIGHT * 0.04,

              // borderRadius: 40,
              // alignSelf: 'center', marginBottom: 5
            }}
            onPress={() => {
              scrollRef.current.scrollTo({x: screenWidth * 5}) &
                setIndex(index + 1) &
                handlechangse(index);

              // navigation.navigate('SignatureCapturepage', { Language: Language }) & handlechangse(index) & setIndex(index + 1)
            }}>
            <Text style={[styles.button, {backgroundColor: 'green'}]}>05</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ScrollContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginTop: DEVICE_HEIGHT * 0.05,
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepID:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[5].StepID}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepName:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[5].StepName}
            </Text>
          </View>
          <ScrollView
            style={{
              // backgroundColor: 'lightblue', // Background color for ScrollView
              marginHorizontal: DEVICE_WIDTH * 0.04,
              marginBottom: DEVICE_HEIGHT * 0.12,
              marginTop: DEVICE_HEIGHT * 0.04, // Padding for the entire ScrollView
            }}
            showsVerticalScrollIndicator={false}>
            {sopResponse[0].Steps[5].Activities.map(item => {
              return (
                <View
                  style={{
                    marginVertical: 15,
                    borderRadius: 15,
                    elevation: 5,
                    alignSelf: 'center',
                    padding: 15,
                    backgroundColor: '#fff',
                    width: DEVICE_WIDTH * 0.75,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginVertical: 10,
                    }}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      ActivityID:
                    </Text>
                    <Text>{item.ActivityID}</Text>
                  </View>

                  <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      Activity:
                    </Text>

                    <Text style={{flex: 1}}>{item.Activity}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: DEVICE_HEIGHT * 0.04,

              // borderRadius: 40,
              // alignSelf: 'center', marginBottom: 5
            }}
            onPress={() => {
              scrollRef.current.scrollTo({x: screenWidth * 6}) &
                setIndex(index + 1) &
                handlechangse(index);

              // navigation.navigate('SignatureCapturepage', { Language: Language }) & handlechangse(index) & setIndex(index + 1)
            }}>
            <Text style={[styles.button, {backgroundColor: 'green'}]}>06</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ScrollContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginTop: DEVICE_HEIGHT * 0.05,
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepID:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[6].StepID}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: (DEVICE_WIDTH - DEVICE_WIDTH * 0.84) / 2,
            }}>
            <Text style={{color: '#909090', fontWeight: 'bold', fontSize: 20}}>
              StepName:
            </Text>
            <Text style={{color: '#909090', fontSize: 20}}>
              {sopResponse[0].Steps[6].StepName}
            </Text>
          </View>
          <ScrollView
            style={{
              // backgroundColor: 'lightblue', // Background color for ScrollView
              marginHorizontal: DEVICE_WIDTH * 0.04,
              marginBottom: DEVICE_HEIGHT * 0.12,
              marginTop: DEVICE_HEIGHT * 0.04, // Padding for the entire ScrollView
            }}
            showsVerticalScrollIndicator={false}>
            {sopResponse[0].Steps[6].Activities.map(item => {
              return (
                <View
                  style={{
                    marginVertical: 15,
                    borderRadius: 15,
                    elevation: 5,
                    alignSelf: 'center',
                    padding: 15,
                    backgroundColor: '#fff',
                    width: DEVICE_WIDTH * 0.75,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginVertical: 10,
                    }}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      ActivityID:
                    </Text>
                    <Text>{item.ActivityID}</Text>
                  </View>

                  <View style={{flexDirection: 'row', marginVertical: 10}}>
                    <Text style={{fontWeight: 'bold', width: 80}}>
                      Activity:
                    </Text>

                    <Text style={{flex: 1}}>{item.Activity}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: DEVICE_HEIGHT * 0.04,

              // borderRadius: 40,
              // alignSelf: 'center', marginBottom: 5
            }}
            onPress={() => {
              scrollRef.current.scrollTo({x: screenWidth * 7}) &
                setIndex(index + 1) &
                handlechangse(index);

              navigation.navigate('SignatureCapturepage', {
                existingAssetId: existingAssetId,
                Language: Language,
                numberingresource: numberingresource,
                getid: getid,
                maintenancetype: type,
                mapresourceid: mapresourceid,
              }) &
                handlechangse(index) &
                setIndex(index + 1);
            }}>
            <Text style={[styles.button, {backgroundColor: 'green'}]}>07</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default MaintananceNumberingProgress;
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: DEVICE_HEIGHT * 0.04, // Adding margin to create space between "Issues Count" and list items
  },
  scrollViewContainer: {
    justifyContent: 'space-around',
    backgroundColor: 'blue',
  },
  ScrollContainer: {
    // backgroundColor: 'pink',
    // flexGrow: 1,

    // marginTop: 0,
    //marginHorizontal:screenWidth
    width: screenWidth,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text2: {
    marginTop: 5,
    color: 'black',
    fontSize: 15,
    paddingLeft: 20,
  },
  ScrollContainer1: {
    flexGrow: 1,
    marginTop: 0,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScrollTextContainer: {
    height: 300,
    fontSize: 20,
    padding: 15,
    color: '#000',
    textAlign: 'center',
  },
  ButtonViewContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    backgroundColor: 'green',
  },
  ButtonContainer: {
    padding: 30,
  },
  button: {
    borderRadius: 40,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
    color: '#fff',
  },
  body: {
    flexDirection: 'column',
    marginHorizontal: 10,

    height: DEVICE_HEIGHT * 0.55,
    width: DEVICE_WIDTH * 0.9,
    backgroundColor: 'yellow',
    marginTop: 10,
    marginBottom: 40,
  },
  text3: {
    color: 'black',
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
});
