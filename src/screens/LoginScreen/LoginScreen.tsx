/* eslint-disable react/react-in-jsx-scope */
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
    <ScrollView style={Styles.mainContainer}>
      <View style={Styles.container}>
        <View style={Styles.titleTextContainer}>
          <Text style={Styles.titleText}>Login</Text>
          <Image
            style={Styles.image}
            source={require('../../../Assets/LoginImage.png')}
          />
        </View>
        <View style={Styles.card}>
          <View>
            <Text style={Styles.cardText}> Email </Text>
          </View>
          <View>
            <TextInput
              style={Styles.textinput}
              placeholder="Enter Email"
              placeholderTextColor={'#3E54AC'}
              value={email}
              autoCapitalize="none"
              onChangeText={handleEmailChange}
              onBlur={() => handleBlur('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <Text style={Styles.errorText}>{formik.errors.email} </Text>
            )}
          </View>
          <View>
            <Text style={Styles.cardText}>Password</Text>
            <TextInput
              style={Styles.textinput}
              placeholder="Enter password"
              placeholderTextColor={'#3E54AC'}
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
          <TouchableOpacity style={Styles.touchablebtn} onPress={handleLogin}>
            <Text style={Styles.touchableText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.sign}>
          <Text style={Styles.signuptext}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={Styles.signuptext}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
            <Text style={Styles.signuptext}>Continue with OTP {'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

// import React from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from 'react-native';
// import Useformik from './Useloginscreen';
// import {useNavigation} from '@react-navigation/native';
// import Styles from './LoginStyle';
// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const {
//     email,
//     password,
//     handleEmailChange,
//     handlePasswordChange,
//     handleBlur,
//     formik,
//     passwordError,
//     handleLogin,
//   } = Useformik();
//   return (
//     <ScrollView style={Styles.mainContainer}>
//       <View style={Styles.container}>
//         <View style={Styles.titleTextContainer}>
//           <Text style={Styles.titleText}>Login</Text>
//           <Image
//             style={Styles.image}
//             source={require('../../../Assets/LoginImage.png')}
//           />
//         </View>
//         <View style={Styles.card}>
//           <View>
//             <Text style={Styles.cardText}> Email </Text>
//           </View>
//           <View>
//             <TextInput
//               style={Styles.textinput}
//               placeholder="Enter Email"
//               placeholderTextColor={'#3E54AC'}
//               value={email}
//               autoCapitalize="none"
//               onChangeText={handleEmailChange}
//               onBlur={() => handleBlur('email')}
//             />
//             {formik.touched.email && formik.errors.email && (
//               <Text style={Styles.errorText}>{formik.errors.email} </Text>
//             )}
//           </View>
//           <View>
//             <Text style={Styles.cardText}>Password</Text>
//             <TextInput
//               style={Styles.textinput}
//               placeholder="Enter password"
//               placeholderTextColor={'#3E54AC'}
//               value={password}
//               secureTextEntry={true}
//               onChangeText={handlePasswordChange}
//               onBlur={() => handleBlur('password')}
//             />
//             {formik.touched.password && formik.errors.password && (
//               <Text style={Styles.errorText}>{formik.errors.password} </Text>
//             )}
//           </View>
//           {passwordError.length > 0 && <Text>{passwordError}</Text>}
//         </View>
//         <View style={Styles.touchablebtnContainer}>
//           <TouchableOpacity style={Styles.touchablebtn} onPress={handleLogin}>
//             <Text style={Styles.touchableText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={Styles.sign}>
//           <Text style={Styles.signuptext}>Don't have an account? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
//             <Text style={Styles.signuptext}>Sign up</Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
//             <Text style={Styles.signuptext}>Continue with OTP {'>'}</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

//---------------------------------

// import React from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from 'react-native';
// import Styles from '../LoginScreen/LoginStyle';
// // import Useotp from './Useotp';
// import Useotp from '../OtpScreen/Useotp';
// export default function LoginScreen() {
//   const {
//     phoneNo,
//     otp,
//     handlephoneNumberChange,
//     handlePasswordChange,
//     handleBlur,
//     GETOTP,
//     handleLogin,
//     formik,
//     passwordError,
//   } = Useotp();
//   return (
//     <ScrollView style={Styles.mainContainer}>
//       <View style={Styles.container}>
//         <View style={Styles.titleTextContainer}>
//           <Text style={Styles.titleText}>OTP Login</Text>
//           <Image
//             style={Styles.image}
//             source={require('../../../Assets/LoginImage.png')}
//           />
//         </View>
//         <View style={Styles.card}>
//           <View>
//             <Text style={Styles.cardText}> PhoneNumber </Text>
//           </View>
//           <View>
//             <TextInput
//               style={Styles.textinput}
//               placeholder="Enter PhoneNumber"
//               placeholderTextColor={'#3E54AC'}
//               value={phoneNo}
//               autoCapitalize="none"
//               keyboardType="numeric"
//               onChangeText={handlephoneNumberChange}
//               // onBlur={() => handleBlur('phoneNo')}
//             />
//             {/* {formik.touched.phoneNo && formik.errors.phoneNo && (
//               <Text style={Styles.errorText}>{formik.errors.phoneNo} </Text>
//             )} */}
//           </View>
//           <View>
//             <Text style={Styles.cardText}>Otp</Text>
//             <TextInput
//               style={Styles.textinput}
//               // placeholder="Enter password"
//               placeholderTextColor={'#3E54AC'}
//               value={otp}
//               secureTextEntry={true}
//               onChangeText={handlePasswordChange}
//               // onBlur={() => handleBlur('otp')}
//             />
//             {/* {formik.touched.otp && formik.errors.otp && (
//               <Text style={Styles.errorText}>{formik.errors.otp} </Text>
//             )} */}
//           </View>
//           {/* {passwordError.length > 0 && <Text>{passwordError}</Text>} */}
//         </View>
//         <View style={Styles.touchablebtnContainer}>
//           <TouchableOpacity style={Styles.touchablebtn} onPress={GETOTP}>
//             <Text style={Styles.touchableText}>Get OTP</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={Styles.touchablebtn} onPress={handleLogin}>
//             <Text style={Styles.touchableText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }
