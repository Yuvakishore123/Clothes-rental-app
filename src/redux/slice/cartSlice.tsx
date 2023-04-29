// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// import axios from 'axios';

// export const fetchCartProducts = createAsyncThunk(
//   'fetchCartProducts',
//   async () => {
//     const token = await AsyncStorage.getItem('token'); // replace with your actual token

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const res = await axios.get(
//       'https://fa68-103-146-217-155.ngrok-free.app/api/v1/cart/list',
//       {},
//     );

//     return res.data;
//   },
// );

// const CartSlice = createSlice({
//   name: 'CartProducts',
//   initialState: {
//     data: null,
//     // sda: [],
//     isLoader: false,
//     isError: false,
//   },
//   extraReducers: builder => {
//     builder.addCase(fetchCartProducts.pending, (state, action) => {
//       state.isLoader = true;
//     });
//     builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
//       state.isLoader = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchCartProducts.rejected, (state, action) => {
//       state.isLoader = false;
//       state.isError = true;
//     });
//   },
//   reducers: undefined,
// });
// export default CartSlice.reducer;
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchCartProducts = createAsyncThunk('fetchProducts', async () => {
  // get the token from the state
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get(
      `https://fa68-103-146-217-155.ngrok-free.app/api/v1/cart/list`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response.data; // throw the error to be caught by the reject handler
  }
});

const CartSlice = createSlice({
  name: 'products',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCartProducts.pending, state => {
        state.isLoader = true;
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })
      .addCase(fetchCartProducts.rejected, state => {
        state.isLoader = false;
        state.isError = true;
      });
  },
  reducers: undefined,
});

export default CartSlice.reducer;
