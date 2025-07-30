import React, { createRef, useRef, useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
  Modal,
  Dimensions,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { format } from 'date-fns';
//import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SignatureCapture from 'react-native-signature-capture';
// import { ScrollView } from 'react-native-gesture-handler';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { GlobalStyles } from '../appstyles/GlobalStyles';

import CameraOptions from '../ReUsableMethods/CameraOptions';
import LocationOptions from '../ReUsableMethods/LocationOptions';

import TODOService from '../ReUsableMethods/TODOService';
import CustomSelectDropdown from '../ReUsableMethods/SelectDropdown';
import moment from 'moment';

function Signature({ navigation, route }) {
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
    LanguageOpt,
    coloring,
    workStartedDateTime,
    assettypename
  } = route.params;

  const [dropdowndata, setDropdowndata] = useState([]);
  const [placeholder, setPlaceholder] = useState([])
  const [assetinfo, setAssetinfo] = useState([]);
  const [viewassetinfo, setViewassetinfo] = useState({})

  const getAssetTypeData = async (req_url, type) => {
    try {
      const token = '';
      const { data, status } = await todoService.getDataFromApi(req_url, token);
      setAssetinfo(data);

      // Efficiently map and extract required serial numbers
      const serials = data
        .map((item) => {
          if (type === 'METER') return item.serialNumber;
          if (type === 'TMU') return item.tmuSerialNumber;
          return null;
        })
        .filter(Boolean); // Removes null/undefined values
      setDropdowndata(serials);
    } catch (error) {
      console.error('Error fetching asset data:', error);
    }
  };

  useEffect(() => {
    if (assettypename === 'METER') {
      setPlaceholder("Select Meter Serial Number")
      const req_url = 'http://mapp.eficaa.com:8080/Eam_java_ms_V2.1_dev/MTFMeterdata/MTFMeterdetails';
      getAssetTypeData(req_url, 'METER');
    } else if (assettypename === 'TMU') {
      setPlaceholder("Select TMU Serial Number")
      const req_url = 'http://mapp.eficaa.com:8080/Eam_java_ms_V2.1/MTFTmudata/MTFTmudetails';
      getAssetTypeData(req_url, 'TMU');
    }
  }, [assettypename]);
  
  const functioncalling = (item) => {
    if (assettypename == "METER") {
      const findindexitem = assetinfo.findIndex((asset) => asset.serialNumber === item)
      const returnitem = assetinfo[findindexitem]
      setViewassetinfo(returnitem)
    } else if (assettypename == "TMU") {
      const findindexitem = assetinfo.findIndex((asset) => asset.tmuSerialNumber === item)
      const returnitem = assetinfo[findindexitem]
      setViewassetinfo(returnitem)
    }
  }

  // const { coloring } = route.params;
  // const navigation = useNavigation();

  // const [imageUri, setImageUri] = useState(null);
  // const [userName, setUserName] = useState('');
  // const [DeviceIMEI, setDeviceIMEI] = useState();
  //const [profilePicture, setProfilePicture] = useState();
  // const [filePath, setFilePath] = useState({});
  // const [ImageFilePath, setImageFilePath] = useState([]);
  const DEVICE_WIDTH = Dimensions.get('window').width;
  const DEVICE_HEIGHT = Dimensions.get('window').height;

  const cameraService = new CameraOptions();
  const locationService = new LocationOptions();
  const todoService = new TODOService();

  const [eta, setEta] = useState(0);
  const [assetData, setAssetData] = useState([]);

  const [wrkStTime, setWrkStTime] = useState(0);
  const [wrEndTime, setWrEndTime] = useState([]);
  const [loading, setLoading] = useState('false');
  const [modalVisible, setModalVisible] = useState('false');

  const [signatureImage, setSignatureImage] = useState();
  const [locationCaptured, setLocationCaptured] = useState('');
  const [deviceImageCaptured, setdeviceImageCaptured] = useState('');
  const [installationDeviceImage, setInstallationDeviceImage] = useState('');
  const [latitudeCaptured, setLatitudeCaptured] = useState('');
  const [longitudeCaptured, setLongitudeCaptured] = useState('');
  const [profilePicture, setProfilePicture] = useState();
  const [installationRemarks, setInstallationRemarks] = useState();
  const [serviceNumber, setServiceNumber] = useState();
  const [installationID, setInstallationID] = useState('');
  const [assetID, setAssetID] = useState('');

  const [specificLocation, setSpecificLocation] = useState({
    latitude: parseFloat(17.4248742),
    longitude: parseFloat(78.4583377),
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  // const now = moment();
  // const workEndedDateTime = now.format('YYYY-MM-DD HH:mm:ss');

  const [serviceNumberError, setserviceNumberError] = useState('');
  const [signatureError, setSignatureError] = useState('');
  const [deviceImageError, setDeviceImageError] = useState('');
  const [latitudeError, setLatitudeError] = useState('');
  const [longitudeError, setLongitudeError] = useState('');

  const currentDateTime = new Date();
  const workEndedDateTime = format(currentDateTime, 'yyyy-MM-dd HH:mm:ss');



  // console.log(
  //   'CURRENT DATE TIME',
  //   'CURRENT DATE TIME  ##### ' + workEndedDateTime,
  // );
  //var Work_estimated_diffInHours = workEndedDateTime.diff(workStartedDateTime, 'hours');

  useEffect(() => {
    setAssetID(item.assetId);
    setInstallationID(item.installationId);
  }, [item]);

  useEffect(() => {
    setSpecificLocation({
      latitude: parseFloat(geoLocation.latitude),
      longitude: parseFloat(geoLocation.longitude),
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    console;
  }, [geoLocation]);

  // useEffect(() => {
  //   const data = assettypedata.map((item) => {
  //     if (item.meterId) {
  //       return  item.serialNumber
  //     }
  //     else if(item.tmuId){
  //       return item.tmuSerialNumber
  //     }
  //   })
  //   console.log("dropdowndata",assettypedata,"data rendered correctly")
  //   setDropdowndata(data)
  // }, [assettypedata])

  useEffect(() => {
    const workStartMoment = moment(workStartedDateTime, 'YYYY-MM-DD HH:mm:ss');
    const workEndMoment = moment(workEndedDateTime, 'YYYY-MM-DD HH:mm:ss');
    setWrkStTime(workStartedDateTime);
    setWrEndTime(workEndedDateTime);

    // Calculate the difference in hours
    const diffInHours = workEndMoment.diff(workStartMoment, 'hours');
    const diffInSec = workEndMoment.diff(workStartMoment, 'seconds');
    const finalStr = diffInHours + 'Hrs' + diffInSec + 'Sec';
    setEta(finalStr);

    // console.log(
    //   'Difference in hours: ',
    //   diffInHours + ' hours',
    //   diffInSec + 'sec',
    // );

    // if (workStartedDateTime.isValid() && workEndedDateTime.isValid()) {
    //   const diff = workEndedDateTime.diff(workStartedDateTime, 'hours');
    //   setDiffInHours(diff);
    // } else {
    //   console.log('Invalid dates');
    // }
  }, [workEndedDateTime, workStartedDateTime]);

  // console.log(
  //   ' SIGNATURE GEO LOCATION #####',
  //   'SIGNATURE GEO LOCATION  ##### ' + color,
  //   geoLocation.latitude,
  //   geoLocation.longitude,
  // );

  // console.log(
  //   ' SIGNATURE PAGE #####',
  //   'ASSETID & INSTALLATION ID & TodayDate  & work startTime , ETA' + assetID,
  //   installationID,
  //   workStartedDateTime,
  //   workEndedDateTime,
  //   eta,
  // );
  const sign = createRef();

  const saveSign = () => {
    sign.current.saveImage();
  };

  const resetSign = () => {
    sign.current.resetImage();
  };

  const _onSaveEvent = result => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    //  LanguageOpt('sig_success_msg1'),
    alert(LanguageOpt('Signature Captured Successfully'));
    // console.log(result.encoded);
    setSignatureImage(result.encoded);
  };

  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
  };

  const handleOnchange = (text, input) => {
    setSectionDetails(prevState => ({ ...prevState, [input]: text }));
  };

  const getImageFromImageCapture = async () => {
    console.log('Image Capture  :: ' + 'button clicked');
    try {
      let isCameraPermitted = await cameraService.requestCameraPermission();
      let isStoragePermitted =
        await cameraService.requestExternalWritePermission();
      if (isCameraPermitted && isStoragePermitted) {
        var image_64 = await cameraService.captureImage('photo');
        //console.log('Assets Image Captured  :: ' + image_64);

        setdeviceImageCaptured(image_64);

        var base64Icon = 'data:image/png;base64,' + { deviceImageCaptured };
        getLocationFromLocationCapture();
      }
    } catch (error) {
      console.log(error);
      Alert.alert(' No Data Available');
    }
  };
  //console.log('Assets Data From API :: ' + deviceImageCaptured);

  useEffect(() => {
    setInstallationDeviceImage('data:image/png;base64,' + deviceImageCaptured);
    //setProfilePicture(base64Icon);
  }, [deviceImageCaptured]);
  // console.log('ProfilePicture :: ' + installationDeviceImage);

  const getLocationFromLocationCapture = async () => {
    // console.log('Location CaptureButton  :: ' + 'button Location clicked');
    try {
      var locationData = await locationService.requestLocation();
      // console.log(
      //   'Location Capturing From Location API :: ' +
      //   JSON.stringify(locationData),
      //   locationData.latitude,
      //   locationData.longitude,
      // );
      setLatitudeCaptured(locationData.latitude);
      setLongitudeCaptured(locationData.longitude);
      setLocationCaptured(locationData);
    } catch (error) {
      console.log(error);
      // Alert.alert(' No Data Available');
    }
  };

  /* SAVE DATA TO SERVER */

  // useEffect(() => {

  // }, [])

  const validateServiceNumber = () => {
    if (!serviceNumber) {
      setserviceNumberError('ServiceNumber is required');
    } else if (name.length < 11) {
      setserviceNumberError(
        'SurviceNumber must be at least 11 characters long',
      );
    } else {
      setserviceNumberError('');
    }
  };

  const validateCapturedImage = () => {
    if (!deviceImageCaptured) {
      setDeviceImageError('Device Image is required');
    } else {
      setDeviceImageError('');
    }
  };

  const validateSignature = () => {
    if (!signatureImage) {
      setSignatureError('Signature is required');
    } else {
      setSignatureError('');
    }
  };

  const validateLatitude = () => {
    if (!latitudeCaptured && !longitudeCaptured) {
      setLatitudeError('Latitude & Longitude is required');
    } else {
      setLatitudeError('');
    }
  };

  const ValidateFields = () => {
    validateSignature();
    validateCapturedImage();
    validateServiceNumber();
  };

  const saveFieldInstallationDataToServer = async () => {
    let validated_data = false;
    // console.log('DATA VALIDATION ################# ', validated_data);
    if (validated_data == 'false') {
      // console.log('INSIDE DATA VALIDATION LOOP ############ FALSE  ');
    } else {
      // console.log('INSIDE DATA VALIDATION LOOP ############  TRUE ');
      setLoading('true');
      setModalVisible('true');
      try {
        //http://mapp.eficaa.com:8083/Eficaa/api/v1/addFieldAsset
        //const url = Constants.API_BASE_URL + '/api/v1/addFieldAsset';
        const url =
          //EMap_WebIntegrator_ms
          //Eam_Instalation_v1.0
          'http://mapp.eficaa.com:8080/EMap_WebIntegrator_ms/installationdata/updateinstallations/' +
          assetID +
          '/' +
          installationID;
        var payloadTest = {
          handOverOn: workEndedDateTime, //wrEndTime,
          sts: workEndedDateTime,
          installationRemarks: installationRemarks,
          createdBy: resourceId,
          workendtime: workEndedDateTime, //wrEndTime,
          assignedon: workStartedDateTime,
          workstarttime: workStartedDateTime, //wrkStTime,
          estimatedtime: workEndedDateTime, //wrEndTime,
          serviceNumber: serviceNumber,
          sopId: 1234,
          geoLatitude: String(latitudeCaptured),
          geoLongitude: String(longitudeCaptured),
          assetMainStatusCode: 'CON_000065',
          actionTakenOn: workEndedDateTime, //wrkStTime
          fileContent: deviceImageCaptured,
          resourceSign: signatureImage,
        };
        // console.log('INSTALLATION  SAVE URL ' + url);
        // console.log('INSTALLATION  Payload ' + JSON.stringify(payloadTest));
        // const response = await todoService.createAsset(url, payloadTest);
        // console.log(
        //   'Create Issue RESPONSE STATUS FRM SIGNATURE PG  : ' +
        //   JSON.stringify(response),
        // );
        setLoading('false');
        setModalVisible('false');
        if (
          response === null ||
          response === undefined ||
          response.length === 0
        ) {
          Alert.alert('Asset not created , please try again ');
        } else {
          setdeviceImageCaptured('');
          setSignatureImage('');
          Alert.alert(
            LanguageOpt('sig_success_msg1'),
            LanguageOpt('sig_success_msg2'),
            [
              // {
              //   text: 'Cancel',
              //   style: 'cancel',
              // },
              {
                text: LanguageOpt('OK'),
                onPress: () =>
                  navigation.navigate('AssetDataList', {
                    //NumberingProgress
                    //AssetInstallationProgress
                    AssetDetails: item, //Language.dtData,
                    item: item, //Language.AssetDataTitleTextDT,
                    color: coloring,
                    Language: Language,
                    resourceId: resourceId,
                    address: address,
                    geoLocation: specificLocation,
                    selectedAssetDetails: selectedAssetDetails,
                    coloring: coloring,
                    Language: Language,
                    AssetDetails: AssetDetails,
                    LanguageOpt: LanguageOpt,
                    item: item,
                    workStartedDateTime: workStartedDateTime,
                  }), // Navigate to Details screen
              },
            ],
          );
        }

        // const {response, status}
        // if(allAssets==[]){
        //   Alert.alert(' No Data Available');
        // }
        // setAssetData(allAssets);
        // setnewmarkers(allAssets);
      } catch (error) {
        console.log(error);
        // Alert.alert(' No Data Available');
      }
    }
  };

  return (
    <View style={{ marginBottom: 50 }}>
      <View
        style={{
          height: 120,
          width: '100%',
          // backgroundColor: coloring,
          justifyContent: 'center',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <View style={{ marginLeft: 25, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', flex: 2 }}>
            <Text style={{ fontWeight: 'bold', color: '#18253f', }}>
              {item.assetId}
            </Text>
            <Text style={{ marginTop: 5, color: '#18253f', }}>
              {LanguageOpt('Location')} : {address}
            </Text>
            <Text style={{ marginTop: 5, color: '#18253f', }}>
              {LanguageOpt('Lat_Long')} : {geoLocation.latitude} ,
              {geoLocation.longitude}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <ScrollView style={{ marginBottom: 100 }}>
          <View>
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
                  source={{uri: item.assetImage}}
                />
              </View> */}
          </View>
          <View style={{ width: '90%', alignSelf: 'center', marginBottom: 10 }}>
            <CustomSelectDropdown
              data={dropdowndata.length > 0 ? dropdowndata : []}
              placeholder={placeholder}
              placeholdertextColor="grey"
              onItemSelected={(item) => functioncalling(item)} // Replace with handleChange if needed
            />
          </View>
          
          {assettypename === "METER" && Object.keys(viewassetinfo).length>0 ? (
            <View style={{ width: '90%', alignSelf: 'center', backgroundColor: '#fff',marginBottom:10,elevation:2,padding:10,borderRadius:10 }}>
              <Text style={{ color: 'red' }}>Serial: {viewassetinfo.serialNumber}</Text>
              <Text style={{ color: 'red' }}>Description: {viewassetinfo.description}</Text>
            </View>
          ) : null}

          {assettypename === "TMU" && Object.keys(viewassetinfo).length>0 ? (
            <View style={{ width: '90%', alignSelf: 'center' ,backgroundColor:'#fff',marginBottom:10,levation:2,padding:10,borderRadius:10}}>
              <Text style={{ color: 'blue' }}>TMU Serial: {viewassetinfo.tmuSerialNumber}</Text>
              <Text style={{ color: 'blue' }}>Location: {viewassetinfo.location}</Text>
            </View>
          ) : null}

          <View style={styles.container1}>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 5,
                color: color,
                fontSize: 16,
              }}>
              {' '}
              {LanguageOpt('Employee_Signature')}{' '}
            </Text>
            <SignatureCapture
              style={styles.signature}
              ref={sign}
              onSaveEvent={_onSaveEvent}
              minStrokeWidth={2}
              maxStrokeWidth={2}
              //strokeColor={"#d41515"}
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
              onPress={() => {
                saveSign();
              }}>
              <Text style={{ color: '#fff', fontSize: 15, fontWeight: '500' }}>
                {LanguageOpt('Save')}
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
              onPress={() => {
                resetSign();
              }}>
              <Text style={{ color: '#fff', fontSize: 15, fontWeight: '500' }}>
                {LanguageOpt('Reset')}
              </Text>
            </TouchableHighlight>
          </View>

          <View>
            <View
              style={{
                height: 220,
                margin: 15,
                backgroundColor: '#ffffff',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 5,
                  color: color,
                  fontSize: 16,
                }}>
                {' '}
                {LanguageOpt('Capture_Asset_Info')}{' '}
              </Text>
              <Text style={{ alignSelf: 'center' }}> </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center' }}></Text>
                <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 15 }}>
                  {' '}
                  {LanguageOpt('Capture_Asset_Image')}{' '}
                </Text>
                <TouchableOpacity onPress={() => getImageFromImageCapture()}>
                  <Image
                    style={{ height: 40, width: 40, marginLeft: 50 }}
                    source={require('../images/camera_48.png')}
                  />
                </TouchableOpacity>
                <Image
                  style={{ height: 40, width: 40, marginLeft: 33 }}
                  source={{ uri: installationDeviceImage }}
                // source={require('../images/location_48.png')}
                />
              </View>
              <Text></Text>

              {/* <View style={{flexDirection: 'row'}}>
              <Text style={{alignSelf: 'center'}}></Text>
              <Text style={{marginLeft: 15, marginTop: 15, fontSize: 15}}>
                {' '}
                Capture Asset Location{' '}
              </Text>

              <TouchableOpacity
                onPress={() => getLocationFromLocationCapture()}>
                <Image
                  style={{height: 40, width: 40, marginLeft: 33}}
                  source={require('../images/location_48.png')}
                />
              </TouchableOpacity>
            </View> */}

              {(() => {
                if (
                  typeof latitudeCaptured === 'number' &&
                  latitudeCaptured <= 90 &&
                  latitudeCaptured >= -90 &&
                  longitudeCaptured <= 90 &&
                  longitudeCaptured >= -90
                ) {
                  return (
                    <View
                      style={{
                        marginLeft: 20,
                        marginTop: 15,
                        flexDirection: 'column',
                      }}>
                      <Text>{LanguageOpt('Capture_Asset_Info')} : </Text>
                      <Text>
                        {latitudeCaptured} , {longitudeCaptured}
                      </Text>
                    </View>
                  );
                } else {
                  return (
                    <View style={{ marginLeft: 20, marginTop: 15 }}>
                      <Text> </Text>
                    </View>
                  );
                }
              })()}

              {/* <Text style={{marginLeft: 20, marginTop: 10}}>
                    Location : {latitudeCaptured} ,{longitudeCaptured}
                </Text> */}
            </View>

            {/* setServiceNumber */}

            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                marginLeft: 15,
                marginRight: 15,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 5,
                  color: color,
                  fontSize: 16,
                }}>
                {' '}
                {LanguageOpt('Enter_Service_Number')}{' '}
              </Text>
              <TextInput
                style={{
                  paddingLeft: 10,
                  paddingTop: 4,
                  marginHorizontal: 15,
                  textAlignVertical: 'top',
                  height: 50,
                  marginTop: 15,
                  padding: 10,
                }}
                placeholder=""
                keyboardType="numeric"
                maxLength={11}
                // numberOfLines={40}
                // multiline={true}
                onChangeText={serviceNumber => setServiceNumber(serviceNumber)}
              />
            </View>
            <View style={{ marginTop: 20 }}></View>

            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                marginLeft: 15,
                marginRight: 15,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 5,
                  color: color,
                  fontSize: 16,
                }}>
                {' '}
                {LanguageOpt('Enter_Installation_Remarks')}{' '}
              </Text>
              <TextInput
                style={{
                  paddingLeft: 10,
                  paddingTop: 4,
                  marginHorizontal: 15,
                  textAlignVertical: 'top',
                  height: 200,
                  marginTop: 15,
                  padding: 10,
                }}
                placeholder=""
                numberOfLines={40}
                multiline={true}
                onChangeText={installationRemarks =>
                  setInstallationRemarks(installationRemarks)
                }
              />
            </View>

            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginVertical: 15,
              }}
              onPress={() => {
                saveFieldInstallationDataToServer();
                // navigation.navigate('Progress', { coloring: coloring })
              }}>
              <Text style={[GlobalStyles.button, { backgroundColor: coloring }]}>
                {LanguageOpt('Save')}
              </Text>
            </TouchableOpacity>

            <View style={{ height: 300 }}>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
            </View>
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
                      <View style={{ flexDirection: 'row' }}>
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
    </View>
  );
}

export default Signature;
const styles = StyleSheet.create({
  container1: {
    height: '20%',
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 20,
  },

  titleStyle: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
  },
  signature: {
    height: '65%',
    // borderWidth: 1,

    borderWidth: 0.4,
    borderColor: 'red',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});
