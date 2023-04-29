import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
import {AddAddressUrl, url} from '../../constants/Apis';
import { Alert } from 'react-native';
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
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const DELETE_ADDRESS = 'DELETE_ADDRESS';
export const REMOVE_ADDRESS = 'REMOVE_ADDRESS';
export const ADD_NAME = 'ADD_NAME';
export const ADD_DESCRIPTION = 'ADD_DESCRIPTION';
export const ADD_GENDER = 'ADD_GENDER';
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_SIZE = 'ADD_SIZE';
export const ADD_TYPE = 'ADD_TYPE';
export const ADD_OUTFIT = 'ADD_OUTFIT';
export const SET_ROLE = 'SET_ROLE';
//-------------------------------------------changes for wishlist and cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const addname = (Name: any) => ({
  type: ADD_NAME,
  payload: Name,
});
export const addtype = (subcategoryIds: any) => ({
  type: ADD_TYPE,
  payload: subcategoryIds,
});
export const addoutfit = (subcategoryIds: any) => ({
  type: ADD_TYPE,
  payload: subcategoryIds,
});
export const addItemsData = (Description: any) => ({
  type: ADD_DESCRIPTION,
  payload: Description,
});
export const addGender = (CategoryId: any) => ({
  type: ADD_GENDER,
  payload: CategoryId,
});
export const addevent = (subcategoryIds: any) => ({
  type: ADD_EVENT,
  payload: subcategoryIds,
});
export const addsize = (selected: any) => ({
  type: ADD_SIZE,
  payload: selected,
});
export const removeAddress = (id: number, index: any) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(
        `${'https://64343e5f582420e231779819.mockapi.io/ADDRESS'}/addresses/${id}`,
      );
      dispatch({type: REMOVE_ADDRESS, payload: id, index});
    } catch (error) {
      console.log('remove address error', error);
    }
  };
};

export const addAddress = (data: {
  addressLine1: string;
  addressLine2: string;
  addressType: string;
  city: string;
  country: string;
  postalCode: string;
  defaultType: boolean;
  state: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        'https://64267853556bad2a5b505aec.mockapi.io/login',
        data,
      );
      console.log('address added', response.data);
      dispatch({
        type: ADD_ADDRESS,
        payload: response.data,
      });
    } catch (error) {
      console.log('address add error', error);
    }
  };
};

export const deleteAddress = (index: any) => ({
  type: 'DELETE_ADDRESS',
  payload: index,
});
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
// export const getOTP = (phoneNo: string) => {
//   return async (dispatch: Dispatch) => {
//     dispatch({type: VERIFY_OTP_REQUEST});
//     try {
//       const response = await axios.post(
//         'https://338a-106-51-70-135.ngrok-free.app/api/phoneNo',
//         {
//           phoneNo,
//         },
//       );
//       console.log('otp send');
//       dispatch({type: VERIFY_OTP_SUCCESS, payload: response.data});
//     } catch (error) {
//       dispatch({type: VERIFY_OTP_FAILURE, payload: error.message});
//     }
//   };
// };

// export const submitOTP = (phoneNo: string, otp: number) => {
//   return async (dispatch: Dispatch) => {
//     dispatch({type: LOGIN_REQUEST});
//     try {
//       const response = await axios.post(
//         'https://338a-106-51-70-135.ngrok-free.app/api/otp',
//         {
//           phoneNo: phoneNo,
//           otp: otp,
//         },
//       );
//       const token = response.headers.access_token;
//       await AsyncStorage.setItem('token', token);
//       dispatch({type: LOGIN_SUCCESS, payload: token});
//     } catch (error) {
//       dispatch({type: LOGIN_FAILURE, payload: error.message});
//     }
//   };
// };

