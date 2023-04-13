import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ownerstyles from '../../screens/Additems/Additemsstyle';
import Colors from '../../constants/Colors';
import axios from 'axios';

const DropdownComponent = ({value, onChange}) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://21c7-106-51-70-135.ngrok-free.app/category/list',
        );
        const categoriesArray = response.data.map(category => ({
          value: category.id,
          label: category.categoryName,
        }));
        setCategoriesData(categoriesArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
          placeholder={!isFocus ? 'Select item' : '...'}
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
    alignItems: 'center',
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
    marginLeft: '30%',
  },
  selectedTextStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.iconscolor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '40%',
  },
  iconStyle: {
    width: 20,
    height: 20,
    // color: Colors.iconscolor,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 18,
    backgroundColor: Colors.white,
    color: Colors.main,
  },
});
