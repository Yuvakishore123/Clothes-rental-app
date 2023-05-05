/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import style from './Ownereditprofilestyle';
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
import useOwnerProfile from './Useownerprofile';
import CustomModal from '../../components/atoms/CustomModel/CustomModel';
export default function OwnerEditProfileCustomHook() {
  const navigation = useNavigation();
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    handleReset,
    handleUpdate,
    closeModal,
    showModal,
  } = useOwnerProfile();
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(
      firstName.trim().length > 0 &&
        lastName.trim().length > 0 &&
        email.trim().length > 0 &&
        phoneNumber.trim().length > 0,
    );
  }, [firstName, lastName, email, phoneNumber]);
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
              left={-10}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={style.line} /> */}
        <View style={style.cardStyle}>
          <View>
            <Text style={style.addAddressText1}>Edit Profile</Text>
            <View style={style.line} />
            <Text style={style.text}>FirstName</Text>
            <TextInput
              style={style.input}
              placeholderTextColor="#999"
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
            <Text style={style.text}>LastName</Text>
            <TextInput
              style={style.input}
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
            <Text style={style.text}>Email</Text>
            <TextInput
              style={style.input}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Text style={style.text}>phonenumber</Text>
            <TextInput
              style={style.input}
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
        </View>
        <View style={style.buttons}>
          <TouchableOpacity
            style={[
              style.btnfield,
              {
                opacity: isFormValid ? 1 : 0.5,
                pointerEvents: isFormValid ? 'auto' : 'none',
              },
            ]}
            onPress={() => handleUpdate(navigation)}
            disabled={!isFormValid}>
            <Text style={style.btntext}>Update </Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomModal
        showModal={showModal}
        onClose={closeModal}
        message="Item added successfully!"
      />
    </ScrollView>
  );
}