export const getOTP = (phoneNo: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({type: VERIFY_OTP_REQUEST});
    try {
      const response = await axios.post(
        'https://338a-106-51-70-135.ngrok-free.app/api/phoneNo',
        {
          phoneNo,
        },
        Alert.alert('button Pressed'),
      );
      console.log('otp send');
      dispatch({type: VERIFY_OTP_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: VERIFY_OTP_FAILURE, payload: error});
    }
  };
};
export const submitOTP = (phoneNo: string, otp: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({type: LOGIN_REQUEST});
    try {
      const response = await axios.post(
        'https://338a-106-51-70-135.ngrok-free.app/api/otp',
        {
          phoneNo: phoneNo,
          otp: otp,
        },
        // console.log('Phone no', phoneNo, otp),
      );
      const token = response.headers.access_token;
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
        `${url}/login`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            // Authorization: `Bearer ${await AsyncStorage.getItem(
            //   'access_token',
            // )}`,
            // Authorization: `Bearer ${access_token}`,
          },
        },
      );
      const token = response.headers.access_token;
      await AsyncStorage.setItem('token', token);
      console.log('token stored');
      console.log('this is token', token);
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
      .post(`${url}/user/signup`, {
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

// export const Login = (email: string, password: string) => {
//   return async (dispatch: Dispatch) => {
//     try {
//       dispatch({
//         type: LOGIN_REQUEST,
//       });
//       const response = await axios.post(
//         `https://d38a-122-171-148-208.ngrok-free.app/api/v1/user/login`,
//         {
//           email: email,
//           password: password,
//         },
//         {
//           headers: {
//             // Authorization: `Bearer ${await AsyncStorage.getItem(
//             //   'access_token',
//             // )}`,
//           },
//         },
//       );

//       const token = response.headers.access_token;

//       await AsyncStorage.setItem('token', token);
//       // if (response && response.data && response.data.access_token) {
//       //   await AsyncStorage.setItem('userToken', response.data.access_token);
//       // }
//       console.log(token);
//       console.log('token stored');
//       console.log(token);
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: token,
//       });
//     } catch (error) {
//       console.log('login error', error);
//       dispatch({
//         type: LOGIN_FAILURE,
//         payload: error.message,
//       });
//     }
//   };
// };
// export const SignupAndLogin = (
//   firstName: string,
//   lastName: string,
//   email: string,
//   phoneNumber: string,
//   password: string,
// ) => {
//   return async (dispatch: Dispatch) => {
//     axios
//       .post(`https://d38a-122-171-148-208.ngrok-free.app/v1/user/signup`, {
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//         password,
//       })
//       .then((response: {data: any}) => {
//         console.log('signup success');
//         payload: response.data;
//       })
//       .catch(error => {
//         console.log('signup error', error);
//         dispatch({
//           type: LOGIN_FAILURE,
//           payload: error.message,
//         });
//       });
//   };
// };
export const Logout = () => {
  return async (dispatch: Dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};

export const addGenderData = genderData => {
  return {
    type: 'ADD_GENDER_DATA',
    payload: genderData,
  };
};

export const setRole = (role: string) => ({
  type: SET_ROLE,
  role,
});

//===============================================================

//changes done for wishlist and cart

export const addItemToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const addToWishlist = data => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});

export const removeFromWishlist = (data) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: data,
});

//----------
//changes for wishlist api

// action creator

export const postProductToAPI = item => {
  console.log('hello', item);
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      // make API call
      const response = await fetch(`${url}/wishlist/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();
      // update the Redux store with the response data
      dispatch(addProductToStore(data));
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  };
};

// action type
export const ADD_PRODUCT_TO_STORE = 'ADD_PRODUCT_TO_STORE';

// action creator
export const addProductToStore = product => {
  return {
    type: ADD_PRODUCT_TO_STORE,
    payload: product,
  };
};
//changes for wishlist api done till here!
//------------------------------------

// export const postProductToCartAPI = async (item: any) => {
//   console.log('hello cart', item);
//   const token = await AsyncStorage.getItem('token');
//   // console.log(token);
//   return (dispatch: (arg0: {type: string; payload: any}) => void) => {
//     // make API call
//     fetch(`https://6e07-106-51-70-135.ngrok-free.app/cart/add`, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(item),
//     })
//       .then(response => response.json())
//       .then(data => {
//         // update the Redux store with the response data
//         dispatch(addProductToCartStore(data));
//         console.log('====================================');
//         console.log(data);
//         console.log('====================================');
//         console.log('succes');
//       })
//       .catch(error => console.log(error));
//   };
// };

export const postProductToCartAPI = (item: any) => {
  const modifiedItem = {
    productId: item.id,
    quantity: item.quantity,
    // rentalEndDate: item.rentalEndDate,
    // rentalStartDate: item.rentalStartDate,
  };
  console.log('hello cart', item);
  return async (dispatch: any) => {
    const token = await AsyncStorage.getItem('token');
    // make API call
    fetch(`${url}/cart/add`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedItem),
    })
      .then(response => response.text())
      .then(data => {
        try {
          const parsedData = JSON.parse(data);
          // update the Redux store with the response data
          dispatch(addProductToCartStore(parsedData));
          Alert.alert('item Added Successfully');
        } catch (error) {
          console.log('Error parsing response:', error);
          console.log('Raw response:', data);
        }
      })
      .catch(error => console.log(error));
  };
};

// action type
export const ADD_PRODUCT_TO_CART_STORE = 'ADD_PRODUCT_TO_CART_STORE';

// action creator
export const addProductToCartStore = product => {
  return {
    type: ADD_PRODUCT_TO_CART_STORE,
    payload: product,
  };
};
