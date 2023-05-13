/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styles from './paymentstylesheet';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
const PaymentSuccessScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <View style={styles.successContainer}>
        <Lottie
          style={{marginTop: -70, height: 200}}
          source={require('../../../assets/paysuccess1.json')}
          autoPlay
        />
        <Text style={styles.successText}>Payment successful! </Text>
        <Text style={styles.successText1}>Your Order Has Been Placed. </Text>
        <TouchableOpacity
          style={styles.btnfield}
          onPress={() => navigation.navigate('Homescreen')}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.btntext}>Continue Shopping </Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              color="black"
              onPress={() => navigation.goBack()}
              style={{
                top: 20,
                left: 60,
                height: 29,
                width: 204,
                fontWeight: 'bold',
                fontFamily: 'Poppins',
                fontSize: 20,
                color: 'white',
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.obtnfield}
          onPress={() => navigation.navigate('MyOrder')}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.obtntext}>Your Orders </Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              color="black"
              onPress={() => navigation.goBack()}
              style={{
                top: 20,
                left: 110,
                height: 29,
                width: 204,
                fontWeight: 'bold',
                fontFamily: 'Poppins',
                fontSize: 20,
                color: '#3E54AC',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PaymentSuccessScreen;
