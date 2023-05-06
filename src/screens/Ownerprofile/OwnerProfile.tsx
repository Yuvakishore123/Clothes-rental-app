/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './OwnerProfilestyle';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import AddImages from '../../components/atoms/AddImages';
import ProfileData from '../../constants/ProfileData';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
type Props = {
  navigation: any;
};
const OwnerProfile = ({navigation}: Props) => {
  const {name} = ProfileData();
  return (
    <View style={style.profileStyle}>
      <ScrollView>
        <View style={style.buttonContainer}>
          <SwitchAccountButton />
        </View>
        <View style={style.imageContainer}>
          <AddImages />
        </View>
        <View>
          <Text style={style.profileText}>{name}</Text>
        </View>
        <View style={style.profileFields}>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('OwnerEditProfile')}>
            <Icons
              name="account"
              size={30}
              style={{marginLeft: 30, color: '#3E54AC'}}
            />
            <Text style={style.btnPText}>Edit Profile</Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={{marginLeft: 190, color: '#3E54AC'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('Owneraddresspage')}>
            <Icon
              name="location-pin"
              size={30}
              style={{marginLeft: 30, color: '#3E54AC'}}
            />
            <Text style={style.AddressbtnPText}>Address</Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={{marginLeft: 190, color: '#3E54AC'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('Owneredititems')}>
            <Icons
              name="basket-check"
              size={30}
              style={{marginLeft: 30, color: '#3E54AC'}}
            />
            <Text style={style.btnPText}>My Products</Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={{marginLeft: 190, color: '#3E54AC'}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={style.btnfield}>
            <Text style={style.btntext}>Logout </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{marginTop: 10}} />
    </View>
  );
};

export default OwnerProfile;
