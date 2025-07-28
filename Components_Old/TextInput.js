import React,{useState} from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../appstyles/GlobalStyles';


const Textinput = (props) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View style>
            <TextInput
                style={GlobalStyles.input1}
                onChangeText={onChangeNumber}
                value={number}
                placeholderTextColor="#909090"
                placeholder={props.placeholder}
            // keyboardType="numeric"
            />
        </View>
    )
}

export default Textinput;