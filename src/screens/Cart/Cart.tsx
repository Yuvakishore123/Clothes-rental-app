/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from '../../components/atoms/DatePicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useCart from './useCart';
import style from './CartItemStyles';
import {
  incrementCartItemQuantity,
  postProductToCartAPI,
} from '../../redux/actions/actions';
import Colors from '../../constants/Colors';

type Props = {
  route: {name: string};
  navigation: any;
};

const Cart = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {
    CartProducts,
    handlePayment,
    handleRemove,
    refreshing,
    onRefresh,
    handleUpdate,
    rentalStartDate,
    rentalEndDate,
    setRentalStartDate,
    setRentalEndDate,
    handleCheckout,
  } = useCart();
  const cartData = useSelector(state => state.CartProducts.data);
  const totalPrice = useSelector(state => state.CartProducts.totalPrice);
  const isLoading = useSelector(state => state.CartProducts.isLoader);
  const error = useSelector(state => state.CartProducts.error);
  console.log('cartItems:', cartData);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   await dispatch(fetchCartProducts());
  //   setRefreshing(false);
  // };
  // console.log('hello bhai', cartData);
  // console.log(cartData.cartItems.product.imageURL[0]);
  if (!CartProducts) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: Colors.main,
        }}>
        <Image
          source={require('../../../Assets/LoginImage.png')}
          style={{
            height: 200,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <Text style={{color: Colors.iconscolor}}>The Items are Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <View style={{width: 34, height: 29, left: 65, marginTop: 40}}>
        <View style={{}}>
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
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <ScrollView
          style={style.mainContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {cartData?.cartItems?.map(
            (
              item: {
                rentalEndDate: ReactNode;
                rentalStartDate: ReactNode;
                product: {
                  imageURL: any;
                  name:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  id: any;
                  size:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  price: string;
                };
              },
              index: React.Key | null | undefined,
            ) => (
              <View key={index} style={style.cardContainer}>
                <Image
                  source={{uri: item.product.imageURL}}
                  style={style.image}
                />
                <View style={style.cardTextContainer}>
                  <Text style={style.productname}>{item.product.name}</Text>
                  <Text style={style.name}>Rent From</Text>
                  <View style={{flexDirection: 'row'}}>
                    <View style={style.DateContainer}>
                      <Text style={style.DateTxt}>{item.rentalStartDate}</Text>
                    </View>
                    <View style={style.DateContainer}>
                      <Text style={style.DateTxt}>{item.rentalEndDate}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={style.RemoveButton}
                      onPress={() => handleRemove(item.product.id)}>
                      <Text style={style.RemoveButtonText}>remove</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                      style={style.UpdateButton}
                      onPress={handleUpdate}>
                      <Text style={style.UpdateButtonText}>Update</Text>
                    </TouchableOpacity> */}
                  </View>
                  <Text style={style.name}>Size</Text>
                  <View style={style.productSizeBox}>
                    <Text style={style.detailsdescription}>
                      {item.product.size}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={style.priceText}>
                      {'₹' + item.product.price}
                    </Text>
                    <View style={style.quantityContainer}>
                      {/* <View style={{alignItems: 'center', bottom: 2}}> */}
                      <TouchableOpacity onPress={decrementQuantity}>
                        <View
                          style={{
                            borderRightWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingRight: 5,
                            marginTop: -2,
                          }}>
                          <Icon name="minus" size={15} />
                        </View>
                      </TouchableOpacity>
                      <View style={{alignItems: 'center', bottom: 2}}>
                        <Text style={style.quantityTxt}>{item.quantity}</Text>
                      </View>
                      <TouchableOpacity onPress={incrementQuantity}>
                        <View
                          style={{
                            borderLeftWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingLeft: 5,
                            marginTop: -2,
                          }}>
                          <Icon name="plus" size={15} />
                        </View>
                      </TouchableOpacity>
                      {/* </View> */}
                    </View>
                  </View>
                </View>
              </View>
            ),
          )}
        </ScrollView>
        <View style={{marginTop: 10, padding: 20}}>
          <Text style={{color: '#3E54AC', fontWeight: '600', fontSize: 18}}>
            Grand Total
          </Text>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                width: 320,
                backgroundColor: '#3E54AC1A',
                height: 50,
                borderRadius: 5,
                alignItems: 'center',
                padding: 10,
              }}>
              <Text style={{color: '#3E54AC', fontWeight: '900', fontSize: 10}}>
                Total Amount
              </Text>
              <Text style={{color: '#3E54AC', fontWeight: '900', fontSize: 10}}>
                {' '}
                ₹ {cartData.totalCost}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={style.PaymentButton}
            onPress={handleCheckout}>
            <Text style={style.PaymentButtonText}>Proceed To CheckOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Cart;
