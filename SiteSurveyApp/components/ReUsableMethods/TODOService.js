//import FetchClient from "../FetchClinets/FetchClient";
//https://www.youtube.com/watch?v=osflqro5nck
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import { withTranslation } from 'react-i18next';
import '../../I18nextstyling/i18n';
export default class TODOService {
  //   constructor(url) {
  //     this.url = url;
  //   }
  

  displayText() {
    return 'I have a ' + this.url;
  }

  async getDataFromApi(url) {
    try {
      //const url =
      // Constants.API_BASE_URL + '/' + 'Login/' + userName + '/' + passWord;
      //const url = 'http://123.176.46.19:90/api/v1/BillingDetails/0306000001';
      console.log('Consume URL :: ' + url);
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }
  async createAsset (url, body,LanguageOpt){
    console.log("#### CREATE ASSET ####");   
     //console.log("Payload", "Asset Payload " + JSON.stringify(body));
    // const req = "http://redmine.eficaa.com:81/redmine/issues/" + IsuueId + ".json";
    // console.log("Report Issue", "Request" + req);
    
   
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //"Authorization": 'Basic ' + base64.encode("sailaja.cheela@eficaa.in" + ":" + "test@1234")
        },
        body: JSON.stringify(body)
      });
       console.log(" Create Asset ", "Request URL " + url);
       const statusCode = response.status;
      console.log("Create Issue RESPONSE STATUS : " + statusCode);
      
      if (statusCode > 200 && statusCode < 400) {
        Alert.alert(LanguageOpt('Asset_saved_to_DataBase_successfully'),"",[
          {
            text: LanguageOpt('Ok'),
          }
        ]);        
      } else {
        Alert.alert("Asset not created , please try again " );
      }
       return response.json();
    
     
    } catch (error) {
      
      console.error(error);
    } finally {
      //  setLoading(false);
    }
  }

  async createUser(url, body) {
    try {
      // const url = 'http://123.176.46.19:90/api/v1/BillingDetails/0306000001';
      const response = await fetch(url, {
        Method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status == 200) {
       // let responseText = JSON.stringify(response.text());
        console.log(responseText);
        return response.json();
      }else{
        return response.status;
      }
      return response.json();
    } catch (error) {
      console.error(error);
      Alert.alert(error); // Using this line
      // if(error.){

      // }
    }
  }

  async fetchLoginUser(url) {
    try {
      // const url = 'http://123.176.46.19:90/api/v1/BillingDetails/0306000001';
      console.log('Consume URL' + url);
      const response = await fetch(url);
      return response.text();
    } catch (error) {
      console.error(error);
    }
  }
}
/*
    return fetch(req, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Basic ' + base64.encode("sailaja.cheela@eficaa.in" + ":" + "test@1234")
      },
      body: JSON.stringify(payloadTest)
    }).then(response => response.json())
      .then((responseJson) => {
        const statusCode = responseJson.status;
        console.log("Create Issue RESPONSE STATUS : " + statusCode);
        // if (statusCode > 200 && statusCode<400) {
        alert("Details Updated successfully");
        //  }  else {
        //  alert("Details not updated , please try again");
        //}      
      }).catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        throw error;
      });
    console.log("Response json Complex Data TotalPages :" + JSON.stringify(response));

    alert("Details Updated successfully");
    */
    /*
        try {
          responseData = await response.json();
        } catch (e) {
            dispatch({ type: XXX_SSSSS, service: null });
        }
        // alert("Response from server ## "+ JSON.stringify(responseJson));
        console.log("Response json Complex Data TotalPages :" + JSON.stringify(responseData));
       
        let statusCode = responseData.statusCode;
        console.log("Response Status :" + statusCode);
         if (statusCode >200 ) {
           alert("Details Updated successfully");
           
         } else {
           alert("Failed to save Details");

         }
         */

    /*
    fetch(req, {
      method: 'PUT',
      body: JSON.stringify(payloadTest),
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
        "Authorization": 'Basic ' + base64.encode("sailaja.cheela@eficaa.in" + ":" + "test@1234")
      }
    }).then(response => response.json())
      .then((responseJson) => {
        const statusCode = responseJson.status;
        console.log("Create Issue RESPONSE STATUS : " + statusCode);
        // if (statusCode > 200 && statusCode<400) {
        alert("Details Updated successfully");
        //  }  else {
        //  alert("Details not updated , please try again");
        //}      
      }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });
        */

         // var payloadTest = {
    //   "issue": {
    //     "id": IsuueId,
    //     "status_id": issueStatusId,
    //     "done_ratio": selectedWorkProgress,
    //     "notes": comments,
    //     "custom_fields": [
    //       { "id": 5, "name": "Resolution  Step1", "value": stepData1 },
    //       { "id": 6, "name": "Resolution  Step2", "value": stepData2 },
    //       { "id": 7, "name": "Resolution  Type", "value": selectedResolutionType }
    //     ]
    //   }
    // }
