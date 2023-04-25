import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

// import styles from '../Profile/profilestyles';
import style from './profileStyles';
import ImagePicker from 'react-native-image-picker';

import {Image} from 'react-native';
import AddImages from '../../components/atoms/AddImages';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import {ScrollView} from 'react-native-gesture-handler';
import {Logout} from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

type Props = {
  navigation: any;
};

const Profile = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <ScrollView>
      <View style={style.profileStyle}>
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
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>My Orders</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={style.btnfield} onPress={handleLogout}>
            <Text style={style.btntext}>Logout </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
