import {useState, createContext, useContext} from 'react';
// import ReactDOM from "react-dom/client";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LoginLight from '../LightScreens/Login';
//import { TouchableHighlight } from 'react-native-gesture-handler';
//import Component5 from './Component5';

export const UserContext = createContext();
const ThemeContext = ({navigation}) => {
  const [user, setUser] = useState('SAILAJA');
  return (
    <UserContext.Provider value={user}>
      <View style={{flexDirection:'column'}}>
        
        <Text>{`Hello ${user}!`}</Text>
      
        <TouchableOpacity
        onPress={() => navigation.navigate('LoginLight')}
        style={{
          borderRadius: 10,
          height: 50,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#305d85',
          marginVertical: 10,
        }}
        >
            <Text style={{color:"#fff"}}>LoginLight</Text>
        </TouchableOpacity>
      </View>     
    </UserContext.Provider>
  );
};

export default ThemeContext;
