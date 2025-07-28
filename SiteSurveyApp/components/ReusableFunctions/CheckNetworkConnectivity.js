import React from 'react';
import NetInfo from '@react-native-community/netinfo';

export function CheckNetworkConnectivity() {
  let value ;
  //const [netInfo, setNetInfo] = useState('');
 // useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
         value = state.isConnected;
        console.log("STATE INSIDE FUNCTION "+ value);
        console.log("has internet connection" + value)
       
      // setNetInfo(
      //   `Connection type: ${state.type}
      // Is connected?: ${state.isConnected}
      // IP Address: ${state.details.ipAddress}`,
      // );
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
     
      console.log("has internet connection INSIDE RETURN ################33" + JSON.stringify(value))
    };
 // }, []);

  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then(state => {
      alert(
        `Connection type: ${state.type}
      Is connected?: ${state.isConnected}
      IP Address: ${state.details.ipAddress}`,
      );
    });
  };
}

//export default CheckNetworkConnectivity;
