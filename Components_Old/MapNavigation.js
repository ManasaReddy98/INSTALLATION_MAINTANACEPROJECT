import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MapNavigation = ({ navigation, route }) => {
    const { coloring } = route.params;
    return (
        <View style={{ flex: 1 }} >
            <TouchableOpacity style={{ justifyContent: 'center', height: '100%', alignItems: 'center' }} onPress={() => navigation.navigate('ScanQrCode', { coloring: coloring })}>
                <Text style={{ fontSize:30,color: coloring }}>hello react native</Text>
            </TouchableOpacity>
        </View>
    )
}
export default MapNavigation;