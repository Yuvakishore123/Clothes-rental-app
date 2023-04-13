import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const OTP_REQUEST = 'OTP_REQUEST';
export const OTP_SUCCESS = 'OTP_SUCCESS';
export const OTP_FAILURE = 'OTP_FAILURE';
export const VERIFY_OTP_REQUEST = 'VERIFY_OTP_REQUEST';
export const VERIFY_OTP_SUCCESS = 'VERIFY_OTP_SUCCESS';
export const VERIFY_OTP_FAILURE = 'VERIFY_OTP_FAILURE';
export const Init = () => {
  return async (dispatch: Dispatch) => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token,
      });
    }
  };
};
export const getOTP = (phoneNo: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({type: VERIFY_OTP_REQUEST});
    try {
      const response = await axios.post(
        'http://7269-180-151-121-182.ngrok.io/api/phoneNo',
        {
          phoneNo,
      });
      console.log('otp send');
      dispatch({type: VERIFY_OTP_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: VERIFY_OTP_FAILURE, payload: error.message});
    }
  };
};

export const submitOTP = (phoneNo: string, otp: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({type: LOGIN_REQUEST});
    try {
      const response = await axios.post(
        'http://7269-180-151-121-182.ngrok.io/api/otplogin',
        {
          phoneNo: phoneNo,
          otp: otp,
        },
      );
      const token = response.data.access_token;
      await AsyncStorage.setItem('token', token);
      dispatch({type: LOGIN_SUCCESS, payload: token});
    } catch (error) {
      dispatch({type: LOGIN_FAILURE, payload: error.message});
    }
  };
};

export const Login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });
      const response = await axios.post(
        'https://3566-180-151-121-182.ngrok-free.app/api/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            // Authorization: `Bearer ${await AsyncStorage.getItem(
            //   'access_token',
            // )}`,
          },
        },
      );
      const token = response.headers.access_token;
      await AsyncStorage.setItem('token', token);
      console.log('token stored');
      console.log(token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token,
      });
    } catch (error) {
      console.log('login error', error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message,
      });
    }
  };
};
export const SignupAndLogin = (
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string,
) => {
  return async (dispatch: Dispatch) => {
    axios
      .post('http://7269-180-151-121-182.ngrok.io/api/user/save', {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      })
      .then((response: {data: any}) => {
        console.log('signup success');
        payload: response.data;
      })
      .catch(error => {
        console.log('signup error', error);
        dispatch({
          type: LOGIN_FAILURE,
          payload: error.message,
        });
      });
  };
};
export const Logout = () => {
  return async (dispatch: Dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};
