import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import Headerbar from '../EE_Helpers/Headerbar';
import IconBadge from 'react-native-icon-badge';
import Item1 from './Item1';
import Item2 from './Item2';



const image1 = require('../EE_images/outerlivingroom.png')
const image2 = require('../EE_images/Bedroom.png')
const image3 = require('../EE_images/dining.png')
const image4 = require('../EE_images/kidsroom.png')
const image5 = require('../EE_images/Kitchen.png')
const image6 = require('../EE_images/sun.png')
const image7 = require('../EE_images/cloud.png')
const image8 = require('../EE_images/Washroom.png')
const image9 = require('../EE_images/lobby.png')
const image10 = require('../EE_images/Balcony1.png')
const image11 = require('../EE_images/guestbedroom.png')
const image12 = require('../EE_images/garrage.png')
const image13 = require('../EE_images/studyroom.png')

const image14 = require('../EE_images/washarea.png')
const image15 = require('../EE_images/hometheatre.png')
const image16 = require('../EE_images/innerlivingroom.png')



const icon1 = require('../EE_images/fan.png')
const icon2 = require('../EE_images/light.png')

const icon3 = require('../EE_images/telephone.png')
const icon4 = require('../EE_images/tv.png')
const icon5=require('../EE_images/fridgee.png')





