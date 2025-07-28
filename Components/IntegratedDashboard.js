// import React from 'react'

// function ConfigurationDashboard() {
//   return (
//     <div>ConfigurationDashboard</div>
//   )
// }

// export default ConfigurationDashboard

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  View,
  Button,
  LogBox,
  FlatList,
  Dimensions,
} from 'react-native';
var screenWidth = Dimensions.get('window').width;
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import GlobalAppStyles from '../appstyles/GlobalAppStyles';
import left_dashbord from '../images/left_dashbord.png';
import notifications from '../images/notifications.png';
import logout from '../images/user_logout_24.png';
import { ScrollView } from 'react-native-gesture-handler';
import three_dots from '../images/three_dots_1.png';
import Constants from '../Constants/Constants';
import eficaalogo from '../images/eficaa_logo.png';
import CheckNetworkConnectivity from '../ReusableFunctions/CheckNetworkConnectivity';
import TODOService from '../ReUsableMethods/TODOService';
import { LogMessages } from '../LogManager/LogMessages';

const data = [60, 40, 50];
const buttonColours = [
  // {colourCode: '#E27D39'},
  { colourCode: '#6d79c5' },
  { colourCode: '#519f87' },
  { colourCode: '#d46a6b' },
  { colourCode: '#da6c8c' },
  { colourCode: '#d4972c' },
  { colourCode: '#668bbf' },
  { colourCode: '#c06ac3' },
];
const buttonColoursData = [
  // '#E27D39',
  '#6d79c5', //purple
  '#519f87', //Green
  '#d4972c', //orange
  '#d46a6b',
  '#da6c8c',
  '#668bbf',
  '#c06ac3',
];

