import React,{useRef,useEffect,useState} from 'react';
import { View, StyleSheet, Text, Dimensions, Image, ScrollView, FlatList,Animated, ImageBackground, TouchableOpacity } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';

const { height, width } = Dimensions.get('window');






const DiscomRegions = ({navigation,route}) => {
 const {LanguageOpt} = route.params;
const fadeAnim = useRef(new Animated.Value(1)).current;
const [headerShown, setHeaderShown] = useState(false);
const [scrollY, setscrollY] = useState([]);
const Regions = [
  {
      id:'1',
      image: require('../images/assetlocation1.png'),
      text:LanguageOpt('TIRCHY')
  },
  {
      id:'2',
      image: require('../images/assetlocation2.png'),
      text:LanguageOpt('VILLU PURAM')
  },
  {
id:'3',
      image: require('../images/assetlocation3.png'),
      text:LanguageOpt('TIRUNELVELI')
  },
  {
id:'4',
      image: require('../images/assetlocation4.png'),
      text:LanguageOpt('MADURAI')
  },
  {
id:'5',
      image: require('../images/assetlocation5.png'),
      text:LanguageOpt('COIMBATORE')
  },
  {
id:'6',
      image: require('../images/assetlocation6.png'),
      text:LanguageOpt('ERODE')
  },
 
  {
id:'7',
      image: require('../images/assetlocation8.png'),
      text:LanguageOpt('VELLORE')
  }
]
{/*useEffect(() => {
    Animated.timing(opacityValue, {
      toValue: headerShown ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);*/}

  



    return (
        
           
                <Animated.View style={{flex:1}}>
            
            <FlatList
                data={Regions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ index, item }) => {
                  const handleItemClick = () => {
                    Animated.timing(fadeAnim, {
                      toValue: 0,
                      duration: 500, // Adjust the duration as per your preference
                      useNativeDriver: true,
                    }).start(() => {
                      // Animation completed, navigate to the next screen
                      navigation.navigate('DiscomDetails',{item});
                    });
                  };
                    return (
                        <TouchableOpacity onPress={handleItemClick}>                    

                        <Animated.View style={[styles.flatlisview,{opacity:fadeAnim}]}>
                            <View style={{ height: 120, width: 120 ,borderWidth:0.1,marginLeft:10,justifyContent:'center'}}>
                                
                                <Image style={{ height: 100, width: 100,alignSelf:'center' }} resizeMode='contain' source={item.image} />
                                
                            </View>

                            <Text style={styles.text}>{item.text}</Text>

                        </Animated.View>
                        
                        </TouchableOpacity>
                    )
                }}
            />
            
           
            
           
           
            </Animated.View>


 );

}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatlisview: {
        height: 120,
        backgroundColor: '#fff', margin: 15,elevation:10,borderRadius:10
    },
    text:{
        position:'absolute',top:20,left:120,fontSize:20,color:'black' 
    },
    bg:{
        position:'absolute',
        height:height,
        width,
        borderRadius:20,
        backgroundColor:'white',
        top:300,
        elevation:1
        
    }
})

export default DiscomRegions;


{/*const DATA = [
    { id: '1', title: 'Item 1', image: require('../images/assetlocation1.png'),
},
    { id: '2', title: 'Item 2', image: require('../images/assetlocation2.png'),
},
{ 
    id: '3', title: 'Item 3', image: require('../images/assetlocation3.png'),
},
{ 
    id: '4', title: 'Item 4', image: require('../images/assetlocation4.png'),
},
{ 
    id: '5', title: 'Item 5', image: require('../images/assetlocation5.png'),
},
  ];

  const ListItem = ({ item, navigation }) => {
    return (
        
      <TouchableOpacity
        onPress={() => navigation.navigate('DiscomDetails', { item })}
        style={{ padding: 16 }}
      >
        <View style={{backgroundColor:'green'}}>
        <SharedElement id={`item.${item.id}.image`}>
          <Image source={item.image} style={{ width: 100, height: 100 }} />
        </SharedElement>
        </View>
        <Text style={{ marginTop: 8,color:'black' }}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  
  const DiscomRegions = ({ navigation }) => {
    return (
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} />
        )}
      />
    );
  };

export default DiscomRegions;*/}
  