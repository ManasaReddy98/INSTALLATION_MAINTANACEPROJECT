import React, { useEffect, useState, useCallback } from 'react';
import { View, Image, StyleSheet, StatusBar, KeyboardAvoidingView, BackHandler, Dimensions, TouchableOpacity, Text, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import BackgroundCarousel from './BackgroundCarousel';
import { GlobalStyles } from '../../appstyles/GlobalStyles';
import eficaalogo from '../../images/eficaa_logo.png';

import { useFocusEffect } from '@react-navigation/native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const Login = ({ navigation, route }) => {


  const { LanguageOpt } = route.params

  const images = [
    {
      name: LanguageOpt('scrolltext1'),
    },
    {
      name: LanguageOpt('scrolltext2'),
    },
    {
      name: LanguageOpt('scrolltext3'),
    },
    {
      name: LanguageOpt('scrolltext4'),
    },
    {
      name: LanguageOpt('scrolltext5'),
    },
  ]

  const [resourceid, setResourceid] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [resourceerror, setResourceError] = useState('');
  const [numbererror, setNumbererror] = useState('');
  const [data, setData] = useState([]);


  const handleLoginPage = async () => {
    // navigation.navigate('Dashboard', { resourceName: "sailaja", resourceid: 14, LanguageOpt: LanguageOpt });
    // return;
    setResourceError('');
    setNumbererror('');
    let valid = true;
    if (resourceid === '') {
      setResourceError(LanguageOpt('Error_Resource_Id'));
      valid = false;
    }
    if (phonenumber === '') {
      setNumbererror(LanguageOpt('Error_PhoneNumber'));
      valid = false;
      return;
    }
    if (phonenumber.length !== 10) {
      setNumbererror(LanguageOpt('length_error'));
      valid = false;
    }
    if (valid) {
      try {
        const response = await fetch(`http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/resourcedata/resourcedetails/${resourceid}/${phonenumber}`);
        const result = await response.json();

        if (result.status == "500") {
          Alert.alert(LanguageOpt('User_Not_Exist'))
          return;
        }
        if (result.resourceName) {
          navigation.navigate('Dashboard', { resourceName: result.resourceName, resourceid: resourceid,LanguageOpt:LanguageOpt });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
    }
  }




  useFocusEffect(
    useCallback(() => {
      // Clear input fields when navigating back to the Login screen
      setResourceid('');
      setPhonenumber('');
    }, [])
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#0e294f" }}>

      {/* backgroundColor: "#1D3557" */}
      <StatusBar
        backgroundColor="#0e294f"
      />
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: 130, width: 150, alignSelf: 'center' }}
          source={eficaalogo}
        />
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>{LanguageOpt('Asset_Maintenance')}</Text>
        <BackgroundCarousel images={images} />
        <View style={{ marginTop: DEVICE_HEIGHT * 0.03, marginHorizontal: DEVICE_WIDTH * 0.06 }}>
          <Text style={styles.label}>{LanguageOpt('Resource_Id')}</Text>
          <TextInput
            style={styles.input}
            placeholder={LanguageOpt('Enter_Resource_Id')}
            placeholderTextColor="#909090"

            value={resourceid}
            keyboardType="numeric"

            onChangeText={e => setResourceid(e)}
          />
          {resourceerror ? <Text style={styles.errorText}>{resourceerror}</Text> : null}
          {/* Password Input */}
          <Text style={styles.label}>{LanguageOpt('Phone_Number')}</Text>
          <TextInput
            style={styles.input}
            placeholder={LanguageOpt('Enter_Phone_Number')}
            placeholderTextColor="#909090"
            secureTextEntry
            keyboardType="numeric"
            value={phonenumber}
            onChangeText={e => setPhonenumber(e)}
          />
          {numbererror ? <Text style={styles.errorText}>{numbererror}</Text> : null}
          <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={GlobalStyles.text1}>{LanguageOpt('Forgot_Password')}</Text>
          </TouchableOpacity>
          <View style={GlobalStyles.buttons}>
            <TouchableOpacity style={GlobalStyles.touchableOpacity} onPress={() => handleLoginPage()}>
              <Text style={GlobalStyles.text}>{LanguageOpt('Login')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterUser')}>
              <Text style={GlobalStyles.texts}>{LanguageOpt('Create_an_Account')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    height: 50,
    color: '#909090',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
  },
});







































