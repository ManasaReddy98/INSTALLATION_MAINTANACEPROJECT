import React,{useState,useEffect} from 'react'
import { View, Text, TextInput, StatusBar,TouchableOpacity, ScrollView } from 'react-native';
const DCU = ({navigation, color,item, Language,selectedAssetDetails,assetTypeName}) => {
    
    const [selectedAssetDetailsInfo, setSelectedAssetDetailsInfo] = useState({

      dcuId: '',
      simId: '',
      dcuSno: '',
      assetId: '',
      feederId:'' ,
      dcuProdVersion: '',
      latitude: '',
      longitude: '',
      manufacturerId: '',
      manufacturedDate: '',
      panId: '',
      rfId:''
      });

      console.log(" QR Asset Details "," Asset DETAILS QR PAGE ... @@@@@@@@@@@@@@@@@@    " + selectedAssetDetails , assetTypeName);

      useEffect(() => {
            setSelectedAssetDetailsInfo({

              dcuId: selectedAssetDetails.dcuId,
              simId:  selectedAssetDetails.simId,
              dcuSno:  selectedAssetDetails.dcuSno,
              assetId:  selectedAssetDetails.assetId,
              feederId: selectedAssetDetails.feederId,
              dcuProdVersion: selectedAssetDetails.dcuProdVersion,
              latitude:  parseFloat(selectedAssetDetails.latitude),
              longitude:  parseFloat(selectedAssetDetails.longitude),
              manufacturerId:  selectedAssetDetails.manufacturerId,
              manufacturedDate:  selectedAssetDetails.manufacturedDate,
              panId:  selectedAssetDetails.panId,
              rfId: selectedAssetDetails.rfId,


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
              // latitude:parseFloat(selectedAssetDetails.latitude),
              // longitude:parseFloat(selectedAssetDetails.longitude),
              assetImage:selectedAssetDetails.assetImage
      
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

            </ScrollView>
            <View>
            </View>
        </View>
  )
}
export default DCU


const Seperator = () => {
    return (
        <View style={{ height: 10 }}>
        </View>
    )
}
