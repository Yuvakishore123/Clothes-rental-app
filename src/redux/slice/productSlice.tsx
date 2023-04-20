import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {OwnerProductsUrl} from '../../constants/Apis';
export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await axios.get(OwnerProductsUrl, {});
  return res.data;
});
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
