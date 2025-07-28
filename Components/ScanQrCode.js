import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import DTR from './assetTypes/DTR';
import TMU from './assetTypes/TMU';
import METER from './assetTypes/METER';
import DCU from './assetTypes/DCU';
import Router from './assetTypes/Router';

import LoginQrAsset from './LoginQrAsset';
import { GlobalStyles } from '../appstyles/GlobalStyles';
import InstallationProcessMaking from './InstallationProcessMaking';
import AssetInstallationProgressView from './AssetInstallationProgressView';
const ScanQrCode = ({ navigation, route }) => {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').hight;
  const imag = require('../images/qrcode.png');
  //const { coloring, Language,AssetDetails,item,Location } = route.params;
  const [assetTypeName, setAssetTypeName] = useState();
  const [specificLocation, setSpecificLocation] = useState({
    latitude: parseFloat(17.4248742),
    longitude: parseFloat(78.4583377),
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
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
    LanguageOpt,    
    workStartedDateTime,
    assettypename
  } = route.params;
  
  // console.log(
  //   'MAP VIEW PAGE',
  //   'MAP VIEW PAGE' + AssetDetails.length,
  //   JSON.stringify(selectedAssetDetails),
  // );

  //const [colorCode, setColorCode] = useState(color);
  useEffect(() => {
    setSpecificLocation({
      latitude: parseFloat(geoLocation.latitude),
      longitude: parseFloat(geoLocation.longitude),
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    console;
  }, [geoLocation]);

  useEffect(() => {
    if (item?.assetId) {
      //var res = str.substring(1, 4);
      const assetTypeNM = item.assetId.substring(0, 3);
      setAssetTypeName(assetTypeNM);
    }
  }, [item]);

  // console.log(
  //   'Asset typeName',
  //   'Asset type Name @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ' + assetTypeName,
  // );

  return (
    <View>
      <View
        style={{
          height: '20%',
          width: '100%',
          // backgroundColor: coloring,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15 }}>
          <View style={{ flexDirection: 'column', flex: 2, marginLeft: 10 }}>
            {item?.assetId ? <Text style={{ fontWeight: 'bold', color: '#18253f', }}>
              {item.assetId}
            </Text>
              : <Text style={{ fontWeight: 'bold', color: '#18253f', }}>
              {item.serviceNo}
            </Text>}
            <Text style={{ marginTop: 5, color:'#18253f', }}>
              {LanguageOpt('Location')} :{address}
            </Text>
            <Text style={{ marginTop: 5, color: '#18253f', }}>
              {LanguageOpt('Lat_Long')} :{specificLocation.latitude},
              {specificLocation.longitude}
            </Text>
          </View>

          {/* <View style={{height:80,width:80 ,borderWidth:1,borderColor:"#ffffff",borderRadius:20}}>
                        <TouchableOpacity style={{alignSelf:'center',marginTop:5}} 
                           onPress={() => navigation.navigate('QrScanner')}
                        >
                                <Image
                                    style={{ height: 70, width: 70 }}
                                    source={item}
                                />
                        </TouchableOpacity>
                    </View> */}
        </View>
      </View>

      <View
        style={{
          height: '72%',
          marginHorizontal: '10%',
          backgroundColor: '#fffff',
        }}>
        {(() => {
          if (assetTypeName === 'DTR') {
            return (
              <DTR
                color={coloring}
                item={item}
                LanguageOpt={LanguageOpt}
                Language={Language}
                selectedAssetDetails={selectedAssetDetails}
                assetTypeName={assetTypeName}
              />
            );
          } else if (assetTypeName === 'TMU') {
            return (
              <TMU
                color={coloring}
                item={item}
                LanguageOpt={LanguageOpt}
                Language={Language}
                selectedAssetDetails={selectedAssetDetails}
                assetTypeName={assetTypeName}
              />
            );
          } else if (item.serviceId) {
            return (
              <METER
                color={coloring}
                item={item}
                LanguageOpt={LanguageOpt}
                Language={Language}
                selectedAssetDetails={selectedAssetDetails}
                assetTypeName={assetTypeName}
              />
            );
          } else if (assetTypeName === 'DCU') {
            return (
              <DCU
                color={coloring}
                item={item}
                LanguageOpt={LanguageOpt}
                Language={Language}
                selectedAssetDetails={selectedAssetDetails}
                assetTypeName={assetTypeName}
              />
            );
          } else if (assetTypeName === 'ROU') {
            return (
              <Router
                color={coloring}
                item={item}
                LanguageOpt={LanguageOpt}
                Language={Language}
                selectedAssetDetails={selectedAssetDetails}
                assetTypeName={assetTypeName}
              />
            );
          }
          // return null;
        })()}
        {/* <LoginQrAsset color={colorCode} item={item} Language={Language} selectedAssetDetails={selectedAssetDetails} assetTypeName={assetTypeName} /> */}
      </View>

      <View style={styles.fixToText}>
        <TouchableOpacity
          style={{ alignSelf: 'center' }}
          // AssetInstallationProgress  -- circle progress class ,
          // AssetInstallationProgressView =--List view
          onPress={() =>
            navigation.navigate('NumberingProgress', {
              //NumberingProgress
              //AssetInstallationProgress
              AssetDetails: item, //Language.dtData,
              item: item, //Language.AssetDataTitleTextDT,
              color: '#E27D39',
              Language: Language,
              assettypename:assettypename,
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
            })
          }>
          <Text style={[GlobalStyles.button, { backgroundColor: coloring }]}>
            {LanguageOpt('Save')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ScanQrCode;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  // touchable: {
  //     width: 140,
  //     borderRadius: 40,
  //     backgroundColor: coloring,
  //     alignItems: 'center',
  //     height: 40,
  //     justifyContent: 'center'
  // },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
