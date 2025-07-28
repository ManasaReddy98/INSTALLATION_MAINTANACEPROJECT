import React from 'react';
import {View,Text,TextInput,Dimensions} from 'react-native';

const Inputtext = ({text,textplaceholder,onchange,data,onend})=>{
    const { width, height } = Dimensions.get('window');
    return(
        <View style={{marginTop:15}}>
        <View>
        <Text style={{color:'#181952',marginBottom:7,paddingLeft:18}}>{text}</Text>
        <TextInput style={{height:50,marginHorizontal:15,borderColor:'#70ab70',borderWidth:1,elevation:3,
        borderRadius:5,backgroundColor:'white',paddingLeft:5}} placeholder={textplaceholder}
       onEndEditing={onend} onChangeText={onchange} value={data}/>
        
        </View>  

        </View>
        
       
    )
};
export default Inputtext;