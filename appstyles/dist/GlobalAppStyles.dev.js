'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _inputView, _inputViewdashboard, _inputViewEdit, _complaintBoxinputVie, _IssueDashboardinputV, _footer, _StyleSheet$create;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _reactNative.StyleSheet.create((_StyleSheet$create = {
  container: {
    flex: 1,
    padding: 0 //backgroundColor:"#3a4a64"

  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black'
  },
  flexStyle: {
    flex: 1,
    width: 30,
    height: 30,
    margin: 10
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  headerboxLogin: {
    height: '50%',
    backgroundColor: '#3a4a64',
    borderBottomLeftRadius: 70
  },
  header: {
    position: 'relative',
    top: '-75px',
    left: '-10%',
    height: '250',
    width: '120%' //backgroundColor: '#555',
    //borderRadius: '50%',
    //backgroundImage: 'linear-gradient(to top right, red, yellow)',

  },
  headtext: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'OpenSans-LightItalic' //fon

  },
  companyNmaeText: {
    alignSelf: 'center',
    justifyContent: 'center',
    //marginTop: 30,
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'OpenSans-LightItalic' //fon

  },
  companyNmaeTextAlternative: {
    alignSelf: 'center',
    justifyContent: 'center',
    //marginTop: 30,
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'OpenSans-LightItalic' //fon

  },
  dashboardmenutext: {
    color: '#3a4a64',
    fontSize: 12,
    fontWeight: '100',
    marginTop: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  instapageheadtext: {
    //alignSelf: 'left',
    //justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'OpenSans-LightItalic' //fon

  },
  instaImageHead: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20
  },
  imageHead: {
    height: 30,
    width: 30
  },
  instaHead: {
    marginTop: 20,
    marginLeft: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'OpenSans-LightItalic'
  },
  instapagesubheadtext: {
    //alignSelf: 'left',
    //justifyContent: 'center',
    marginTop: 5,
    marginLeft: 20,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'OpenSans-LightItalic' //fon

  },
  profileInfo: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    color: '#6f9240',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'OpenSans-LightItalic'
  },
  profileInfoText: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    color: '#3a4a64',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'OpenSans-LightItalic'
  },
  signature: {
    flex: 1,
    width: 100,
    height: 100,
    borderColor: '#6f9240',
    borderWidth: 1
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
  profilebackground: {
    // this shape is a circle
    borderRadius: 400,
    // border borderRadius same as width and height
    width: 400,
    height: 400,
    marginLeft: -100,
    // reposition the circle inside parent view
    position: 'absolute',
    bottom: 0,
    // show the bottom part of circle
    overflow: 'hidden' // hide not important part of image

  },
  allpagesheadtext: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    color: '#3a4a64',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'OpenSans-LightItalic' //fon

  },
  subheadtext: {
    alignSelf: 'center',
    justifyContent: 'center',
    //fontSize: '100',
    marginBottom: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'OpenSans-Italic'
  },
  tinyLogo: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 170,
    height: 150
  },
  issuedashimages: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40
  },
  screenshot: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100
  },
  userprofile: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 30
  },
  subtext: {
    alignSelf: 'center',
    justifyContent: 'center',
    //fontSize: '100',
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
    paddingBottom: 3,
    fontFamily: 'OpenSans-Italic'
  },
  inputView: (_inputView = {
    //backgroundColor: '#ffffff',
    borderWidth: 0.4,
    borderColor: 'white',
    borderRadius: 0,
    width: '95%',
    height: 50,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10
  }, _defineProperty(_inputView, "borderRadius", 5), _defineProperty(_inputView, "marginBottom", 5), _inputView),
  inputViewdashboard: (_inputViewdashboard = {
    //backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 0,
    width: '100%',
    height: 50
  }, _defineProperty(_inputViewdashboard, "borderRadius", 5), _defineProperty(_inputViewdashboard, "marginBottom", 10), _inputViewdashboard),
  inputViewReport: _defineProperty({
    borderWidth: 0.4,
    borderColor: 'green',
    borderRadius: 0,
    width: '95%',
    height: 50,
    margin: 10
  }, "borderRadius", 5),
  inputViewEdit: (_inputViewEdit = {
    //backgroundColor: '#ffffff',
    borderWidth: 0.4,
    borderColor: 'green',
    borderRadius: 0,
    marginLeft: 10,
    marginRight: 10,
    width: '70%',
    height: 50
  }, _defineProperty(_inputViewEdit, "borderRadius", 5), _defineProperty(_inputViewEdit, "marginBottom", 10), _inputViewEdit),
  TextInput: {
    height: 50,
    color: '#929eb6',
    //flex: 1,
    padding: 10,
    marginLeft: 10,
    borderRadius: 20 //cornerRadius:'10'

  },
  TextInputlogin: {
    color: '#fff',
    padding: 5,
    marginLeft: 10,
    borderRadius: 20 //cornerRadius:'10'

  },
  complaintBoxinputView: (_complaintBoxinputVie = {
    //backgroundColor: '#ffffff',
    borderWidth: 0.4,
    borderColor: 'green',
    borderRadius: 0,
    width: '100%',
    height: 200
  }, _defineProperty(_complaintBoxinputVie, "borderRadius", 5), _defineProperty(_complaintBoxinputVie, "marginBottom", 10), _complaintBoxinputVie),
  IssueDashboardinputView: (_IssueDashboardinputV = {
    //backgroundColor: '#ffffff',
    borderWidth: 0.4,
    borderColor: 'green',
    borderRadius: 0,
    //width: '100%',
    height: 200
  }, _defineProperty(_IssueDashboardinputV, "borderRadius", 5), _defineProperty(_IssueDashboardinputV, "marginBottom", 10), _IssueDashboardinputV),
  complaintBoxTextInput: {
    padding: 10,
    marginLeft: 10,
    borderRadius: 20 //cornerRadius:'10'

  },
  deviceInfoTextInput: {
    padding: 10,
    marginLeft: 10,
    borderRadius: 20,
    color: '#6f9240',
    fontSize: 15 //cornerRadius:'10'

  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8
  },
  icon: {
    marginRight: 5
  },
  placeholderStyle: {
    fontSize: 16
  },
  selectedTextStyle: {
    fontSize: 16
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  },
  shadowBox: {
    margin: 5,
    paddingBottom: 5,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 5
  },
  ProcessSOPBox: {
    // margin: 5,
    margin: 5,
    paddingBottom: 5,
    backgroundColor: '#FFF',
    width: '100%',
    //flex: 1,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    borderRadius: 5
  },
  processPictures: {
    //alignSelf: 'center',
    //justifyContent: 'center',
    width: 40,
    height: 40 //borderRadius: 30

  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  profileBox: {
    margin: 5,
    paddingBottom: 5,
    backgroundColor: '#FFF',
    width: '100%',
    flex: 1,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 5
  },
  ReportsBox: _defineProperty({
    margin: 10,
    paddingBottom: 5,
    backgroundColor: '#FFF',
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,
    borderRadius: 5,
    padding: 10
  }, "paddingBottom", 10)
}, _defineProperty(_StyleSheet$create, "lineStyle", {
  borderWidth: 0.5,
  borderColor: '#3a4a64',
  margin: 10
}), _defineProperty(_StyleSheet$create, "loginBtn", {
  width: 130,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 15,
  color: '#192442',
  backgroundColor: '#8ee9a3'
}), _defineProperty(_StyleSheet$create, "cancelBtn", {
  width: 130,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 5,
  color: '#fff',
  backgroundColor: '#d41515'
}), _defineProperty(_StyleSheet$create, "pendingBtn", {
  width: 100,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 5,
  color: '#fff',
  backgroundColor: '#FF5722'
}), _defineProperty(_StyleSheet$create, "completedBtn", {
  width: 100,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 5,
  color: '#fff',
  backgroundColor: '#22E618'
}), _defineProperty(_StyleSheet$create, "reAssignedBtn", {
  width: 100,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 5,
  color: '#fff',
  backgroundColor: '#2196F3'
}), _defineProperty(_StyleSheet$create, "ImageBtn", {
  width: 40,
  height: 30,
  borderRadius: 5,
  color: '#fff',
  backgroundColor: '#6f9240'
}), _defineProperty(_StyleSheet$create, "editBtn", {
  width: 60,
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 5,
  color: '#fff',
  backgroundColor: '#6f9240'
}), _defineProperty(_StyleSheet$create, "detailedBtn", {
  width: 70,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 5,
  color: '#fff',
  backgroundColor: '#6f9240'
}), _defineProperty(_StyleSheet$create, "genericBtn", {
  width: 180,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 5,
  color: '#fff',
  backgroundColor: '#6f9240'
}), _defineProperty(_StyleSheet$create, "listItem", {
  margin: 10,
  padding: 10,
  backgroundColor: '#FFF',
  width: '90%',
  flex: 1,
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,
  alignSelf: 'center',
  flexDirection: 'row',
  borderRadius: 5
}), _defineProperty(_StyleSheet$create, "listItemMyaccountDynamic", {
  margin: 10,
  paddingBottom: 5,
  backgroundColor: '#FFF',
  width: '100%',
  flex: 1,
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 10,
  alignSelf: 'center',
  flexDirection: 'row',
  borderRadius: 5
}), _defineProperty(_StyleSheet$create, "listItemMyProcess", {
  margin: 10,
  paddingBottom: 5,
  backgroundColor: '#FFF',
  width: '100%',
  flex: 1,
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 10,
  alignSelf: 'center',
  flexDirection: 'column',
  borderRadius: 5
}), _defineProperty(_StyleSheet$create, "listItemHook", {
  margin: 10,
  padding: 10,
  backgroundColor: '#FFF',
  width: '90%',
  flex: 1,
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,
  alignSelf: 'center',
  flexDirection: 'row',
  borderRadius: 5
}), _defineProperty(_StyleSheet$create, "radioText", {
  color: '#003f5c',
  fontWeight: '300',
  alignItems: 'center',
  paddingTop: 2,
  fontSize: 15
}), _defineProperty(_StyleSheet$create, "radioTextForgetPassword", {
  color: '#fff',
  fontWeight: '300',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  paddingTop: 2,
  fontSize: 15
}), _defineProperty(_StyleSheet$create, "radioCircle", {
  height: 23,
  width: 23,
  borderRadius: 100,
  borderWidth: 2,
  borderColor: '#003f5c' //alignItems: 'center',
  //justifyContent: 'center',

}), _defineProperty(_StyleSheet$create, "radioContainer", {
  flex: 1,
  flexDirection: 'row'
}), _defineProperty(_StyleSheet$create, "processCircle", {
  // this shape is a circle
  height: 50,
  width: 50,
  borderRadius: 50,
  margin: 10,
  alignSelf: 'center',
  marginTop: 15,
  backgroundColor: '#003f5c',
  borderColor: '#003f5c' // hide not important part of image

}), _defineProperty(_StyleSheet$create, "roundButton1", {
  width: 100,
  height: 100,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  borderRadius: 100,
  backgroundColor: 'orange'
}), _defineProperty(_StyleSheet$create, "selectedRadioButton", {
  width: 15,
  height: 15,
  borderRadius: 50,
  backgroundColor: '#3740ff'
}), _defineProperty(_StyleSheet$create, "fixToText", {
  flexDirection: 'row',
  justifyContent: 'space-between'
}), _defineProperty(_StyleSheet$create, "separator", {
  margin: 5
}), _defineProperty(_StyleSheet$create, "cardImage", {
  height: 50,
  width: 50,
  padding: 20,
  alignSelf: 'center'
}), _defineProperty(_StyleSheet$create, "cardImage1", {
  height: 30,
  width: 30,
  padding: 30,
  alignSelf: 'center'
}), _defineProperty(_StyleSheet$create, "card", {
  flex: 1,
  shadowColor: '#474747',
  shadowOffset: {
    width: 0,
    height: 6
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,
  marginVertical: 10,
  marginHorizontal: 10,
  backgroundColor: '#ffffff',
  //backgroundColor: "#e2e2e2",
  //flexBasis: '42%',
  borderRadius: 10,
  //borderRadius: 60,
  width: 100,
  height: 100,
  alignItems: 'center',
  justifyContent: 'center',
  transform: [{
    scale: 1.1
  }]
}), _defineProperty(_StyleSheet$create, "codeFieldRoot", {
  marginTop: 5,
  padding: 20,
  marginLeft: 30,
  marginRight: 30,
  //cornerRadius: 5,
  backgroundColor: 'pink'
}), _defineProperty(_StyleSheet$create, "cell", {
  width: 40,
  height: 40,
  lineHeight: 38,
  fontSize: 24,
  borderWidth: 2,
  borderColor: '#00000030',
  textAlign: 'center'
}), _defineProperty(_StyleSheet$create, "focusCell", {
  borderColor: '#000'
}), _defineProperty(_StyleSheet$create, "pinPageContainer", {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: 'white'
}), _defineProperty(_StyleSheet$create, "pincodebackBox", {
  width: '100%',
  height: 140,
  // position: 'relative',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  backgroundColor: '#182442'
}), _defineProperty(_StyleSheet$create, "pincodesquare", {
  height: 150,
  width: '90%',
  borderRadius: 10,
  position: 'absolute',
  top: 100,
  marginTop: 10,
  marginLeft: 20,
  marginRight: 20,
  elevation: 10,
  backgroundColor: 'pink'
}), _defineProperty(_StyleSheet$create, "pinBoxText", {
  textAlign: 'center',
  marginTop: 5,
  color: '#000',
  fontSize: 15
}), _defineProperty(_StyleSheet$create, "progressBarInnerCircle", {
  fontSize: 20,
  alignItems: 'center',
  paddingLeft: 3,
  width: 30,
  color: 'white' // borderRadius: 30,
  // backgroundColor: 'white'

}), _defineProperty(_StyleSheet$create, "legendView", {
  flex: 0.5,
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 10
}), _defineProperty(_StyleSheet$create, "legendTouchableOpacity1", {
  backgroundColor: '#e36415',
  width: 15,
  height: 15,
  marginTop: 5
}), _defineProperty(_StyleSheet$create, "legendTouchableOpacity2", {
  backgroundColor: '#375e27',
  width: 15,
  height: 15,
  marginTop: 5
}), _defineProperty(_StyleSheet$create, "legendTouchableOpacity3", {
  backgroundColor: '#406278',
  width: 15,
  height: 15,
  marginTop: 5
}), _defineProperty(_StyleSheet$create, "legendText", {
  color: '#fff',
  fontSize: 15,
  fontWeight: '500',
  marginTop: 5
}), _defineProperty(_StyleSheet$create, "assetDataIconStyle", {
  width: 25,
  height: 25,
  borderRadius: 20,
  marginRight: 10,
  alignItems: 'center'
}), _defineProperty(_StyleSheet$create, "assetDataLegendText", {
  fontWeight: 'bold',
  color: '#6f9240',
  marginLeft: 20
}), _defineProperty(_StyleSheet$create, "footer", (_footer = {
  //flexDirection: 'row',
  width: 200,
  height: 80,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  //Here is the trick
  bottom: 0,
  marginLeft: 10
}, _defineProperty(_footer, "marginLeft", 10), _defineProperty(_footer, "marginBottom", 20), _footer)), _StyleSheet$create));

exports["default"] = _default;