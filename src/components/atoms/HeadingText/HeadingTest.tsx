import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeadingText = ({message}) => {
  return (
    <View>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 24,
    marginLeft: 32,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
