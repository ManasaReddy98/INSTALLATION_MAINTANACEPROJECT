import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import eficaalogo from '../images/eficaa_logo.png'


function SplashScreen({ navigation }) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0)
    // const [boolean, setBoolean] = useState(true)



    setTimeout(() => {
        navigation.navigate('Configurationsetting')
    },3000)
    // {
    //     boolean == true &&
    //     useEffect(() => {
    //         const timer = setTimeout(() => {
    //             setWidth((width) => width + 1);
    //             setHeight((height) => height + 1);
    //         },);
    //         return () => clearTimeout(timer);
    //     });
    // }
    // useEffect(() => {
    //     if (width == 150 && height == 150) {
    //         navigation.navigate('Configurationsetting', { setBoolean: setBoolean })
    //     }
    // })
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{ width, height }}
                source={eficaalogo}
            />
        </View>
    );
}
export default SplashScreen;