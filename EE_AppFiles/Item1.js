import React, { useState } from 'react';
import { Text, View, Image, Switch, ScrollView, TouchableOpacity } from 'react-native';
import IconBadge from 'react-native-icon-badge';
import Headerbar from '../EE_Helpers/Headerbar';


const Item1 = ({ navigation, route }) => {
  const [badgeCount, setBadgeCount] = useState(20);
  const { Data, datas, setData } = route.params
  const [sett, setSett] = useState(Data.boolean)
  const [select, setSelect] = useState(Data)
  const [location, setLocation] = useState(false);
  const toggleLocation = () => {
    setLocation((previousstate) => !previousstate);
  };

  const hek = (index) => {
    // setSelect({ ...select, reasons: { ...select.reasons, [value]: !select.reasons[value] } })
    const neww = [...select]
    neww[index].boolean = false
    setSelect(neww)
  }

  return (
    <View style={{ flex: 1, }}>
      <Headerbar />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
        <TouchableOpacity style={{ position: 'absolute', left: 5, }}>
          <Image style={{ height: 20, width: 20, borderRadius: 5 }} source={require('../EE_images/leftarrow.png')} />
        </TouchableOpacity>
        <Text style={{ color: '#fff', fontSize: 20, }}>Home</Text>
        <TouchableOpacity style={{ position: 'absolute', right: 5 }}>
          <Text style={{ color: '#fff', fontSize: 20, }}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Image style={{ height: 150, width: 300, alignSelf: 'center', marginTop: 46, borderRadius: 10, }} source={datas} />
      <ScrollView>
        <View>
          {
            Data.map((item, index) => {
              return (
                <TouchableOpacity>
                  <View key={index} style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#ffffff', marginHorizontal: 20, borderRadius: 5 }}>
                    <Image style={{ height: 50, width: 50, }} source={item.images} />
                    <Text style={{ color: 'black', marginLeft: 5, textAlignVertical: 'center', }}>{item.name}</Text>
                    <Switch
                      trackColor={{ false: 'red', true: 'green' }}
                      thumbColor="grey"
                      onValueChange={() => hek(index)}
                      ios_backgroundColor="grey"
                      value={item.boolean}
                    />
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}

export default Item1;