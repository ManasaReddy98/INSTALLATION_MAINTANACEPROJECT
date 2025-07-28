import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';



const MapView = ({ navigation, route }) => {
    const { coloring } = route.params;
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ height: '20%', width: '100%', backgroundColor: coloring, justifyContent: 'center', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                <View style={{ marginLeft: 25 }}>
                    <Text style={{ fontWeight: "bold", color: '#fff' }}>Asset Name:Meter</Text>
                    <Text style={{ marginTop: 5, color: '#fff' }}>Single phase/Inish</Text>
                    <Text style={{ marginTop: 5, color: '#fff' }}>Location:17.858458.8568</Text>
                </View>
            </View>
            <View style={{ height: '69%', backgroundColor: '#fff', alignItems: 'center' }}>
            </View>
            <View style={styles(coloring).fixToText}>

                <TouchableOpacity style={styles(coloring).touchable} onPress={() => navigation.navigate('ScanQrCode', { coloring: coloring })}>
                    <Text style={{ color: '#fff' }}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles(coloring).touchable} onPress={() => navigation.navigate('MapNavigation',{coloring:coloring})}>
                    <Text style={{ color: '#fff' }}>Go To Navigation</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}
export default MapView;
const styles = (coloring) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    touchable: {
        width: 140,
        borderRadius: 40,
        backgroundColor: coloring,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',

        alignItems: 'center',
        height: '10%'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});