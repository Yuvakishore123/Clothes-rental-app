import {takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataPending,
} from '../slice/editItemSlice';
import {OwnerProductsUrl} from '../../constants/Apis';

function* fetchProductsData(action) {
  try {
    const token = yield call(AsyncStorage.getItem, 'token');
    console.log('i am editing the product', action.payload);
    const productId = action.payload;
    console.log(OwnerProductsUrl);
    const config = {
      headers: {Authorization: `Bearer ${token}`},
    };
    const response = yield call(
      axios.get,
      `https://8d69-106-51-70-135.ngrok-free.app/api/v1/product/listByProductId/${productId}`,
      config,
    );
    const productsData = response.data;
    console.log('i am the data of', productsData);
    yield put(fetchDataSuccess({productsData}));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export function* fetchEditItemSaga() {
  yield takeEvery(fetchDataPending.type, fetchProductsData);
}
