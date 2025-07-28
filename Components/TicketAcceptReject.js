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

const TicketAcceptReject = ({navigation, route}) => {
  const {
    LanguageOpt,
    Language,
    resourceId,
    resourceName,
    item,
    resourceMobileNumber,
    processType,
  } = route.params;
  const [resourceidd, setResourceidd] = useState('');
  const [assetId, setAssetId] = useState('');
  const [processID, setProcessID] = useState('');
  const [dropdowncomplaintname, setDropdowncomplaintname] = useState('');
  const [dropdownunique, setDropdownunique] = useState('');
  const [responsemessage, setResponsemessage] = useState('');
  const [error, setError] = useState();
  const assettypesData = ['METER', 'TMU', 'ROUTER', 'DCU'];

  useEffect(() => {
    setResourceidd(resourceId);
    setAssetId(item.assetId);
    if (processType === 'Installation') {
      setProcessID(item.installationId);
    } else {
      setProcessID(item.maintenanceId);
    }
  }, [resourceId]);
  // console.log('TICKET REJECT PAGE RESOURCE ID &&& ', resourceId);
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

  const [description, setDescription] = useState('');
  //setDropdowncomplaintID;

  const handlePostrequest = async () => {
    let url = '';
    let postdata = '';
    if (!description) {
      setError('Please enter Description');
    }
    console.log(processID);
    if (processType === 'Installation' && description.length > 5) {
      url =
        'http://mapp.eficaa.com:8080/Eam_mobileapp_microservices/installationdata/updateinstallationsReject/' +
        assetId +
        '/' +
        processID;

      postdata = {
        installationRemarks: description,
        createdBy: resourceidd,
        estimatedtime: currentDateTime,
        assetMainStatusCode: 'CON_000080',
      };
    } else if (description.length > 5) {
      url =
        'http://mapp.eficaa.com:8080/Eam_mobileapp_microservices/maintenancedata/updatemaintenanceRejected/' +
        assetId +
        '/' +
        processID;

      postdata = {
        remarks: description,
        createdBy: resourceidd,
        technicianId: resourceidd,
        approvalStatus: 'CON_000081',
        approvedOn: currentDateTime,
        assetMainStatusCode: 'CON_000081',
      };
    }

    try {
      console.log('Ticket Reject URL ' + url);
      console.log('Ticket Reject Data' + JSON.stringify(postdata));

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postdata),
      });
      if (response.ok) {
        setError();
        Alert.alert(LanguageOpt('ticket_rejected_successfully'), '', [
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
                resourceId: resourceId,
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

      <Text style={styles.label1}> {LanguageOpt('Rej_Des')}:</Text>
      <TextInput
        style={styles.input}
        placeholder={LanguageOpt('Rej_Des')}
        onChangeText={text => setDescription(text)}
        multiline={true}
        value={description}
      />
      {error && <Text style={{color: 'red'}}> {error}</Text>}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handlePostrequest()}
          style={styles.button}>
          <Text style={styles.buttonText}>{LanguageOpt('Reject_Ticket')}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{LanguageOpt('Cancel')}</Text>
        </TouchableOpacity> */}
      </View>
      <Text> </Text>
    </ScrollView>
  );
};

export default TicketAcceptReject;

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
