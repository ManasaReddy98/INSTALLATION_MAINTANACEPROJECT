"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyles = void 0;

var _reactNative = require("react-native");

var _input, _StyleSheet$create;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GlobalStyles = _reactNative.StyleSheet.create((_StyleSheet$create = {
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18253f'
  },
  ImageStyle: {
    //padding: 0,
    marginTop: 5,
    height: 25,
    width: 25,
    marginRight: 4,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  LightEditBoxText: {
    color: "#ffffff",
    marginTop: 10
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1D3557',
    height: 40,
    marginTop: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 299
  },
  input: (_input = {
    //  borderRadius: 10,
    borderColor: 'white'
  }, _defineProperty(_input, "borderColor", 'red'), _defineProperty(_input, "borderRightWidth", 5), _defineProperty(_input, "borderLeftWidth", 0), _defineProperty(_input, "borderTopWidth", 0), _defineProperty(_input, "borderBottomWidth", 0), _defineProperty(_input, "fontSize", 20), _defineProperty(_input, "color", 'white'), _input),
  LighttextInput: {
    color: '#fff' //width: 100,
    //height: 40,
    // borderWidth: 5,
    // borderColor: 'gray',
    //secureTextEntry: false,

  },
  LightEditBox_bg: {
    borderWidth: 1,
    borderColor: "#909090",
    width: '90%',
    paddingLeft: 5,
    marginRight: 10,
    height: 50,
    marginBottom: 10 // color: Colours.colourHeadTextLight,

  },
  input1: {
    height: 40,
    width: 299,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    paddingLeft: 5,
    color: 'white',
    margin: 10
  },
  touchableOpacity: {
    height: 80,
    marginTop: 5,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    alignItems: 'center',
    marginTop: 5
  },
  text: {
    backgroundColor: '#94eaa9',
    borderRadius: 40,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
    color: '#fff'
  },
  button: {
    borderRadius: 40,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
    color: '#fff'
  },
  dcu_inst_button: {
    borderRadius: 40,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: '600',
    width: 200,
    color: '#fff',
    height: 50,
    alignSelf: 'center'
  },
  text1: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10
  },
  container1: {
    height: '100%',
    backgroundColor: '#1D3557' // alignItems: 'center',
    // marginTop:60

  }
}, _defineProperty(_StyleSheet$create, "input", {
  height: 50,
  width: 299,
  borderBottomWidth: 1,
  //  borderRadius: 10,
  borderColor: 'white',
  borderRightWidth: 0,
  borderLeftWidth: 0,
  borderTopWidth: 0
}), _defineProperty(_StyleSheet$create, "text5", {
  backgroundColor: 'white',
  borderRadius: 40,
  padding: 10,
  paddingLeft: 50,
  paddingRight: 50,
  fontSize: 20
}), _defineProperty(_StyleSheet$create, "touchableOpacity", {
  height: 80,
  marginTop: 5,
  width: 280,
  alignItems: 'center',
  justifyContent: 'center'
}), _defineProperty(_StyleSheet$create, "textinput", {
  marginLeft: 30
}), _defineProperty(_StyleSheet$create, "textinput1", {
  marginLeft: 30,
  marginTop: 40
}), _defineProperty(_StyleSheet$create, "text4", {
  color: 'white',
  marginTop: 40
}), _defineProperty(_StyleSheet$create, "text2", {
  color: 'white'
}), _defineProperty(_StyleSheet$create, "imagestyle", {
  height: 50,
  width: 50,
  marginTop: 60,
  alignSelf: 'center'
}), _defineProperty(_StyleSheet$create, "margin", {
  marginTop: 20
}), _defineProperty(_StyleSheet$create, "texts", {
  color: 'white',
  alignSelf: 'center',
  marginTop: 10,
  //  fontWeight:'bold',
  fontSize: 15
}), _StyleSheet$create));

exports.GlobalStyles = GlobalStyles;