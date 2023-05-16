import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ownerstyles from '../../screens/Additems/Additemsstyle';
import Colors from '../../constants/Colors';
import axios from 'axios';
import Useadditems from '../../screens/Additems/Useadditems';

const DropdownComponent = ({value, onChange}) => {
  const {subCategoriesData} = Useadditems();
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={Ownerstyles.scrollView}>
      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.itemTextStyle}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          itemContainerStyle={styles.itemContainerStyle}
          selectedItemContainerStyle={styles.selectedItemContainerStyle}
          iconStyle={styles.iconStyle}
          data={subCategoriesData}
          search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Type' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            onChange(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  );
};

export default DropdownComponent;
const styles = StyleSheet.create({
  dropdownContainer: {
    height: 56,
    width: '110%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    // marginLeft: -3,
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdown: {
    height: '50%',
    width: '100%',

    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  placeholderStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.5)',
    marginLeft: 16,
  },
  selectedTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginRight: 15,
    color: '#FFFFFF',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'black',
  },
  itemTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    padding: 10,
  },
  selectedItemTextStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    // padding: 10,
  },
  itemContainerStyle: {
    backgroundColor: Colors.white,

    borderRadius: 10, // Add this line
  },
  selectedItemContainerStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
});
