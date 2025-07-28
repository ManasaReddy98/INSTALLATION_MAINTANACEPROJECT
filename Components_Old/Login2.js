import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView,Dimensions} from 'react-native';
import { globalStyles } from './Stylesheet/styles';

var screenWidth = Dimensions.get('window').width;

const Texts = ({ placeholder }) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View>
            <TextInput
                style={{
            
                    borderWidth: 0, paddingLeft: 5, elevation: 3, 
                    borderRadius: 5, width: screenWidth-50,height: 50, backgroundColor: '#fff'
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
const Login2= ({ navigation, color }) => {

    const [number, onChangeNumber] = useState(null);
    return (
        <View style={{ height: '90%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Seperator />
              <Text style={{fontSize:20}}>Consumer Details</Text>
                <Text style={{ color: color, marginTop:15,marginBottom: 5 }}>Consumer Name</Text>
                <Texts placeholder='Xyz' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Mobile Number</Text>
                <Texts placeholder='979797979797' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Aadhar Number</Text>
                <Texts placeholder='979797979797' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Father/Husband Name</Text>
                <Texts placeholder='Xyz' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>Email ID</Text>
                <Texts placeholder='Xyz@gmail.com' />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}> Adress </Text>
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
export default Login2;