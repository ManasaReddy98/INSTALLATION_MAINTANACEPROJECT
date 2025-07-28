import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {useNavigation} from '@react-navigation/native';
import RNFS from 'react-native-fs';
import {useTranslation} from 'react-i18next';

export default function Camerafunctionality({route}) {
  const {t} = useTranslation();
  const {
    Language,
    getid,
    mapresourceid,
    resourceName,
    maintenancetype,
    latitude,
    longitude,
    resourceid,
    color,
    AssetDetails,
    existingAssetId,
    LanguageOpt,
  } = route.params;

  const [{cameraRef}, {takePicture}] = useCamera(null);
  const navigation = useNavigation();

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
      const base64Images = await RNFS.readFile(data.uri, 'base64');

      navigation.navigate('SignatureCapturepage', {
        resourceName: resourceName,
        // latitude,
        // longitude,
        imageUri: data.uri,
        existingAssetId: existingAssetId,
        resourceid: resourceid,
        color: color,
        AssetDetails: AssetDetails,
        maintenancetype: maintenancetype,
        mapresourceid: mapresourceid,
        base64image: base64Images,
        getid: getid,
        Language: Language,
        LanguageOpt: LanguageOpt,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        captureAudio={false} // Disable audio capture if not needed
      />
      <View style={styles.captureContainer}>
        <TouchableOpacity onPress={captureHandle} style={styles.captureButton}>
          <Text style={styles.captureText}>{t('Capture')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  captureContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  captureButton: {
    padding: 15,
    backgroundColor: '#18253f',
    borderRadius: 20,
    marginTop: 5,
    // borderRadius: 5,
  },
  captureText: {
    color: 'white',
    fontSize: 16,
  },
});
