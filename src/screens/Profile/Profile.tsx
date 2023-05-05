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
            <Text style={style.btnPText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('Owneraddresspage')}>
            <Text style={style.AddressbtnPText}>Address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('MyOrder')}>
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
