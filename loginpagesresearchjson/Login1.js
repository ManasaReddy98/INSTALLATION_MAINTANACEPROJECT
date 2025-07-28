// SOP dynamic data texting

import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Logins1 = ({data}) => {
  const [texting, setTexting] = useState('');

  const [texts, setTexts] = useState(data[0].Step1);
  console.log('.................', texts);
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
        console.log('new value', 'TRUE' + newStateIndex);

        const updateditem = {
          ...item,
          text: texting,
          info: texting,
          manasa: texting,
        };
        // console.log('updated item', JSON.stringify(updateditem));
        return updateditem;
      } else {
        console.log('new value', 'FALSE' + newStateIndex);
      }
      return item;
    });
    setTexts(newthing);
  };
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ color: 'red', fontSize: 60, fontWeight: 'bold' }}>
        {data[0].name}
      </Text>
      {texts.map((item, index) => {
        console.log('hello', item.text);
        let subindex = index;
        return (
          <View key={index}>
            <Text style={{ color: 'orange' }}>{index}</Text>
            <Text style={{ color: 'orange' }}>{item.type}</Text>
            <Text style={{ color: 'violet' }}>{item.text}</Text>
            <Text style={{ color: 'green' }}>helo:-{item.info}</Text>
            <Text style={{ color: 'green' }}>helomanasa:-{item.manasa}</Text>
            <TextInput
              style={{ height: 50, width: 200,color:'red', borderWidth: 2 }}
              // onChangeText={(texting) => updatetext(texting, subindex)}
              onChangeText={(texting) => updatetext(texting, subindex)}
              value={item.text}
              editable={true}
              placeholder="useless placeholder"
            //   keyboardType="numeric"
            />
          </View>
        );
      })}
    </View>
  );
};
export default Logins1;




/*
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
var screenWidth = Dimensions.get('window').width;
const Texts = ({ placeholder }) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View>
            <TextInput
                style={{
                    borderWidth: 0, paddingLeft: 5,
                    elevation: 3, color: "#000",
                    borderRadius: 5, width: screenWidth - 50, height: 50, backgroundColor: '#fff'
                }}
                onChangeText={onChangeNumber}
                value={number}
                placeholderTextColor="#909090"
                placeholder={placeholder}
            // keyboardType="numeric"
            />
        </View>
    )
}

const Logins1 = ({ data, setData }) => {
    const [texting, setTexting] = useState('')
    const [text, setText] = useState("")
    const dataa = [{
        name: "manasa",
        name1: "change"
    },
    {
        name: "manasa1",
        name1: "change1"
    }]
    const [number, onChangeNumber] = useState(null);
    const [mappingdata, setMappingdata] = useState(data[0].Step1)
    console.log("renderednew.........  ", mappingdata)
    const updateText = (texting, i) => {
        console.log('indexforthing', i)
        const newThing = mappingdata.map((item, index) => {
            if (index === i) {
                const updatedItem = {
                    ...item,
                    info: texting
                }
                return updatedItem;

            }
            return item;

        })
        setMappingdata(newThing)
    }

    return (
        <View style={{ height: '90%' }}>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 40 }}>{data[0].name}</Text>
            <Text style={{ color: 'pink' }}>{data[0].Step1[0].type}</Text>
            {
                mappingdata.map((item, index) => {
                    return (
                        <View key={index} >
                            <Text style={{ color: 'green' }}>index:- {index}</Text>
                            <Text style={{ color: 'green' }}>type:-   {item.type}</Text>
                            <Text style={{ color: 'red' }}>text:-  {item.text}</Text>
                            <Text style={{ color: 'red' }}>info:-{item.info}</Text>
                            <TextInput
                                onChangeText={(texting) => updateText(texting,index)}
                                style={{
                                    width: 130,
                                    height: 50,
                                    borderColor: 'red',
                                    color: 'green',
                                    borderWidth: 3,
                                    marginTop: 10,
                                }}
                                value={item.text}
                                placeholder="edit"
                                placeholderTextColor="green"
                            />
                        </View>
                    )
                })
            }
        </View>
    )
}
export default Logins1;









*/
