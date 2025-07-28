
import React, { createRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, SafeAreaView } from 'react-native';

//import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SignatureCapture from 'react-native-signature-capture';
import { ScrollView } from 'react-native-gesture-handler';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { GlobalStyles } from '../appstyles/GlobalStyles';
function Signature({ route }) {
    const { coloring } = route.params;
    const navigation = useNavigation();
    const sign = createRef();

    const saveSign = () => {
        sign.current.saveImage();
    };

    const resetSign = () => {
        sign.current.resetImage();
    };

    const _onSaveEvent = (result) => {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name
        alert('Signature Captured Successfully');
        console.log(result.encoded);
    };

    const _onDragEvent = () => {
        // This callback will be called when the user enters signature
        console.log('dragged');
    };

    return (

        <View style={{ height: '100%' }}>
            <View style={styles.container1}>
                <Text style={{ alignSelf: 'center' }}>Sign Here</Text>
                <SignatureCapture
                    style={styles.signature}
                    ref={sign}
                    onSaveEvent={_onSaveEvent}
                    minStrokeWidth={2}
                    maxStrokeWidth={2}
                    //strokeColor={"#d41515"}
                    onDragEvent={_onDragEvent}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    viewMode={'portrait'}
                />

                <TouchableHighlight
                    style={{ backgroundColor: 'green', position: 'absolute', width: 130, height: '15%', alignItems: 'center', justifyContent: 'center', bottom: 0, borderBottomLeftRadius: 15, }}
                    onPress={() => {
                        saveSign();
                    }}>
                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: "500" }} >Save</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={{ backgroundColor: '#6677cb', position: 'absolute', right: 0, height: '15%', width: 130, bottom: 0, alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 15 }}
                    onPress={() => {
                        resetSign();
                    }}>
                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: "500" }}>Reset</Text>
                </TouchableHighlight>
            </View>

            <View>
                <TextInput style={{ paddingLeft: 10,paddingTop:4,marginHorizontal:15, borderRadius: 20, textAlignVertical: 'top', height: 300, marginTop: 40, backgroundColor: 'white' }}
                    placeholder="Text here"
                    numberOfLines={40}
                    multiline={true}

                />
            </View>
            <TouchableOpacity style={{
                alignSelf: 'center', marginVertical: 15


            }} onPress={() => {
                navigation.navigate('Progress', { coloring: coloring })
            }}
            >
                <Text style={[GlobalStyles.button, { backgroundColor: coloring }]}>Save</Text>

            </TouchableOpacity>
        </View>



    )
}

export default Signature;
const styles = StyleSheet.create({

    container1: {
        height: '40%',
        backgroundColor: 'white',
        marginHorizontal: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    titleStyle: {
        fontSize: 15,
        textAlign: 'center',
        margin: 5,
    },
    signature: {
        height: '85%',
        // borderWidth: 1,

        borderWidth: 0.4,
        borderColor: 'red',
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#eeeeee',
        margin: 10,
    },
});

