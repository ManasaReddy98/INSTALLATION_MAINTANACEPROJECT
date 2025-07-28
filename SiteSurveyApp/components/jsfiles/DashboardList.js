import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DashboardList = ({ product, Navigation }) => {

  const { icon, text, color, key } = product;
  return (
    <TouchableOpacity onPress={() => { if (key === '1') Navigation.navigate('') }}>
      <View style={{
        height: 150, width: 150, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10,
        backgroundColor: '#fff', elevation:5,borderRadius: 15
      }}>
        <View style={{
          height: 100, width: 100, borderRadius: 120, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10,
          backgroundColor: '#12136e',
        }}>

          <MaterialCommunityIcons name={icon} size={60} color={"#98e9a2"} />
        </View>
      </View>
      <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center' }}>{text}</Text>
      <Text style={{ color: 'black', fontSize: 12, alignSelf: 'center' }}></Text>

    </TouchableOpacity>




  )

}
export default DashboardList;