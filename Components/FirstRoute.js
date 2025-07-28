import React from 'react';
import {View, Text} from 'react-native';
function FirstRoute({
  Language,
  resourceId,
  resourceMobileNumber,
  resourceName,
  LanguageOpt,
}) {
  console.log(LanguageOpt);
  return (
    <View>
      
      {/* <Text>Language: {Language}</Text> */}
      <Text>Resource ID: {resourceId}</Text>
      <Text>Resource Mobile Number: {resourceMobileNumber}</Text>
      <Text>Resource Name: {resourceName}</Text>
      {/* <Text>Language Option: {LanguageOpt}</Text> */}
    </View>
  );
}

export default FirstRoute;
