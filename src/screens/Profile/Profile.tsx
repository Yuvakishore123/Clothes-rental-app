import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Logout} from '../../redux/actions/actions';
import MyHeader from '../../components/molecules/MyHeader';
import BottomTab from '../../components/molecules/BottomTab';
import style from './Profilestyle';
import {Image} from 'react-native';
type Props = {
  route: {name: string};
  navigation: any;
};

export default function Profile({route, navigation}: Props) {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };

  return (
    <View style={{flex: 1}}>
      <MyHeader back title={route.name} style={style.header} />
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
            <TouchableOpacity style={style.btnfield}>
              <Text style={style.btntext} onPress={submit}>
                Logout{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={style.bottomTabWrapper}>
        <BottomTab navigation={navigation} />
      </View>
    </View>
  );
}
