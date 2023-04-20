import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import style from './Owneraddressstyle';
import {OwnerAddAddressCustomHook} from './Useowneraddaddress';
// import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
const Owneraddaddress = () => {
  const navigation = useNavigation();
  const {
    city,
    postalCode,
    state,
    addressLine1,
    setaddressType,
    setStateName,
    addressType,
    setCity,
    country,
    setpostalCode,
    setCountry,
    addressLine2,
    setaddressLine2,
    setaddressLine1,
    handleSaveAddress,
    handleCheckboxChange,
    handleOptionChange,
    selectedOption,
    isChecked,
  } = OwnerAddAddressCustomHook(navigation);
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
            // placeholder={'enter AddressLi ne1'}
            onChangeText={text => {
              setaddressLine1(text);
            }}
            style={style.inputAddress}
          />
          <Text style={style.textField}>Street / Area </Text>
          <TextInput
            value={addressLine2}
            // placeholder={'enter AddressLine2'}
            onChangeText={text => {
              setaddressLine2(text);
            }}
            style={style.inputAddress}
          />
          <Text style={style.textField}> State</Text>
          <TextInput
            value={city}
            // placeholder={'enter City name'}
            style={style.inputAddress}
            onChangeText={text => {
              setCity(text);
            }}
          />
          <View style={style.textContainer}>
            <Text style={style.textField}> City </Text>
            <Text style={style.textField}> Pincode </Text>
          </View>
          <View style={style.cityContainer}>
            <TextInput
              value={postalCode}
              // placeholder={''}
              style={style.smalltextInputs}
              onChangeText={text => {
                setpostalCode(text);
              }}
            />
            <TextInput
              value={addressType}
              // placeholder={'enter  AddressType'}
              style={style.smalltextInputs}
              onChangeText={text => {
                setaddressType(text);
              }}
            />
          </View>
          {/* <TextInput
          value={state}
          placeholder={'enter  state name'}
          style={style.inputAddress}
          onChangeText={text => {
            setStateName(text);
          }}
        />
        <TextInput
          value={country}
          placeholder={'enter  CountryName'}
          style={style.inputAddress}
          onChangeText={text => {
            setCountry(text);
          }}
        /> */}
          <Text style={style.textField}> Type of Address </Text>
          <RadioButton
            value="office"
            status={selectedOption === 'office' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('office')}
          />
          <Text style={style.textField}> Make default Address </Text>
          <CheckBox
            checked={isChecked}
            onPress={handleCheckboxChange}
            checkedColor="#3E54AC"
            containerStyle={style.checkboxContainer}
            size={24}
          />
        </View>
        <TouchableOpacity
          style={style.btnfieldAddress}
          onPress={handleSaveAddress}>
          <Text style={style.btntextAddress}>Save </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Owneraddaddress;
