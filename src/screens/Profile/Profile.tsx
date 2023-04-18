import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Logout} from '../../redux/actions/actions';
import MyHeader from '../../components/molecules/MyHeader';
// import BottomTab from '../../components/molecules/BottomTab';
import Editprofile from '../Ownereditprofile/Ownereditprofile';
import style from './Profilestyle';
import {Image} from 'react-native';
import styles from '../Ownereditprofile/Ownereditprofilestyle';
import {useNavigation} from '@react-navigation/native';
import OwnerEditProfile from '../Ownereditprofile/Ownereditprofile';
import Owneraddaddress from '../Owneraddaddress/Owneraddaddress';
import Owneraddresspage from '../Owneraddaddress/Owneraddresspage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
type Props = {
  route: {name: string};
};

export default function Profile({route}: Props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.addAddressHeader}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons
            name="arrow-left"
            color={Colors.iconscolor}
            size={26}
          />
        </TouchableOpacity>
        <Text style={styles.addAddressText}>Profile</Text>
      </View>
      <View style={style.container}>
        <View style={style.profileStyle}>
          <View>
            <Image
              source={require('../../../Assets/UserProfilePic.jpg')}
              style={style.profileImg}
            />
          </View>

          <View>
            <Text style={style.profileText}>John</Text>
          </View>

          <View style={style.profileFields}>
            <TouchableOpacity style={style.whiteBtn}>
              <Text
                style={style.btnPText}
                onPress={() => navigation.navigate(OwnerEditProfile)}>
                Edit Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.whiteBtn}>
              <Text
                style={style.btnPText}
                onPress={() => navigation.navigate(Owneraddresspage)}>
                Address
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.whiteBtn}>
              <Text style={style.btnPText}>My Orders</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={style.btnfield}>
              <Text style={style.btntext} onPress={submit}>
                Logout{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={style.bottomTabWrapper}>
        {/* <BottomTab navigation={navigation} /> */}
      </View>
    </View>
  );
}
