import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Styles from '../../screens/OtpScreen/Otpstyles';
import Useotp from './Useotp';
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
  return (
    <ScrollView style={Styles.mainContainer}>
      <View style={Styles.container}>
        <View style={Styles.titleTextContainer}>
          <Image
            style={Styles.image}
            source={require('../../../assets/LeapsLogo.png')}
          />
        </View>
        <View>
          <Text style={Styles.Textphonenumber}> Phone number </Text>
        </View>
        <View>
          <TextInput
            style={Styles.textinputphone}
            placeholder="Enter phone number"
            placeholderTextColor={'rgba(255, 255, 255, 0.2)'}
            value={phoneNo}
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={handlephoneNumberChange}
          />
        </View>
        <View>
          <Text style={Styles.TextOTP}>Otp</Text>
          <TextInput
            style={Styles.textinputOTP}
            placeholder="Enter Otp"
            placeholderTextColor={'rgba(255, 255, 255, 0.2)'}
            value={otp}
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
          />
        </View>
        {passwordError.length > 0 && <Text>{passwordError}</Text>}
        <View style={Styles.touchablebtnContainer}>
          <TouchableOpacity onPress={GETOTP}>
            <Text style={Styles.Text}>Get</Text>
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
