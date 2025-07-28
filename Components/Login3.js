import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { globalStyles } from './Stylesheet/styles';

var screenWidth = Dimensions.get('window').width;

const Texts = ({ placeholder }) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View>
            <TextInput
                style={{

                    borderWidth: 0, paddingLeft: 5, elevation: 3, color: "#000",
                    borderRadius: 5, width: screenWidth - 50, height: 50, backgroundColor: '#fff'
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
const Login3= ({ navigation, color, Language }) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View style={{ height: '90%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Seperator />
                <Text style={{ fontSize: 20, color: color }}>{Language.twoInstallationHeadingName}</Text>
                <Text style={{ color: color, marginTop: 15, marginBottom: 5 }}>{Language.twoLabelText1}</Text>
                <Texts placeholder={Language.twoLableText1Placeholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.twoLableText2}</Text>
                <Texts placeholder={Language.twoLableText2Placeholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.twoLabelText3}</Text>
                <Texts placeholder={Language.twoLabelText3Placeholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.twoLabelText4}</Text>
                <Texts placeholder={Language.twoLabelText4Placeholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.twoLabelText5}</Text>
                <Texts placeholder={Language.twoLabelText5Placeholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.twoLabelText6}</Text>
                <Texts placeholder={Language.twoLabelText6Placeholder} />
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