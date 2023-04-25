import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchWishlistProducts = createAsyncThunk(
  'fetchWishlist',
  async () => {
    const res = await axios.get(
      'https://d38a-122-171-148-208.ngrok-free.app/api/v1/wishlist/739ba91c-9ef2-48a7-895d-99be4c73fcb5',
      {},
    );

    return res.data;
  },
);

const WishlistProductSlice = createSlice({
  name: 'WishlistProduct',
  initialState: {
    data: null,
    // sda: [],
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchWishlistProducts.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchWishlistProducts.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchWishlistProducts.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
  reducers: undefined,
});
export default WishlistProductSlice.reducer;
