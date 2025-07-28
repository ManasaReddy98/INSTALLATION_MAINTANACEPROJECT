import React, { useState } from 'react';
import { View,ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import eficaalogo from '../images/eficaa_logo.png';
import { GlobalStyles } from '../appstyles/GlobalStyles';
import Texting from './TextInput'
//import { ScrollView } from 'react-native-gesture-handler';

const RegisterUser = ({ navigation,route }) => {
    const {Language}=route.params;
    const [number, onChangeNumber] = useState(null);
    return (
        <View style={GlobalStyles.container}>
            <Image style={{ height: 110, width: 110, alignSelf: 'center', }}
                source={eficaalogo}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{marginLeft:10,color:'#FFF'}}>{Language.registerFirstName}</Text>
            <Texting placeholder={Language.registerFirstName}/>

            <Text style={{marginLeft:10,color:'#FFF'}}>{Language.registerMiddleName}</Text>
            <Texting placeholder={Language.registerMiddleName} />

            <Text style={{marginLeft:10,color:'#FFF'}}>{Language.registerLastName}</Text>
            <Texting placeholder={Language.registerLastName} />

            <Text style={{marginLeft:10,color:'#FFF'}}>{Language.registerMobileNumber}</Text>
            <Texting placeholder={Language.registerMobileNumber} />

            <Text style={{marginLeft:10,color:'#FFF'}}>{Language.registerAadharNumber}</Text>
            <Texting placeholder={Language.registerAadharNumber} />

            <Text style={{marginLeft:10,color:'#FFF'}}>{Language.registerEmailId}</Text>
            <Texting placeholder={Language.registerEmailId} />

            <Text style={{marginLeft:10,color:'#FFF'}}>{Language.registerAddress}</Text>
            <Texting placeholder={Language.registerAddress} />

            <Text style={{marginLeft:10,color:'#FFF'}}>{Language.registerPhoto}</Text>

            <View style={{ flexDirection: 'row',borderRadius:10,margin:10, justifyContent: 'space-between', width: 299, height: 40, borderColor: 'white', borderWidth: 1 }}>
                <TextInput
                    style={{ borderWidth: 0, width: 265, color: 'white', borderRadius:10,paddingLeft: 5, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0 }}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholderTextColor="#909090"
                    placeholder={Language.registerPhoto}
                // keyboardType="numeric"
                />
                <Image style={GlobalStyles.ImageStyle} source={require('../images/photoicon.jpg')} />
            </View>
            </ScrollView>
            <TouchableOpacity style={GlobalStyles.touchableOpacity} onPress={() => navigation.goBack()}>
                <Text style={GlobalStyles.text}>{Language.registerButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterUser;






// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { GlobalStyles } from '../appstyles/GlobalStyles';
// import eficaalogo from '../images/eficaa_logo.png';
// import Textinput from './TextInput';

// const RegisterUser = ({ navigation }) => {
//     const [number, onChangeNumber] = useState(null);
//     return (
//         <View style={GlobalStyles.container}>
//             <Image style={{ height: 110, width: 110, alignSelf: 'center', }}
//                 source={eficaalogo}
//             />
//             <Textinput placeholder="First Name"  />
//             <Textinput placeholder="Middle Name" />
//             <Textinput placeholder="Last Name"  />
//             <Textinput placeholder="Mobile Number" />
//             <Textinput placeholder="Aadhar Number" />
//             <Textinput placeholder="E-Mail ID"/>
//             <Textinput placeholder="Address" />
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 299, height: 40, borderColor: 'white', borderWidth: 1 }}>
//                 <TextInput
//                     style={{ borderWidth: 0, width: 265, color: 'white', paddingLeft: 5, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0 }}
//                     onChangeText={onChangeNumber}
//                     value={number}
//                     placeholderTextColor="#909090"
//                     placeholder='Photo'
//                 // keyboardType="numeric"
//                 />
//                 <Image style={GlobalStyles.ImageStyle} source={require('../images/photoicon.jpg')} />
//             </View>
//             <TouchableOpacity style={GlobalStyles.touchableOpacity} onPress={() => navigation.goBack()}>
//                 <Text style={GlobalStyles.text}>Register</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default RegisterUser;