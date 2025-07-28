import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,Dimensions,Image,ScrollView} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { openDatabase } from 'react-native-sqlite-storage';


const {height,width} = Dimensions.get('window');
var db = openDatabase({ name: 'AssetDatabase.db' });

const AllAssetsInfo=()=>{
    const [markers, setMarkers] = useState([]);
    useEffect(() => {
        db.transaction(tx => {
          tx.executeSql(
            'SELECT  * FROM table_assetdetails',
            [],
            (tx, results) => {
              const len = results.rows.length;
              const data = [];
              for (let i = 0; i < len; i++) {
                const item = results.rows.item(i);
                //console.log("markers are:" + item);
                data.push(item);
              }
             
    
               setMarkers(data);
              
    
            },
            error => console.log(error),
          );
        });
    
      }, [markers])
    
    return(
    <View style={styles.container}>
            <MapView style={styles.map} provider={PROVIDER_GOOGLE}
        initialRegion={{ latitude: 17.42502, longitude: 78.45851, latitudeDelta: 0.01, longitudeDelta: 0.01 }}>
               {markers.map((marker, index) => (
          
          <View>
            {(() => {
              if (marker.asset_typename === 'Feeder') {
                return (

                  <Marker
                    // key={index}
                    
                    coordinate={{
                      latitude: parseFloat(marker.column_one),
                      longitude: parseFloat(marker.column_two)
                    }}
                    pinColor={'green'}
                    

                  >
                    <View style={{height:35,width:35,borderRadius:18,borderWidth:1,borderWidthColor:'red',justifyContent:'center',alignItems:'center'}}>
                    <Image style={{height:20,width:20}} source={require('../imagesv1/combinedcircle.png')}></Image>
                    </View>

                    <Callout >
                      
                      <View style={{width:200,height:150}}>
                        <ScrollView>
                        <View>
                        <Text style={{ color: 'green',fontWeight:'500',fontSize:15 }}>{marker.asset_typename}</Text>
                        <Text style={{ color: 'green' }}>Latitude is:{marker.column_one}</Text>
                        <Text style={{ color: 'green' }}>Longitude is:{marker.column_two}</Text>
                        <Text style={{ color: 'green' }}>Assetname:{marker.asset_name}</Text>
                        <Text style={{ color: 'green' }}>feedername:{marker.asset_feedername}</Text>
                        <Text style={{ color: 'green' }}>feedernumber:{marker.asset_feedernumber}</Text>
                        <Text style={{ color: 'green' }}>mftdyear:{marker.mftd_year}</Text>
                        <Text style={{ color: 'green' }}>vendor:{marker.asset_vendor}</Text>
                        <Text style={{ color: 'green' }}>mftrid:{marker.asset_mftrid}</Text>
                        <Text style={{ color: 'green' }}>mftrname:{marker.asset_mftrname}</Text>
                        <Text style={{ color: 'green' }}>Installationtype:{marker.installationtype}</Text>
                        <Text style={{ color: 'green' }}>capacity:{marker.capacity}</Text>
                      </View>
                      </ScrollView>
                      </View>
                    </Callout>
                  </Marker>
                )
              } else if (marker.asset_typename === 'Sectionaliser') {
                return (
                  <Marker
                    key={index}
                    
                    coordinate={{
                      latitude: parseFloat(marker.column_one),
                      longitude: parseFloat(marker.column_two)
                    }}
                    pinColor={'red'}
                    
                  >
                    <View style={{height:35,width:35,borderRadius:20,borderWidth:1,borderWidthColor:'red',justifyContent:'center',alignItems:'center'}}>

                       <Image style={{height:20,width:20}} source={require('../imagesv1/doublerectangle.png')}></Image>
                    </View>
                    <Callout >
                      <View style={{width:200,height:150}}>
                        <Text style={{ color: 'red' }}>{marker.asset_typename}</Text>
                        <Text style={{ color: 'red' }}>Latitude is:{marker.column_one}</Text>
                        <Text style={{ color: 'red' }}>Longitude is:{marker.column_two}</Text>
                        <Text style={{ color: 'red' }}>Assetname:{marker.asset_name}</Text>
                        <Text style={{ color: 'red' }}>feedername:{marker.asset_feedername}</Text>
                        <Text style={{ color: 'red' }}>feedernumber:{marker.asset_feedernumber}</Text>
                        <Text style={{ color: 'red' }}>mftdyear:{marker.mftd_year}</Text>
                        <Text style={{ color: 'red' }}>vendor:{marker.asset_vendor}</Text>
                        <Text style={{ color: 'red' }}>mftrid:{marker.asset_mftrid}</Text>
                        <Text style={{ color: 'red' }}>mftrname:{marker.asset_mftrname}</Text>
                        <Text style={{ color: 'red' }}>Installationtype:{marker.installationtype}</Text>
                        <Text style={{ color: 'red' }}>capacity:{marker.capacity}</Text>
                      </View>
                    </Callout>

                  </Marker>

                )
              } else if (marker.asset_typename === 'RMU') {
                return (
                  <Marker
                    key={index}
                    
                    coordinate={{
                      latitude: parseFloat(marker.column_one),
                      longitude: parseFloat(marker.column_two)
                    }}
                    pinColor={'purple'}
                    
                  >
                  <View style={{height:35,width:35,borderRadius:25,borderWidth:1,borderWidthColor:'red',justifyContent:'center',alignItems:'center'}}>

                    <Image style={{height:20,width:20}} source={require('../imagesv1/square.png')}></Image>
                    </View>
                    <Callout>
                      <View style={{width:200,height:150}}>
                        <Text style={{ color: 'purple' }}>{marker.asset_typename}</Text>
                        <Text style={{ color: 'purple' }}>Latitude is:{marker.column_one}</Text>
                        <Text style={{ color: 'purple' }}>Longitude is:{marker.column_two}</Text>
                        <Text style={{ color: 'purple' }}>Assetname:{marker.asset_name}</Text>
                        <Text style={{ color: 'purple' }}>feedername:{marker.asset_feedername}</Text>
                        <Text style={{ color: 'purple' }}>feedernumber:{marker.asset_feedernumber}</Text>
                        <Text style={{ color: 'purple' }}>mftdyear:{marker.mftd_year}</Text>
                        <Text style={{ color: 'purple' }}>vendor:{marker.asset_vendor}</Text>
                        <Text style={{ color: 'purple' }}>mftrid:{marker.asset_mftrid}</Text>
                        <Text style={{ color: 'purple' }}>mftrname:{marker.asset_mftrname}</Text>
                        <Text style={{ color: 'purple' }}>Installationtype:{marker.installationtype}</Text>
                        <Text style={{ color: 'purple' }}>capacity:{marker.capacity}</Text>
                      </View>
                    </Callout>
                  </Marker>

                )
              }

              else if (marker.asset_typename === 'AutoReclosure') {
                return (
                  <Marker
                    key={index}
                    
                    coordinate={{
                      latitude: parseFloat(marker.column_one),
                      longitude: parseFloat(marker.column_two)
                    }}
                    pinColor={'purple'}
                    
                  >
                                        <View style={{height:35,width:35,borderRadius:25,borderWidth:1,borderWidthColor:'red',justifyContent:'center',alignItems:'center'}}>

                    <Image style={{height:20,width:20}} source={require('../imagesv1/trianglecircle.png')}></Image>
                    </View>
                    <Callout>
                      <View style={{width:200,height:150}}>
                        <Text style={{ color: 'purple' }}>{marker.asset_typename}</Text>
                        <Text style={{ color: 'purple' }}>Latitude is:{marker.column_one}</Text>
                        <Text style={{ color: 'purple' }}>Longitude is:{marker.column_two}</Text>
                        <Text style={{ color: 'purple' }}>Assetname:{marker.asset_name}</Text>
                        <Text style={{ color: 'purple' }}>feedername:{marker.asset_feedername}</Text>
                        <Text style={{ color: 'purple' }}>feedernumber:{marker.asset_feedernumber}</Text>
                        <Text style={{ color: 'purple' }}>mftdyear:{marker.mftd_year}</Text>
                        <Text style={{ color: 'purple' }}>vendor:{marker.asset_vendor}</Text>
                        <Text style={{ color: 'purple' }}>mftrid:{marker.asset_mftrid}</Text>
                        <Text style={{ color: 'purple' }}>mftrname:{marker.asset_mftrname}</Text>
                        <Text style={{ color: 'purple' }}>Installationtype:{marker.installationtype}</Text>
                        <Text style={{ color: 'purple' }}>capacity:{marker.capacity}</Text>
                      </View>
                    </Callout>
                  </Marker>

                )
              }

              else if (marker.asset_typename === 'DTR') {
                return (
                  <Marker
                    key={index}
                    
                    coordinate={{
                      latitude: parseFloat(marker.column_one),
                      longitude: parseFloat(marker.column_two)
                    }}
                    pinColor={'purple'}
                    
                  >
                    <View style={{height:35,width:35,borderRadius:25,borderWidth:1,borderWidthColor:'red',justifyContent:'center',alignItems:'center'}}>

                      <Image style={{height:20,width:20}} source={require('../imagesv1/doublesquare.png')}></Image>
                    </View>
                    <Callout>
                      <View style={{width:200,height:150}}>
                        <Text style={{ color: 'purple' }}>{marker.asset_typename}</Text>
                        <Text style={{ color: 'purple' }}>Latitude is:{marker.column_one}</Text>
                        <Text style={{ color: 'purple' }}>Longitude is:{marker.column_two}</Text>
                        <Text style={{ color: 'purple' }}>Assetname:{marker.asset_name}</Text>
                        <Text style={{ color: 'purple' }}>feedername:{marker.asset_feedername}</Text>
                        <Text style={{ color: 'purple' }}>feedernumber:{marker.asset_feedernumber}</Text>
                        <Text style={{ color: 'purple' }}>mftdyear:{marker.mftd_year}</Text>
                        <Text style={{ color: 'purple' }}>vendor:{marker.asset_vendor}</Text>
                        <Text style={{ color: 'purple' }}>mftrid:{marker.asset_mftrid}</Text>
                        <Text style={{ color: 'purple' }}>mftrname:{marker.asset_mftrname}</Text>
                        <Text style={{ color: 'purple' }}>Installationtype:{marker.installationtype}</Text>
                        <Text style={{ color: 'purple' }}>capacity:{marker.capacity}</Text>
                      </View>
                    </Callout>
                  </Marker>

                )
              }

              else if (marker.asset_typename === 'DCU') {
                return (
                  <Marker
                    key={index}
                    
                    coordinate={{
                      latitude: parseFloat(marker.column_one),
                      longitude: parseFloat(marker.column_two)
                    }}
                    pinColor={'purple'}
                    
                  >
                                        <View style={{height:35,width:35,borderRadius:25,borderWidth:1,borderWidthColor:'red',justifyContent:'center',alignItems:'center'}}>

                    <Image style={{height:20,width:20}} source={require('../imagesv1/doublerectangle.png')}></Image>
                    </View>
                    <Callout>
                      <View style={{width:200,height:150}}>
                        <Text style={{ color: 'purple' }}>{marker.asset_typename}</Text>
                        <Text style={{ color: 'purple' }}>Latitude is:{marker.column_one}</Text>
                        <Text style={{ color: 'purple' }}>Longitude is:{marker.column_two}</Text>
                        <Text style={{ color: 'purple' }}>Assetname:{marker.asset_name}</Text>
                        <Text style={{ color: 'purple' }}>feedername:{marker.asset_feedername}</Text>
                        <Text style={{ color: 'purple' }}>feedernumber:{marker.asset_feedernumber}</Text>
                        <Text style={{ color: 'purple' }}>mftdyear:{marker.mftd_year}</Text>
                        <Text style={{ color: 'purple' }}>vendor:{marker.asset_vendor}</Text>
                        <Text style={{ color: 'purple' }}>mftrid:{marker.asset_mftrid}</Text>
                        <Text style={{ color: 'purple' }}>mftrname:{marker.asset_mftrname}</Text>
                        <Text style={{ color: 'purple' }}>Installationtype:{marker.installationtype}</Text>
                        <Text style={{ color: 'purple' }}>capacity:{marker.capacity}</Text>
                      </View>
                    </Callout>
                  </Marker>

                )
              }

              else if (marker.asset_typename === 'Meter') {
                return (
                  <Marker
                    key={index}
                    
                    coordinate={{
                      latitude: parseFloat(marker.column_one),
                      longitude: parseFloat(marker.column_two)
                    }}
                    pinColor={'purple'}
                    
                  >
                                        <View style={{height:35,width:35,borderRadius:25,borderWidth:1,borderWidthColor:'red',justifyContent:'center',alignItems:'center'}}>

                    <Image style={{height:20,width:20}} source={require('../imagesv1/campfire.png')}></Image>
                    </View>
                    <Callout>
                      <View style={{width:200,height:150}}>
                        <Text style={{ color: 'purple' }}>{marker.asset_typename}</Text>
                        <Text style={{ color: 'purple' }}>Latitude is:{marker.column_one}</Text>
                        <Text style={{ color: 'purple' }}>Longitude is:{marker.column_two}</Text>
                        <Text style={{ color: 'purple' }}>Assetname:{marker.asset_name}</Text>
                        <Text style={{ color: 'purple' }}>feedername:{marker.asset_feedername}</Text>
                        <Text style={{ color: 'purple' }}>feedernumber:{marker.asset_feedernumber}</Text>
                        <Text style={{ color: 'purple' }}>mftdyear:{marker.mftd_year}</Text>
                        <Text style={{ color: 'purple' }}>vendor:{marker.asset_vendor}</Text>
                        <Text style={{ color: 'purple' }}>mftrid:{marker.asset_mftrid}</Text>
                        <Text style={{ color: 'purple' }}>mftrname:{marker.asset_mftrname}</Text>
                        <Text style={{ color: 'purple' }}>Installationtype:{marker.installationtype}</Text>
                        <Text style={{ color: 'purple' }}>capacity:{marker.capacity}</Text>
                      </View>
                    </Callout>
                  </Marker>

                )
              }

              
            })()}




          </View>
        ))}


        </MapView>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        color:'black',

    },
    map: {
        height: height 
      }
})

export default AllAssetsInfo;