import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;
import { useTranslation } from 'react-i18next';

import tick from '../../../images/tick.png'; // Make sure this path is correct
import { GlobalStyles } from '../appstyles/GlobalStyles';

const StepperLogic = ({ navigation, route }) => {
  const { t } = useTranslation();
  const {
    color,
    Language,
    AssetDetails,
    resourceName,
    resourceid,
    existingAssetId,
    passid,
    latitude,
    longitude,
    maintenancetype,
    mapresourceid,
    LanguageOpt,
  } = route.params;

  console.log('Stepper Logic Page', resourceName, resourceid, existingAssetId);
  const [getid, setGetid] = useState(passid);
  const [SOPsteps, setSOPSteps] = useState([]);
  const [stepClickedIndex, setStepClickedIndex] = useState(0);
  const [finalStepIndex, setFinalStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]); // Track completed steps

  const scrollRef = useRef();

  const [sopResponse, setSopResponse] = useState([
    {
      SopId: '1234',
      Name: 'TMU Maintenance',
      InstallationId: 'TMU_I-23455678',
      Steps: [
        {
          StepID: 1,
          StepName: 'TMU Maintenance Step - 1',
          Activities: [
            { ActivityID: 1, Activity: 'Location Finding' },
            { ActivityID: 2, Activity: 'Receive Exact Location from Department' },
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
          StepName: 'TMU Maintenance Step - 2',
          Activities: [
            { ActivityID: 3, Activity: 'Transportation & Precheck' },
            { ActivityID: 4, Activity: 'Reach the Production Company' },
          ],
        },
        {
          StepID: 3,
          StepName: 'TMU Maintenance Step - 3',
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
          StepName: 'TMU Maintenance Step - 4',
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
          StepName: 'TMU Maintenance Step - 5',
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
          StepName: 'TMU Maintenance Step - 6',
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
          StepName: 'TMU Maintenance Step - 7',
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
        // Add more steps similarly
      ],
    },
  ]);

  useEffect(() => {
    sopResponse.map(sop => {
      console.log('hello react native', sop.Steps.length);
      setSOPSteps(sop.Steps);
      setFinalStepIndex(sop.Steps.length);
    });
  }, [sopResponse]);

  const handleNext = () => {
    if (stepClickedIndex < finalStepIndex - 1) {
      scrollRef.current.scrollTo({
        x: screenWidth * (stepClickedIndex + 1),
        animated: true,
      });
      setStepClickedIndex(stepClickedIndex + 1);
      setCompletedSteps([...completedSteps, stepClickedIndex]); // Mark the current step as completed
    } else if (stepClickedIndex === finalStepIndex - 1) {
      // You are on the last step, show the "Go Next" button
      setStepClickedIndex(finalStepIndex); // Disable the "Next" button
    }
  };

  const handleBack = () => {
    if (stepClickedIndex > 0) {
      scrollRef.current.scrollTo({
        x: screenWidth * (stepClickedIndex - 1),
        animated: true,
      });
      setStepClickedIndex(stepClickedIndex - 1);
      setCompletedSteps(
        completedSteps.filter(index => index !== stepClickedIndex - 1),
      ); // Remove the completion tick
    }
  };

  const isStepCompleted = index => {
    return completedSteps.includes(index);
  };

  const getStepStyle = index => {
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
      <View style={styles.Header}>
        <Text
          style={{ color: color, fontSize: 14.5, fontWeight: '600', margin: 20 }}>
          {t('Steps_in_Process')}: {SOPsteps.length}
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={SOPsteps}
          renderItem={({ item, index }) => {
            return (
              <View key={item.StepID} style={styles.stepCircleContainer}>
                {isStepCompleted(index) ? (
                  <Image source={tick} style={styles.tickImage} />
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
        ref={scrollRef}
        pagingEnabled>
        <View style={styles.ScrollContainer}>
          {SOPsteps.map((step, index) => (
            <View key={index} style={styles.StepContainer}>
              {stepClickedIndex === index && (
                <View>
                  <Text
                    style={{
                      color: color,
                      fontSize: 15,
                      fontWeight: '600',
                      margin: 20,
                    }}>
                    {t('Present_Step')}: {step.StepID}
                  </Text>
                  {step.Activities.map(activity => (
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
                          color: color,
                          fontWeight: '500',
                          fontSize: 14,
                          marginLeft: 10,
                        }}>
                        {' '}
                        Activity: {activity.ActivityID}
                      </Text>
                      <Text
                        style={{
                          color: color,
                          fontWeight: '500',
                          fontSize: 14,
                          margin: 10,
                        }}>
                        {' '}
                        Activity: {activity.Activity}
                      </Text>
                    </View>
                  ))}
                  <View style={styles.ButtonContainer}>
                    <TouchableOpacity
                      onPress={handleBack}
                      disabled={stepClickedIndex === 0}>
                      <AntDesign name="leftcircle" color="#000" size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate('MaintananceCaptureSignature', {
                        color: color,
                        Language,
                        AssetDetails,
                        resourceid,
                        mapresourceid,
                        getid,
                        existingAssetId,
                        latitude,
                        longitude,
                        maintenancetype: maintenancetype,
                        resourceName: resourceName,
                        LanguageOpt: LanguageOpt,
                      });
                    }}
                      style={{ height: 50, backgroundColor: "#000000", borderRadius: 40, paddingHorizontal: 30, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: '900', fontSize: 16 }}>
                        Skip
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleNext}
                    // disabled={stepClickedIndex === finalStepIndex - 1}
                    >
                      <AntDesign name="rightcircle" color="#000" size={50} />

                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          ))}
          {stepClickedIndex === finalStepIndex && (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                onPress={handleBack}
                disabled={stepClickedIndex === 0}>
                <AntDesign name="leftcircle" color="#000" size={50} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MaintananceCaptureSignature', {
                    color: color,
                    Language,
                    AssetDetails,
                    resourceid,
                    mapresourceid,
                    getid,
                    existingAssetId,
                    latitude,
                    longitude,
                    maintenancetype: maintenancetype,
                    resourceName: resourceName,
                    LanguageOpt: LanguageOpt,
                  });
                }}>
                <AntDesign name="rightcircle" color="#000" size={50} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default StepperLogic;

const styles = StyleSheet.create({
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
  button: {
    padding: 10,
    borderRadius: 5,
    width: 120,
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
