// import {useSelector, useDispatch} from 'react-redux';
// import {useNavigation, useIsFocused} from '@react-navigation/native';
// import {removeAddress} from '../../redux/actions/actions';
// import axios from 'axios';
// import {AddAddressUrl, address} from '../../constants/Apis';
// export const OwnerAddressCustomHook = () => {
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const addressList = useSelector(state => state.AddressReducers);
//   const Data = axios
//     .get(AddAddressUrl)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   const dispatch = useDispatch();
//   const handleOwnerAddAddress = () => {
//     navigation.navigate('Owneraddaddress');
//   };
//   const handleDeleteAddress = (id: number, index: any) => {
//     dispatch(removeAddress(id, index));
//   };
//   const goBackButton = () => {
//     navigation.goBack();
//   };
//   return {
//     addressList,
//     handleOwnerAddAddress,
//     handleDeleteAddress,
//     isFocused,
//     goBackButton,
//     Data,
//   };
// };

























// import {useSelector, useDispatch} from 'react-redux';
// import {useNavigation, useIsFocused} from '@react-navigation/native';
// import {removeAddress} from '../../redux/actions/actions';
// export const OwnerAddressCustomHook = () => {
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const addressList = useSelector(state => state.AddressReducers);
//   const dispatch = useDispatch();
//   const handleOwnerAddAddress = () => {
//     navigation.navigate('Owneraddaddress');
//   };
//   const handleDeleteAddress = (id: number, index: any) => {
//     dispatch(removeAddress(id, index));
//   };
//   const goBackButton = () => {
//     navigation.goBack();
//   };
//   return {
//     addressList,
//     handleOwnerAddAddress,
//     handleDeleteAddress,
//     isFocused,
//     goBackButton,
//   };
// };


//-----------------

import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {removeAddress} from '../../redux/actions/actions';
import axios from 'axios';
import {AddAddressUrl, address} from '../../constants/Apis';
import { useState } from 'react';
export const OwnerAddressCustomHook = () => {
  const [address,setAddress]=useState([])
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector(state => state.AddressReducers);
  // const Data = axios
  //   .get('http://d38a-122-171-148-208.ngrok-free.app/api/v1/address/2f93efb5-8c32-45e6-a093-7cddc02e7710')
  //   .then(response => {
  //     console.log(response.data);
  //     setAddress(response.data)
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  const dispatch = useDispatch();
  const handleOwnerAddAddress = () => {
    navigation.navigate('Owneraddaddress',address);
  };
  const handleDeleteAddress = (id: number, index: any) => {
    dispatch(removeAddress(id, index));
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
    // Data,
  };
};