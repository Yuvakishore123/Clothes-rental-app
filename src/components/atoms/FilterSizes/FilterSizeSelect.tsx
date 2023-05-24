import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
const FilterSelectSize = ({sizes, selectedSize, onSelectSize}) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelectSize = size => {
    onSelectSize(size);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleToggle}>
        <Text style={styles.Text}>{selectedSize}</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdown}>
          {sizes.map(size => (
            <TouchableOpacity
              key={size}
              style={styles.option}
              onPress={() => handleSelectSize(size)}>
              <Text>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default FilterSelectSize;
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
