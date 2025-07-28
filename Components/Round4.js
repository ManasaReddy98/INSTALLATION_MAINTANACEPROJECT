import React from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { globalStyles } from './Stylesheet/styles';
import CameraView from './CameraView';
const Round4 = ({Language}) => {
    const navigation = useNavigation(); 
    return (
        <View style={styles.container}>
            <View style={{ height: 50, width: 2, backgroundColor: "#ff6600", marginLeft: 130 }}></View>
            <View style={{ flexDirection: 'row', marginTop: 5, }}>
                <View style={{ height: 60, width: 100, marginLeft: 80, borderWidth: 7, borderRightWidth: 0, borderColor: '#ff6600', backgroundColor: 'white', flexDirection: 'row', borderBottomLeftRadius: 6, borderTopLeftRadius: 6, alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('CameraView')}>
                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "#ff6600", alignItems: 'center', justifyContent: 'center' }}>
                        <Image  style={{height:30,width:30}} source={require('../images/camera.png')}/>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 2, height: 53, marginTop: 4, width: 150, backgroundColor: 'white', alignIems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#48484a', borderTopRightRadius: 6, borderBottomEndRadius: 6, borderLeftWidth: 0 }}>
                    <Text style={{ alignSelf: 'center', color:'black',fontWeight: 'bold' }}>{Language.capturepicture}</Text>
                </View>
            </View>
            <View style={{ height: 50, width: 2, backgroundColor: "#ff6600", marginLeft: 130, marginTop: 5 }}></View>
            <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                <View style={{ justifyContent: 'center', marginTop: 3, borderRightWidth: 0, borderTopLeftRadius: 6, borderBottomLeftRadius: 6, alignItems: 'center', width: 120, height: 55, borderWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold',color:'black', }}>{Language.capturelocation}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 2, width: 70, height: 60, borderWidth: 6, borderColor: '#007FFF', borderLeftWidth: 0 }}>
                <TouchableOpacity>
                    <View style={{ borderRadius: 5, borderWidth: 1, height: 30, width: 30, borderColor: "#007FFF", alignItems: 'center', justifyContent: 'center' }}>
                        <Image  style={{height:30,width:30}}source={require('../images/map.png')}/>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 50, width: 2, backgroundColor: "#ff6600", marginLeft: 130, marginTop: 5 }}></View>
            <View style={{ flexDirection: 'row', marginTop: 5, }}>
                <View style={{ height: 60, width: 100, marginLeft: 80, borderWidth: 7, borderRightWidth: 0, borderColor: '#64EEFA', backgroundColor: 'white', flexDirection: 'row', borderBottomLeftRadius: 6, borderTopLeftRadius: 6, alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity>
                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "#64EEFA", alignItems: 'center', justifyContent: 'center' }}>
                        <Image  style={{height:30,width:30}} source={require('../images/video.png')}/>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 2, height: 53, marginTop: 4, width: 150, backgroundColor: 'white', alignIems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#48484a', borderTopRightRadius: 6, borderBottomEndRadius: 6, borderLeftWidth: 0 }}>
                    <Text style={{ alignSelf: 'center', fontWeight: 'bold',color:'black', }}>{Language.capturevideo}</Text>
                </View>
            </View>
            <View style={{ height: 50, width: 2, backgroundColor: "#ff6600", marginLeft: 130, marginTop: 5 }}></View>
            <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                <View style={{ justifyContent: 'center', marginTop: 3, borderRightWidth: 0, borderTopLeftRadius: 6, borderBottomLeftRadius: 6, alignItems: 'center', width: 160, height: 55, borderWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold' ,color:'black',}}>{Language.captureattachment}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 2, width: 70, height: 60, borderWidth: 6, borderColor: '#F765A3', borderLeftWidth: 0 }}>
                    <TouchableOpacity>
                    <View style={{ borderRadius: 5, borderWidth: 1, height: 30, width: 30, borderColor: "#F765A3", alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{height:30,width:30}} source={require('../images/attachment.png')}/>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Round4;
const styles = StyleSheet.create({
    container: {
        height: '90%',
      

    }
})