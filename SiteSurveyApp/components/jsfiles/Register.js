import React from 'react';
import { View, Keyboard, Text, TextInput, StyleSheet, Image, TouchableOpacity, StatusBar, Dimensions, ScrollView, ImageBackground } from 'react-native';
import Languages from './Languages';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'AssetDatabase.db' });

const { width, height } = Dimensions.get('window');

const Register = ({ navigation,route }) => {
    const {Language} = route.params;
    const [userName, setUserName] = React.useState('');
    const [inputs, setInputs] = React.useState({
        firstname: '',
        middlename: '',
        lastname: '',
        mobilenumber: '',
        adhaarnumber: '',
        emailid: '',
    });
    const [errors, setErrors] = React.useState();

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.firstname) {
            handleError('Must provide firstname', 'firstname');
            isValid = false;
        } else if (!inputs.firstname.match(/^[a-zA-Z]+$/)) {
            handleError('Invalid firstname', 'firstname')
        }

        if (!inputs.middlename) {
            handleError('Must provide middlename', 'middlename');
            isValid = false;
        } else if (!inputs.middlename.match(/^[a-zA-Z]+$/)) {
            handleError('Invalid middlename', 'middlename')
        }

        if (!inputs.lastname) {
            handleError('Must provide lastname', 'lastname');
            isValid = false;
        } else if (!inputs.lastname.match(/^[a-zA-Z]+$/)) {
            handleError('Invalid lastname', 'lastname')
        }


        if (!inputs.emailid) {
            handleError('Must provide emailid', 'emailid');
            isValid = false;
        } else if (!inputs.emailid.match(/\S+@\S+\.\S+/)) {
            handleError('Invalid emailid', 'emailid');
            isValid = false;
        }

        if (!inputs.mobilenumber) {
            handleError('Must provide mobile number', 'mobilenumber');
            isValid = false;
        } else if (!inputs.mobilenumber.match(/^[6-9][0-9]{9}$/)) {
            handleError('Invalid mobilenumber number', 'mobilenumber')
            isValid = false;
        }

        if (!inputs.adhaarnumber) {
            handleError('Must provide valid adhaar number ', 'adhaarnumber');
            isValid = false;
        } else if (!inputs.adhaarnumber.match(/^[0-9]{12}$/)) {
            handleError('Invalid adhaarnumber number', 'adhaarnumber')
            isValid = false;
        }

        db.transaction(function (tx) {
            console.log(" Entered Values #####   "+inputs.emailid,inputs.mobilenumber );
           // var  pass_WRD = parseInt(password);
            tx.executeSql(
              'INSERT INTO table_userdetails(user_email, user_mobilenumber) VALUES (?,?)',
              [inputs.emailid,inputs.mobilenumber],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  console.log("Data inserted successfully");
                  
                } else alert('Registration Failed');
              }
            );
          });

        if (isValid) {

            navigation.navigate('ViewAllUser',{Language:Language});

        }
    };


    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#182442' />
            <View>
                <ImageBackground source={require('../images/efdashboardbg.png')} resizeMode="cover" style={styles.image}>
                  <View style={{height:220}}>
                       <View>
                           <Image style={{ height: 100, width: 100, alignSelf: 'center',marginTop:20 }} source={require('../images/eficaalogo.png')} />
   
                       </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <View style={{ flexDirection: 'column', marginTop: 30, marginLeft: 20, marginRight: 10 ,marginBottom:10}}>
                            <View >
                                <Text style={{ color: '#181952', }}>First Name</Text>
                            </View>
                            <View style={{ width: '90%', height: 50, marginTop: 5, }} >

                                <TextInput style={styles.input1}
                                    onChangeText={text => handleOnchange(text, 'firstname')}
                                    value={inputs}
                                    placeholderTextColor='#181952'
                                    onFocus={() => handleError(null, 'firstname')}
                                />
                            </View>
                            {errors ? <Text style={{ color: 'red' }}>{errors.firstname}</Text> : null}
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: '#181952', }}>Middle Name</Text>
                            </View>
                            <View style={{ width: '90%', height: 50, marginTop: 5 }} >

                                <TextInput style={styles.input1}
                                    onChangeText={text => handleOnchange(text, 'middlename')}
                                    value={inputs}
                                    placeholderTextColor='#181952'
                                    onFocus={() => handleError(null, 'middlename')}
                                />
                            </View>
                            {errors ? <Text style={{ color: 'red' }}>{errors.middlename}</Text> : null}
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: '#181952', }}>Last Name</Text>
                            </View>
                            <View style={{ width: '90%', height: 50, marginTop: 5 }} >

                                <TextInput style={styles.input1}
                                    onChangeText={text => handleOnchange(text, 'lastname')}
                                    value={inputs}
                                    placeholderTextColor='#181952'
                                    onFocus={() => handleError(null, 'lastname')}
                                />
                            </View>
                            {errors ? <Text style={{ color: 'red' }}>{errors.lastname}</Text> : null}
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: '#181952', }}>Mobile Number</Text>
                            </View>
                            <View style={{ width: '90%', height: 50, marginTop: 5 }} >

                                <TextInput style={styles.input1}
                                    onChangeText={text => handleOnchange(text, 'mobilenumber')}
                                    value={inputs}
                                    placeholderTextColor='#181952'
                                    onFocus={() => handleError(null, 'mobilenumber')}
                                />
                            </View>
                            {errors ? <Text style={{ color: 'red' }}>{errors.mobilenumber}</Text> : null}
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: '#181952', }}>Aadhaar Number</Text>
                            </View>
                            <View style={{ width: '90%', height: 50, marginTop: 5 }} >

                                <TextInput style={styles.input1}
                                    onChangeText={text => handleOnchange(text, 'adhaarnumber')}
                                    value={inputs}
                                    placeholderTextColor='#181952'
                                    onFocus={() => handleError(null, 'adhaarnumber')}
                                />
                            </View>
                            {errors ? <Text style={{ color: 'red' }}>{errors.adhaarnumber}</Text> : null}
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: '#181952', }}>Email-ID</Text>
                            </View>
                            <View style={{ width: '90%', height: 50, marginTop: 5 }} >

                                <TextInput style={styles.input1}
                                    onChangeText={text => handleOnchange(text, 'emailid')}
                                    value={inputs}
                                    placeholderTextColor='#181952'
                                    onFocus={() => handleError(null, 'emailid')}
                                />
                            </View>
                            {errors ? <Text style={{ color: 'red' }}>{errors.emailid}</Text> : null}
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: '#181952', }}>Address</Text>
                            </View>
                            <View style={{ width: '90%', height: 50, marginTop: 5 }} >

                                <TextInput style={styles.input1}
                                    onChangeText={text => handleOnchange(text, 'email')}
                                    value={userName}
                                    placeholderTextColor='#181952'

                                />
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: '#181952', }}>Photo</Text>
                            </View>
                            <View style={{ width: '90%', height: 50, marginTop: 5 }} >

                                <TextInput style={styles.input1}
                                    onChangeText={text => handleOnchange(text, 'email')}
                                    value={userName}
                                    placeholderTextColor='#181952'

                                />
                            </View>
                            <TouchableOpacity onPress={validate}>
                                <View style={styles.button}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>Register</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Login',{Language:Language})}>
                                <Text style={{ color: '#98e9a2', marginTop: 10 }}>Already have an account?Login to account</Text>
                            </TouchableOpacity>
                            <Text style={{}}></Text>
                    </View>







                    </ScrollView>

                </ImageBackground>

            </View>



        </View>
    );
};
Register.navigationOptions = () => {
    return {
        headerShown: false,
    };
};
const styles = StyleSheet.create({
    back: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        // marginHorizontal:15,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
    },
    image: {
        // flex: 1,
        width: width,
        height: height
    },
    button: {
        height: 60, width: 125, backgroundColor: '#476c3f',
        alignSelf: 'center', marginTop: 20, marginRight: 10, borderTopLeftRadius: 30, borderBottomRightRadius: 30,
        justifyContent: 'center', alignItems: 'center'
    },
    input1: {
        // width:'85%',
        // outlineStyle:'none',
        borderWidth: 0.5,
        borderColor: '#cfd0e2',
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 50,
        elevation: 1
    },
    icon: {
        alignSelf: 'center',
        fontSize: 20,
        marginHorizontal: 15, color: 'white'
    }

})

