import React from 'react';
import styles from './paymentstylesheet';
import {View, Text} from 'react-native';
import Lottie from 'lottie-react-native';
const PaymentFailScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <View style={styles.successContainer}>
        <Lottie
          source={require('../../../Assets/payfail1.json')}
          autoPlay
          style={{height: 200}}
        />
        <Text style={styles.successText}>Payment Failed! </Text>
        <Text style={styles.successText1}>
          Something went wrong. Try Again.{' '}
        </Text>
      </View>
    </View>
  );
};
export default PaymentFailScreen;
