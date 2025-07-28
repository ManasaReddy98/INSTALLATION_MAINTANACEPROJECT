import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const Alignment = ({ setHello, color, setActive, setIcon }) => {
    const imag = require("../images/arrow.png")
    const imag1 = require("../images/crossmark.png")
    const imag2 = require("../images/tick.png")
    const navigation = useNavigation()
    return (
        <View style={{ height: '20%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: color, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
            <TouchableOpacity onPress={() => setActive(false) & setHello('NotStarted') & setIcon(imag1)} >
                <View style={{ flexDirection: 'row', height: 30, width: 100, alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 12, color: 'black' }}>NotStarted</Text>
                    <Image source={imag1} style={{ height: 16, width: 16 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActive(false) & setHello('Completed') & setIcon(imag2)}>
                <View style={{ flexDirection: 'row', height: 30, width: 100, alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 12, color: 'black' }}>Completed</Text>
                    <Image source={imag2} style={{ height: 16, width: 16 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActive(false) & setHello('ReAssigned') & setIcon(imag)}>
                <View style={{ flexDirection: 'row', height: 30, width: 100, alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 12, color: 'black' }}>Re-Assigned</Text>
                    <Image source={imag} style={{ height: 16, width: 16 }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const AssetDataList = ({ route, navigation }) => {
    const imag = require("../images/arrow.png")
    const [icon, setIcon] = useState()
    const [hello, setHello] = useState();
    const [active, setActive] = useState(true)
    const { AssetDetails, color } = route.params;
    return (
        <View style={styles.container}>
            <Alignment setIcon={setIcon} color={color} setActive={setActive} setHello={setHello} />
            <ScrollView>
                <View style={styles.body}>
                    {active == true && AssetDetails.map((item, index) => {
                        return (
                            <View key={index} style={styles.body1}>
                                <View key={index} style={{ marginBottom: 5, marginTop: 5 }}>
                                    <Text style={styles.text2}>{item.installationAsset} </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.text3}>{item.Count}</Text>
                                        <View style={{ position: 'absolute', right: 20, flexDirection: 'row' }}>
                                            <TouchableOpacity>
                                                <Image style={{ height: 30, width: 30, marginRight: 30 }} source={icon} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => navigation.navigate('MapView', { coloring: color })}>
                                                <Image style={{ height: 30, width: 30 }} source={require("../images/map.png")} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={styles.text3}>{item.Location}</Text>
                                </View>
                            </View>
                        )
                    }
                    )}
                    {active == false && AssetDetails.filter(item => item.status == hello).map((item, index) => {
                        return (
                            <View key={index} style={styles.body1}>
                                <View key={index} style={{ marginBottom: 5, marginTop: 5 }}>
                                    <Text style={styles.text2}>{item.installationAsset} </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.text3}>{item.Count}</Text>
                                        <View style={{ position: 'absolute', right: 20, flexDirection: 'row' }}>
                                            <TouchableOpacity>
                                                <Image style={{ height: 30, width: 30, marginRight: 30 }} source={icon} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => navigation.navigate('MapView', { coloring: color })}>
                                                <Image style={{ height: 30, width: 30 }} source={require("../images/map.png")} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={styles.text3}>{item.Location}</Text>
                                </View>
                            </View>
                        )
                    }
                    )}
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#ffffff',
    },
    texting: {
        color: 'red',
    },
    body: {
        flexDirection: 'column',
        margin: 20,
    },
    text1: {
        color: 'black',
        fontSize: 15,
        fontStyle: 'normal',
        paddingLeft: 20
    },
    text2: {
        marginTop: 5,
        color: 'black',
        fontSize: 15,
        fontStyle: 'normal',
        paddingLeft: 20
    },
    text3: {
        color: 'black',
        fontSize: 15,
        fontStyle: 'normal',
        paddingLeft: 20,
        marginTop: 5
    },
    body1: {
        backgroundColor: 'white', margin: 5,
        borderRadius: 20,
        elevation: 5
    }
});
export default AssetDataList;


























