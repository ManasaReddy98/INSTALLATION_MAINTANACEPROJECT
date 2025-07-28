import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import GlobalAppStyles from '../appstyles/GlobalAppStyles';
import {TabView, SceneMap} from 'react-native-tab-view';
import cameraicon from '../images/camera.png';
import left_dashbord from '../images/left_dashbord.png';
import notifications from '../images/notifications.png';
import logout from '../images/user_logout_24.png';
// import InstallationDashboard from './InstallationDashboard';
import InstallationDashboard from './InstallationDashboard';
import MaintananceDashboard from '../MaintananceApp/Components/Maintenance/MaintananceDashboard';
import SiteSurveyDashboard from '../SiteSurveyApp/components/jsfiles/SiteSurveyDashboard';
import FirstRoute from './FirstRoute';
import SecondRoute from './SecondRoute';

export default function MainAppDashboard({route, navigation}) {
  const [resouecefullName, setResouecefullName] = useState('');
  const [resourceUId, setResourceUId] = useState('');
  // const [languageDataOpt, setLanguageDataOpt] = useState();
  const {
    Language,
    resourceId,
    resourceMobileNumber,
    resourceName,
    LanguageOpt,
  } = route.params;

  useEffect(() => {
    setResouecefullName(resourceName);
    setResourceUId(resourceId);
    // setLanguageDataOpt(LanguageOpt);
  }, []);

  console.log(
    'MAIN APP DASHBOARD Route Params ########### ' + resourceId,
    resourceMobileNumber,
    resourceName,
  );
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Installation', title: 'Installation'},
    {key: 'Maintanance', title: 'Maintanance'},
    // {key: 'SiteSurvey', title: 'SiteSurvey'},
  ]);

  const renderScene = SceneMap({
    Installation: () => (
      <InstallationDashboard
        Language={Language}
        resourceId={resourceId}
        resourceMobileNumber={resourceMobileNumber}
        resourceName={resourceName}
        LanguageOpt={LanguageOpt}
      />
    ),
    Maintanance: () => (
      <MaintananceDashboard
        Language={Language}
        resourceId={resourceUId}
        resourceMobileNumber={resourceMobileNumber}
        resourceName={resourceName}
        LanguageOpt={LanguageOpt}
      />
    ),
    // SiteSurvey: () => (
    //   <SiteSurveyDashboard
    //     Language={Language}
    //     resourceId={resourceId}
    //     resourceMobileNumber={resourceMobileNumber}
    //     resourceName={resourceName}
    //     LanguageOpt={LanguageOpt}
    //     lang={LanguageOpt}
    //   />
    // ),
    //SiteSurveyDashboard  Language, selectedUserName, LanguageOpt, lang
  });

  return (
    <View style={GlobalAppStyles.container}>
      {/* Custom Drawer Toggle */}
      <StatusBar backgroundColor="#18253f" />
      <View style={GlobalAppStyles.pincodebackBox}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
          }}>
          <Image
            style={{height: 25, width: 25, alignSelf: 'flex-start'}}
            source={left_dashbord}></Image>
          <Image
            style={{
              height: 25,
              width: 25,
              alignSelf: 'flex-end',
              position: 'absolute',
              right: 50,
            }}
            source={notifications}></Image>
          <TouchableOpacity
            // onPress={() =>
            //   navigation.navigate('Login', {
            //     resourceId: '',
            //     resourceMobileNumber: '',
            //     LanguageOpt: LanguageOpt,
            //   })
            // }
            onPress={() => navigation.goBack()}
            style={{position: 'absolute', right: 0}}>
            <Image
              style={{height: 25, width: 25, alignSelf: 'flex-end'}}
              source={logout}></Image>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={GlobalAppStyles.instaHead}>
            {/* {Language.IntroductionText1} */}
            {LanguageOpt('Hi')} , {resouecefullName}
          </Text>
          <Text style={GlobalAppStyles.instapagesubheadtext}>
            {LanguageOpt('Welcome_To_Eficaa')}
            {/* Welcome to Installation Dashboard */}
          </Text>
        </View>
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={300}
        renderTabBar={() => null} // Hide the tab bar if you don't want it
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 15,
    height: 100,
    backgroundColor: '#000000',
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
