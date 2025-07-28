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

const Logins4 = ({ data }) => {
    const [texts, setTexts] = useState(data[3].Step1);
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
    const dataa = [{
        name: "manasa",
        name1: "change"
    },
    {
        name: "manasa1",
        name1: "change1"
    }]
    const [number, onChangeNumber] = useState(null);
    return (
        <View style={{ height: '90%' }}>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 40 }}>{data[3].name}</Text>
            {
                texts.map((item, index) => {
                    return (
                        <View key={index} style={{ justifyContent: 'space-between' }}>
                            <Text style={{ color: 'green' }}>type:-   {item.type}</Text>
                            <Text style={{ color: 'red' }}>text:-  {item.text}</Text>
                            <Text style={{ color: 'red' }}>viewtype:-   {item.viewtype}</Text>
                            <TextInput
                                style={{ height: 50, width: 200, color: 'red', borderWidth: 2 }}
                                // onChangeText={(texting) => updatetext(texting, subindex)}
                                onChangeText={(texting) => updatetext(texting, index)}
                                value={item.text}
                                editable={true}
                                placeholder="useless placeholder"
                            // keyboardType="numeric"
                            />
                        </View>
                    )
                })
            }
        </View>
    )
}
export default Logins4;








