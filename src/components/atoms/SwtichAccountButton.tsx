import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const SwitchAccountButton = () => {
  const [accountType, setAccountType] = useState('borrower');
  const handlePress = () => {
    if (accountType === 'borrower') {
      setAccountType('owner');
    } else {
      setAccountType('borrower');
    }
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <View style={styles.icon}>
        <Text style={styles.text}>
          {accountType === 'borrower' ? 'B' : 'O'}
        </Text>
      </View>
      <Text style={styles.label}>
        {accountType === 'borrower' ? 'Switch to Owner' : 'Switch to Borrower'}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  icon: {
    // backgroundColor: '#000',
    backgroundColor: '#3E54AC',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    top: 0,
    right: 0,
    margin: 20,
    marginLeft: 180,
    marginBottom: 30,
    // marginRight: 0,
  },
});
export default SwitchAccountButton;
