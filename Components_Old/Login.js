import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar, KeyboardAvoidingView, BackHandler, TouchableOpacity, Text, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import BackgroundCarousel from './BackgroundCarousel';
import { GlobalStyles } from '../appstyles/GlobalStyles';
import eficaalogo from '../images/eficaa_logo.png';


const images = [
    {
        name: 'By using Transfer Monitoring System,',
        name1: 'we can maintain the various ongoing operations',
        name2: ' taking place in the transformer using IOT based.'
    },
    {
        name: 'Voltage sensors detect the electric voltage in a wire',
        name1: 'The signal can be used to display the measured',
        name2: 'voltage in a voltmeter.'
    },
    {
        name: 'Current sensors are used to detect the electric current',
        name1: 'supply in a wire and generate signal accordingly',
        name2: 'for displaying the current in an ammeter.'
    },
    {
        name: 'Oil level sensor is used to detect the level',
        name1: 'or supply of oil in the transformer',
        name2: 'oil sensor are used that regularly monitors the oil level.'
    },
    {
        name: 'Temperature sensors are used to measure the heat energy',
        name1: 'or even coldness generated in the system,',
        name2: 'allowing us to sense any physical change.'
    },

]

const Login = ({ navigation, route }) => {
    const { setBoolean } = route.params;


    const backAction = () => {


        BackHandler.exitApp() &
            setBoolean(false)

    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, [])

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={{ flex: 1, backgroundColor: "#1D3557" }}>
            <StatusBar
                backgroundColor="#0e294f"
            />
            <View style={{ flex: 1, alignItems: 'center' }} >
                <Image
                    style={{ height: 130, width: 150 }}
                    source={eficaalogo}
                />
                <Text style={{ color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}>Transformer Monitoring and</Text>
                <Text style={{ color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}>Management System</Text>
                <BackgroundCarousel images={images} />
            </View>

            <View style={{ flex: 1.8 }} >
                <View style={GlobalStyles.textinput}>
                    <Text style={GlobalStyles.text4}>User Name</Text>
                    <TextInput
                        style={GlobalStyles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholderTextColor="#909090"
                        placeholder="Enter UserName"
                    />
                </View>
                <View style={GlobalStyles.textinput1}>
                    <Text style={GlobalStyles.text2}>Password</Text>
                    <TextInput
                        style={GlobalStyles.input}
                        secureTextEntry
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholderTextColor="#909090"
                        placeholder="Enter Password"
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                    <Text style={GlobalStyles.text1}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={GlobalStyles.buttons}>
                    <TouchableOpacity style={GlobalStyles.touchableOpacity} onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={GlobalStyles.text}>Log In</Text>
                    </TouchableOpacity>
                  
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterUser')}>
                        <Text style={GlobalStyles.texts}>Create an Account</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}
export default Login;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})


     





































