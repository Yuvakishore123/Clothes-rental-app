import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {removeAddress} from '../../redux/actions/actions';
import axios from 'axios';
import {AddAddressUrl, address, url} from '../../constants/Apis';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
export const OwnerAddressCustomHook = () => {
  const [addressList, setAddress] = useState([]);
  const [city, setCity] = useState('');
  const [addressLine1, setaddressLine1] = useState('');
  const [addressLine2, setaddressLine2] = useState('');
  const [addressType, setaddressType] = useState('');
  const [postalCode, setpostalCode] = useState('');
  const [country, setCountry] = useState('india');
  const [state, setStateName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState('');
  const navigation = useNavigation();
  // const isFocused = useIsFocused();
  // const addressList = useSelector(state => state.AddressReducers);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        };
        const response = await axios.get(`${url}/address/listaddress`, {
          headers,
        });
        const data = await response.data;
        console.log(response.data);
        setIsLoading(false);
        setAddress(data);
        setCity(data.city);
        setId(data.id);
        setStateName(data.state);
        setaddressLine1(data.addressLine1);
        setaddressLine2(data.addressLine2);
        setpostalCode(data.postalCode);
        console.log(
          id,
          city,
          state,
          country,
          postalCode,
          addressLine1,
          addressLine2,
        );
        console.log(address);
      } catch (error) {
        console.log(error);
        // setIsLoading(false);
      }
    };
    setIsFocused(true);
    fetchData();
    return () => {
      setIsFocused(false);
    };
  }, []);

  const dispatch = useDispatch();
  const handleEditItems = item => {
    navigation.navigate('EditAddress', {address: item});
  };

  const handleOwnerAddAddress = () => {
    navigation.navigate('Owneraddaddress', addressList);
    // console.log(address);
    // console.log(city, state, postalCode, addressLine1, addressLine2);
  };
  const handleDeleteAddress = (id: string) => {
    dispatch(removeAddress(id));
  };
  const goBackButton = () => {
    navigation.goBack();
  };
  return {
    addressList,
    handleOwnerAddAddress,
    handleDeleteAddress,
    isFocused,
    goBackButton,
    address,
    city,
    state,
    postalCode,
    addressLine1,
    addressLine2,
    setCity,
    setCountry,
    setaddressLine1,
    setaddressLine2,
    isLoading,
    setStateName,
    setpostalCode,
    handleEditItems,
    // Data,
  };
};
