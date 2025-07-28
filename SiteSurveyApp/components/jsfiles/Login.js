import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  FlatList,
  Animated,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from './Carousel';
import Languages from './Languages';
import { openDatabase } from 'react-native-sqlite-storage';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
var db = openDatabase({ name: 'AssetDatabase.db' });

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = width;

const Login = ({ navigation, route }) => {
  const { Language, LanguageOpt,lang } = route.params;
  const ThemeCode = [LanguageOpt('Sandeep'), LanguageOpt('Venkat_Rao'), LanguageOpt('Kamesh'), LanguageOpt('Gopi'), LanguageOpt('Anand')];

  useEffect(() => {
    animate();
    animatetext();
  }, []);

  console.log('Language:', Language.email);
  const [selectedUserName, setSelectedUserName] = useState('');
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidepass, sethidepass] = useState(true);
  const [errormessage, seterrormessage] = useState('');
  const [isfocus, setisfocus] = useState();
  const [isfocus1, setisfocus1] = useState(false);
  const [inputUserId, setinputUserId] = useState(userName);
  const animateisfocus = useRef(new Animated.Value(0)).current;
  const animateisfocus1 = useRef(new Animated.Value(0)).current;

  let Opacity = new Animated.Value(0);
  let Opacity1 = new Animated.Value(0);

  const animate = () => {
    Animated.timing(Opacity, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  const animatetext = () => {
    Animated.timing(Opacity1, {
      toValue: 1,
      duration: 800,
      delay: 200,
      useNativeDriver: true,
    }).start();
  };

  const translateY = Opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const translateX = Opacity1.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 0],
  });

  const animate1 = () => {
    Animated.timing(animateisfocus, {
      toValue: 1,
      duration: 200,
    }).start();
  };
  const animate2 = () => {
    Animated.timing(animateisfocus1, {
      toValue: 1,
      duration: 200,
    }).start();
  };
  const animate3 = () => {
    Animated.timing(animateisfocus, {
      toValue: 0,
      duration: 200,
    }).start();
  };
  const animate4 = () => {
    Animated.timing(animateisfocus1, {
      toValue: 0,
      duration: 200,
    }).start();
  };

  const handleonfocus = () => {
    //setisfocus(true);
    animate1();
  };
  const handleonblur = () => {
    // setisfocus(false);
    animate3();
  };

  const handleonfocus1 = () => {
    //setisfocus1(true);
    animate2();
  };
  const handleonblur1 = () => {
    //setisfocus1(false);
    animate4();
  };

  const comparefunction = () => {
    if (userName !== '' && password !== '') {
      if (userName === 'admin' && password === 'admin') {
        navigation.navigate('Dashboard1', { Language: Language, Language: LanguageOpt,lang });
      } else {
        seterrormessage('invalid email or password');
      }
    } else {
      seterrormessage('Must provide email and password');
    }
  };


  const handleLogin = () => {
    if (!selectedUserName == '') {
      navigation.navigate('Dashboard1', { Language: Language, LanguageOpt: LanguageOpt, selectedUserName: selectedUserName ,lang})
    } else {
      Alert.alert(LanguageOpt('Please_select_username'),
        "",
        [
          {
            text: LanguageOpt('Ok'),
          }
        ]
      );
    }
  }

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#182442" />
      <View
        style={{ flex: 1, flexDirection: 'column', backgroundColor: '#172548' }}>
        <ImageBackground
          source={require('../images/mapbackground.jpg')}
          style={StyleSheet.absoluteFillObject}
        // backgroundColor: '#192442'
        />
        <Animated.View style={{ transform: [{ translateX: translateX }] }}>
          <View
            style={{
              height: 90,
              width: 90,
              borderRadius: 50,
              marginTop: 60,
              alignSelf: 'center',
              borderWidth: 1,
            }}>
            <Image
              style={{ height: 70, width: 70, alignSelf: 'center' }}
              source={require('../images/eficaalogo.png')}></Image>
          </View>

          <Text
            style={{
              color: '#192442',
              fontSize: 25,
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            {' '}
            {LanguageOpt('Asset_Survey')}{' '}
          </Text>
          <Text
            style={{
              color: '#192442',
              fontSize: 15,
              alignSelf: 'center',
              marginTop: 15,
            }}>
            {' '}
            {LanguageOpt('text')}
          </Text>
        </Animated.View>

        <View>
          <View
            style={{
              marginLeft: 10,
              marginRight: 5,
              marginTop: 50,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 12,
                marginRight: 10,
                color: '#192442',
                fontSize: 15,
                alignSelf: 'flex-start',
                fontWeight: '400',
              }}>
              {' '}
              {LanguageOpt('Select_UserName')}{' '}
            </Text>
            <SelectDropdown
              data={ThemeCode}
              defaultButtonText={LanguageOpt('Select_UserName')}
              // defaultButtonText={'Area Code'}
              renderDropdownIcon={isOpened => {
                return (
                  <View
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: 40,
                      width: 40,
                      height: 40,
                      alignSelf: 'center',
                      borderColor: '#192442',
                      borderWidth: 1,
                    }}>
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                        marginTop: 9,
                        alignSelf: 'center',
                      }}
                      source={require('../images/down_icon.png')}></Image>
                  </View>
                );
              }}
              dropdownIconPosition={'right'}
              //dropdownButtonTextStyle={GlobalAppStyles.dropdown4BtnTxtStyle}
              //buttonStyle={GlobalAppStyles.dropdown3BtnStyle}
              onSelect={(selectedItem, index) => {
                setSelectedUserName(selectedItem);
                // setSelectedAreaIndex(index);
                // setSelectedResolutionType(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />

            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <View></View>

              {/* {(() => {
                        if (captureSelectedImageRoom) {
                          return (
                            <Image
                              style={{
                                height: 30,
                                width: 30,
                                marginTop: 8,
                                marginLeft: 10,
                                borderWidth: 1,
                                borderColor: selectedColour,
                                alignSelf: 'center',
                              }}
                              source={captureSelectedImageRoom}></Image>
                          );
                        }

                        return null;
                      })()} */}
            </View>
          </View>
        </View>
        <View style={{ alignSelf: 'center', marginTop: 10 }}>
          <TouchableOpacity
            onPress={() =>
              handleLogin()
              // navigation.navigate('Dashboard1', {Language: Language ,selectedUserName:selectedUserName})
            }>
            <View style={styles.button}>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: '400' }}>
                {LanguageOpt('Login')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
/*
<Animated.View style={{marginTop:30,
            height: 300, flexDirection: 'column', backgroundColor: '#dcf9c8', borderRadius: 20, marginLeft: 40, marginRight: 40,
            marginTop: 40, opacity: Opacity, transform: [{ translateY }]
          }}>
         
   <LinearGradient colors={['#ADE792','#5F8D4E']} style={{height:420,borderRadius:20}} >
           
            <View style={{ height: 80, paddingTop: 40 }} >
            

               <Animated.Text style={{
                fontSize: animateisfocus.interpolate({
                  inputRange: [0, 1], outputRange: [15, 18]
                }), color: animateisfocus.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#192442', '#192442']
                }), position: 'absolute',
                top: animateisfocus.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 20]
                }), left: 15
              }}>
                
                {Language.email} 
              </Animated.Text>


              <TextInput style={styles.input1}
                onChangeText={(userName) => setUserName(userName)}
                value={userName}
                placeholderTextColor='white'
                onFocus={handleonfocus}
                onBlur={handleonblur}
              />
            </View>
            <View style={{ height: 80, paddingTop: 40 }} >
             
              <Animated.Text style={{
                fontSize: animateisfocus1.interpolate({
                  inputRange: [0, 1], outputRange: [15, 18]
                }), color: animateisfocus1.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#192442', '#192442']
                }), position: 'absolute',
                top: animateisfocus1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 20]
                }), left: 15
              }}>
                
               {Language.password}
              </Animated.Text>

              <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.input}
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                  placeholderTextColor='white'
                  secureTextEntry={hidepass ? true : false}
                  onFocus={() => { handleonfocus1(); }}
                  onBlur={handleonblur1}
                />
                <Icon style={styles.icon}
                  name={hidepass ? 'eye-slash' : 'eye'}
                  size={15}
                  color="#909090"
                  onPress={() => sethidepass(!hidepass)}
                />
              </View>
            </View>

            <View style={{ paddingTop: 5 }}>
              {errormessage ? <Text style={{ color: 'red',paddingLeft:15 }}>{errormessage}</Text> : null}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
              <TouchableOpacity style={{}} onPress={() => navigation.navigate('Forgotpassword',{Language:Language})}>
                <Text style={{ color: '#192442', }}>Forgot password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignSelf: 'flex-end', marginLeft: 20 }}
                onPress={() => navigation.navigate('Register',{Language:Language})}>
                <Text style={{ color: '#192442', }}>
                  Create account
                </Text>
              </TouchableOpacity>

            </View>

            <View style={{ alignSelf: 'center', marginTop: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard1',{Language:Language})}>
                <View style={styles.button}>
                  <Text style={{ fontSize: 20, color: "white", fontWeight: '400' }}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
            </LinearGradient>
          </Animated.View>

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  back: {
    width: '80%',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  input: {
    // flex: 1,
    outlineStyle: 'none',
    borderBottomWidth: 1,
    borderColor: '#192442',
    // padding: 5,
    color: 'black',
    width: '80%',
    // backgroundColor:'green',
    marginLeft: 15,
  },
  input1: {
    // flex: 1,
    // outlineStyle: 'none',
    borderBottomWidth: 1,
    borderColor: '#192442',
    // padding: 5,
    width: '80%',
    color: 'black',
    marginLeft: 15,
    // backgroundColor:'green'
  },
  icon: {
    alignSelf: 'flex-end',
    fontSize: 20,
    //  marginHorizontal: 30,
    color: '#192442',
    // paddingBottom:10,
    marginBottom: 10,
    // marginTop:10,
    marginRight: 15,
  },
  button: {
    height: 60,
    width: 125,
    backgroundColor: '#192442',
    alignSelf: 'center',
    marginTop: 20,
    marginRight: 10,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    //shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    //width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: '#FFF' },
  viewContainer: { flex: 1, backgroundColor: '#FFF' },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },

  dropdown1BtnStyle: {
    width: '60%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#909090',
  },
  dropdown1BtnTxtStyle: { color: '#0d0711', textAlign: 'left', opacity: 0.6 },
  dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
});
export default Login;
