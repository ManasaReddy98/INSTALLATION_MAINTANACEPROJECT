import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../appstyles/GlobalStyles';

const Progress = ({ navigation, route }) => {
    const { coloring, Language } = route.params;
    return (
        <View style={{ height: '100%', justifyContent: 'center' }}>
            <View style={{ width: 300, height: 300, alignSelf: 'center', borderRadius: 20, backgroundColor: '#fff', alignItems: 'center' }}>
                <Text style={{ color: 'black', marginTop: 50 }}>{Language.veriificationsuccessfulltext}</Text>
                <Image style={{ height: 80, width: 80, marginTop: 30 }} source={require('../images/exlamatory.png')} />
                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: 20,
                    height: 80,
                    alignSelf: 'center',
                    marginTop: 5,
                    width: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15
                }} onPress={() => navigation.navigate('AssetInstallationProgress', { coloring: coloring, Language: Language })}>
                    <Text style={[GlobalStyles.button, { backgroundColor: coloring }]}>{Language.savebutton}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Progress;