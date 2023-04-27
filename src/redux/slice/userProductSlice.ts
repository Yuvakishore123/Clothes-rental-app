import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import axios from 'axios';
// var sds =[]
export const fetchUserProducts = createAsyncThunk('fetchUserProducts', async () => {
  const res = await axios.get('https://fakestoreapi.com/products', {});
  //   sds = res.data
  return res.data;
});


// export const fetchUserProducts = createAsyncThunk(
//   'fetchUserProducts',
//   async (_, {getState}) => {
//     const token = getState().auth.token;
//     const res = await axios.get('https://338a-106-51-70-135.ngrok-free.app/product/list', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res.data;
//   },
// );

const UserProductSlice = createSlice({
  name: 'UserProducts',
  initialState: {
    data: null,
    // sda: [],
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchUserProducts.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchUserProducts.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    //   console.log('====================================');
    //   console.log("Action.payload",action.payload);
    //   console.log('====================================');
      //   state.sda = sds;
    });
    builder.addCase(fetchUserProducts.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
  reducers: undefined,
});
export default UserProductSlice.reducer;
