import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './OwnerProfilestyle';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import AddImages from '../../components/atoms/AddImages';
type Props = {
  navigation: any;
};
const OwnerProfile = ({navigation}: Props) => {
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
          <Text style={style.profileText}>Vishal</Text>
        </View>
        <View style={style.profileFields}>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('OwnerEditProfile')}>
            <Text style={style.btnPText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('Owneredititems')}>
            <Text style={style.btnPText}>Edit Items</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('MyRentals')}>
            <Text style={style.btnPText}>My Rentals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('Owneraddresspage')}>
            <Text style={style.btnPText}>Address</Text>
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
