// CustomSelectDropdown.js
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomSelectDropdown = ({
  data,
  placeholder,
  onItemSelected,
  placeholdertextColor = 'grey',
}) => {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        onItemSelected && onItemSelected(selectedItem);
      }}
      defaultButtonText={placeholder}
      buttonTextAfterSelection={item => item}
      rowTextForSelection={item => item}
      buttonStyle={styles.dropdownBtn}
      buttonTextStyle={{ color: placeholdertextColor, textAlign: 'left' }}
      renderDropdownIcon={isOpened => (
        <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} size={16} color="#444" />
      )}
      dropdownIconPosition={'right'}
      dropdownStyle={styles.dropdownList}
      rowStyle={styles.dropdownRow}
      rowTextStyle={styles.dropdownRowText}
    />
  );
};

const styles = StyleSheet.create({
  dropdownBtn: {
    width:'100%',
    borderWidth: 1,
    borderColor: '#909090',
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  dropdownList: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  dropdownRow: {
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
  },
  dropdownRowText: {
    color: '#000',
    textAlign: 'left',
  },
});

export default CustomSelectDropdown;
