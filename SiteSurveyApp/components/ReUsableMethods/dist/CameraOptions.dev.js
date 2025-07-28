"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeImagePicker = require("react-native-image-picker");

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CameraOptions =
/*#__PURE__*/
function () {
  function CameraOptions() {
    _classCallCheck(this, CameraOptions);
  }

  _createClass(CameraOptions, [{
    key: "displayText",
    value: function displayText(str) {
      return 'I am  ' + str;
    }
  }, {
    key: "requestCameraPermission",
    value: function requestCameraPermission() {
      var granted;
      return regeneratorRuntime.async(function requestCameraPermission$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_reactNative.Platform.OS === 'android')) {
                _context.next = 14;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(_reactNative.PermissionsAndroid.request(_reactNative.PermissionsAndroid.PERMISSIONS.CAMERA, {
                title: 'Camera Permission',
                message: 'App needs camera permission'
              }));

            case 4:
              granted = _context.sent;
              return _context.abrupt("return", granted === _reactNative.PermissionsAndroid.RESULTS.GRANTED);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.warn(_context.t0);
              return _context.abrupt("return", false);

            case 12:
              _context.next = 15;
              break;

            case 14:
              return _context.abrupt("return", true);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "requestExternalWritePermission",
    value: function requestExternalWritePermission() {
      var granted;
      return regeneratorRuntime.async(function requestExternalWritePermission$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_reactNative.Platform.OS === 'android')) {
                _context2.next = 15;
                break;
              }

              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(_reactNative.PermissionsAndroid.request(_reactNative.PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                title: 'External Storage Write Permission',
                message: 'App needs write permission'
              }));

            case 4:
              granted = _context2.sent;
              return _context2.abrupt("return", granted === _reactNative.PermissionsAndroid.RESULTS.GRANTED);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.warn(_context2.t0);
              alert('Write permission err', _context2.t0);

            case 12:
              return _context2.abrupt("return", false);

            case 15:
              return _context2.abrupt("return", true);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "captureImage",
    value: function captureImage(type) {
      var options;
      return regeneratorRuntime.async(function captureImage$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              //let imageBase64 ="";
              options = {
                mediaType: type,
                maxWidth: 300,
                maxHeight: 550,
                quality: 1,
                videoQuality: 'low',
                durationLimit: 30,
                //Video max duration in seconds
                saveToPhotos: true,
                includeBase64: true
              };
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                (0, _reactNativeImagePicker.launchCamera)(options, function (res) {
                  //res is callback, https://github.com/react-native-image-picker/react-native-image-picker/blob/main/README.md#options.
                  if (res.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (res.error) {
                    console.log('ImagePicker Error: ', res.error);
                  } else if (res.customButton) {
                    console.log('User tapped custom button: ', res.customButton);
                    alert(res.customButton);
                  } else {
                    var source = {
                      uri: res.uri
                    };
                    console.log('response', JSON.stringify(res)); // if (response.assets?.length > 0) {
                    //   const imageBase64 = response.assets[0].base64
                    //     ? response.assets[0].base64
                    //     : '';
                    //     // const response = await fetch(url);
                    //     // return response.json();
                    //   return response.json ;
                    // }

                    resolve(res); // changed from return to resolve
                  }
                });
              }));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return CameraOptions;
}(); // export default CameraOptions;


exports["default"] = CameraOptions;