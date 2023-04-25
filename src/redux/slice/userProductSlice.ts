import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import axios from 'axios';
// var sds =[]
export const fetchUserProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await axios.get('https://d38a-122-171-148-208.ngrok-free.app/api/v1/product/list?pageNumber=0&pageSize=10', {});
  //   sds = res.data
  return res.data;
});

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
