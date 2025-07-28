import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../appstyles/GlobalStyles';

const Progress = ({ navigation, route }) => {
    const { coloring } = route.params;
    return (
        <View style={{ height: '100%', justifyContent: 'center' }}>
            <View style={{ width: 300, height: 300, alignSelf: 'center', borderRadius: 20, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
               <Image  style={{height:80,width:80}} source={require('../images/exlamatory.png')}/>
                <Text style={{ marginTop: 5 }}>verification Successful</Text>
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
                }} onPress={() => navigation.navigate('AssetInstallationProgress',{coloring:coloring})}>
                    <Text style={[GlobalStyles.button, { backgroundColor: coloring }]}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Progress;