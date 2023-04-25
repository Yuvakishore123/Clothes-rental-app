import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addAddress} from '../../redux/actions/actions';
import {NavigationProp} from '@react-navigation/native';
import {Alert} from 'react-native';
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
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('home');
  const handleOptionChange = value => {
    setSelectedOption(value);
    console.log(addressType);
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCountry = () => {
    setCountry('india');
  };
  const handleSaveAddress = () => {
    // if (
    //   addressLine1 !== '' &&
    //   addressLine2 !== '' &&
    //   city !== '' &&
    //   addressType !== '' &&
    //   postalCode !== '' &&
    //   state !== ''
    // )
    {
      dispatch(
        addAddress({
          adddressLine1: addressLine1,
          addressLine2: addressLine2,
          addressType: selectedOption,
          city: city,
          country: country,
          postalCode: postalCode,
          state: state,
          defaultType: isChecked,
        }),
      );
      navigation.goBack();
      // Alert.alert(selectedOption);
    }
  };
  return {
    city,
    postalCode,
    state,
    // country,
    addressLine1,
    addressLine2,
    setaddressType,
    setStateName,
    addressType,
    setCity,
    setpostalCode,
    // setCountry,
    setaddressLine1,
    setaddressLine2,
    handleSaveAddress,
    handleCheckboxChange,
    handleOptionChange,
    selectedOption,
    isChecked,
  };
};





















// import {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import {addAddress} from '../../redux/actions/actions';
// import {NavigationProp} from '@react-navigation/native';
// export const OwnerAddAddressCustomHook = (
//   navigation: NavigationProp<ReactNavigation.RootParamList>,
// ) => {
//   const [city, setCity] = useState('');
//   const [addressLine1, setaddressLine1] = useState('');
//   const [addressLine2, setaddressLine2] = useState('');
//   const [addressType, setaddressType] = useState('');
//   const [postalCode, setpostalCode] = useState('');
//   const [country, setCountry] = useState('');
//   const [state, setStateName] = useState('');
//   const dispatch = useDispatch();
//   const [selectedOption, setSelectedOption] = useState('home');
//   const handleOptionChange = option => {
//     setSelectedOption(option);
//   };
//   const [isChecked, setIsChecked] = useState(false);
//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
//   const handleSaveAddress = () => {
//     if (
//       addressLine1 !== '' &&
//       addressLine2 !== '' &&
//       city !== '' &&
//       addressType !== '' &&
//       postalCode !== '' &&
//       country !== '' &&
//       state !== ''
//     ) {
//       dispatch(
//         addAddress({
//           adddressLine1: addressLine1,
//           addressLine2: addressLine2,
//           addressType: addressType,
//           city: city,
//           country: country,
//           postalCode: postalCode,
//           state: state,
//         }),
//       );
//       navigation.goBack();
//     }
//   };
//   return {
//     city,
//     postalCode,
//     state,
//     country,
//     addressLine1,
//     addressLine2,
//     setaddressType,
//     setStateName,
//     addressType,
//     setCity,
//     setpostalCode,
//     setCountry,
//     setaddressLine1,
//     setaddressLine2,
//     handleSaveAddress,
//     handleCheckboxChange,
//     handleOptionChange,
//     selectedOption,
//     isChecked,
//   };
// };
