import React, { useState } from 'react';
import SmsAndroid from 'react-native-get-sms-android';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text, Image,
    TouchableOpacity,
    TextInput, Button,
} from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { GlobalStyles } from '../appstyles/GlobalStyles';
import eficaalogo from '../images/eficaa_logo.png'


// import SMS API
//import SendSMS from 'react-native-sms';

const ChangePassword = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [bodySMS, setBodySMS] = useState('1234');
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [otp, setOtp] = React.useState('');
    const [isEditable, setIsEditable] = useState(false);
    // const [isEnable, setIsEnable] = useState('true');
    //let isEnabled='true';
    let result = "7306930089";
    let result1 = "1234";


    if (otp.length == 4) {
        if (otp == bodySMS) {
            navigation.goBack()


        }
        else {
            alert("otp is not matched")
        }
    }

    const initiateSMS = () => {
        // setIsEditable(!isEditable);
        // Check for perfect 10 digit length
        if (userName !== '' && password !== '') {
            if (userName == password) {

                if (result1 == bodySMS && result == mobileNumber) {
                    SmsAndroid.autoSend(
                        mobileNumber,
                        bodySMS,

                        (fail) => {
                            console.log('Failed with this error: ' + fail);
                        },
                        (success) => {
                            console.log('SMS sent successfully' + success);
                            setIsEditable(true);
                            // setIsEditable==true
                            //isEnabled=true
                        },
                    );
                }
                else {
                    alert('Please insert correct contact number');
                };
            }
            else {
                alert('password and confirm password are not equal')
            }
        }
        else {
            alert('please enter password ')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={{ height: 110, width: 110, alignSelf: 'center', }}

                source={eficaalogo}
            />
            <View style={styles.container}>

                <Text style={styles.titleTextsmall}>
                    New Password
                </Text>
                <TextInput style={styles.textInput} placeholder='Enter Password'


                    placeholderTextColor='#909090'
                    onChangeText={(userName) => setUserName(userName)}
                    value={userName}
                />
                <Text style={styles.titleTextsmall}>
                    confirm password
                </Text>
                <TextInput style={styles.textInput}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    placeholder="Confirm Password"
                    placeholderTextColor='#909090'
                    autoCompleteType="password"
                //secureTextEntry={hidepass ? true : false}
                />
                <Text style={styles.titleTextsmall}>
                    Mobile Number
                </Text>
                <TextInput

                    value={mobileNumber}
                    onChangeText={
                        (mobileNumber) => setMobileNumber(mobileNumber)
                    }
                    placeholder={'Enter Conatct Number to Call'}
                    placeholderTextColor='#909090'
                    keyboardType="numeric"
                    style={styles.textInput}
                />
                <Text style={styles.titleTextsmall}>
                    SMS body
                </Text>


                <TextInput
                    value={bodySMS}
                    onChangeText={(bodySMS) => setBodySMS(bodySMS)}
                    placeholder={'Enter SMS body'}
                    placeholderTextColor='#909090'
                    style={styles.textInput}
                />


                <Text style={styles.titleTextsmall} >OTP</Text>

                <TextInput
                    style={styles.textInput}
                    placeholder=
                    "please insert value"
                    placeholderTextColor='#909090'
                    //  disabled={false}
                    underlineColorAndroid="transparent"
                    //To make TextInput enable/disable
                    // disabled={true}
                    editable={isEditable}
                    onChangeText={(otp) => setOtp(otp)}
                />


                <View style={GlobalStyles.buttons}>
                    <TouchableOpacity style={GlobalStyles.touchableOpacity} onPress={initiateSMS}>
                        <Text style={GlobalStyles.text}>Submit</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    );
};

export default ChangePassword;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#1D3557',
        padding: 10,
        textAlign: 'center',
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    titleTextsmall: {
        marginVertical: 8,
        fontSize: 14,
        color: '#ffffff'
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        backgroundColor: '#8ad24e',
    },
    input: {
        flex: 1,
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    textInput: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
    },
});
