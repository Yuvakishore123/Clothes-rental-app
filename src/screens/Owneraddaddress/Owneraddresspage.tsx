import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {OwnerAddressCustomHook} from './Useowneraddress';
import style from './Owneraddressstyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Lottie from 'lottie-react-native';
const Owneraddresspage = () => {
  const {
    handleOwnerAddAddress,
    handleDeleteAddress,
    goBackButton,
    addressList,
    isLoading,
    handleEditItems,
  } = OwnerAddressCustomHook();
  const renderAddressItem = ({item, index}) => {
    return (
      <View style={style.card}>
        <View>
          <Text style={style.city}>{'Address: ' + item.addressLine1}</Text>
          <Text style={style.input}>{'State: ' + item.state}</Text>
          <Text style={style.input}>{'Postal Code: ' + item.postalCode}</Text>
          <Text style={style.input}>{'Postal Code: ' + item.city}</Text>
          <Text style={style.stateName}>{'Country: ' + item.country}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={style.deleteBtn}
            onPress={() => {
              handleEditItems(item);
            }}>
            <Text style={style.deleteBtnText}>Edit Address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.deleteBtn}
            onPress={() => {
              handleDeleteAddress(item.id);
            }}>
            <Text style={style.deleteBtnText}>Delete Address</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={style.maincontainer}>
      <View style={style.header}>
        <View style={style.addAddressHeader}>
          <TouchableOpacity style={style.backBtn} onPress={goBackButton}>
            <MaterialIcons name="arrow-back-ios" color="#3E54AC" size={24} />
          </TouchableOpacity>
          <Text style={style.addAddressText}>Add Address</Text>
        </View>
        <TouchableOpacity
          style={style.btnContainer}
          onPress={handleOwnerAddAddress}>
          <Text style={style.btnText}>Add Address</Text>
        </TouchableOpacity>
      </View>
      {addressList.length === 0 ? (
        <View style={style.noAddressContainer1}>
          <View style={style.titleTextContainer1}>
            <Lottie
              autoPlay
              style={style.imageS1}
              source={require('../../../Assets/address.json')}
            />
          </View>
          <View style={style.textContainer1}>
            <Text style={style.noAddressText1}>SAVE YOUR ADDRESS NOW</Text>
          </View>
        </View>
      ) : (
        <FlatList
          data={addressList}
          renderItem={renderAddressItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};
export default Owneraddresspage;
