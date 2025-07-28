import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
const METER = ({
  navigation,
  color,
  item,
  LanguageOpt,
  Language,
  selectedAssetDetails,
  assetTypeName,
}) => {
  const [selectedAssetDetailsInfo, setSelectedAssetDetailsInfo] = useState({
    MeterId: '',
    MfId: '',
    DtrId: '',
    SimId: '',
    DccuIdPrim: '',
    PaymentMode: '',
    AssetId: '',
    Description: '',
    ProductionVersion: '',
    DeviceTId: '',
    MeterCategory: '',
    MeterHardwarVersion: '',
    MeterFirmwareVersion: '',
    ModemAddress: 0,
    ModemDescription: '',
    PageTransitionEventrotocol: '',
    PoleId: 0,
    CommType: '',
    PhysicalAddress: '',
    MfgData: '',
    WarrentyEnd: '',
    Location: '',
    LandMark: '',
    Latitude: parseFloat(17.4248742),
    Longitude: parseFloat(78.4583377),
    MeterStatus: '',
    MeterPicture: '',
    DcuIdSec: 0,
    IpAddress: '',
    SerialNumber: '',
  });
console.log("hello",item)
  console.log(
    ' QR Asset Details ',
    ' Asset DETAILS QR PAGE ... @@@@@@@@@@@@@@@@@@    ' + selectedAssetDetails,
    assetTypeName,
  );
  useEffect(() => {
    setSelectedAssetDetailsInfo({
      MeterId: selectedAssetDetails.meterId,
      MfId: selectedAssetDetails.mfId,
      DtrId: selectedAssetDetails.dtrId,
      SimId: selectedAssetDetails.sim_id,
      PoleId: selectedAssetDetails.poleId,
      ModemAddress: selectedAssetDetails.modemAddress,
      ModemDescription: selectedAssetDetails.modemDescription,
      PhysicalAddress: selectedAssetDetails.physicalAddress,
      DcuIdPrim: selectedAssetDetails.dcuIdPrim,
      PaymentMode: selectedAssetDetails.paymentMode,
      AssetId: selectedAssetDetails.assetId,
      Description: selectedAssetDetails.description,
      IpAddress: selectedAssetDetails.ipAddress,
      SerialNumber: selectedAssetDetails.serialNumber,
      DeviceTId: selectedAssetDetails.deviceTId,
      MeterCategory: selectedAssetDetails.meterCategory,
      MeterHardwarVersion: selectedAssetDetails.meterHardwarVersion,
      MeterFirmwareVersion: selectedAssetDetails.meterFirmwareVersion,
      Protocol: selectedAssetDetails.protocol,
      CommType: selectedAssetDetails.commType,
      MfgData: selectedAssetDetails.mfgData,
      MarrentyEnd: selectedAssetDetails.warrentyEnd,
      Location: selectedAssetDetails.location,
      LandMark: selectedAssetDetails.landMark,
      Latitude: parseFloat(selectedAssetDetails.latitude),
      Longitude: parseFloat(selectedAssetDetails.longitude),
      MeterStatus: selectedAssetDetails.meterStatus,
      MeterPicture: selectedAssetDetails.meterPicture,
      DcuIdSec: selectedAssetDetails.dcuIdSec,
      ProductionVersion: selectedAssetDetails.productionVersion,
    });
  }, [selectedAssetDetails]);

  const assetEntries = Object.entries(item);
  console.log("assetEntries",assetEntries)
  // const capitalizeFirstLetter = (string) => {
  //   if (!string) return '';
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };

  const capitalizeFirstLetter = string => {
    if (!string) return '';

    // Remove special characters, including semicolons, but keep spaces
    const cleanedString = string.replace(/[^a-zA-Z0-9\s]/g, '');

    // Insert spaces before each uppercase letter
    const spacedString = cleanedString.replace(/([A-Z])/g, ' $1');

    // Capitalize the first letter of each word
    return spacedString
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // navigation, color,item, Language,selectedAssetDetails,assetTypeName
  return (
    <View style={{height: '90%'}}>
      <StatusBar backgroundColor="#18253f" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Seperator /> */}
        {/* <Text style={{ color: color, marginBottom: 5, marginTop: 15 }}>{Language.assetId}</Text>
                <Texts placeholder={Language.AssetIdPlaceholder} /> */}

        <Seperator />
        {/* <Text style={{ color: color, marginBottom: 5 ,marginLeft:5}}>DTR ID</Text>
                <Text style={{
                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3,
                    color:"#000",
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius: 5, width: '100%', height: 50, backgroundColor: '#fff'
                }}> {selectedAssetDetails.dtrId} </Text> */}
        {/* <Seperator /> */}

        {assetEntries.map(([key, value]) => (
          <View key={key}>
            <Text style={{color: color, marginBottom: 5, marginLeft: 5}}>
              {capitalizeFirstLetter(key)}
            </Text>
            <Text
              style={{
                borderWidth: 0,
                paddingLeft: 5,
                paddingTop: 15,
                elevation: 3,
                color: '#000',
                alignSelf: 'center',
                marginTop: 5,
                borderRadius: 5,
                width: '100%',
                height: 50,
                backgroundColor: '#fff',
              }}>
              {value}
            </Text>
            <Seperator />
          </View>
        ))}

        <Text style={{color: color, marginBottom: 10}}></Text>
        <Text style={{color: color, marginBottom: 10}}></Text>

        <Seperator />
      </ScrollView>
      <View></View>
    </View>
  );
};

export default METER;

const Seperator = () => {
  return <View style={{height: 10}}></View>;
};
