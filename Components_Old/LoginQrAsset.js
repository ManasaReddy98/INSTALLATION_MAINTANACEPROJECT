import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';


const Texts = ({ placeholder }) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View>
            <TextInput
                style={{
                    borderWidth: 0, paddingLeft: 5,
                     elevation: 3, 
                    borderRadius: 5,width:'100%', height: 50, backgroundColor: '#fff'
                }}
                onChangeText={onChangeNumber}
                value={number}
                placeholderTextColor="#909090"
                placeholder={placeholder}
            // keyboardType="numeric"
            />
        </View>
    )
}
const Seperator = () => {
    return (
        <View style={{ height: 10 }}>
        </View>
    )
}
const LoginQrAsset = ({ navigation, color }) => {

    const [number, onChangeNumber] = useState(null);
    return (
        <View style={{ height: '90%' }}>
            <ScrollView  showsVerticalScrollIndicator={false}>
                <Seperator/>
                <Text style={{ color: color, marginBottom: 5 ,marginTop:15}}>Asset ID</Text>
                <Texts placeholder='979797979797' />
                <Seperator/>
                <Text style={{ color: color, marginBottom: 5 }}>Asset Name</Text>
                <Texts placeholder='Meter' />
                <Seperator/>
                <Text style={{ color: color, marginBottom: 5 }}>Asset Part  Number</Text>
                <Texts placeholder='979797979797' />
                <Seperator/>
                <Text style={{ color: color, marginBottom: 5 }}> Vendor Name</Text>
                <Texts placeholder='979797979797' />
                <Seperator/>
                <Text style={{ color: color, marginBottom: 5 }}>Enter Your Password</Text>
                <Texts placeholder='Xyz' />
                <Seperator/>
                <Text style={{ color: color, marginBottom: 5 }}> Manufacturer Date </Text>
                <Texts placeholder='22/10/22' />
                <Seperator/>
                <Text style={{ color: color, marginBottom: 5 }}>Manufacturer Name</Text>
                <Texts placeholder='Xyz' />

                <Text style={{ color: color, marginBottom: 10 }}></Text>
                <Text style={{ color: color, marginBottom: 10 }}></Text>

                <Seperator />

            </ScrollView>
            <View>
            </View>
        </View>
    )
}
export default LoginQrAsset;