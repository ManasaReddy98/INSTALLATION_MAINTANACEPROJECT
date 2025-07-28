import React, {useRef, useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Alert,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import SignatureCapture from 'react-native-signature-capture';
import Geolocation from '@react-native-community/geolocation';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
import {useTranslation} from 'react-i18next';

const SignatureCapturepage = ({route}) => {
  const isFirstRender = useRef(true); // Track if it's the first render

  const {t} = useTranslation();
  const {
    Language,
    resourceid,
    color,
    AssetDetails,
    imageUri,
    existingAssetId,
    getid,
    base64image,
    latitude,
    longitude,
    maintenancetype,
    mapresourceid,
    resourceName,
    LanguageOpt,
  } = route.params;

  console.log('Signature Capture  Page', resourceName, resourceid);
  const navigation = useNavigation();
  const sign = useRef(null);
  const [signatureImage, setSignatureImage] = useState(null);
  const [serviceNumber, setServiceNumber] = useState('');
  const [installationremarks, setInstallationremarks] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);

  const [oldReading, setOldReading] = useState('');
  const [loading, setLoading] = useState('false');
  const [modalVisible, setModalVisible] = useState('false');
  const [dragged, setDragged] = useState(false);
  console.log('MAPPED RESOURCE ID @@@@@@@@@@@@@@@' + mapresourceid);
  const _onDragEvent = () => {
    setDragged(true);
    console.log('dragged');
  };

  const saveSign = () => {
    // console.log('MANASA');
    if (dragged) {
      sign.current.saveImage();
    } else {
      Alert.alert(t('sign_error'));
    }
  };

  const resetSign = () => {
    setDragged(false);
    sign.current.resetImage();
  };

  const _onSaveEvent = result => {
    alert(t('sign_success'));
    // console.log(result.encoded)
    setSignatureImage(result.encoded);
  };
  const requestLocationPermission = useCallback(async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Location Permission',
          message: 'Cool Photo App needs access to your Location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const flag = useRef(true);
  useEffect(() => {
    const getLocationPermission = async () => {
      if (imageUri) {
        flag.current = false;
        await requestLocationPermission();
      }
    };

    getLocationPermission();
  }, [imageUri]);

  const [locationerror, setLocationerror] = useState('');
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        if (flag.current == false) {
          setCurrentLocation({latitude, longitude});
        }
        setLoading(false);
        setModalVisible(false);
        console.log('map coordinates', latitude, longitude);
      },
      error => {
        // console.error('Error getting current position:', error);
        if (error.code === 2) {
          // Error code 2 indicates that no location provider is (available)
          setLocationerror(
            'Location services are disabled. Please enable them to use this feature.',
          );
          // alert('Location services are disabled. Please enable them to use this feature.');
        } else {
          // Other errors
          alert('Error getting current position: ' + error.message);
        }
        setLoading(false);
        setModalVisible(false);
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Set to false after the first render
      // Request location permission only on the first render
      requestLocationPermission();
    }
  }, []);

  const getCurrentDateTime = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate
      .getMilliseconds()
      .toString()
      .padStart(7, '0'); // Pad milliseconds to 7 digits

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  const handlePostRequest = async () => {
    if (!signatureImage) {
      Alert.alert(t('sign_error'));
      return;
    }
    if (!imageUri) {
      Alert.alert(t('capture_error'));
      return;
    }

    if (!serviceNumber) {
      Alert.alert(t('service_error'));
      return;
    }
    if (serviceNumber.length > 11) {
      Alert.alert(t('service_length_error'));
      return;
    }
    if (!installationremarks) {
      Alert.alert(t('remarks_error'));
      return;
    }
    if (!oldReading) {
      Alert.alert(t('old_reading_error'));
      return;
    }

    // Usage
    const formattedDateTime = getCurrentDateTime();
    // Example Output: "2024-04-02 01:27:00.0000000"

    const url = `http://mapp.eficaa.com:8080/EMap_WebIntegrator_ms/maintenancedata/updatemaintenance/${existingAssetId}/${getid}`;

    const payload = {
      maintenancedOn: formattedDateTime,
      sts: formattedDateTime,
      maintenanceType: maintenancetype,
      remarks: installationremarks,
      createdBy: resourceid,
      oldReading: oldReading,
      technicianId: resourceid,
      approvedByUsername: 'EFICAA ENSMART',
      approvalStatus: 'CON_000065',
      approvalRemarks: 'REMARKS',
      approvedOn: formattedDateTime,
      servicenumber: serviceNumber,
      sopId: '',
      geoLatitude: currentLocation?.latitude,
      geoLongitude: currentLocation?.longitude,
      assetMainStatusCode: 'CON_000067',
      actionTakenOn: formattedDateTime,
      fileContent: base64image,
      resourceSign: signatureImage,
    };
    setLoading('true');
    setModalVisible('true');
    console.log('URL' + url);
    console.log('PAYLOAD #####' + JSON.stringify(payload));
    try {
      const response = await fetch(url, {
        method: 'POST', // Specify the HTTP method
        headers: {
          'Content-Type': 'application/json', // Set the content type
        },
        body: JSON.stringify(payload), // Convert the payload to a JSON string
      });

      const jsonResponse = await response.json(); // Parse the response as JSON
      console.log('jsonResponse', jsonResponse, '@@@@@@@@@', response.status); //status 201 -- Alert -(your Asset created successfully --ok button click -- navigate list view to AssetDataList )
      if (response.status == '200') {
        console.log('TRUE');

        Alert.alert('Asset Status Saved to DB successfully .....', '', [
          {
            text: 'OK',
            onPress: () =>
              navigation.navigate('MaintananceAssetDataList', {
                // AssetDetails: AssetDetails,
                // Language: Language,
                // resourceid: resourceid,
                // color: color,
                AssetDetails: AssetDetails,
                resourceName: resourceName,
                color: color,
                Language: Language,
                resourceid: resourceid,
                LanguageOpt: LanguageOpt,
              }),
          },
        ]);
      } else {
        setLoading('false');
        setModalVisible('false');
        console.log('FALSE');
        Alert.alert(
          'Asset Status Not Saved to DB , please try again after some time...',
        );
      }
    } catch (error) {
      setLoading('false');
      setModalVisible('false');
      console.error('Error:', error);
    }
  };

  const navigatetoCamera = () => {
    if (!locationerror) {
      navigation.navigate('Camerafunctionality', {
        resourceName: resourceName,
        latitude,
        longitude,
        Language: Language,
        getid: getid,
        mapresourceid: mapresourceid,
        maintenancetype: maintenancetype,
        resourceid: resourceid,
        color: color,
        AssetDetails: AssetDetails,
        existingAssetId: existingAssetId,
        LanguageOpt: LanguageOpt,
      });
    } else {
      Alert.alert(t('Location_error'));
    }
  };
  console.log('LOADING ', loading);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{flexGrow: 1}}>
        <View>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View>
              <View
                style={{
                  height: 100,
                  padding: 20,
                  backgroundColor: '#18253f',
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 40,
                }}>
                <Text style={{fontWeight: 'bold', color: '#fff'}}>
                  {existingAssetId}
                </Text>
                <Text style={{color: '#fff'}}>
                  {t('Location')}: {t('Not_Available')}
                </Text>
                <Text style={{color: '#fff'}}>
                  {t('Lat_Lon')}: {latitude}, {longitude}
                </Text>
              </View>

              <View style={styles.container}>
                <Text style={styles.title}>{t('Signature_Capture')}</Text>
                <SignatureCapture
                  style={styles.signature}
                  ref={sign}
                  onSaveEvent={_onSaveEvent}
                  minStrokeWidth={2}
                  maxStrokeWidth={2}
                  onDragEvent={_onDragEvent}
                  showNativeButtons={false}
                  showTitleLabel={false}
                  viewMode={'portrait'}
                />
                <TouchableHighlight
                  style={{
                    backgroundColor: 'green',
                    position: 'absolute',
                    width: 130,
                    height: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bottom: 0,
                    borderBottomLeftRadius: 15,
                  }}
                  onPress={saveSign}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    {t('Save')}
                  </Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={{
                    backgroundColor: '#6677cb',
                    position: 'absolute',
                    right: 0,
                    height: '20%',
                    width: 130,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomRightRadius: 15,
                  }}
                  onPress={resetSign}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    {t('Reset')}
                  </Text>
                </TouchableHighlight>
              </View>

              <View style={styles.ImageLocationView}>
                <View style={styles.row}>
                  <Text style={styles.text}>{t('Capture_Asset_Image')}</Text>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigatetoCamera()}>
                      <Image
                        style={{width: 30, height: 30}}
                        source={require('../../../images/camera_48.png')}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.imageContainer}>
                    {imageUri ? (
                      <Image
                        source={{uri: imageUri}}
                        style={styles.iconimage}
                      />
                    ) : null}
                  </View>
                  <Text style={{color: '#fff'}}>
                    {t('Location')}: {t('Not_Available')}
                  </Text>
                  <Text style={{color: '#fff'}}>
                    {t('Lat_Lon')}: {latitude}, {longitude}
                  </Text>
                </View>
                <View>
                  <Text style={styles.textLocation}>
                    {t('Location')}:{currentLocation?.latitude}{' '}
                    {currentLocation ? ',' : null} {currentLocation?.longitude}
                  </Text>
                </View>
              </View>
              <>
                <View style={styles.containerservice}>
                  <Text style={styles.label}> {t('Enter_Service_Number')}</Text>
                  <TextInput
                    style={styles.input}
                    value={serviceNumber}
                    keyboardType="numeric"
                    maxLength={11}
                    onChangeText={setServiceNumber}
                    placeholder={t('Enter_Service_Number')}
                  />
                </View>

                <View style={styles.containerservice}>
                  <Text style={styles.label}>
                    {' '}
                    {t('Enter_Maintenance_Remarks')}
                  </Text>
                  <TextInput
                    style={styles.input}
                    multiline={true}
                    value={installationremarks}
                    numberOfLines={10}
                    onChangeText={setInstallationremarks}
                    // placeholder={t('Enter_Maintenance_Remarks')}
                  />
                </View>

                <View style={styles.containerservice}>
                  <Text style={styles.label}> {t('Enter_Old_Reading')}</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={oldReading}
                    onChangeText={setOldReading}
                    placeholder={t('Enter_Old_Reading')}
                  />
                </View>
              </>

              <TouchableOpacity
                onPress={() => handlePostRequest()}
                style={{
                  alignSelf: 'center',
                }}>
                <Text
                  style={[
                    styles.button,
                    {backgroundColor: 'green', marginBottom: 10},
                  ]}>
                  {t('Save')}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <>
            {(() => {
              if (loading === 'true' && modalVisible === 'true') {
                return (
                  <Modal
                    animationType="slide"
                    transparent={true}
                    //visible={loading}
                  >
                    <BlurView
                      style={{
                        marginTop: DEVICE_WIDTH / 2 + 100,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 30,
                        opacity: 1,
                      }}>
                      <View
                        style={{
                          marginTop: 30,
                          marginLeft: 20,
                          marginRight: 20,
                          backgroundColor: '#909090',
                          borderRadius: 15,
                          flexDirection: 'row',
                          alignItems: 'center',
                          height: 50,
                          opacity: 1,
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <ActivityIndicator
                            style={{
                              marginLeft: 50,
                              marginRight: 50,
                              marginTop: 40,
                              height: 50,
                              width: 50,
                            }}
                            size="large"
                            color="#fff"
                            visible={loading}
                            textContent={'Saving Data...'}></ActivityIndicator>

                          <Text
                            style={{
                              color: '#fff',
                              marginTop: 50,
                              fontSize: 18,
                            }}>
                            {' '}
                            Fetching Data ...
                          </Text>
                        </View>
                      </View>
                    </BlurView>
                  </Modal>
                );
              }
            })()}
          </>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignatureCapturepage;

const styles = StyleSheet.create({
  container: {
    height: 250,
    elevation: 0.9,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 5,
    borderRadius: 30,
    padding: 10,
  },
  button: {
    borderRadius: 40,
    padding: 8,
    marginTop: 5,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
    color: '#fff',
  },
  iconContainer: {
    marginLeft: 0,
    marginRight: 0,
  },
  ImageLocationView: {
    height: 140,
    elevation: 0.9,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signature: {
    height: '70%',
    borderWidth: 0.5,
    borderColor: 'grey',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    paddingLeft: 15,
    paddingTop: 10,
    color: 'black',
    width: 190,
  },
  textLocation: {
    fontSize: 15,
    paddingLeft: 15,
    paddingTop: 10,
    color: 'black',
  },
  imageContainer: {
    flex: 1,
    marginLeft: 5,
  },
  iconimage: {
    width: 45,
    height: 45,
    // borderRadius: 5,
  },
  containerservice: {
    marginTop: 10,
    padding: 5,
    backgroundColor: '#fff',
    elevation: 5,
    marginHorizontal: 20,
    // borderWidth: 1,
    borderRadius: 15,
  },
  label: {
    fontSize: 13,
    color: '#FF8C00',
    marginBottom: 5,
  },
  input: {
    borderWidth: 0,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginHorizontal: 15,
    marginBottom: 20,
    marginTop: 10,
  },
  textInput: {
    paddingLeft: 10,
    paddingTop: 4,
    color: '#909090',
    borderRadius: 20,
    textAlignVertical: 'top',
    height: 100,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  finalSaveButton: {
    alignItems: 'center',
    marginTop: 10,
    width: 50,
    height: 50,
    borderWidth: 1,
  },
  finalSaveButtonText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

/* <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View>
            <View
              style={{
                height: 100,
                padding: 20,
                backgroundColor: '#18253f',
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}>
              <Text style={{fontWeight: 'bold', color: '#fff'}}>
                {existingAssetId}
              </Text>
              <Text style={{color: '#fff'}}>
                {t('Location')}: {t('Not_Available')}
              </Text>
              <Text style={{color: '#fff'}}>
                {t('Lat_Lon')}: {latitude}, {longitude}
              </Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.title}>{t('Signature_Capture')}</Text>
              <SignatureCapture
                style={styles.signature}
                ref={sign}
                onSaveEvent={_onSaveEvent}
                minStrokeWidth={2}
                maxStrokeWidth={2}
                onDragEvent={_onDragEvent}
                showNativeButtons={false}
                showTitleLabel={false}
                viewMode={'portrait'}
              />
              <TouchableHighlight
                style={{
                  backgroundColor: 'green',
                  position: 'absolute',
                  width: 130,
                  height: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 0,
                  borderBottomLeftRadius: 15,
                }}
                onPress={saveSign}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: '500',
                  }}>
                  {t('Save')}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  backgroundColor: '#6677cb',
                  position: 'absolute',
                  right: 0,
                  height: '20%',
                  width: 130,
                  bottom: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomRightRadius: 15,
                }}
                onPress={resetSign}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: '500',
                  }}>
                  {t('Reset')}
                </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.ImageLocationView}>
              <View style={styles.row}>
                <Text style={styles.text}>{t('Capture_Asset_Image')}</Text>
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => navigatetoCamera()}>
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('../../../images/camera_48.png')}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                  {imageUri ? (
                    <Image source={{uri: imageUri}} style={styles.iconimage} />
                  ) : null}
                </View>
              </View>
              <View>
                <Text style={styles.textLocation}>
                  {t('Location')}:{currentLocation?.latitude}{' '}
                  {currentLocation ? ',' : null} {currentLocation?.longitude}
                </Text>
              </View>
            </View>
            <>
              <View style={styles.containerservice}>
                <Text style={styles.label}> {t('Enter_Service_Number')}</Text>
                <TextInput
                  style={styles.input}
                  value={serviceNumber}
                  keyboardType="numeric"
                  maxLength={11}
                  onChangeText={setServiceNumber}
                  placeholder={t('Enter_Service_Number')}
                />
              </View>

              <View style={styles.containerservice}>
                <Text style={styles.label}>
                  {' '}
                  {t('Enter_Maintenance_Remarks')}
                </Text>
                <TextInput
                  style={styles.input}
                  multiline={true}
                  value={installationremarks}
                  numberOfLines={10}
                  onChangeText={setInstallationremarks}
                  // placeholder={t('Enter_Maintenance_Remarks')}
                />
              </View>

              <View style={styles.containerservice}>
                <Text style={styles.label}> {t('Enter_Old_Reading')}</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={oldReading}
                  onChangeText={setOldReading}
                  placeholder={t('Enter_Old_Reading')}
                />
              </View>
            </>

            <TouchableOpacity
              onPress={() => handlePostRequest()}
              style={{
                alignSelf: 'center',
              }}>
              <Text
                style={[
                  styles.button,
                  {backgroundColor: 'green', marginBottom: 10},
                ]}>
                {t('Save')}
              </Text>
            </TouchableOpacity>
          </View>
          <>
            {(() => {
              if (loading == true && modalVisible == true) {
                return (
                  <Modal
                    animationType="slide"
                    transparent={true}
                    //visible={loading}
                  >
                    <BlurView
                      style={{
                        marginTop: width / 2 + 100,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 30,
                        opacity: 1,
                      }}>
                      <View
                        style={{
                          marginTop: 30,
                          marginLeft: 20,
                          marginRight: 20,
                          backgroundColor: '#909090',
                          borderRadius: 15,
                          flexDirection: 'row',
                          alignItems: 'center',
                          height: 50,
                          opacity: 1,
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <ActivityIndicator
                            style={{
                              marginLeft: 50,
                              marginRight: 50,
                              marginTop: 40,
                              height: 50,
                              width: 50,
                            }}
                            size="large"
                            color="#fff"
                            visible={loading}
                            textContent={
                              'Fetching Data...'
                            }></ActivityIndicator>

                          <Text
                            style={{
                              color: '#fff',
                              marginTop: 50,
                              fontSize: 18,
                            }}>
                            {' '}
                            Fetching Data ...
                          </Text>
                        </View>
                      </View>
                    </BlurView>
                  </Modal>
                );
              }
            })()}
          </>
        </ScrollView>
        */
