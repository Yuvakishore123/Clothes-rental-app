import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../constants/Colors';

const PriceRangeDropdown = ({minPrice, maxPrice, onSelectPriceRange}) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelectPriceRange = (min, max) => {
    onSelectPriceRange(min, max);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleToggle}>
        <Text>{`${minPrice} - ${maxPrice}`}</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleSelectPriceRange(100, 1000)}>
            <Text>100 - 1000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleSelectPriceRange(1000, 2000)}>
            <Text>1000 - 2000</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PriceRangeDropdown;
const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    width: '85%',
    height: '20%',
    borderRadius: 100,
    // backgroundColor: Colors.black,
  },
  Text: {color: Colors.white},
  button: {
    padding: 10,
    backgroundColor: Colors.buttonColor,
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: 'gray',
  },
  dropdown: {
    // position: 'absolute',
    // top: '100%',
    // left: 0,
    // right: 0,
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: 'gray',
    // zIndex: 1,
  },
  option: {
    padding: 10,
  },
});
