import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import Colors from '../../../constants/Colors';

const FilterSelectSize = ({sizes, selectedSize, onSelectSize}) => {
  const [open, setOpen] = useState(false);
  const dropdownHeight = useRef(new Animated.Value(0)).current;

  const handleToggle = () => {
    setOpen(!open);
    if (open) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const openDropdown = () => {
    Animated.timing(dropdownHeight, {
      toValue: sizes.length * 40, // Adjust the height based on the number of sizes
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeDropdown = () => {
    Animated.timing(dropdownHeight, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleSelectSize = size => {
    onSelectSize(size);
    setOpen(false);
    closeDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleToggle}>
        <Text style={styles.text}>{selectedSize}</Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.dropdown,
          {height: dropdownHeight, zIndex: open ? 9999 : -1}, // Set a higher zIndex when open
        ]}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={styles.option}
            onPress={() => handleSelectSize(size)}>
            <Text style={styles.optionText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

export default FilterSelectSize;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    // position: 'relative',
    zIndex: 1, // Add zIndex to make the dropdown appear above other components
  },
  text: {
    color: Colors.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  button: {
    padding: 10,
    backgroundColor: Colors.buttonColor,
    borderRadius: 20,
    alignItems: 'center',
  },
  dropdown: {
    // position: 'absolute',
    // bottom: '100%', // Change top to bottom
    left: 0,
    right: 0,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 8,
    elevation: 4,
  },

  option: {
    padding: 8,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: Colors.black,
  },
});
