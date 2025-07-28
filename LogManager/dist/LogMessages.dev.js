"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogMessages = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LogMessages = {
  CODE_GENERIC_LOG_MESSAGE: 'Generic Data Log',
  //Represents Data Log
  CODE_APP_NETWORK_FAIL_MESSAGE: 'Network Connection Failed',
  //Represents Network connection failed
  CODE_APP_NETWORK_SUCESS_MESSAGE: 'Network connected Successfully',
  //Represents Network connection Success
  CODE_HTTP_400_LOG_MESSAGE: 'please check your method',
  //Represents HTTP-400 Request failed
  CODE_HTTP_500_LOG_MESSAGE: ' Server Not Responded , Please try after some time',
  //Represents HTTP-500 - Server not responded for request
  CODE_HTTP_200_LOG_MESSAGE: 'Server Data Recieved Successfully',
  ////Represents HTTP-200 - Recieved data from server
  CODE_HTTP: 'Status Code Recieved',
  CODE_HTTP_EmptyRecieved: 'Data not available from server',
  CODE_HTTP_DataBlockEntered: 'Data Block Entered',
  CODE_HTTP_200: '200',
  CODE_HTTP_201: '201',
  CODE_HTTP_400: '400',
  CODE_HTTP_500: '500',
  CODE_HTTP_VERIFY_VALID: 'VALID',
  CODE_HTTP_VERIFY_NOTVALID: 'NOT VALID',
  CODE_RAISE_COMPLAINT: 'Complaint Raised Successfully',
  CODE_ADD_TENENT: 'Tenent Added Successfully'
};
exports.LogMessages = LogMessages;