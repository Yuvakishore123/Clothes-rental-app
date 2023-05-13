/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './OwnerProfilestyle';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import AddImages from '../../components/atoms/AddImages';
import ProfileData from '../../constants/ProfileData';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {Logout} from '../../redux/actions/actions';
type Props = {
  navigation: any;
};
const OwnerProfile = ({navigation}: Props) => {
  const {name, email, phonenumber} = ProfileData();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
  };
  return (
    <View style={style.profileStyle}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={style.buttonContainer}>
          <SwitchAccountButton />
        </View>
        <View style={style.imageContainer}>
          <AddImages />
        </View>
        <View style={style.card}>
          <Text style={style.profileText}>{name}</Text>
          <Text style={style.profileText1}>{email}</Text>
          <Text style={style.profileText1}>{phonenumber}</Text>
        </View>
        {/* </View> */}
        <View style={style.profileFields}>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('OwnerEditProfile')}>
            <Icons name="account" size={30} style={style.editprofileicon} />
            <Text style={style.btnPText}>Edit Profile</Text>
            <Icon name="arrow-forward-ios" size={20} style={style.forwardios} />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('Owneraddresspage')}>
            <Icon name="location-pin" size={30} style={style.addressicon} />
            <Text style={style.AddressbtnPText}>Address</Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={style.addressforwardios}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('Owneredititems')}>
            <Icons name="basket-check" size={30} style={style.producticon} />
            <Text style={style.btnPText}>My Products</Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={style.productforwardios}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={style.btntext}>Sign out </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{marginTop: 10}} />
    </View>
  );
};

export default OwnerProfile;
