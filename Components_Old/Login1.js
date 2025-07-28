import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';


var screenWidth = Dimensions.get('window').width;
const Texts = ({ placeholder }) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View>
            <TextInput
                style={{

                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3,
                    borderRadius: 5,  width: screenWidth - 50, height: 50, backgroundColor: '#fff'
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
const Login1 = ({ navigation, color }) => {

    const [number, onChangeNumber] = useState(null);
    return (
        <View style={{ height: '90%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Seperator />
                <Text style={{fontSize:20}}>Meter Details</Text>
                <Text style={{ color: color,marginTop:15, marginBottom: 5 }}>Meter Service Number</Text>
                <Texts placeholder='Xyz' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Unique Number</Text>
                <Texts placeholder='979797979797' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Meter Reference Number</Text>
                <Texts placeholder='979797979797' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Meter  Class</Text>
                <Texts placeholder='Xyz' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Initial Consumption/Previous Readings</Text>
                <Texts placeholder='0' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}> Manufacturer Name</Text>
                <Texts placeholder='Xyz' />
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
export default Login1;








