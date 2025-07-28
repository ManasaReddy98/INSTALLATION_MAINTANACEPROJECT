"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _LogMessages = require("../LogManager/LogMessages");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//https://www.youtube.com/watch?v=osflqro5nck
var TODOService =
/*#__PURE__*/
function () {
  function TODOService() {
    _classCallCheck(this, TODOService);
  }

  _createClass(TODOService, [{
    key: "displayText",
    //   constructor(url) {
    //     this.url = url;
    //   }
    value: function displayText() {
      return 'I have a ' + this.url;
    }
  }, {
    key: "AuthenticatorService",
    value: function AuthenticatorService(url, token) {
      var response, data;
      return regeneratorRuntime.async(function AuthenticatorService$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'GET',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                }
              }));

            case 3:
              response = _context.sent;

              if (response.ok) {
                _context.next = 8;
                break;
              }

              throw new Error("HTTP error! Status: ".concat(response.status));

            case 8:
              _context.next = 10;
              return regeneratorRuntime.awrap(response.json());

            case 10:
              data = _context.sent;
              console.log('Response ### :', _LogMessages.LogMessages.CODE_HTTP_200_LOG_MESSAGE);
              return _context.abrupt("return", {
                data: data,
                status: response.status
              });

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);

              if (_context.t0.response && _context.t0.response.status === 500) {
                _reactNative.Alert.alert(' User credentials not matched, Please try again ');
              } else {
                _reactNative.Alert.alert(' User credentials not matched, Please try again '); // Alert.alert(error.message); // Set error message from the caught error

              }

              throw _context.t0;

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 15]]);
    }
  }, {
    key: "getDataFromApi",
    value: function getDataFromApi(url, token) {
      var response, data;
      return regeneratorRuntime.async(function getDataFromApi$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'GET',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                }
              }));

            case 3:
              response = _context2.sent;

              if (response.ok) {
                _context2.next = 8;
                break;
              }

              throw new Error("HTTP error! Status: ".concat(response.status));

            case 8:
              _context2.next = 10;
              return regeneratorRuntime.awrap(response.json());

            case 10:
              data = _context2.sent;
              console.log('Response ### :', _LogMessages.LogMessages.CODE_HTTP_200_LOG_MESSAGE);
              return _context2.abrupt("return", {
                data: data,
                status: response.status
              });

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 15]]);
    }
  }, {
    key: "createConsumerUser",
    value: function createConsumerUser(url, body) {
      var response, statusCode, data;
      return regeneratorRuntime.async(function createConsumerUser$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('#### CREATE ASSET ####'); //console.log("Payload", "Asset Payload " + JSON.stringify(body));
              // const req = "http://redmine.eficaa.com:81/redmine/issues/" + IsuueId + ".json";
              // console.log("Report Issue", "Request" + req);

              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json' //"Authorization": 'Basic ' + base64.encode("sailaja.cheela@eficaa.in" + ":" + "test@1234")

                },
                body: JSON.stringify(body)
              }));

            case 4:
              response = _context3.sent;
              // console.log(" Create Consumer ", "Request URL " + url);
              statusCode = response.status;
              console.log('Create Consumer RESPONSE STATUS : ' + statusCode); // if (statusCode > 200 && statusCode < 400) {
              //   Alert.alert("Consumer  saved to database successfully");
              // } else {
              //   Alert.alert("Consumer not created , please try again " );
              // }

              _context3.next = 9;
              return regeneratorRuntime.awrap(response.json());

            case 9:
              data = _context3.sent;
              console.log('Response Data  ### : ', _LogMessages.LogMessages.CODE_HTTP_200_LOG_MESSAGE, JSON.stringify(data));
              return _context3.abrupt("return", {
                data: data,
                status: response.status
              });

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](1);
              console.error(_context3.t0);

            case 17:
              _context3.prev = 17;
              return _context3.finish(17);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 14, 17, 19]]);
    }
  }, {
    key: "createUser",
    value: function createUser(url, body) {
      var response, data;
      return regeneratorRuntime.async(function createUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              // const url = 'http://123.176.46.19:90/api/v1/BillingDetails/0306000001';
              console.log('URL Create User ### : ', 'CREATE USER API RAISED ');
              _context4.next = 4;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  'Content-Type': 'application/json'
                }
              }));

            case 4:
              response = _context4.sent;
              console.log('Response ### : ', JSON.stringify(response));
              _context4.next = 8;
              return regeneratorRuntime.awrap(response.json());

            case 8:
              data = _context4.sent;
              console.log('Response Data  ### : ', _LogMessages.LogMessages.CODE_HTTP_200_LOG_MESSAGE, JSON.stringify(data));
              return _context4.abrupt("return", {
                data: data,
                status: response.status
              });

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 13]]);
    }
  }, {
    key: "createAPIFunction",
    value: function createAPIFunction(url, body, token) {
      var response, data;
      return regeneratorRuntime.async(function createAPIFunction$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              console.log('URL GIVEN', 'URL GIVEN ####### ' + 'CREATE USER API RAISED ' + url);
              console.log('URL GIVEN', 'URL GIVEN ####### ' + 'CREATE USER API RAISED ' + JSON.stringify(body));
              _context5.next = 5;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                }
              }));

            case 5:
              response = _context5.sent;
              _context5.next = 8;
              return regeneratorRuntime.awrap(response.json());

            case 8:
              data = _context5.sent;
              console.log('Response Data  ### : ', response.status);
              console.log('Response Data  ### : ', JSON.stringify(data));
              return _context5.abrupt("return", {
                data: data,
                status: response.status
              });

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              console.error(_context5.t0);

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 14]]);
    }
  }, {
    key: "fetchLoginUser",
    value: function fetchLoginUser(url) {
      var token, response, responseStatus, data;
      return regeneratorRuntime.async(function fetchLoginUser$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdGluZyIsIm5iZiI6MTcwODMyNzc5MiwiZXhwIjoxNzA4NDM1NzkyLCJpYXQiOjE3MDgzMjc3OTIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5OSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5OSJ9.oG45xr9GF2tzJ2Y81CVE3YmUo9Im3lIXJ_LxkNBtN9U';
              _context6.next = 4;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              }));

            case 4:
              response = _context6.sent;
              responseStatus = response.status; // console.log('Response Data  ### : ', responseStatus);

              _context6.next = 8;
              return regeneratorRuntime.awrap(response.text());

            case 8:
              data = _context6.sent;
              console.log('Response Data  ### : ', _LogMessages.LogMessages.CODE_HTTP_200_LOG_MESSAGE);
              return _context6.abrupt("return", {
                data: data,
                status: response.status
              });

            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](0);
              throw _context6.t0;

            case 16:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, [[0, 13]]);
    }
  }, {
    key: "fetchLoginUser_withoutToken",
    value: function fetchLoginUser_withoutToken(url) {
      var response, responseStatus, data;
      return regeneratorRuntime.async(function fetchLoginUser_withoutToken$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json' //   Authorization: `Bearer ${token}`,

                }
              }));

            case 3:
              response = _context7.sent;
              responseStatus = response.status; // console.log('Response Data  ### : ', responseStatus);

              _context7.next = 7;
              return regeneratorRuntime.awrap(response.json());

            case 7:
              data = _context7.sent;
              console.log('Response Data  ### : ', _LogMessages.LogMessages.CODE_HTTP_200_LOG_MESSAGE);
              return _context7.abrupt("return", {
                data: data,
                status: response.status
              });

            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](0);
              throw _context7.t0;

            case 15:
            case "end":
              return _context7.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }, {
    key: "saveLoginUserwithoutToken",
    value: function saveLoginUserwithoutToken(url, body) {
      var token, response, data;
      return regeneratorRuntime.async(function saveLoginUserwithoutToken$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdGluZyIsIm5iZiI6MTcwODMyNzc5MiwiZXhwIjoxNzA4NDM1NzkyLCJpYXQiOjE3MDgzMjc3OTIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5OSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5OSJ9.oG45xr9GF2tzJ2Y81CVE3YmUo9Im3lIXJ_LxkNBtN9U';
              _context8.prev = 1;
              console.log(' URL GIVEN ', ' URL GIVEN LOGIN REQUEST RAISED ####### ');
              _context8.next = 5;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  //  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json'
                }
              }));

            case 5:
              response = _context8.sent;
              console.log('Response Data  ### : ', response.status);
              _context8.next = 9;
              return regeneratorRuntime.awrap(response.json());

            case 9:
              data = _context8.sent;
              console.log('Response Data  ### : ', _LogMessages.LogMessages.CODE_HTTP_200_LOG_MESSAGE);
              return _context8.abrupt("return", {
                data: data,
                status: response.status
              });

            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](1);
              console.error(_context8.t0);

            case 17:
            case "end":
              return _context8.stop();
          }
        }
      }, null, null, [[1, 14]]);
    }
  }, {
    key: "createAsset",
    value: function createAsset(url, body) {
      var response, statusCode;
      return regeneratorRuntime.async(function createAsset$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              console.log('#### CREATE ASSET API CALLING  ####'); //console.log("Payload", "Asset Payload " + JSON.stringify(body));
              // const req = "http://redmine.eficaa.com:81/redmine/issues/" + IsuueId + ".json";
              // console.log("Report Issue", "Request" + req);

              _context9.prev = 1;
              _context9.next = 4;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json' //"Authorization": 'Basic ' + base64.encode("sailaja.cheela@eficaa.in" + ":" + "test@1234")

                },
                body: JSON.stringify(body)
              }));

            case 4:
              response = _context9.sent;
              console.log(' Create Asset ', 'Request URL ' + url);
              statusCode = response.status;
              console.log('Create Issue RESPONSE STATUS : ' + statusCode); // if (statusCode >= 200 && statusCode < 400) {
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

              return _context9.abrupt("return", response.json());

            case 11:
              _context9.prev = 11;
              _context9.t0 = _context9["catch"](1);
              console.error(_context9.t0);

            case 14:
              _context9.prev = 14;
              return _context9.finish(14);

            case 16:
            case "end":
              return _context9.stop();
          }
        }
      }, null, null, [[1, 11, 14, 16]]);
    }
  }]);

  return TODOService;
}();

exports["default"] = TODOService;