import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {PermissionsAndroid, Platform} from 'react-native';
export default class CameraOptions {
  displayText(str) {
    return 'I am  ' + str;
  }

  async requestCameraPermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  }

  async requestExternalWritePermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  }

  async captureImage(type) {
    //let imageBase64 ="";
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
      includeBase64: true,
    };

    return new Promise((resolve, reject) => {
      launchCamera(options, res => {
        //res is callback, https://github.com/react-native-image-picker/react-native-image-picker/blob/main/README.md#options.
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          alert(res.customButton);
        } else {
          const source = {uri: res.uri};
         // console.log('response', JSON.stringify(res));
          const image = res.data;
          console.log("Camera response Image  #####"+ image);
          if(res.data){
            const imageBase64 = res.data
                ? res.data
                : '';
                console.log("Camera response #####"+ imageBase64);
  
              resolve(imageBase64);
          }

          // if (res.assets?.length > 0) {
          //   const imageBase64 = res.assets[0].data
          //     ? res.assets[0].data
          //     : '';
          //     console.log("Camera response #####"+ imageBase64);

          //   resolve(imageBase64);
          // }
          // changed from return to resolve
        }
      });
    });

    // let isCameraPermitted = await requestCameraPermission();
    // let isStoragePermitted = await requestExternalWritePermission();
    // if (isCameraPermitted && isStoragePermitted) {
    // await launchCamera(options, response => {
    //   //console.log('Response = ', response);

    //   if (response.didCancel) {
    //     alert('User cancelled camera picker');
    //     return;
    //   } else if (response.errorCode == 'camera_unavailable') {
    //     alert('Camera not available on device');
    //     return;
    //   } else if (response.errorCode == 'permission') {
    //     alert('Permission not satisfied');
    //     return;
    //   } else if (response.errorCode == 'others') {
    //     alert(response.errorMessage);
    //     return;
    //   }
    //   // if (response.assets?.length > 0) {
    //   //   const imageBase64 = response.assets[0].base64
    //   //     ? response.assets[0].base64
    //   //     : '';
    //   //     // const response = await fetch(url);
    //   //     // return response.json();
    //   //   return response.json ;
    //   // }
    //   return 'LAUNCH CAMERA SAILAJA';
    // });
  }
}

// export default CameraOptions;
