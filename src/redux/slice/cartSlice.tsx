import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchCartProducts = createAsyncThunk(
  'fetchCartProducts',
  async () => {
    const res = await axios.get('https://fakestoreapi.com/products', {});

    return res.data;
  },
);

const CartSlice = createSlice({
  name: 'CartProducts',
  initialState: {
    data: null,
    // sda: [],
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchCartProducts.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCartProducts.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
  reducers: undefined,
});
export default CartSlice.reducer;
