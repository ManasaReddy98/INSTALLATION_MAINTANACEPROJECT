import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import LoginQrAsset from './LoginQrAsset';
import { GlobalStyles } from '../appstyles/GlobalStyles';

const ScanQrCode = ({ navigation, route }) => {
    const imag = require("../images/qrcode.png")
    const { coloring } = route.params;
    const [color, setColor] = useState(coloring)
    return (
        <View>
            <View style={{ height: '20%', width: '100%', backgroundColor: coloring, alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                <TouchableOpacity>
                    <Image
                        style={{ height: 100, width: 100 }}
                        source={imag}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ height: '71%',marginHorizontal:'10%',backgroundColor: '#fffff' }}>
                <LoginQrAsset color={color} />
            </View>
            <View style={styles.fixToText}>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('AssetInstallationProgress', { coloring: coloring })}>
                    <Text style={[GlobalStyles.button, { backgroundColor: coloring }]}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}
export default ScanQrCode;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    // touchable: {
    //     width: 140,
    //     borderRadius: 40,
    //     backgroundColor: coloring,
    //     alignItems: 'center',
    //     height: 40,
    //     justifyContent: 'center'
    // },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',

        alignItems: 'center',
      
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});