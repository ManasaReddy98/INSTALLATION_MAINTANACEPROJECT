//import FetchClient from "../FetchClinets/FetchClient";
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
import {LogMessages} from '../LogManager/LogMessages';

//https://www.youtube.com/watch?v=osflqro5nck
export default class TODOService {
  //   constructor(url) {
  //     this.url = url;
  //   }

  displayText() {
    return 'I have a ' + this.url;
  }

  async AuthenticatorService(url, token) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        console.log('ERROR ###### ' + error);

        Alert.alert(' User credentials not matched, Please try again ');
      }
      const data = await response.json();
      console.log('Response ### :', LogMessages.CODE_HTTP_200_LOG_MESSAGE);
      return {data: data, status: response.status}; // Return the data to the calling code
    } catch (error) {
      if (error.response && error.response.status === 500) {
        Alert.alert(' User credentials not matched, Please try again ');
      } else {
        Alert.alert(' User credentials not matched, Please try again ');
        // Alert.alert(error.message); // Set error message from the caught error
      }
      throw error; // Throw the error to the calling code for handling
    }
  }

  async getDataFromApi(url, token) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        console.log('ERROR ###### ' + error);

        Alert.alert(' User credentials not matched, Please try again ');
      }
      const data = await response.json();
      console.log('Response ### :', LogMessages.CODE_HTTP_200_LOG_MESSAGE);
      return {data: data, status: response.status}; // Return the data to the calling code
    } catch (error) {
      // Alert.alert('Error ' + error);
      // if (error.response && error.response.status === 500) {
      // } else {
      //   // Alert.alert('Server Unreachable , please try again later ');
      //   // Alert.alert(error.message); // Set error message from the caught error
      // }
      // throw error; // Throw the error to the calling code for handling
    }
  }

  async createConsumerUser(url, body) {
    console.log('#### CREATE ASSET ####');
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
        body: JSON.stringify(body),
      });
      // console.log(" Create Consumer ", "Request URL " + url);
      const statusCode = response.status;
      console.log('Create Consumer RESPONSE STATUS : ' + statusCode);

      // if (statusCode > 200 && statusCode < 400) {
      //   Alert.alert("Consumer  saved to database successfully");
      // } else {
      //   Alert.alert("Consumer not created , please try again " );
      // }
      const data = await response.json();
      console.log(
        'Response Data  ### : ',
        LogMessages.CODE_HTTP_200_LOG_MESSAGE,
        JSON.stringify(data),
      );
      return {data: data, status: response.status};
    } catch (error) {
      console.error(error);
    } finally {
      //  setLoading(false);
    }
  }

  async createUser(url, body) {
    try {
      // const url = 'http://123.176.46.19:90/api/v1/BillingDetails/0306000001';
      console.log('URL Create User ### : ', 'CREATE USER API RAISED ');
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response ### : ', JSON.stringify(response));
      const data = await response.json();
      console.log(
        'Response Data  ### : ',
        LogMessages.CODE_HTTP_200_LOG_MESSAGE,
        JSON.stringify(data),
      );
      return {data: data, status: response.status};
      // return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async createAPIFunction(url, body, token) {
    try {
      console.log(
        'URL GIVEN',
        'URL GIVEN ####### ' + 'CREATE USER API RAISED ' + url,
      );
      console.log(
        'URL GIVEN',
        'URL GIVEN ####### ' + 'CREATE USER API RAISED ' + JSON.stringify(body),
      );
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Response Data  ### : ', response.status);
      console.log('Response Data  ### : ', JSON.stringify(data));
      return {data: data, status: response.status};
    } catch (error) {
      console.error(error);
    }
  }

  async fetchLoginUser(url) {
    try {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdGluZyIsIm5iZiI6MTcwODMyNzc5MiwiZXhwIjoxNzA4NDM1NzkyLCJpYXQiOjE3MDgzMjc3OTIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5OSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5OSJ9.oG45xr9GF2tzJ2Y81CVE3YmUo9Im3lIXJ_LxkNBtN9U';

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const responseStatus = response.status;
      // console.log('Response Data  ### : ', responseStatus);
      const data = await response.text();
      console.log(
        'Response Data  ### : ',
        LogMessages.CODE_HTTP_200_LOG_MESSAGE,
      );
      return {data: data, status: response.status};
      // return data; // Return the data to the calling code
    } catch (error) {
      throw error; // Throw the error to the calling code for handling
    }
  }

  async fetchLoginUser_withoutToken(url) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //   Authorization: `Bearer ${token}`,
        },
      });
      const responseStatus = response.status;
      // console.log('Response Data  ### : ', responseStatus);
      const data = await response.json();
      console.log(
        'Response Data  ### : ',
        LogMessages.CODE_HTTP_200_LOG_MESSAGE,
      );
      return {data: data, status: response.status};
      // return data; // Return the data to the calling code
    } catch (error) {
      throw error; // Throw the error to the calling code for handling
    }
  }

  async saveLoginUserwithoutToken(url, body) {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdGluZyIsIm5iZiI6MTcwODMyNzc5MiwiZXhwIjoxNzA4NDM1NzkyLCJpYXQiOjE3MDgzMjc3OTIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5OSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5OSJ9.oG45xr9GF2tzJ2Y81CVE3YmUo9Im3lIXJ_LxkNBtN9U';
    try {
      console.log(' URL GIVEN ', ' URL GIVEN LOGIN REQUEST RAISED ####### ');
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          //  Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data  ### : ', response.status);
      const data = await response.json();
      console.log(
        'Response Data  ### : ',
        LogMessages.CODE_HTTP_200_LOG_MESSAGE,
      );
      return {data: data, status: response.status};
    } catch (error) {
      console.error(error);
    }
  }

  async createAsset(url, body) {
    console.log('#### CREATE ASSET API CALLING  ####');
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
        body: JSON.stringify(body),
      });
      console.log(' Create Asset ', 'Request URL ' + url);
      const statusCode = response.status;
      console.log('Create Issue RESPONSE STATUS : ' + statusCode);

      // if (statusCode >= 200 && statusCode < 400) {
      //   // Alert.alert("Asset  saved to database successfully");

      //   Alert.alert(
      //     'ALERT ..!',
      //     'Asset  saved to database successfully',
      //     [
      //       // {
      //       //   text: 'Cancel',
      //       //   style: 'cancel',
      //       // },
      //       {
      //         text: 'OK',
      //        // onPress: () => navigation.navigate('Asset'), // Navigate to Details screen
      //       },
      //     ]
      //   );
      // } else {
      //   Alert.alert("Asset not created , please try again " );
      // }
      return response.json();
    } catch (error) {
      console.error(error);
    } finally {
      //  setLoading(false);
    }
  }
}
