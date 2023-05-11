import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Styles from '../LoginScreen/LoginStyle';
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
          <Text style={Styles.titleText}>OTP Login</Text>
          <Image
            style={Styles.image}
            source={require('../../../Assets/LoginImage.png')}
          />
        </View>
        <View style={Styles.card}>
          <View>
            <Text style={Styles.cardText}> PhoneNumber </Text>
          </View>
          <View>
            <TextInput
              style={Styles.textinput}
              placeholder="Enter PhoneNumber"
              placeholderTextColor={'#3E54AC'}
              value={phoneNo}
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={handlephoneNumberChange}
            />
          </View>
          <View>
            <Text style={Styles.cardText}>OTP</Text>
            <TextInput
              style={Styles.textinput}
              placeholder="Enter Otp"
              placeholderTextColor={'#3E54AC'}
              value={otp}
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
            />
          </View>
          {passwordError.length > 0 && <Text>{passwordError}</Text>}
        </View>
        <View style={Styles.touchablebtnContainer}>
          <TouchableOpacity style={Styles.touchablebtn} onPress={GETOTP}>
            <Text style={Styles.touchableText}>Get OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.touchablebtn} onPress={handleLogin}>
            <Text style={Styles.touchableText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}