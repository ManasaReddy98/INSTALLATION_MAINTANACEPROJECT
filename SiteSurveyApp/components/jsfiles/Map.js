import React from 'react';
import {View,StyleSheet, Dimensions,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import MapView , { PROVIDER_GOOGLE } from 'react-native-maps';

const {height,width} = Dimensions.get('window');
const Map = ()=>{
    return(
      
      <MapView style={styles.map}  provider={PROVIDER_GOOGLE} initialRegion={{latitude:17.42502,longitude:78.45851,latitudeDelta:0.01,longitudeDelta:0.01}}/>
      
    )
};
const styles = StyleSheet.create({
   map:{
    height:height-180
   }
})
export default Map;
