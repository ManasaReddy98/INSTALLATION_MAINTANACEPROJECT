import React, { useState } from 'react';
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
import AssettypeDropdown from './AssettypeDropdown';
import { openDatabase } from 'react-native-sqlite-storage';
import SelectDropdown from 'react-native-select-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddSubStation from '../AssetComponents/AddSubStation';
import AddSection from '../AssetComponents/AddSection';
import AddFeeder from '../AssetComponents/AddFeeder';
import AddDTR from '../AssetComponents/AddDTR';
import AddTMU from '../AssetComponents/AddTMU';
import AddDCU from '../AssetComponents/AddDCU';
import AddRouter from '../AssetComponents/AddRouter';
import AddMeter from '../AssetComponents/AddMeter';
const { width, height } = Dimensions.get('window');
var db = openDatabase({ name: 'AssetDatabase.db' });
const AddNewAssetDetails = ({ route, navigation }) => {
  const { Language, LanguageOpt, asset } = route.params;
  const { selectedUserName } = route.params;
  const [Inputs, setInputs] = useState({
    assettypename: '',
    assetname: '',
    feedername: '',
    feedernumber: '',
    assetlatitude: '',
    assetlongitude: '',
    manufacturedyear: '',
    vendor: '',
    manufacturerid: '',
    manufacturername: '',
    installationtype: '',
    capacity: '',
    mounttype: '',
    polenumber: '',
    assetlocation: '',
    devicetype: '',
    installationlocation: '',
    symbol: '',
  });

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const onchangehandler = (selectedItem, index) => {
    console.log(selectedItem, index);
    //setMessage(countriesID[index]);
  };

  return (
    <View>
      <StatusBar backgroundColor="#182442" />

      {/* <ImageBackground source={require('../images/mapbackground.jpg')}
       style={StyleSheet.absoluteFillObject}> */}
      <ImageBackground
        source={require('../images/mapbackground.jpg')}
        style={{ width: width, height: height }}>
        {/* <View style={{flexDirection: 'column'}}>
          <View
            style={{
              height: 90,
              width: 90,
              borderRadius: 50,
              marginTop: 60,
              alignSelf: 'center',
              borderWidth: 1,
            }}>
            <Image
              style={{height: 70, width: 70, alignSelf: 'center'}}
              source={require('../images/eficaalogo.png')}></Image>
          </View>
          <View>
            <Text style={{ colour: "#192442",fontSize: 18,fontWeight:'800',alignSelf:'center',margin:20 }}>
              {' '}
              Add New {asset}
            </Text>
          </View>
        </View> */}

        <View>
          {(() => {
            console.log('Selected Asset Nmae :: ' + asset);
            if (asset == LanguageOpt('Section')) {
              return <AddSection LanguageOpt={LanguageOpt} selectedUserName={selectedUserName} />;
            } else if (asset == LanguageOpt('Substation')) {
              return <AddSubStation LanguageOpt={LanguageOpt} selectedUserName={selectedUserName} />;
            } else if (asset == LanguageOpt('Feeder')) {
              return <AddFeeder LanguageOpt={LanguageOpt} selectedUserName={selectedUserName} />;
            } else if (asset == LanguageOpt('DTR')) {
              return <AddDTR LanguageOpt={LanguageOpt} selectedUserName={selectedUserName} />;
            } else if (asset == LanguageOpt('TMU')) {
              return <AddTMU LanguageOpt={LanguageOpt} selectedUserName={selectedUserName} />;
            } else if (asset == LanguageOpt('DCU')) {
              return <AddDCU LanguageOpt={LanguageOpt} selectedUserName={selectedUserName} />;
            } else if (asset == LanguageOpt('Router')) {
              return <AddRouter LanguageOpt={LanguageOpt} selectedUserName={selectedUserName} />;
            } else if (asset == LanguageOpt('Meter')) {
              return <AddMeter LanguageOpt={LanguageOpt} selectedUserName={selectedUserName} />;
            }
            // else if (asset == 'Sectionaliser') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'RMU') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'AutoReclosure') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'FPI') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'RTU') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'FRT') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'Pole') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'HT-Line') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'LT-Line') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'UG-HT-Line') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'UG-LT-Line') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // } else if (asset == 'Others') {
            //   return <Text>Selected Asset Name : {asset}</Text>;
            // }

            return null;
          })()}
        </View>
      </ImageBackground>
    </View>
  );
};

export default AddNewAssetDetails;

/*
http://mapp.eficaa.com:8083/Eficaa/api/v1/addFieldAsset


  {
  "section": "string",
  "subStation": "string",
  "feeder": "string",
  "structureCode": "string",
  "dtrserialno": "string",
  "serviceNo": "string",
  "meterSerialNo": "string",
  "newMeterSerialNo": "string",
  "initialReading": 0,
  "finalReading": 0,
  "uniqueServiceNo": "string",
  "consumerName": "string",
  "otherDevices": "string",
  "ar": "string",
  "sectionalizer": "string",
  "rmu": "string",
  "rtu": "string",
  "frt": "string",
  "fpi": "string",
  "phaseType": "string",
  "assetType": "string",
  "capacity": 0,
  "manufactureName": "string",
  "mountType": "string",
  "utilityRefNo": "string",
  "tmusno": "string",
  "dcserialNo": "string",
  "dcimei": "string",
  "dcphysicalAddress": "string",
  "dcouterBoxNumber": "string",
  "simno": "string",
  "routerNo": "string",
  "routerPhysicalAddress": "string",
  "routerOuterBoxNumber": "string",
  "latitude": "string",
  "longitude": "string",
  "location": "string",
  "deviceImage": "string",
  "assetId": 0,
  "userId": "string",
  "androidImei": "string",
  "reasons": "string",
  "remarks": "string"
}
*/
