import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';
const { width } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';

export default AssettypeDropdown1 = ({ Data, onPress, selectitem, LanguageOpt }) => {





  return (
    <SafeAreaView style={styles.saveAreaViewContainer}>

      <View style={styles.viewContainer}>

        <SelectDropdown
          data={Data}
          // defaultValueByIndex={1}
          // defaultValue={'Egypt'}
          onSelect={onPress}
          defaultButtonText={''}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return <AntDesign name={isOpened ? 'downcircleo' : 'doubleright'} color={'#476c3f'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />


      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  saveAreaViewContainer: { flex: 1 },
  viewContainer: { flex: 1, width: width / 2, marginTop: 10 },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    //alignItems: 'center',
    paddingVertical: '5%',
    paddingBottom: '20%',

    paddingLeft: 15
  },

  dropdown1BtnStyle: {
    width: '90%',
    height: 55,
    backgroundColor: '#FFF',
    borderRadius: 8,
    //borderWidth: 1,
    //borderColor: '#70ab70',
    elevation: 3
  },
  dropdown1BtnTxtStyle: { color: '#476c3f', textAlign: 'left', fontSize: 15 },
  dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
}
);