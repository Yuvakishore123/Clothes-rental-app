import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Lottie from 'lottie-react-native';
import Styles from '../../screens/OtpScreen/Otpstyles';
import style from '../../constants/themeColors';
import Useotp from './Useotp';
import useCart from '../Cart/useCart';
export default function LoginScreen() {
  const {
    phoneNo,
    otp,
    handlephoneNumberChange,
    handlePasswordChange,
    GETOTP,
    handleLogin,
    passwordError,
  } = Useotp();
  const {colorScheme} = useCart();
  return (
    <ScrollView
      style={[
        Styles.mainContainer,
        colorScheme === 'dark' ? style.blacktheme : style.whiteTheme,
      ]}>
      <View style={Styles.container}>
        <View style={[Styles.titleTextContainer]}>
          <Lottie
            style={Styles.image}
            source={require('../../../assets/Otp.json')}
            autoPlay
          />
          {/* <Image
            style={Styles.image}
            source={require('../../../assets/LeapsLogo.png')}
          /> */}
        </View>
        <View>
          <Text
            style={[
              Styles.Textphonenumber,
              colorScheme === 'dark' ? style.whitetext : style.blackText,
            ]}>
            Phone number{' '}
          </Text>
        </View>
        <View>
          <TextInput
            style={[
              Styles.textinputphone,
              colorScheme === 'dark' ? style.cardColor : style.main,
            ]}
            placeholder="Enter phone number"
            placeholderTextColor={'black'}
            value={phoneNo}
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={handlephoneNumberChange}
          />
        </View>
        <View>
          <Text
            style={[
              Styles.TextOTP,
              colorScheme === 'dark' ? style.whitetext : style.blackText,
            ]}>
            Otp
          </Text>
          <TextInput
            style={[
              Styles.textinputOTP,
              colorScheme === 'dark' ? style.cardColor : style.main,
            ]}
            placeholder="Enter Otp"
            placeholderTextColor={'black'}
            value={otp}
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
          />
        </View>
        {passwordError.length > 0 && <Text>{passwordError}</Text>}
        <View style={Styles.touchablebtnContainer}>
          <TouchableOpacity onPress={GETOTP}>
            <Text
              style={[
                Styles.Text,
                colorScheme === 'dark' ? style.whitetext : style.blackText,
              ]}>
              Get
            </Text>
            <Text style={Styles.touchableTextOTP}>Otp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.touchablebtn} onPress={handleLogin}>
            <Text style={Styles.touchableTextcontinue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
