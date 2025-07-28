import React,{useState,useEffect} from 'react'
import { View, Text, TextInput, StatusBar,TouchableOpacity, ScrollView } from 'react-native';
const TMU= ({navigation, color,item, Language,selectedAssetDetails,assetTypeName}) => {  
    const [selectedAssetDetailsInfo, setSelectedAssetDetailsInfo] = useState({
      tmuId: '',
      simId: '',
      dtrId: '',
      assetId: '',
      tmuSerialNumber:'' ,
      tmuType: '',
      description: '',
      location: '',
      landMark: '',
      latitude: parseFloat(17.4248742),
      longitude: parseFloat(78.4583377),
      modemAddress: "modemadd5",
      modemDescription: "modemdesc5",
      mfgDate: null,
      warrentyEnd: null,
      tmuPicture:''      
      });

      console.log(" QR Asset Details "," Asset DETAILS QR PAGE ... @@@@@@@@@@@@@@@@@@    " + selectedAssetDetails , assetTypeName);

      useEffect(() => {
            setSelectedAssetDetailsInfo({
              tmuId: selectedAssetDetails.tmuId,
              simId: selectedAssetDetails.simId,
              dtrId: selectedAssetDetails.dtrId,
              assetId: selectedAssetDetails.assetId,
              tmuSerialNumber:selectedAssetDetails.tmuSerialNumber ,
              tmuType: selectedAssetDetails.tmuType,
              description: selectedAssetDetails.description,
              location: selectedAssetDetails.location,
              landMark: selectedAssetDetails.landMark,
              latitude: parseFloat(selectedAssetDetails.latitude),
              longitude: parseFloat(selectedAssetDetails.longitude),
              modemAddress: selectedAssetDetails.modemAddress,
              modemDescription: selectedAssetDetails.modemDescription,
              mfgDate: selectedAssetDetails.mfgDate,
              warrentyEnd: selectedAssetDetails.warrentyEnd,
              tmuPicture:selectedAssetDetails.tmuPicture  

              // dtrId: selectedAssetDetails.dtrId,
              // feederId: selectedAssetDetails.feederId,
              // structureId: selectedAssetDetails.structureId,
              // transformerSno: selectedAssetDetails.transformerSno,
              // mfId:selectedAssetDetails.mfId ,
              // assetId: selectedAssetDetails.assetId,
              // transformerType: selectedAssetDetails.transformerType,
              // mountType: selectedAssetDetails.mountType,
              // utilityRefNo: selectedAssetDetails.utilityRefNo,
              // structureCode: selectedAssetDetails.structureCode,
              // location: selectedAssetDetails.location,
              // // latitude:parseFloat(selectedAssetDetails.latitude),
              // // longitude:parseFloat(selectedAssetDetails.longitude),
              // assetImage:selectedAssetDetails.assetImage
      
            });         
      
      }, [selectedAssetDetails])
      
      const assetEntries = Object.entries(selectedAssetDetails);
      const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
    
    
    // navigation, color,item, Language,selectedAssetDetails,assetTypeName 
  return (
    <View style={{ height: '90%' }}>
             <StatusBar
                backgroundColor="#18253f"
            />
             {/* dtrId: selectedAssetDetails.dtrId,
            feederId: selectedAssetDetails.feederId,
            structureId: selectedAssetDetails.structureId,
            transformerSno: selectedAssetDetails.transformerSno,
            mfId:selectedAssetDetails.mfId ,
            assetId: selectedAssetDetails.assetId,
            transformerType: selectedAssetDetails.transformerType,
            mountType: selectedAssetDetails.mountType,
            utilityRefNo: selectedAssetDetails.utilityRefNo,
            structureCode: selectedAssetDetails.structureCode,
            location: selectedAssetDetails.location,
            latitude:parseFloat(selectedAssetDetails.latitude),
            longitude:parseFloat(selectedAssetDetails.longitude),
            assetImage:selectedAssetDetails.assetImage */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <Seperator /> */}
                {/* <Text style={{ color: color, marginBottom: 5, marginTop: 15 }}>{Language.assetId}</Text>
                <Texts placeholder={Language.AssetIdPlaceholder} /> */}

                <Seperator />
                {assetEntries.map(([key, value]) => (
                    <View key={key}>
                      <Text style={{ color: color, marginBottom: 5 ,marginLeft:5}}>{capitalizeFirstLetter(key)}:</Text>
                      <Text style={{
                              borderWidth: 0, paddingLeft: 5,paddingTop: 15,
                              elevation: 3,
                              color:"#000",
                              alignSelf:'center',
                              marginTop:5,
                              borderRadius: 5, width: '100%', height: 50, backgroundColor: '#fff'}}>{value}</Text>
                        <Seperator />
                    </View>
                ))}

                <Text style={{ color: color, marginBottom: 10 }}></Text>
                <Text style={{ color: color, marginBottom: 10 }}></Text> 

                <Seperator />

                {/* <Text style={{ color: color, marginBottom: 5 }}>{Language.AssetPartNumber}</Text>
                <Texts placeholder={Language.AssetPartNumberPlaceholder} />
                <Seperator />

                <Text style={{ color: color, marginBottom: 5 }}>{Language.VendorName}</Text>
                <Texts placeholder={Language.VendorNamePlaceholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.EnterYourPassword}</Text>
                <Texts placeholder={Language.EnterYourPasswordPlaceholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.ManufacturerDate}</Text>
                <Texts placeholder={Language.ManufacturerDatePlaceholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.ManufacturerName}</Text>
                <Texts placeholder={Language.ManufacturerNamePlaceholder} />

                <Text style={{ color: color, marginBottom: 10 }}></Text>
                <Text style={{ color: color, marginBottom: 10 }}></Text> */}

                <Seperator />

            </ScrollView>
            <View>
            </View>
        </View>
  )
}

export default TMU

const Seperator = () => {
    return (
        <View style={{ height: 10 }}>
        </View>
    )
}