export default Register;
/*
    <ScrollView>
                    <View style={{ flexDirection: 'column', margin: 30, marginTop: 120, borderRadius: 10, backgroundColor: '#f2fcec', paddingLeft: 20 }}>
                        <View >

                            <Image style={{ height: 100, width: 100, alignSelf: 'center' }} source={require('../images/eficaalogo.png')} />
                        </View>
                        <View >
                            <Text style={{ color: '#181952', }}>First Name</Text>
                        </View>
                        <View style={{ width: '85%', height: 50, marginTop: 5 }} >

                            <TextInput style={styles.input1}
                                onChangeText={text => handleOnchange(text, 'firstname')}
                                value={inputs}
                                placeholderTextColor='#181952'
                                onFocus={() => handleError(null, 'firstname')}
                            />
                        </View>
                        {errors ? <Text style={{ color: 'red' }}>{errors.firstname}</Text> : null}
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: '#181952', }}>Middle Name</Text>
                        </View>
                        <View style={{ width: '85%', height: 50, marginTop: 5 }} >

                            <TextInput style={styles.input1}
                                onChangeText={text => handleOnchange(text, 'middlename')}
                                value={inputs}
                                placeholderTextColor='#181952'
                                onFocus={() => handleError(null, 'middlename')}
                            />
                        </View>
                        {errors ? <Text style={{ color: 'red' }}>{errors.middlename}</Text> : null}
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: '#181952', }}>Last Name</Text>
                        </View>
                        <View style={{ width: '85%', height: 50, marginTop: 5 }} >

                            <TextInput style={styles.input1}
                                onChangeText={text => handleOnchange(text, 'lastname')}
                                value={inputs}
                                placeholderTextColor='#181952'
                                onFocus={() => handleError(null, 'lastname')}
                            />
                        </View>
                        {errors ? <Text style={{ color: 'red' }}>{errors.lastname}</Text> : null}
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: '#181952', }}>Mobile Number</Text>
                        </View>
                        <View style={{ width: '85%', height: 50, marginTop: 5 }} >

                            <TextInput style={styles.input1}
                                onChangeText={text => handleOnchange(text, 'mobilenumber')}
                                value={inputs}
                                placeholderTextColor='#181952'
                                onFocus={() => handleError(null, 'mobilenumber')}
                            />
                        </View>
                        {errors ? <Text style={{ color: 'red' }}>{errors.mobilenumber}</Text> : null}
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: '#181952', }}>Aadhaar Number</Text>
                        </View>
                        <View style={{ width: '85%', height: 50, marginTop: 5 }} >

                            <TextInput style={styles.input1}
                                onChangeText={text => handleOnchange(text, 'adhaarnumber')}
                                value={inputs}
                                placeholderTextColor='#181952'
                                onFocus={() => handleError(null, 'adhaarnumber')}
                            />
                        </View>
                        {errors ? <Text style={{ color: 'red' }}>{errors.adhaarnumber}</Text> : null}
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: '#181952', }}>Email-ID</Text>
                        </View>
                        <View style={{ width: '85%', height: 50, marginTop: 5 }} >

                            <TextInput style={styles.input1}
                                onChangeText={text => handleOnchange(text, 'emailid')}
                                value={inputs}
                                placeholderTextColor='#181952'
                                onFocus={() => handleError(null, 'emailid')}
                            />
                        </View>
                        {errors ? <Text style={{ color: 'red' }}>{errors.emailid}</Text> : null}
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: '#181952', }}>Address</Text>
                        </View>
                        <View style={{ width: '85%', height: 50, marginTop: 5 }} >

                            <TextInput style={styles.input1}
                                onChangeText={text => handleOnchange(text, 'email')}
                                value={userName}
                                placeholderTextColor='#181952'

                            />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: '#181952', }}>Photo</Text>
                        </View>
                        <View style={{ width: '85%', height: 50, marginTop: 5 }} >

                            <TextInput style={styles.input1}
                                onChangeText={text => handleOnchange(text, 'email')}
                                value={userName}
                                placeholderTextColor='#181952'

                            />
                        </View>
                        <TouchableOpacity onPress={validate}>
                            <View style={{ height: 45, width: 100, borderRadius: 20, backgroundColor: '#98e9a2', marginTop: 10, alignSelf: 'center', marginRight: 30 }}>
                                <Text style={{ alignSelf: 'center', paddingTop: 10, fontSize: 15, color: 'black' }}>Register</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: '#98e9a2', marginTop: 10 }}>Already have an account?Login to account</Text>
                        </TouchableOpacity>
                        <Text style={{}}></Text>
                    </View>
                </ScrollView>
*/