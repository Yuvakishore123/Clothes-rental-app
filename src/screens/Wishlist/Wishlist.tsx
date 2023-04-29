/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
// import CartItem from '../Cart/CartItem';
import useWishlist from './useWishlist';
import style from './wishlistStyles';
import {
  addItemToCart,
  addToWishlist,
  removeFromCart,
} from '../../redux/actions/actions';

import {useDispatch, useSelector} from 'react-redux';
type Props = {
  route: {name: string};
  navigation: any;
};
const Wishlist = ({navigation}: Props) => {
  // const {cartData, handleRemoveFromWishlist, handleAddToCart} = useWishlist();
  const dispatch = useDispatch();

  const {WishlistProducts, removeFromWishlist} = useWishlist();
  const allWishlistProducts = useSelector(state => state.WishlistProducts.data);
  console.log('hey', allWishlistProducts);
  const isLoading = useSelector(state => state.WishlistProducts.isLoader);
  const error = useSelector(state => state.WishlistProducts.error);

  if (!WishlistProducts) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        {/* <Image
          source={require('../../../Assets/LoginImage.png')}
          style={{
            height: 200,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        /> */}
        <Text>The Items are Loading...</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <View style={style.textConatiner}>
        <Text style={style.textStyle}>Wishlist</Text>
      </View>
      <FlatList
        data={allWishlistProducts}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}
        renderItem={({item, index}) => {
          return (
            <View style={style.container}>
              <TouchableOpacity>
                <View style={style.imageContainer}>
                  <Image source={{uri: item.image}} style={style.image} />
                </View>
                <TouchableOpacity
                  style={style.wishlistBtn}
                  onPress={removeFromWishlist}>
                  <Image
                    source={require('../../../Assets/fillheart.png')}
                    style={{width: 24, height: 24, tintColor: 'red'}}
                  />
                </TouchableOpacity>
              </TouchableOpacity>

              <View style={style.cardTextContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={style.name}>{item.name}</Text>
                  <TouchableOpacity
                    style={style.addButton}
                    // onPress={() => {}}
                  >
                    <Text
                      style={{
                        color: '#3E54AC',
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={style.textContainer}>
                  <Text style={style.name}>{'₹' + item.price}</Text>

                  <TouchableOpacity
                    style={style.rentButton}
                    // onPress={() => {
                    // onAddToCart(item);
                    // handleAddToCart(item); imp
                    // }}
                  >
                    <Text style={style.rentText}>Rent</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
