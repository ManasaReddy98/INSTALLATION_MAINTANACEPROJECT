"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeGetLocation = _interopRequireWildcard(require("react-native-get-location"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocationOptions =
/*#__PURE__*/
function () {
  function LocationOptions() {
    _classCallCheck(this, LocationOptions);
  }

  _createClass(LocationOptions, [{
    key: "requestLocation",
    value: function requestLocation() {
      return regeneratorRuntime.async(function requestLocation$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                _reactNativeGetLocation["default"].getCurrentPosition({
                  enableHighAccuracy: true,
                  timeout: 30000,
                  rationale: {
                    title: 'Location permission',
                    message: 'The app needs the permission to request your location.',
                    buttonPositive: 'Ok'
                  }
                }).then(function (newLocation) {
                  // setLoading(false);
                  // setLocation(newLocation);
                  resolve(newLocation);
                })["catch"](function (ex) {
                  if ((0, _reactNativeGetLocation.isLocationError)(ex)) {
                    var code = ex.code,
                        message = ex.message;
                    console.warn(code, message); //setError(code);

                    reject(code);
                  } else {
                    console.warn(ex);
                  }

                  setLoading(false);
                  setLocation(null);
                });
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return LocationOptions;
}(); // return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>Welcome to React Native!</Text>
//       <Text style={styles.instructions}>
//         To get location, press the button:
//       </Text>
//       <View style={styles.button}>
//         <TouchableOpacity style={{width:100,height:50,backgroundColor:"#909090"}}
//             onPress={() => requestLocation()} >
//               <Text style={{color:"#fff"}}>Get Location</Text>
//           </TouchableOpacity>  
//       </View>
//       <Text style={styles.instructions}>
//        Location Data  : {location.latitude},{location.longitude}
//       </Text>
//     </View>
//   );
//}
// export default LocationOptions;

/*


  const requestLocation = () => {
    setLoading(true);
    setLocation(null);
    setError(null);

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 30000,
      rationale: {
        title: 'Location permission',
        message: 'The app needs the permission to request your location.',
        buttonPositive: 'Ok',
      },
    })
      .then(newLocation => {
        setLoading(false);
        setLocation(newLocation);
      })
      .catch(ex => {
        if (isLocationError(ex)) {
          const {code, message} = ex;
          console.warn(code, message);
          setError(code);
        } else {
          console.warn(ex);
        }
        setLoading(false);
        setLocation(null);
      });
  };
console.log("Location Data ####### "+ JSON.stringify(location));


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    location: {
      color: '#333333',
      marginBottom: 5,
    },
    button: {
      marginBottom: 8,
    },
  });
  */


exports["default"] = LocationOptions;