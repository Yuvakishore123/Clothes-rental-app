import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
function Usesignup() {
  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setphoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const handleSignupfun = async () => {
    console.log('indrill');
    try {
      const response = await axios.post(
        'https://6e07-106-51-70-135.ngrok-free.app/user/signup',
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
        },
      );
      Alert.alert('Signup Successful!');
      console.log(response.data);
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Signup Error!', error.message);
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: handleSignupfun,
  });
  const handleFirstNameChange = (value: string) => {
    setFirstName(value);
    formik.setFieldValue('firstName', value);
  };
  const handlephoneNumber = (value: string) => {
    setphoneNumber(value);
    formik.setFieldValue('phoneNumber', value);
  };
  const handleLastNameChange = (value: string) => {
    setLastName(value);
    formik.setFieldValue('lastName', value);
  };
  const handleEmailChange = (value: string) => {
    setEmail(value);
    formik.setFieldValue('email', value);
  };
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    formik.setFieldValue('password', value);
  };
  const handleBlur = (field: string) => {
    formik.setFieldTouched(field);
  };
  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    formik,
    handleFirstNameChange,
    handlephoneNumber,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleBlur,
    handleSignupfun,
  };
}
export default Usesignup;




// export default authReducer;
// import {useFormik} from 'formik';
// import * as Yup from 'yup';
// import {useDispatch} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';
// import {useState} from 'react';
// import {Alert} from 'react-native';
// import axios from 'axios';
// import {
//   SIGNUP_SUCCESS,
//   addEmail,
//   addFirstName,
//   addLastName,
//   addPhoneNumber,
// } from '../../redux/actions/actions';
// function Usesignup() {
//   const SignUpSchema = Yup.object().shape({
//     firstName: Yup.string().required('Required'),
//     lastName: Yup.string().required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//     password: Yup.string()
//       .min(8, 'Must be at least 8 characters')
//       .required('Required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Required'),
//   });
//   const navigation = useNavigation();
//   const [firstName, setFirstName] = useState<string>('');
//   const [lastName, setLastName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [phoneNumber, setphoneNumber] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const dispatch = useDispatch();
//   const handleSignupfun = async () => {
//     console.log('indrill');
//     try {
//       const response = await axios.post(
//         'https://338a-106-51-70-135.ngrok-free.app/user/signup',
//         {
//           firstName,
//           lastName,
//           email,
//           phoneNumber,
//           password,
//         },
//       );
//       Alert.alert('Signup Successful!');
//       // dispatch({
//       //   type: SIGNUP_SUCCESS,
//       //   payload: response.data,
//       // });
//       dispatch(addFirstName(firstName));
//       dispatch(addLastName(lastName));
//       dispatch(addEmail(email));
//       dispatch(addPhoneNumber(phoneNumber));
//       console.log(firstName, lastName, email, phoneNumber);
//       console.log(response.data);
//       console.log(response);
//       navigation.navigate('Login');
//     } catch (error) {
//       Alert.alert('Signup Error!', error.message);
//       console.log(error);
//     }
//   };
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       phoneNumber: '',
//     },
//     validationSchema: SignUpSchema,
//     onSubmit: handleSignupfun,
//   });
//   const handleFirstNameChange = (value: string) => {
//     setFirstName(value);
//     formik.setFieldValue('firstName', value);
//   };
//   const handlephoneNumber = (value: string) => {
//     setphoneNumber(value);
//     formik.setFieldValue('phoneNumber', value);
//   };
//   const handleLastNameChange = (value: string) => {
//     setLastName(value);
//     formik.setFieldValue('lastName', value);
//   };
//   const handleEmailChange = (value: string) => {
//     setEmail(value);
//     formik.setFieldValue('email', value);
//   };
//   const handlePasswordChange = (value: string) => {
//     setPassword(value);
//     formik.setFieldValue('password', value);
//   };
//   const handleBlur = (field: string) => {
//     formik.setFieldTouched(field);
//   };
//   return {
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//     password,
//     formik,
//     handleFirstNameChange,
//     handlephoneNumber,
//     handleLastNameChange,
//     handleEmailChange,
//     handlePasswordChange,
//     handleBlur,
//     handleSignupfun,
//   };
// }
// export default Usesignup;