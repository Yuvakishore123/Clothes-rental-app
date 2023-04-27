import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ownerstyles from '../../screens/Additems/Additemsstyle';
import Colors from '../../constants/Colors';
import axios from 'axios';
import Useadditems from '../../screens/Additems/Useadditems';

const DropdownComponent = ({value, onChange}) => {
  const {categoriesData} = Useadditems();
  // const [categoriesData, setCategoriesData] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  // const [selectedGender, setSelectedGender] = useState('');

  return (
    <View style={Ownerstyles.scrollView}>
      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={categoriesData}
          search
          maxHeight={400}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Gender' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            onChange(item.value);
            // handleGenderChange(item.label);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  );
};

export default DropdownComponent;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
  },
  dropdownContainer: {
    height: '100%',
    width: 250,
    backgroundColor: '#fffff',
    marginTop: 15,
    borderRadius: 10,
    // elevation: 3,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: '50%',
    width: 250,
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 10,
    // elevation: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 20,
    backgroundColor: Colors.primary,
  },
  label: {
    // position: 'absolute',
    // backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.iconscolor,
    marginLeft: 15,
  },
  selectedTextStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.iconscolor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginRight: 15,
    color: Colors.iconscolor,
    // color: Colors.iconscolor,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 18,
    backgroundColor: Colors.white,
    color: Colors.main,
  },
});

// import React from 'react';
// import {View, Text} from 'react-native';
// import Dropdown from 'react-native-dropdown-picker';

// const GenderDropdown = ({onSelectGender, onChange}) => {
//   const data = [
//     {label: 'Men', value: 'men'},
//     {label: 'Women', value: 'women'},
//   ];

//   return (
//     <View>
//       <Dropdown
//         items={data.filter(
//           item => item.value === 'men' || item.value === 'women',
//         )}
//         defaultValue={'Select Gender'}
//         containerStyle={{height: 50}}
//         style={{backgroundColor: '#fafafa'}}
//         itemStyle={{
//           justifyContent: 'flex-start',
//         }}
//         labelStyle={{fontSize: 16, color: '#000'}}
//         dropDownStyle={{backgroundColor: '#fafafa'}}
//         onChangeItem={item => {
//           onSelectGender(item.value);
//           onChange();
//         }}
//       />
//     </View>
//   );
// };

// export default GenderDropdown;
