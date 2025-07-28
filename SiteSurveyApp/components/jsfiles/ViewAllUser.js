import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, TextInput, Animated, Modal, Dimensions,BlurView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { openDatabase } from 'react-native-sqlite-storage';
import Evilicons from 'react-native-vector-icons/EvilIcons';

const { width, height } = Dimensions.get('screen');

var db = openDatabase({ name: 'AssetDatabase.db' });


const ViewAllUser = ({navigation,route}) => {
  let [flatListItems, setFlatListItems] = useState([]);
  let [inputUserId, setInputUserId] = useState();
  const [visible, setVisible] = React.useState(false);
  const { asset } = route.params;
  

  const [inputdata, setinputdata] = useState({
    assettypeid: '',
    assetid: '',
    assettypename: '',
    assetname: '',
    assetlatitude: '',
    assetlongitude: ''
  })

  const [selectedItem, setSelectedItem] = React.useState();
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  const handleOnchange = (text, input) => {

    setinputdata(prevState => ({ ...prevState, [input]: text }));


  };

  React.useEffect(() => {
    toggleModal();
  }, [visible]);

  const updateAllStates = (id, typename, latitude, longitude) => {
    setinputdata({ assetid: id, assettypename: typename, assetlatitude: latitude, assetlongitude: longitude })
  };


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

  useEffect(() => {
    if(asset==='DTR'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Dtr_table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    }, [flatListItems]);
  }
  if(asset==='DCU'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Dcu_table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    }, [flatListItems]);
  }
  if(asset==='Feeder'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Feeder_table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    }, [flatListItems]);
  }
  if(asset==='RMU'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Rmu_table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    }, [flatListItems]);
  }
  if(asset==='AutoReclosure'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM AutoReclosure_table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    }, [flatListItems]);
  }
  if(asset==='Sectionaliser'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Sectionaliser_table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    }, [flatListItems]);
  }
  if(asset==='Meter'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Meter_table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    }, [flatListItems]);
  }
})

  const DeleteItem = (item) => {
    setInputUserId(item);

    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_assetdetails where slno=?',
        [item.slno],
        (tx, results) => {
          console.log('Rows effected are', results.rowsAffected);
          if (results.rowsAffected > 0) {

          } else {
            alert('Please insert a valid User Id');
          }
        }
      );
    });
  };

  const searchUser = (item) => {
    setVisible(true);
    setInputUserId(item);
  
    console.log("slno is:" + item.slno);
    setSelectedItem(item.slno);
    if(asset==='DTR'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM  Dtr_table where slno = ?',
        [item.slno],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(

              res.slno,
              res.AssetTypeName,
              res.Latitude,
              res.Longitude
            );
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  }
  if(asset==='DCU'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM  Dcu_table where slno = ?',
        [item.slno],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(

              res.slno,
              res.AssetTypeName,
              res.Latitude,
              res.Longitude
            );
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  }
  if(asset==='Feeder'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM  Feeder_table where slno = ?',
        [item.slno],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(

              res.slno,
              res.AssetTypeName,
              res.Latitude,
              res.Longitude
            );
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  }
  if(asset==='RMU'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM  Rmu_table where slno = ?',
        [item.slno],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(

              res.slno,
              res.AssetTypeName,
              res.Latitude,
              res.Longitude
            );
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  }
  if(asset==='AutoReclosure'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM  AutoReclosure_table where slno = ?',
        [item.slno],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(

              res.slno,
              res.AssetTypeName,
              res.Latitude,
              res.Longitude
            );
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  }
  if(asset==='Sectionaliser'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM  Sectionaliser_table where slno = ?',
        [item.slno],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(

              res.slno,
              res.AssetTypeName,
              res.Latitude,
              res.Longitude
            );
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  }
  if(asset==='Meter'){
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM  Meter_table where slno = ?',
        [item.slno],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(

              res.slno,
              res.AssetTypeName,
              res.Latitude,
              res.Longitude
            );
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  }
  
  };
  const UpdateItem = (item) => {
    console.log("Update Query ::: " + "Executing ........ ");
    console.log("Update Query ::: " + item);
  if(asset==='DTR'){
    db.transaction((tx) => {
      tx.executeSql( 
        //table_assetdetails  , asset_id
        'UPDATE Dtr_table set  AssetTypeName=? ,Latitude=?, Longitude=? where slno=?',
        [inputdata.assettypename, inputdata.assetlatitude, inputdata.assetlongitude, item],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  }
  if(asset==='DCU'){
    db.transaction((tx) => {
      tx.executeSql( 
        //table_assetdetails  , asset_id
        'UPDATE Dcu_table set  AssetTypeName=? ,Latitude=?, Longitude=? where slno=?',
        [inputdata.assettypename, inputdata.assetlatitude, inputdata.assetlongitude, item],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  }
  if(asset==='Feeder'){
    db.transaction((tx) => {
      tx.executeSql( 
        //table_assetdetails  , asset_id
        'UPDATE Feeder_table set  AssetTypeName=? ,Latitude=?, Longitude=? where slno=?',
        [inputdata.assettypename, inputdata.assetlatitude, inputdata.assetlongitude, item],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  }
  if(asset==='RMU'){
    db.transaction((tx) => {
      tx.executeSql( 
        //table_assetdetails  , asset_id
        'UPDATE Rmu_table set  AssetTypeName=? ,Latitude=?, Longitude=? where slno=?',
        [inputdata.assettypename, inputdata.assetlatitude, inputdata.assetlongitude, item],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  }
  if(asset==='AutoReclosure'){
    db.transaction((tx) => {
      tx.executeSql( 
        //table_assetdetails  , asset_id
        'UPDATE AutoReclosure_table set  AssetTypeName=? ,Latitude=?, Longitude=? where slno=?',
        [inputdata.assettypename, inputdata.assetlatitude, inputdata.assetlongitude, item],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  }
  if(asset==='Sectionaliser'){
    db.transaction((tx) => {
      tx.executeSql( 
        //table_assetdetails  , asset_id
        'UPDATE Sectionaliser_table set  AssetTypeName=? ,Latitude=?, Longitude=? where slno=?',
        [inputdata.assettypename, inputdata.assetlatitude, inputdata.assetlongitude, item],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  }
  if(asset==='Meter'){
    db.transaction((tx) => {
      tx.executeSql( 
        //table_assetdetails  , asset_id
        'UPDATE Meter_table set  AssetTypeName=? ,Latitude=?, Longitude=? where slno=?',
        [inputdata.assettypename, inputdata.assetlatitude, inputdata.assetlongitude, item],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  }
  }

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }}
      />
    );
  };

  let listItemView = (item) => {
    // const [showModal,setshowModal] = useState(visible);
    // console.log("Visible is:"+visible);
    // setSelectedItem(item.slno);
    return (
      <View style={styles.listitem}>
        <View
          key={item.slno}
          style={{  padding: 20 }}>

          <Text style={styles.text}>Name: {item.slno}</Text>
          <Text style={styles.text}>AssetTypeName: {item.AssetTypeName}</Text>
          <Text style={styles.text}>Latitude: {item.Latitude}</Text>
          <Text style={styles.text}>Longitude: {item.Longitude}</Text>
          <Text style={styles.text}>Feeder Number: {item.Ratio}</Text>
          <Text style={styles.text}>Latitude: {item.MfgId}</Text>
          <Text style={styles.text}>Longitude: {item.Capacity}</Text>
          <Text style={styles.text}>Manufactured Year: {item.MountType}</Text>
         
        </View>
        <View style={{ width: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={() => DeleteItem(item)}>
            <Icon name='trash' size={20} color='black' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => searchUser(item)}>
            <Icon name='pen' size={20} color='black' />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    
      <View style={{ flex: 1}}>
        
         <View style={{ flex: 1 }}>
          
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item, visible)}
          />
        </View>
        <Modal visible={visible} selectedValue={selectedItem} transparent={true}  animationType="fade">
          <Animated.View
            style={{
              //flex:2,
              backgroundColor: "#dcfac8",
              height: height / 2+50,
              margin: 50,
              borderRadius:10,
              transform: [{ scale: scaleValue }],
              elevation:10
            }}>

            <View
              style={{
                backgroundColor: 'green',
                height: 60,
                borderTopLeftRadius:10,
                borderTopRightRadius:10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>

              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, paddingLeft: 10 }}>Enter Attributes</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Evilicons name='close' size={30} color='white' />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <View style={{}}>
                  <Text style={{ fontSize: 15, color: '#181952', paddingLeft: 5, paddingTop: 10 }}>AssetId</Text>
                  <TextInput
                   style={{
                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                    elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
                  }}
                  //  onChangeText={text => handleOnchange(text, 'assetid')}
                  >{inputdata.assetid}</TextInput>
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: 15, color: '#181952', paddingLeft: 5, paddingTop: 10 }}>Assettypename</Text>
                  {/* <Text>{message}</Text>*/}
                  <TextInput style={{
                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                    elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
                  }} onChangeText={text => handleOnchange(text, 'assettypename')}>{inputdata.assettypename}</TextInput>
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: 15, color: '#181952', paddingLeft: 5, paddingTop: 10 }}>AssetLatitude</Text>
                  <TextInput style={{
                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                    elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
                  }} onChangeText={text => handleOnchange(text, 'assetlatitude')}>{inputdata.assetlatitude}</TextInput>
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: 15, color: '#181952', paddingLeft: 5, paddingTop: 10 }}>Assetlongitude</Text>
                  <TextInput style={{
                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                    elevation: 3, marginTop: 10, color: '#476c3f', paddingLeft: 15
                  }} onChangeText={text => handleOnchange(text, 'assetlongitude')}>{inputdata.assetlongitude}</TextInput>
                  
                </View>
                <TouchableOpacity onPress={() => UpdateItem(selectedItem)}>
                  <View style={styles.button}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Update</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animated.View>

        </Modal>
       
       
      </View>
    
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black'
  },
  listitem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: '#192442', margin: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20, alignSelf: 'center',
    justifyContent: 'center', alignItems: 'center'
  },
  blurViewStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
})

export default ViewAllUser;