
import NetInfo from '@react-native-community/netinfo';
import {isConnected, getNetInfo} from '../ReusableFunctions/NetworkUtils';
export const getNetStateInfo = () =>{
      let networkStatus;
      NetInfo.addEventListener(state=> {
          if(state.isConnected){
            networkStatus=state.isConnected;
            console.log("NETWORK STATURE #### "+ networkStatus)
          } else {
            networkStatus=state.isConnected;
            console.log("NETWORK STATURE #### "+ networkStatus) 
          }   
      })
    return networkStatus;  
  }