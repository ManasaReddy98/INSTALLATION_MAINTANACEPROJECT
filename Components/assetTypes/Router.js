import React,{useState,useEffect} from 'react'
import { View, Text, TextInput, StatusBar,TouchableOpacity, ScrollView } from 'react-native';
const Router= ({navigation, color,item, Language,selectedAssetDetails,assetTypeName}) =>{
    
    const [selectedAssetDetailsInfo, setSelectedAssetDetailsInfo] = useState({
      routerId: '',
      routerSno: '',
      assetId: '',
      mfId: '',
      dcuId:'' ,
      physicalAddress: '',
      routerHwVer: '',
      routerFirmVer: '',
      manufacturedDate: '',
      warrantyEnd: '',
      location:'',
      latitude:17.1234,
      longitude:78.5678,

      });

      console.log(" QR Asset Details "," Asset DETAILS QR PAGE ROUTER  ... @@@@@@@@@@@@@@@@@@    " + selectedAssetDetails , assetTypeName);

      useEffect(() => {
            setSelectedAssetDetailsInfo({
              routerId: selectedAssetDetails.dtrId,
              routerSno: selectedAssetDetails.feederId,
              assetId: selectedAssetDetails.structureId,
              mfId: selectedAssetDetails.transformerSno,
              dcuId:selectedAssetDetails.mfId ,
              physicalAddress: selectedAssetDetails.physicalAddress,
              routerHwVer: selectedAssetDetails.routerHwVer,
              routerFirmVer: selectedAssetDetails.routerFirmVer,
              manufacturedDate: selectedAssetDetails.manufacturedDate,
              warrantyEnd: selectedAssetDetails.warrantyEnd,
              location: selectedAssetDetails.location,
              latitude:parseFloat(selectedAssetDetails.latitude),
              longitude:parseFloat(selectedAssetDetails.longitude),
            
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
                <Texts placeholder={Language.ManufacturerNamePlaceholder} /> */}

                <Text style={{ color: color, marginBottom: 10 }}></Text>
                <Text style={{ color: color, marginBottom: 10 }}></Text>

                <Seperator />

            </ScrollView>
            <View>
            </View>
        </View>
  )
}

export default Router


const Seperator = () => {
    return (
        <View style={{ height: 10 }}>
        </View>
    )
}
