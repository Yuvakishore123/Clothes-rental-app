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
              color="#3E54AC"
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
      {addressList.length === 0 ? (
        <View style={style.noAddressContainer1}>
          <View style={style.titleTextContainer1}>
            <Image
              style={style.imageS1}
              source={require('../../../Assets/Noaddress.jpg')}
            />
          </View>
          <View style={style.textContainer1}>
            <Text style={style.noAddressText1}>SAVE YOUR ADDRESS NOW</Text>
            <Text style={style.line21}>
              Add your home and Office addresses and enjoy faster
            </Text>
            <Text style={style.line21}>checkout</Text>
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
