import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions, BackHandler, StatusBar, StyleSheet, Image } from 'react-native';
import eficaalogo from '../../images/eficaa_logo.png';
import { GlobalStyles } from '../../appstyles/GlobalStyles';
const { width: screenWidth } = Dimensions.get('window');
import { useTranslation } from 'react-i18next';
import '../../I18nextstyling/i18n'




const Configurationsetting = ({ navigation, route }) => {
    const { t:LanguageOpt, i18n } = useTranslation();
    const fontSize = screenWidth > 400 ? 24 : 20; // Larger font for larger screens
    const buttonWidth = screenWidth * 0.7; // Button width is 40% of screen width

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        navigation.navigate('Login',{LanguageOpt:LanguageOpt});
    };
    return (
        <View style={GlobalStyles.container}>
            <View>
                <View style={GlobalStyles.buttons}>
                    <TouchableOpacity style={[GlobalStyles.touchableOpacity, { width: buttonWidth }]} onPress={() => changeLanguage('en')}>
                        <Text style={[GlobalStyles.text, { fontSize }]}>English</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[GlobalStyles.touchableOpacity, { width: buttonWidth }]} onPress={() => changeLanguage('te')}>
                        <Text style={[GlobalStyles.text, { fontSize }]}>తెలుగు</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Configurationsetting;












