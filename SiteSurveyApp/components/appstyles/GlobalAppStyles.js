'use strict';
import { StyleSheet, Dimensions } from 'react-native';
import { Colours } from '../ConsumerMobileSystemApp/GenericStyles/Colours';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({

    container: {
        flex: 1,
    },

    subContainer: {
        marginTop: 130,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#FFF",
        width: "90%",
        padding: 10,
        //flex: 1,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 1,
        alignSelf: "center",
        borderRadius: 20
    },
    profileContainer: {
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#FFF",
        width: "90%",
        padding: 10,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 1,
        alignSelf: "center",
        borderRadius: 20
    },
    billItem: {
        flexDirection: 'row', marginLeft: 10,marginRight:10, flex: 1
    },
    image: {
        flex: 1,
        justifyContent: "center",
        //backgroundColor: 'rgba(rgb(128,20,85))',
    },
    imagebg: {
        flex: 0.5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(rgb(128,20,85))',
    },
    minibg: {
        flex: 0.5,
        margin: 5,
        borderRadius: 10,
        //backgroundColor: 'rgba(rgb(107,142,35))',
    },
    headerboxLogin: {
        height: '50%', backgroundColor: '#3a4a64', borderBottomLeftRadius: 70
    },
    dropdown3BtnStyle: {
        width: '100%',
        backgroundColor: '#fff',
        //alignSelf:'flex-end'
        // paddingHorizontal: 0,
        // borderWidth: 1,
        // borderRadius: 8,
        // borderColor: '#444',
    },

    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF', width: 300 },
    dropdown4BtnTxtStyle: { color: 'pink', width: '100%' },
    dropdown4DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown4RowStyle: { backgroundColor: '#EEEEEE', borderBottomColor: '#c5c5c5' },
    dropdown4RowTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5', width: '100%', },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left', width: '100%' },
    divider: { width: 30 },
    dropdown2BtnStyle: {
        flex: 1, backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5', width: 400,
    },
    dropdown: {
        //width: '300%',
        backgroundColor: '#fff',
        margin: 10,
        width: 1000,

    },
    header: {
        // position: 'relative',
        // top: '-75px',
        // left: '-10%',
        // height: '250',
        justifyContent: 'flex-end',
        width: '10%',
        backgroundColor: '#25428f',
        //borderRadius: '50%',
        //backgroundImage: 'linear-gradient(to top right, red, yellow)',
    },
    headtext: {
        alignSelf: 'center',
        color: '#bbfefc',
        fontSize: 40,
        fontWeight: "500",
        fontFamily: 'OpenSans-LightItalic',
        //fon
    },
    headtextBlue: {
        // alignSelf: 'Left',
        color: '#0f4e89',
        fontSize: 30,
        fontWeight: "500",
        marginLeft: 20,
        marginTop: 20,
        fontFamily: 'OpenSans-LightItalic',
        //fon
    },

    subtextBlue: {
        // alignSelf: 'Left',
        color: '#999999',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,
        fontWeight: "500",
        fontFamily: 'OpenSans-LightItalic',
        //fon
    },
    companyNmaeText: {
        alignSelf: 'center',
        justifyContent: 'center',
        //marginTop: 30,
        color: '#fff',
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'OpenSans-LightItalic',
        //fon
    },
    companyNmaeTextAlternative: {
        alignSelf: 'center',
        justifyContent: 'center',
        //marginTop: 30,
        color: '#fff',
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'OpenSans-LightItalic',
        //fon
    },
    dashboardmenutext: {
        color: '#404040', fontSize: 14,
        alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },
   
    dashboardmenutextDarkChanged: {
        color: '#bbfefc', fontSize: 14,
        alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },
    dashboardmenutextDark: {
        color: '#36ccc8', fontSize: 14,
        alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },
    //bbfefc
    buttonTexttext: {
        color: '#fff', fontSize: 14,
        alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },
    buttonTexttextDarkBill: {
        color: '#efbc62', fontSize: 14,
        alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },

    buttonTexttextDarkOutage: {
        color: '#eb8889', fontSize: 14,
        alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },

    //eb8889

    buttonTexttextDark: {
        color: '#bbfefc', fontSize: 14,
        alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },
    instapageheadtext: {
        //alignSelf: 'left',
        //justifyContent: 'center',
        marginTop: 20,
        marginLeft: 20,
        color: '#fff',
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'OpenSans-LightItalic',
        //fon
    },
    instaHead: {
        marginTop: 20,
        marginLeft: 20,
        color: '#fff',
        fontSize: 22,
        fontWeight: "500",
        fontFamily: 'OpenSans-LightItalic',
    },
    instapagesubheadtext: {
        //alignSelf: 'left',
        //justifyContent: 'center',
        marginTop: 5,
        marginLeft: 20,
        color: '#fff',
        fontSize: 18,
        fontWeight: "500",
        fontFamily: 'OpenSans-LightItalic',
        //fon
    },
    profileInfo: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        color: '#6f9240',
        fontSize: 16,
        fontWeight: "500",
        fontFamily: 'OpenSans-LightItalic',

    },
    profileInfoText: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        color: '#3a4a64',
        fontSize: 14,
        fontWeight: "500",
        fontFamily: 'OpenSans-LightItalic',

    },

    /*
    profileInfo: {
        alignSelf: 'flex-start',
        justifyContent: 'start',
        marginTop: 10,
        color: '#3a4a64',
        fontSize: 15,
        fontWeight: "100",
        fontFamily: 'OpenSans-LightItalic',
        //fon
    },
    */
    profilebackground: { // this shape is a circle 
        borderRadius: 400, // border borderRadius same as width and height
        width: 400,
        height: 400,
        marginLeft: -100, // reposition the circle inside parent view
        position: 'absolute',
        bottom: 0, // show the bottom part of circle
        overflow: 'hidden', // hide not important part of image
    },
    allpagesheadtext: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30,
        color: '#3a4a64',
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'OpenSans-LightItalic',
        //fon
    },
    subheadtext: {
        alignSelf: 'center',
        color: '#bbfefc',
        fontSize: 13,
        fontWeight: "500",
        fontFamily: 'OpenSans-Italic',
    },
    subheadtext1: {
        //alignSelf: 'center',
        //justifyContent: 'center',
        //fontSize: '100',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 5,
        color: '#5e8544',
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'OpenSans-Italic',
    },
    placeholdertext: {
        //alignSelf: 'center',
        //justifyContent: 'center',
        //fontSize: '100',
        //marginLeft: 10,      
        marginBottom: 5,
        color: '#fff',
        fontSize: 15,
        fontWeight: "500",
        fontFamily: 'OpenSans-Italic',
    },
    tinyLogo: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 200,
        height: 120,
        marginTop: 20
    },

    crn_profile_icon: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderColor: "#afbfe8",
        borderWidth: 2,
        backgroundColor: "#fff",
        borderRadius: 50,
        marginTop: 10,
    },
    crn_profile_icon_myProfile: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderColor: "#afbfe8",
        borderWidth: 2,
        backgroundColor: "#fff",
        borderRadius: 50,
       // marginTop: ,
    },
    tinyLogoWelcome: {
        alignSelf: 'center',
        width: 120,
        height: 120,
        marginTop: 40,
        elevation: 2,
        // borderRadius:50
    },
    tinyImage: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
    },
    miniImage: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 10,
        height: 10,
    },
    userprofile: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 30,
        // shadowRadius: 7.49,
        // elevation: 12,

    },
    userprofileMain: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 30,
        marginTop: 20
        // shadowRadius: 7.49,
        // elevation: 12,

    },
    userprofile: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 30
    },
    subtext: {
        alignSelf: 'center',
        justifyContent: 'center',
        //fontSize: '100',
        marginTop: 10,
        marginBottom: 10,
        color: '#fff',
        fontSize: 18,
        fontWeight: "300",
        paddingBottom: 10,
        fontFamily: 'OpenSans-Italic',
    },
    inputViewgreentheme: {
        borderWidth: 1,
        borderColor: 'white',
        // borderRadius: 15 , 
        width: '90%',
        paddingLeft: 5,
        marginRight: 10,
        height: 50,
        marginBottom: 10,
    },
    splashScreen21: {
        "opacity": 1,
        "position": "relative",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 390,
        "height": 864,
        "left": 0,
        "top": 0,
        flex: 2
    },
    genericInputView: {
        //backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#909090',
        borderRadius: 0,
        borderRadius: 5,
        marginBottom: 10,
        width: '93%',
        marginLeft: 10,
        marginRight: 10,
        height: 50,
        // alignItems: 'center',
    },

    genericBigInputView: {
        //backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#909090',
        borderRadius: 0,
        borderRadius: 5,
        marginBottom: 10,
        width: '93%',
        marginLeft: 10,
        marginRight: 10,
        height: 100,
        // alignItems: 'center',
    },
    inputView: {
        //backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginTop: 5,

        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 0,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        paddingLeft: 5,
        marginRight: 10,
        height: 50,
        // alignItems: 'center',
    },
    inputDarkView: {
        //backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginTop: 5,

        borderWidth: 1,
        borderColor: '#bbfefc',
        borderRadius: 0,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        paddingLeft: 5,
        marginRight: 10,
        height: 50,
        // alignItems: 'center',
    },
    //36ccc8
    textInput: {
        width: 100,
        height: 40,
        borderWidth: 5,
        //width: myWidth * 0.9,
        //height: myHeight * 0.08,
        //borderRadius: myHeight * 0.04,
        //paddingHorizontal: myWidth * 0.05,
        //borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray',
        //secureTextEntry: false,
    },
    inputViewdashboard: {
        //backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 0,
        width: '100%',
        height: 50,
        borderRadius: 5,
        marginBottom: 10,
        // alignItems: 'center',
    },
    inputViewReport: {
        borderWidth: 0.4,
        borderColor: 'green',
        borderRadius: 0,
        width: '95%',
        height: 50,
        margin: 10,
        borderRadius: 5,
        // alignItems: 'center',
    },
    inputViewEdit: {
        //backgroundColor: '#ffffff',
        borderWidth: 0.4,
        borderColor: 'green',
        borderRadius: 0,
        marginLeft: 10,
        marginRight: 10,
        width: '70%',
        height: 50,
        borderRadius: 5,
        marginBottom: 10,
        // alignItems: 'center',
    },

    TextInput: {
        height: 50,
        alignSelf: 'center',
        marginLeft: 5,
        borderRadius: 20,
        color:"#909090"
        //cornerRadius:'10'
    },
    TextInputComplaintBox: {
        height: 150,
        alignSelf: 'center',
        marginLeft: 5,
        borderRadius: 20,
        color:"#909090"
        //cornerRadius:'10'
    },

    complaintBoxinputView: {

        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: "#FFF",
        width: "90%",
        height: 160,
        padding: 10,
        //flex: 1,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 1,
        alignSelf: "center",
        borderRadius: 20
        /*
        //backgroundColor: '#ffffff',
        borderWidth: 0.4,
        borderColor: 'green',
        borderRadius: 0,
        width: '100%',
        height: 100,
        borderRadius: 5,
        marginBottom: 10,
        // alignItems: 'center',*/
    },

    complaintBoxTextInput: {
        padding: 10,
        marginLeft: 10,
        borderRadius: 20,
        //cornerRadius:'10'
    },
    separatorLine: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    complaintBoxinput: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#FFF",
        width: "90%",
        padding: 10,
        //flex: 1,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 1,
        alignSelf: "center",
        borderRadius: 20
        //backgroundColor: '#ffffff',
        /*
        borderWidth: 0.4,
        borderColor: '#999999',
        margin:10,
        marginRight:10,
        borderRadius: 0,
        width: '95%',
        height: 50,
        borderRadius: 5,
        marginBottom: 10,
        // alignItems: 'center',*/
    },

    complaintBoxTextInput: {
        padding: 10,
        marginLeft: 10,
        borderRadius: 20,
        //cornerRadius:'10'
    },

    shadowBox: {
        margin: 10,
        paddingBottom: 5,
        backgroundColor: "#FFF",
        width: "90%",
        flex: 1,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 10,
        alignSelf: "center",
        flexDirection: "column",
        borderRadius: 5
    },
    ReportsBox: {
        margin: 10, paddingBottom: 5, backgroundColor: "#FFF", shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 10, borderRadius: 5, padding: 10, paddingBottom: 10
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#3a4a64',
        margin: 10,
    },
    loginGreenThemeBtn: {
        width: 100,
        height: 40,
        marginTop: 10,
        marginRight: 30,
        borderRadius: 50,
        //backgroundColor:'#ff566a',    
        // backgroundColor: '#5e8544',
        borderWidth: 1,
        borderColor: '#fff',
        borderWidth: 1,
        alignSelf: 'center',
        paddingTop: 10,
        borderColor: 'white',
        borderRadius: 15,

    },
    loginDarkThemeBtn: {
        width: 100,
        height: 40,
        marginTop: 10,
        marginRight: 30,
        borderRadius: 50,
        //backgroundColor:'#ff566a',    
        backgroundColor: '#0e2c50',
        borderWidth: 1,
        borderColor: '#519f87',
        borderWidth: 1,
        alignSelf: 'center',
        paddingTop: 10,
       // borderColor: '519f87',
        borderRadius: 15,

    },
    dashGreenThemeBtn: {
        width: 100,
        height: 40,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        borderWidth: 1,
        alignSelf: 'center',
        paddingTop: 10,
        borderColor: 'white',
        borderRadius: 15,

    },
    dashGreenThemeDarkBtn: {
        width: 100,
        height: 40,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor:"#00253f",
        borderWidth: 1,
        alignSelf: 'center',
        paddingTop: 10,
        borderRadius: 15,

    },
    roundButton: {
        borderWidth: 1,
        borderColor: '#0f4e89',
        //borderColor: 'rgba(0,0,0,0.2)',
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 20,
        width: 60,
        height: 60,
        backgroundColor: '#0f4e89',
        borderRadius: 50,
    },
    roundSmallButton: {
        borderWidth: 1,
        borderColor: '#0f4e89',
        alignSelf: 'center',
        marginRight: 20,
        width: 35,
        height: 35,
        backgroundColor: '#0f4e89',
        borderRadius: 35,
    },
    roundMediumButton: {
        borderWidth: 1,
        flex: 0.6,
        marginLeft: 10,
        borderColor: '#0f4e89',
        alignSelf: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 40,
    },
    roundImageButton: {
        borderWidth: 1,
        marginLeft: 10,
        justifyContent: "flex-end",
        borderColor: '#0f4e89',
        alignSelf: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#0f4e89',
        borderRadius: 40,
    },
    loginBtn: {

        width: 180,
        height: 45,
        //alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 5,
        borderRadius: 5,
        color: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 2,
        borderRadius: 30,
        //borderColor: "thistle",
        borderColor: '#fff',
        // backgroundColor: '#6f9240',
    },
    loginDarkBtn: {

        width: 180,
        height: 45,
        //alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 5,
        borderRadius: 5,
        color: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 30,
        //borderColor: "thistle",
        borderColor: '#909090',
       // backgroundColor: '#4c9c84',
       backgroundColor:"#bbfefc",
       elevation:10
    },


    DashBtn: {
        width: 120,
        height: 45,
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 5,

        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#fff',
    },
    optionBtn: {
        // width: '100%',
        height: 40,
        //alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 10,
        borderRadius: 5,
        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#6f9240',
    },

    ImageBtn: {
        width: 40,
        height: 30,
        borderRadius: 5,
        color: '#fff',
        backgroundColor: '#6f9240',
    },
    editBtn: {
        width: 150,
        height: 45,
        //alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 5,
        borderRadius: 5,
        color: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 2,
        borderRadius: 30,
        //borderColor: "thistle",
        borderColor: '#fff',
        backgroundColor: '#25428f',
    },
    detailedBtn: {
        width: 80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        //color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        //paddingLeft: 20,
        //paddingRight: 20,
        //borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#fff',
        //borderColor: "thistle",
        // borderColor: '#fff',
    },
    detailedBtn1: {
        width: 80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        //color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        //paddingLeft: 20,
        //paddingRight: 20,
        //borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#25428f',
        //borderColor: "thistle",
        // borderColor: '#fff',
    },

    detailedBtnOrange: {
        width: 80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        //color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        //paddingLeft: 20,
        //paddingRight: 20,
        //borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#de9c6f',
        //borderColor: "thistle",
        // borderColor: '#fff',
    },
    detailedBtnGreen: {
        width: 80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        //color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        //paddingLeft: 20,
        //paddingRight: 20,
        //borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#519f87',
        //borderColor: "thistle",
        // borderColor: '#fff',
    },
    detailedBtnRed: {
        width: 80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        //color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        //paddingLeft: 20,
        //paddingRight: 20,
        //borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#d36a6e',
        //borderColor: "thistle",
        // borderColor: '#fff',
    },
    voltageBtn: {
        width: 95,
        height: 95,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#de9c6f',
    },
    voltageBtnClick: {
        width: 95,
        height: 95,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        //color: '#fff',
        marginLeft: 5,
        marginRight: 5,
        //paddingLeft: 20,
        //paddingRight: 20,
        //borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#25428f',
        //borderColor: "thistle",
        // borderColor: '#fff',
    },
    currentBtn: {
        width: 95,
        height: 95,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        //color: '#fff',
        marginLeft: 5,
        marginRight: 5,
        //paddingLeft: 20,
        //paddingRight: 20,
        //borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#519f87',
        //borderColor: "thistle",
        // borderColor: '#fff',
    },
    currentBtnClick: {
        width: 95,
        height: 95,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        //color: '#fff',
        marginLeft: 5,
        marginRight: 5,
        //paddingLeft: 20,
        //paddingRight: 20,
        //borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#25428f',
        //borderColor: "thistle",
        // borderColor: '#fff',
    },
    bEnergyBtn: {
        width: 95,
        height: 95,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        //color: '#fff',
        marginLeft: 5,
        marginRight: 5,

        borderRadius: 30,
        backgroundColor: '#d36a6e',
        //borderColor: "thistle",
        // borderColor: '#fff',
    },
    bEnergyBtnClick: {
        width: 95,
        height: 95,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        //color: '#fff',
        marginLeft: 5,
        marginRight: 5,
        //paddingLeft: 20,
        //paddingRight: 20,
        //borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#25428f',
        //borderColor: "thistle",
        // borderColor: '#fff',
    },

    energyButtonsText: {
        color: "#000",
        fontSize: 16, fontWeight: "500"
    },
    energyButtonsTextClick: {
        color: "#000", fontSize: 16, fontWeight: "500"
    },



    btnTextColour: {
        color: "#404040",
        fontSize: 15, fontWeight: "500"
    },
    btnTextColourOnClick: {
        color: "#fff", fontSize: 15, fontWeight: "500"
    },


    internalBtn: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 5,
        color: '#fff',
        backgroundColor: '#fff',
    },
    genericBtn: {
        width: 200,
        height: 50,
        backgroundColor: "#25428f",
        //alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 5,
        borderRadius: 5,
        color: "#fff",
        paddingLeft: 20,
        paddingRight: 20,
        //borderWidth: 1,
        borderRadius: 30,
        alignSelf: 'center',
        elevation: 3
        //borderColor: "thistle",
        // borderColor: '#fff',
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "90%",
        flex: 1,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    listItemMyaccountDynamic: {
        margin: 10,
        paddingBottom: 5,
        backgroundColor: "#FFF",
        width: "90%",
        flex: 1,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 10,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    listItemHook: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "90%",
        flex: 1,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    radioText: {
        color: '#bbfefc', fontWeight: '300', alignItems: 'center', paddingTop: 2, fontSize: 12
    },
    radioCircle: {
        height: 23,
        width: 23,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#bbfefc',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    radioContainer: {
        flex: 1, flexDirection: 'row'
    },


    selectedRadioButton: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#3740ff',
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
        // margin:20
    },
    separator: {
        //  margin: 5,
    },

    cardImage: {
        height: 50,
        width: 50,
        padding: 5,
        alignSelf: 'center',
        //backgroundColor: "#ffffff",
        //borderWidth:1,
        //backgroundColor: "#e2e2e2",
        //flexBasis: '42%',  
        //borderRadius: 50,
    },
    cardImageDark: {
        height: 50,
        width: 50,
        padding: 5,
        alignSelf: 'center',
        backgroundColor: "#0e2c50",
        //borderWidth:1,
        //backgroundColor: "#e2e2e2",
        //flexBasis: '42%',  
        //borderRadius: 50,
    },
    cardImage1: {
        
        height: 46,
        width: 40,
        // padding: 1,
       // backgroundColor: "#ffffff",
        //alignSelf: 'center'
    },
    card: {
        //flex: 1,
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: "#ffffff",
        //backgroundColor: "#e2e2e2",
        //flexBasis: '42%',  
        borderRadius: 50,
        //borderRadius: 60,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ scale: 1.1 }]

    },
    box: {
        height: 100,
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 30
    },
    boxDark: {
        height: 100,
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 2,
       
        backgroundColor: '#0e2c50',
        borderRadius: 30
    },
    //0e2c50
    codeFieldRoot: {
        marginTop: 5,
        padding: 20,
        marginLeft: 30,
        marginRight: 30,
        //cornerRadius: 5,
        backgroundColor: '#a8b7c9',
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    pinPageContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    pincodebackBox: {
        width: '100%',
        height: 200,
        position: 'relative',
        top: 0,
        left: 0,
        backgroundColor: '#3a4a64',
    },
    pincodesquare: {
        height: 150,
        width: '90%',
        borderRadius: 10,
        position: 'absolute',
        top: 100,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        elevation: 10,
        backgroundColor: 'pink',
    },
    pinBoxText: {
        textAlign: 'center', marginTop: 5, color: '#000', fontSize: 15
    },
    progressBarInnerCircle: {
        fontSize: 12, alignSelf: 'center'
        /*
         height:50, width: 50, borderRadius: 100, backgroundColor: 'white'
        */
    },

    //36ccc8
    progressBarInnerCircleText: {
        fontSize: 13, alignSelf: 'center',color:"#fe8965"
        /*
         height:50, width: 50, borderRadius: 100, backgroundColor: 'white'
        */
    },
    progressBarInnerCircleTextDark: {
        fontSize: 13, alignSelf: 'center',color:"#36ccc8"
        /*
         height:50, width: 50, borderRadius: 100, backgroundColor: 'white'
        */
    },
    progressBarInnerCircleDarkText1: {
        fontSize: 13, alignSelf: 'center',color:"#fff"
        /*
         height:50, width: 50, borderRadius: 100, backgroundColor: 'white'
        */
    },
    progressBarInnerCircleText1: {
        fontSize: 13, alignSelf: 'center',color:"#7c8ebd"
        /*
         height:50, width: 50, borderRadius: 100, backgroundColor: 'white'
        */
    },
    legendView: {
        flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start'
    },

    legendTouchableOpacity1: {
        backgroundColor: '#FF5722', width: 15, height: 15, marginTop: 5,
    },
    legendTouchableOpacity2: {
        backgroundColor: '#22E618', width: 15, height: 15, marginTop: 5,
    },
    legendTouchableOpacity3: {
        backgroundColor: '#2196F3', width: 15, height: 15, marginTop: 5,
    },
    legendText: {
        color: '#000', fontSize: 15, fontWeight: "500"
    },
    assetDataIconStyle: { width: 22, height: 22, borderRadius: 20, marginRight: 5, alignItems: "center",   marginTop:10, },
    assetDataLegendText: { fontWeight: "bold", color: "#6f9240", marginLeft: 20 },
    deleteIconStyle: { width: 18, height: 18,  marginRight:10, alignItems: "center",   marginTop:10, },
 
});