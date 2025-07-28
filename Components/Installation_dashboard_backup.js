import React, {useEffect, useState} from 'react';
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
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import GlobalAppStyles from '../appstyles/GlobalAppStyles';
import left_dashbord from '../images/left_dashbord.png';
import notifications from '../images/notifications.png';
import logout from '../images/logout.png';
import {ScrollView} from 'react-native-gesture-handler';
import three_dots from '../images/three_dots.png';

import Constants from '../Constants/Constants';
import eficaalogo from '../images/eficaa_logo.png';
import CheckNetworkConnectivity from '../ReusableFunctions/CheckNetworkConnectivity';
import TODOService from '../ReUsableMethods/TODOService';
import {LogMessages} from '../LogManager/LogMessages';


const data = [60, 40, 50];
const buttonColours = [
  {colourCode: '#E27D39'},
  {colourCode: '#6d79c5'},
  {colourCode: '#519f87'},
  {colourCode: '#d46a6b'},
  {colourCode: '#da6c8c'},
  {colourCode: '#d4972c'},
  {colourCode: '#668bbf'},
  {colourCode: '#c06ac3'},
];
const buttonColoursData = [
  '#E27D39',
  '#6d79c5',
  '#519f87',
  '#d46a6b',
  '#da6c8c',
  '#d4972c',
  '#668bbf',
  '#c06ac3',
];
// const listData = [
//     {

//         "AssetId": "li-1234-5678",
//         "InstallationAsset": "DT",
//         "Count": "50",
//         "photo": require('../images/ef_transformer.png')
//     },
//     {
//         "AssetId": "li-123454-56798789",
//         "InstallationAsset": "Meter",
//         "Count": "60",
//         "photo": require('../images/ef_Meter.png')
//     },
//     {
//         "AssetId": "ka-123454-56798789",
//         "InstallationAsset": "TMU",
//         "Count": "30",
//         "photo": require('../images/ef_tmu.png')
//     },
//     {
//         "AssetId": "ka-123454-56798789",
//         "InstallationAsset": "Router",
//         "Count": "40",
//         "photo": require('../images/ef_router.png')
//     },
//     {
//         "AssetId": "ka-123454-56798789",
//         "InstallationAsset": "Sectionaliser",
//         "Count": "15",
//         "photo": require('../images/ef_sectionaliser.png')
//     },
//     {
//         "AssetId": "ka-123454-56798789",
//         "InstallationAsset": "DCU",
//         "Count": "25",
//         "photo": require('../images/ef_dcu.png')
//     },
// ];

