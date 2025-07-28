import React from 'react';
import NetInfo from '@react-native-community/netinfo';



export default class CheckNetworkConnectivity {
  displayText(str) {
    return 'I am  ' + str;
  } 

  checkNetworkState() {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          resolve('Connected'); // You can customize the resolution value as needed
        } else {
          reject(new Error('No internet connection'));
        }
      });
    });
  }
  
}






