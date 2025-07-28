// import React, { useEffect, useState } from 'react';
// import { View, Button, Text, Image, StyleSheet } from 'react-native';
// import { RNCamera } from 'react-native-camera';

// const Testing = () => {
//   const [photoUri, setPhotoUri] = useState(null);
//   const cameraRef = React.useRef(null);
// const [textformat,setTextformat]=useState()

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const options = { quality: 0.5, base64: true };
//       const data = await cameraRef.current.takePictureAsync(options);
//       setPhotoUri(data.uri);
//       setTextformat("hello")
//     }
//   };

//   useEffect(() => {
//     const timeid = setTimeout(() => {
//       setPhotoUri(null)
//     }, 10000)
//     return () => clearTimeout(timeid)
//   }, [photoUri])

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 0.3, backgroundColor: 'yellow' }}>
//         <RNCamera
//           style={styles.camera}
//           type={RNCamera.Constants.Type.back}
//           captureAudio={false}
//           ref={cameraRef}
//         />
//       </View>
//       <View style={{ flex: 0.3, backgroundColor: 'green' }}>
//         <Button title="Take Picture" style={{ marginTop: 200 }} onPress={takePicture} />
//       </View>
//       <View style={{ flex: 0.3, backgroundColor: 'blue' }}>
//       {textformat && <Text style={{ color: 'green', flex: 1 }}>{textformat}</Text>}
//       </View>
//       <View style={{ flex: 0.3, backgroundColor: 'pink' }}></View>
//       <View style={{ flex: 0.3, backgroundColor: 'violet' }}></View>
//       {photoUri && <Image source={{ uri: photoUri }} style={styles.image} />}

//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   camera: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
// });

// export default Testing;







// import React, { useRef } from 'react';
// import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import RNFS from 'react-native-fs';


// export default function Testing() {
//   const cameraRef = useRef(null);

//   const captureHandle = async () => {
//     try {
//       if (cameraRef.current) {
//         const options = { quality: 0.5, base64: true };
//         const data = await cameraRef.current.takePictureAsync(options);
//         console.log(data.uri);
//         const filePath = data.uri;
//         const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
//         RNFS.moveFile(filePath, newFilePath)
//           .then(() => {
//             console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.body}>
//       <RNCamera
//         ref={cameraRef}
//         type={RNCamera.Constants.Type.back}
//         style={styles.preview}
//       >
//         <TouchableOpacity  style={{width:200,height:50,backgroundColor:'red',marginBottom:10,alignItems:'center',justifyContent:'center'}} onPress={() => captureHandle()}>
//           <Text style={{ color: 'green' }}>click</Text>
//         </TouchableOpacity>
//       </RNCamera>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//   },
//   preview: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   }
// });


// import React, { useState, useEffect } from 'react';
// import { View, Alert, Linking, Text, TouchableOpacity } from 'react-native';
// import { RNCamera } from 'react-native-camera';


// const Testing = () => {
//   const [isScanning, setIsScanning] = useState(true);
//   const [scanneddata, setScanneddata] = useState(null)


//   // Function to resume scanning after a delay
//   const resumeScanning = () => {
//     setIsScanning(true); // Reactivate scanning
//   };

//   // Reset scanning state after a certain timeout
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setIsScanning(true); // Reactivate scanning
//     }, 4000); // Reactivate after 4 seconds

//     // Return a cleanup function to clear the timeout
//     return () => clearTimeout(timeoutId);
//   }, [isScanning]);
// const [type,setType]=useState(null)
//   const handleBarCodeRead = ({ data,type }) => {
//     console.log("type",type)
//     setType(type)
//     setScanneddata(data)
//     setIsScanning(false);
//     if (data.startsWith('http://') || data.startsWith('https://')) {
//       // If the scanned data is a URL, open it in the device's default browser
//       Linking.openURL(data)
//         .then(() => {
//           // Handle success (optional)
//           console.log('Opened URL:', data);
//         })
//         .catch((error) => {
//           // Handle error (optional)
//           console.error('Error opening URL:', error);
//         });
//     } else {
//       // If the scanned data is not a URL, display it as text in an alert
//       Alert.alert(
//         'QR Code Scanned',
//         `Content: ${data}`,
//         [{ text: 'OK', onPress: () => resumeScanning() }],
//         { cancelable: false }
//       );
//     }
//   };
//   const handleLinkPress = () => {
//     if (scanneddata.startsWith('http://') || scanneddata.startsWith('https://')) {
//       Linking.openURL(scanneddata);
//     }
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <RNCamera
//         style={{ flex: 0.5 }}
//         type={RNCamera.Constants.Type.back}
//         flashMode={RNCamera.Constants.FlashMode.auto}
//         onBarCodeRead={isScanning ? handleBarCodeRead : undefined}
//         captureAudio={true}
//         barCodeTypes={[RNCamera.Constants.BarCodeType.code128]}
//       />
//       {scanneddata && (
//         <TouchableOpacity onPress={()=>handleLinkPress()}>
//           <Text style={{ color: 'red', marginTop: 100 }}>{scanneddata}</Text>
//         </TouchableOpacity>
//       )
//       }
//       <Text style={{color:'red'}}>{type}</Text>
//     </View>
//   );
// };

