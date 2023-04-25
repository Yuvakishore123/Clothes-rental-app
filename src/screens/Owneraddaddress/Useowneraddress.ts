import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {removeAddress} from '../../redux/actions/actions';
import axios from 'axios';
import {AddAddressUrl, address} from '../../constants/Apis';
export const OwnerAddressCustomHook = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector(state => state.AddressReducers);
  const Data = axios
    .get(AddAddressUrl)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  const dispatch = useDispatch();
  const handleOwnerAddAddress = () => {
    navigation.navigate('Owneraddaddress');
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
    Data,
  };
};

























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
