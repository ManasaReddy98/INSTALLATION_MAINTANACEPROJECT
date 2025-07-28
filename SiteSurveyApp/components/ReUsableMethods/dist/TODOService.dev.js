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
    key: "getDataFromApi",
    value: function getDataFromApi(url) {
      var response;
      return regeneratorRuntime.async(function getDataFromApi$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              //const url =
              // Constants.API_BASE_URL + '/' + 'Login/' + userName + '/' + passWord;
              //const url = 'http://123.176.46.19:90/api/v1/BillingDetails/0306000001';
              console.log('Consume URL :: ' + url);
              _context.next = 4;
              return regeneratorRuntime.awrap(fetch(url));

            case 4:
              response = _context.sent;
              return _context.abrupt("return", response.json());

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    }
  }, {
    key: "createAsset",
    value: function createAsset(url, body) {
      var response, statusCode;
      return regeneratorRuntime.async(function createAsset$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("#### CREATE ASSET ####"); //console.log("Payload", "Asset Payload " + JSON.stringify(body));
              // const req = "http://redmine.eficaa.com:81/redmine/issues/" + IsuueId + ".json";
              // console.log("Report Issue", "Request" + req);

              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json' //"Authorization": 'Basic ' + base64.encode("sailaja.cheela@eficaa.in" + ":" + "test@1234")

                },
                body: JSON.stringify(body)
              }));

            case 4:
              response = _context2.sent;
              console.log(" Create Asset ", "Request URL " + url);
              statusCode = response.status;
              console.log("Create Issue RESPONSE STATUS : " + statusCode);

              if (statusCode > 200 && statusCode < 400) {
                _reactNative.Alert.alert("Asset  saved to database successfully");
              } else {
                _reactNative.Alert.alert("Asset not created , please try again ");
              }

              return _context2.abrupt("return", response.json());

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              console.error(_context2.t0);

            case 15:
              _context2.prev = 15;
              return _context2.finish(15);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 12, 15, 17]]);
    }
  }, {
    key: "createUser",
    value: function createUser(url, body) {
      var response;
      return regeneratorRuntime.async(function createUser$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(fetch(url, {
                Method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  'Content-Type': 'application/json'
                }
              }));

            case 3:
              response = _context3.sent;

              if (!(response.status == 200)) {
                _context3.next = 9;
                break;
              }

              // let responseText = JSON.stringify(response.text());
              console.log(responseText);
              return _context3.abrupt("return", response.json());

            case 9:
              return _context3.abrupt("return", response.status);

            case 10:
              return _context3.abrupt("return", response.json());

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);

              _reactNative.Alert.alert(_context3.t0); // Using this line
              // if(error.){
              // }


            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 13]]);
    }
  }, {
    key: "fetchLoginUser",
    value: function fetchLoginUser(url) {
      var response;
      return regeneratorRuntime.async(function fetchLoginUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              // const url = 'http://123.176.46.19:90/api/v1/BillingDetails/0306000001';
              console.log('Consume URL' + url);
              _context4.next = 4;
              return regeneratorRuntime.awrap(fetch(url));

            case 4:
              response = _context4.sent;
              return _context4.abrupt("return", response.text());

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 8]]);
    }
  }]);

  return TODOService;
}();
/*
    return fetch(req, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Basic ' + base64.encode("sailaja.cheela@eficaa.in" + ":" + "test@1234")
      },
      body: JSON.stringify(payloadTest)
    }).then(response => response.json())
      .then((responseJson) => {
        const statusCode = responseJson.status;
        console.log("Create Issue RESPONSE STATUS : " + statusCode);
        // if (statusCode > 200 && statusCode<400) {
        alert("Details Updated successfully");
        //  }  else {
        //  alert("Details not updated , please try again");
        //}      
      }).catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        throw error;
      });
    console.log("Response json Complex Data TotalPages :" + JSON.stringify(response));

    alert("Details Updated successfully");
    */

/*
    try {
      responseData = await response.json();
    } catch (e) {
        dispatch({ type: XXX_SSSSS, service: null });
    }
    // alert("Response from server ## "+ JSON.stringify(responseJson));
    console.log("Response json Complex Data TotalPages :" + JSON.stringify(responseData));
   
    let statusCode = responseData.statusCode;
    console.log("Response Status :" + statusCode);
     if (statusCode >200 ) {
       alert("Details Updated successfully");
       
     } else {
       alert("Failed to save Details");
       }
     */

/*
fetch(req, {
  method: 'PUT',
  body: JSON.stringify(payloadTest),
  headers: {
    // Accept: 'application/json',
    'Content-Type': 'application/json',
    "Authorization": 'Basic ' + base64.encode("sailaja.cheela@eficaa.in" + ":" + "test@1234")
  }
}).then(response => response.json())
  .then((responseJson) => {
    const statusCode = responseJson.status;
    console.log("Create Issue RESPONSE STATUS : " + statusCode);
    // if (statusCode > 200 && statusCode<400) {
    alert("Details Updated successfully");
    //  }  else {
    //  alert("Details not updated , please try again");
    //}      
  }).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
     // ADD THIS THROW error
      throw error;
    });
    */
// var payloadTest = {
//   "issue": {
//     "id": IsuueId,
//     "status_id": issueStatusId,
//     "done_ratio": selectedWorkProgress,
//     "notes": comments,
//     "custom_fields": [
//       { "id": 5, "name": "Resolution  Step1", "value": stepData1 },
//       { "id": 6, "name": "Resolution  Step2", "value": stepData2 },
//       { "id": 7, "name": "Resolution  Type", "value": selectedResolutionType }
//     ]
//   }
// }


exports["default"] = TODOService;