const RoomsDashboard = ({ navigation, route }) => {
    const [boolean, setBoolean] = useState(true)
    const [badgeCount, setBadgeCount] = useState(20);
    const [livingRoomData, setLivingRoomData] = useState([
        {
            id: 1,
            image: image1,
            name1: 'OuterLiving',
            name2: 'Room',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            count: 20,
            boolean: true
        },
        {
            id: 2,
            image: image16,
            name1: 'InnerLiving',
            name2: 'Room',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            count: 20,
            boolean: true
        },
        {
            id: 3,
            image: image2,
            name1: 'Master',
            name2: 'BedRoom',
            sun: image6,
            celcius: '30°',
            cloud: image7,

            count: 30,
            boolean: true
        },
        {
            id: 4,
            image: image3,
            name1: 'Dining',
            name2: 'Room',
            sun: image6,
            celcius: '30°',
            cloud: image7,

            count: 40,
            boolean: true
        },
        {
            id: 5,
            image: image4,
            name1: 'Kids',
            name2: 'Room',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            names: 'file',
            count: 50,
            boolean: true
        },
        {
            id: 6,
            image: image5,
            name1: 'Kitchen',
            name2: 'Room',
            sun: image6,
            celcius: '30°',
            cloud: image8,
            names: 'vs code',
            count: 60,
            boolean: true

        },
        {
            id: 7,
            image: image8,
            name1: 'Wash',
            name2: 'Room',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            names: 'vs code',
            count: 60,
            boolean: true

        },
        {
            id: 8,
            image: image9,
            name1: 'Lobby',
            name2: 'Room',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            names: 'vs code',
            count: 60,
            boolean: true

        },
        {
            id: 9,
            image: image10,
            name1: 'Balcony',
            name2: '',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            names: 'vs code',
            count: 60,
            boolean: true

        },
        {
            id: 10,
            image: image11,
            name1: 'Guest',
            name2: 'Bedroom',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            names: 'vs code',
            count: 60,
            boolean: true

        },
        {
            id: 11,
            image: image12,
            name1: 'Garrage',
            name2: '',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            names: 'vs code',
            count: 60,
            boolean: true

        },
        {
            id: 12,
            image: image13,
            name1: 'study',
            name2: 'room',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            names: 'vs code',
            count: 60,
            boolean: true

        },
        {
            id: 13,
            image: image14,
            name1: 'wash',
            name2: 'area',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            names: 'vs code',
            count: 60,
            boolean: true

        },
        {
            id: 14,
            image: image15,
            name1: 'Home',
            name2: 'Theatre',
            sun: image6,
            celcius: '30°',
            cloud: image7,
            names: 'vs code',
            count: 60,
            boolean: true

        },
    ])
    const [outerlivingroom, setOuterlivingroom] = useState([
        {
            name: 'fan',
            images: icon1,
            boolean: true,
        },
        {
            name: 'light',
            images: icon2,
            boolean: true,
        },
        {
            name: 'telephone',
            images: icon3,
            boolean: true,
        },
      
    ])
    const [innerlivingroom, setInnerlivingroom] = useState([
        {
            name: 'sofa',
            images: icon1,
            boolean: true,
            reasons: {
                "sport": true
            }
        },
        {
            name: 'light',
            images: icon2,
            boolean: true,
            reasons: {
                "sport": true
            },
        },
        {
            name: 'tv',
            images: icon4,
            boolean: true,

        },
        {
            name: 'fridge',
            images: icon5,
            boolean: true,
        }
    ])
    const handlechange = (index) => {
        const newone = [...livingRoomData]
        newone[index].count = 0
        newone[index].boolean = !boolean
        setLivingRoomData(newone)
    }
    const hek = (index) => {
        const newone = [...outerlivingroom]
        newone[index].boolean = !index.boolean
        setOuterlivingroom(newone)
    }

    const { color } = route.params;
    const setChange = (item) => {
        if (item.id == 1) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1, })
        }
        if (item.id == 2) {
            navigation.navigate('Item1', { Data: innerlivingroom, datas: image16 })
        }
        if (item.id == 3) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }

        if (item.id == 4) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
        if (item.id == 5) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
        if (item.id == 6) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
        if (item.id == 7) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
        if (item.id == 8) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
        if (item.id == 9) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
        if (item.id == 10) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
        if (item.id == 11) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
        if (item.id == 12) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
        if (item.id == 13) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
        if (item.id == 14) {
            navigation.navigate('Item1', { Data: outerlivingroom, datas: image1 })
        }
    }
    return (
        <View style={{ height: '100%', backgroundColor: '#e6e7fd' }}>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, flexDirection: 'row' }}>
                <Text style={{ color: 'black' }}>Home</Text>
                <TouchableOpacity>
                    <Image style={{ height: 30, width: 30, marginLeft: 10, borderRadius: 30 }} source={require('../EE_images/downarrow.png')} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View>
                    {
                        livingRoomData.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => setChange(item)}>
                                    <View key={index} style={{ marginVertical: 10, flexDirection: 'row', padding: 15, backgroundColor: '#ffffff', marginHorizontal: 20, borderRadius: 5 }}>
                                        <Image style={{ height: 100, alignSelf: 'center', width: 100, borderRadius: 10 }} source={item.image} />
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={{ color: 'black', marginLeft: 5, marginTop: 5 }}>{item.name1}</Text>
                                            <Text style={{ color: 'black', marginLeft: 5, }}>{item.name2}</Text>

                                            <View style={{ flexDirection: 'row' }}>
                                                <View>
                                                    <Image style={{ height: 30, width: 30, marginTop: 10, borderRadius: 10 }} source={item.sun} />
                                                    <Text style={{ marginLeft: 5, color: 'black' }}>{item.celcius}</Text>
                                                </View>
                                                <View style={{
                                                    borderStyle: 'dashed',
                                                    borderWidth: 1,
                                                    height: 35, marginTop: 20, marginLeft: 5
                                                }}></View>
                                                <View style={{ marginLeft: 5 }}>
                                                    <Image style={{ height: 30, width: 30, marginTop: 10, borderRadius: 10 }} source={item.cloud} />
                                                    <Text style={{ marginLeft: 5, color: 'black' }}>{item.celcius}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: 15 }}>
                                            <View>
                                                <TouchableOpacity>
                                                    {(() => {
                                                        if (item.boolean == true) {
                                                            return (
                                                                <View>
                                                                    <IconBadge
                                                                        MainElement={
                                                                            <View
                                                                                style={{
                                                                                    height: 53,

                                                                                    width: 90,
                                                                                    backgroundColor: '#c2ea98',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    borderRadius: 10,
                                                                                }}>
                                                                                <Text style={{ color: 'black' }}>ALL ON</Text>
                                                                            </View>
                                                                        }
                                                                        BadgeElement={<Text style={{ color: '#FFFFFF' }}>{item.count}</Text>}
                                                                        IconBadgeStyle={{
                                                                            width: 20,
                                                                            height: 20, position: 'absolute', right: -4, top: -2,
                                                                            backgroundColor: '#484e6a',
                                                                        }}
                                                                    />
                                                                </View>
                                                            );
                                                        } else {
                                                            return (
                                                                <View
                                                                    style={{
                                                                        height: 53,

                                                                        width: 90,
                                                                        backgroundColor: '#c2ea98',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        borderRadius: 10,
                                                                    }}>
                                                                    <Text style={{ color: 'black' }}> ALL ON</Text>
                                                                </View>
                                                            );
                                                        }
                                                    })()}

                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => handlechange(index)}>
                                                    <View
                                                        style={{
                                                            height: 53,
                                                            marginTop: 5,
                                                            width: 90,
                                                            backgroundColor: '#eee',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderRadius: 10
                                                        }}>

                                                        <Text style={{ color: 'black' }}>OFF</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>

                                        </View>

                                    </View>

                                </TouchableOpacity>

                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}
export default RoomsDashboard;
const styles = StyleSheet.create({
    viewStyle: {
        height: 50, width: 50, marginHorizontal: 5, backgroundColor: '#fff', borderRadius: 10
    }
})