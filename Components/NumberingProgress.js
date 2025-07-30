import React, { useState, useEffect, useRef } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign';
//import tick from '../images/tick.png';

import { HeaderStyleInterpolators } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import tick from '../images/tick.png';
import { GlobalStyles } from '../appstyles/GlobalStyles';

import CheckNetworkConnectivity from '../ReusableFunctions/CheckNetworkConnectivity';
import TODOService from '../ReUsableMethods/TODOService';
import { LogMessages } from '../LogManager/LogMessages';

const NumberingProgress = ({ navigation, route }) => {
  // const { coloring, Language,latitude,longitude } = route.params;

  // const [geolatitude,setGeolatitude]=useState(latitude)
  // const [geolongitude,setGeolongitude]=useState(longitude)

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
    LanguageOpt,
    assettypename
  } = route.params;

  const [posts, setPosts] = useState([]);
  const [SOPsteps, setSOPSteps] = useState([]);
  const [stepClickedIndex, setStepClickedIndex] = useState(0);
  const [SOPactivities, setSOPActivities] = useState([]);
  const [finalStepIndex, setFinalStepIndex] = useState(0);
  const [userClickedIndex, setUserClickedIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  // Function to open and close the modal

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    let assetID = selectedAssetDetails.assetId;
    // getAssetSOP_ByAssetID(); // call when api fixed until static sop format used for api response ...
  }, [selectedAssetDetails]);

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

  const getAssetSOP_ByAssetID = async () => {
    const req_url =
      'http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/installationdata/SopDetails/1234';
    // console.log(
    //   'Installation SOP Request ### ',
    //   'Installation SOP Request ',
    //   req_url,
    // );
    let token = '';
    // console.log('Request Fired ##### ');
    try {
      const { data, status } = await todoService.fetchSOP_withoutToken(req_url);
      // console.log('INSTALLATION DASHBOARD', status, data);
      setPosts(data);
    } catch (err) {
      // handle rejection
      console.error(err);
    }
  };

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

  // console.log(
  //     'Installation SOP Response ### ',
  //     'Installation SOP Response ### ' + JSON.stringify(sopResponse)
  // );

  useEffect(() => {
    {
      sopResponse.map(sop => {
        // console.log(
        //   'Installation SOP Response ### ',
        //   'Installation SOP steps 1 ### ' + sop.SopId,
        //   sop.Name,
        //   sop.InstallationId,
        //   sop.Steps.length,
        // );
        setSOPSteps(sop.Steps);
        setFinalStepIndex(sop.Steps.length);
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
      // console.log('Fetched Data:', result);
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
            style={{ height: 40, width: 40, alignSelf: 'center' }}
            source={tick}
          />
        </View>
      );
    };
    const newUsers = [...SOPsteps];
    // console.log(
    //   'STEP INDEX SELECTRED',
    //   'HANDLE STEP CHANGE INDEX SELECTED ON CLICK @@@@@@@@ ',
    //   JSON.stringify(newUsers),
    // );

    newUsers[index].StepID = images();

    setSOPSteps(newUsers);

    setUserClickedIndex(index);
    // const newUsers = [...sopData];
    // newUsers[index].id = images();
    // setListdata(newUsers);
  };
  const [completedSteps, setCompletedSteps] = useState([]); // Track completed steps

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

  const handleNext = () => {
    if (stepClickedIndex < finalStepIndex - 1) {
      scrollRef.current.scrollTo({ x: screenWidth * (stepClickedIndex + 1), animated: true });
      setStepClickedIndex(stepClickedIndex + 1);
      setCompletedSteps([...completedSteps, stepClickedIndex]); // Mark the current step as completed
    }
    else if (stepClickedIndex === finalStepIndex - 1) {
      // You are on the last step, show the "Go Next" button
      setStepClickedIndex(finalStepIndex); // Disable the "Next" button
    }
  };
  const handleBack = () => {
    if (stepClickedIndex > 0) {
      scrollRef.current.scrollTo({ x: screenWidth * (stepClickedIndex - 1), animated: true });
      setStepClickedIndex(stepClickedIndex - 1);
      setCompletedSteps(completedSteps.filter(index => index !== stepClickedIndex - 1)); // Remove the completion tick
    }
  };

  const isStepCompleted = (index) => {
    return completedSteps.includes(index);
  };

  const getStepStyle = (index) => {
    if (isStepCompleted(index)) {
      return styles.tickImage; // Completed step, display tick mark
    } else if (index === stepClickedIndex) {
      return [styles.stepCircle, styles.currentStep]; // Current step, larger circle
    } else if (index > stepClickedIndex) {
      return [styles.stepCircle, styles.forwardStep]; // Forward step, smaller circle
    }
    return styles.stepCircle; // Default style
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
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              flex: 2,
              color: coloring,
              fontSize: 13,
              fontWeight: '600',
              margin: 20,
            }}>
            {LanguageOpt('Steps_In_Installation_Process')} : {SOPsteps.length}{' '}
          </Text>
          {/* <Text
            style={{
              flex: 2,
              color: coloring,
              fontSize: 15,
              fontWeight: '600',
              margin: 20,
            }}>
            No .of Steps involved in Installation Process : {SOPsteps.length}{' '}
          </Text> */}
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: coloring,
              borderRadius: 15,
              elevation: 1,
              height: 50,
              width: 50,
              backgroundColor: 'white',
              marginRight: 10,
              marginTop: 10,
              justifyContent: 'center',
            }}
            onPress={() => {
              toggleModal();
            }}>
            <Image
              style={{ height: 30, width: 30, alignSelf: 'center' }}
              source={require('../images/view_sop.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal} // Handle Android back button press
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}> {LanguageOpt('SOP_Steps')} </Text>
                <ScrollView>
                  {SOPsteps.map(item => (
                    <View key={item.id}>
                      <Text
                        style={{
                          color: coloring,
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        {LanguageOpt('Step')} {item.StepID}
                      </Text>
                      {item.Activities.map(activities => {
                        return (
                          <View
                            style={{
                              backgroundColor: '#ffffff',
                              borderRadius: 10,
                              borderColor: '#eee',
                              borderWidth: 1,
                              flexDirection: 'column',
                              margin: 10,
                              elevation: 5,
                            }}>
                            <Text
                              style={{
                                color: '#909090',
                                fontWeight: '500',
                                fontSize: 14,
                                marginLeft: 10,
                              }}>
                              {' '}
                              {LanguageOpt('Activity')}: {activities.ActivityID}
                            </Text>
                            <Text
                              style={{
                                color: '#909090',
                                fontWeight: '500',
                                fontSize: 14,
                                margin: 10,
                              }}>
                              {' '}
                              {LanguageOpt('Activity')}: {activities.Activity}
                            </Text>
                          </View>
                          // <View
                          //   stytle={{
                          //     margin: 10,
                          //     backgroundColor: '#ffffff',
                          //     elevation: 5,
                          //     borderTopLeftRadius: 20,
                          //     borderTopRightRadius: 20,
                          //     borderBottomLeftRadius: 20,
                          //     flexDirection: 'column',
                          //     borderBottomRightRadius: 20,
                          //     borderColor: '#909090',
                          //   }}>
                          //   <Text
                          //     style={{
                          //       color: '#909090',
                          //       fontWeight: '500',
                          //       fontSize: 14,
                          //       marginLeft: 10,
                          //     }}>
                          //     {' '}
                          //     Activity: {activities.ActivityID}
                          //   </Text>
                          //   <Text
                          //     style={{
                          //       color: '#909090',
                          //       fontWeight: '500',
                          //       fontSize: 14,
                          //       margin: 10,
                          //     }}>
                          //     {' '}
                          //     Activity: {activities.Activity}
                          //   </Text>
                          // </View>
                        );
                      })}
                    </View>
                  ))}
                </ScrollView>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>{LanguageOpt('Close')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={SOPsteps}
          renderItem={({ item, index }) => {
            return (
              <View key={item.StepID} style={{
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
                {isStepCompleted(index) ? (
                  <Image
                    source={tick}
                    style={styles.tickImage}
                  />
                ) : (
                  <View style={getStepStyle(index)}>
                    <Text style={styles.stepNumber}>{item.StepID}</Text>
                  </View>
                )}
              </View>
            );
          }}
        />
      </View>

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
                            {LanguageOpt('Current_Step')} : {step.StepID}
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
                                  {LanguageOpt('Activity')}: {activities.ActivityID}
                                </Text>
                                <Text
                                  style={{
                                    color: coloring,
                                    fontWeight: '500',
                                    fontSize: 14,
                                    margin: 10,
                                  }}>
                                  {' '}
                                  {LanguageOpt('Activity')}: {activities.Activity}
                                </Text>
                              </View>
                            );
                          })}
                          <View style={styles.ButtonContainer}>
                            <TouchableOpacity
                              onPress={handleBack}
                              disabled={stepClickedIndex === 0}
                            >
                              <AntDesign name="leftcircle" color="#000" size={50} />
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => {
                              navigation.navigate('Signature', {
                                AssetDetails: item, //Language.dtData,
                                item: item, //Language.AssetDataTitleTextDT,
                                color: '#E27D39',
                                Language: Language,
                                assettypename: assettypename,
                                resourceId: resourceId,
                                address: address,
                                geoLocation: geoLocation,
                                selectedAssetDetails: selectedAssetDetails,
                                coloring: coloring,
                                Language: Language,
                                AssetDetails: AssetDetails,
                                LanguageOpt: LanguageOpt,
                                item: item,
                                workStartedDateTime: workStartedDateTime,
                              });
                            }}
                              style={{ height: 50, backgroundColor: "#000000", borderRadius: 40, paddingHorizontal: 30, alignItems: 'center', justifyContent: 'center' }}>
                              <Text style={{ fontWeight: '900', color: '#fff', fontSize: 16 }}>
                                Skip
                              </Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity
                              onPress={handleNext}
                            // disabled={stepClickedIndex === finalStepIndex - 1}
                            >
                              <AntDesign name="rightcircle" color="#000" size={50} />
                            </TouchableOpacity>
                          </View>
                        </View>
                      );
                    }
                    return null;
                  })()}
                </View>
              );
            })}
            {stepClickedIndex === finalStepIndex && (
              <View style={styles.ButtonContainer}>
                <TouchableOpacity
                  onPress={handleBack}
                  disabled={stepClickedIndex === 0}
                >
                  <Text>
                    <AntDesign name="leftcircle" color="#000" size={50} />
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Signature', {
                      AssetDetails: item, //Language.dtData,
                      item: item, //Language.AssetDataTitleTextDT,
                      color: '#E27D39',
                      Language: Language,
                      resourceId: resourceId,
                      assettypename: assettypename,
                      address: address,
                      geoLocation: geoLocation,
                      selectedAssetDetails: selectedAssetDetails,
                      coloring: coloring,
                      Language: Language,
                      AssetDetails: AssetDetails,
                      LanguageOpt: LanguageOpt,
                      item: item,
                      workStartedDateTime: workStartedDateTime,
                    });
                  }}
                >
                  <Text>
                    <AntDesign name="rightcircle" color="#000" size={50} />
                  </Text>
                </TouchableOpacity> */}
              </View>
            )}
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
  );
};
export default NumberingProgress;
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: screenWidth - 50,
    height: DEVICE_HEIGHT - 150,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  MainContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  Header: {
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 170,
    elevation: 5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  stepCircleContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  stepCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  stepNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  tickImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  currentStep: {
    height: 80,
    width: 80,
    backgroundColor: '#18253f',
  },
  forwardStep: {
    height: 40,
    width: 40,
    backgroundColor: '#18253f',
  },
  ScrollContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  ScrollContainer: {
    width: screenWidth,
  },
  ActivityContainer: {
    margin: 5,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  buttonNext: {
    borderRadius: 40,
    padding: 10,
    // width:180,
    marginHorizontal: 10,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 16,
    color: '#fff',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  FinalButtonContainer: {
    margin: 20,
    alignItems: 'center',
  },
});

{
  /* <ScrollView
                horizontal={true}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                ref={scrollRef}>
                <View style={styles.ScrollContainer}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginTop: DEVICE_HEIGHT * 0.05, marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepID:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[0].StepID}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepName:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[0].StepName}</Text>
                    </View>
                    <ScrollView style={{
                        // backgroundColor: 'lightblue', // Background color for ScrollView
                        marginHorizontal: DEVICE_WIDTH * 0.04,
                        marginBottom: DEVICE_HEIGHT * 0.12,
                        marginTop: DEVICE_HEIGHT * 0.04  // Padding for the entire ScrollView

                    }} showsVerticalScrollIndicator={false}>

                        {sopResponse[0].Steps[0].Activities.map((item) => {
                            return (
                                <View style={{ marginVertical: 15, borderRadius: 15, elevation: 5, alignSelf: 'center', padding: 15, backgroundColor: '#fff', width: DEVICE_WIDTH * 0.75 }}>

                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>ActivityID:</Text>
                                        <Text>{item.ActivityID}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>Activity:</Text>
                                        <Text style={{ flex: 1 }}>{item.Activity}</Text>
                                    </View>
                                </View>

                            )
                        })}

                    </ScrollView>

                    <TouchableOpacity style={{
                         alignSelf: 'center', position: 'absolute', bottom: DEVICE_HEIGHT * 0.04
                    }} onPress={() => {
                        scrollRef.current.scrollTo({ x: screenWidth }) & setIndex(index + 1) & handlechangse(index)
                    }}
                    >
                        <Text style={[styles.button, { backgroundColor: "green" }]}>01</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.ScrollContainer}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginTop: DEVICE_HEIGHT * 0.05, marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepID:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[1].StepID}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepName:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[1].StepName}</Text>
                    </View>
                    <ScrollView style={{
                        // backgroundColor: 'lightblue', // Background color for ScrollView
                        marginHorizontal: DEVICE_WIDTH * 0.04,
                        marginBottom: DEVICE_HEIGHT * 0.12,
                        marginTop: DEVICE_HEIGHT * 0.04  // Padding for the entire ScrollView

                    }} showsVerticalScrollIndicator={false}>

                        {sopResponse[0].Steps[1].Activities.map((item) => {
                            return (
                                <View style={{ marginVertical: 15, borderRadius: 15, elevation: 5, alignSelf: 'center', padding: 15, backgroundColor: '#fff', width: DEVICE_WIDTH * 0.75 }}>

                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>ActivityID:</Text>
                                        <Text>{item.ActivityID}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>Activity:</Text>

                                        <Text style={{ flex: 1 }}>{item.Activity}</Text>

                                    </View>
                                </View>

                            )
                        })}

                    </ScrollView>
                    <TouchableOpacity style={{
                         alignSelf: 'center', position: 'absolute', bottom: DEVICE_HEIGHT * 0.04

                    }} onPress={() => {
                        scrollRef.current.scrollTo({ x: screenWidth * 2 }) & setIndex(index + 1) & handlechangse(index)
                    }}
                    >

                        <Text style={[styles.button, { backgroundColor: "green" }]}>02</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ScrollContainer}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginTop: DEVICE_HEIGHT * 0.05, marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepID:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[2].StepID}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepName:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[2].StepName}</Text>
                    </View>
                    <ScrollView style={{
                        // backgroundColor: 'lightblue', // Background color for ScrollView
                        marginHorizontal: DEVICE_WIDTH * 0.04,
                        marginBottom: DEVICE_HEIGHT * 0.12,
                        marginTop: DEVICE_HEIGHT * 0.04  // Padding for the entire ScrollView

                    }} showsVerticalScrollIndicator={false}>

                        {sopResponse[0].Steps[2].Activities.map((item) => {
                            return (
                                <View style={{ marginVertical: 15, borderRadius: 15, elevation: 5, alignSelf: 'center', padding: 15, backgroundColor: '#fff', width: DEVICE_WIDTH * 0.75 }}>

                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>ActivityID:</Text>
                                        <Text>{item.ActivityID}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>Activity:</Text>

                                        <Text style={{ flex: 1 }}>{item.Activity}</Text>

                                    </View>
                                </View>

                            )
                        })}

                    </ScrollView>

                    <TouchableOpacity style={{
                     alignSelf: 'center', position: 'absolute', bottom: DEVICE_HEIGHT * 0.04

                    }} onPress={() => {
                        scrollRef.current.scrollTo({ x: screenWidth * 3 }) & setIndex(index + 1) & handlechangse(index)
                    }}
                    >
                        <Text style={[styles.button, { backgroundColor: "green" }]}>03</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ScrollContainer}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginTop: DEVICE_HEIGHT * 0.05, marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepID:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[3].StepID}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepName:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[3].StepName}</Text>
                    </View>
                    <ScrollView style={{
                        // backgroundColor: 'lightblue', // Background color for ScrollView
                        marginHorizontal: DEVICE_WIDTH * 0.04,
                        marginBottom: DEVICE_HEIGHT * 0.12,
                        marginTop: DEVICE_HEIGHT * 0.04  // Padding for the entire ScrollView

                    }} showsVerticalScrollIndicator={false}>

                        {sopResponse[0].Steps[3].Activities.map((item) => {
                            return (
                                <View style={{ marginVertical: 15, borderRadius: 15, elevation: 5, alignSelf: 'center', padding: 15, backgroundColor: '#fff', width: DEVICE_WIDTH * 0.75 }}>

                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>ActivityID:</Text>
                                        <Text>{item.ActivityID}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>Activity:</Text>

                                        <Text style={{ flex: 1 }}>{item.Activity}</Text>

                                    </View>
                                </View>

                            )
                        })}

                    </ScrollView>

                    <TouchableOpacity style={{
                         alignSelf: 'center', position: 'absolute', bottom: DEVICE_HEIGHT * 0.04

                        // borderRadius: 40,
                        // alignSelf: 'center', marginBottom: 5
                    }} onPress={() => {
                        scrollRef.current.scrollTo({ x: screenWidth * 4 }) & setIndex(index + 1) & handlechangse(index)

                        // navigation.navigate('SignatureCapturepage', { Language: Language }) & handlechangse(index) & setIndex(index + 1)
                    }}
                    >
                        <Text style={[styles.button, { backgroundColor: "green", }]}>04</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.ScrollContainer}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginTop: DEVICE_HEIGHT * 0.05, marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepID:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[4].StepID}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepName:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[4].StepName}</Text>
                    </View>
                    <ScrollView style={{
                        // backgroundColor: 'lightblue', // Background color for ScrollView
                        marginHorizontal: DEVICE_WIDTH * 0.04,
                        marginBottom: DEVICE_HEIGHT * 0.12,
                        marginTop: DEVICE_HEIGHT * 0.04  // Padding for the entire ScrollView

                    }} showsVerticalScrollIndicator={false}>

                        {sopResponse[0].Steps[4].Activities.map((item) => {
                            return (
                                <View style={{ marginVertical: 15, borderRadius: 15, elevation: 5, alignSelf: 'center', padding: 15, backgroundColor: '#fff', width: DEVICE_WIDTH * 0.75 }}>

                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>ActivityID:</Text>
                                        <Text>{item.ActivityID}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>Activity:</Text>

                                        <Text style={{ flex: 1 }}>{item.Activity}</Text>

                                    </View>
                                </View>

                            )
                        })}

                    </ScrollView>

                    <TouchableOpacity style={{
                         alignSelf: 'center', position: 'absolute', bottom: DEVICE_HEIGHT * 0.04

                        // borderRadius: 40,
                        // alignSelf: 'center', marginBottom: 5
                    }} onPress={() => {
                        scrollRef.current.scrollTo({ x: screenWidth * 5 }) & setIndex(index + 1) & handlechangse(index)

                        // navigation.navigate('SignatureCapturepage', { Language: Language }) & handlechangse(index) & setIndex(index + 1)
                    }}
                    >
                        <Text style={[styles.button, { backgroundColor: "green", }]}>05</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.ScrollContainer}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginTop: DEVICE_HEIGHT * 0.05, marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepID:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[5].StepID}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepName:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[5].StepName}</Text>
                    </View>
                    <ScrollView style={{
                        // backgroundColor: 'lightblue', // Background color for ScrollView
                        marginHorizontal: DEVICE_WIDTH * 0.04,
                        marginBottom: DEVICE_HEIGHT * 0.12,
                        marginTop: DEVICE_HEIGHT * 0.04  // Padding for the entire ScrollView

                    }} showsVerticalScrollIndicator={false}>

                        {sopResponse[0].Steps[5].Activities.map((item) => {
                            return (
                                <View style={{ marginVertical: 15, borderRadius: 15, elevation: 5, alignSelf: 'center', padding: 15, backgroundColor: '#fff', width: DEVICE_WIDTH * 0.75 }}>

                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>ActivityID:</Text>
                                        <Text>{item.ActivityID}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>Activity:</Text>

                                        <Text style={{ flex: 1 }}>{item.Activity}</Text>

                                    </View>
                                </View>

                            )
                        })}

                    </ScrollView>

                    <TouchableOpacity style={{
                 alignSelf: 'center', position: 'absolute', bottom: DEVICE_HEIGHT * 0.04

                        // borderRadius: 40,
                        // alignSelf: 'center', marginBottom: 5
                    }} onPress={() => {
                        scrollRef.current.scrollTo({ x: screenWidth * 6 }) & setIndex(index + 1) & handlechangse(index)

                        // navigation.navigate('SignatureCapturepage', { Language: Language }) & handlechangse(index) & setIndex(index + 1)
                    }}
                    >
                        <Text style={[styles.button, { backgroundColor: "green", }]}>06</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.ScrollContainer}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginTop: DEVICE_HEIGHT * 0.05, marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepID:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[6].StepID}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: (DEVICE_WIDTH - (DEVICE_WIDTH * 0.84)) / 2 }}>
                        <Text style={{ color: '#909090', fontWeight: 'bold', fontSize: 20 }}>StepName:</Text>
                        <Text style={{ color: '#909090', fontSize: 20 }}>{sopResponse[0].Steps[6].StepName}</Text>
                    </View>
                    <ScrollView style={{
                        // backgroundColor: 'lightblue', // Background color for ScrollView
                        marginHorizontal: DEVICE_WIDTH * 0.04,
                        marginBottom: DEVICE_HEIGHT * 0.12,
                        marginTop: DEVICE_HEIGHT * 0.04  // Padding for the entire ScrollView

                    }} showsVerticalScrollIndicator={false}>

                        {sopResponse[0].Steps[6].Activities.map((item) => {
                            return (
                                <View style={{ marginVertical: 15, borderRadius: 15, elevation: 5, alignSelf: 'center', padding: 15, backgroundColor: '#fff', width: DEVICE_WIDTH * 0.75 }}>

                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>ActivityID:</Text>
                                        <Text>{item.ActivityID}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold', width: 80 }}>Activity:</Text>
                                        <Text style={{ flex: 1 }}>{item.Activity}</Text>
                                    </View>
                                </View>
                            )
                        })}

                    </ScrollView>

                    <TouchableOpacity style={{
                         alignSelf: 'center', position: 'absolute', bottom: DEVICE_HEIGHT * 0.04
                    }} onPress={() => {
                        scrollRef.current.scrollTo({ x: screenWidth * 7 }) & setIndex(index + 1) & handlechangse(index)

                      //  navigation.navigate('SignatureCapturepage', { Language: Language,latitude:specificLocation.latitude,longitude:specificLocation.longitude }) & handlechangse(index) & setIndex(index + 1)
                    }}
                    >
                        <Text style={[styles.button, { backgroundColor: "green", }]}>07</Text>
                    </TouchableOpacity>

                </View>
                
            </ScrollView> */
}
