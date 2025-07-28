import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const Complaints = ({navigation, route}) => {
  const {
    LanguageOpt,
    Language,
    resourceid,
    resourceName,
    resourceMobileNumber,
  } = route.params;
  const [resourceidd, setResourceidd] = useState('');

  const [dropdowncomplaintname, setDropdowncomplaintname] = useState('');
  const [dropdownunique, setDropdownunique] = useState('');
  const [responsemessage, setResponsemessage] = useState('');
  const [errors, setErrors] = useState({});
  const assettypesData = ['METER', 'TMU', 'ROUTER', 'DCU'];

  useEffect(() => {
    setResourceidd(resourceid);
  }, [resourceid]);
  const [dropdownKey, setDropdownKey] = useState(0);

  const [complaintnames, setComplaintnames] = useState([]);

  const [currentDateTime, setCurrentDateTime] = useState('');

  const [selectedAssetDataFRrmDB, setSelectedAssetDataFRrmDB] = useState('');
  const [dropdownselectedAssetId, setDropdownAssetID] = useState('');
  const [selectedAssettypeName, setSelectedAssetTypeName] = useState('');

  useEffect(() => {
    // Function to get the current date and time
    const updateDateTime = () => {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
      const year = currentDate.getFullYear();
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');

      setCurrentDateTime(
        `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
      );
    };

    // Update every second
    const timer = setInterval(updateDateTime, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);
  const [complainttypeError, setComplainttypeError] = useState('');
  const [uniserno, setUniserno] = useState('');

  const [assetId, setAssetId] = useState('');

  const [complaintId, setComplaintId] = useState('');

  const [complaintType, setComplaintType] = useState('');
  const [description, setDescription] = useState('');
  const [complaintRaisedOn, setComplaintRaisedOn] = useState('');
  const [complaintTypes, setComplaintTypes] = useState([]);
  const [complaintDropdownId, setDropdowncomplaintID] = useState();
  //setDropdowncomplaintID;

  useEffect(() => {
    console.log('selected asset type name' + selectedAssettypeName);
    if (selectedAssettypeName == 'METER') {
      fetchAssettypesDataSelected(
        'http://mapp.eficaa.com:8080/EMap_WebIntegrator_ms/meterdata/MeterDetails',
      );
    } else if (selectedAssettypeName == 'TMU') {
      fetchAssettypesDataSelected(
        'http://mapp.eficaa.com:8080/EMap_WebIntegrator_ms/tmudata/TmuDetails',
      );
    } else if (selectedAssettypeName == 'DCU') {
      fetchAssettypesDataSelected(
        'http://mapp.eficaa.com:8080/EMap_WebIntegrator_ms/dcudata/Dcudetails',
      );
    } else if (selectedAssettypeName == 'ROUTER') {
      fetchAssettypesDataSelected(
        'http://mapp.eficaa.com:8080/EMap_WebIntegrator_ms/routerdata/routerdetails',
      );
    }
  }, [selectedAssettypeName]);

  const fetchAssettypesDataSelected = async url => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      // Ensure `result` is an array
      if (Array.isArray(result)) {
        console.log(result);
        setComplaintTypes(result);
        const assetsdata = result.map(item => item.assetId);
        console.log('Extracted assetTypes:', assetsdata);
        setSelectedAssetDataFRrmDB(assetsdata);
      } else {
        throw new Error('Expected an array in the response');
      }
    } catch (error) {
      console.error('Error fetching  type:', error.message);
      // setComplainttypeError(error.message);
    }
  };

  const fetchComplaintsType = async () => {
    try {
      const response = await fetch(
        'http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/ComplaintTypesdata/ComplaintTypes',
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      // Ensure `result` is an array
      if (Array.isArray(result)) {
        console.log(result);
        setComplaintTypes(result);
        const complaintNames = result.map(item => item.complaintName);
        console.log('Extracted assetTypes:', complaintNames);
        setComplaintnames(complaintNames);
      } else {
        throw new Error('Expected an array in the response');
      }
    } catch (error) {
      console.error('Error fetching complaints type:', error.message);
      setComplainttypeError(error.message);
    }
  };
  useEffect(() => {
    fetchComplaintsType();
  }, []);
  const [uniqueserviceno, setUniqueserviceno] = useState([]);
  const servicedetails = async () => {
    try {
      const response = await fetch(
        'http://mapp.eficaa.com:8080/Eam_Instalation_v1.0/Servicedata/Servicedetails',
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      // Ensure `result` is an array
      if (Array.isArray(result)) {
        console.log(result);
        const uniqueServiceNos = result.map(item => item.uniqueServiceNo);
        console.log('Extracted uniqueServiceNos:', uniqueServiceNos);
        setUniqueserviceno(uniqueServiceNos);
      } else {
        throw new Error('Expected an array in the response');
      }
    } catch (error) {
      console.error('Error fetching complaints type:', error.message);
      setComplainttypeError(error.message);
    }
  };

  useEffect(() => {
    servicedetails();
  }, []);

  const handlePostrequest = async () => {
    const validationErrors = {};

    if (!dropdowncomplaintname) {
      validationErrors.complaintNameError = LanguageOpt('Complaint_Name_error');
    }
    if (!dropdownunique) {
      validationErrors.uniqueerror = LanguageOpt('Uni_Ser_Numb_error');
    }
    if (!dropdownselectedAssetId) {
      validationErrors.assetiderror = LanguageOpt('AssetId_error');
    }
    if (!description) {
      validationErrors.descriptionerror = LanguageOpt('description_error');
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      // console.warn("Validation errors found. Aborting post request.");
      return;
    }
    const complaintidd = complaintTypes.find(
      item => item.complaintName == dropdowncomplaintname,
    );
    try {
      const url =
        'http://mapp.eficaa.com:8080/EAM_Maintanance_V1.0/complaintData/addcomplaints';
      // http://172.16.15.24:8080/Eam_Instalation_v1.0/complaintData/ComplaintsDetails get
      console.log('Complaints URL' + url);
      const data = {
        uniqueServiceNo: dropdownunique,
        complaintRaisedBy: resourceid,
        assetId: dropdownselectedAssetId,
        complaintId: complaintDropdownId, //complaintidd.complaintId,
        complaintType: 'CON_000048',
        description: description,
        complaintRaisedOn: currentDateTime,
        status: 'CON_000062',
      };
      console.log('Complaints URL' + JSON.stringify(data));
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        Alert.alert(LanguageOpt('comp_raised_successfully'), '', [
          {
            text: LanguageOpt('ok'),
            onPress: () => {
              // navigation.navigate('MainAppDashboard', {
              //   Language: route.params.Language,
              //   resourceName: route.params.resourceName,
              //   LanguageOpt: route.params.LanguageOpt,
              //   resourceId: route.params.resourceId,
              //   resourceMobileNumber: route.params.resourceMobileNumber,
              // });

              navigation.navigate('MainAppDashboard', {
                Language: Language,
                resourceName: resourceName,
                LanguageOpt: LanguageOpt,
                resourceId: resourceid,
                resourceMobileNumber: resourceMobileNumber,
              });
            },
          },
        ]);
        const jsonResponse = await response.json();
        console.log('jsonResponse', jsonResponse);
        setResponsemessage('Response:' + JSON.stringify(jsonResponse));
      } else {
        // setResponsemessage('Failed to send data');
        console.log('Failed to send data');
      }
    } catch (error) {
      setResponsemessage(error.message);
      console.log('catch', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}>
      <Text style={styles.label}>
        {' '}
        {LanguageOpt('Todays_Date')}: {currentDateTime}
      </Text>
      <Text style={styles.label1}> {LanguageOpt('Se_Comp_Name')}:</Text>
      <SelectDropdown
        key={dropdownKey}
        data={complaintnames}
        onSelect={(selectedItem, index) => {
          setDropdowncomplaintname(selectedItem);
          setDropdowncomplaintID(index + 1);
        }}
        defaultButtonText={LanguageOpt('Comp_Name')}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return (
            <FontAwesome
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={'#444'}
              size={18}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />

      {errors.complaintNameError && (
        <Text style={{color: 'red'}}> {errors.complaintNameError}</Text>
      )}

      <View>
        <Text style={styles.label1}> {LanguageOpt('select_assettype')}:</Text>
        <SelectDropdown
          key={dropdownKey}
          data={assettypesData}
          onSelect={(selectedItem, index) => {
            setSelectedAssetTypeName(selectedItem);
          }}
          defaultButtonText={LanguageOpt('assetype')}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={18}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </View>

      <View>
        <Text style={styles.label1}> {LanguageOpt('uniqueServiceNo')}:</Text>
        <SelectDropdown
          key={dropdownKey}
          data={uniqueserviceno}
          onSelect={(selectedItem, index) => {
            setDropdownunique(selectedItem);
          }}
          defaultButtonText={LanguageOpt('uniqueServiceNo')}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={18}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </View>
      {errors.uniqueerror && (
        <Text style={{color: 'red'}}> {errors.uniqueerror}</Text>
      )}
      <View>
        <Text style={styles.label1}> {LanguageOpt('assetid')}:</Text>

        {/* <TextInput
          style={styles.inputlabel}
          placeholder={LanguageOpt('assetid')}
          multiline={true}
          maxLength={20} // Restrict input length to 15 characters
          value={assetId}
          onChangeText={text => {
            setAssetId(text);
          }}
        /> */}

        <SelectDropdown
          key={dropdownKey}
          data={selectedAssetDataFRrmDB}
          onSelect={(selectedItem, index) => {
            setDropdownAssetID(selectedItem);
          }}
          defaultButtonText={LanguageOpt('assetid')}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={18}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
        <Text style={styles.label2}> (Ex : DTR-202402-000000001) </Text>
      </View>
      {errors.assetiderror && (
        <Text style={{color: 'red'}}> {errors.assetiderror}</Text>
      )}

      <Text style={styles.label1}> {LanguageOpt('Iss_Des')}:</Text>
      <TextInput
        style={styles.input}
        placeholder={LanguageOpt('Iss_Des')}
        onChangeText={text => setDescription(text)}
        multiline={true}
        value={description}
      />
      {errors.descriptionerror && (
        <Text style={{color: 'red'}}> {errors.descriptionerror}</Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handlePostrequest()}
          style={styles.button}>
          <Text style={styles.buttonText}>
            {LanguageOpt('Raise_complaint')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{LanguageOpt('Cancel')}</Text>
        </TouchableOpacity>
      </View>
      <Text> </Text>
    </ScrollView>
  );
};

export default Complaints;

const styles = StyleSheet.create({
  label: {
    color: '#18253f',
    marginTop: 30,
    marginBottom: 8, // Adds some space between label and input/dropdown
    // marginLeft: 15,  // Ensures the label and input align horizontally
  },
  label1: {
    color: '#18253f',
    marginTop: 20,
    marginBottom: 8, // Adds some space between label and input/dropdown
    // marginLeft: 15,  // Ensures the label and input align horizontally
  },
  label2: {
    color: '#18253f',
    fontSize: 10,
    marginTop: 5,
    marginBottom: 8, // Adds some space between label and input/dropdown
    // marginLeft: 15,  // Ensures the label and input align horizontally
  },
  dropdown1BtnStyle: {
    // width: '95%',
    // height: 50,
    // backgroundColor: '#fff',
    // borderRadius: 8,
    // borderWidth: 1,
    // borderColor: '#c4c4c4',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    opacity: 0.74,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#909090',
    // marginBottom: 20,
    marginLeft: 15, // Aligns with the label
  },
  dropdown1BtnTxtStyle: {
    color: '#909090',
    textAlign: 'left',
    // color: '#000',
    // textAlign: 'left',
    // fontSize: 15,
    // fontWeight: '400',
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#ffffff',
  },
  dropdown1RowStyle: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {
    color: '#909090',
    textAlign: 'left',
  },
  input: {
    paddingLeft: 10,
    paddingTop: 4,
    color: '#909090',
    // marginHorizontal: 10, // Matches the dropdown alignment
    borderRadius: 8,
    textAlignVertical: 'top',
    height: 150,
    // marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#909090',
  },
  inputlabel: {
    paddingLeft: 10,
    color: '#909090',
    borderRadius: 8,
    // marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#909090',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: DEVICE_HEIGHT * 0.03,
  },
  button: {
    width: DEVICE_WIDTH * 0.32,
    borderRadius: 20,
    height: DEVICE_HEIGHT * 0.06,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
