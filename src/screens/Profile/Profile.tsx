import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from '../Ownerprofile/OwnerProfilestyle';
import SwitchAccountButton from '../../components/atoms/SwtichAccountButton';
import AddImages from '../../components/atoms/AddImages';
import ProfileData from '../../constants/ProfileData';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {Logout} from '../../redux/actions/actions';
import useCart from '../Cart/useCart';
import Styles from '../../constants/themeColors';
import Colors from '../../constants/Colors';
type Props = {
  navigation: any;
};
const Profile = ({navigation}: Props) => {
  const {name, email, phonenumber} = ProfileData();
  const {colorScheme} = useCart();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
  };
  return (
    <View
      style={[
        style.profileStyle,
        colorScheme === 'dark' ? Styles.blacktheme : Styles.whiteTheme,
      ]}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={style.buttonContainer}>
          <SwitchAccountButton />
        </View>
        <View style={style.imageContainer}>
          <AddImages />
        </View>
        <View
          style={[
            style.card,
            colorScheme === 'dark' ? Styles.cardColor : Styles.main,
          ]}>
          <Text
            style={[
              style.profileText,
              colorScheme === 'dark' ? Styles.whitetext : Styles.blackText,
            ]}>
            {name}
          </Text>
          <Text
            style={[
              style.profileText1,
              colorScheme === 'dark' ? Styles.InputText : Styles.main,
            ]}>
            {email}
          </Text>
          <Text
            style={[
              style.profileText1,
              colorScheme === 'dark' ? Styles.InputText : Styles.main,
            ]}>
            {phonenumber}
          </Text>
        </View>
        {/* </View> */}
        <View style={style.profileFields}>
          <TouchableOpacity
            style={[
              style.whiteBtn,
              colorScheme === 'dark' ? Styles.cardColor : Styles.main,
            ]}
            onPress={() => navigation.navigate('Ownereditprofile')}>
            <Icons
              name="account"
              size={30}
              style={[
                style.editprofileicon,
                colorScheme === 'dark' ? Styles.InputText : Styles.blackText,
              ]}
            />
            <Text
              style={[
                style.btnPText,
                colorScheme === 'dark' ? Styles.InputText : Styles.blackText,
              ]}>
              Edit Profile
            </Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={[
                style.forwardios,
                colorScheme === 'dark' ? Styles.InputText : Styles.blackText,
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              style.whiteBtn,
              colorScheme === 'dark' ? Styles.cardColor : Styles.main,
            ]}
            onPress={() => navigation.navigate('Owneraddresspage')}>
            <Icon
              name="location-pin"
              size={30}
              style={[
                style.addressicon,
                colorScheme === 'dark' ? Styles.InputText : Styles.blackText,
              ]}
            />
            <Text
              style={[
                style.AddressbtnPText,
                colorScheme === 'dark' ? Styles.InputText : Styles.blackText,
              ]}>
              Address
            </Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={[
                style.addressforwardios,
                colorScheme === 'dark' ? Styles.InputText : Styles.blackText,
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              style.whiteBtn,
              colorScheme === 'dark' ? Styles.cardColor : Styles.main,
            ]}
            onPress={() => navigation.navigate('MyOrder')}>
            <Icons
              name="basket-check"
              size={30}
              style={[
                style.producticon,
                colorScheme === 'dark' ? Styles.InputText : Styles.blackText,
              ]}
            />
            <Text
              style={[
                style.btnPText,
                colorScheme === 'dark' ? Styles.InputText : Styles.blackText,
              ]}>
              My orders
            </Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={[
                style.productforwardios,
                colorScheme === 'dark' ? Styles.InputText : Styles.blackText,
              ]}
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

export default Profile;
