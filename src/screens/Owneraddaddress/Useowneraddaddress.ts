import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationProp} from '@react-navigation/native';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from '../../constants/Apis';
export const OwnerAddAddressCustomHook = (
  navigation: NavigationProp<ReactNavigation.RootParamList>,
) => {
  const [city, setCity] = useState('');
  const [addressLine1, setaddressLine1] = useState('');
  const [addressLine2, setaddressLine2] = useState('');
  const [addressType, setaddressType] = useState('');
  const [postalCode, setpostalCode] = useState('');
  const [country, setCountry] = useState('india');
  const [state, setStateName] = useState('');
  const [selectedOption, setSelectedOption] = useState('home');
  const handleOptionChange = value => {
    setSelectedOption(value);
    console.log(addressType);
  };
  const handlePostalcode = value => {
    setpostalCode(value);
    console.log(value);
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSaveAddress = async () => {
    const addressData = {
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      addressType: selectedOption,
      city: city,
      country: country,
      postalCode: postalCode,
      state: state,
      defaultType: isChecked,
    };
    const token = await AsyncStorage.getItem('token');
    try {
      const res = await fetch(`${url}/address/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(addressData),
      });
      const data = await res.json();
      console.log(data); // log the returned data
      if (!res.ok) {
        throw new Error('Failed to save address');
      }
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  };

  return {
    city,
    postalCode,
    state,
    country,
    addressLine1,
    addressLine2,
    setaddressType,
    setStateName,
    addressType,
    setCity,
    setpostalCode,
    setCountry,
    setaddressLine1,
    setaddressLine2,
    handleSaveAddress,
    handleCheckboxChange,
    handleOptionChange,
    selectedOption,
    isChecked,
    handlePostalcode,
  };
};
