import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useEditaddress = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {address} = route.params;
  const [city, setCity] = useState(address.city);
  const [state, setStateName] = useState(address.state);
  const [addressLine1, setAddressLine1] = useState(address.addressLine1);
  const [addressLine2, setAddressLine2] = useState(address.addressLine2);
  const [postalCode, setPostalCode] = useState(address.postalCode);
  const [country, setCountry] = useState(address.country);
  const handleUpdateAddress = async (id, address) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(
        `https://b015-180-151-211-120.ngrok-free.app/api/v1/address/update/${id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(address),
        },
      );
      if (response.ok) {
        Alert.alert('Address updated successfully');
        navigation.goBack();
      } else {
        Alert.alert('Failed to update address');
      }
    } catch (error) {
      Alert.alert('Failed to update address');
      console.error(error);
    }
    // Alert.alert('button pressed');
  };
  return {
    handleUpdateAddress,
    setCity,
    city,
    addressLine1,
    setStateName,
    postalCode,
    setPostalCode,
    addressLine2,
    state,
    setAddressLine1,
    setAddressLine2,
  };
};