const myArray = [
  {
    key: 1,
    AssetType: 'Transformer',
    colourCode: '#E27D39',
    count: 20,
  },
  {
    key: 2,
    amount: 'Meter',
    colourCode: '#6d79c5',
    count: 30,
  },
  {
    key: 3,
    amount: 'TMU',
    colourCode: '#519f87',
    count: 20,
  },
  {
    key: 4,
    amount: 'Sectionaliser',
    colourCode: '#d46a6b',
    count: 40,
  },
  {
    key: 5,
    amount: 'Router',
    colourCode: '#da6c8c',
    count: 10,
  },
  {
    key: 6,
    amount: 'DCU',
    colourCode: '#d4972c',
    count: 20,
  },

  {
    key: 7,
    amount: 75,
    colourCode: '#668bbf',
    count: 60,
  },
  {
    key: 8,
    amount: 75,
    colourCode: '#c06ac3',
    count: 20,
  },
];
const colors = ['#FF5722', '#22E618', '#2196F3'];
const text = ['completed', 'inprogress', 'reassigned'];
const Labels = ({slices, height, width}) => {
  return slices.map((slice, index) => {
    const {labelCentroid, pieCentroid, data} = slice;
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
function InstallationDashboard({route}) {
  const {Language, resourceId} = route.params;
  const listData = Language.listData;
  const CELL_COUNT = 4;
  const checkNetworkState=new CheckNetworkConnectivity();
  const todoService = new TODOService();
  const[netInfo,setNetInfo]=useState('');
  const [value, setValue] = useState('');
  const [bgColour, setBgColour] = useState('');
  const [posts,setPosts]=useState([]);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const dtData = [
    {
      id: 0,
      installationAsset: 'DT',
      Count: 'SinglePhase/Inish',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 1,
      installationAsset: 'DT',
      Count: '3Phase/ECIL',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 2,
      installationAsset: 'DT',
      Count: 'LTCT/HPL',
      Location: '17.858458,54.8568',
      status: 'ReAssigned',
    },
    {
      id: 3,
      installationAsset: 'DT',
      Count: 'LTCT/Vision Tech',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 4,
      installationAsset: 'DT',
      Count: 'SinglePhase/Crystal',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
  ];

  useEffect(() => {  
    checkNetworkState.checkNetworkState().then(networkStatus => {
       console.log('Network Status:', networkStatus);
      setNetInfo(networkStatus);
      // Continue with your logic when there is a network connection
    })
    .catch(error => {
      console.error('Error:', error.message);     
    });

    //networkstate = getNetStateInfo();
   
  });

  console.log("INSTALLATION DASHBOARD", LogMessages.CODE_APP_NETWORK_SUCESS_MESSAGE, netInfo, resourceId);


  useEffect(() => {
    if (resourceId !== null) {
      getInstallationDetailsByResourceId('/installationdata/Installationdetails/', resourceId);
    }
  }, [resourceId]);

  const getInstallationDetailsByResourceId = async (methodname, paramName) => {
    const req_url = "http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/installationdata/Installationdetails/14" //Constants.API_BASE_URL + '/' + methodname + '/' + paramName;
    //const req="http://172.16.15.24:91/api/v1/ServicePoints/2";
    console.log(
      'Installation Details Request ### ',
      'Installation Details Request '+ req_url
    );
    let token="";
    const {data, status} = await todoService.getDataFromApi(req_url, token);
    setPosts(data);
    console.log("INSTALLATION DASHBOARD", methodname, LogMessages.CODE_HTTP, status);
  };

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
  const navigation = useNavigation();
  const Separator = () => <View style={GlobalAppStyles.separator} />;
  function Item({item}) {
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
  const renderListButtons = () => {
    <FlatList
      //data={listData}
      data={posts}
      renderItem={({item}) => (
        <View
          style={{
            //  flex: 1,
            flexDirection: 'column',
            backgroundColor: '#000',
            margin: 1,
          }}>
          <TouchableOpacity style={{backgroundColor: '#000'}}>
            <Text>{item.assetId} </Text>
          </TouchableOpacity>
        </View>
      )}
      //Setting the number of column
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
    />;
  };
  /*
      useEffect(() => {
        navigateToAssetData(item);
      }, [item]);*/
  const navigateToAssetData = item => {
    if (item.InstallationAsset == 'DT') {
      console.log('Button Click #### ', item.InstallationAsset);
      navigation.navigate('AssetDataList', {
        AssetDetails: Language.dtData,
        ti: Language.AssetDataTitleTextDT,
        color: '#E27D39',
        Language: Language,
      });
    }
    if (item.InstallationAsset == 'Meter') {
      console.log('Button Click #### ', item.InstallationAsset);
      navigation.navigate('AssetDataList', {
        AssetDetails: Language.meterData,
        ti: Language.AssetDataTitleTextmeter,
        color: '#6d79c5',
        Language: Language,
      });
    }
    if (item.InstallationAsset == 'TMU') {
      console.log('Button Click #### ', item.InstallationAsset);
      navigation.navigate('AssetDataList', {
        AssetDetails: Language.tmuData,
        ti: Language.AssetDataTitleTextTMU,
        color: '#519f87',
        Language: Language,
      });
    }
    if (item.InstallationAsset == 'Router') {
      console.log('Button Click #### ', item.InstallationAsset);
      navigation.navigate('AssetDataList', {
        AssetDetails: Language.routerData,
        ti: Language.AssetDataTitleTextRouter,
        color: '#d46a6b',
        Language: Language,
      });
    }
  };
  const renderButtons = () => {
    var colourcomponent = '';
    var list = myArray.map((item, index) => {
      //colourcomponent = buttonColours[item];
      return (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            marginRight: 10,
            marginTop: 10,
            borderRadius: 10,
            height: 70,
            paddingLeft: 20,
          }}>
          <TouchableOpacity style={{backgroundColor: '#ff0'}}>
            <Image style={{height: 30, width: 30}} source={left_dashbord} />
            <Text>{item.amount} </Text>
          </TouchableOpacity>
        </View>
      );
    });
    return list;
  };
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
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
            {Language.IntroductionText1}
          </Text>
          <Text style={GlobalAppStyles.instapagesubheadtext}>
            {Language.IntroductionText2}
          </Text>
        </View>
        <View style={{flex: 1.3, marginTop: 30}}>
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
        </View>
      </View>
      <ScrollView style={{width: screenWidth, marginLeft: 10, marginRight: 10}}>
        <Text style={{color: '#000', alignSelf: 'center', fontSize: 25}}>
          {Language.HeadTextAssets}
        </Text>
        <FlatList
          data={listData}
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
                    <View>
                      <Image
                        style={{
                          width: 20,
                          height: 30,
                          marginLeft: 10,
                          alignSelf: 'flex-start',
                          backgroundColor: '#fff',
                        }}
                        source={item.photo}
                      />
                    </View>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                        alignSelf: 'flex-end',
                      }}
                      source={three_dots}
                    />
                  </View>
                  <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>
                    Asset:{' '}
                  </Text>
                  <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>
                    {item.InstallationAsset}{' '}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{color: 'white', fontSize: 14, marginLeft: 10}}>
                      Count :
                    </Text>
                    <Text
                      style={{color: 'white', fontSize: 14, marginLeft: 10}}>
                      {item.Count}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
}
export default InstallationDashboard;
