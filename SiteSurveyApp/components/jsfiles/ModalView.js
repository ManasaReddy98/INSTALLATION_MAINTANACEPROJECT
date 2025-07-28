import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  FlatList
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Evilicons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextInput from './TextInput';
import Dropdown from './Dropdown';
import AssettypeDropdown from './AssettypeDropdown';
import { ScrollView } from 'react-native-gesture-handler';
import { BlurView } from "@react-native-community/blur";
const { width, height } = Dimensions.get('screen');

const DATA = [
  {
    t1: 'DistributionTransformer'
  },
  {
    t1: 'SupportStructure'
  },
  {
    t1: 'RingMainUnit'
  },
  {
    t1: 'Switch'
  },
  {
    t1: 'DTCStructure'
  },
  {
    t1: 'FeederPillarBox'
  },
  {
    t1: 'OHHighTensionElectricLine'
  },
  {
    t1: 'UGHighTensionElectricLine'
  },
  {
    t1: 'OHLowTensionElectricLine'
  }];

  const countries = [
    'Meter',
    'TMU',
    'DCU',
    'Ireland',
    'Brazil',
    'England',
    'Dubai',
  ];

  
  const countriesID = [
    {
      Assetid:'101',
      Assettypename:'meter01',
      Assetname:'meter'
     },
     {
      Assetid:'102',
      Assettypename:'Tmu01',
      Assetname:'Tmu',
     },
     {
      Assetid:'103',
      Assettypename:'Dcu02',
      Assetname:'Dcu',
     },
    
  ];

  
const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
 
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);



  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.spring(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
          {children}
        </Animated.View>
      </View>
      <View>

  </View>
    </Modal>
  );
};


