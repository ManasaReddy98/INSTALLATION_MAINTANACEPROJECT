import React from 'react'
//import axios from 'axios';
import { Constants } from '../Constants/Constants';
//import API_BASE_URL from '../Constants/Constants';
//import { baseUrl } from '../ApiHelpers/apihelpers';
//import syncStorage from '@react-native-community/async-storage';
//import SyncStorage from 'sync-storage';
//const data = await SyncStorage.init();
//import { Colours } from '../../app/ColourTheming/ColourPallette';
export const MainFunctions = {
   // colourThemeSelction,
    LanguageSelection
};

/*
function colourThemeSelction(selectedColour) {
    let selectedbg;
    if (selectedColour == Colours.colour1) {
        selectedbg = require('../../images/curve_blue.png')
        
    } else if (selectedColour == Colours.colour2) {
        selectedbg = require('../../images/curve_orange.png')
    } else if (selectedColour == Colours.colour3) {
        selectedbg = require('../../images/curve_light_blue.png')
    } else if (selectedColour == Colours.colour4) {
        selectedbg = require('../../images/curve_purple.png')
    } else if (selectedColour == Colours.colour5) {
        selectedbg = require('../../images/curve_pink.png')
    } else if (selectedColour == Colours.colour6) {
        selectedbg = require('../../images/curve_green.png')
    }
    return selectedbg;
}*/






function LanguageSelection(selectedLanguage) {
    let selectedLanguageData;
    if (selectedLanguage == "Telugu") {
        selectedLanguageData="Telugu"
        
    } else if (selectedLanguage == "English") {
        selectedLanguageData="English";

    }else if (selectedLanguage == "Tamil") {
        selectedLanguageData="Tamil";
        
    }
    return selectedLanguageData;

}

/*
export function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
*/


/*
export const UserService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete

};*/