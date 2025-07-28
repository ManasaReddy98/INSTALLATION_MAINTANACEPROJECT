import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, BackHandler, StatusBar, StyleSheet, Image } from 'react-native';
import eficaalogo from '../images/eficaa_logo.png';
import Texting from './TextInput';
import BackgroundCarousel from './BackgroundCarousel';
import { GlobalStyles } from '../appstyles/GlobalStyles';
import { English } from '../languagesettings/englishsetting';
import { Telugu } from '../languagesettings/telugusetting';
import { useTranslation } from 'react-i18next';
import '../I18nextstyling/i18n'
const images = [
    {
        name: 'Workforce management (WFM) is an integrated ',
        name1: 'set of processes that a company uses to',
        name2: 'optimize the productivity of its employees.'
    },
    {
        name: ' a workforce management solution is a means',
        name1: 'of creating schedules and tracking employee time',
        name2: 'and attendance.'
    },
    {
        name: ' Forecasting is knowing how many and the type of staff',
        name1: 'resources are needed for a particular project during',
        name2: 'of a certain time of the year such as increased seasonal'
    },
    {
        name: 'Oil level sensor is used to detect the level',
        name1: 'or supply of oil in the transformer',
        name2: 'oil sensor are used that regularly monitors the oil level.'
    },
    {
        name: 'Scheduling is a significant aspect of WFM as it allows ',
        name1: 'companiesto automate staffing based on all business,',
        name2: 'variables such as vacations, availability, workload.'
    },
]
const Configurationsetting = ({ navigation, route }) => {
    const { t: LanguageOpt, i18n } = useTranslation();

    // const { setBoolean } = route.params;
    // const backAction = () => {
    //     BackHandler.exitApp() &
    //         setBoolean(false)
    // };
    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         backAction
    //     );
    //     return () => backHandler.remove();
    // }, [])
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const changeLanguage = (lang, textlan) => {
        i18n.changeLanguage(lang);
        navigation.navigate('Login', { Language: textlan, LanguageOpt: LanguageOpt });
    };
    return (
        <View style={GlobalStyles.container}>
            <View>
                <View style={GlobalStyles.buttons}>
                    <TouchableOpacity style={GlobalStyles.touchableOpacity} onPress={() => changeLanguage('en', English)}>
                        <View style={{ width: 150, height: 50, backgroundColor: '#94eaa9', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>English</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={GlobalStyles.touchableOpacity} onPress={() => changeLanguage('te', Telugu)}>
                        <View style={{ width: 150, height: 50, backgroundColor: '#94eaa9', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>తెలుగు</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={GlobalStyles.touchableOpacity} onPress={() => navigation.navigate('Research', { Language: Telugu })}>
                        <View style={{ width: 150, height: 50, backgroundColor: '#94eaa9', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>open</Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    )
}
export default Configurationsetting;












