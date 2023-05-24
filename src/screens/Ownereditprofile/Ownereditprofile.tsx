/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import style from './Ownereditprofilestyle';
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
import useOwnerProfile from './Useownerprofile';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import useCart from '../Cart/useCart';
import Styles from '../../constants/themeColors';
import HeadingText from '../../components/atoms/HeadingText/HeadingTest';
import CustomModal from '../../components/atoms/CustomModel/CustomModel';
export default function OwnerEditProfileCustomHook() {
  const navigation = useNavigation();
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    showModal,
    closeModal,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    handleUpdate,
    isLoading,
  } = useOwnerProfile();
  const {colorScheme} = useCart();
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(
      firstName.trim().length > 0 &&
        lastName.trim().length > 0 &&
        email.trim().length > 0 &&
        phoneNumber.trim().length > 0,
    );
  }, [firstName, lastName, email, phoneNumber]);
  return (
    <ScrollView>
      <View
        style={[
          style.container,
          colorScheme === 'dark' ? Styles.blacktheme : Styles.whiteTheme,
        ]}>
        <View style={style.addAddressHeader}>
          <HeadingText message="Edit profile" />
          {/* <TouchableOpacity
            style={[
              style.backBtn,
              colorScheme === 'dark' ? Styles.whiteTheme : Styles.blacktheme,
            ]}
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialIcon
              name="md-chevron-back"
              color={colorScheme === 'dark' ? Colors.black : Colors.white}
              size={26}
              marginLeft={3}
              marginTop={3}
            />
          </TouchableOpacity> */}
        </View>
        <View>
          {isLoading ? (
            <SkeletonPlaceholder
              backgroundColor={
                colorScheme === 'dark' ? Colors.buttonColor : Colors.gray
              }>
              <View>
                <Text style={style.addAddressText1}></Text>
                <Text style={style.text}></Text>
                <TextInput style={style.input} placeholderTextColor="#999" />
                <Text style={style.text}>LastName</Text>
                <TextInput style={style.input} />
                <Text style={style.text}></Text>
                <TextInput style={style.input} />
                <Text style={style.text}></Text>
                <TextInput style={style.input} />
              </View>
            </SkeletonPlaceholder>
          ) : (
            <View>
              {/* <Text
                style={[
                  style.addAddressText1,
                  colorScheme === 'dark' ? Styles.whitetext : Styles.blackText,
                ]}>
                Edit profile
              </Text> */}
              {/* <View style={style.line} /> */}
              <Text
                style={[
                  style.text,
                  colorScheme === 'dark' ? Styles.whitetext : Styles.blackText,
                ]}>
                First name
              </Text>
              <TextInput
                style={[
                  style.input,
                  colorScheme === 'dark' ? Styles.cardColor : Styles.whiteTheme,
                  colorScheme === 'dark' ? Styles.whitetext : Styles.blackText,
                ]}
                placeholderTextColor={
                  colorScheme === 'dark' ? Colors.white : Colors.white
                }
                value={firstName}
                onChangeText={text => setFirstName(text)}
              />
              <Text
                style={[
                  style.text,
                  colorScheme === 'dark' ? Styles.whitetext : Styles.blackText,
                ]}>
                Last name
              </Text>
              <TextInput
                style={[
                  style.input,
                  colorScheme === 'dark' ? Styles.cardColor : Styles.whiteTheme,
                  colorScheme === 'dark' ? Styles.whitetext : Styles.blackText,
                ]}
                value={lastName}
                onChangeText={text => setLastName(text)}
              />
              <Text
                style={[
                  style.text,
                  colorScheme === 'dark' ? Styles.whitetext : Styles.blackText,
                ]}>
                Email
              </Text>
              <TextInput
                style={[
                  style.emailinput,
                  colorScheme === 'dark' ? Styles.cardColor : Styles.InputText,
                  colorScheme === 'dark'
                    ? Styles.InputText
                    : Styles.placeholder,
                ]}
                value={email}
                onChangeText={text => setEmail(text)}
                selectTextOnFocus={false}
                editable={false}
              />
              <Text
                style={[
                  style.text,
                  colorScheme === 'dark' ? Styles.whitetext : Styles.blackText,
                ]}>
                Phone number
              </Text>
              <TextInput
                style={[
                  style.input,
                  colorScheme === 'dark' ? Styles.cardColor : Styles.whiteTheme,
                  colorScheme === 'dark' ? Styles.whitetext : Styles.blackText,
                ]}
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
              />
            </View>
          )}
        </View>
        <View style={style.buttons}>
          <TouchableOpacity
            style={[
              style.btnfield,
              {
                opacity: isFormValid ? 1 : 0.5,
                pointerEvents: isFormValid ? 'auto' : 'none',
              },
            ]}
            onPress={handleUpdate} // using handleUpdateWithLoading instead of handleUpdate
            disabled={!isFormValid}>
            {isLoading ? (
              <SkeletonPlaceholder borderRadius={4}>
                <SkeletonPlaceholder.Item
                  width={100}
                  height={20}
                  borderRadius={5}
                />
              </SkeletonPlaceholder>
            ) : (
              <Text style={style.btntext}>Update</Text>
            )}
          </TouchableOpacity>
        </View>
        <CustomModal
          showModal={showModal}
          onClose={closeModal}
          message="Profile Updated!"
        />
      </View>
    </ScrollView>
  );
}
