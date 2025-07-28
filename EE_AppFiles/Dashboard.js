import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import image1 from '../EE_images/normal_bg.jpg';

const Dashboard = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => navigation.navigate('RoomsDashboard', { color: 'green' ,image:image1})}>
                    <View style={{ height: 150, width: 150, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black' }}>green</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RoomsDashboard', { color: 'red' })}>
                    <View style={{ height: 150, width: 150, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black' }}>red</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row',marginTop:50, alignItems: 'center', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => navigation.navigate('RoomsDashboard', { color: 'pink' })}>
                    <View style={{ height: 150, width: 150, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ color: 'black' }}>pink</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RoomsDashboard', { color: 'violet' })}>
                    <View style={{ height: 150, width: 150, backgroundColor: 'violet', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black' }}>violet</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Dashboard;
