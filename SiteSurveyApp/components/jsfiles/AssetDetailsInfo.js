import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, StatusBar, ImageBackground,TouchableOpacity, Image, TextInput,Dimensions, Animated } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

const AssetDetailsInfo = ({ navigation, route }) => {

    const { asset } = route.params;
    const {height,width} = Dimensions.get('window');
    var db = openDatabase({ name: 'AssetDatabase.db' });
    const translationx = useRef(new Animated.Value(400)).current;

    // const [assetitem, setassetitem] = useState(asset);
    useEffect(() => {
        animate();
      }, []);

    const [Inputs, setInputs] = useState({
        assetitem: asset,
        column1: '',
        column2: '',
        column3: '',
        column4: '',
        column5: '',
        column6: '',
        column7: '',
        column8: '',
        column9: '',
        column10: '',
        column11: '',
        column12: '',
        column13: '',
        column14: '',
        column15: '',
        column16: '',
        column17: '',
        column18: '',
      })
      const [isFocused, setIsFocused] = useState(false);

    const handleOnchange = (text, input) => {

        setInputs(prevState => ({ ...prevState, [input]: text }));
        
    
    
      };

      const animate = () => {

        Animated.timing(translationx, {
          toValue: 1,
          duration: 550,
          useNativeDriver: true
    
        }).start();
      }
    
      

      const onclickSave = () => {
         if(Inputs.assetitem==='DTR'){
        db.transaction(function (tx) {
         
         
          tx.executeSql(
            'INSERT INTO Dtr_table(AssetTypeName,DtrId,Latitude,Longitude,Location,AssetImage,Remarks,UserId,AndroidImeiId) VALUES (?,?,?,?,?,?,?,?,?)',
            [Inputs.assetitem,Inputs.column1, Inputs.column2, Inputs.column3, Inputs.column4,
            Inputs.column5, Inputs.column6, Inputs.column7, Inputs.column8],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                console.log("Data inserted successfully");
               
    
              } else alert('Registration Failed');
            }
          );
        });
       
         navigation.navigate('MapSurvey',{asset:asset})
    }
    //console.log(" Entered Values #####   " +Inputs.column1, Inputs.column2, Inputs.column3, Inputs.column4);
    if(Inputs.assetitem==='DCU'){
        db.transaction(function (tx) {
         
         
          tx.executeSql(
            'INSERT INTO Dcu_table(AssetTypeName,DcuId,Latitude,Longitude,Location,AssetImage,Remarks,UserId,AndroidImeiId) VALUES (?,?,?,?,?,?,?,?,?)',
            [Inputs.assetitem,Inputs.column1, Inputs.column2, Inputs.column3, Inputs.column4,
            Inputs.column5, Inputs.column6, Inputs.column7, Inputs.column8],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                console.log("Data inserted successfully");
               
    
              } else alert('Registration Failed');
            }
          );
        });
       
         navigation.navigate('MapSurvey',{asset:asset})
    }
    if(Inputs.assetitem==='Feeder'){
        db.transaction(function (tx) {
         
         
          tx.executeSql(
            'INSERT INTO Feeder_table(AssetTypeName,Feeder_id,Latitude,Longitude,Location,AssetImage,Remarks,UserId,AndroidImeiId) VALUES (?,?,?,?,?,?,?,?,?)',
            [Inputs.assetitem,Inputs.column1, Inputs.column2, Inputs.column3, Inputs.column4,
            Inputs.column5, Inputs.column6, Inputs.column7, Inputs.column8],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                console.log("Data inserted successfully");
               
    
              } else alert('Registration Failed');
            }
          );
        });
       
         navigation.navigate('MapSurvey',{asset:asset})
    }
    if(Inputs.assetitem==='RMU'){
        db.transaction(function (tx) {
         
         
          tx.executeSql(
            'INSERT INTO Rmu_table(AssetTypeName,RmuId,Latitude,Longitude,Location,AssetImage,Remarks,UserId,AndroidImeiId) VALUES (?,?,?,?,?,?,?,?,?)',
            [Inputs.assetitem,Inputs.column1, Inputs.column2, Inputs.column3, Inputs.column4,
            Inputs.column5, Inputs.column6, Inputs.column7, Inputs.column8],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                console.log("Data inserted successfully");
               
    
              } else alert('Registration Failed');
            }
          );
        });
       
         navigation.navigate('MapSurvey',{asset:asset})
    }
    if(Inputs.assetitem==='AutoReclosure'){
        db.transaction(function (tx) {
         
         
          tx.executeSql(
            'INSERT INTO AutoReclosure_table(AssetTypeName,ArId,Latitude,Longitude,Location,AssetImage,Remarks,UserId,AndroidImeiId) VALUES (?,?,?,?,?,?,?,?,?)',
            [Inputs.assetitem,Inputs.column1, Inputs.column2, Inputs.column3, Inputs.column4,
            Inputs.column5, Inputs.column6, Inputs.column7,Inputs.column8],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                console.log("Data inserted successfully");
               
    
              } else alert('Registration Failed');
            }
          );
        });
       
         navigation.navigate('MapSurvey',{asset:asset})
    }
    if(Inputs.assetitem==='Sectionaliser'){
        db.transaction(function (tx) {
         
         
          tx.executeSql(
            'INSERT INTO Sectionaliser_table(AssetTypeName,SectionaliserId,Latitude,Longitude,Location,AssetImage,Remarks,UserId,AndroidImeiId) VALUES (?,?,?,?,?,?,?,?,?)',
            [Inputs.assetitem,Inputs.column1, Inputs.column2, Inputs.column3, Inputs.column4,
            Inputs.column5, Inputs.column6, Inputs.column7,Inputs.column8],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                console.log("Data inserted successfully");
               
    
              } else alert('Registration Failed');
            }
          );
        });
       
         navigation.navigate('MapSurvey',{asset:asset})
    }
    if(Inputs.assetitem==='Meter'){
        db.transaction(function (tx) {
         
         
          tx.executeSql(
            'INSERT INTO Meter_table(AssetTypeName,MeterId,Latitude,Longitude,Location,PhaseType,AssetImage,Remarks,UserId,AndroidImeiId) VALUES (?,?,?,?,?,?,?,?,?,?)',
            [Inputs.assetitem,Inputs.column1, Inputs.column2, Inputs.column3, Inputs.column4,
            Inputs.column5, Inputs.column6, Inputs.column7,Inputs.column8,Inputs.column9],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                console.log("Data inserted successfully");
               
    
              } else alert('Registration Failed');
            }
          );
        });
       
         navigation.navigate('MapSurvey',{asset:asset})
    }
      }
    
   
        return(
           
           
                (() => {
                    if (Inputs.assetitem === 'Feeder') {
                        return (
                            <View style={{backgroundColor:'#f1f5f9',flex:1}}>
                                
                                 <ScrollView>
                                 
                            <Animated.View style={{ height:height,flexDirection:'column',backgroundColor: '#C7E9B0',
                            justifyContent:'space-evenly',transform:[{translateX:translationx}] }}>
                            <View style={{height:80,flexDirection:'row',alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('MapSurvey',{asset:asset})}>
                                    <Image style={styles.icon} source={require('../imagesv1/backicon.png')}/>
                                    </TouchableOpacity>
                                    <Text style={styles.maintext}>Enter Attributes</Text>
                                </View>
                                <TextInput style={{
                                    width: '90%', height: 60, backgroundColor: '#FFF', borderRadius: 8,
                                    elevation: 3, marginTop: 10, color: 'black', paddingLeft: 15,marginLeft:20
                                }} onChangeText={text => handleOnchange(text, 'assetitem')}>{Inputs.assetitem}</TextInput>
                                <TextInput style={{
                                    width: '90%', height: 60, backgroundColor: '#FFF', borderRadius: 8,
                                    elevation: 3, marginTop: 10, color: 'black', paddingLeft: 15,marginLeft:20
                                }} onChangeText={text => handleOnchange(text, 'column1')}  placeholder='Feeder Id' placeholderTextColor='grey'></TextInput>
                                <TextInput style={{
                                    width: '90%', height: 60, backgroundColor: '#FFF', borderRadius: 8,
                                    elevation: 3, marginTop: 10, color: 'black', paddingLeft: 15,marginLeft:20
                                }} onChangeText={text => handleOnchange(text, 'column2')} placeholder='Latitude' placeholderTextColor='grey'></TextInput>
                                <TextInput style={{
                                    width: '90%', height: 60, backgroundColor: '#FFF', borderRadius: 8,
                                    elevation: 3, marginTop: 10, color: 'black', paddingLeft: 15,marginLeft:20
                                }} onChangeText={text => handleOnchange(text, 'column3')} placeholder='Longitude' placeholderTextColor='grey'></TextInput>
                                <TextInput style={{
                                    width: '90%', height: 60, backgroundColor: '#FFF', borderRadius: 8,
                                    elevation: 3, marginTop: 10, color: 'black', paddingLeft: 15,marginLeft:20
                                }} onChangeText={text => handleOnchange(text, 'column4')} placeholder='Location' placeholderTextColor='grey'></TextInput>
                                <TextInput style={{
                                    width: '90%', height: 60, backgroundColor: '#FFF', borderRadius: 8,
                                    elevation: 3, marginTop: 10, color: 'black', paddingLeft: 15,marginLeft:20
                                }} onChangeText={text => handleOnchange(text, 'column5')} placeholder='Asset Image' placeholderTextColor='grey'></TextInput>
                                <TextInput style={{
                                    width: '90%', height: 60, backgroundColor: '#FFF', borderRadius: 8,
                                    elevation: 3, marginTop: 10, color: 'black', paddingLeft: 15,marginLeft:20
                                }} onChangeText={text => handleOnchange(text, 'column6')} placeholder='UserId' placeholderTextColor='grey'></TextInput>
                                <TextInput style={{
                                    width: '90%', height: 60, backgroundColor: '#FFF', borderRadius: 8,elevation: 3,
                                     marginTop: 10, color: 'black', paddingLeft: 15,marginLeft:20
                                }} onChangeText={text => handleOnchange(text, 'column7')} placeholder='Android ImeiId' placeholderTextColor='grey'></TextInput> 
                                <TextInput style={{
                                    width: '90%', height: 60, backgroundColor: '#FFF', borderRadius: 8,elevation: 3,
                                     marginTop: 10, color: 'black', paddingLeft: 15,marginLeft:20
                                }} onChangeText={text => handleOnchange(text, 'column8')} placeholder="Remarks" placeholderTextColor='grey'></TextInput>

                                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
                                   <TouchableOpacity onPress={onclickSave}>
                                       <View style={{height:50,width:150,backgroundColor:'#5d8e3f',justifyContent:'center',
                                       alignItems:'center',borderRadius:25}}>
                                          <Text style={{color:'white'}}>Save</Text>
                                       </View>
                                   </TouchableOpacity>
                                   <TouchableOpacity>
                                       <View style={{height:50,width:150,backgroundColor:'#aaaaaa',justifyContent:'center',
                                       alignItems:'center',borderRadius:25}}>
                                          <Text style={{color:'white'}}>Cancel</Text>
                                       </View>
                                   </TouchableOpacity>
                                </View>
                                
                           </Animated.View>
                               </ScrollView>
                            
                            </View>
                        )
                    }
                    else if (Inputs.assetitem === 'Sectionaliser') {
                        return (
                            <View style={{backgroundColor:'#f1f5f9',flex:1}}>
                            <ScrollView>
                                <Animated.View style={{flexDirection:'column',backgroundColor:'#C7E9B0',transform:[{translateX:translationx}]}}>
                                     <View style={{height:80,flexDirection:'row',alignItems:'center'}}>
                                         <TouchableOpacity onPress={()=>navigation.navigate('MapSurvey',{asset:asset})}>
                                         <Image style={styles.icon} source={require('../imagesv1/backicon.png')}/>
                                         </TouchableOpacity>
                                         <Text style={styles.maintext}>Enter Attributes</Text>
                                     </View>
                                    
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'assetitem')}>{Inputs.assetitem}</TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column1')} placeholder='Sectionaliser Id' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column2')} placeholder='Latitude' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column3')} placeholder='Longitude' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column4')} placeholder='Location' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column5')} placeholder='Asset Image' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column6')} placeholder='UserId' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }} placeholder='Android ImeiId' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }} placeholder='Remarks' placeholderTextColor='grey' ></TextInput>
                                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
                                        <TouchableOpacity onPress={onclickSave}>
                                            <View style={{height:50,width:150,backgroundColor:'#5d8e3f',justifyContent:'center',
                                            alignItems:'center',borderRadius:25}}>
                                               <Text style={{color:'white'}}>Save</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{height:50,width:150,backgroundColor:'#aaaaaa',justifyContent:'center',
                                            alignItems:'center',borderRadius:25}}>
                                               <Text style={{color:'white'}}>Cancel</Text>
                                            </View>
                                        </TouchableOpacity>
                                     </View>
                                     <Text></Text>

                                </Animated.View>
                            </ScrollView>
                            </View>
                        )

                    }
                    else if (Inputs.assetitem === 'RMU') {
                        return (
                            <View style={{backgroundColor:'#f1f5f9',flex:1}}>
                            <ScrollView>
                                <Animated.View style={{flexDirection:'column',backgroundColor:'#C7E9B0',transform:[{translateX:translationx}]}}>
                                     <View style={{height:80,flexDirection:'row',alignItems:'center'}}>
                                         <TouchableOpacity onPress={()=>navigation.navigate('MapSurvey',{asset:asset})}>
                                         <Image style={styles.icon} source={require('../imagesv1/backicon.png')}/>
                                         </TouchableOpacity>
                                         <Text style={styles.maintext}>Enter Attributes</Text>
                                     </View>
                                    
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'assetitem')}>{Inputs.assetitem}</TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column1')} placeholder='Rmu Id' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column2')} placeholder='Latitude' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column3')} placeholder='Longitude' placeholderTextColor='grey' ></TextInput>
                                     <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column4')} placeholder='Location' placeholderTextColor='grey' ></TextInput>
                                     <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column5')} placeholder='Asset Image' placeholderTextColor='grey' ></TextInput>
                                     <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column6')} placeholder='UserId' placeholderTextColor='grey' ></TextInput>
                                     <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column7')} placeholder='Android ImeiId' placeholderTextColor='grey' ></TextInput>
                                     <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column8')} placeholder='Remarks' placeholderTextColor='grey' ></TextInput>
                                     
                                     <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
                                          <TouchableOpacity onPress={onclickSave}>
                                              <View style={{height:50,width:150,backgroundColor:'#5d8e3f',justifyContent:'center',
                                              alignItems:'center',borderRadius:25}}>
                                                 <Text style={{color:'white'}}>Save</Text>
                                              </View>
                                          </TouchableOpacity>
                                          <TouchableOpacity>
                                              <View style={{height:50,width:150,backgroundColor:'#aaaaaa',justifyContent:'center',
                                              alignItems:'center',borderRadius:25}}>
                                                 <Text style={{color:'white'}}>Cancel</Text>
                                              </View>
                                          </TouchableOpacity>
                                       </View>
                                       <Text></Text>
                    
                                </Animated.View>
                            </ScrollView>
                            </View>
                        )
                    }
                    else if (Inputs.assetitem === 'AutoReclosure') {
                        return (
                            <View style={{backgroundColor:'#f1f5f9',flex:1}}>
                            <ScrollView>
                                <Animated.View style={{flexDirection:'column',backgroundColor:'#C7E9B0',transform:[{translateX:translationx}]}}>
                                     <View style={{height:80,flexDirection:'row',alignItems:'center'}}>
                                         <TouchableOpacity onPress={()=>navigation.navigate('MapSurvey',{asset:asset})}>
                                         <Image style={styles.icon} source={require('../imagesv1/backicon.png')}/>
                                         </TouchableOpacity>
                                         <Text style={styles.maintext}>Enter Attributes</Text>
                                     </View>
                                    
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'assetitem')}>{Inputs.assetitem}</TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column1')} placeholder='Arclsure Id' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column2')} placeholder='Latitude' placeholderTextColor='grey' ></TextInput>
                                    <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column3')} placeholder='Longitude' placeholderTextColor='grey' ></TextInput>
                                     <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }}onChangeText={text => handleOnchange(text, 'column4')} placeholder='Location' placeholderTextColor='grey' ></TextInput>
                                     <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }} placeholder='Asset Image' placeholderTextColor='grey' ></TextInput>
                                     <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }} placeholder='UserId' placeholderTextColor='grey' ></TextInput>
                                     <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }} placeholder='Android ImdeiId' placeholderTextColor='grey' ></TextInput>
                                     <TextInput style={{
                                        width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                        elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                    }} placeholder='Remarks' placeholderTextColor='grey' ></TextInput>
                                     
                                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
                                          <TouchableOpacity onPress={onclickSave}>
                                              <View style={{height:50,width:150,backgroundColor:'#5d8e3f',justifyContent:'center',
                                              alignItems:'center',borderRadius:25}}>
                                                 <Text style={{color:'white'}}>Save</Text>
                                              </View>
                                          </TouchableOpacity>
                                          <TouchableOpacity>
                                              <View style={{height:50,width:150,backgroundColor:'#aaaaaa',justifyContent:'center',
                                              alignItems:'center',borderRadius:25}}>
                                                 <Text style={{color:'white'}}>Cancel</Text>
                                              </View>
                                          </TouchableOpacity>
                                       </View>
                                       <Text></Text>
                                </Animated.View>       
                           </ScrollView>
                           </View>
                        )}

                        else if (Inputs.assetitem === 'DTR') {
                            return (
                                <View style={{backgroundColor:'#f1f5f9',flex:1}}>
                                <ScrollView>
                                    <Animated.View style={{flexDirection:'column',backgroundColor:'#C7E9B0',transform:[{translateX:translationx}]}}>
                                         <View style={{height:80,flexDirection:'row',alignItems:'center'}}>
                                             <TouchableOpacity onPress={()=>navigation.navigate('MapSurvey',{asset:asset})}>
                                             <Image style={styles.icon} source={require('../imagesv1/backicon.png')}/>
                                             </TouchableOpacity>
                                             <Text style={styles.maintext}>Enter Attributes</Text>
                                         </View>
                                        
                                        <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }}onChangeText={text => handleOnchange(text, 'assetitem')}>{Inputs.assetitem}</TextInput>
                                        <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }}onChangeText={text => handleOnchange(text, 'column1')} placeholder='Dtr Id' placeholderTextColor='grey'></TextInput>
                                        <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }} onChangeText={text => handleOnchange(text, 'column2')} placeholder='Latitude' placeholderTextColor='grey'></TextInput>
                                        <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }} onChangeText={text => handleOnchange(text, 'column3')} placeholder='Longitude' placeholderTextColor='grey'></TextInput>
                                         <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }} onChangeText={text => handleOnchange(text, 'column4')} placeholder='Location' placeholderTextColor='grey'></TextInput>
                                         <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }} placeholder='Asset Image' placeholderTextColor='grey' ></TextInput>
                                         <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }} placeholder='UserId' placeholderTextColor='grey' ></TextInput>
                                         <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }} placeholder='Android ImeiId' placeholderTextColor='grey' ></TextInput>
                                         <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }} placeholder='Remarks' placeholderTextColor='grey' ></TextInput>
                                         <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }}  ></TextInput>
                                         <TextInput style={{
                                            width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                            elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                        }}  ></TextInput>
                                        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
                                              <TouchableOpacity onPress={onclickSave}>
                                                  <View style={{height:50,width:150,backgroundColor:'#5d8e3f',justifyContent:'center',
                                                  alignItems:'center',borderRadius:25}}>
                                                     <Text style={{color:'white'}}>Save</Text>
                                                  </View>
                                              </TouchableOpacity>
                                              <TouchableOpacity>
                                                  <View style={{height:50,width:150,backgroundColor:'#aaaaaa',justifyContent:'center',
                                                  alignItems:'center',borderRadius:25}}>
                                                     <Text style={{color:'white'}}>Cancel</Text>
                                                  </View>
                                              </TouchableOpacity>
                                           </View>
                                           <Text></Text>
                                    </Animated.View>       
                               </ScrollView>
                               </View>
                            )}

                            else if (Inputs.assetitem === 'DCU') {
                                return (
                                    <View style={{backgroundColor:'#f1f5f9',flex:1}}>
                                    <ScrollView>
                                        <Animated.View style={{flexDirection:'column',backgroundColor:'#C7E9B0',transform:[{translateX:translationx}]}}>
                                             <View style={{height:80,flexDirection:'row',alignItems:'center'}}>
                                                 <TouchableOpacity onPress={()=>navigation.navigate('MapSurvey',{asset:asset})}>
                                                 <Image style={styles.icon} source={require('../imagesv1/backicon.png')}/>
                                                 </TouchableOpacity>
                                                 <Text style={styles.maintext}>Enter Attributes</Text>
                                             </View>
                                            
                                            <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }}onChangeText={text => handleOnchange(text, 'assetitem')}>{Inputs.assetitem}</TextInput>
                                            <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }} onChangeText={text => handleOnchange(text, 'column1')} placeholder='Dcu Id' placeholderTextColor='grey'></TextInput>
                                            <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }} onChangeText={text => handleOnchange(text, 'column2')} placeholder='Latitude' placeholderTextColor='grey'></TextInput>
                                            <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }} onChangeText={text => handleOnchange(text, 'column3')} placeholder='Longitude' placeholderTextColor='grey'></TextInput>
                                             <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }} onChangeText={text => handleOnchange(text, 'column4')} placeholder='Location' placeholderTextColor='grey'></TextInput>
                                             <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }} placeholder='Asset Image' placeholderTextColor='grey' ></TextInput>
                                             <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }} placeholder='UserId' placeholderTextColor='grey' ></TextInput>
                                             <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }} placeholder='Android ImeiId' placeholderTextColor='grey' ></TextInput>
                                             <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }} placeholder='Remarks' placeholderTextColor='grey' ></TextInput>
                                             <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }} > </TextInput>
                                             <TextInput style={{
                                                width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                            }} > </TextInput>
                                            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
                                                  <TouchableOpacity onPress={onclickSave}>
                                                      <View style={{height:50,width:150,backgroundColor:'#5d8e3f',justifyContent:'center',
                                                      alignItems:'center',borderRadius:25}}>
                                                         <Text style={{color:'white'}}>Save</Text>
                                                      </View>
                                                  </TouchableOpacity>
                                                  <TouchableOpacity>
                                                      <View style={{height:50,width:150,backgroundColor:'#aaaaaa',justifyContent:'center',
                                                      alignItems:'center',borderRadius:25}}>
                                                         <Text style={{color:'white'}}>Cancel</Text>
                                                      </View>
                                                  </TouchableOpacity>
                                               </View>
                                               <Text></Text>
                                        </Animated.View>       
                                   </ScrollView>
                                   </View>
                                )}

                                else if (Inputs.assetitem === 'Meter') {
                                    return (
                                        <View style={{backgroundColor:'#f1f5f9',flex:1}}>
                                        <ScrollView>
                                            <Animated.View style={{flexDirection:'column',backgroundColor:'#C7E9B0',transform:[{translateX:translationx}]}}>
                                                 <View style={{height:80,flexDirection:'row',alignItems:'center'}}>
                                                     <TouchableOpacity onPress={()=>navigation.navigate('MapSurvey',{asset:asset})}>
                                                     <Image style={styles.icon} source={require('../imagesv1/backicon.png')}/>
                                                     </TouchableOpacity>
                                                     <Text style={styles.maintext}>Enter Attributes</Text>
                                                 </View>
                                                
                                                <TextInput style={{
                                                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                    elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                                }}onChangeText={text => handleOnchange(text, 'assetitem')}>{Inputs.assetitem}</TextInput>
                                                <TextInput style={{
                                                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                    elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                                }}onChangeText={text => handleOnchange(text, 'column1')} placeholder='MeterId' placeholderTextColor='grey'></TextInput>
                                                <TextInput style={{
                                                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                    elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                                }} onChangeText={text => handleOnchange(text, 'column2')} placeholder='Latitude' placeholderTextColor='grey'></TextInput>
                                                <TextInput style={{
                                                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                    elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                                }} onChangeText={text => handleOnchange(text, 'column3')} placeholder='Longitude' placeholderTextColor='grey'></TextInput>
                                                 <TextInput style={{
                                                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                    elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                                }}onChangeText={text => handleOnchange(text, 'column4')} placeholder='Location' placeholderTextColor='grey'></TextInput>
                                                 <TextInput style={{
                                                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                    elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                                }}onChangeText={text => handleOnchange(text, 'column5')} placeholder='AssetImage' placeholderTextColor='grey'></TextInput>
                                                 <TextInput style={{
                                                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                    elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                                }} placeholder='Remarks' placeholderTextColor='grey'></TextInput>
                                                 <TextInput style={{
                                                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                    elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                                }} placeholder='UserId' placeholderTextColor='grey'></TextInput>
                                                 <TextInput style={{
                                                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                    elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                                }} placeholder='AndroidImeiId' placeholderTextColor='grey'></TextInput>
                                                 <TextInput style={{
                                                    width: '90%', height: 55, backgroundColor: '#FFF', borderRadius: 8,
                                                    elevation: 3, marginTop: 30, color: 'black', paddingLeft: 15,marginLeft:20
                                                }} placeholder='PhaseType' placeholderTextColor='grey'></TextInput>
                                                
                                                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
                                                      <TouchableOpacity onPress={onclickSave}>
                                                          <View style={{height:50,width:150,backgroundColor:'#5d8e3f',justifyContent:'center',
                                                          alignItems:'center',borderRadius:25}}>
                                                             <Text style={{color:'white'}}>Save</Text>
                                                          </View>
                                                      </TouchableOpacity>
                                                      <TouchableOpacity>
                                                          <View style={{height:50,width:150,backgroundColor:'#aaaaaa',justifyContent:'center',
                                                          alignItems:'center',borderRadius:25}}>
                                                             <Text style={{color:'white'}}>Cancel</Text>
                                                          </View>
                                                      </TouchableOpacity>
                                                   </View>
                                                   <Text></Text>
                                            </Animated.View>       
                                       </ScrollView>
                                       </View>
                                    )}
            
        
    

                })()

        )}
           
          


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f1f4f9'
    },
    maintext:{
        color:'#2e3d5b',
        fontSize:20,
        marginLeft:30,
        fontWeight:'800'
        
      },
      icon:{
        height:20,
        width:20,
        marginLeft:20
      },

})
export default AssetDetailsInfo;
