import React from "react";
import { View, StyleSheet, Text, Dimensions, Animated, FlatList, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get('window');

const DATA = [
    {
        TEXT: 'A uday prakash'
    },
    {
        TEXT: '24-02-1995'
    },
    {
        TEXT: '7569657386'
    },
    {
        TEXT: 'uday@gmail.com'
    },
    {
        TEXT: '********'
    },

]

const ProfilePage = ({ navigation, route }) => {
    const { LanguageOpt } = route.params;
    const translateX = -30;
    const translateY = -150;
    return (
        <View style={styles.container}>
            <View>
                <LinearGradient colors={['#C1ECE4', '#A1C2F1']} style={[styles.innerview, { transform: [{ translateX }, { translateY }] }]}>{/*'#54B435','#BFDB38'*/}


                    <Animated.View style={[styles.innerview, { transform: [{ translateX }, { translateY }] }]}>


                        <Text style={[styles.text,]}>A Uday Prakash</Text>
                    </Animated.View>
                </LinearGradient>
                <View style={styles.innersubview}>

                    <FontAwesomeIcon color={'#146C94'} name="user" size={70} />
                </View>
            </View>

            <FlatList
                data={DATA}
                keyExtractor={(index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.flatlistview}>
                            <Text style={{ color: 'grey', fontSize: 15, paddingTop: 40 }}>{item.TEXT}</Text>
                        </View>
                    )
                }} />
            <View style={{ marginTop: 20 }}>
                <LinearGradient colors={['#3795BD', '#4E31AA']} style={[styles.button]} >

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={{ fontSize: 18 }}>{LanguageOpt('Edit_Profile')}</Text>
                        </View>
                    </TouchableOpacity>

                </LinearGradient>
            </View>
            <Text></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    innerview: {
        height: height / 2,
        width: width + 60,
        borderBottomRightRadius: 320,
        borderBottomLeftRadius: 300,
        // backgroundColor:'#4E31AA','#3795BD',

    },
    innersubview: {
        height: 100,
        width: 100, borderRadius: 50,
        borderWidth: 0.5,
        borderColor: '#3795BD',
        backgroundColor: 'white',
        position: 'absolute',
        top: 220,
        left: 150,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        color: 'black',
        position: 'absolute',
        bottom: 0, right: 100
    },
    flatlistview: {
        height: 80,
        width: width - 10,
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginLeft: 20
    },
    button: {
        height: 50, width: 150,
        borderRadius: 18, justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})
export default ProfilePage;