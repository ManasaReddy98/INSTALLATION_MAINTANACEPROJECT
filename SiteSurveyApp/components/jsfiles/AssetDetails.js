import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar, Dimensions, ScrollView, TextInput, TouchableOpacity, Image, Alert, SafeAreaView } from 'react-native';
import AssettypeDropdown from './AssettypeDropdown';
import { openDatabase } from 'react-native-sqlite-storage';
import SelectDropdown from 'react-native-select-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

var db = openDatabase({ name: 'AssetDatabase.db' });

const countries = [
  'METER',
  'TMU',
  'DCU',
  'ROUTER',
  'AUTO RECLOSURE',
  'SECTIONALIZER',
  'FEEDER BOX'
];





const countriesID = [
  {
    Assetid: '101',
    Assettypename: 'meter01',
    Assetname: 'meter'
  },
  {
    Assetid: '102',
    Assettypename: 'Tmu01',
    Assetname: 'Tmu',
  },
  {
    Assetid: '103',
    Assettypename: 'Dcu02',
    Assetname: 'Dcu',
  },

];




const AssetDetails = ({ navigation }) => {
  const [Inputs, setInputs] = useState({
    assettypename: '',
    assetname: '',
    feedername: '',
    feedernumber: '',
    assetlatitude: '',
    assetlongitude: '',
    manufacturedyear: '',
    vendor: '',
    manufacturerid: '',
    manufacturername: '',
    installationtype: '',
    capacity: '',
    mounttype: '',
    polenumber: '',
    assetlocation: '',
    devicetype: '',
    installationlocation: '',
    symbol: ''
  })

  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [dropdownItems, setDropdownItems] = useState([
    'METER',
    'TMU',
    'DCU',
    'ROUTER',
    'AUTO RECLOSURE',
    'SECTIONALIZER',
    'FEEDER BOX'
  ]);

  const [dropdownItems1, setdropdownItems1] = useState(["Meter A", "Meter B", "Meter C"]);
  const [dropdownItems2, setdropdownItems2] = useState(["TMU A", "TMU B", "TMU C"]);
  const [dropdownItems3, setdropdownItems3] = useState(["DCU A", "DCU B", "DCU C"]);
  
  const handleOnchange = (text, input) => {

    setInputs(prevState => ({ ...prevState, [input]: text }));


  };

  const onclickSave = () => {

    db.transaction(function (tx) {
      console.log(" Entered Values #####   " + Inputs.assetid, Inputs.assettypename);
     
      tx.executeSql(
        'INSERT INTO table_assetdetails(asset_typename,asset_name,asset_feedername,asset_feedernumber,asset_latitude,asset_longitude,mftd_year,asset_vendor,asset_mftrid,asset_mftrname,installationtype,capacity,mounttype,polenumber,assetlocation,devicetype,installationlocation,symbol) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [Inputs.assettypename, Inputs.assetname, Inputs.feedername, Inputs.feedernumber, Inputs.assetlatitude,
        Inputs.assetlongitude, Inputs.manufacturedyear, Inputs.vendor, Inputs.manufacturerid, Inputs.manufacturername, Inputs.installationtype,
        Inputs.capacity, Inputs.mounttype, Inputs.polenumber, Inputs.assetlocation, Inputs.devicetype, Inputs.installationlocation, Inputs.symbol],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            console.log("Data inserted successfully");


          } else alert('Registration Failed');
        }
      );
    });
    // navigation.navigate('MapSurvey',{coordinates:Inputs})
    // navigation.navigate('MapSurvey')
    navigation.navigate('ViewAllUser')
  }
 
  const onchangehandler = (selectedItem, index) => {
    console.log(selectedItem, index);
    //setMessage(countriesID[index]);


  }
  //console.log("Selected Input" + message.Assetid);





  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#182442' />

      <ImageBackground source={require('../images/efdashboardbg.png')} resizeMode="cover" style={styles.image}>
        <View>
          <View style={{ height: 230 }}>
            <Image style={{ height: 100, width: 100, alignSelf: 'center' }} source={require('../images/eficaalogo.png')} />

          </View>
        </View>
        <ScrollView>
          <View style={{ flexDirection: 'column', marginLeft: 30, marginTop: 30 }}>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10 }}>Asset TypeName</Text>

              <SafeAreaView style={styles.saveAreaViewContainer}>

                <View style={styles.viewContainer}>

                  <SelectDropdown
                    data={dropdownItems}
                    // defaultValueByIndex={1}
                    // defaultValue={'Egypt'}
                    onSelect={(selectedItem, index) =>
                      handleOnchange(selectedItem, 'assettypename')
                     
                      // & setdropdownItems1(index)
                    }
                    defaultButtonText={''}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                      return <AntDesign name={isOpened ? 'downcircleo' : 'doubleright'} color={'#476c3f'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                  />


                </View>
              </SafeAreaView>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Asset Name</Text>
              {/* <Text>{message}</Text>*/}
              <SafeAreaView style={styles.saveAreaViewContainer}>

                <View style={styles.viewContainer}>

                         {(() => {
                           if (Inputs.assettypename === '') {
                             return (
       
       
                               <SelectDropdown
       
                                 data={dropdownItems1}
       
                                 onSelect={(selectedItem, index) =>
                                  handleOnchange(selectedItem, 'assetname')}
                                 defaultButtonText={''}
                                 buttonTextAfterSelection={(selectedItem, index) => {
                                   return selectedItem;
                                 }}
                                 rowTextForSelection={(item, index) => {
                                   return item;
                                 }}
                                 buttonStyle={styles.dropdown1BtnStyle}
                                 buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                 renderDropdownIcon={isOpened => {
                                   return <AntDesign name={isOpened ? 'downcircleo' : 'doubleright'} color={'#476c3f'} size={18} />;
                                 }}
                                 dropdownIconPosition={'right'}
                                 dropdownStyle={styles.dropdown1DropdownStyle}
                                 rowStyle={styles.dropdown1RowStyle}
                                 rowTextStyle={styles.dropdown1RowTxtStyle}
                               />
       
       
                             )
                           } 
                          else if (Inputs.assettypename=== 'METER') {
                             return (
       
       
                               <SelectDropdown
       
                                 data={dropdownItems1}
       
                                 onSelect={(selectedItem, index) =>
                                  handleOnchange(selectedItem, 'assetname')}
                                 defaultButtonText={''}
                                 buttonTextAfterSelection={(selectedItem, index) => {
                                   return selectedItem;
                                 }}
                                 rowTextForSelection={(item, index) => {
                                   return item;
                                 }}
                                 buttonStyle={styles.dropdown1BtnStyle}
                                 buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                 renderDropdownIcon={isOpened => {
                                   return <AntDesign name={isOpened ? 'downcircleo' : 'doubleright'} color={'#476c3f'} size={18} />;
                                 }}
                                 dropdownIconPosition={'right'}
                                 dropdownStyle={styles.dropdown1DropdownStyle}
                                 rowStyle={styles.dropdown1RowStyle}
                                 rowTextStyle={styles.dropdown1RowTxtStyle}
                               />
       
       
                             )
                           } else if (Inputs.assettypename === 'TMU') {
                             return (
       
       
       
                               <SelectDropdown
       
                                 data={dropdownItems2}
       
                                 onSelect={(selectedItem, index) =>
                                  handleOnchange(selectedItem, 'assetname')}
                                 defaultButtonText={''}
                                 buttonTextAfterSelection={(selectedItem, index) => {
                                   return selectedItem;
                                 }}
                                 rowTextForSelection={(item, index) => {
                                   return item;
                                 }}
                                 buttonStyle={styles.dropdown1BtnStyle}
                                 buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                 renderDropdownIcon={isOpened => {
                                   return <AntDesign name={isOpened ? 'downcircleo' : 'doubleright'} color={'#476c3f'} size={18} />;
                                 }}
                                 dropdownIconPosition={'right'}
                                 dropdownStyle={styles.dropdown1DropdownStyle}
                                 rowStyle={styles.dropdown1RowStyle}
                                 rowTextStyle={styles.dropdown1RowTxtStyle}
                               />
       
                             )
                           } else if (Inputs.assettypename === 'DCU') {
                             return (
       
       
                               <SelectDropdown
       
                                 data={dropdownItems3}
       
                                 onSelect={(selectedItem, index) =>
                                  handleOnchange(selectedItem, 'assetname')}
                                 defaultButtonText={''}
                                 buttonTextAfterSelection={(selectedItem, index) => {
                                   return selectedItem;
                                 }}
                                 rowTextForSelection={(item, index) => {
                                   return item;
                                 }}
                                 buttonStyle={styles.dropdown1BtnStyle}
                                 buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                 renderDropdownIcon={isOpened => {
                                   return <AntDesign name={isOpened ? 'downcircleo' : 'doubleright'} color={'#476c3f'} size={18} />;
                                 }}
                                 dropdownIconPosition={'right'}
                                 dropdownStyle={styles.dropdown1DropdownStyle}
                                 rowStyle={styles.dropdown1RowStyle}
                                 rowTextStyle={styles.dropdown1RowTxtStyle}
                               />
       
                             )
                           }
       
                         })()}
       
                      </View>   
                   </SafeAreaView> 
                </View>

            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 18 }}>Feeder Name</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'feedername')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Feeder Number</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'feedernumber')}> </TextInput>
            </View>

            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Latitude</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'assetlatitude')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Longitude</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'assetlongitude')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10 }}>Manufactured Year</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'manufacturedyear')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10 }}>Vendor</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'vendor')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10 }}>Manufacturer Id</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'manufacturerid')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Manufacturer Name</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'manufacturername')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10 }}>Installation Type</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'installationtype')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Capacity</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'capacity')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Mount Type</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'mounttype')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Pole Number</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'polenumber')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Asset Location</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'assetlocation')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Device Type</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'devicetype')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Installation Location</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'installationlocation')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Symbol</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'symbol')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Conductor Size</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'conductorsize')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Material</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'material')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Cable Size</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'cablesize')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Phase Designation</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'phasedesignation')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Block EnergyKwh</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'blockenergykwh')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Block EnergyKvah</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'blockenergykvah')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>CumKwh</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'cumkwh')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>MDKW</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'mdkw')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Oil Temperature</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'oiltemperature')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Dtr Surface Temperature</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'dtrsurfacetemp')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>VoltageR-Phase</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'voltagerphase')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>VoltageY-Phase</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'voltageyphase')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>VoltageB-Phase</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'voltagebphase')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>CurrentR-phase</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'currentrphase')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>CurrentY-phase</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'currentyphase')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>CurrentB-phase</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'currentbphase')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Power Factor</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'powerfactor')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Block Demand</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'blockdemand')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Ambien Temperature</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'ambientemp')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Time Stamp</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'timestamp')}> </TextInput>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Category</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'category')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Category Type</Text>
              <AssettypeDropdown Data={countries} onPress={text => handleOnchange(text, 'categorytype')} />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 10, marginTop: 15 }}>Tariff</Text>
              <TextInput style={{
                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
              }} onChangeText={text => handleOnchange(text, 'tariff')}> </TextInput>
            </View>
            <TouchableOpacity onPress={onclickSave}>
              <View style={styles.button}>
                <Text style={{ fontSize: 20, color: 'white' }}>Save</Text>
              </View>
            </TouchableOpacity>
            <Text></Text>

          </View>
        </ScrollView>

      </ImageBackground>

    </View>
  )
}

AssetDetails.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,

  },
  button: {
    height: 60, width: 125, backgroundColor: '#476c3f',
    alignSelf: 'center', marginTop: 20, marginRight: 10, borderTopLeftRadius: 30, borderBottomRightRadius: 30,
    justifyContent: 'center', alignItems: 'center'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  saveAreaViewContainer: { flex: 1 },
  viewContainer: { flex: 1, width: width - 40, marginTop: 10 },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    //alignItems: 'center',
    paddingVertical: '5%',
    paddingBottom: '20%',

    paddingLeft: 15
  },

  dropdown1BtnStyle: {
    width: '90%',
    height: 55,
    backgroundColor: '#FFF',
    borderRadius: 8,
    //borderWidth: 1,
    //borderColor: '#70ab70',
    elevation: 3
  },
  dropdown1BtnTxtStyle: { color: '#476c3f', textAlign: 'left', fontSize: 15 },
  dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
})
export default AssetDetails;