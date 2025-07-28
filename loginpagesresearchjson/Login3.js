// SOP dynamic data texting

import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Logins2 = ({data}) => {
  const [texting, setTexting] = useState('');

  const [texts, setTexts] = useState(data[2].Step1);
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
        {data[2].name}
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
export default Logins2;
