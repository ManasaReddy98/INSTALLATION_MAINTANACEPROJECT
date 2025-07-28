import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  TextInput,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  BackHandler,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import {ScrollView, TextInput  } from 'react-native-gesture-handler';
import BackgroundCarousel from './BackgroundCarousel';
import {GlobalStyles} from '../appstyles/GlobalStyles';

import eficaalogo from '../images/eficaa_logo.png';
import CheckNetworkConnectivity from '../ReusableFunctions/CheckNetworkConnectivity';
import TODOService from '../ReUsableMethods/TODOService';
// import TODOService from '../ReUsableMethods/TODOService';
import {LogMessages} from '../LogManager/LogMessages';

const Login = ({navigation, route}) => {
  const mobileNumberRegex = /^[0-9]{10}$/;
  const [httpStatus, setHttpStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [apiCallCompleted, setApiCallCompleted] = useState(false);
  const {width, height} = Dimensions.get('window');
  const [netInfo, setNetInfo] = useState('');
  const {Language} = route.params;
  const {LanguageOpt} = route.params;
  const images = [
    {
      name: LanguageOpt('Scroll1'),
    },
    {
      name: LanguageOpt('Scroll2'),
    },
    {
      name: LanguageOpt('Scroll3'),
    },
    {
      name: LanguageOpt('Scroll4'),
    },
    {
      name: LanguageOpt('Scroll5'),
    },
  ];

  const initialValues = {
    userName: '',
    passWord: '',
  };

  const [userData, setUserData] = useState(initialValues);
  const [errorUser, setErrorUser] = useState('');
  const [errorPwd, setErrorPwd] = useState('');
  const [usersFmDb, setUsersFmDb] = useState([]);
  const [posts, setPosts] = useState([]);
  //const checkNetworkState=new CheckNetworkConnectivity();
  const todoService = new TODOService();
  let resourceId = '';
  let resourceMobileNumber = '';

  // const userDetails=new UserDetails(2005);
  // userDetails.setUserId(2005);
  //console.log("User Details ##### "+ userDetails.getUserId());
  let networkstate;

  // const { setBoolean } = route.params;

  // const backAction = () => {

  //     BackHandler.exitApp() &
  //         setBoolean(false)

  // };

  // useEffect(() => {
  //     const backHandler = BackHandler.addEventListener(
  //         "hardwareBackPress",
  //         backAction
  //     );
  //     return () => backHandler.remove();
  // }, [])

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  // const submitInstalationLoginForm1 = () => {
  //   let isLoginSuccess;
  //   setLoading(true);
  //   console.log(
  //     'UserDetails On Submit   ::' + userData.userName,
  //     userData.passWord,
  //   );
  //   let resourceId = userData.userName;
  //   let resourceMobileNumber = userData.passWord;

  //   if (!resourceId == '' && !resourceMobileNumber == '') {
  //     if (resourceMobileNumber.length == 10) {
  //       console.log(
  //         'RESOURCE DETAILS ########## USER ENTERED  ' + resourceId,
  //         resourceMobileNumber,
  //       );
  //       AuthenticateUserWithCredentials(resourceId, resourceMobileNumber);
  //       // UserAuthentication(resourceId,resourceMobileNumber);
  //     } else {
  //       Alert.alert(LanguageOpt('Len_val'), '', [
  //         {
  //           text: LanguageOpt('OK'),
  //         },
  //       ]);
  //     }
  //   } else {
  //     if (resourceId == '') {
  //       Alert.alert(LanguageOpt('Res_Alert'), '', [
  //         {
  //           text: LanguageOpt('OK'),
  //         },
  //       ]);
  //     }

  //     if (resourceMobileNumber == '') {
  //       Alert.alert(LanguageOpt('Mob_Alert'), '', [
  //         {
  //           text: LanguageOpt('OK'),
  //         },
  //       ]);
  //     }
  //     if (resourceMobileNumber == '' && resourceId == '') {
  //       Alert.alert(LanguageOpt('Error_Message'), '', [
  //         {
  //           text: LanguageOpt('OK'),
  //         },
  //       ]);
  //     }
  //   }
  // };

  function validateMobileNumber(number) {
    const regex = /^[0-9]{10}$/; // Adjust based on country format
    return regex.test(number);
  }

  const submitInstalationLoginForm = () => {
    console.log('Validation Statted  ::' + userData.passWord);
    let loginValidate = validateMobileNumber(userData.passWord);
    console.log('LOGIN VALIDATE ### ', loginValidate);

    setLoading(true);
    console.log('UserDetails On Submit   ::' + userData.passWord);

    resourceId = userData.userName;
    resourceMobileNumber = userData.passWord;
    const regex = /^[0-9]{10}$/;
    if (!resourceMobileNumber == '' && !resourceId == '') {
      if (resourceMobileNumber.length == 10 && loginValidate == true) {
        AuthenticateUserWithCredentials(resourceId, resourceMobileNumber);
      } else {
        if (resourceId != regix) {
          Alert('Please check Resource Id, it should be in numbers');
        }
        if (resourceMobileNumber.length < 10) {
          Alert.alert(LanguageOpt('Len_val'), '', [
            {
              text: LanguageOpt('OK'),
            },
          ]);
        } else if (resourceMobileNumber != regex) {
          Alert.alert(LanguageOpt('login_err_digits'), '', [
            {
              text: LanguageOpt('OK'),
            },
          ]);
        }
      }
    } else {
      if (resourceId == '' && !resourceMobileNumber == '') {
        Alert.alert(LanguageOpt('Res_Alert'), '', [
          {
            text: LanguageOpt('OK'),
          },
        ]);
      }

      if (resourceMobileNumber == '' && !resourceId == '') {
        Alert.alert(LanguageOpt('Mob_Alert'), '', [
          {
            text: LanguageOpt('OK'),
          },
        ]);
      }
      if (resourceMobileNumber == '' && resourceId == '') {
        Alert.alert(LanguageOpt('Error_Message'), '', [
          {
            text: LanguageOpt('OK'),
          },
        ]);
      }
    }
  };

  const UserAuthentication = async (resourceId, resourceMobileNumber) => {
    try {
      // const url = Constants.API_BASE_URL+'/Token/UserAuthentication?userlogin=' + userName +'&userpwd=' + passWord;
      const req_url =
        'http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/resourcedata/resourcedetails/' +
        resourceId +
        '/' +
        resourceMobileNumber; //Constants.API_BASE_URL + '/' + methodname + '/' + paramName;

      console.log(
        ' USER DETAILS URL ',
        ' USER DETAILS URL ' + 'LOGIN REQUEST RAISED' + url,
      );
      // const {data,status} = await todoService.fetchLoginUser_withoutToken(url);    //login will be without token

      let token = '';
      const {data, status} = await todoService.AuthenticatorService(
        req_url,
        token,
      );
      setApiCallCompleted(true);
      setPosts(data);
      console.log('INSTALLATION DASHBOARD', LogMessages.CODE_HTTP, status);

      console.log(
        'LIST DATA ',
        'LIST DATA POSTS  ::::' + JSON.stringify(posts),
        posts.length,
      );

      console.log(
        pageName,
        ' User Authentication ',
        LogMessages.CODE_HTTP + status,
      );

      setHttpStatus(status);
      // if (status > 201) {
      //   if(status === 404){
      //     setLoading(false);
      //     setModalVisible(false);
      //     alert("User Not Found , please check credentials");
      //    }else if(status === 500){
      //     setLoading(false);
      //     setModalVisible(false);
      //     alert("Server Unreachable , please try again later");
      //    }else{
      //     setLoading(false);
      //     setModalVisible(false);
      //     alert(status);
      //    }

      // }else {
      //   setLoading(false);
      //   setModalVisible(false);
      //   let RESOURCEID = posts.resourceId;
      //   let CONTACT = posts.contactNo;
      //   let RESOURCENAME = posts.resourceName;
      //   console.log(" USER VLIDATION API "," USER VLIDATION API :: "+ RESOURCEID , CONTACT ,userData.userName,userData.passWord);

      //   if(userData.userName == RESOURCEID && userData.passWord == CONTACT){
      //       navigation.navigate('InstallationDashboard', {
      //         Language: Language,
      //         resourceId:RESOURCEID,
      //         resourceMobileNumber:CONTACT,
      //         resourceName:RESOURCENAME
      //       })
      //   }
      // }
    } catch (error) {
      apiCallCompleted(true);
      Alert.alert('User Details Not Matched , please enter valid credentials');
      console.log(error);
      setLoading(false);
      setModalVisible(false);

      alert(LogMessages.CODE_HTTP_500_LOG_MESSAGE);
    }
  };

  const isValidObjectField = obj => {
    return Object.values(obj).every(value => value.trim());
  };
  const updateErrorUser = (errorUser, stateUpdater) => {
    stateUpdater(errorUser);
    setTimeout(() => {
      stateUpdater('');
    }, 3000);
  };
  const updateErrorPwd = (errorPwd, stateUpdater) => {
    stateUpdater(errorPwd);
    setTimeout(() => {
      stateUpdater('');
    }, 3000);
  };

  const handleOnChangeText = (value, fieldName) => {
    setUserData({...userData, [fieldName]: value});
  };

  const isValidUserName = value => {
    // let specialChar=/^[a-zA-Z].*/
    const regex = /^[a-zA-Z]+$/;
    return regex.test(value);
  };
  const isValidpassword = value => {
    const regex = /^[a-zA-Z]+$.*/;
    return regex.test(value);
  };

  const validateUser = (loginUser, passwordValue) => {
    //  const { user } = this.state;
    //  const { login } = this.props.actions;
    var isValiduser = false;
    var isValidpassword = false;
    let specialChar = /^[a-zA-Z].*/; //Regex for verify firstletter is alphabet/not
    //alert(" ---- " +user.email +"," +user.password );
    console.log('LOGIN VALUE' + loginUser);
    console.log('PassWord VALUE' + passwordValue);
    if (loginUser === '' && passwordValue === '') {
      //alert("Please enter username & Password");
      updateErrorUser('Please enter username & Password', setErrorUser);
    } else {
      if (loginUser !== '') {
        if (loginUser.match(specialChar)) {
          isValiduser = true;
          //alert("valid user");
          //updateErrorUser('Valid User', setErrorUser);
        } else {
          isValiduser = false;
          updateErrorUser('please enter valid username', setErrorUser);
          //alert("please enter valid username");
        }
      } else {
        updateErrorUser('Please enter username', setErrorUser);
        // alert("Please enter username");
      }

      if (passwordValue !== '') {
        if (passwordValue.trim().match(specialChar)) {
          isValidpassword = true;
          //alert("valid password");
          //  updateError('valid password', setError);
        } else {
          isValidpassword = false;
          updateErrorPwd('please enter valid password', setErrorPwd);
          // alert("please enter valid password");
        }
      } else {
        updateErrorPwd('Please enter password', setErrorPwd);
        //alert("Please enter password");
      }
    }
    console.log(
      'Login Values  ---------------------' + isValiduser,
      isValidpassword,
    );
    if (isValiduser == true && isValidpassword == true) {
      return true;
    }
  };

  function submitLoginForm() {
    let isLoginSuccess;
    console.log(
      'UserDetails On Submit   ::' +
        userData.userName +
        ',' +
        userData.passWord,
    );
    /*
    // just testing purpose commented need to enable after testing give it before release  app the Line NO :248 validateUser 
    */
    let validatedResult = validateUser(userData.userName, userData.passWord);
    // console.log(
    //   'SUBMIT LOGIN FORM ## ',
    //   LogMessages.CODE_APP_NETWORK_SUCESS_MESSAGE,
    //   netInfo,validatedResult
    // );
    console.log('ConnectionStatus ' + netInfo);
    if (netInfo === 'Connected') {
      setTimeout(() => {
        if (validatedResult == true) {
          setLoading(true);
          setModalVisible(true);
          //UserAuthentication(userData.userName, userData.passWord);
        }
      }, 3000);
    } else {
      setLoading(false);
      setModalVisible(false);
      alert('Please Enter Username & Password');
    }
  }

  const AuthenticateUserWithCredentials = async (
    resourceId,
    resourceMobileNumber,
  ) => {
    const req_url =
      'http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/resourcedata/resourcedetails/' +
      resourceId +
      '/' +
      resourceMobileNumber; //Constants.API_BASE_URL + '/' + methodname + '/' + paramName;
    //const req="http://172.16.15.24:91/api/v1/ServicePoints/2";
    console.log(
      'Installation Details Request ### ',
      'Installation Details Request ' + req_url,
    );
    let token = '';
    const {data, status} = await todoService.getDataFromApi(req_url, token);
    setPosts(data);
    setHttpStatus(status);
    console.log('INSTALLATION DASHBOARD', LogMessages.CODE_HTTP, status);
  };

  console.log(
    'LIST DATA ',
    'LIST DATA ::::' + JSON.stringify(posts),
    posts.length,
  );

  useEffect(() => {
    console.log(
      ' USER VLIDATION API ',
      ' POSTS :: ' + RESOURCEID,
      CONTACT,
      userData.userName,
      userData.passWord,
    );

    if (apiCallCompleted && posts.length == 0) {
      Alert.alert('User Doesnot Exist ', 'please enter valid credentials');
    }
    let RESOURCEID = posts.resourceId;
    let CONTACT = posts.contactNo;
    let RESOURCENAME = posts.resourceName;
    console.log(
      ' USER VLIDATION API ',
      ' USER VLIDATION API :: ' + RESOURCEID,
      CONTACT,
      userData.userName,
      userData.passWord,
    );

    if (userData.userName == RESOURCEID && userData.passWord == CONTACT) {
      navigation.navigate('MainAppDashboard', {
        Language: Language,
        resourceId: RESOURCEID,
        resourceMobileNumber: CONTACT,
        resourceName: RESOURCENAME,
        LanguageOpt: LanguageOpt,
      });
    }
    if (httpStatus == 500) {
      alert('Please check user credentials');
    }

    // if (userData.userName == RESOURCEID && userData.passWord == CONTACT) {
    //   navigation.navigate('IntegratedDashboard', {
    //     Language: Language,
    //     resourceId: RESOURCEID,
    //     resourceMobileNumber: CONTACT,
    //     resourceName: RESOURCENAME,
    //     LanguageOpt:LanguageOpt
    //   });
    // }
  }, [posts]);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#0e294f" />
      <LinearGradient
        colors={['#4d6587', '#1d375c', '#081c38']} // Gradient colors
        style={{
          height: height,
          width: width,
          // borderWidth: 1,
          // borderColor: "#dddddd", marginRight: 10
        }} // Apply the gradient to this style
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        // start={{x: 0, y: 1}} // Starting point of the gradient
        // end={{x: 1, y: 1}} // Ending point of the gradient
      >
        {/* backgroundColor: "#1D3557" */}

        <View style={{flex: 1}}>
          <Image
            style={{height: 130, width: 150, alignSelf: 'center'}}
            source={eficaalogo}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            {LanguageOpt('Title1')}
          </Text>
          {/* {Language.LoginBoldtitle2} */}
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}></Text>
          <BackgroundCarousel images={images} Language={Language} />

          <View style={{flex: 1.8}}>
            <Text></Text>
            <Text></Text>

            {/* This is for UserName */}
            <View style={GlobalStyles.textinput}>
              <Text style={GlobalStyles.LightEditBoxText}>
                {LanguageOpt('Resource_Id')}
              </Text>

              <View style={GlobalStyles.LightEditBox_bg}>
                <TextInput
                  style={GlobalStyles.LighttextInput}
                  placeholder={LanguageOpt('Enter_Resource_Id')}
                  keyboardType="numeric"
                  // placeholder=   {userData.useName}
                  placeholderTextColor="#909090"
                  onChangeText={value => handleOnChangeText(value, 'userName')}
                  // onChangeText={(email) => setEmail(email)}
                />
                {errorUser ? (
                  <Text style={GenericGlobalStyle.errorText}>{errorUser}</Text>
                ) : null}
              </View>
            </View>

            {/* This is for password */}
            <View style={GlobalStyles.textinput}>
              <Text style={GlobalStyles.LightEditBoxText}>
                {LanguageOpt('Mob_Num')}
              </Text>
              <View style={GlobalStyles.LightEditBox_bg}>
                <TextInput
                  style={GlobalStyles.LighttextInput}
                  placeholder={LanguageOpt('En_Mob_Num')}
                  keyboardType="numeric"
                  maxLength={10}
                  //placeholder=   {userData.useName}
                  placeholderTextColor="#909090"
                  onChangeText={value => handleOnChangeText(value, 'passWord')}
                  // onChangeText={(email) => setEmail(email)}
                />
                {errorUser ? (
                  <Text style={GenericGlobalStyle.errorText}>{errorUser}</Text>
                ) : null}
              </View>
            </View>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ChangePassword', {
                  Language: Language,
                  LanguageOpt: LanguageOpt,
                })
              }>
              <Text style={GlobalStyles.text1}>{LanguageOpt('For_pass')}</Text>
            </TouchableOpacity>

            <View style={GlobalStyles.buttons}>
              <TouchableOpacity
                style={GlobalStyles.touchableOpacity}
                onPress={
                  () => submitInstalationLoginForm() //laterwards call api
                  //UserAuthentication()
                }>
                <Text style={GlobalStyles.text}>{LanguageOpt('Login')}</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity     //dont need this option if LDAP Integration Done ....
              onPress={() =>
                navigation.navigate('RegisterUser', {Language: Language})
              }>
              <Text style={GlobalStyles.texts}>
                {Language.donthaveancoount}
              </Text>
            </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
