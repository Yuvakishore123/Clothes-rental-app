// import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CartItem from './CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  addToWishlist,
  removeFromCart,
} from '../../redux/actions/actions';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.CartReducer);
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     AsyncStorage.getItem('cartData').then(data => {
  //       if (data) {
  //         setCartList(JSON.parse(data));
  //       }
  //     });
  //   }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{marginLeft: 63, marginTop: 20}}>
        <Text
          style={{
            color: '#3E54AC',
            fontSize: 15,
            fontFamily: 'poppins',
            fontWeight: 'bold',
          }}>
          Cart
        </Text>
      </View>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              onAddWishlist={x => {
                dispatch(addToWishlist(x));
                // ,AsyncStorage.setItem(
                //   'wishlistData',
                //   JSON.stringify(WishlistData)
                // );
              }}
              item={item}
              onRemoveItem={() => {
                dispatch(removeFromCart(index));
                // AsyncStorage.setItem('cartData', JSON.stringify(cartData));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
