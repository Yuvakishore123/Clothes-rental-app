/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import styles from './paymentstylesheet';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
import Colors from '../../constants/Colors';

const PaymentSuccessScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const resetStack = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'CartScreen', params: {screen: 'Cart'}}],
      });
    }, 10000); // Adjust the timeout value (in milliseconds) as per your requirement

    return () => clearTimeout(resetStack); // Clear the timeout when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <View style={styles.successContainer}>
        <Lottie
          style={{marginTop: -70, height: 200}}
          source={require('../../../assets/paysuccess2.json')}
          autoPlay
        />
        <Text style={styles.successText2}>Payment successful! </Text>
        <Text style={styles.successText3}>Your Order Has Been Placed. </Text>
        <TouchableOpacity
          style={styles.btnfield}
          onPress={() =>
            navigation.navigate('UserHomescreen', {screen: 'Homescreen'})
          }>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.btntext}>Continue Shopping </Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              color="black"
              // onPress={() => navigation.goBack()}
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
          onPress={() =>
            navigation.navigate('ProfileScreen', {screen: 'MyOrder'})
          }>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.obtntext}>Your Orders </Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              color="black"
              // onPress={() => navigation.goBack()}
              style={{
                top: 20,
                left: 110,
                height: 29,
                width: 204,
                fontWeight: 'bold',
                fontFamily: 'Poppins',
                fontSize: 20,
                color: Colors.buttonColor,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentSuccessScreen;
