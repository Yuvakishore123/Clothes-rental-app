// import {
//   Text,
//   TextInput,
//   View,
//   Alert,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';
// // import useOwnerProfile from './useOwnerProfile';
// import OwnerEditProfileCustomHook from './Useownerprofile';
// import style from './Ownereditprofilestyle';
// import Colors from '../../constants/Colors';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// const OwnerEditProfile = () => {
//   const navigation = useNavigation();
//   const {
//     name,
//     setName,
//     email,
//     setEmail,
//     password,
//     setPassword,
//     telephone,
//     setTelephone,
//     gender,
//     setGender,
//     value,
//     setValue,
//     handleRadioPress,
//     handleReset,
//   } = OwnerEditProfileCustomHook();
//   const handleUpdate = () => {
//     // Perform update action here
//     Alert.alert('Profile updated!');
//   };
//   return (
//     <ScrollView>
//       <View style={style.container}>
//         <View style={style.addAddressHeader}>
//           <TouchableOpacity
//             style={style.backBtn}
//             onPress={() => {
//               navigation.goBack();
//             }}>
//             <MaterialCommunityIcons
//               name="arrow-left"
//               color={Colors.iconscolor}
//               size={26}
//             />
//           </TouchableOpacity>
//           <Text style={style.addAddressText}>Edit Profile</Text>
//         </View>
//         <View style={style.cardStyle}>
//           <View>
//             <Text style={style.text}>Name</Text>
//             <TextInput
//               style={style.input}
//               placeholder="Name"
//               value={name}
//               onChangeText={text => setName(text)}
//             />
//             <Text style={style.text}>Email</Text>
//             <TextInput
//               style={style.input}
//               placeholder="email"
//               value={email}
//               onChangeText={text => setEmail(text)}
//             />
//             <Text style={style.text}>Password</Text>
//             <TextInput
//               style={style.input}
//               placeholder="password"
//               value={password}
//               onChangeText={text => setPassword(text)}
//             />
//             <Text style={style.text}>Telephone</Text>
//             <TextInput
//               style={style.input}
//               placeholder="Telephone Number"
//               value={telephone}
//               onChangeText={text => setTelephone(text)}
//             />
//           </View>
//           <View>
//             <Text style={style.text}>Gender:</Text>
//             <View style={style.radioContainer}>
// <View style={style.containerRadio}>
//   <TouchableOpacity onPress={() => handleRadioPress('male')}>
//     <View style={{flexDirection: 'row', alignItems: 'center'}}>
//       {value === 'male' && <View style={style.radioChecked} />}
//       {value !== 'male' && <View style={style.radioUnchecked} />}
//       <Text style={style.radioButtonText}>Male</Text>
//     </View>
//   </TouchableOpacity>
//   <TouchableOpacity onPress={() => handleRadioPress('female')}>
//     <View style={{flexDirection: 'row', alignItems: 'center'}}>
//       {value === 'female' && <View style={style.radioChecked} />}
//       {value !== 'female' && (
//         <View style={style.radioUnchecked} />
//       )}
//       <Text style={style.radioText2}>Female</Text>
//     </View>
//   </TouchableOpacity>
// </View>
//             </View>
//           </View>
//         </View>
//         <View style={style.buttons}>
//           <TouchableOpacity style={style.btnfield} onPress={handleReset}>
//             <Text style={style.btntext}>Reset </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={style.btnfield} onPress={handleUpdate}>
//             <Text style={style.btntext}>Update </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };
// export default OwnerEditProfile;
import {
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import style from './Ownereditprofilestyle';
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
const OwnerEditProfile = () => {
  const navigation = useNavigation();
  // State variables for profile information
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const handleReset = () => {
    setfirstName('');
    setlastName('');
    setEmail('');
    setphoneNumber('');
  };
  // Function to update profile information
  const handleUpdate = async () => {
    try {
      // Make API call to update profile information
      const response = await fetch(
        'https://e5b5-122-172-176-124.ngrok-free.app/api/v1/user/update?token=7799a9f1-52a2-461d-9146-c91db88ea8ef',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
          }),
        },
      );
      // Check if API call was successful
      if (response.ok) {
        Alert.alert('Profile updated!');
        navigation.navigate('OwnerProfile');
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Failed to update profile');
    }
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.addAddressHeader}>
          <TouchableOpacity
            style={style.backBtn}
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialIcon
              name="md-chevron-back"
              color={Colors.iconscolor}
              size={26}
            />
          </TouchableOpacity>
          <Text style={style.addAddressText}>Edit Profile</Text>
        </View>
        <View style={style.line} />
        <View style={style.cardStyle}>
          <View>
            <Text style={style.text}>FirstName</Text>
            <TextInput
              style={style.input}
              // placeholder="First Name"
              placeholderTextColor="#999"
              // fontWeight="300"
              value={firstName}
              onChangeText={text => setfirstName(text)}
            />
            <Text style={style.text}>LastName</Text>
            <TextInput
              style={style.input}
              // placeholder="Last Name"
              value={lastName}
              onChangeText={text => setlastName(text)}
            />
            <Text style={style.text}>Email</Text>
            <TextInput
              style={style.input}
              // placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Text style={style.text}>phonenumber</Text>
            <TextInput
              style={style.input}
              // placeholder="Telephone"
              value={phoneNumber}
              onChangeText={text => setphoneNumber(text)}
            />
          </View>
        </View>
        <View style={style.buttons}>
          <TouchableOpacity style={style.btnfield1} onPress={handleReset}>
            <Text style={style.btntext1}>Reset </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnfield} onPress={handleUpdate}>
            <Text style={style.btntext}>Update </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default OwnerEditProfile;
