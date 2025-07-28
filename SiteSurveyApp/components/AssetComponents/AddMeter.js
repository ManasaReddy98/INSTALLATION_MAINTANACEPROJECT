import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//https://www.npmjs.com/package/react-native-device-info#getserialnumber
import {PermissionsAndroid, Platform} from 'react-native';
import Geocoder from 'react-native-geocoding';
import CameraOptions from '../ReUsableMethods/CameraOptions';
import LocationOptions from '../ReUsableMethods/LocationOptions';
import ConvertGeodesicAddress from '../ReUsableMethods/ConvertGeodesicAddress';
import DeviceInfo from 'react-native-device-info';
import {getUniqueId, getManufacturer} from 'react-native-device-info';
import TODOService from '../ReUsableMethods/TODOService';
import {Constants} from '../Constants/Constants';
const AddMeter = ({selectedUserName,LanguageOpt}) => {
  console.log('Selected User Name ' + JSON.stringify(selectedUserName));
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const {width, height} = Dimensions.get('window');
  const [imageUri, setImageUri] = useState(null);
  const [userName, setUserName] = useState('');
  const [DeviceIMEI, setDeviceIMEI] = useState();
  //const [profilePicture, setProfilePicture] = useState();
  const [filePath, setFilePath] = useState({});
  const [ImageFilePath, setImageFilePath] = useState([]);

  const cameraService = new CameraOptions();
  const locationService = new LocationOptions();
  const todoService = new TODOService();

  const [assetData, setAssetData] = useState([]);

  // const addressService = new ConvertGeodesicAddress();
  const [locationCaptured, setLocationCaptured] = useState([]);
  const [deviceImageCaptured, setdeviceImageCaptured] = useState();
  const [latitudeCaptured, setLatitudeCaptured] = useState('');
  const [longitudeCaptured, setLongitudeCaptured] = useState('');
  const [profilePicture, setProfilePicture] = useState();
  const [deviceDetails, setDeviceDetails] = useState({
    SERVICENO: '',
    UNIQUESERVICE_NO: '',
    MeterSerial_No: '',
    SUBCATEGORY_ID: '',
    TARIFFID: '',
    PHASE_TYPE: '',
    CONTRACTED_LOAD: '',
    CONNECTED_LOAD: '',
    EQ_POINTS: '',
    POLE_NO: '',
    OLDMETER_READING: '',
    OLDMETER_MFG: '',
    OLDMETER_DETAILS: '',
    SERVICE_TYPE: '',
    GOVT_CODE: '',
    NATURE_OF_SUPPLY: '',
    INDEMINITY_BOND: '',
    SCHEME: '',
    DTR_StructureCode: '',
    DTR_SerialNumber: '',
    METER_MAKE: '',
    MODEL: '',
    PROTOCOL: '',
    METER_SUPPLIEDPO_NUMBER: '',
    OPTICAL_COMMUNICATION_TYPE: '',
    RJ11_COMMUNICATION_CONNECTOR_TYPE: '',
    RJ11_COMMUNICATIONTYPE: '',
    ConsumerName: '',
    DCID: '',
    PANID: '',
    PHYSICAL_ADDRESS: '',
    METER_HARDWARE_VERSION: '',
    METER_FIRMWARE_VERSION: '',
    INSTALLATION_DATE: '',
    COMISSIONING_DATE: '',
    DeCOMISSIONING_DATE: '',
    FEEDER_NAME: '',
    SUBSTATION_NAME: '',
    SECTION_NAME: '',
    INCHARGE_NAME: '',
    INCHARGE_CONTACT_NUMBER: '',
    REMARKS: '',
  });
  const [errors, setErrors] = useState();

  const handleOnchange = (text, input) => {
    setDeviceDetails(prevState => ({...prevState, [input]: text}));
  };

  const getImageFromImageCapture = async () => {
    console.log('Image Capture  :: ' + 'button clicked');
    try {
      let isCameraPermitted = await cameraService.requestCameraPermission();
      let isStoragePermitted =
        await cameraService.requestExternalWritePermission();
      if (isCameraPermitted && isStoragePermitted) {
        var image_64 = await cameraService.captureImage('photo');
        // console.log('Assets Data From API :: ' + image_64);
        setdeviceImageCaptured(image_64);
      }
    } catch (error) {
      console.log(error);
      Alert.alert(' No Data Available');
    }
  };
  // console.log('Assets Data From API :: ' + deviceImageCaptured);

  useEffect(() => {
    setProfilePicture('data:image/png;base64,' + deviceImageCaptured);
    //setProfilePicture(base64Icon);
  }, [deviceImageCaptured]);
  console.log('ProfilePicture :: ' + profilePicture);

  const getLocationFromLocationCapture = async () => {
    console.log('Image Capture  :: ' + 'button Location clicked');
    try {
      var locationData = await locationService.requestLocation();
      // console.log('Assets Data From API :: ' + image_64);
      setLocationCaptured(locationData);
    } catch (error) {
      console.log(error);
      Alert.alert(' No Data Available');
    }
  };
  console.log(
    'Location Data API LOCATION :: ' + JSON.stringify(locationCaptured),
  );

  useEffect(() => {
    console.log(
      'Location Data API Latitude :: ' + JSON.stringify(locationCaptured),
    );
    if (JSON.stringify(locationCaptured) != '[]') {
      var latitude = JSON.parse(locationCaptured.latitude);
      var longitude = JSON.parse(locationCaptured.longitude);
      console.log('Location Data API Latitude :: ' + latitude);
      console.log('Location Data API Longitude :: ' + longitude);
      setLatitudeCaptured(latitude);
      setLongitudeCaptured(longitude);
      // getGeoLocation(latitude,longitude);
    }
  }, [locationCaptured]);
  // console.log('Location Captured GeoDsic :: ' + locationData);

  useEffect(() => {
    getDeviceIMEI();
  }, []);

  const getDeviceIMEI = () => {
    var deviceID = DeviceInfo.getDeviceId();
    var uniqueId = DeviceInfo.getUniqueId();
    var BuildId = DeviceInfo.getSerialNumber();

    // DeviceInfo.getBuildId().then((buildId) => {
    //   // iOS: "12A269"
    //   // tvOS: not available
    //   // Android: "13D15"
    //   // Windows: not available
    //   setDeviceIMEI(buildId);
    // });

    DeviceInfo.getUniqueId().then(uniqueId => {
      // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
      // Android: "dd96dec43fb81c97"
      // Windows: "{2cf7cb3c-da7a-d508-0d7f-696bb51185b4}"
      setDeviceIMEI(uniqueId);
    });

    console.log('IMEI ID UNIQUE ID ###### ' + JSON.stringify(DeviceIMEI));
  };

  // console.log(
  //   'Device Details ',
  //   'Device Details' + JSON.stringify(deviceDetails),
  // );
  // console.log('IMEI ID ###### ' + JSON.stringify(DeviceIMEI));

  function createPayload() {}

  const saveFieldDeviceDataToServer = async () => {
    setIsLoading(true);
    try {
      //http://mapp.eficaa.com:8083/Eficaa/api/v1/addFieldAsset
      const url = Constants.API_BASE_URL + '/api/v1/AddNewConsumer';
      /*
      {
    "serviceNo": "123456",
    "uniqueServiceNo": "030602133",
    "meterSerialNo": "string",
    "subCategoryId": 0,
    "tariffId": 0,
    "phaseType": "string",
    "contractedLoad": "string",
    "connectedLoad": "string",
    "eqpoints": "string",
    "oldMeterReading": "string",
    "oldMeterMfg": "string",
    "oldMeterDetails": "string",
    "serviceType": "string",
    "govtCode": "string",
    "natureofSupply": "string",
    "indeminityBond": "string",
    "scheme": "string",
    "structureCode": "string",
    "dtrserialno": "string",
    "manufactureName": "string",
    "model": "string",
    "protocal": "string",
    "assetId": 0,
    "userId": "string",
    "androidImei": "string",
    "meterSuppliedPonumber": "string",
    "opticalCommunicationType": "string",
    "rj11communicationConnectorType": "string",
    "rj11communicationType": "string",
    "panid": 0,
    "dcphysicalAddress": "string",
    "hardwareVersion": "string",
    "firmwareVersion": "string",
    "section": "string",
    "subStation": "string",
    "feeder": "string",
    "inchargeUserName": "string",
    "inchargeName": "string",
    "contactNumber": 0,
    "deviceImage": "string",
    "latitude": "string",
    "longitude": "string",
    "location": "string",
    "reasons": "string",
    "remarks": "string",
    "installationDate": "2023-11-25",
    "commissioningDate": "2023-11-25",
    "decommissioningDate": "2023-11-25"
}
      */

      var payloadTest = {       
        serviceNo: deviceDetails.SERVICENO,
        uniqueServiceNo: deviceDetails.UNIQUESERVICE_NO,
        meterSerialNo: deviceDetails.MeterSerial_No,
        subCategoryId: parseInt(deviceDetails.SUBCATEGORY_ID),
        tariffId: parseInt(deviceDetails.TARIFFID),
        phaseType: deviceDetails.PHASE_TYPE,
        contractedLoad: deviceDetails.CONTRACTED_LOAD,
        connectedLoad: deviceDetails.CONNECTED_LOAD,
        eqpoints: deviceDetails.EQ_POINTS,
        oldMeterReading: deviceDetails.OLDMETER_READING,
        oldMeterMfg: deviceDetails.OLDMETER_MFG,
        oldMeterDetails: deviceDetails.OLDMETER_DETAILS,
        serviceType: deviceDetails.SERVICE_TYPE,
        govtCode: deviceDetails.GOVT_CODE,
        natureofSupply: deviceDetails.NATURE_OF_SUPPLY,
        indeminityBond: deviceDetails.INDEMINITY_BOND,
        scheme: deviceDetails.SCHEME,
        structureCode: deviceDetails.DTR_StructureCode,
        dtrserialno: deviceDetails.DTR_SerialNumber,
        manufactureName: deviceDetails.METER_MAKE,
        model: deviceDetails.MODEL,
        protocal: deviceDetails.PROTOCOL,
        assetId: 0,
        userId: selectedUserName,
        androidImei: DeviceIMEI,
        meterSuppliedPonumber: deviceDetails.METER_SUPPLIEDPO_NUMBER,
        opticalCommunicationType: deviceDetails.OPTICAL_COMMUNICATION_TYPE,
        rj11communicationConnectorType: deviceDetails.RJ11_COMMUNICATION_CONNECTOR_TYPE,
        rj11communicationType: deviceDetails.RJ11_COMMUNICATIONTYPE,
        panid: parseInt(deviceDetails.PANID),
        dcphysicalAddress: deviceDetails.PHYSICAL_ADDRESS,
        hardwareVersion: deviceDetails.METER_HARDWARE_VERSION,
        firmwareVersion: deviceDetails.METER_FIRMWARE_VERSION,
        section: deviceDetails.SECTION_NAME,
        subStation: deviceDetails.SUBSTATION_NAME,
        feeder: deviceDetails.FEEDER_NAME,
        inchargeUserName: deviceDetails.INCHARGE_NAME,
        inchargeName: deviceDetails.INCHARGE_NAME,
        contactNumber: parseInt(deviceDetails.INCHARGE_CONTACT_NUMBER),
        deviceImage: deviceImageCaptured,
        latitude: latitudeCaptured.toString(),
        longitude: longitudeCaptured.toString(),
        location: '',
        reasons: '',
        remarks: deviceDetails.REMARKS,
        // installationDate: deviceDetails.INSTALLATION_DATE,
        // commissioningDate: deviceDetails.COMISSIONING_DATE,
        // decommissioningDate: deviceDetails.DeCOMISSIONING_DATE,
      };
      console.log('FEEDER Payload ' + JSON.stringify(payloadTest));
      const response = await todoService.createAsset(url, payloadTest);
      if (response) {
        setIsLoading(false);
      }
      // if(allAssets==[]){
      //   Alert.alert(' No Data Available');
      // }
      // setAssetData(allAssets);
      // setnewmarkers(allAssets);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      // Alert.alert(' No Data Available');
    }
  };

  return (
    <ImageBackground
      source={require('../images/mapbackground.jpg')}
      style={styles.backgroundImage}>
      {(() => {
        if (isLoading) {
          return (
            <View
              style={{
                height: 100,
                width: '90%',
                flexDirection: 'column',
                borderColor: '#ddd',
                padding: 10,
                borderRadius: 20,
                margin: 20,
                borderWidth: 1,
                marginTop: width / 2 + 100,
                backgroundColor: '#ddd',
                elevation: 10,
              }}>
              <ActivityIndicator size="large" />
              <Text
                style={{
                  color: '#182442',
                  fontSize: 18,
                  marginTop: 10,
                  alignSelf: 'center',
                }}>
                {' '}
                {LanguageOpt('Wait_Save_Details')} ...{' '}
              </Text>
            </View>
          );
        } else {
          return (
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  height: 90,
                  width: 90,
                  borderRadius: 50,
                  marginTop: 30,
                  alignSelf: 'center',
                  borderWidth: 1,
                  //backgroundColor: '#192442',
                }}>
                <Image
                  source={require('../images/eficaalogo.png')}
                  style={{height: 70, width: 70, alignSelf: 'center'}}
                />
              </View>
              <View style={{alignSelf: 'center'}}>
              <Text
                  style={{
                    color: '#192442',
                    marginTop: 10,
                    fontSize: 18,
                    fontWeight: '500',
                  }}>
                  {' '}
                  {LanguageOpt('Add_Meter_Details')}{' '}
                </Text>
              </View>
              <ScrollView style={{marginTop: 10, marginBottom: 450}}>
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('SERVICE_NO')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'SERVICENO')}
                />

                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('UNIQUES_SERVICE_NUMBER')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'UNIQUESERVICE_NO')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('METER_SERIAL_NO')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'METER_SERIAL_NO')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('SUBCATEGORY_ID')}
                  placeholderTextColor="grey"
                  keyboardType='numeric'
                  onChangeText={text => handleOnchange(text, 'SUBCATEGORY_ID')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('TARIFF_ID')}
                  placeholderTextColor="grey"
                  keyboardType='numeric'
                  onChangeText={text => handleOnchange(text, 'TARIFFID')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('PHASE_TYPE')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'PHASE_TYPE')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('CONTRACTED_LOAD')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'CONTRACTED_LOAD')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('CONNECTED_LOAD')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'CONNECTED_LOAD')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('EQ_POINTS')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'EQ_POINTS')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('POLE_NO')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'POLE_NO')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('OLD_METER_READING')}
                  placeholderTextColor="grey"
                  keyboardType='numeric'
                  onChangeText={text =>
                    handleOnchange(text, 'OLDMETER_READING')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('OLD_METER_MFG')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'OLDMETER_MFG')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('OLD_METER_DETAILS')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'OLDMETER_DETAILS')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('SERVICE_TYPE')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'SERVICE_TYPE')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('GOVT_CODE')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'GOVT_CODE')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('NATURE_OF_SUPPLY')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'NATURE_OF_SUPPLY')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('INDEMINITY_BOND')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'INDEMINITY_BOND')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('SCHEME')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'SCHEME')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('DTR_STRUCTURE_CODE')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'DTR_StructureCode')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('DTR_SERIAL_NUMBER')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'DTR_SerialNumber')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('METER_MAKE')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'METER_MAKE')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('MODEL')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'MODEL')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('PROTOCOL')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'PROTOCOL')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('METER_SUPPLIED_PO_NUMBER')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'METER_SUPPLIEDPO_NUMBER')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('OPTICAL_COMMUNICATION_TYPE')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'OPTICAL_COMMUNICATION_TYPE')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('RJ11 COMMUNICATION CONNECTOR TYPE')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'RJ11_COMMUNICATION_CONNECTOR_TYPE')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('RJ11_COMMUNICATION_TYPE')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'RJ11_COMMUNICATIONTYPE')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('Consumer Name')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'ConsumerName')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('DCID')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'DCID')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('PAN_ID')}
                  placeholderTextColor="grey"
                  keyboardType='numeric'
                  onChangeText={text => handleOnchange(text, 'PAN_ID')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('PHYSICAL_ADDRESS')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'PHYSICAL_ADDRESS')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('METER_HARDWARE_VERSION')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'METER_HARDWARE_VERSION')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('METER_FIRMWARE_VERSION')}
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'METER_FIRMWARE_VERSION')
                  }
                />
                {/* <TextInput
                  style={styles.textInput}
                  placeholder="INSTALLATION_DATE"
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'INSTALLATION_DATE')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="COMISSIONING_DATE"
                  placeholderTextColor="grey"
                  onChangeText={text =>
                    handleOnchange(text, 'COMISSIONING_DATE')
                  }
                /> */}
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('FEEDER_NAME')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'FEEDER_NAME')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('SubStation_Name')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'SUBSTATION_NAME')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('SECTION_NAME')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'SECTION_NAME')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('INCHARGE_NAME')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'INCHARGE_NAME')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('INCHARGE_CONTACT_NUMBER')}
                  placeholderTextColor="grey"
                  keyboardType='numeric'
                  onChangeText={text =>
                    handleOnchange(text, 'INCHARGE_CONTACT_NUMBER')
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={LanguageOpt('REMARKS_REASONS')}
                  placeholderTextColor="grey"
                  onChangeText={text => handleOnchange(text, 'REMARKS/REASONS')}
                />
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#909090',
                      fontSize: 22,
                      marginLeft: 25,
                      marginTop: 15,
                    }}>
                    {LanguageOpt('Capture_Image')}
                  </Text>

                  <TouchableOpacity onPress={() => getImageFromImageCapture()}>
                    <View
                      style={{
                        borderWidth: 2,
                        alignContent: 'center',
                        borderColor: '#909090',
                        marginTop: 15,
                        marginLeft: 73,
                        height: 40,
                        width: 40,
                        borderRadius: 10,
                      }}>
                      <Image
                        source={require('../images/camera.png')}
                        style={{
                          height: 25,
                          width: 25,
                          marginTop: 5,
                          // marginLeft:50,
                          opacity: 0.5,
                          alignSelf: 'center',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                  <Image
                    source={{uri: profilePicture}}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      marginLeft: 10,
                      marginTop: 15,
                      // borderRadius: 30,
                    }}
                  />
                  <View
                    style={{
                      height: 60,
                      width: 45,
                      backgroundColor: 'white',
                      marginTop: 25,
                      marginLeft: 50,
                    }}></View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  {/* <RNCamera ref={cameraRef} style={{flex: 1}} /> */}
                  <Text
                    style={{
                      color: '#909090',
                      fontSize: 22,
                      marginLeft: 25,
                      marginTop: 15,
                    }}>
                    {LanguageOpt('Capture_Location')}
                  </Text>
                  <TouchableOpacity
                    onPress={() => getLocationFromLocationCapture()}>
                    {/* onPress={() => navigation.navigate('LocationOptions')}> */}
                    <View
                      style={{
                        borderWidth: 2,
                        alignContent: 'center',
                        borderColor: '#909090',
                        marginTop: 15,
                        marginLeft: 50,
                        height: 40,
                        width: 40,
                        borderRadius: 10,
                      }}>
                      <Image
                        source={require('../images/location.png')}
                        style={{
                          height: 25,
                          width: 25,
                          marginTop: 5,
                          marginLeft: 5,
                          opacity: 0.7,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: '#909090',
                      fontSize: 22,
                      marginLeft: 25,
                      marginTop: 15,
                    }}>
                    {' '}
                    {LanguageOpt('Latitude')} :{latitudeCaptured}
                  </Text>
                  <Text
                    style={{
                      color: '#909090',
                      fontSize: 22,
                      marginLeft: 25,
                      marginTop: 15,
                    }}>
                    {' '}
                    {LanguageOpt('Longitude')} :{longitudeCaptured}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => saveFieldDeviceDataToServer()}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 18,
                      // alignSelf: 'center',
                      // marginTop: 20,
                      textAlign:'center'
                    }}>
                    {LanguageOpt('Save_Section_Details')}
                  </Text>
                </TouchableOpacity>

                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
              </ScrollView>
            </View>
          );
        }
      })()}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    // flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    //justifyContent: 'center',
    //opacity:0.7
  },
  button: {
    height: 70,
    width: 200,
    backgroundColor: '#192442',
    borderColor: '#909090',
    borderWidth: 1.5,
    alignSelf: 'center',
    justifyContent:'center',
    borderRadius: 10,
    marginTop: 15,
  },

  textInput: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    borderColor: '#909090',
    borderWidth: 1,
    borderRadius: 5,
    color: '#909090',
    margin: 10,
    padding: 10,
    fontSize: 18,
  },
});