// export default Testing;




// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import base64 from 'react-native-base64';
// const Testing = () => {
//   const [scanned, setScanned] = useState(true);

//   const handleQRCodeScan = ({ data }) => {
//     const imageDataBase64 = data;
//     const decodedImageData = base64.decode(imageDataBase64);
//     setScanned(false)
//     Alert.alert('Decoded Image Data', decodedImageData);
//   };
//   useEffect(() => {
//     const timeid = setTimeout(() => {
//       setScanned(true)
//     }, 3000)
//     return () => clearTimeout(timeid)
//   }, [scanned])

//   return (
//     <View style={styles.container}>
//       <View style={{ height: 300 }}>
//         {scanned && (
//           <QRCodeScanner

//             onRead={handleQRCodeScan}
//             showMarker={true}
//             // reactivate={true}
//             // reactivateTimeout={2000}
//             markerStyle={styles.marker}
//           />
//         )}
//       </View>
//       <TouchableOpacity style={{ marginTop: 200 }} onPress={() => setScanned(true)}>
//         <Text style={{ color: 'red' }}>click</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   marker: {
//     borderColor: '#FFF',
//     borderRadius: 10,
//     borderWidth: 2,
//   },
// });

// export default Testing;



// import React, { useRef, useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, SafeAreaView, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import SignatureCapture from 'react-native-signature-capture';

// function Testing() {
//   const navigation = useNavigation();
//   const sign = useRef(null);
//   const [signatureImage, setSignatureImage] = useState([]); // State to store the captured image

//   const saveSign = () => {
//     sign.current.saveImage();
//   };

//   const resetSign = () => {
//     sign.current.resetImage();
//     setSignatureImage(null); // Reset the signature image
//   };

//   const _onSaveEvent = (result) => {
//     alert('Signature Captured Successfully');
//     setSignatureImage(prevSignatureImages => [...prevSignatureImages, result.encoded]);// Set the captured image to the state
//   };

//   const _onDragEvent = () => {
//     console.log('dragged');
//   };

//   return (
//     <View style={{ height: '100%' }}>
//       <View style={styles.container1}>
//         <Text style={{ alignSelf: 'center' }}>Signature Capture</Text>
//         <SignatureCapture
//           style={styles.signature}
//           ref={sign}
//           onSaveEvent={_onSaveEvent}
//           minStrokeWidth={2}
//           maxStrokeWidth={2}
//           onDragEvent={_onDragEvent}
//           showNativeButtons={false}
//           showTitleLabel={false}
//           viewMode={'portrait'}
//         />
//         <TouchableHighlight
//           style={{ backgroundColor: 'green', position: 'absolute', width: 130, height: '15%', alignItems: 'center', justifyContent: 'center', bottom: 0, borderBottomLeftRadius: 15, }}
//           onPress={saveSign}>
//           <Text style={{ color: '#fff', fontSize: 15, fontWeight: "500" }}>Save</Text>
//         </TouchableHighlight>
//         <TouchableHighlight
//           style={{ backgroundColor: '#6677cb', position: 'absolute', right: 0, height: '15%', width: 130, bottom: 0, alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 15 }}
//           onPress={resetSign}>
//           <Text style={{ color: '#fff', fontSize: 15, fontWeight: "500" }}>Reset</Text>
//         </TouchableHighlight>
//       </View>
//       {signatureImage && ( // Conditional rendering of the captured image
//         <View style={styles.signaturePreview}>
//           {signatureImage.map((item, index) => {
//             return (
//               <View>
//                 <Text style={{ color: 'green' }}>Signature Image:</Text>
//                 <Image source={{ uri: `data:image/jpg;base64,${item}` }} style={styles.signatureImage} />
//               </View>
//             )
//           })

