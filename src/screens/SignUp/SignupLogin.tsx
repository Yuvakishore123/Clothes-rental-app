/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import Styles from './Signupstyle';
import {ScrollView} from 'react-native-gesture-handler';
import Usesignup from './Usesignup';
import {useNavigation} from '@react-navigation/native';
// import style from '../Ownereditprofile/Ownereditprofilestyle';
import style from '../Owneraddaddress/Owneraddressstyle';
import {RadioButton} from 'react-native-paper';
import Colors from '../../constants/Colors';
export default function SignUpScreen() {
  const navigation = useNavigation();
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    formik,
    handleRole,
    role,
    handleFirstNameChange,
    handlephoneNumber,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleBlur,
    handleSignupfun,
  } = Usesignup();
  return (
    <ScrollView style={Styles.scrollContainer}>
      <View style={Styles.mainContainer}>
        <View style={Styles.container}>
          <View style={Styles.titleTextContainer}>
            <Text style={Styles.titleText}>Sign Up</Text>
            <Image
              style={Styles.image}
              source={require('../../../Assets/SignupImage.png')}
            />
          </View>
          <View style={Styles.card}>
            <View>
              <Text style={Styles.cardText}>First Name</Text>
            </View>
            <View>
              <TextInput
                style={Styles.textinput}
                // placeholder="Enter First Name"
                placeholderTextColor={'#3E54AC'}
                value={firstName}
                autoCapitalize="words"
                onChangeText={handleFirstNameChange}
                onBlur={() => handleBlur('firstName')}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <Text style={Styles.errorTxt}>{formik.errors.firstName}</Text>
              )}
            </View>
            <View>
              <Text style={Styles.cardText}>Last Name</Text>
            </View>
            <View>
              <TextInput
                style={Styles.textinput}
                // placeholder="Enter Last Name"
                placeholderTextColor={'#3E54AC'}
                value={lastName}
                autoCapitalize="words"
                onChangeText={handleLastNameChange}
                onBlur={() => handleBlur('lastName')}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <Text style={Styles.errorTxt}>{formik.errors.lastName}</Text>
              )}
            </View>
            <View>
              <Text style={Styles.cardText}>Email</Text>
            </View>
            <View>
              <TextInput
                style={Styles.textinput}
                // placeholder="Enter Email"
                placeholderTextColor={'#3E54AC'}
                value={email}
                autoCapitalize="none"
                onChangeText={handleEmailChange}
                onBlur={() => handleBlur('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <Text style={Styles.errorTxt}>{formik.errors.email}</Text>
              )}
            </View>
            <View>
              <Text style={Styles.cardText}>Phone Number</Text>
            </View>
            <View>
              <TextInput
                style={Styles.textinput}
                // placeholder="Enter Phone number"
                placeholderTextColor={'#3E54AC'}
                value={phoneNumber}
                // secureTextEntry={true}
                onChangeText={handlephoneNumber}
                onBlur={() => handleBlur('phoneNumber')}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <Text style={Styles.errorTxt}>{formik.errors.phoneNumber}</Text>
              )}
            </View>
            <View>
              <Text style={Styles.cardText}>Password</Text>
            </View>
            <View>
              <TextInput
                style={Styles.textinput}
                // placeholder="Enter password"
                placeholderTextColor={'#3E54AC'}
                value={password}
                secureTextEntry={true}
                onChangeText={handlePasswordChange}
                onBlur={() => handleBlur('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <Text style={Styles.errorTxt}>{formik.errors.password}</Text>
              )}
            </View>
            <Text style={Styles.cardText}>Select Type of account</Text>
            <View style={style.containerRadio}>
              <View style={style.optionRadio}>
                <Text style={style.textRadio}>Borrower</Text>
                <RadioButton
                  value="borrower"
                  status={role === 'borrower' ? 'checked' : 'unchecked'}
                  onPress={() => handleRole('borrower')}
                />
              </View>
              <View style={style.optionRadio}>
                <Text style={style.textRadio}>Owner</Text>
                <RadioButton
                  value="owner"
                  status={role === 'owner' ? 'checked' : 'unchecked'}
                  onPress={() => handleRole('owner')}
                />
              </View>
            </View>
            {/* <Text style={Styles.switchText}>Owner Signup</Text> */}
            {/* <Switch
              /> */}
            {/* <View>
            </View> */}
            {/* <CheckBox
            /> */}
          </View>
          <View style={Styles.signText}></View>
          {/* <TouchableOpacity
            onPress={handleSignupfun}
            style={Styles.touchablebtn}>
            <Text style={Styles.touchableText}>Signup</Text> */}
          <TouchableOpacity
            disabled={!formik.isValid}
            style={[
              Styles.touchablebtn,
              {
                backgroundColor: formik.isValid ? Colors.iconscolor : '#A5C9CA',
              },
            ]}
            onPress={handleSignupfun}>
            <Text style={Styles.touchableText}>Signup</Text>
          </TouchableOpacity>
          <View>
            <View
              style={[Styles.touchablebtnContainer, {flexDirection: 'row'}]}>
              <Text style={Styles.signuptext}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={Styles.signuptext}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={Styles.signupTextCont}> */}
          {/* </View> */}
        </View>
      </View>
    </ScrollView>
  );
}
