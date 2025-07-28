import PDFView from 'react-native-view-pdf';
import {View} from 'react-native';

const resources = {
  file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  base64: 'JVBERi0xLjMKJcfs...',
};

export default class DocumentPickers extends React.Component {
  render() {
    const resourceType = 'url';
    return (
      <View style={{ flex: 1 }}>
        {/* Some Controls to change PDF resource */}
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={resources[resourceType]}
          resourceType={resourceType}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={(error) => console.log('Cannot render PDF', error)}
        />
      </View>
    );
  }
}










// import React, { useState } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity,
//     ScrollView,
//     Image,
// } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';

// import { Document, Page, pdfjs } from 'react-pdf';

// const DocumentPickers = ({ navigation }) => {
//     const [singleFile, setSingleFile] = useState([]);
//     const [multipleFile, setMultipleFile] = useState([]);

//     const selectOneFile = async () => {
//         try {
//             const results = await DocumentPicker.pickMultiple({
//                 type: [DocumentPicker.types.images],
//             });
//             for (const res of results) {
//                 console.log('res : ' + JSON.stringify(res));
//                 console.log('URI : ' + res.uri);
//                 console.log('Type : ' + res.type);
//                 console.log('File Name : ' + res.name);
//                 console.log('File Size : ' + res.size);
//             }
//             setSingleFile(results);
//         } catch (err) {
//             if (DocumentPicker.isCancel(err)) {
//                 alert('Canceled from single doc picker');
//             } else {
//                 alert('Unknown Error: ' + JSON.stringify(err));
//                 throw err;
//             }
//         }
//     };

//     const selectMultipleFile = async () => {
//         try {
//             const results = await DocumentPicker.pickMultiple({
//                 type: [DocumentPicker.types.allFiles],
//             });
//             for (const res of results) {
//                 //Printing the log realted to the file
//                 console.log('res : ' + JSON.stringify(res));
//                 console.log('URI : ' + res.uri);
//                 console.log('Type : ' + res.type);
//                 console.log('File Name : ' + res.name);
//                 console.log('File Size : ' + res.size);
//             }
//             setMultipleFile(results);
//         } catch (err) {
//             if (DocumentPicker.isCancel(err)) {
//                 alert('Canceled from multiple doc picker');
//             } else {
//                 alert('Unknown Error: ' + JSON.stringify(err));
//                 throw err;
//             }
//         }
//     };

//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <Text style={styles.titleText}>
//                 Example of File Picker in React Native
//             </Text>
//             <View style={styles.container}>
//                 <TouchableOpacity
//                     activeOpacity={0.5}
//                     style={styles.buttonStyle}
//                     onPress={selectOneFile}>

//                     <Text style={{ marginRight: 10, fontSize: 19 }}>
//                         Click here to pick one file
//                     </Text>
//                     <Image
//                         source={{
//                             uri: 'https://img.icons8.com/offices/40/000000/attach.png',
//                         }}
//                         style={styles.imageIconStyle}
//                     />
//                 </TouchableOpacity>

//                 <ScrollView>
//                     {singleFile.map((item, key) => (
//                         <View key={key}>
//                             <Text style={styles.textStyle}>
//                                 File Name: {item.name ? item.name : ''}
//                                 {'\n'}
//                                 Type: {item.type ? item.type : ''}
//                                 {'\n'}
//                                 File Size: {item.size ? item.size : ''}
//                                 {'\n'}
//                                 URI: {item.uri ? item.uri : ''}
//                                 {'\n'}
//                                 <Image source={{ uri: item.uri ? item.uri : '' }} style={{ marginTop: -1000, height: 400, width: 300 }} />

//                             </Text>
//                         </View>
//                     ))}
//                 </ScrollView>
//                 <View
//                     style={{
//                         backgroundColor: 'grey',
//                         height: 2,
//                         margin: 10
//                     }} />

//                 <TouchableOpacity
//                     activeOpacity={0.5}
//                     style={styles.buttonStyle}
//                     onPress={selectMultipleFile}>
//                     {/*Multiple files selection button*/}
//                     <Text style={{ marginRight: 10, fontSize: 19 }}>
//                         Click here to pick multiple files
//                     </Text>
//                     <Image
//                         source={{
//                             uri: 'https://img.icons8.com/offices/40/000000/attach.png',
//                         }}
//                         style={styles.imageIconStyle}
//                     />
//                 </TouchableOpacity>

//                 <ScrollView>
//                     {multipleFile.map((item, key) => (
//                         <View key={key}>
//                             <Text style={styles.textStyle}>
//                                 File Name: {item.name ? item.name : ''}
//                                 {'\n'}
//                                 Type: {item.type ? item.type : ''}
//                                 {'\n'}
//                                 File Size: {item.size ? item.size : ''}
//                                 {'\n'}
//                                 URI: {item.uri ? item.uri : ''}
//                                 {'\n'}
//                                 <Image source={{ uri: item.uri ? item.uri : '' }} style={{ marginTop: -1000, height: 400, width: 300 }} />
//                                 <Document
//                                     file={item.url}
//                                     onLoadSuccess={onDocumentLoadSuccess}
//                                 ></Document>
//                             </Text>
//                         </View>
//                     ))}
//                 </ScrollView>
//             </View>
//         </SafeAreaView>
//     );
// };

// export default DocumentPickers;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         padding: 16,
//     },
//     titleText: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         paddingVertical: 20,
//     },
//     textStyle: {
//         backgroundColor: '#fff',
//         fontSize: 15,

//         marginTop: 16,
//         color: 'black',
//     },
//     buttonStyle: {
//         alignItems: 'center',
//         flexDirection: 'row',
//         backgroundColor: '#DDDDDD',
//         padding: 5,
//     },
//     imageIconStyle: {
//         height: 20,
//         width: 20,
//         resizeMode: 'stretch',
//     },
// });