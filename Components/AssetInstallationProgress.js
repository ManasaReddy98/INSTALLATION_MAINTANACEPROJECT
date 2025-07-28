import React, {useState, useEffect, useRef} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Login1 from './Login1';
import Login2 from './Login2';
import Round4 from './Round4';
import Login3 from './Login3';

var screenWidth = Dimensions.get('window').width;

import {HeaderStyleInterpolators} from '@react-navigation/stack';
import {FlatList} from 'react-native-gesture-handler';
import tick from '../images/tick.png';
import {GlobalStyles} from '../appstyles/GlobalStyles';

import CheckNetworkConnectivity from '../ReusableFunctions/CheckNetworkConnectivity';
import TODOService from '../ReUsableMethods/TODOService';
import {LogMessages} from '../LogManager/LogMessages';

export default function AssetInstallationProgress({navigation, route}) {
  const checkNetworkState = new CheckNetworkConnectivity();
  const todoService = new TODOService();
  const {
    color,
    Language,
    AssetDetails,
    item,
    selectedAssetTypeName,
    address,
    geoLocation,
    resourceId,
    selectedAssetDetails,
    coloring,
    workStartedDateTime,
  } = route.params;
  const [posts, setPosts] = useState([]);
  const [SOPsteps, setSOPSteps] = useState([]);
  const [SOPactivities, setSOPActivities] = useState([]);
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
  const [listdata, setListdata] = useState([
    {
      inde: 0,
      id: '01',
    },
    {
      inde: 1,
      id: '02',
    },
    {
      inde: 2,
      id: '03',
    },
    {
      inde: 3,
      id: '04',
    },
  ]);

  useEffect(() => {
    let assetID = selectedAssetDetails.assetId;
    // getAssetSOP_ByAssetID(); // call when api fixed until static sop format used for api response ...
  }, [selectedAssetDetails]);

  const getAssetSOP_ByAssetID = async () => {
    const req_url =
      'http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/installationdata/SopDetails/1234';
    console.log(
      'Installation SOP Request ### ',
      'Installation SOP Request ',
      req_url,
    );
    let token = '';
    console.log('Request Fired ##### ');
    try {
      const {data, status} = await todoService.fetchSOP_withoutToken(req_url);
      console.log('INSTALLATION DASHBOARD', status, data);
      setPosts(data);
    } catch (err) {
      // handle rejection
      console.error(err);
    }
  };

  // console.log(
  //     'Installation SOP Response ### ',
  //     'Installation SOP Response ### ' + JSON.stringify(sopResponse)
  // );

  useEffect(() => {
    {
      sopResponse.map(sop => {
        console.log(
          'Installation SOP Response ### ',
          'Installation SOP steps 1 ### ' + sop.SopId,
          sop.Name,
          sop.InstallationId,
          sop.Steps.length,
        );
        setSOPSteps(sop.Steps);
      });
    }
  }, [sopResponse]);

  useEffect(() => {
    {
      SOPsteps.map(steps => {
        // console.log(
        //     '',
        //     'Installation SOP Length ### ' + steps.length
        // );
        setSOPActivities(steps.Activities);
      });
    }
  }, [SOPsteps]);

  // console.log(
  //     'Installation SOP Response ### ',
  //     'Installation SOP Activities 2 ### ' + SOPsteps.length
  // );
  const [stepClickedIndex, setStepClickedIndex] = useState(0);
  const [stepClickBoolean, setStepClickBoolean] = useState(true);
  const [stepBeforeIndex, setStepBeforeIndex] = useState(0);

  const [boolean1, setBoolean1] = useState(true);
  const [boolean2, setBoolean2] = useState(false);
  const [boolean3, setBoolean3] = useState(false);
  const [boolean4, setBoolean4] = useState(false);
  const [images, setImages] = useState(true);
  const [images1, setImages1] = useState(true);
  const [images2, setImages2] = useState(true);
  const [height, setHeight] = useState(40);
  const [width, setWidth] = useState(40);
  //const [index, setIndex] = useState(0);
  const [totalIntervals, setTotalIntervals] = React.useState(0);
  const scrollRef = useRef();

  const [specificLocation, setSpecificLocation] = useState({
    latitude: parseFloat(17.4248742),
    longitude: parseFloat(78.4583377),
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  useEffect(() => {
    setSpecificLocation({
      latitude: parseFloat(geoLocation.latitude),
      longitude: parseFloat(geoLocation.longitude),
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    console;
  }, [geoLocation]);

  const changing = () => {
    if (stepClickedIndex == SOPsteps.length - 1) {
      return;
    } else {
      scrollRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
    [stepClickedIndex];
  };

  // console.log("STEP INDEX SELECTRED","STEP INDEX SELECTED ON CLICK @@@@@@@@ " , stepClickedIndex);

  const handleStepChange = collectedIndex => {
    console.log(
      'STEP INDEX SELECTRED',
      ' HANDLE STEP CHANGE INDEX SELECTED ON CLICK @@@@@@@@ ',
      collectedIndex,
    );
    setStepBeforeIndex(collectedIndex);
    // if(collectedIndex){
    //     console.log("STEP INDEX SELECTRED","HANDLE STEP CHANGE INDEX SELECTED ON CLICK INSIDE IF " , collectedIndex );
    //     return (
    //         <View style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
    //             <Text> Me Clicked </Text>
    //             <Image style={{ height: 40, width: 40, alignSelf: 'center' }} source={tick} />
    //         </View>
    //     )
    // }

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
    const newUsers = [...SOPsteps];
    console.log(
      'STEP INDEX SELECTRED',
      'HANDLE STEP CHANGE INDEX SELECTED ON CLICK @@@@@@@@ ',
      JSON.stringify(newUsers),
    );

    newUsers[collectedIndex].StepID = images();

    setSOPSteps(newUsers);
  };

  const handlechange = stepClickedIndex => {
    // console.log("STEP INDEX SELECTRED","STEP INDEX SELECTED ON CLICK @@@@@@@@ " , stepClickedIndex);
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
    const newUsers = [...SOPsteps];

    newUsers[stepClickedIndex].id = images();

    setListdata(newUsers);
    setSOPSteps(newUsers);
  };

  return (
    <View style={styles.MainContainer}>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: 'white',
          height: 170,
          elevation: 5,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <Text
          style={{
            color: coloring,
            fontSize: 15,
            fontWeight: '600',
            margin: 20,
          }}>
          No .of Steps involved in Installation Process : {SOPsteps.length}{' '}
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={SOPsteps}
          renderItem={({item, index: findex}) => {
            return (
              <View
                key={stepClickedIndex}
                style={{
                  margin: 25,
                  height: findex == stepClickedIndex ? 80 : 40,
                  width: findex == stepClickedIndex ? 80 : 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: coloring,
                  borderRadius: 40,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    scrollRef.current.scrollTo({x: screenWidth}) &
                      setStepClickedIndex(stepClickedIndex + 1) &
                      setStepClickBoolean(false) &
                      handleStepChange(findex);
                    handlechange(stepClickedIndex);
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                    {item.StepID}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      <View style={{flex: 2}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={scrollRef}>
          <View style={styles.ScrollContainer}>
            <View>
              {SOPsteps.map((step, stepIndex) => {
                return (
                  <View>
                    {(() => {
                      if (stepIndex == stepClickedIndex) {
                        return (
                          <View>
                            <Text
                              style={{
                                color: coloring,
                                fontSize: 15,
                                fontWeight: '600',
                                margin: 20,
                              }}>
                              {' '}
                              Present Step : {step.StepID}
                            </Text>
                            {step.Activities.map(activities => {
                              return (
                                <View
                                  style={{
                                    margin: 10,
                                    backgroundColor: 'white',
                                    elevation: 5,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    flexDirection: 'column',
                                    borderBottomRightRadius: 20,
                                  }}>
                                  <Text
                                    style={{
                                      color: coloring,
                                      fontWeight: '500',
                                      fontSize: 14,
                                      marginLeft: 10,
                                    }}>
                                    {' '}
                                    Activity: {activities.ActivityID}
                                  </Text>
                                  <Text
                                    style={{
                                      color: coloring,
                                      fontWeight: '500',
                                      fontSize: 14,
                                      margin: 10,
                                    }}>
                                    {' '}
                                    Activity: {activities.Activity}
                                  </Text>
                                </View>
                              );
                            })}
                          </View>
                        );
                      }
                      return null;
                    })()}
                  </View>
                );
              })}
            </View>

            {/* <TouchableOpacity style={{
                                        }} onPress={() => {
                                            scrollRef.current.scrollTo({ x: screenWidth }) & setIndex(index + 1) & setBoolean1(false) & handlechange(index)
                                        }}>
                                        <Text style={[GlobalStyles.button, { backgroundColor: coloring }]}>Save</Text>
                                    </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>

      <View>
        <View style={styles.ScrollContainer1}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigation.navigate('Signature', {
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
                workStartedDateTime: workStartedDateTime,
              });
              //& handlechange(index) & setIndex(index + 1)
            }}>
            <Text style={[GlobalStyles.button, {backgroundColor: coloring}]}>
              Go Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  scrollViewContainer: {
    justifyContent: 'space-around',
    backgroundColor: 'blue',
  },
  ScrollContainer: {
    flexGrow: 1,
    marginTop: 0,
    //marginHorizontal:screenWidth
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
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
});
