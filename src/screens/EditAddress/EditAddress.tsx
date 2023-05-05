import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import style from '../Owneraddaddress/Owneraddressstyle';
import {OwnerAddAddressCustomHook} from '../Owneraddaddress/Useowneraddaddress';
// import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import {OwnerAddressCustomHook} from '../Owneraddaddress/Useowneraddress';
import {useEditaddress} from './UseEditAddress';

const EditAddress = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const {addressLine1, addressLine2, city, state, postalCode} = route.params;
  const {
    setaddressType,
    // setStateName,
    // addressType,
    // setCity,
    // country,
    // setpostalCode,
    // setCountry,
    // addressLine2,
    // setaddressLine1,
    // setaddressLine2,
    // handleSaveAddress,
    handleCheckboxChange,
    handleOptionChange,
    selectedOption,
    isChecked,
    // handlePostalcode,
  } = OwnerAddAddressCustomHook(navigation);
  // const {
  //   addressList,
  //   city,
  //   state,
  //   addressLine1,
  //   addressLine2,
  //   postalCode,
  //   setaddressLine2,
  //   setaddressLine1,
  //   setpostalCode,
  //   setStateName,
  // } = OwnerAddressCustomHook();
  const {
    handleUpdateAddress,
    // setCity,
    // setStateName,
    setAddressLine1,
    setAddressLine2,
    setPostalCode,
    setStateName,
    city,
    addressLine1,
    addressLine2,
    postalCode,
    state,
    setCity,
  } = useEditaddress();
  return (
    <View>
      <View style={style.addAddressHeader}>
        <TouchableOpacity
          style={style.backBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          {/* <MaterialCommunityIcons
            name="arrow-left"
            color={Colors.iconscolor}
            size={26}
          /> */}
          <MaterialIcons
            color={Colors.iconscolor}
            size={26}
            name="arrow-back-ios"
          />
        </TouchableOpacity>
        <View style={style.addAddressContainer}>
          <Text style={style.addAddressText}> Address</Text>
        </View>
      </View>
      <View style={style.subContainer}>
        <Text style={style.Titletext}>Add Address</Text>
        <Text style={style.titleContainer}>____________________________</Text>
        <Text style={style.textField}>Flat no / Building </Text>
        <View>
          <TextInput
            value={addressLine1}
            onChangeText={text => setAddressLine1(text)}
            style={style.inputAddress}
          />
          <Text style={style.textField}>Street / Area </Text>
          <TextInput
            value={addressLine2}
            onChangeText={text => setAddressLine2(text)}
            style={style.inputAddress}
          />
          <Text style={style.textField}> State</Text>
          <TextInput
            value={state}
            // placeholder={'enter City name'}
            style={style.inputAddress}
            // onChangeText={text => {
            //   setCity(text);
            // onChangeText={setStateName}
            // value={firstName}
            onChangeText={text => setStateName(text)}
          />
          <View style={style.textContainer}>
            <Text style={style.textField}> City </Text>
            <Text style={style.textField}> Pincode </Text>
          </View>
          <View style={style.cityContainer}>
            <TextInput
              value={city}
              // placeholder={''}
              style={style.smalltextInputs}
              onChangeText={text => {
                setCity(text);
              }}
            />
            <TextInput
              // value={postalCode}
              // placeholder={'enter  AddressType'}
              style={style.smalltextInputs}
              value={postalCode}
              onChangeText={setPostalCode}
            />
          </View>
          <Text style={style.textField}> Type Of Address</Text>
          <View style={style.containerRadio}>
            <View style={style.optionRadio}>
              <Text style={style.textRadio}>Home</Text>
              <RadioButton
                value="Home"
                status={selectedOption === 'Home' ? 'checked' : 'unchecked'}
                onPress={() => handleOptionChange('Home')}
              />
            </View>
            <View style={style.optionRadio}>
              <Text style={style.textRadio}>Office</Text>
              <RadioButton
                value="Office"
                status={selectedOption === 'Office' ? 'checked' : 'unchecked'}
                onPress={() => handleOptionChange('Office')}
              />
            </View>
          </View>
          <View style={style.containerCheckbox}>
            <Text style={style.textCheckbox}>Make Default Address</Text>
            <CheckBox
              checked={isChecked}
              onPress={handleCheckboxChange}
              checkedColor="#3E54AC"
              containerStyle={style.checkboxContainer}
              size={24}
            />
          </View>
        </View>
        <TouchableOpacity
          style={style.btnfieldAddress}
          onPress={handleUpdateAddress}>
          <Text style={style.btntextAddress}>Update Address </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EditAddress;