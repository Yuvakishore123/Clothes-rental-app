/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

// import styles from '../Profile/profilestyles';
import style from './profileStyles';
import AddImages from '../../components/atoms/AddImages';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import {ScrollView} from 'react-native-gesture-handler';
import {Logout} from '../../redux/actions/actions';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from '../../constants/Apis';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
type Props = {
  navigation: any;
};

const Profile = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
  };
  const [name, setFirstName] = useState('');
  const fetchProfileData = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await fetch(`${url}/user/getUser`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const profileData = await response.json();
        setFirstName(profileData.firstName);
      } else {
        throw new Error('Failed to fetch profile name');
      }
    } catch (error) {
      // console.error(error);
      // Alert.alert('Failed to fetch profile name');
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProfileData();
    });
    return unsubscribe;
  }, [navigation]);

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
          <Text style={style.profileText}>{name}</Text>
        </View>

        <View style={style.profileFields}>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('Ownereditprofile')}>
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
            onPress={() => navigation.navigate('MyOrder')}>
            <Icons
              name="basket-check"
              size={30}
              style={{marginLeft: 30, color: '#3E54AC'}}
            />
            <Text style={style.btnPText}>My Orders</Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={{marginLeft: 190, color: '#3E54AC'}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={style.btnfield} onPress={handleLogout}>
            <Icon
              name="logout"
              size={20}
              style={{marginLeft: 100, color: 'white'}}
            />
            <Text style={style.btntext}>Logout </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
