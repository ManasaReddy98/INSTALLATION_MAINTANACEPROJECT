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
                    elevation: 3,color:"#000",
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
const Login1 = ({ navigation, color, Language }) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View style={{ height: '90%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Seperator />
                <Text style={{ fontSize: 20 ,color:color}}>{Language.InstallationHeadingName}</Text>
                <Text style={{ color: color, marginTop: 15, marginBottom: 5 }}>{Language.oneLabelText1}</Text>
                <Texts placeholder={Language.oneLableText1Placeholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.oneLableText2}</Text>
                <Texts placeholder={Language.oneLableText2Placeholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.oneLabelText3}</Text>
                <Texts placeholder={Language.oneLabelText3Placeholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.oneLabelText4}</Text>
                <Texts placeholder={Language.oneLabelText4Placeholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.oneLabelText5}</Text>
                <Texts placeholder={Language.oneLabelText5Placeholder} />
                <Seperator />
                <Text style={{ color: color, marginBottom: 5 }}>{Language.oneLabelText6}</Text>
                <Texts placeholder={Language.oneLabelText6Placeholder} />
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








