import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CartItem from '../Cart/CartItem';
import {useWishlist} from './useWishlist';
import style from './wishlistStyles';
import {
  addItemToCart,
  addToWishlist,
  removeFromCart,
} from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const Wishlist = ({
  item,
  onRemoveItem,
  onAddWishlist,
  onRemoveFromWishlist,
  isWishlist,
  onAddToCart,
}) => {
  const {cartData, handleRemoveFromWishlist, handleAddToCart} = useWishlist();



  //---------------------------------------------------------changes
  // const dispatch = useDispatch();

  // const UserProducts = useHome();
  // const allProducts = useSelector(state => state.UserProducts.data);
  // const isLoading = useSelector(state => state.UserProducts.isLoader);
  // const error = useSelector(state => state.UserProducts.error);
  

  return (
    <View style={style.container}>
      <View style={style.textConatiner}>
        <Text style={style.textStyle}>Wishlist</Text>
      </View>
      <FlatList
        data={cartData}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}
        renderItem={({item, index}) => {
          return (
            <CartItem
              isWishlist={'abc'}
              item={item}
              onRemoveFromWishlist={() => {
                handleRemoveFromWishlist(index);
              }}
              onAddToCart={x => {
                handleAddToCart(x);
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