export default AddMeter;

/*REVERSE GEO CODING LOGICS :

  // const getLocationData = async (latitude, longitude) => {
  //   console.log('Image Capture  :: ' + 'button clicked');
  //   try {
  //     if (latitude && longitude) {
  //       var location = await addressService.convertGeodesicAddress( latitude,longitude);
  //       console.log('Location FROM API :: ' + JSON.stringify(location));
  //       setAddressCaptured(location);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert(' No Data Available');
  //   }
  // };

  // const getGeoLocation = (latitude,longitude) => {
  //   // Geolocation.getCurrentPosition((position) => {
  //   //  var lat = position.coords.latitude;
  //   //  var longi = position.coords.longitude;     
      
  //   // });
  //   Geocoder.init("AIzaSyDWifuf6HUsFppbbQhhLIsFvzVa9oP-iNk");
  //   Geocoder.from(latitude,longitude)
  //     .then((json) => {
  //       console.log(json);
  //       var addressComponent = json.results[0].address_components;
  //       //setAddress(addressComponent);
  //       // this.setState({

  //       // });
  //       console.log("ADDRESS COMPONENT ==== "+ addressComponent);
  //     })
  //     .catch((error) => console.warn(error));
  // };

*/

{
  /* <TextInput
        style={styles.textInput}
        placeholder="DUAL_MONITOR_PAGE_NAME"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        placeholder="SINGLE_MONITOR_PAGE_NAME"
        placeholderTextColor="grey"
      /> */
}
{
  /* <TextInput
        style={styles.textInput}
        placeholder="NO_OF_CONSUMERS"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        placeholder="FEEDER_CODE"
        placeholderTextColor="grey"
      /> */
}
