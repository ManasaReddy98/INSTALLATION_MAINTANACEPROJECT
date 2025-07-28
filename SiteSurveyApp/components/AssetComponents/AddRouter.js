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
const AddRouter = ({selectedUserName,LanguageOpt}) => {
  console.log("Selected User Name " + JSON.stringify(selectedUserName));
  const navigation = useNavigation();
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
    FEEDER_NAME: '',
    SUBSTATION_NAME: '',
    SECTION_NAME: '',
    INCHARGE_NAME: '',
    INCHARGE_CONTACT_NUMBER: '',
    INCHARGE_USER_ID: '',
    REMARKS: '',
    LATITUDE: '',
    LONGITUDE: '',
    LOCATION: '',
    DEVICEIMAGE: '',
    ANDROID_IMEI_ID: '',
    USERNAME: '',
    DCU_ID:'',
    FIELD_REF_NO:'',
    ROUTER_NO:'',
    ROUTER_OUTER_BOX_NO:'',
    PHYSICAL_ADDRESS:''
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

  console.log(
    'Device Details ',
    'Device Details' + JSON.stringify(deviceDetails));
  console.log('IMEI ID ###### ' + JSON.stringify(DeviceIMEI));

  function createPayload() {}

  const saveFieldDeviceDataToServer = async () => {
    try {
      //http://mapp.eficaa.com:8083/Eficaa/api/v1/addFieldAsset
      const url = Constants.API_BASE_URL + '/api/v1/addFieldAsset';

      var payloadTest = {
        regionName: '',
        regionCode: 0,
        circleName: '',
        divisionName: '',
        districtName: '',
        section: deviceDetails.SECTION_NAME,
        subStation: deviceDetails.SUBSTATION_NAME,
        feeder: deviceDetails.FEEDER_NAME,
        structureCode: '',
        dtrserialno: '',
        serviceNo: '',
        meterSerialNo: '',
        newMeterSerialNo: '',
        initialReading: 0,
        finalReading: 0,
        uniqueServiceNo: '',
        subCategoryId: 0,
        tariffId: 0,
        consumerName: '',
        otherDevices: '',
        ar: '',
        sectionalizer: '',
        panid: 0,
        rmu: '',
        rtu: '',
        frt: '',
        fpi: '',
        phaseType: '',
        assetType: 'DCU',
        capacity: 0,
        manufactureName: '',
        mountType: '',
        utilityRefNo: '',
        tmusno: '',
        tmutype: '',
        transformerType: '',
        hardwareVersion: '',
        firmwareVersion: '',
        dcserialNo: '',
        dcimei: '',
        dcphysicalAddress:'',
        dcouterBoxNumber: '',
        simno: '',
        routerNo: deviceDetails.ROUTER_NO,
        routerPhysicalAddress: deviceDetails.PHYSICAL_ADDRESS,
        routerOuterBoxNumber: deviceDetails.ROUTER_OUTER_BOX_NO,
        contractedLoad: '',
        connectedLoad: '',
        eqpoints: '',
        oldMeterReading: '',
        oldMeterMfg: '',
        oldMeterDetails: '',
        serviceType: '',
        govtCode: '',
        natureofSupply: '',
        indeminityBond: '',
        scheme: '',
        protocal: '',
        meterSuppliedPonumber: '',
        opticalCommunicationType: '',
        rj11communicationConnectorType: '',
        rj11communicationType: '',
        model: '',
        latitude: latitudeCaptured.toString(),
        longitude:longitudeCaptured.toString(),
        location: '',
        deviceImage: deviceImageCaptured,
        assetId: 0,
        userId: selectedUserName,
        androidImei: DeviceIMEI,
        inchargeUserName: '',
        inchargeName: deviceDetails.INCHARGE_NAME,
        contactNumber: parseInt(deviceDetails.INCHARGE_CONTACT_NUMBER),
        reasons: 'string',
        remarks: deviceDetails.REMARKS
      };            

      console.log('FEEDER Payload ' + payloadTest);
      const response = await todoService.createAsset(url, payloadTest);
      // if(allAssets==[]){
      //   Alert.alert(' No Data Available');
      // }
      // setAssetData(allAssets);
      // setnewmarkers(allAssets);
    } catch (error) {
      console.log(error);
     // Alert.alert(' No Data Available');
    }
  };

  return (
    <ImageBackground
      source={require('../images/mapbackground.jpg')}
      style={styles.backgroundImage}>
      <View
        style={{
          height: 100,
          width: 100,
          marginTop: 30,
          borderWidth: 1.5,
          alignSelf: 'center',
          borderRadius: 100,
          borderColor: '#0D8C38',
          //backgroundColor: '#192442',
        }}>
        <Image
          source={require('../images/eficaalogo.png')}
          style={{
            marginTop: 15,
            marginLeft: 10,
            height: 60,
            width: 140,
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            color: '#909090',
            marginTop: 10,
            fontSize: 18,
            fontWeight: '600',
          }}>
          {' '}
          {LanguageOpt('ADD ROUTER DETAILS')}{' '}
        </Text>
      </View>
      <ScrollView style={{marginTop: 10, marginBottom: 250}}>

    
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
        placeholder={LanguageOpt('ROUTER_NO')}
        placeholderTextColor="grey"
        onChangeText={text => handleOnchange(text, 'ROUTER_NO')}
      />
      {/* <TextInput
        style={styles.textInput} 
        placeholder="FIELD_REF_NO"
        placeholderTextColor="grey"
        onChangeText={text => handleOnchange(text, 'FIELD_REF_NO')}
      /> */}
      {/* <TextInput
        style={styles.textInput}
        placeholder="DC_BOX_NO"
        placeholderTextColor="grey"
        onChangeText={text => handleOnchange(text, 'DC_BOX_NO')}
      /> */}
      <TextInput
        style={styles.textInput}
        placeholder={LanguageOpt('ROUTER_OUTER_BOX_NO')}
        placeholderTextColor="grey"
        onChangeText={text => handleOnchange(text, 'ROUTER_OUTER_BOX_NO')}
      />
       {/* <TextInput
        style={styles.textInput}
        placeholder="SIM"
        placeholderTextColor="grey"
        onChangeText={text => handleOnchange(text, 'SIM')}
      /> */}
      {/* <TextInput
        style={styles.textInput}
        placeholder="DCS_NUMBER"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        placeholder="ASSET_ID"
        placeholderTextColor="grey"
      /> */}
      {/* <TextInput
        style={styles.textInput}
        placeholder="PAN_ID"
        placeholderTextColor="grey"
        onChangeText={text => handleOnchange(text, 'PAN_ID')}
      />
      <TextInput
        style={styles.textInput}
        placeholder="MODEM_IMEI_NO"
        placeholderTextColor="grey"
        onChangeText={text => handleOnchange(text, 'MODEM_IMEI_NO')}
      /> */}
      {/* <TextInput
        style={styles.textInput}
        placeholder="BQNAMESPACE"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        placeholder="BQADDRES"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        placeholder="SIM_GSM_NO"
        placeholderTextColor="grey"
      /> */}


      {/* <TextInput
        style={styles.textInput}
        placeholder="IP_ADDRESS"
        placeholderTextColor="grey"
        onChangeText={text => handleOnchange(text, 'IP_ADDRESS')}
      /> */}
      <TextInput
        style={styles.textInput}
        placeholder={LanguageOpt('PHYSICAL_ADDRESS')}
        placeholderTextColor="grey"
        onChangeText={text => handleOnchange(text, 'PHYSICAL_ADDRESS')}
      />
      {/* <TextInput
        style={styles.textInput}
        placeholder="METER_COUNT"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        placeholder="IS_SCHEDULED"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        placeholder="IS_FOTS"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        placeholder="AREA"
        placeholderTextColor="grey"
      />
      */}
        {/* <TextInput
          style={styles.textInput}
          placeholder="INCHARGE_NAME"
          placeholderTextColor="grey"
          onChangeText={text => handleOnchange(text, 'INCHARGE_NAME')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="INCHARGE_CONTACT_NUMBER"
          placeholderTextColor="grey"
          onChangeText={text => handleOnchange(text, 'INCHARGE_CONTACT_NUMBER')}
        />

        <TextInput
          style={styles.textInput}
          placeholder="INCHARGE_USER_ID"
          placeholderTextColor="grey"
          onChangeText={text => handleOnchange(text, 'INCHARGE_USER_ID')}
        /> */}
        <TextInput
          style={styles.textInput}
          placeholder={LanguageOpt('REMARKS_REASONS')}
          placeholderTextColor="grey"
          onChangeText={text => handleOnchange(text, 'REMARKS')}
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
          <TouchableOpacity onPress={() => getLocationFromLocationCapture()}>
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
              textAlign:'center',
              // alignSelf: 'center',              
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

export default AddRouter;

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


 {/* <TextInput
        style={styles.textInput}
        placeholder="DUAL_MONITOR_PAGE_NAME"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        placeholder="SINGLE_MONITOR_PAGE_NAME"
        placeholderTextColor="grey"
      /> */}
      {/* <TextInput
        style={styles.textInput}
        placeholder="NO_OF_CONSUMERS"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        placeholder="FEEDER_CODE"
        placeholderTextColor="grey"
      /> */}