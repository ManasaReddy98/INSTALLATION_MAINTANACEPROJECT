import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './Components/SplashScreen';
import Login from './Components/Login';
import BackgroundCarousel from './Components/BackgroundCarousel';
import RegisterUser from './Components/RegisterUser';
import ChangePassword from './Components/ChangePassword';
import MapView from './Components/MapView';
import ScanQrCode from './Components/ScanQrCode';
import QrScanner from './Components/QrScanner';
import Dashboard from './Components/Dashboard';
import AssetInstallationProgress from './Components/AssetInstallationProgress';
import InstallationProcessMaking from './Components/InstallationProcessMaking';
import AssetInstallationProgressView from './Components/AssetInstallationProgressView';
import AssetDataList from './Components/AssetDataList';
import Signature from './Components/Signature';
import Progress from './Components/Progress';
import MapNavigation from './Components/MapNavigation';
import CameraView from './Components/CameraView';
import DCU_GatewayDataList from './Components/DCU_GatewayDataList';
import NumberingProgress from './Components/NumberingProgress';
import IntegratedDashboard from './Components/IntegratedDashboard';

import {MaterialIcons} from '@expo/vector-icons';
//import Helloreact from './EE_AppFiles/helloreact';
import InstallationDashboard from './Components/InstallationDashboard';
import Configurationsetting from './Components/configurationsettings';
import Research from './Components/Research';
import Testing from './Components/TestingComponents';
import DrawPolygon from './Components/DrawPolygon';
import MainAppDashboard from './Components/MainAppDashboard';
import TicketAcceptReject from './Components/TicketAcceptReject';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import DocumentPickers from './Components/FilePicker';
// import ViewPdf from './Components/Pdf';

/**Maintanance App Screens  */
// import Login from './MaintananceApp/Components/Maintenance/Login';
// import CarouselScreen from './MaintananceApp/Components/Maintenance/Carousel';
import MaintananceDashboard from './MaintananceApp/Components/Maintenance/MaintananceDashboard';
import MaintananceAssetDataList from './MaintananceApp/Components/Maintenance/MaintananceAssetDataList';
import Complaints from './MaintananceApp/Components/Maintenance/Complaints';
import Resolved from './MaintananceApp/Components/Maintenance/ResolvedIssues';
import MapViewlatlong from './MaintananceApp/Components/Maintenance/MapViewlatlong';
import MaintananceCaptureSignature from './MaintananceApp/Components/Maintenance/MaintananceCaptureSignature';
// import MaintananceNumberingProgress from './MaintananceApp/Components/Maintenance/MaintananceNumberingProgress';
import SignatureCapturepage from './MaintananceApp/Components/Maintenance/SignatureCapture';
import Camerafunctionality from './MaintananceApp/Components/Maintenance/Camerafunctionality';
import StepperLogic from './MaintananceApp/Components/Maintenance/Steppercode';
// import {useTranslation} from 'react-i18next';
//LanguageOpt
/***SiteSurvey App Screens  */

import SiteSurveyDashboard from './SiteSurveyApp/components/jsfiles/SiteSurveyDashboard';

// import SiteSurveyDashboard from './SiteSurveyApp/components/jsfiles/SiteSurveyDashboard';
import ReAssignedIssues from './MaintananceApp/Components/Maintenance/ReAssignedIssues';
import ClosedIssues from './MaintananceApp/Components/Maintenance/ClosedIssues';
import MeterDetailsServiceIntegration from './Components/MeterDetailsServiceIntegration';

