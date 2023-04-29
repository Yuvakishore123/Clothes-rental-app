// import AsyncStorage from '@react-native-async-storage/async-storage';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
// import CartItem from './CartItem';
import style from './CartItemStyles';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from '../../components/atoms/DatePicker';
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
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

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
            // // <CartItem
            // //   onAddWishlist={x => {
            // //     dispatch(addToWishlist(x));
            // //     // ,AsyncStorage.setItem(
            // //     //   'wishlistData',
            // //     //   JSON.stringify(WishlistData)
            // //     // );
            // //   }}
            // //   item={item}
            // //   onRemoveItem={() => {
            // //     dispatch(removeFromCart(index));
            // //     // AsyncStorage.setItem('cartData', JSON.stringify(cartData));
            // //   }}
            // // />

            // <View style={style.cardContainer}>
            //   <TouchableOpacity>
            //     <View style={style.image}>
            // <Image source={{uri: item.image}} style={style.image} />

            //   <View style={style.cardTextContainer}>
            //     <View
            //       style={{
            //         flexDirection: 'row',
            //         justifyContent: 'space-between',
            //       }}>
            //       <Text style={style.name}>{item.title}</Text>
            //       <TouchableOpacity
            //         style={style.addButton}
            //         // onPress={() => {}}
            //       >
            //         <Text
            //           style={{
            //             color: '#3E54AC',
            //             fontWeight: 'bold',
            //             fontSize: 12,
            //           }}>
            //           +
            //         </Text>
            //       </TouchableOpacity>
            //     </View>

            //     <View style={style.textContainer}>
            //       <Text style={style.name}>{'₹' + item.price}</Text>

            //       <TouchableOpacity
            //         style={style.rentButton}
            //         // onPress={() => {
            //         // onAddToCart(item);
            //         // handleAddToCart(item); imp
            //         // }}
            //       >
            //         <Text style={style.rentText}>Remove</Text>
            //       </TouchableOpacity>
            //     </View>
            //   </View>
            // </View>
            <View style={style.cardContainer}>
              <Image source={{uri: item.imageURL}} style={style.image} />
              <Text style={style.priceText}>₹ {item.price}</Text>
              <Text style={style.TextItemname}></Text>
              <Text style={style.TextRentfrom}>Rent From</Text>
              <View style={style.buttonContainer}>
                <View style={style.buttonRentFrom}>
                  <Text style={style.buttonTextRentto}>Rent To</Text>
                </View>
                <Text style={style.TextSizeTo}>To</Text>
                <View style={style.buttonContainer}>
                  <TouchableOpacity style={style.buttonRentTo}>
                    <Text style={style.buttonTextRentto}>Rent To</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={style.buttonQuantity}
                    onPress={decrementQuantity}>
                    <Text style={style.buttonTextDecrement}>-</Text>
                  </TouchableOpacity>
                  <Text style={style.quantityText}>{quantity}</Text>
                  <TouchableOpacity
                    style={style.buttonQuantity}
                    onPress={incrementQuantity}>
                    <Text style={style.buttonTextIncrement}>+</Text>
                  </TouchableOpacity>
                  <Text style={style.TextSize}>Size</Text>
                  <TouchableOpacity
                    style={style.buttonSize}
                    onPress={() => setSize('S')}>
                    <Text
                      style={[
                        style.buttonSizeText,
                        size === 'S' && style.activeButtonText,
                      ]}>
                      S
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={style.buttonSize}
                    onPress={() => setSize('M')}>
                    <Text
                      style={[
                        style.buttonSizeText,
                        size === 'M' && styles.activeButtonText,
                      ]}>
                      M
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={style.buttonSize}
                    onPress={() => setSize('L')}>
                    <Text
                      style={[
                        style.buttonSizeText,
                        size === 'L' && style.activeButtonText,
                      ]}>
                      L
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View>
        <Text style={style.TextGrand}>Grand Total</Text>
        <View style={style.cardContaineramount}>
          <Text style={style.TextTotal}>Total Amount </Text>
          <Text style={style.priceTotalText}>₹ 5</Text>
        </View>
        <TouchableOpacity style={style.PaymentButton}>
          <Text style={style.PaymentButtonText}>Proceed To CheckOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;