"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConvertGeodesicAddress =
/*#__PURE__*/
function () {
  function ConvertGeodesicAddress() {
    _classCallCheck(this, ConvertGeodesicAddress);
  }

  _createClass(ConvertGeodesicAddress, [{
    key: "convertGeodesicAddress",
    value: function convertGeodesicAddress() {
      var _this = this;

      return regeneratorRuntime.async(function convertGeodesicAddress$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                Geolocation.getCurrentPosition(function (position) {
                  _this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                  });

                  Geocoder.from(position.coords.latitude, position.coords.longitude).then(function (json) {
                    console.log(json);
                    var addressComponent = json.results[0].address_components;

                    _this.setState({
                      Address: addressComponent
                    });

                    console.log(addressComponent);
                  })["catch"](function (error) {
                    return console.warn(error);
                  });
                }, function (error) {
                  // See error code charts below.
                  _this.setState({
                    error: error.message
                  }), console.log(error.code, error.message);
                }, {
                  enableHighAccuracy: false,
                  timeout: 10000,
                  maximumAge: 100000
                }); // fetch(
                //   'https://maps.googleapis.com/maps/api/geocode/json?address=' +
                //    latitude +
                //     ',' +
                //     longitude +
                //     '&key=' +
                //     'AIzaSyChJmLa9YJXOF0N5tYeKl7a8fQW55H5YzU',  //GeoCoding API key
                // )
                //   .then(response => response.json())
                //   .then(responseJson => {
                //     console.log(
                //       'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
                //     );
                //     resolve(responseJson);
                //   })
                //   .catch(ex => {
                //   //   if (Exception(ex)) {
                //       const {code, message} = ex;
                //        console.warn(code, message);
                //   //     //setError(code);
                //       reject(code);
                //   //   } else {
                //   //     console.warn(ex);
                //   //   }        
                //   });
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return ConvertGeodesicAddress;
}();

exports["default"] = ConvertGeodesicAddress;