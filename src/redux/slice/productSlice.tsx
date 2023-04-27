import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {OwnerProductsUrl} from '../../constants/Apis';

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await axios.get(OwnerProductsUrl, {});
  //   sds = res.data
  return res.data;
});

// export const fetchProducts = createAsyncThunk(
//   'fetchProducts',
//   async (_, {getState}) => {
//     const token = getState().auth.token;
//     console.log('uyt', token);
//     const res = await axios.get(OwnerProductsUrl, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res.data;
//   },
// );

// export const fetchProducts = createAsyncThunk(
//   'fetchProducts',
//   async (_, {getState}) => {
//     const token = getState().auth.token;
//     const res = await axios.get(OwnerProductsUrl, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res.data;
//   },
// );

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.isLoader = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.isLoader = false;
      state.isError = true;
    });
  },
  reducers: undefined,
});
export default ProductSlice.reducer;
