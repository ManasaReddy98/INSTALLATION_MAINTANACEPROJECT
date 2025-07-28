import React, { useState, Fragment, useEffect } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Base64 } from 'js-base64';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const CameraView = () => {
  const [fileUri, setFileUri] = useState("")
  const [encPwd, setEncPwd] = useState("")
  const [decPwd, setDecPwd] = useState("")
  useEffect(() => {
    setEncPwd(Base64.encode(fileUri))
  })
  const chooseImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        console.log('response', JSON.stringify(response));
        setFileUri(response.assets[0].uri)
      }
    });
  };
  const docamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        console.log('response', JSON.stringify(response));
        setFileUri(response.assets[0].uri)
      }
    });
  };
  const renderFileUri = () => {
    if (fileUri) {
      return <Image source={{ uri: fileUri }} style={styles.images} />;
    } else {
      return (
        <Image
          source={{
            uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
          }}
          style={styles.images}
        />
      );
    }
  }
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => setDecPwd(Base64.decode(encPwd))}>
            <Text
              style={{ textAlign: 'center', color: 'violet', marginTop: 30, fontSize: 20, paddingBottom: 10 }}>
              Pick Images from Camera & Gallery
            </Text>
          </TouchableOpacity>
          <View style={styles.ImageSections}>
            <View>{renderFileUri()}</View>
          </View>
          <View style={styles.btnParentSection}>
            <TouchableOpacity
              onPress={chooseImage}
              style={styles.btnSection}>
              <Text style={styles.btnText}>Choose File</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={docamera}
              style={styles.btnSection}>
              <Text style={styles.btnText}>Directly Launch Camera</Text>
            </TouchableOpacity>
            {fileUri ? (
              <Text style={{ color: 'green', marginTop: 10 }}>{encPwd}</Text>
            ) : <Text style={{ color: 'red' }}>hello</Text>
            }
            {encPwd ? (
              <Image source={{ uri: decPwd }} style={{ height: 100, marginTop: 60, width: 100 }} />
            ) : <Text style={{ color: 'red', marginTop: 60 }}>hello</Text>
            }
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}
export default CameraView;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },

  body: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width,
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  images: {
    width: 250,
    height: 250,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
















// import React from 'react';
// import { StyleSheet, View,TouchableOpacity,Text, Button } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import { useCamera } from 'react-native-camera-hooks';
// import RNFS from 'react-native-fs';
// export default function CameraView() {
//     const [{ cameraRef }, { takePicture }] = useCamera(null);
//     const captureHandle = async () => {
//         try {
//             const data = await takePicture();
//             console.log(data.uri);                
//             const filePath = data.uri;
//             const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
//             RNFS.moveFile(filePath, newFilePath)
//                 .then(() => {
//                     console.log('IMAGE MOVED', filePath, '--to--', newFilePath)
//                 })
//                 .catch(error => {
//                     console.log(error);
//                 })
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     return (
//         <View style={styles.body}>
//             <RNCamera
//                 ref={cameraRef}
//                 type={RNCamera.Constants.Type.back}
//                 style={styles.preview}
//             >
//                 <TouchableOpacity
//                     style={styles.button}
//                     onPress={()=>captureHandle()}>
//                     <Text style={styles.text}>
//                         Capture
//                     </Text>
//                 </TouchableOpacity>
//             </RNCamera>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     body: {
//         flex: 1
//     },
//     preview: {
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         flex: 1
//     },
//     button: {
//         alignItems: 'center',
//         backgroundColor: '#f05555',
//         color: '#ffffff',
//         padding: 10,
//         marginTop: 16,
//         marginLeft: 35,
//         marginRight: 35,
//       },
//       text: {
//         color: '#ffffff',
//       },
// });