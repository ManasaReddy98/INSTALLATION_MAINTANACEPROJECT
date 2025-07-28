import React,{useEffect} from "react";
import {View,Text, StyleSheet,Image,Dimensions,Animated} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';


const {height,width}= Dimensions.get('window');



const DiscomDetails=({navigation,route})=>{

    useEffect(() => {
        animate();
        
      });
    let Opacity = new Animated.Value(0);

    const {item} = route.params;

    const animate = () => {

        Animated.timing(Opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true
    
        }).start();
      }

      const translateY = Opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [500, 0]
      });

    return(
       
        <View style={styles.container}>
     

          <View style={{height:height,backgroundColor:'#7AA874'}}>

           <Text style={styles.text}>{item.text}</Text>

           <View style={{ height: 180, width: 180 ,borderWidth:0.1,marginLeft:10,justifyContent:'center'}}>

                   <Image style={{ height: 170, width: 170,alignSelf:'center' }} resizeMode='contain' source={item.image}/>
           </View>
           </View>
           
          
           
           <Animated.View style={[styles.bg,{transform:[{translateY}]}]}></Animated.View>
           
        </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
       flex:1,
      
    },
    text:{
        color:'white',
        fontSize:18
    },
    image:{
        height:100,
        width:150
    },
    bg:{
        position:'absolute',
        height:height,
        width,
        borderRadius:20,
        backgroundColor:'white',
        top:250
        
    }
   
    
})

{/*DiscomDetails.sharedElements=(route)=>{
    const {item}= route.params;
    return[
       
        {
            id:`item.${item.id}.text`,
            

        },
        {
            id:`item.${item.id}.image`,

        },
       
    ]}
*/}

export default DiscomDetails;

{/*const DiscomDetails = ({ route }) => {
    const { item } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <SharedElement id={`item.${item.id}.image`}>
          <Image source={item.image} style={{ width: 200, height: 200 }} />
        </SharedElement>
        <Text style={{ marginTop: 8,color:'black' }}>{item.title}</Text>
      </View>
    );
  };
export default DiscomDetails;*/}