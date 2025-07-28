import React from 'react';
import { View ,Keyboard,Text,TextInput,StyleSheet,Image,TouchableOpacity, ScrollView,Dimensions, ImageBackground,StatusBar} from 'react-native';

const { width, height } = Dimensions.get('window')

const Forgotpassword = ({navigation,route}) =>{
  const {Language}=route.params;
    const [userName, setUserName] = React.useState('');
    const [inputs, setInputs] = React.useState({
        emailid: '',
        newpassword: '',
        confirmpassword: '',
        
      });
      const [errors, setErrors] = React.useState(null);
      
        const validate = () => {
        Keyboard.dismiss();
        let isValid = true;
    
        if (!inputs.emailid) {
            handleError('Must provide emailid', 'emailid');
            isValid = false;
          }else if(!inputs.emailid.match(/\S+@\S+\.\S+/)){
            handleError('Invalid emailid', 'emailid');
            isValid = false;
          }
  
          if (!inputs.newpassword) {
              handleError('Must provide newpassword', 'newpassword');
              isValid = false;
            }else if(!inputs.newpassword.match(/^[0-9]{8}$/)){
              handleError('Invalid password', 'newpassword');
              isValid = false;
            }
  
            if (!inputs.confirmpassword) {
              handleError('Must provide confirmpassword', 'confirmpassword');
              isValid = false;
            }else if(inputs.confirmpassword!=inputs.newpassword){
              handleError('Password must match', 'confirmpassword');
              isValid = false;
            }


           if (isValid) {
       
          navigation.navigate("Login");
         
        }
      };
    
    
      const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      };
      const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
      };
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#182442' />
      <ImageBackground source={require('../images/efdashboardbg.png')} resizeMode="cover" style={styles.image}>
        <View style={{height:50}}></View>
      
     
            
        <View style={{flexDirection:'column',marginLeft:30,marginTop:'40%'}}>
           <View style={{}}>
                <Text style={{color:'#181952',}}>email-id</Text>
                {/* email-id */}
            </View>
           <View style={{width:'85%',height:50,marginTop:5}} >       
                
               <TextInput style={styles.input1} 
                onChangeText={text => handleOnchange(text, 'emailid')}
                value={inputs}
                placeholderTextColor='#181952'
                onFocus={() => handleError(null, 'emailid')}
                />
               </View>
               {errors?<Text style={{color:'red'}}>{errors.emailid}</Text>:null}
               <View style={{marginTop:20}}>
                <Text style={{color:'#181952',}}>newpassword</Text>
            </View>
           <View style={{width:'85%',height:50,marginTop:5}} >       
                
               <TextInput style={styles.input1} 
                 onChangeText={text => handleOnchange(text, 'newpassword')}
                value={inputs}
                placeholderTextColor='#181952'
                onFocus={() => handleError(null, 'newpassword')}
                />
               </View>
               {errors?<Text style={{color:'red'}}>{errors.newpassword}</Text>:null}
               <View style={{marginTop:20}}>
                <Text style={{color:'#181952',}}>confirmpassword</Text>
            </View>
           <View style={{width:'85%',height:50,marginTop:5}} >       
                
               <TextInput style={styles.input1} 
                onChangeText={text => handleOnchange(text, 'confirmpassword')}
                value={inputs}
                placeholderTextColor='#181952'
                onFocus={() => handleError(null, 'confirmpassword')}
                />
               </View>
               {errors?<Text style={{color:'red'}}>{errors.confirmpassword}</Text>:null}
               
               <TouchableOpacity onPress={validate}>
                   <View style={styles.button}>
                    <Text style={{fontSize:20,color:'white'}}>set password</Text>
                   </View>
               </TouchableOpacity>
        
         <Text style={{}}></Text>
     </View>
   
 
 </ImageBackground>
 </View>
    );
};
Forgotpassword.navigationOptions = () => {
       return {
         headerShown: false,
       };
     };
const styles = StyleSheet.create({
    back:{
        width:'100%',
         height:50,
         borderRadius:5,
        // marginHorizontal:15,
         flexDirection:'row',
         
         
       },
       container: {
        flex: 1,
    },
    image: {
        flex: 1,
      

    },
    button:{
      height:60,width:150,backgroundColor:'#476c3f',
      alignSelf:'center',marginTop:20,marginRight:10,borderTopLeftRadius:30,borderBottomRightRadius:30,
      justifyContent:'center',alignItems:'center'
    },
       input1:{
       // width:'85%',
       // outlineStyle:'none',
        borderWidth:0.5,
        borderColor:'#cfd0e2',
        padding:5,
        borderRadius:10,
        backgroundColor:'white',
        height:50,
        elevation:1,
        color:'black'
      },
      icon:{
        alignSelf:'center',
        fontSize:20,
        marginHorizontal:15,color:'white'
      }

})

export default Forgotpassword;
