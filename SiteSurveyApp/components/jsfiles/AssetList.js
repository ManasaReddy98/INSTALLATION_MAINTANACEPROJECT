import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Image, Dimensions, FlatList, Animated } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';



const { width, height } = Dimensions.get('window');
const AssetList = ({ navigation, route }) => {
  const { Language, LanguageOpt, lang } = route.params;
  const { selectedUserName } = route.params;
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(0)).current;
  const translation1 = useRef(new Animated.Value(1)).current;
  const scrolly = React.useRef(new Animated.Value(0)).current;
  const [isanimate, setisanimate] = useState(scrolly)
  const ITEM_SIZE = 120;
  const AssetTypes = [
    {
      id: 1,
      text: LanguageOpt('Section'),
      iconimage: require('../imagesv1/ic_section.png'),
      color: 'white',
      image: require('../imagesv1/iv_section.jpg'),
    },
    {
      id: 2,
      text: LanguageOpt('Substation'),
      iconimage: require('../imagesv1/sub_stn.png'),
      color: 'white',
      image: require('../imagesv1/iv_substation.jpg'),
    },

    {
      id: 3,
      text: LanguageOpt('Feeder'),
      iconimage: require('../imagesv1/doublerectangle.png'),
      color: 'white',
      image: require('../imagesv1/ic_feeder.jpg'),
    },

    {
      id: 4,
      text: LanguageOpt('DTR'),
      iconimage: require('../imagesv1/dtr.png'),
      color: 'white',
      image: require('../imagesv1/dt.jpg'),
    },
    {
      id: 5,
      text: LanguageOpt('TMU'),
      iconimage: require('../imagesv1/square.png'),
      color: 'white',
      image: require('../imagesv1/iv_tmu.jpg'),
    },
    {
      id: 6,
      text: LanguageOpt('DCU'),
      iconimage: require('../imagesv1/doublesquare.png'),
      color: 'white',
      image: require('../imagesv1/iv_dcu_1.jpg'),
    },
    {
      id: 7,
      text: LanguageOpt('Meter'),
      iconimage: require('../imagesv1/asset_meter.png'),
      color: 'white',
      image: require('../imagesv1/iv_meter.jpg'),
    },
    {
      id: 8,
      text: LanguageOpt('Router'),
      iconimage: require('../imagesv1/router.png'),
      color: 'white',
      image: require('../imagesv1/iv_router.jpg'),
    },
    {
      id: 9,
      text: LanguageOpt('Sectionaliser'),
      iconimage: require('../imagesv1/sectionalizer.png'),
      color: 'white',
      image: require('../imagesv1/sectionaliser.jpg'),
    },

    {
      id: 10,
      text: LanguageOpt('RMU'),
      iconimage: require('../imagesv1/rmu.png'),
      color: 'white',
      image: require('../imagesv1/rmu.jpg'),
    },
    {
      id: 11,
      text: LanguageOpt('AutoReclosure'),
      iconimage: require('../imagesv1/ar.png'),
      color: 'white',
      image: require('../imagesv1/iv_ar.jpg'),
    },

    {
      id: 12,
      text: LanguageOpt('FPI'),
      iconimage: require('../imagesv1/trianglecircle.png'),
      color: 'white',
      image: require('../imagesv1/iv_fpi.jpg'),
    },
    {
      id: 13,
      text: LanguageOpt('RTU'),
      iconimage: require('../imagesv1/rtu.png'),
      color: 'white',
      image: require('../imagesv1/iv_rtu.jpg'),
    },
    {
      id: 14,
      text: LanguageOpt('FRT'),
      iconimage: require('../imagesv1/fpi_indicator.png'),
      color: 'white',
      image: require('../imagesv1/iv_frtu.jpg'),
    },
    {
      id: 15,
      text: LanguageOpt('Pole'),
      iconimage: require('../imagesv1/pole.png'),
      color: 'white',
      image: require('../imagesv1/iv_pole.jpg'),
    },
    {
      id: 16,
      text: LanguageOpt('HT-Line'),
      iconimage: require('../imagesv1/ht_line.png'),
      color: 'white',
      image: require('../imagesv1/htline.png'),
    },
    {
      id: 17,
      text: LanguageOpt('LT-Line'),
      iconimage: require('../imagesv1/ht_line.png'),
      color: 'white',
      image: require('../imagesv1/ltline.jpg'),
    },
    {
      id: 18,
      text: LanguageOpt('UG-HT-Line'),
      iconimage: require('../imagesv1/ug_ht_line.png'),
      color: 'white',
      image: require('../imagesv1/iv_ug_ht.jpg'),
    },
    {
      id: 19,
      text: LanguageOpt('UG-LT-Line'),
      iconimage: require('../imagesv1/ug_lt_line.png'),
      color: 'white',
      image: require('../imagesv1/iv_uglt.jpg'),
    },
    {
      id: 20,
      text: LanguageOpt('Others'),
      iconimage: require('../imagesv1/others.png'),
      color: 'white',
      image: require('../imagesv1/iv_others.jpg'),
    }
  ]

  useEffect(() => {
    Animated.timing(translation, {
      toValue: scrolly > 30 ? -30 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/mapbackground.jpg')}
        style={StyleSheet.absoluteFillObject}
      />
      {/* <Animated.View style={{
        height: 95, width: width, flexDirection: 'row', alignItems: 'center', position: 'absolute', elevation: 10,
        backgroundColor: '#172548', transform: [{ translateY: translation }]
      }}>
         <View style={styles.subview}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard1', { Language: Language })}>

            <Image style={styles.icon} source={require('../imagesv1/backicon.png')} />
          </TouchableOpacity>
        </View> 

        <Text style={styles.maintext}>Asset List</Text>
      </Animated.View> */}


      <Animated.FlatList style={{ marginTop: 15 }}
        data={AssetTypes}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrolly } } }],
          { useNativeDriver: true }

        )}

        keyExtractor={(item) => item.id}
        renderItem={({ index, item }) => {
          const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)];

          const translateX = scrolly.interpolate({
            inputRange,
            outputRange: [0, 0, 0, 700],

          });

          const opacity = translateX.interpolate({
            inputRange: [0, 0, 0, 500],
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={{ width: width, height: 110, opacity: opacity, transform: [{ translateX: translateX }] }} >

              <View style={{ height: 30, width: 30, borderRadius: 30, borderWidth: 1, margin: 10, marginTop: 50, flexDirection: 'row', position: 'absolute' }}>
                <Image style={styles.flatlisticonimage} source={item.iconimage} />
              </View>


              <View style={{ height: 90, elevation: 5, flexDirection: 'row', backgroundColor: item.color, marginLeft: 45, alignItems: 'center', justifyContent: 'space-between', paddingLeft: 5, borderRadius: 15, margin: 15 }}>

                <Image style={styles.image_round} source={item.image} />
                <View style={{ flexDirection: 'column', marginLeft: 60 }}>
                  <Text style={styles.flattext}>{item.text}</Text>

                  {(() => {
                    if (item.id == 0 || item.id <= 8) {
                      return (
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                          <TouchableOpacity style={{ marginRight: 10, height: 40, width: 100, borderWidth: 1, borderRadius: 25, alignItems: 'center', justifyContent: 'center', borderColour: "#192442" }} onPress={() => navigation.navigate('AddNewAssetDetails', { Language: Language, asset: item.text, selectedUserName: selectedUserName, LanguageOpt: LanguageOpt, lang })}>
                            <View style={{ flexDirection: 'row' }}>
                              {/* <View style={{ height: 25, width: 25, borderRadius: 25, backgroundColor: '#fff', padding: 5,margin:3,borderWidth:1,borderColour:"#909090" }}>
                                        <Image style={styles.flatimage} source={require('../imagesv1/add_list_property.png')} />
                                      </View> */}
                              <Text style={{ color: '#192442', fontSize: 13, fontWeight: '600', textAlign: 'center' }}> {LanguageOpt('Add_Asset')}</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{ marginRight: 10, height: 40, width: 100, borderWidth: 1, borderRadius: 25, borderColour: "#192442", alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('MapSurvey', { Language: Language, title: item.text, LanguageOpt: LanguageOpt, asset: item.text, selectedUserName: selectedUserName, lang })}>
                            <View style={{ flexDirection: 'row', }}>
                              {/* <View style={{ height: 35, width: 35, borderRadius: 25, backgroundColor: '#fff', padding: 5,margin:3,borderWidth:1,borderColour:"#909090" }}>
                                        <Image style={styles.flatimage} source={require('../imagesv1/add_list_property.png')} />
                                      </View> */}
                              <Text style={{ color: '#192442', fontSize: 13, fontWeight: '600', textAlign: 'center' }}> {LanguageOpt('View_Asset')}</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      )
                    } else {
                      return (
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                          <TouchableOpacity style={{ marginRight: 10, height: 40, width: 100, borderWidth: 1, justifyContent: 'center',alignItems:'center', borderRadius: 25, borderColour: "#192442" }}
                          // onPress={() => navigation.navigate('AddNewAssetDetails', { Language: Language, asset: item.text,selectedUserName:selectedUserName })}
                          >
                            <View style={{ flexDirection: 'row' }}>
                              {/* <View style={{ height: 25, width: 25, borderRadius: 25, backgroundColor: '#fff', padding: 5,margin:3,borderWidth:1,borderColour:"#909090" }}>
                                      <Image style={styles.flatimage} source={require('../imagesv1/add_list_property.png')} />
                                    </View> */}
                              <Text style={{ color: '#192442', fontSize: 13, textAlign: 'center', fontWeight: '600' }}> {LanguageOpt('Add_Asset')}</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{ marginRight: 10, height: 40, width: 100, borderWidth: 1, borderRadius: 25, alignItems: 'center', justifyContent: 'center', borderColour: "#192442" }}
                          // onPress={() => navigation.navigate('MapSurvey', { Language: Language, asset: item.text,selectedUserName:selectedUserName })}
                          >
                            <View style={{ flexDirection: 'row' }}>
                              {/* <View style={{ height: 35, width: 35, borderRadius: 25, backgroundColor: '#fff', padding: 5,margin:3,borderWidth:1,borderColour:"#909090" }}>
                                      <Image style={styles.flatimage} source={require('../imagesv1/add_list_property.png')} />
                                    </View> */}
                              <Text style={{ color: '#192442', fontSize: 13, fontWeight: '600', }}> {LanguageOpt('View_Asset')}</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      )
                    }

                  })()}

                </View>
              </View>
            </Animated.View>
          )
        }}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf5ec'
  },
  text: {
    color: '#2e3d5b',
    fontSize: 15, fontStyle: 'italic'
  },
  image: {
    //flex: 1,
    height: 80, width: 80, position: 'absolute', left: 5, borderTopLeftRadius: 8, borderBottomLeftRadius: 8
  },
  image_round: {
    //flex: 1,
    height: 50, width: 50, borderRadius: 50, position: 'absolute', left: 10, borderTopLeftRadius: 8, borderBottomLeftRadius: 8
  },
  icon: {
    height: 20,
    width: 20,


  },
  maintext: {
    color: '#eaf5ec',
    fontSize: 20,
    marginLeft: 30,
    fontWeight: '800'

  },
  flattext: {
    color: '#192442',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 20
    // position: 'absolute',
    // left: 80  //before it is 130
  },
  flatimage: {
    height: 20,
    width: 20,

  },
  flatlisticonimage: {
    height: 15,
    width: 15,
    // borderRadius:15,
    borderWidth: 1,
    // position: 'absolute',
    // bottom: 50,
    marginLeft: 6,
    marginTop: 6
  },
  subview: {
    backgroundColor: '#eaf5ec', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 30
  }
})
export default AssetList;