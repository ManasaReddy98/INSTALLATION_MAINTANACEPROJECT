import React, {useState, useEffect, useRef} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Login1 from './Login1';
import Login2 from './Login2';
import Round4 from './Round4';
import Login3 from './Login3';

var screenWidth = Dimensions.get('window').width;

import {HeaderStyleInterpolators} from '@react-navigation/stack';
import {FlatList} from 'react-native-gesture-handler';
import tick from '../images/tick.png';
import {GlobalStyles} from '../appstyles/GlobalStyles';

import CheckNetworkConnectivity from '../ReusableFunctions/CheckNetworkConnectivity';
import TODOService from '../ReUsableMethods/TODOService';
import {LogMessages} from '../LogManager/LogMessages';

function InstallationProcessMaking({navigation, route}) {
  const checkNetworkState = new CheckNetworkConnectivity();
  const todoService = new TODOService();
  const {
    color,
    Language,
    AssetDetails,
    item,
    selectedAssetTypeName,
    address,
    geoLocation,
    resourceId,
    selectedAssetDetails,
    coloring,
  } = route.params;
  const [posts, setPosts] = useState([]);
  const [SOPsteps, setSOPSteps] = useState([]);
  const [SOPactivities, setSOPActivities] = useState([]);
  const [sopResponse, setSopResponse] = useState([
    {
      SopId: '1234',
      Name: 'TMU Installation',
      InstallationId: 'TMU_I-23455678',
      'BR No': '1',
      Category: 'Installation',
      'Sub Category': 'Load',
      Type: 'Manual',
      CreatedBy: 'SE',
      'Modified by': 'SE',
      Steps: [
        {
          StepID: 1,
          StepName: 'TMU Installation Step - 1',
          Activities: [
            {
              ActivityID: 1,
              Activity: 'Location Finding',
            },
            {
              ActivityID: 2,
              Activity: 'Recieve Exact location from the department',
            },
            {
              ActivityID: 3,
              Activity: 'for where TMU has to be installed',
            },
            {
              ActivityID: 4,
              Activity: 'Check the TMU functionalities before transport',
            },
          ],
        },
        {
          StepID: 2,
          StepName: 'TMU Installation Step - 2',
          Activities: [
            {
              ActivityID: 5,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 6,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 3,
          StepName: 'TMU Installation Step - 3',
          Activities: [
            {
              ActivityID: 7,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 8,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 4,
          StepName: 'TMU Installation Step - 4',
          Activities: [
            {
              ActivityID: 9,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 10,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 5,
          StepName: 'TMU Installation Step - 5',
          Activities: [
            {
              ActivityID: 11,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 12,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 6,
          StepName: 'TMU Installation Step - 6',
          Activities: [
            {
              ActivityID: 13,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 14,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 7,
          StepName: 'TMU Installation Step - 7',
          Activities: [
            {
              ActivityID: 15,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 16,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    let assetID = selectedAssetDetails.assetId;
    // getAssetSOP_ByAssetID(); // call when api fixed until static sop format used for api response ...
  }, [selectedAssetDetails]);

  const getAssetSOP_ByAssetID = async () => {
    const req_url =
      'http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/installationdata/SopDetails/1234';
    console.log(
      'Installation SOP Request ### ',
      'Installation SOP Request ',
      req_url,
    );
    let token = '';
    console.log('Request Fired ##### ');
    try {
      const {data, status} = await todoService.fetchSOP_withoutToken(req_url);
      console.log('INSTALLATION DASHBOARD', status, data);
      setPosts(data);
    } catch (err) {
      // handle rejection
      console.error(err);
    }
  };

  // console.log(
  //     'Installation SOP Response ### ',
  //     'Installation SOP Response ### ' + JSON.stringify(sopResponse)
  // );

  useEffect(() => {
    {
      sopResponse.map(sop => {
        console.log(
          'Installation SOP Response ### ',
          'Installation SOP steps 1 ### ' + sop.SopId,
          sop.Name,
          sop.InstallationId,
          sop.Steps.length,
        );
        setSOPSteps(sop.Steps);
      });
    }
  }, [sopResponse]);
  useEffect(() => {
    {
      SOPsteps.map(steps => {
        console.log('', 'Installation SOP Length ### ' + steps.length);
        setSOPActivities(steps.Activities);
      });
    }
  }, [SOPsteps]);

  console.log(
    'Installation SOP Response ### ',
    'Installation SOP Activities 2 ### ' + SOPsteps.length,
  );

  return
   <View>
       <View style={{ height: '20%', width: '100%', backgroundColor: coloring, alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                <View style={{flexDirection:'row',marginLeft:15,marginRight:15}}>
                       
                        <View style={{flexDirection: 'column', flex: 2}}>
                            <Text style={{fontWeight: 'bold', color: '#fff'}}>
                            {item.assetId}
                            </Text>
                            <Text style={{marginTop: 5, color: '#fff'}}>
                            Location :{address}
                            </Text>
                            <Text style={{marginTop: 5, color: '#fff'}}>
                            Lat,Lon :{specificLocation.latitude},{specificLocation.longitude}
                            </Text>
                        </View>
                        
              
                    <View style={{height:80,width:80 ,borderWidth:1,borderColor:"#ffffff",borderRadius:20}}>
                        <TouchableOpacity style={{alignSelf:'center',marginTop:5}} 
                          //  onPress={() => navigation.navigate('QrScanner')}
                        >
                                <Image
                                    style={{ height: 70, width: 70 }}
                                    source={imag}
                                />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

  </View>;
}

export default InstallationProcessMaking;
