/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Useformik from './Useloginscreen';
import {useNavigation} from '@react-navigation/native';
import Styles from './LoginStyle';
import Colors from '../../constants/Colors';
import style from '../Profile/profileStyles';

export default function LoginScreen() {
  const navigation = useNavigation();
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleBlur,
    formik,
    passwordError,
    handleLogin,
  } = Useformik();

  return (
    <View style={Styles.mainContainer}>
      <Image
        style={Styles.image}
        source={require('../../../assets/LeapsLogo.png')}
      />
      <View>
        <TextInput
          style={Styles.textinput}
          placeholder="Email Address"
          placeholderTextColor={Colors.white}
          value={email}
          autoCapitalize="none"
          onChangeText={handleEmailChange}
          onBlur={() => handleBlur('email')}
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={Styles.errorText}>{formik.errors.email} </Text>
        )}
        <View>
          <TextInput
            style={Styles.textinput}
            placeholder="Enter password"
            placeholderTextColor={Colors.white}
            value={password}
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
            onBlur={() => handleBlur('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <Text style={Styles.errorText}>{formik.errors.password} </Text>
          )}
        </View>
        {passwordError.length > 0 && <Text>{passwordError}</Text>}
      </View>
      <View style={Styles.touchablebtnContainer}>
        <TouchableOpacity
          disabled={!formik.isValid}
          style={[
            Styles.touchablebtn,
            {
              backgroundColor: formik.isValid ? Colors.buttonColor : '#A5C9CA',
            },
          ]}
          onPress={handleLogin}>
          <Text style={Styles.touchableText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.otp}>
        <Text style={Styles.otptext}>Continue with </Text>
        <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
          <Text style={Styles.Otptext}>OTP</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.sign}>
        <Text style={Styles.signuptext}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={Styles.Signuptext}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