const ModalView = () => {
  const [message, setMessage] = React.useState({Assetid:'',Assettypename:'',Assetname:''});

  const [showPopup, setShowPopup] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [subPopupVisible, setSubPopupVisible] = React.useState(false);
  const [buttonClickVisibility, setButtonClickVisibility] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const scaleValue1 = React.useRef(new Animated.Value(0)).current;
  const [showModal, setShowModal] = React.useState(visible);

 

  const executeSubModel = (item) => {
    setVisible(false);
    // console.log("Clicked Item " + item.t1);
    // setSubPopupVisible(true);
    setButtonClickVisibility(true);
    setSelectedItem(item.t1);

  }

  

  const onchangehandler = (selectedItem, index) => {
    console.log(selectedItem, index);
    // var value=myValues[1];
// console.log("Value"+ value);
 setMessage(countriesID[index]);
 // myValues.at(1)
   }
   console.log("Selected Input" + message);
    
    
    const scaleValue = React.useRef(new Animated.Value(0)).current;
       React.useEffect(() => {
         toggleModal();
       }, [visible]);



  const toggleModal = () => {
    if (visible) {
      //setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setVisible(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }
  };

  return (


    <View style={{ flex: 1, }}>
              <View style={styles.icontab}>
                     <TouchableOpacity  >
                       <AntDesign style={{paddingLeft:20}}name="clouddownload" size={30} color="white" />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => setVisible(true)} >
                       <AntDesign name="pluscircle" size={25} color="white" />
                     </TouchableOpacity>
                     <TouchableOpacity  >
                       <MaterialIcons name="edit" size={30} color="white" />
                     </TouchableOpacity>
                     <TouchableOpacity  >
                     <AntDesign name="cloudupload" size={30} color="white" />
                     </TouchableOpacity>
                     <TouchableOpacity  >
                       <Entypo style={{paddingRight:20}} name="tools" size={25} color="white" />
                     </TouchableOpacity>
               </View> 
               
      <Modal visible={visible}>
        <BlurView
          style={{
            margin:25,
            
          }}>
          
                    <Animated.View
                           style={{
                             //flex:2,
                              backgroundColor: "#fff",
                           height:height-150,
                            
                          
                             transform:[{scale:scaleValue}],
                             
                           }}>
                      
                                    <View
                                           style={{
                                             backgroundColor: 'green',
                                             height: 60,
                                            //width:width-60,
                                            // borderTopLeftRadius: 15,
                                            // borderTopRightRadius: 15,
                                             flexDirection: 'row',
                                             alignItems:'center',
                                             justifyContent:'space-between'
                                           }}>
                                             
                                                   <Text style={{color:'white',fontWeight:'bold',fontSize:18,paddingLeft:10}}>Enter Attributes</Text>
                                                   <TouchableOpacity onPress={() => setVisible(false) & setMessage('')}>
                                                             <Evilicons name='close' size={30} color='white' />
                                                  </TouchableOpacity>
                                     </View>
                                     <ScrollView>
                                     <View style={{flexDirection:'column'}}>
                                           <View style={{}}>
                                           <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>AssetTypeId</Text>
                                             <AssettypeDropdown Data={countries} onPress={onchangehandler} /> 
                                           </View>
                                           <View style={{}}>
                                           <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>AssetId</Text>
                                          {/* <Text>{message}</Text>*/}
                                              <TextInput style={{}} data={message.Assetid}  />  
                                           </View>
                                           <View style={{}}>
                                           <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>AssetTypeName</Text>
                                            <TextInput data={message.Assettypename} /> 
                                           </View>
                                           <View style={{}}>
                                           <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>AssetName</Text>
                                            <TextInput data={message.Assetname} /> 
                                           </View>
                                           <View style={{}}>
                                           <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>Circle</Text>
                                            <TextInput/> 
                                           </View>
                                           <View style={{}}>
                                           <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>Zone</Text>
                                             <Dropdown/> 
                                           </View>
                                           <View style={{}}>
                                               <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>Section</Text>
                                                   <Dropdown/> 
                                           </View> 
                                           <View style={{}}>
                                              <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>SubStation</Text>
                                                <Dropdown/> 
                                            </View>
                                            <View style={{}}>
                                              <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>FeederName</Text>
                                                <Dropdown/> 
                                            </View>
                                            <View style={{}}>
                                              <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>FeederNumber</Text>
                                                <Dropdown/> 
                                            </View>
                                            <View style={{}}>
                                              <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>State</Text>
                                                <Dropdown/> 
                                            </View>
                                            <View style={{}}>
                                              <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>Latitude</Text>
                                                <Dropdown/> 
                                            </View>
                                            <View style={{}}>
                                              <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>Longitude</Text>
                                                <Dropdown/> 
                                            </View>
                                            <View style={{}}>
                                              <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>Manufactured Year</Text>
                                                <Dropdown/> 
                                            </View>
                                            <View style={{}}>
                                              <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>Vendor</Text>
                                                <Dropdown/> 
                                            </View>
                                            <View style={{}}>
                                              <Text style={{fontSize:15,color:'#181952',paddingLeft:15,paddingTop:10}}>Manufacturer Id</Text>
                                                <Dropdown/> 
                                            </View>
                                              
                                     </View>
                                     </ScrollView>
                    </Animated.View>
          
        </BlurView>
      </Modal>


      
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modalContainer: {
    width: '70%',
    height: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 3,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  icontab: {
    height: 80,
    width: '100%',
    backgroundColor: '#181952',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ModalView;


{/* <ModalPoup visible={visible} >
        <View style={{ alignItems: 'center' }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Evilicons name='close' size={30} color='black' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{}}>
          {DATA.map((item) => {
            return (
              <View>
                <TouchableOpacity onPress={() => executeSubModel(item)} >
                  <View style={{ height: height / 14 }}>
                    <Text style={{ color: 'black' }}>{item.t1}</Text>
                  </View>
                </TouchableOpacity>

              </View>
            )
          })}

        </View>


      </ModalPoup>
      {(() => {
        
        if (buttonClickVisibility == true && selectedItem === "DistributionTransformer") {
          return (
            
            <View style={{justifyContent:'center', backgroundColor: 'white', width: width-40, height: height/2+100,marginBottom:height/5,elevation:20,
            borderRadius:5,paddingTop:15 }}>              
              
             <TouchableOpacity onPress={() => setButtonClickVisibility(false)}>
                <Evilicons name='close' size={30} color='black' />
              </TouchableOpacity>
              <Text style={{color:'#228ca1',fontWeight:'bold',fontSize:18,paddingLeft:10}}>Enter Attributes</Text>
              <TextInput text="Feeder No"/>
              <TextInput text="Substation Name"/>
              <TextInput text="Conductor Size"/>
             
              <Dropdown/>
              
            </View>
           

          )
        } else if (buttonClickVisibility == true && selectedItem === "SupportStructure") {
          return (
            
            <View style={{ backgroundColor: 'white', width: 300, height: 500,marginBottom:height/11,elevation:20,borderRadius:5,paddingTop:15 }}>              
              
             

            <TouchableOpacity onPress={() => setButtonClickVisibility(false)}>
              <Evilicons name='close' size={30} color='black' />
            </TouchableOpacity>
            <TextInput text="Feeder No"/>
            <TextInput text="Substation Name"/>
            <TextInput text="Conductor Size"/>
            <TextInput text="Remarks"/>
            
          </View>
            

          )
        }
        return null;
      })()}



      <View style={styles.icontab}>
        <TouchableOpacity  >
          <AntDesign style={{paddingLeft:20}}name="clouddownload" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisible(true)} >
          <AntDesign name="pluscircle" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity  >
          <MaterialIcons name="edit" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity  >
        <AntDesign name="cloudupload" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity  >
          <Entypo style={{paddingRight:20}} name="tools" size={25} color="white" />
        </TouchableOpacity>
      </View> */}