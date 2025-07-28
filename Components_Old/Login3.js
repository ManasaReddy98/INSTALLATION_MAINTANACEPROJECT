import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView,Dimensions } from 'react-native';
import { globalStyles } from './Stylesheet/styles';
var screenWidth = Dimensions.get('window').width;

const Texts = ({ placeholder }) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View>
            <TextInput
                style={{
                    borderWidth: 0, paddingLeft: 5, elevation: 3, 
                    borderRadius: 5, width: screenWidth-50,  height: 50, backgroundColor: '#fff'
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
const Login3 = ({ navigation, color }) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View style={{ height: '90%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Seperator />
                <Text style={{fontSize:20}}>Load Profile Details</Text>
                <Text style={{ color: color, marginTop:15,marginBottom: 5 }}>Category</Text>
                <Texts placeholder='Domestic' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Sub Category</Text>
                <Texts placeholder='LT(1A)' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Meter  Type</Text>
                <Texts placeholder='Single Phase' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Meter  Initial Load</Text>
                <Texts placeholder='30 Amphs' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Max Load Limit </Text>
                <Texts placeholder='40 Amphs' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Installation Date</Text>
                <Texts placeholder='22/10/22' />
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
export default Login3;