import React, { useState, useEffect, useRef } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    Button, Image, TouchableOpacity
} from 'react-native';
import Login1 from './Login1';
import Login2 from './Login2';
import Round4 from './Round4';
import Login3 from './Login3';

import Logins1 from '../loginpagesresearchjson/Login1';
import Logins2 from '../loginpagesresearchjson/Login2';
import Logins3 from '../loginpagesresearchjson/Login3';
import Logins4 from '../loginpagesresearchjson/Login4';



var screenWidth = Dimensions.get('window').width;

import { HeaderStyleInterpolators } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import tick from '../images/tick.png';
import { GlobalStyles } from '../appstyles/GlobalStyles';


export default function Research({ navigation, route }) {
    const { coloring, Language } = route.params;
    const [color, setColor] = useState(coloring);
    const [listdata, setListdata] = useState([
        {
            "Id": "1",
            "name": "TMU",
            "type": "Enter Meter Details",
            "stepsCount": "2",
            "Type": "Editbox",
            "Step1": [
                {
                    id:1,
                    "type": "home",
                    "text": "212555-1234",
                    "viewtype": "editBox",
                    "info":""
                },
                {
                    id:2,
                    "type": "fax",
                    "text": "646555-4567",
                    "viewtype": "editBox",
                    "info":""
                },
            ],
        },
        {
            "Id": "2",
            "name": "METER",
            "type": "Enter consumer Details",
            "stepsCount": "3",
            "Type": "Editbox",
            "Step1": [
                {
                    "type": "home",
                    "text": "212555-1234",
                    "viewtype": "editBox"
                },
                {
                    "type": "fax",
                    "text": "646555-4567",
                    "viewtype": "editBox"
                },
                {
                    "type": "fax",
                    "text": "646555-4567",
                    "viewtype": "editBox"
                },
            ],
        },
        {
            "Id": "3",
            "name": "ROUTER",
            "type": "Enter Load Profile Details",
            "stepsCount": "2",
            "Type": "Editbox",
            "Step1": [
                {
                    "type": "home",
                    "text": "212555-1234",
                    "viewtype": "editBox"
                },
                {
                    "type": "fax",
                    "text": "646555-4567",
                    "viewtype": "editBox"
                },

            ],

        },
        {
            "Id": "4",
            "name": "DTR",
            "type": "Enter Consumer Meter connectivity Details",
            "stepsCount": "2",
            "Type": "Editbox",
            "Step1": [
                {
                    "type": "home",
                    "text": "212555-1234",
                    "viewtype": "editBox"
                },
                {
                    "type": "fax",
                    "text": "646555-4567",
                    "viewtype": "editBox"
                },

            ],

        },
        {
            "Id": "5",
            "name": "TMU",
            "type": "Consumer Meter Pole Details",
            "stepsCount": "2",
            "Type": "Editbox",
            "Step1": [
                {
                    "type": "home",
                    "text": "212555-1234",
                    "viewtype": "editBox"
                },
                {
                    "type": "fax",
                    "text": "646555-4567",
                    "viewtype": "editBox"
                },

            ],

        }
    ]
    );

    const [boolean1, setBoolean1] = useState(true);
    const [boolean2, setBoolean2] = useState(false);
    const [boolean3, setBoolean3] = useState(false);
    const [boolean4, setBoolean4] = useState(false);
    const [images, setImages] = useState(true);
    const [images1, setImages1] = useState(true);
    const [images2, setImages2] = useState(true);
    const [height, setHeight] = useState(40);
    const [width, setWidth] = useState(40);
    const [index, setIndex] = useState(0);

    const [totalIntervals, setTotalIntervals] = React.useState(0);
    const scrollRef = useRef();

    const changing = () => {
        if (index == listdata.length - 1) {
            return;
        }
        else {
            scrollRef.current.scrollToIndex({
                index,
                animated: true,
                viewPosition: 0.5
            })
        } [index]
    }


    const handlechange = (index) => {
        const images = () => {
            return (
                <View style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 40, width: 40, alignSelf: 'center' }} source={tick} />
                </View>
            )
        }
        const newUsers = [...listdata];

        newUsers[index].Id = images();

        setListdata(newUsers);
    };
    {/* <AntDesign name="checkcircle" size={40} color="green" />*/ }
    
    return (
        <View style={styles.MainContainer}>
            <FlatList
                style={{ backgroundColor: 'white', height: '20%', elevation: 5, borderBottomLeftRadius: 40, flexDirection: 'row', borderBottomRightRadius: 40 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={listdata}
                renderItem={({ item, index: findex }) => {
                    return (
                        <View key={findex} style={{ margin: 25, height: findex == index ? 80 : 40, width: findex == index ? 80 : 40, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', backgroundColor: 'green', borderRadius: 40 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{item.Id}</Text>
                        </View>
                    )
                }}
            />
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ref={scrollRef}>
                <View style={styles.ScrollContainer}>
                    <Logins1 data={listdata} setData={setListdata}/>
                    <TouchableOpacity style={{
                    }} onPress={() => {
                        scrollRef.current.scrollTo({ x: screenWidth }) & setIndex(index + 1) & setBoolean1(false) & handlechange(index)
                    }}
                    >
                        <Text style={[GlobalStyles.button, { backgroundColor: 'green' }]}>{Language.InstallationButtonText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ScrollContainer1}>
                    <Logins2 data={listdata} />
                    <TouchableOpacity style={{
                    }} onPress={() => {
                        scrollRef.current.scrollTo({ x: screenWidth * 2 }) & setIndex(index + 1) & handlechange(index)
                    }}
                    >
                        <Text style={[GlobalStyles.button, { backgroundColor: 'green' }]}>{Language.InstallationButtonText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ScrollContainer1}>
                    <Logins3 data={listdata} />
                    <TouchableOpacity style={{
                    }} onPress={() => {
                        scrollRef.current.scrollTo({ x: screenWidth * 3 }) & setIndex(index + 1) & handlechange(index)
                    }}
                    >
                        <Text style={[GlobalStyles.button, { backgroundColor: 'green' }]}>{Language.InstallationButtonText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ScrollContainer1}>
                    <Logins4  data={listdata}/>
                    <TouchableOpacity style={{
                        // borderRadius: 40,
                        // alignSelf: 'center', marginBottom: 5
                    }} onPress={() => {
                        navigation.navigate('Signature', { coloring: coloring, Language: Language }) & handlechange(index) & setIndex(index + 1)
                    }}
                    >
                        <Text style={[GlobalStyles.button, { backgroundColor: 'green', }]}>{Language.InstallationButtonText}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
    },
    scrollViewContainer: {
        justifyContent: 'space-around',
        backgroundColor: 'blue',
    },
    ScrollContainer: {

        flexGrow: 1,
        marginTop: 0,
        //marginHorizontal:screenWidth
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ScrollContainer1: {

        flexGrow: 1,
        marginTop: 0,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ScrollTextContainer: {
        height: 300,
        fontSize: 20,
        padding: 15,
        color: '#000',
        textAlign: 'center',
    },
    ButtonViewContainer: {
        flexDirection: 'row',
        paddingTop: 40,
        backgroundColor: 'green',
    },
    ButtonContainer: {
        padding: 30,
    },
});






/*
import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const YourApp = () => {
  const [texting, setTexting] = useState('');
  const [listdata, setListdata] = useState([
    {
      Id: '1',
      name: 'TMU',
      type: 'Enter Meter Details',
      stepsCount: '2',
      Type: 'Editbox',
      Step1: [
        {
          id: 1,
          type: 'home',
          text: '212555-1234',
          viewtype: 'editBox',
          info: '',
        },
        {
          id: 2,
          type: 'fax',
          text: '646555-4567',
          viewtype: 'editBox',
          info: '',
        },
      ],
    },
    {
      Id: '2',
      name: 'METER',
      type: 'Enter consumer Details',
      stepsCount: '3',
      Type: 'Editbox',
      Step1: [
        {
          type: 'home',
          text: '212555-1234',
          viewtype: 'editBox',
        },
        {
          type: 'fax',
          text: '646555-4567',
          viewtype: 'editBox',
        },
        {
          type: 'fax',
          text: '646555-4567',
          viewtype: 'editBox',
        },
      ],
    },
    {
      Id: '3',
      name: 'ROUTER',
      type: 'Enter Load Profile Details',
      stepsCount: '2',
      Type: 'Editbox',
      Step1: [
        {
          type: 'home',
          text: '212555-1234',
          viewtype: 'editBox',
        },
        {
          type: 'fax',
          text: '646555-4567',
          viewtype: 'editBox',
        },
      ],
    },
    {
      Id: '4',
      name: 'DTR',
      type: 'Enter Consumer Meter connectivity Details',
      stepsCount: '2',
      Type: 'Editbox',
      Step1: [
        {
          type: 'home',
          text: '212555-1234',
          viewtype: 'editBox',
        },
        {
          type: 'fax',
          text: '646555-4567',
          viewtype: 'editBox',
        },
      ],
    },
    {
      Id: '5',
      name: 'TMU',
      type: 'Consumer Meter Pole Details',
      stepsCount: '2',
      Type: 'Editbox',
      Step1: [
        {
          type: 'home',
          text: '212555-1234',
          viewtype: 'editBox',
        },
        {
          type: 'fax',
          text: '646555-4567',
          viewtype: 'editBox',
        },
      ],
    },
  ]);
  const updatetext = (texting, i) => {
    console.log('indexing', i);
    const newthing = listdata.map((item, c) => {
      if (i === c) {
        const updateditem = {
          ...item,
          text: texting,
        };
        return updateditem;
      }
      return item;
    });
    setListdata(newthing);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ color: 'red', fontSize: 60, fontWeight: 'bold' }}>
        {listdata[0].name}
      </Text>
      {listdata[0].Step1.map((item, index) => {
        return (
          <View key={index}>
            <Text style={{ color: 'orange' }}>{index}</Text>
            <Text style={{ color: 'orange' }}>{item.type}</Text>
            <Text style={{ color: 'violet' }}>{item.text}</Text>
            <Text style={{ color: 'green' }}>helo:-{texting}</Text>
            <TextInput
              style={{ height: 50, width: 200, borderWidth: 2 }}
              onChangeText={(texting) => updatetext(texting, index)}
              editable={true}
              placeholder="useless placeholder"
              keyboardType="numeric"
            />
          </View>
        );
      })}
    </View>
  );
};

export default YourApp;
*/
/* // SOP dynamic data texting





import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const YourApp = () => {
  
  const [texting, setTexting] = useState('');
  const [listdata, setListdata] = useState([
    {
      Id: '1',
      name: 'TMU',
      type: 'Enter Meter Details',
      stepsCount: '2',
      Type: 'Editbox',
      Step1: [
        {
          id: 1,
          type: 'home1',
          text: 'text1',
          viewtype: 'editBox',
          info: '',
        },
        {
          id: 2,
          type: 'fax1',
          text: 'text2',
          viewtype: 'editBox',
          info: '',
        },
      ],
    },
    {
      Id: '2',
      name: 'METER',
      type: 'Enter consumer Details',
      stepsCount: '3',
      Type: 'Editbox',
      Step1: [
        {
          type: 'home',
          text: 'text3',
          viewtype: 'editBox',
        },
        {
          type: 'fax',
          text: 'text4',
          viewtype: 'editBox',
        },
        {
          type: 'fax',
          text: 'text5',
          viewtype: 'editBox',
        },
      ],
    },
    {
      Id: '3',
      name: 'ROUTER',
      type: 'Enter Load Profile Details',
      stepsCount: '2',
      Type: 'Editbox',
      Step1: [
        {
          type: 'home',
          text: 'text6',
          viewtype: 'editBox',
        },
        {
          type: 'fax',
          text: 'text7',
          viewtype: 'editBox',
        },
      ],
    },
    {
      Id: '4',
      name: 'DTR',
      type: 'Enter Consumer Meter connectivity Details',
      stepsCount: '2',
      Type: 'Editbox',
      Step1: [
        {
          type: 'home',
          text: 'text8',
          viewtype: 'editBox',
        },
        {
          type: 'fax',
          text: 'text9',
          viewtype: 'editBox',
        },
      ],
    },
    {
      Id: '5',
      name: 'TMU',
      type: 'Consumer Meter Pole Details',
      stepsCount: '2',
      Type: 'Editbox',
      Step1: [
        {
          type: 'home',
          text: 'text10',
          viewtype: 'editBox',
        },
        {
          type: 'fax',
          text: 'text11',
          viewtype: 'editBox',
        },
      ],
    },
  ]);
  const [texts,setTexts]=useState(listdata[0].Step1)
  console.log('.................',texts)
  const [newList, setNewList] = useState([]);
  const updatetext = (texting, i) => {
    console.log('hello', texting);
    console.log('indexing', i);
 
    const newthing = texts.map((item, index) => {
      let newStateIndex = index;
      // console.log('update new value1', index);
      // console.log('update new value1', item.text);
      // console.log('update new value2', item.type);
      // console.log('new value', listdata[0].Step1);

      if (newStateIndex === i) {
        console.log('new value', 'TRUE' +  newStateIndex);
      
        const updateditem = {
          ...item,
         text: texting,

        };
         console.log('updated item',JSON.stringify(updateditem))
        return updateditem;
      } else {
        console.log('new value', 'FALSE' +  newStateIndex);
      
      }
       return item;
    });
    setTexts(newthing);
  };

console.log
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ color: 'red', fontSize: 60, fontWeight: 'bold' }}>
        {listdata[0].name}
      </Text>
      {texts.map((item, index) => {
        console.log('hello',item.text)
        let subindex = index;
        return (
          <View key={index}>
            <Text style={{ color: 'orange' }}>{index}</Text>
            <Text style={{ color: 'orange' }}>{item.type}</Text>
            <Text style={{ color: 'violet' }}>{item.text}</Text>
            <Text style={{ color: 'green' }}>helo:-{texting}</Text>
            
            <TextInput
              style={{ height: 50, width: 200, borderWidth: 2 }}
              // onChangeText={(texting) => updatetext(texting, subindex)}
              onChangeText={(texting) => updatetext(texting, subindex)}
              value={item.text}
              editable={true}
              placeholder="useless placeholder"
              keyboardType="numeric"
            />
          </View>
        );
      })}
    </View>
  );
};
export default YourApp;
*/