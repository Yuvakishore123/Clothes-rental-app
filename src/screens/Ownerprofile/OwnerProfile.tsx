import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './OwnerProfilestyle';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import AddImages from '../../components/atoms/AddImages';
import OwnerBottomTab from '../../components/molecules/OwnerBottomTab';
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
          {/* <Image
            source={require('../../../assets/images/UserProfilePic.jpg')}
            style={style.profileImg}
          /> */}
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
            <Text style={style.btnPText}>Edit Items</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.whiteBtn}
            onPress={() => navigation.navigate('MyRentals')}>
            <Text style={style.btnPText}>My Rentals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.whiteBtn}>
            <Text style={style.btnPText}>Address</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={style.btnfield}>
            <Text style={style.btntext}>Logout </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{marginTop: 10}}>
        <OwnerBottomTab navigation={navigation} />
      </View>
    </View>
  );
};
// const styles = StyleSheet.create({
//   buttonContainer: {
//     top: 0,
//     right: 0,
//     margin: 20,
//     marginLeft: 180,
//     // marginRight: 0,
//   },
// });
export default OwnerProfile;