// import MapSurvey from './SiteSurveyApp/components/jsfiles/MapSurvey';
// import AssetDetails from './SiteSurveyApp/components/jsfiles/AssetDetails';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AssetList from './SiteSurveyApp/components/jsfiles/AssetList';
// import ViewAllUser from './SiteSurveyApp/components/jsfiles/ViewAllUser';
// import Discom from './SiteSurveyApp/components/jsfiles/Discom';
// import AssetDetailsInfo from './SiteSurveyApp/components/jsfiles/AssetDetailsInfo';
// import DiscomRegions from './SiteSurveyApp/components/jsfiles/DiscomRegions';
// import BillsInfo from './SiteSurveyApp/components/jsfiles/BillsInfo';
// import AllAssetsInfo from './SiteSurveyApp/components/jsfiles/AllAssetsInfo';
// import ProfilePage from './SiteSurveyApp/components/jsfiles/ProfilePage';
// import DiscomDetails from './SiteSurveyApp/components/jsfiles/DiscomDetails';
// import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
// import Camera from './SiteSurveyApp/components/jsfiles/Camera';
// import AddNewAssetDetails from './SiteSurveyApp/components/jsfiles/AddNewAssetDetails';
// import LocationOptions from './ReUsableMethods/LocationOptions';
const Stack = createNativeStackNavigator();
// const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
function App() {
  // const {t} = useTranslation();
  const [initialState, setInitialState] = React.useState();
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer
    // initialState={initialState}
    // onStateChange={(state) =>
    //   AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
    // }
    >
      <Stack.Navigator initialRouteName="Configurationsetting">
        {/* <Stack.Screen name="DocumentPickers" component={DocumentPickers} />
        <Stack.Screen name="ViewPdf" component={ViewPdf} /> */}
        <Stack.Screen
          name="Testing"
          component={Testing}
          options={screenOptions}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="MainAppDashboard"
          component={MainAppDashboard}
          options={screenOptions}
        />
        <Stack.Screen name="Research" component={Research} />
        <Stack.Screen
          name="Configurationsetting"
          component={Configurationsetting}
          options={screenOptions}
        />
        <Stack.Screen
          name="InstallationDashboard"
          component={InstallationDashboard}
          options={screenOptions}
        />
        {/* <Stack.Screen name="Helloreact" component={Helloreact} options={screenOptions} /> */}
        <Stack.Screen
          name="QrScanner"
          component={QrScanner}
          options={screenOptions}
        />
        <Stack.Screen
          name="MapNavigation"
          component={MapNavigation}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Map_Navigation'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CameraView"
          component={CameraView}
          options={({navigation}) => ({
            title: 'Capture Image',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
          })}
        />

        {/* <Stack.Screen
          name="NumberingProgress"
          component={NumberingProgress}
          options={({ navigation }) => ({
            title: 'Asset Installation',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
          })}
        /> */}

        <Stack.Screen
          name="NumberingProgress"
          component={NumberingProgress}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Installation Progress'),
            // title: route.params.Language.InstallationHeadBarTitle,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="IntegratedDashboard"
          component={IntegratedDashboard}
          options={screenOptions}
          // options={({navigation, route}) => ({
          //   title: 'Asset Installation',
          //   // title: route.params.Language.InstallationHeadBarTitle,
          //   headerTintColor: '#ffffff',
          //   headerStyle: {
          //     backgroundColor: '#18253f',
          //   },
          //   headerRight: () => (
          //     <TouchableOpacity
          //       onPress={() =>
          //         navigation.navigate('InstallationDashboard', {
          //           Language: route.params.Language,
          //         })
          //       }>
          //       <Image
          //         source={require('./images/home_icon.png')}
          //         style={{height: 20, width: 20}}
          //       />
          //     </TouchableOpacity>
          //   ),
          // })}
        />

        <Stack.Screen
          name="DCU_GatewayDataList"
          component={DCU_GatewayDataList}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Installation_Process'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="TicketAcceptReject"
          component={TicketAcceptReject}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('TicketReject'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="DrawPolygon"
          component={DrawPolygon}
          options={({navigation, route}) => ({
            title: route.params.Language.InstallationHeadBarTitle,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="AssetInstallationProgressView"
          component={AssetInstallationProgressView}
          options={({navigation, route}) => ({
            title: route.params.Language.InstallationHeadBarTitle,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="InstallationProcessMaking"
          component={InstallationProcessMaking}
          options={({navigation, route}) => ({
            title: route.params.Language.InstallationHeadBarTitle,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="AssetInstallationProgress"
          component={AssetInstallationProgress}
          options={({navigation, route}) => ({
            title: route.params.Language.InstallationHeadBarTitle,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ScanQrCode"
          component={ScanQrCode}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Asset_Info'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="MapView"
          component={MapView}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Map_View'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />


         <Stack.Screen
          name="MeterDetailsServiceIntegration"
          component={MeterDetailsServiceIntegration}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Map_View'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        {/* <Stack.Screen
          name="Round4"
          component={Round4}
          options={({ navigation }) => ({
            title: 'Round4',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () =>
              <TouchableOpacity
                onPress={() => navigation.navigate('Dashboard')} >
                <MaterialIcons name="home" size={24} color="white" />
              </TouchableOpacity>
          })}
        /> */}
        <Stack.Screen
          name="Progress"
          component={Progress}
          options={({navigation, route}) => ({
            title: route.params.Language.captureprogressHeadBarTitle,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Signature"
          component={Signature}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Capture_Signature'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        {/* <Stack.Screen
          name="Round2"
          component={Round2}
          options={({ navigation }) => ({
            title: 'Round2',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () =>
              <TouchableOpacity
                onPress={() => navigation.navigate('Dashboard')} >
                <MaterialIcons name="home" size={24} color="white" />
              </TouchableOpacity>
          })}
        /> */}
        {/* <Stack.Screen
          name="Round3"
          component={Round3}
          options={({ navigation }) => ({
            title: 'Round3',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () =>
              <TouchableOpacity
                onPress={() => navigation.navigate('Dashboard')} >
                <MaterialIcons name="home" size={24} color="white" />
              </TouchableOpacity>
          })}
        /> */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Login" component={Login} options={screenOptions} />
        {/* <Stack.Screen
          name="Flatlist"
          component={Flatlist}
          options={{
            title: 'manasa',
            headerStyle: {
              backgroundColor: '#6f9240'
            },
            headerRight: () => (
              <Button style={{ backgroundColor: "#fff" }}
                title="Home"
                color="#6f9240"
              />
            ),
            headerTintColor: '#ffffff',
          }}
        /> */}
        <Stack.Screen
          name="AssetDataList"
          component={AssetDataList}
          options={({navigation, route}) => ({
            title: route.params.ti,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                {/* <Text style={{color: '#fff'}}>
                  HI , {route.params.resourceName}
                </Text> */}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MainAppDashboard', {
                      Language: route.params.Language,
                      resourceName: route.params.resourceName,
                      LanguageOpt: route.params.LanguageOpt,
                      resourceId: route.params.resourceId,
                      resourceMobileNumber: route.params.resourceMobileNumber,
                    })
                  }>
                  <Image
                    source={require('./images/home_icon.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={({navigation, route}) => ({
            title: route.params.ti,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
          })}
        />
        <Stack.Screen
          name="BackgroundCarousel"
          component={BackgroundCarousel}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Change_Password'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
          })}
        />
        {/***Maintanance App Screens Navigations  */}

        <Stack.Screen
          name="MaintananceDashboard"
          component={MaintananceDashboard}
          options={screenOptions}
        />

        <Stack.Screen
          name="MaintananceAssetDataList"
          component={MaintananceAssetDataList}
          options={({navigation, route}) => ({
            // title: route.params.ti,
            title: route.params.LanguageOpt('Issues'),
            // title: t('Issues'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Complaints"
          component={Complaints}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Complaints'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Resolved"
          component={Resolved}
          options={({navigation, route}) => ({
            title: 'Resolved',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ReAssignedIssues"
          component={ReAssignedIssues}
          options={({navigation, route}) => ({
            title: 'ReAssigned',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ClosedIssues"
          component={ClosedIssues}
          options={({navigation, route}) => ({
            title: '',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="MapViewlatlong"
          component={MapViewlatlong}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Maintenance_View'),
            // title: t('Maintenance_View'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="StepperLogic"
          component={StepperLogic}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Maintenance_Process'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="MaintananceCaptureSignature"
          component={MaintananceCaptureSignature}
          options={({navigation, route}) => ({
            title: route.params.LanguageOpt('Capture_Signature'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MainAppDashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                    LanguageOpt: route.params.LanguageOpt,
                    resourceId: route.params.resourceId,
                    resourceMobileNumber: route.params.resourceMobileNumber,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Camerafunctionality"
          component={Camerafunctionality}
          options={screenOptions}
        />

        {/*** SiteSurvey Dashboard*/}

        <Stack.Screen
          name="SiteSurveyDashboard"
          component={SiteSurveyDashboard}
          options={screenOptions}
        />

        {/* <Stack.Screen
          name="MaintananceNumberingProgress"
          component={MaintananceNumberingProgress}
          options={({navigation, route}) => ({
            title: 'Maintanance',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MaintananceDashboard', {
                    Language: route.params.Language,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        

        <Stack.Screen
          name="Resolved"
          component={Resolved}
          options={({navigation, route}) => ({
            title: 'Resolved',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MaintananceDashboard', {
                    Language: route.params.Language,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        /> */}

        {/* <Stack.Screen name="Login" component={Login} options={screenOptions} /> */}
        {/* 
       
        <Stack.Screen
          name="MaintananceNumberingProgress"
          component={MaintananceNumberingProgress}
          options={({navigation, route}) => ({
            title: 'Maintanance',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Dashboard', {
                    Language: route.params.Language,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="SignatureCapturepage"
          component={SignatureCapturepage}
          options={({navigation, route}) => ({
            title: t('Capture_Signature'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Dashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Resolved"
          component={Resolved}
          options={({navigation, route}) => ({
            title: 'Resolved',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Dashboard', {
                    Language: route.params.Language,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="MaintananceAssetDataList"
          component={MaintananceAssetDataList}
          options={({navigation, route}) => ({
            title: t('Issues'),
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#18253f',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Dashboard', {
                    Language: route.params.Language,
                    resourceName: route.params.resourceName,
                  })
                }>
                <Image
                  source={require('./images/home_icon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
      
        <Stack.Screen
          name="Camerafunctionality"
          component={Camerafunctionality}
          options={screenOptions}
        />

        <Stack.Screen
          name="CarouselScreen"
          component={CarouselScreen}
          options={screenOptions}
        />
       */}

        {/***SiteSurvey App Screens Navigations  */}

        {/* <Stack.Screen name="Dashboarding" component={Dashboarding} /> */}
        {/* <Stack.Screen name="Textcarousel" component={Textcarousel} /> */}
        {/* i installed react-native re-animated and uninstalled react-native re-animated and now error displays app is not displaying on phone */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React, { Component } from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';

// export default class App extends Component {
//   async openDocumentFile() {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       console.log(
//         res
//       );

//     } catch (err) {

//       if (DocumentPicker.isCancel(err)) {

//       } else {
//         throw err;
//       }
//     }
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <TouchableOpacity onPress={() => this.openDocumentFile()} style={{ borderRadius: 10, padding: 10, width: '80%', alignItems: 'center', backgroundColor: 'grey' }}>
//           <Text>textinComponent</Text>
//         </TouchableOpacity>

//       </View>
//     )

//   }
// }

// import React, { useState, Fragment, useEffect } from 'react';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { Base64 } from 'js-base64';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   StatusBar,
//   Image,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// const App = () => {
//   const [fileUri, setFileUri] = useState("")
//   const [encPwd, setEncPwd] = useState("")
//   const [decPwd, setDecPwd] = useState("")
//   useEffect(() => {
//     setEncPwd(Base64.encode(fileUri))
//   })
//   const chooseImage = () => {
//     let options = {
//       title: 'Select Image',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     launchImageLibrary(options, response => {
//       console.log('Response = ', response);
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else {
//         console.log('response', JSON.stringify(response));
//         setFileUri(response.assets[0].uri)
//       }
//     });
//   };
//   const docamera = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     launchCamera(options, response => {
//       console.log('Response = ', response);
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else {
//         console.log('response', JSON.stringify(response));
//         setFileUri(response.assets[0].uri)
//       }
//     });
//   };
//   const renderFileUri = () => {
//     if (fileUri) {
//       return <Image source={{ uri: fileUri }} style={styles.images} />;
//     } else {
//       return (
//         <Image
//           source={{
//             uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//           }}
//           style={styles.images}
//         />
//       );
//     }
//   }
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <View style={styles.body}>
//           <TouchableOpacity onPress={() => setDecPwd(Base64.decode(encPwd))}>
//             <Text
//               style={{ textAlign: 'center', color: 'violet', marginTop: 30, fontSize: 20, paddingBottom: 10 }}>
//               Pick Images from Camera & Gallery
//             </Text>
//           </TouchableOpacity>
//           <View style={styles.ImageSections}>
//             <View>{renderFileUri()}</View>
//           </View>
//           <View style={styles.btnParentSection}>
//             <TouchableOpacity
//               onPress={chooseImage}
//               style={styles.btnSection}>
//               <Text style={styles.btnText}>Choose File</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={docamera}
//               style={styles.btnSection}>
//               <Text style={styles.btnText}>Directly Launch Camera</Text>
//             </TouchableOpacity>
//             {fileUri ? (
//               <Text style={{ color: 'green', marginTop: 10 }}>{encPwd}</Text>
//             ) : <Text style={{ color: 'red' }}>hello</Text>
//             }
//             {encPwd ? (
//               <Image source={{ uri: decPwd }} style={{ height: 100, marginTop: 60, width: 100 }} />
//             ) : <Text style={{ color: 'red', marginTop: 60 }}>hello</Text>
//             }
//           </View>
//         </View>
//       </SafeAreaView>
//     </Fragment>
//   );
// }
// export default App;

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: 'white',
//   },

//   body: {
//     backgroundColor: 'white',
//     borderColor: 'black',
//     borderWidth: 1,
//     height: Dimensions.get('screen').height - 20,
//     width: Dimensions.get('screen').width,
//   },
//   ImageSections: {
//     display: 'flex',
//     flexDirection: 'row',
//     paddingHorizontal: 8,
//     paddingVertical: 8,
//     justifyContent: 'center',
//   },
//   images: {
//     width: 250,
//     height: 250,
//     borderColor: 'black',
//     borderWidth: 1,
//     marginHorizontal: 3,
//   },
//   btnParentSection: {
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   btnSection: {
//     width: 225,
//     height: 50,
//     backgroundColor: '#DCDCDC',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 3,
//     marginBottom: 10,
//   },
//   btnText: {
//     textAlign: 'center',
//     color: 'gray',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// import React, { useState } from 'react';
// import { Button, Pressable, Image, TextInput, ScrollView, StyleSheet, Text, scrollView, TouchableOpacity, View } from 'react-native';
// import { Base64 } from 'js-base64';
// const url = "https://reactnative.dev/img/tiny_logo.png";
// const Home = ({ navigation }) => {
//   const [inpText, setInpText] = useState(url);
//   const [encPwd, setEncPwd] = useState();
//   const [decPwd, setDecPwd] = useState();
//   return (
//     <View style={styles.homeContainer}>
//       <Text>Full Stack React Native</Text>
//       <TextInput style={styles.textInput} placeholder="Enter Input" onChangeText={(text) => setInpText(text)} />
//       <TouchableOpacity onPress={() => setEncPwd(Base64.encode(inpText))}>
//         <Text>Encrypt Pwd</Text>
//       </TouchableOpacity>
//       <Text style={{ color: 'red', marginTop: 10 }}>{encPwd}</Text>
//       <Text>{decPwd}</Text>
//       <TouchableOpacity onPress={() => setDecPwd(Base64.decode(encPwd))}>
//         <Text>Decrypt Pwd</Text>
//       </TouchableOpacity>
//       <Image source={{ uri: inpText }} style={{ height: 100, width: 100 }} />
//     </View>
//   )
// }
// export default Home;

// const styles = StyleSheet.create({
//   homeContainer: {
//     height: '100%',
//     backgroundColor: 'grey',
//     alignItems: 'center'
//   },
//   textInput: {
//     borderWidth: 4,
//     borderRadius: 10,
//     padding: 10,
//     margin: 10,
//     width: '80%'
//   }
// })

// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// const App = () => {
//   const file = "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Hindu-Shiva-God-Wallpaper-Free-Download.jpg"
//   const [images, setImages] = useState('')
//   const eventhandler = () => {
//     let document = "";
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function () {
//       document = reader.result;
//     };
//     reader.onerror = function (error) {
//       console.log('Error: ', error);
//     };
//     return document;
//   }
//   return (
//     <View style={{ backgroundColor: 'green', flex: 1 }}>
//       <View>
//         <TouchableOpacity onPress={() => eventhandler("https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Hindu-Shiva-God-Wallpaper-Free-Download.jpg")}>
//           <View>
//             <Text style={{ color: 'red', fontSize: 50, alignSelf: 'center', marginTop: 50 }}>buttons</Text>
//           </View>
//         </TouchableOpacity>
//         {images ? (
//           <Image source={images} style={{ height: 50, width: 50 }} />
//         ) : null
//         }
//       </View>
//     </View>
//   )
// }
// export default App;

// import React, { Fragment, Component } from 'react';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   StatusBar,
//   Image,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fileUri: '',
//     };
//   }

//   chooseImage = () => {
//     let options = {
//       title: 'Select Image',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };

//     launchImageLibrary(options, response => {
//       console.log('Response = ', response);
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else {
//         console.log('response', JSON.stringify(response));
//         this.setState({
//           fileUri: response.assets[0].uri,
//         });
//       }
//     });
//   };

//   launchCamera = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };

//     launchCamera(options, response => {
//       console.log('Response = ', response);
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else {
//         console.log('response', JSON.stringify(response));
//         this.setState({
//           fileUri: response.assets[0].uri,

//         });
//         console.log("to get string value:",this.state.fileUri.toString())
//       }
//     });
//   };

//   renderFileUri() {
//     if (this.state.fileUri) {
//       return <Image source={{ uri: this.state.fileUri }} style={styles.images} />;
//     } else {
//       return (
//         <Image
//           source={{
//             uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//           }}
//           style={styles.images}
//         />
//       );
//     }
//   }

//   render() {
//     return (
//       <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <View style={styles.body}>
//             <Text
//               style={{ textAlign: 'center', fontSize: 20, paddingBottom: 10 }}>
//               Pick Images from Camera & Gallery
//             </Text>
//             <View style={styles.ImageSections}>
//               <View>{this.renderFileUri()}</View>
//             </View>
//             <View style={styles.btnParentSection}>
//               <TouchableOpacity
//                 onPress={this.chooseImage}
//                 style={styles.btnSection}>
//                 <Text style={styles.btnText}>Choose File</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={this.launchCamera}
//                 style={styles.btnSection}>
//                 <Text style={styles.btnText}>Directly Launch Camera</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </SafeAreaView>
//       </Fragment>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: 'white',
//   },

//   body: {
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     borderColor: 'black',
//     borderWidth: 1,
//     height: Dimensions.get('screen').height - 20,
//     width: Dimensions.get('screen').width,
//   },
//   ImageSections: {
//     display: 'flex',
//     flexDirection: 'row',
//     paddingHorizontal: 8,
//     paddingVertical: 8,
//     justifyContent: 'center',
//   },
//   images: {
//     width: 250,
//     height: 250,
//     borderColor: 'black',
//     borderWidth: 1,
//     marginHorizontal: 3,
//   },
//   btnParentSection: {
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   btnSection: {
//     width: 225,
//     height: 50,
//     backgroundColor: '#DCDCDC',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 3,
//     marginBottom: 10,
//   },
//   btnText: {
//     textAlign: 'center',
//     color: 'gray',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity
// } from 'react-native';

// import DocumentPicker from 'react-native-document-picker';

// const App = () => {
//   const [singleFile, setSingleFile] = useState('');
//   const uploadImage = async () => {
//     // Check if any file is selected or not
//     if (singleFile != null) {
//       // If file selected then create FormData
//       const fileToUpload = singleFile;
//       const data = new FormData();
//       data.append('name', 'Image Upload');
//       data.append('file_attachment', fileToUpload);
//       // Please change file upload URL
//       let res = await fetch(
//         'http://localhost/upload.php',
//         {
//           method: 'post',
//           body: data,
//           headers: {
//             'Content-Type': 'multipart/form-data; ',
//           },
//         }
//       );
//       let responseJson = await res.json();
//       if (responseJson.status == 1) {
//         alert('Upload Successful');
//       }
//     } else {
//       // If no file selected the show alert
//       alert('Please Select File first');
//     }
//   };
//   const selectFile = async () => {
//     // Opening Document Picker to select one file
//     try {
//       const res = await DocumentPicker.pick({
//         // Provide which type of file you want user to pick
//         type: [DocumentPicker.types.allFiles],
//         // There can me more options as well
//         // DocumentPicker.types.allFiles
//         // DocumentPicker.types.images
//         // DocumentPicker.types.plainText
//         // DocumentPicker.types.audio
//         // DocumentPicker.types.pdf
//       });
//       // Printing the log realted to the file
//       console.log('res : ' + JSON.stringify(res));
//       // Setting the state to show single file attributes
//       setSingleFile(res);
//     } catch (err) {
//       setSingleFile(null);
//       // Handling any exception (If any)
//       if (DocumentPicker.isCancel(err)) {
//         // If user canceled the document selection
//         alert('Canceled');
//       } else {
//         // For Unknown Error
//         alert('Unknown Error: ' + JSON.stringify(err));
//         throw err;
//       }
//     }
//   };
//   return (
//     <View style={styles.mainBody}>
//       <View style={{ alignItems: 'center' }}>
//         <Text style={{ fontSize: 30, textAlign: 'center' }}>
//           React Native File Upload Example
//         </Text>
//         <Text
//           style={{
//             fontSize: 25,
//             marginTop: 20,
//             marginBottom: 30,
//             textAlign: 'center',
//           }}>
//           www.aboutreact.com
//         </Text>
//       </View>
//       {/*Showing the data of selected Single file*/}
//       {singleFile != null ? (
//         <Text style={styles.textStyle}>
//           File Name: {singleFile.name ? singleFile.name : ''}
//           {'\n'}
//           Type: {singleFile.type ? singleFile.type : ''}
//           {'\n'}
//           File Size: {singleFile.size ? singleFile.size : ''}
//           {'\n'}
//           URI: {singleFile.uri ? singleFile.uri : ''}
//           {'\n'}
//         </Text>
//       ) : null}
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         activeOpacity={0.5}
//         onPress={selectFile}>
//         <Text style={styles.buttonTextStyle}>Select File</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         activeOpacity={0.5}
//         onPress={uploadImage}>
//         <Text style={styles.buttonTextStyle}>Upload File</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   buttonStyle: {
//     backgroundColor: '#307ecc',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#307ecc',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 15,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   textStyle: {
//     backgroundColor: 'green',
//     fontSize: 15,
//     marginTop: 16,
//     marginLeft: 35,
//     marginRight: 35,
//     textAlign: 'center',
//   },
// });

// export default App;

// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Dashboard from './EE_AppFiles/Dashboard';
// import RoomsDashboard from './EE_AppFiles/RoomsDashboard';
// import Item1 from './EE_AppFiles/Item1';
// const Stack = createNativeStackNavigator();
// function App() {
//   const screenOptions = {
//     headerShown: false,
//   }
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Dashboard" component={Dashboard} options={screenOptions} />
//         <Stack.Screen name="Item1" component={Item1} options={screenOptions} />
//         <Stack.Screen
//           name="RoomsDashboard"
//           component={RoomsDashboard}
//           options={screenOptions}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
// export default App;
