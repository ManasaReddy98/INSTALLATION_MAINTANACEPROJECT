import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, StatusBar,TouchableOpacity, ScrollView } from 'react-native';
//= ({ navigation, color,item, Language,selectedAssetDetails,assetTypeName }) => 

const DTR = ({navigation, color,item, Language,selectedAssetDetails,assetTypeName}) => {
    
    const [selectedAssetDetailsInfo, setSelectedAssetDetailsInfo] = useState({
        dtrId: '',
        feederId: '',
        structureId: '',
        transformerSno: '',
        mfId:'' ,
        assetId: '',
        transformerType: '',
        mountType: '',
        utilityRefNo: '',
        structureCode: '',
        location: '',
        latitude:parseFloat(17.4248742),
        longitude:parseFloat(78.4583377),
        assetImage:''

      });

      console.log(" QR Asset Details "," Asset DETAILS QR PAGE ... @@@@@@@@@@@@@@@@@@    " + selectedAssetDetails , assetTypeName);

      useEffect(() => {
            setSelectedAssetDetailsInfo({
              dtrId: selectedAssetDetails.dtrId,
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
              // latitude:parseFloat(selectedAssetDetails.latitude),
              // longitude:parseFloat(selectedAssetDetails.longitude),
              assetImage:selectedAssetDetails.assetImage
      
            });         
      
      }, [selectedAssetDetails])
  return (
    <View style={{ height: '90%' }}>
             <StatusBar
                backgroundColor="#18253f"
            />
           
            <ScrollView showsVerticalScrollIndicator={false}>
                <Seperator />
                <Text style={{ color: color,marginTop:5,marginLeft:5, fontWeight:'bold'}}>DTR ID</Text>
                <Text style={{
                    borderWidth: 0, 
                    paddingLeft: 5,
                    elevation: 3,
                    color:"#000",
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius: 5, width: '100%', paddingTop: 10, height: 40, backgroundColor: '#fff'
                }}> {selectedAssetDetails.dtrId} </Text>
                <Seperator />


                <Text style={{ color: color, marginBottom: 5 ,marginLeft:5, fontWeight:'bold'}}>FEEDER ID</Text>
                <Text style={{
                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3,
                    color:"#000",
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius: 5, width: '100%', paddingTop: 10, height: 40, backgroundColor: '#fff'
                }}> {selectedAssetDetails.feederId} </Text>
                <Seperator />


                <Text style={{ color: color, marginBottom: 5 ,marginLeft:5, fontWeight:'bold'}}>STRUCTURE ID</Text>
                <Text style={{
                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3,
                    color:"#000",
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius: 5, width: '100%',paddingTop: 10, height: 40, backgroundColor: '#fff'
                }}> {selectedAssetDetails.structureId} </Text>
                <Seperator />



                <Text style={{ color: color, marginBottom: 5 ,marginLeft:5, fontWeight:'bold'}}>TRANSFORMER SNO</Text>
                <Text style={{
                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3,
                    color:"#000",
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius: 5, width: '100%', paddingTop: 10, height: 40, backgroundColor: '#fff'
                }}> {selectedAssetDetails.transformerSno} </Text>
                <Seperator />


                <Text style={{ color: color, marginBottom: 5 ,marginLeft:5, fontWeight:'bold'}}>MF ID</Text>
                <Text style={{
                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3,
                    color:"#000",
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius: 5, width: '100%', paddingTop: 10, height: 40, backgroundColor: '#fff'
                }}> {selectedAssetDetails.mfId} </Text>
                <Seperator />


              


                <Text style={{ color: color, marginBottom: 5 ,marginLeft:5, fontWeight:'bold'}}>TRANSFORMER TYPE</Text>
                <Text style={{
                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3,
                    color:"#000",
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius: 5, width: '100%',paddingTop: 10, height: 40, backgroundColor: '#fff'
                }}> {selectedAssetDetails.transformerType} </Text>
                <Seperator />

                <Text style={{ color: color, marginBottom: 5 ,marginLeft:5, fontWeight:'bold'}}>MOUNT TYPE</Text>
                <Text style={{
                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3,
                    color:"#000",
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius: 5, width: '100%', paddingTop: 10, height: 40, backgroundColor: '#fff'
                }}> {selectedAssetDetails.mountType} </Text>
                <Seperator />

                <Text style={{ color: color, marginBottom: 5 ,marginLeft:5, fontWeight:'bold'}}>UTILITY REF NO. </Text>
                <Text style={{
                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3,
                    color:"#000",
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius: 5, width: '100%',paddingTop: 10, height: 40, backgroundColor: '#fff'
                }}> {selectedAssetDetails.utilityRefNo} </Text>
                <Seperator />

                <Text style={{ color: color, marginBottom: 5 ,marginLeft:5, fontWeight:'bold'}}>STRUCTURE CODE</Text>
                <Text style={{
                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3,
                    color:"#000",
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius: 5, width: '100%',paddingTop: 10, height: 40, backgroundColor: '#fff'
                }}> {selectedAssetDetails.structureCode} </Text>
                <Seperator />


           




                <Text style={{ color: color, marginBottom: 10 }}></Text>
                <Text style={{ color: color, marginBottom: 10 }}></Text>

                <Seperator />

            </ScrollView>
            <View>
            </View>
        </View>
  )
}

export default DTR


const Seperator = () => {
    return (
        <View style={{ height: 10 }}>
        </View>
    )
}
