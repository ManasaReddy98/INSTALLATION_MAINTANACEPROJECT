import React, {useEffect, useRef, useState} from 'react';
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
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

function SiteSurveyDashboard({
  Language,
  resourceId,
  resourceMobileNumber,
  resourceName,
  LanguageOpt,
}) {
  const navigation = useNavigation();

  const [selectedUserName, setselectedUserName] = useState();

  useEffect(() => {
    setselectedUserName(resourceName);
  }, [resourceName]);

  const text = 'Discom';
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  const scaleValue1 = React.useRef(new Animated.Value(0)).current;
  const scaleValue2 = React.useRef(new Animated.Value(0)).current;
  const scaleValue3 = React.useRef(new Animated.Value(0)).current;
  const scaleValue4 = React.useRef(new Animated.Value(0)).current;
  const scaleValue5 = React.useRef(new Animated.Value(0)).current;

  const scaling = () =>
    Animated.spring(scaleValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 350,
    }).start();

  const scaling1 = () =>
    Animated.spring(scaleValue1, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 300,
    }).start();

  const scaling2 = () =>
    Animated.spring(scaleValue2, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 250,
    }).start();

  const scaling3 = () =>
    Animated.spring(scaleValue3, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 200,
    }).start();

  const scaling4 = () =>
    Animated.spring(scaleValue4, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 150,
    }).start();

  const scaling5 = () =>
    Animated.spring(scaleValue5, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 100,
    }).start();

  useEffect(() => {
    // scaling();
    // scaling1();
    // scaling2();
    // scaling3();
    // scaling4();
    // scaling5();
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#192442" />
      <ImageBackground
        source={require('../images/mapbackground.jpg')}
        style={StyleSheet.absoluteFillObject}
      />

      {/* <View>
        <Text
          style={{
            color: '#192442',
            marginTop: 50,
            marginLeft: 40,
            fontSize: 23,
          }}>
          {LanguageOpt('Hi')}, {resourceName}
        </Text>
        <Text
          style={{color: 'white', marginTop: 10, marginLeft: 40, fontSize: 15}}>
          {resourceMobileNumber}
        </Text>
      </View> */}

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'column', marginTop: 30}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AssetList', {
                Language: Language,
                selectedUserName: selectedUserName,
                LanguageOpt: LanguageOpt,
                lang,
              })
            }>
            <View
              style={[
                styles.item,
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#B0DAFF',
                  // transform: [{scale: scaleValue}],
                },
              ]}>
              <LinearGradient
                colors={['#C1ECE4', '#A1C2F1']}
                style={{
                  height: 150,
                  width: 140,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.subitem}>
                  <Image
                    style={styles.icon}
                    source={require('../imagesv1/handhouses.png')}
                  />
                </View>
                <Text style={styles.text}>{LanguageOpt('Assets')}</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          // onPress={() =>
          //   navigation.navigate('DiscomRegions', {
          //     Language: Language,
          //     LanguageOpt: LanguageOpt,
          //   })
          // }
          >
            <Animated.View
              style={[
                styles.item,
                {
                  marginTop: 30,
                  justifyContent: 'center',
                  backgroundColor: '#C9F4AA',
                  alignItems: 'center',
                  transform: [{scale: scaleValue1}],
                },
              ]}>
              <LinearGradient
                colors={['#C9F4AA', '#7AA874']}
                style={{
                  height: 150,
                  width: 140,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.subitem}>
                  <Image
                    style={styles.icon}
                    source={require('../imagesv1/dshbad1.png')}
                  />
                </View>
                <Text style={styles.text}>{LanguageOpt('DISCOM_Regions')}</Text>
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>

          {/* <TouchableOpacity
          // onPress={() =>
          //   navigation.navigate('Camera', {Language: Language, text: text})
          // }
          >
            <View
              style={[
                styles.item,
                {
                  marginTop: 30,
                  justifyContent: 'center',
                  backgroundColor: '#FFD56F',
                  alignItems: 'center',
                  // transform: [{scale: scaleValue2}],
                },
              ]}>
              <LinearGradient
                colors={['#F3E99F', '#FFD56F']}
                style={{
                  height: 150,
                  width: 140,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.subitem}>
                  <Image
                    style={styles.icon}
                    source={require('../imagesv1/dshbad2.png')}
                  />
                </View>
                <Text style={styles.text}>{LanguageOpt('Bills')}</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity> */}
        </View>

        <View style={{flexDirection: 'column', marginLeft: 35, marginTop: 30}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AllAssetsInfo')}>
            <View
              style={[
                styles.item,
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#FFAACF',
                  // transform: [{scale: scaleValue3}],
                },
              ]}>
              <LinearGradient
                colors={['#F7C8E0', '#FFAACF']}
                style={{
                  height: 150,
                  width: 140,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.subitem}>
                  <Image
                    style={styles.icon}
                    source={require('../imagesv1/mapmarker.png')}
                  />
                </View>
                <Text style={styles.text}>{LanguageOpt('ViewMap')}</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          // onPress={() =>
          //   navigation.navigate('Discom', {
          //     Language: Language,
          //     text: text,
          //     LanguageOpt: LanguageOpt,
          //   })
          // }
          >
            <View
              style={[
                styles.item,
                {
                  marginTop: 30,
                  justifyContent: 'center',
                  backgroundColor: '#ECA869',
                  alignItems: 'center',
                  // transform: [{scale: scaleValue4}],
                },
              ]}>
              <LinearGradient
                colors={['#F7C04A', '#ECA869']}
                style={{
                  height: 150,
                  width: 140,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.subitem}>
                  <Image
                    style={styles.icon}
                    source={require('../imagesv1/ratings.png')}
                  />
                </View>
                <Text style={styles.text}>{LanguageOpt('Ratings')}</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProfilePage', {
                Language: Language,
                text: text,
                LanguageOpt: LanguageOpt,
              })
            }>
            <Animated.View
              style={[
                styles.item,
                {
                  marginTop: 30,
                  justifyContent: 'center',
                  backgroundColor: '#C0B236',
                  alignItems: 'center',
                  transform: [{scale: scaleValue5}],
                },
              ]}>
              <LinearGradient
                colors={['#EBC7E8', '#C689C6']}
                style={{
                  height: 150,
                  width: 140,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.subitem}>
                  <Image
                    style={styles.icon}
                    source={require('../imagesv1/profile.png')}
                  />
                </View>
                <Text style={styles.text}>{LanguageOpt('Profile')}</Text>
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
SiteSurveyDashboard.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f9',
  },
  image: {
    flex: 1,
  },
  icon: {
    height: 50,
    width: 50,
  },
  item: {
    height: 150,
    width: 140,
    backgroundColor: '#f9fff5',
    borderRadius: 20,
    elevation: 10,
  },
  text: {
    color: '#444f63',
    alignSelf: 'center',
    fontSize: 15,
    paddingTop: 5,
  },
  subitem: {
    height: 70,
    width: 70,
    backgroundColor: '#162441',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SiteSurveyDashboard;