//           }
//         </View>
//       )}
//       <View>
//         <TextInput style={{ paddingLeft: 10, paddingTop: 4, color: '#909090', marginHorizontal: 15, borderRadius: 20, textAlignVertical: 'top', height: 300, marginTop: 20, backgroundColor: 'white' }}
//           placeholder="Text here"
//           numberOfLines={40}
//           multiline={true}
//         />
//       </View>
//       <TouchableOpacity>
//         <Text style={{ color: 'green' }}>Save</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Testing;

// const styles = StyleSheet.create({
//   container1: {
//     height: '40%',
//     backgroundColor: 'white',
//     marginHorizontal: 15,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20
//   },
//   signature: {
//     height: '85%',
//     borderWidth: 0.4,
//     borderColor: 'red',
//   },
//   signaturePreview: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   signatureImage: {
//     width: 200,
//     height: 100,
//   },
// });















// import React from 'react';
// import { View, Button } from 'react-native';
// import { RNCamera } from 'react-native-camera';

// const Testing = () => {
//   let cameraRef = null;

//   const handleStartRecording = async () => {
//     if (cameraRef) {
//       const options = { quality: RNCamera.Constants.VideoQuality['720p'] };
//       const data = await cameraRef.recordAsync(options);
//       console.log(data.uri); // Path to the recorded video
//     }
//   };

//   const handleStopRecording = () => {
//     if (cameraRef) {
//       cameraRef.stopRecording();
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <RNCamera
//         ref={(ref) => (cameraRef = ref)}
//         style={{ flex: 1 }}
//         type={RNCamera.Constants.Type.back}
//         flashMode={RNCamera.Constants.FlashMode.off}
//         captureAudio={false} // Set captureAudio to false
//       />
//       <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//         <Button title="Start Recording" onPress={handleStartRecording} />
//         <Button title="Stop Recording" onPress={handleStopRecording} />
//       </View>
//     </View>
//   );
// };

// export default Testing;













// import React, { useState } from 'react';
// import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';
// import SignatureCapture from 'react-native-signature-capture';

// const Testing = () => {
//   let signatureRef = null;
//   const [signatureImage, setSignatureImage] = useState(null);


//   const handleSaveSignature = () => {
//     console.log("hello")
//     if (signatureRef) {
//       signatureRef.saveImage((data) => {
//         setSignatureImage(data)
//       });
//     }
//   };

//   const handlePress = () => {
//     console.log('Button pressed!');
//     // You can add your logic here when the button is pressed
//   };
//   console.log("react", signatureImage)

//   return (
//     <View style={styles.container}>
//       <SignatureCapture
//         ref={(ref) => { signatureRef = ref; }}
//         onSaveEvent={() => {
//           // Signature saved
//         }}
//         saveImageFileInExtStorage={false}
//         showNativeButtons={false}
//         showTitleLabel={false}
//         backgroundColor="#ffffff"
//         strokeColor="#000000"
//         minStrokeWidth={1}
//         maxStrokeWidth={3}
//         style={{
//           flex: 1,
//           width: '100%',
//           height: '100%',
//         }}
//       />
//       <TouchableOpacity onPress={handleSaveSignature} style={styles.button}>
//         <Text style={styles.buttonText}>Press Me</Text>
//       </TouchableOpacity>
//       {signatureImage && (
//         <View style={styles.signaturePreview}>
//           <Image source={{ uri: `data:image/png;base64,${signatureImage}` }} style={styles.signatureImage} />
//         </View>
//       )}

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 400,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'skyblue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   signaturePreview: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   signatureImage: {
//     width: 200,
//     height: 100,
//   },
// });
// export default Testing;

import React, { useRef } from 'react';
import { View, StyleSheet,Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';

export default function Testing() {
  const cameraRef = useRef(null);

  const captureHandle = async () => {
    try {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log(data.uri);

        const filePath = data.uri;
        const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';

        RNFS.moveFile(filePath, newFilePath)
          .then(() => {
            console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
          })
          .catch(error => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}
      >        
        <Button title="click" onPress={captureHandle}/>
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});



