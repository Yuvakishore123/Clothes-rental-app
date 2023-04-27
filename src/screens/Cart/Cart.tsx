// import AsyncStorage from '@react-native-async-storage/async-storage';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
// import CartItem from './CartItem';
import style from './CartItemStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  addToWishlist,
  removeFromCart,
} from '../../redux/actions/actions';
import useCart from './useCart';
type Props = {
  route: {name: string};
  navigation: any;
};
const Cart = ({navigation}: Props) => {
  // const [cartList, setCartList] = useState([]);
  // const cartData = useSelector(state => state.CartReducer);
  // const dispatch = useDispatch();

  const dispatch = useDispatch();

  const CartProducts = useCart();
  const allCartProducts = useSelector(state => state.CartProducts.data);
  console.log('hey cart products', allCartProducts);
  const isLoading = useSelector(state => state.CartProducts.isLoader);
  const error = useSelector(state => state.CartProducts.error);

  if (!CartProducts) {
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
        data={allCartProducts}
        renderItem={({item, index}) => {
          return (
            // <CartItem
            //   onAddWishlist={x => {
            //     dispatch(addToWishlist(x));
            //     // ,AsyncStorage.setItem(
            //     //   'wishlistData',
            //     //   JSON.stringify(WishlistData)
            //     // );
            //   }}
            //   item={item}
            //   onRemoveItem={() => {
            //     dispatch(removeFromCart(index));
            //     // AsyncStorage.setItem('cartData', JSON.stringify(cartData));
            //   }}
            // />

            <View style={style.container}>
              <TouchableOpacity>
                <View style={style.imageContainer}>
                  <Image source={{uri: item.image}} style={style.image} />
                </View>
              </TouchableOpacity>

              <View style={style.cardTextContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={style.name}>{item.title}</Text>
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
                    <Text style={style.rentText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={style.wishlistBtn}
                // onPress={() => {
                // onRemoveFromWishlist(item);
                // handleRemoveFromWishlist(item); imp
                // }}
              >
                <Image
                  source={require('../../../Assets/fillheart.png')}
                  style={{width: 24, height: 24, tintColor: 'red'}}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
