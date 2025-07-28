import React from 'react';
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
import First from './FirstRoute';
import Second from './SecondRoute';

var screenWidth = Dimensions.get('window').width;
const MainAppDashboard = ({route, navigation}) => {
  const {
    // Language,
    resourceId,
    resourceMobileNumber,
    resourceName,
    // LanguageOpt,
  } = route.params;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Installation', title: 'Installation'},
    {key: 'Maintanance', title: 'Maintanance'},
    // {key: 'third', title: 'Third'},
  ]);

  const [routes1] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'second'},
    // {key: 'third', title: 'Third'},
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
        resourceId={resourceId}
        resourceMobileNumber={resourceMobileNumber}
        resourceName={resourceName}
        LanguageOpt={LanguageOpt}
      />
    ),
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#18253f" />
      <View style={GlobalAppStyles.pincodebackBox}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 25,
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
            {LanguageOpt('Hi')} , {resourceName}
          </Text>
          <Text style={GlobalAppStyles.instapagesubheadtext}>
            {LanguageOpt('Welcome_To_Eficaa')}
            {/* Welcome to Installation Dashboard */}
          </Text>
        </View>
      </View>
      {/* <View>
        <Text
          style={{
            marginTop: 25,
            marginLeft: 40,
            fontsize: 40,
            fontWeight: '600',
            color: '#000000',
          }}>
          {' '}
          Services Provided{' '}
        </Text>
      </View> */}

      {/* <View style={styles.rowstyle}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('InstallationDashboard', {
              Language: Language,
              resourceId: resourceId,
              resourceMobileNumber: resourceMobileNumber,
              resourceName: resourceName,
              LanguageOpt: LanguageOpt,
            })
          }
          style={styles.rowViews}>
          <Image style={styles.imagestyle} source={cameraicon}></Image>
          <Text style={styles.textStyle}> Installation </Text>
        </TouchableOpacity>

        <View style={styles.rowViews}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MaintananceDashboard', {
                Language: Language,
                resourceId: resourceId,
                resourceMobileNumber: resourceMobileNumber,
                resourceName: resourceName,
                LanguageOpt: LanguageOpt,
              })
            }
            style={styles.rowViews}>
            <Image style={styles.imagestyle} source={cameraicon}></Image>
            <Text style={styles.textStyle}> Maintanance </Text>
          </TouchableOpacity>

         
        </View>
      </View>
      <View style={styles.rowstyle}>
        <View style={styles.rowViews}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('InstallationDashboard', {
                Language: Language,
                resourceId: resourceId,
                resourceMobileNumber: resourceMobileNumber,
                resourceName: resourceName,
                LanguageOpt: LanguageOpt,
              })
            }
            style={styles.rowViews}>
            <Image style={styles.imagestyle} source={cameraicon}></Image>
            <Text style={styles.textStyle}> SiteSurvey </Text>
          </TouchableOpacity>
        
        </View>
        <View style={styles.rowViews}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('InstallationDashboard', {
                Language: Language,
                resourceId: resourceId,
                resourceMobileNumber: resourceMobileNumber,
                resourceName: resourceName,
                LanguageOpt: LanguageOpt,
              })
            }
            style={styles.rowViews}>
            <Image style={styles.imagestyle} source={cameraicon}></Image>
            <Text style={styles.textStyle}> Complaints </Text>
          </TouchableOpacity>
         
        </View>
      </View> */}

      {/* <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={screenWidth}
        renderTabBar={() => null} // Hide the tab bar if you don't want it
      /> */}

      <TabView
        navigationState={{index, routes}}
        renderScene={SceneMap({
          first: First,
          second: Second,
          //   third: ThirdRoute,
        })}
        onIndexChange={setIndex}
        initialLayout={{width: 300}}
        renderTabBar={() => null} // Hide the tab bar if you don't want it
      />
    </View>
  );
};
export default MainAppDashboard;
const styles = StyleSheet.create({
  rowstyle: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  rowViews: {
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#18253f',
    height: 50,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#18253f',
  },
  imagestyle: {
    height: 25,
    width: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginLeft: 5,
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    marginLeft: 5,
    fontWeight: '600',
  },
});