const colors = ['#FF5722', '#22E618', '#2196F3'];
const text = ['completed', 'inprogress', 'reassigned'];
const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data } = slice;
    return (
      <Text
        key={index}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill={'white'}
        textAnchor={'middle'}
        alignmentBaseline={'middle'}
        fontSize={24}
        stroke={'black'}
        strokeWidth={0.2}>
        {data.amount}
      </Text>
    );
  });
};
function IntegratedDashboard({ route, navigation }) {
  const { Language, resourceId, resourceMobileNumber, LanguageOpt, resourceName } =
    route.params;
  const listData = Language.listData;
  const CELL_COUNT = 4;
  const checkNetworkState = new CheckNetworkConnectivity();
  const todoService = new TODOService();
  const [netInfo, setNetInfo] = useState('');
  const [value, setValue] = useState('');
  const [bgColour, setBgColour] = useState('');

  const [posts, setPosts] = useState([]);
  const [assetIds, setAssetIds] = useState([]);

  const [dtData, setDtData] = useState([]);
  const [meterData, setMeterData] = useState([]);
  const [tmuData, setTMUData] = useState([]);
  const [routerData, setRouterData] = useState([]);
  const [dcuData, setDcuData] = useState([]);
  const assetTypeNamesArray = [
    // {
    //   AssetTypeName: 'DTR',
    //   Count: dtData.length,
    //   photo: require('../images/ef_transformer.png'),
    // },
    {
      AssetTypeName: 'Meter',
      Count: meterData.length,
      photo: require('../images/ef_Meter.png'),
    },
    {
      AssetTypeName: 'TMU',
      Count: tmuData.length,
      photo: require('../images/ef_tmu.png'),
    },
    {
      AssetTypeName: 'DCU',
      Count: dcuData.length,
      photo: require('../images/ef_dcu.png'),
    },
    {
      AssetTypeName: 'ROUTER',
      Count: routerData.length,
      photo: require('../images/ef_router.png'),
    },
    // {
    //   AssetTypeName: 'Sectionaliser',
    //   Count: '0',
    //   photo: require('../images/ef_sectionaliser.png'),
    // },
  ];

  const [assetTypeList, setAssetTypeList] = useState([]);
  //console.log("LIST DATA","LIST DATA"+ JSON.stringify(listData));

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    checkNetworkState
      .checkNetworkState()
      .then(networkStatus => {
        console.log('Network Status:', networkStatus);
        setNetInfo(networkStatus);
        // Continue with your logic when there is a network connection
      })
      .catch(error => {
        console.error('Error:', error.message);
      });

    //networkstate = getNetStateInfo();
  });

  console.log(
    'INSTALLATION DASHBOARD',
    LogMessages.CODE_APP_NETWORK_SUCESS_MESSAGE,
    netInfo,
    resourceId,
  );

  useEffect(() => {
    if (resourceId !== null) {
      getInstallationDetailsByResourceId(
        '/installationdata/Installationdetails/',
        resourceId,
      );
    }
  }, [resourceId]);

  const getInstallationDetailsByResourceId = async (methodname, paramName) => {
    const req_url =
      'http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/InstallationResourcesdata/installationsbyResourceID/' +
      resourceId; //Constants.API_BASE_URL + '/' + methodname + '/' + paramName;
    //const req="http://172.16.15.24:91/api/v1/ServicePoints/2";
    console.log(
      'Installation Details Request ### ',
      'Installation Details Request ' + req_url,
    );
    let token = '';
    const { data, status } = await todoService.getDataFromApi(req_url, token);
    setPosts(data);
    console.log(
      'INSTALLATION DASHBOARD',
      methodname,
      LogMessages.CODE_HTTP,
      status,
    );
  };

  console.log('LIST DATA', 'LIST DATA' + JSON.stringify(posts), posts.length);

  useEffect(() => {
    if (posts.length > 0) {
      const assetIds = posts.flatMap(item =>
        item.installationDataList.map(installation => installation.assetId),
      );
      setAssetIds(assetIds);

      const tmuList = [];
      const dtrList = [];
      const mtrList = [];
      const dcuList = [];
      const routerList = [];
      /* This logic will works with only asset id's  but we neeed objects , 
      so that purpose we can saggrigate data with below logic
      // assetIds.forEach(assetId => {
      //   if (assetId.includes('TMU')) {
      //     tmuList.push(assetId);
      //   } else if (assetId.includes('DTR')) {
      //     dtrList.push(assetId);
      //   } else if (assetId.includes('MTR')) {
      //     mtrList.push(assetId);
      //   } else if (assetId.includes('DCU')) {
      //     dcuList.push(assetId);
      //   }
      // });*/

      posts.forEach(item => {
        item.installationDataList.forEach(installation => {
          if (installation.assetId.includes('TMU')) {
            tmuList.push(installation);
          } else if (installation.assetId.includes('DTR')) {
            dtrList.push(installation);
          } else if (installation.assetId.includes('MTR')) {
            mtrList.push(installation);
          } else if (installation.assetId.includes('DCU')) {
            dcuList.push(installation);
          } else if (installation.assetId.includes('ROUTER')) {
            routerList.push(installation);
          }
        });
      });

      setTMUData(tmuList);
      setDtData(dtrList);
      setMeterData(mtrList);
      setDcuData(dcuList);
      setRouterData(routerList);
    }
  }, [posts]);

  console.log(
    'ASSET ID',
    'ASSET ID LIST $$$$$$$$$ ' + assetIds,
    routerData.length,
  );
  console.log(
    'ASSET ID',
    'ROUTER DATA LIST $$$$$$$$$ ' + assetIds,
    JSON.stringify(routerData),
  );

  console.log(
    'ASSET ID',
    'TMU DATA LIST $$$$$$$$$ ' + assetIds,
    JSON.stringify(tmuData),
  );
  useEffect(() => {
    // console.log(
    //   'DTR DATA',
    //   'DTR DATA #############   ' + dtData.length,
    //   tmuData.length,
    //   meterData.length,
    //   dcuData.length,
    // );
    //
  }, [dtData, tmuData, meterData, dcuData, routerData]);

  //console.log("DTR DATA","DTR DATA #############   "+ dtData.length ,  tmuData.length , meterData.length , dcuData.length );
  // console.log(
  //   'DTR DATA',
  //   'Asset TypesList #############   ' + JSON.stringify(assetTypeList),
  // );

  // const navigation = useNavigation();
  const Separator = () => <View style={GlobalAppStyles.separator} />;

  function Item({ item }) {
    const navigation = useNavigation();
    const placeSubmitHandler = item => {
      console.log(
        'AssetLocationList :: ',
        ' List item clicked ' + item.AssetId,
        ' Asset Name :' + item.InstallationAsset,
      );
    };
  }
  const changeColor = () => {
    var letters = '0123456789ABCDE';
    var color = '#';
    color += letters[Math.floor(Math.random() * 16)];
    setBgColour(color);
  };

  const navigateToAssetData = item => {
    console.log('Button Click ############ ', JSON.stringify(item));
    console.log(
      'Button Click ############ ',
      JSON.stringify(item.AssetTypeName),
    );
    // if (item.AssetTypeName == 'DTR') {
    //   console.log('Button Click #### ', item.AssetTypeName);
    //   navigation.navigate('AssetDataList', {
    //     AssetDetails: dtData, //Language.dtData,
    //     ti: item.AssetTypeName, //Language.AssetDataTitleTextDT,
    //     color: '#E27D39',
    //     Language: Language,
    //     resourceId:resourceId,
    //     selectedAssetTypeName:'DTR'
    //   });
    // }
    if (item.AssetTypeName == 'Meter') {
      console.log('Button Click #### ', item.AssetTypeName);
      navigation.navigate('AssetDataList', {
        AssetDetails: meterData, //Language.meterData,
        ti: item.AssetTypeName, //Language.AssetDataTitleTextmeter,
        color: '#6d79c5',
        Language: Language,
        resourceId: resourceId,
        selectedAssetTypeName: 'Meter',
        installationID: item.installationId,
      });
    }
    if (item.AssetTypeName == 'TMU') {
      console.log('Button Click #### ', item.AssetTypeName);
      navigation.navigate('AssetDataList', {
        AssetDetails: tmuData, //Language.tmuData,
        ti: item.AssetTypeName, //Language.AssetDataTitleTextTMU,
        color: '#519f87',
        Language: Language,
        resourceId: resourceId,
        selectedAssetTypeName: 'TMU',
        installationID: item.installationId,
      });
    }
    if (item.AssetTypeName == 'DCU') {
      console.log('Button Click #### ', item.AssetTypeName);

      navigation.navigate('AssetDataList', {
        AssetDetails: dcuData, //Language.routerData,
        ti: item.AssetTypeName, // Language.AssetDataTitleTextRouter,
        color: '#d4972c', //d46a6b
        Language: Language,
        resourceId: resourceId,
        selectedAssetTypeName: 'DCU',
        installationID: item.installationId,
      });
    }
    if (item.AssetTypeName == 'ROUTER') {
      console.log('Button Click #### ', item.AssetTypeName);

      navigation.navigate('AssetDataList', {
        AssetDetails: routerData, //Language.routerData,
        ti: item.AssetTypeName, // Language.AssetDataTitleTextRouter,
        color: '#d46a6b', //d46a6b
        Language: Language,
        resourceId: resourceId,
        selectedAssetTypeName: 'ROUTER',
        installationID: item.installationId,
      });
    }
  };
  // const renderButtons = () => {
  //   var colourcomponent = '';
  //   var list = myArray.map((item, index) => {
  //     //colourcomponent = buttonColours[item];
  //     return (
  //       <View
  //         key={index}
  //         style={{
  //           flexDirection: 'row',
  //           marginRight: 10,
  //           marginTop: 10,
  //           borderRadius: 10,
  //           height: 70,
  //           paddingLeft: 20,
  //         }}>
  //         <TouchableOpacity style={{backgroundColor: '#ff0'}}>
  //           <Image style={{height: 30, width: 30}} source={left_dashbord} />
  //           <Text>{item.amount} </Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   });
  //   return list;
  // };
  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <StatusBar backgroundColor="#18253f" />
      <View>
        <Text>Configuration Dashboard</Text>
      </View>
      <View style={GlobalAppStyles.pincodebackBox}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 25,
            marginLeft: 20,
            marginRight: 20,
          }}>
          <Image
            style={{ height: 25, width: 25, alignSelf: 'flex-start' }}
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
            style={{ position: 'absolute', right: 0 }}>
            <Image
              style={{ height: 25, width: 25, alignSelf: 'flex-end' }}
              source={logout}></Image>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={GlobalAppStyles.instaHead}>
            {/* {Language.IntroductionText1} */}Hi , {resourceName}
          </Text>
          <Text style={GlobalAppStyles.instapagesubheadtext}>
            {Language.IntroductionText2}
            {/* Welcome to Installation Dashboard */}
          </Text>
        </View>

        {/* This is now commented for sake of now development nor done */}
        {/* <View style={{flex: 1.3, marginTop: 30}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginLeft: 20,
              marginRight: 20,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'column', margin: 10}}>
              <AnimatedCircularProgress
                size={90}
                width={15}
                fill={data[1]}
                tintColor="#e36415"
                //tintColorSecondary="grey"
                dashedBackground={{width: 10, gap: 10}}
                dashedTint={{width: 10, gap: 10}}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                duration={5000}
                backgroundColor="white">
                {fill => (
                  <Text style={GlobalAppStyles.progressBarInnerCircle}>
                    {data[1]}
                  </Text>
                )}
              </AnimatedCircularProgress>
              <View style={GlobalAppStyles.legendView}>
                <TouchableOpacity
                  style={GlobalAppStyles.legendTouchableOpacity1}
                  title="Next"
                />
              </View>
              <Text style={GlobalAppStyles.legendText}>
                {' '}
                {Language.AnimatedCircularProgressNotStarted}{' '}
              </Text>
            </View>
            <View style={{flexDirection: 'column', margin: 10}}>
              <AnimatedCircularProgress
                size={90}
                width={15}
                fill={data[1]}
                tintColor="#375e27"
                dashedBackground={{width: 10, gap: 10}}
                dashedTint={{width: 10, gap: 10}}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                duration={5000}
                backgroundColor="white"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                // backgroundColor="#3a4a64"
              >
                {fill => (
                  <Text style={GlobalAppStyles.progressBarInnerCircle}>
                    {data[1]}
                  </Text>
                )}
              </AnimatedCircularProgress>
              <View style={GlobalAppStyles.legendView}>
                <TouchableOpacity
                  style={GlobalAppStyles.legendTouchableOpacity2}
                  title="Next"
                />
              </View>
              <Text style={GlobalAppStyles.legendText}>
                {Language.AnimatedCircularProgressInprogress}
              </Text>
            </View>
            <View style={{flexDirection: 'column', margin: 10}}>
              <AnimatedCircularProgress
                size={90}
                width={15}
                fill={data[1]}
                tintColor="#406278"
                dashedBackground={{width: 10, gap: 10}}
                dashedTint={{width: 10, gap: 10}}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                duration={5000}
                // backgroundColor="white"
                //22E618,2196F3
                //onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="white">
                {fill => (
                  <Text style={GlobalAppStyles.progressBarInnerCircle}>
                    {data[1]}
                  </Text>
                )}
              </AnimatedCircularProgress>
              <View style={GlobalAppStyles.legendView}>
                <TouchableOpacity
                  style={GlobalAppStyles.legendTouchableOpacity3}
                  title="Next"
                />
              </View>
              <Text style={GlobalAppStyles.legendText}>
                {' '}
                {Language.AnimatedCircularProgressReAssigned}{' '}
              </Text>
            </View>
          </View>
        </View> */}
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={navigation.navigate('InstallationDashboard', {
            Language: Language,
            resourceId: resourceId,
            resourceMobileNumber: resourceMobileNumber,
            resourceName: resourceName,
          })}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
          // style={styles.image}
          />
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView style={{width: screenWidth, marginLeft: 10, marginRight: 10}}>
        <Text></Text>
        <Text style={{color: '#000', alignSelf: 'center', fontSize: 20}}>
          Installation Dashboard
        </Text>
        <Text></Text>
        <FlatList
          data={assetTypeNamesArray}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'column',
                margin: 10,
                justifyContent: 'center',
                // marginRight: 20,
              }}>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: buttonColoursData[index],
                    alignSelf: 'center',
                    width: screenWidth / 2.5,
                    height: 120,
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
                        backgroundColor: '#fff',
                        borderRadius: 30,
                        height: 35,
                        width: 35,
                        marginLeft: 15,
                        justifyContent: 'center',
                      }}>
                      <Image
                        style={{
                          width: 20,
                          height: 22,
                          alignSelf: 'center',
                          mrginTop: 5,
                          marginLeft: 7,
                          alignSelf: 'flex-start',
                        }}
                        source={item.photo}
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 25,
                        height: 25,
                        width: 25,
                        marginLeft: 15,
                        justifyContent: 'center',
                        marginRight: 10,
                      }}>
                      <Image
                        style={{
                          width: 25,
                          height: 25,
                          alignSelf: 'center',
                        }}
                        source={three_dots}
                      />
                    </View>
                  </View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 18,
                      marginLeft: 10,
                      marginTop: 10,
                    }}>
                    Asset : {item.AssetTypeName}
                  </Text>

                  <Text style={{color: 'white', fontSize: 14, marginLeft: 10}}>
                    Count : {item.Count}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView> */}
    </View>
  );
}
export default IntegratedDashboard;
/*
  const meterData = [
    {
      id: 0,
      installationAsset: 'Meter',
      Count: 'SinglePhase/Inish',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 1,
      installationAsset: 'Meter',
      Count: '3Phase/ECIL',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 2,

      installationAsset: 'Meter',
      Count: 'LTCT/HPL',
      Location: '17.858458,54.8568',
      status: 'ReAssigned',
    },
    {
      id: 3,

      installationAsset: 'Meter',
      Count: 'LTCT/Vision Tech',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 4,

      installationAsset: 'Meter',
      Count: 'SinglePhase/Crystal',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
  ];
  const transformerData = [
    {
      id: 0,
      installationAsset: 'Transformer',
      Count: 'SinglePhase/Inish',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 1,
      installationAsset: 'Transformer',
      Count: '3Phase/ECIL',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 2,
      installationAsset: 'Transformer',
      Count: 'LTCT/HPL',
      Location: '17.858458,54.8568',
      status: 'ReAssigned',
    },
    {
      id: 3,
      installationAsset: 'Transformer',
      Count: 'LTCT/Vision Tech',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 4,
      installationAsset: 'Transformer',
      Count: 'SinglePhase/Crystal',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
  ];
  const routerData = [
    {
      id: 0,
      installationAsset: 'Router',
      Count: 'SinglePhase/Inish',
      Location: '17.858458,54.8568',
      status: 'ReAssigned',
    },
    {
      id: 1,
      installationAsset: 'Router',
      Count: '3Phase/ECIL',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 2,
      installationAsset: 'Router',
      Count: 'LTCT/HPL',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 3,
      installationAsset: 'Router',
      Count: 'LTCT/Vision Tech',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 4,
      installationAsset: 'Router',
      Count: 'SinglePhase/Crystal',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
  ];
  const tmuData = [
    {
      id: 0,
      installationAsset: 'TMU',
      Count: 'SinglePhase/Inish',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 1,
      installationAsset: 'TMU',
      Count: '3Phase/ECIL',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 2,
      installationAsset: 'TMU',
      Count: 'LTCT/HPL',
      Location: '17.858458,54.8568',
      status: 'ReAssigned',
    },
    {
      id: 3,
      installationAsset: 'TMU',
      Count: 'LTCT/Vision Tech',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 4,
      installationAsset: 'TMU',
      Count: 'SinglePhase/Crystal',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
  ];

   // const renderListButtons = () => {
  //   <FlatList
  //     //data={listData}
  //     data={posts}
  //     renderItem={({item}) => (
  //       <View
  //         style={{
  //           //  flex: 1,
  //           flexDirection: 'column',
  //           backgroundColor: '#000',
  //           margin: 1,
  //         }}>
  //         <TouchableOpacity style={{backgroundColor: '#000'}}>
  //           <Text>{item.assetId} </Text>
  //         </TouchableOpacity>
  //       </View>
  //     )}
  //     //Setting the number of column
  //     numColumns={3}
  //     keyExtractor={(item, index) => index.toString()}
  //   />;
  // };


      useEffect(() => {
        navigateToAssetData(item);
      }, [item]);
*/
