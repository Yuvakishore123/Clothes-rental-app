import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {OwnerAddressCustomHook} from './Useowneraddress';
import style from './Owneraddressstyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Owneraddresspage = () => {
  const {
    handleOwnerAddAddress,
    handleDeleteAddress,
    goBackButton,
    addressList,
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
            <MaterialCommunityIcons
              name="arrow-left"
              color={Colors.iconscolor}
              size={26}
            />
          </TouchableOpacity>
          <Text style={style.addAddressText}>Add Address</Text>
        </View>
        <TouchableOpacity
          style={style.btnContainer}
          onPress={handleOwnerAddAddress}>
          <Text style={style.btnText}>Add Address</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addressList}
        renderItem={renderAddressItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Owneraddresspage;
