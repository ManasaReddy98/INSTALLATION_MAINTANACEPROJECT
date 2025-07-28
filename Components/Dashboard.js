import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

const Dashboard = ({navigation}) => {
  const Dashboards = [
    {
      id: 1,
      name: 'Meter',
      color: '#e17d39',
    },
    {
      id: 2,
      name: 'Transformer',
      color: '#6f78c6',
    },
    {
      id: 3,
      name: 'Router',
      color: '#519f87',
    },

    {
      id: 4,
      name: 'TMU',
      color: '#d46b6a',
    },
  ];
  const Data = [
    {
      id: 0,
      installationAsset: 'Meter',
      Count: 'SinglePhase/Inish',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 1,
      installationAsset: 'Meter',
      Count: '3Phase/ECIL',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 2,
      installationAsset: 'Meter',
      Count: 'LTCT/HPL',
      Location: '17.858458,54.8568',
      status: 'ReAssigned',
    },
    {
      id: 3,
      installationAsset: 'Meter',
      Count: 'LTCT/Vision Tech',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 4,
      installationAsset: 'Meter',
      Count: 'SinglePhase/Crystal',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
  ];
  const Datas = [
    {
      id: 0,
      installationAsset: 'Transformer',
      Count: 'SinglePhase/Inish',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 1,
      installationAsset: 'Transformer',
      Count: '3Phase/ECIL',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 2,
      installationAsset: 'Transformer',
      Count: 'LTCT/HPL',
      Location: '17.858458,54.8568',
      status: 'ReAssigned',
    },
    {
      id: 3,
      installationAsset: 'Transformer',
      Count: 'LTCT/Vision Tech',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 4,
      installationAsset: 'Transformer',
      Count: 'SinglePhase/Crystal',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
  ];
  const History = [
    {
      id: 0,
      installationAsset: 'Router',
      Count: 'SinglePhase/Inish',
      Location: '17.858458,54.8568',
      status: 'ReAssigned',
    },
    {
      id: 1,
      installationAsset: 'Router',
      Count: '3Phase/ECIL',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 2,
      installationAsset: 'Router',
      Count: 'LTCT/HPL',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 3,
      installationAsset: 'Router',
      Count: 'LTCT/Vision Tech',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 4,
      installationAsset: 'Router',
      Count: 'SinglePhase/Crystal',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
  ];
  const Router = [
    {
      id: 0,
      installationAsset: 'TMU',
      Count: 'SinglePhase/Inish',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 1,
      installationAsset: 'TMU',
      Count: '3Phase/ECIL',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
    {
      id: 2,
      installationAsset: 'TMU',
      Count: 'LTCT/HPL',
      Location: '17.858458,54.8568',
      status: 'ReAssigned',
    },
    {
      id: 3,
      installationAsset: 'TMU',
      Count: 'LTCT/Vision Tech',
      Location: '17.858458,54.8568',
      status: 'Completed',
    },
    {
      id: 4,
      installationAsset: 'TMU',
      Count: 'SinglePhase/Crystal',
      Location: '17.858458,54.8568',
      status: 'NotStarted',
    },
  ];
  return (
    <View style={{justifyContent: 'center', height: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 10,
          marginTop: 30,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AssetDataList', {
              AssetDetails: Data,
              ti: 'Meter',
              color: '#e17d39',
            })
          }>
          <View
            style={{
              width: 150,
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#e17d39',
            }}>
            <Text style={{color: '#ffffff'}}>Meter</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AssetDataList', {
              AssetDetails: Datas,
              ti: 'Transformer',
              color: '#6f78c6',
            })
          }>
          <View
            style={{
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
              height: 150,
              backgroundColor: '#6f78c6',
            }}>
            <Text style={{color: '#ffffff'}}>Transformer</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AssetDataList', {
              AssetDetails: History,
              ti: 'Router',
              color: '#519f87',
            })
          }>
          <View
            style={{
              width: 150,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#519f87',
            }}>
            <Text style={{color: '#ffffff'}}>Router</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AssetDataList', {
              AssetDetails: Router,
              ti: 'TMU',
              color: '#d46b6a',
            })
          }>
          <View
            style={{
              width: 150,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#d46b6a',
            }}>
            <Text style={{color: '#ffffff'}}>TMU</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
