import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const PriceRangeDropdown = ({minPrice, maxPrice, onSelectPriceRange}) => {
  const [open, setOpen] = useState(false);

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
        <Text style={styles.buttonText}>{`${minPrice} - ${maxPrice}`}</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleSelectPriceRange(100, 1000)}>
            <Text style={styles.optionText}>₹100 - ₹1000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleSelectPriceRange(1000, 2000)}>
            <Text style={styles.optionText}>₹1000 - ₹2000</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    borderRadius: 20,
    // marginTop: 0,
    // overflow: 'hidden',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.buttonColor,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    marginLeft: 120,
  },
  dropdown: {
    marginTop: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
    elevation: 5,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionText: {
    color: Colors.black,
  },
});

export default PriceRangeDropdown;
