import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  FlatList,
  Dimensions,
  ImageBackground,
  Alert,
} from 'react-native';
var screenWidth = Dimensions.get('window').width;
var screenheight = Dimensions.get('window').height;

import {useNavigation} from '@react-navigation/native';
import GlobalAppStyles from '../GlobalAppStyles';
import left_dashbord from '../../../images/left_dashbord.png';

import logout from '../../../images/icons8.png';
import {ScrollView} from 'react-native-gesture-handler';
import three_dots from '../../../images/three_dots.png';
import {useTranslation} from 'react-i18next';

const buttonColoursData = [
  '#519f87',
  '#E27D39',
  '#6d79c5',
  '#d46a6b',
  '#668bbf',
  '#d4972c',
  '#668bbf',
  '#c06ac3',
];

function MaintananceDashboard({
  Language,
  resourceId,
  resourceMobileNumber,
  resourceName,
  LanguageOpt,
}) {
  const {t} = useTranslation();
  // const {Language, resourceId, resourceName, LanguageOpt} = route.params;
  const [resourceUId, setResourceUId] = useState('');
  // console.log(
  //   'LanguageOpt++++++++++++++++++++++ M.Dashboard ',
  //   LanguageOpt,
  //   resourceId,
  // );

  useEffect(() => {
    setResourceUId(resourceId);
  }, []);

  console.log(
    'LanguageOpt++++++++++++++++++++++ M.Dashboard ON BACK PRESSED  ',
    resourceId,
    resourceUId,
  );

  const [dataissues, setDataissues] = useState([]);

  const [listData, setListdata] = useState([
    {
      AssetId: 'li-1234-5678',
      cardtext: t('Issues'),
      notificationcount: '0',
      photo: require('../../../images/t_new.png'),
    },
    {
      AssetId: 'ka-123454-56798789',
      cardtext: t('Resolved'),
      notificationcount: '0',
      photo: require('../../../images/t_closed.png'),
    },
    {
      AssetId: 'ka-123454-56798789',
      cardtext: t('Re-Assigned'),
      notificationcount: '0',
      photo: require('../../../images/t_reassigned.png'),
    },
    {
      AssetId: 'li-123454-56798789',
      cardtext: t('Closed'),
      notificationcount: '0',
      photo: require('../../../images/tt_closed.png'),
    },
    {
      AssetId: 'li-123454-56798789',
      cardtext: t('Complaints'),
      notificationcount: '0',
      photo: require('../../../images/t_raised.png'),
    },
  ]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://mapp.eficaa.com:8080/EAM_Maintanance_V1.0/maintenancedata/maintenanceresourcebyid/${resourceUId}`,
  //     );
  //     const result = await response.json();

  //     setDataissues(result);
  //     if (result.status == '500') {
  //       Alert.alert(t('Server_Error'));
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // Update listData with the notification count after fetching dataissues
  // useEffect(() => {
  //   fetchData();
  // }, [resourceUId]);

  // Update listData when dataissues changes
  // useEffect(() => {
  //   const updatedListData = listData.map(item => {
  //     if (item.cardtext === t('Issues')) {
  //       return {...item, notificationcount: dataissues.length};
  //     }
  //     return item;
  //   });
  //   setListdata(updatedListData);
  // }, [dataissues]);

  const navigation = useNavigation();

  const navigateToAssetData = item => {
    if (item.cardtext == t('Issues')) {
      navigation.navigate('MaintananceAssetDataList', {
        notificationcount: item.notificationcount,
        resourceName: resourceName,
        AssetDetails: dataissues,
        color: '#18253f',
        Language: Language,
        resourceid: resourceUId,
        LanguageOpt: LanguageOpt,
        resourceMobileNumber: resourceMobileNumber,
      });
    }

    if (item.cardtext == t('Resolved')) {
      navigation.navigate('Resolved', {
        Resolveddata: Language.Resolveddata,
        ti: Language.AssetDataTitleTextTMU,
        color: '#18253f',
        Language: Language,
        resourceName: resourceName,
        resourceid: resourceUId,
        LanguageOpt: LanguageOpt,
        resourceMobileNumber: resourceMobileNumber,
      });
    }

    if (item.cardtext == t('Re-Assigned')) {
      navigation.navigate('ReAssignedIssues', {
        //AssetDetails: dataissues,
        // Resolveddata: Language.Resolveddata,
        ti: Language.AssetDataTitleTextTMU,
        color: '#18253f',
        Language: Language,
        resourceid: resourceUId,
        LanguageOpt: LanguageOpt,
        resourceName: resourceName,
        resourceMobileNumber: resourceMobileNumber,
      });
    }
    if (item.cardtext == t('Closed')) {
      navigation.navigate('ClosedIssues', {
        LanguageOpt: LanguageOpt,
        Language: Language,
        resourceid: resourceUId,
        LanguageOpt: LanguageOpt,
        resourceName: resourceName,
        resourceMobileNumber: resourceMobileNumber,
      });
    }
    if (item.cardtext == t('Complaints')) {
      navigation.navigate('Complaints', {
        LanguageOpt: LanguageOpt,
        Language: Language,
        resourceid: resourceUId,
        LanguageOpt: LanguageOpt,
        resourceName: resourceName,
        resourceMobileNumber: resourceMobileNumber,
      });
    }
  };

  const renderItem = ({item, index}) => {
    const notificationCount = parseInt(item.notificationcount); // Parse string to number for correct comparison
    const badgeWidth = notificationCount > 9 ? 32 : 24;
    const badgeHeight = notificationCount > 9 ? 32 : 24;

    return (
      <View
        style={{flexDirection: 'column', margin: 10, justifyContent: 'center'}}>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: buttonColoursData[index],
              alignSelf: 'center',
              width: screenWidth / 2.5,
              height: 110,
              borderRadius: 20,
            }}
            onPress={() => navigateToAssetData(item)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                  borderRadius: 30,
                  alignSelf: 'flex-start',
                  backgroundColor: '#fff',
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 5,
                    alignSelf: 'center',
                  }}
                  source={item.photo}
                />
              </View>
              {/* <Image
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                  alignSelf: 'flex-end',
                }}
                source={three_dots}
              /> */}
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginLeft: 10,
                marginTop: 10,
              }}>
              {item.cardtext}
            </Text>

            {/* Notification badge */}
            {/* {notificationCount > 0 && (
              <View
                style={[
                  styles.notificationBadge,
                  {
                    width: badgeWidth,
                    backgroundColor: buttonColoursData[index],
                    height: badgeHeight,
                  },
                ]}>
                <Text style={styles.badgeText}>{notificationCount}</Text>
              </View>
            )} */}

            {/* <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white', fontSize: 14, marginLeft: 10}}>
                {t('Count')} :
              </Text>
              <Text style={{color: 'white', fontSize: 14, marginLeft: 10}}>
                {notificationCount}
              </Text>
            </View> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <StatusBar backgroundColor="#18253f" />
      <ImageBackground
        source={require('../../../images/mapbackground.jpg')}
        style={StyleSheet.absoluteFillObject}>
        {/* <View style={GlobalAppStyles.pincodebackBox}>
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
            {t('Hii')} {resourceName}
          </Text>
          <Text style={GlobalAppStyles.instapagesubheadtext}>
            {t('Welcome_text')}
          </Text>
        </View>
      </View> */}
        <ScrollView
          style={{
            width: screenWidth,
            marginLeft: 10,
            marginRight: 10,
            marginTop: screenheight * 0.02,
          }}>
          <Text
            style={{
              color: '#000',
              alignSelf: 'center',
              fontSize: 20,
              marginBottom: 8,
              // marginBottom: screenheight * 0.02,
            }}>
            {t('Maintanance')}
          </Text>
          {/* <Text
            style={{
              color: '#000',
              alignSelf: 'center',
              fontSize: 18,
              marginBottom: screenheight * 0.02,
            }}>
            Tickets Info
          </Text> */}
          <FlatList
            data={listData}
            renderItem={renderItem}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default MaintananceDashboard;
const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: 100,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  notificationBadge: {
    position: 'absolute',
    top: -10,
    right: -10,
    // backgroundColor: '#E27D39',
    opacity: 0.8, // More visible background
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    elevation: 4,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    opacity: 1,
  },
});
