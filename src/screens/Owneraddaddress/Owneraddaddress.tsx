import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import style from './Owneraddressstyle';
import {OwnerAddAddressCustomHook} from './Useowneraddaddress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
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
  } = OwnerAddAddressCustomHook(navigation);
  return (
    <View>
      <View style={style.addAddressHeader}>
        <TouchableOpacity
          style={style.backBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons
            name="arrow-left"
            color={Colors.iconscolor}
            size={26}
          />
        </TouchableOpacity>
        <Text style={style.addAddressText}>Add Address</Text>
      </View>
      <View style={style.inputMargin}>
        <TextInput
          value={addressLine1}
          placeholder={'enter AddressLine1'}
          onChangeText={text => {
            setaddressLine1(text);
          }}
          style={style.inputAddress}
        />
        <TextInput
          value={addressLine2}
          placeholder={'enter AddressLine2'}
          onChangeText={text => {
            setaddressLine2(text);
          }}
          style={style.inputAddress}
        />
        <TextInput
          value={city}
          placeholder={'enter City name'}
          style={style.inputAddress}
          onChangeText={text => {
            setCity(text);
          }}
        />
        <TextInput
          value={postalCode}
          placeholder={'enter  PostalCode'}
          style={style.inputAddress}
          onChangeText={text => {
            setpostalCode(text);
          }}
        />
        <TextInput
          value={addressType}
          placeholder={'enter  AddressType'}
          style={style.inputAddress}
          onChangeText={text => {
            setaddressType(text);
          }}
        />
        <TextInput
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
        />
      </View>
      <TouchableOpacity
        style={style.btnfieldAddress}
        onPress={handleSaveAddress}>
        <Text style={style.btntextAddress}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Owneraddaddress;
