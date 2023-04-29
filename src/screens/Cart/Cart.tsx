/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from '../../components/atoms/DatePicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useCart from './useCart';
import style from './CartItemStyles';

type Props = {
  route: {name: string};
  navigation: any;
};

const Cart = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {CartProducts, handleCheckout, handleRemove} = useCart();
  const cartData = useSelector(state => state.CartProducts.data);
  const totalCost = useSelector(state => state.CartReducer.totalCost);
  const isLoading = useSelector(state => state.CartProducts.isLoader);
  const error = useSelector(state => state.CartProducts.error);
  const [quantity, setQuantity] = useState(1);
  const [rentalStartDate, setRentalStartDate] = useState(new Date());
  const [rentalEndDate, setRentalEndDate] = useState(new Date());
  console.log('cartItems:', cartData);
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
        <Text>The Items are Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <View style={{width: 34, height: 29, left: 65, marginTop: 20}}>
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
        <ScrollView style={style.mainContainer}>
          {cartData?.cartItems?.map((item, index) => (
            <View key={index} style={style.cardContainer}>
              <Image
                source={{uri: item.product.imageURL}}
                style={style.image}
              />
              <View style={style.cardTextContainer}>
                <Text style={style.productname}>{item.product.name}</Text>
                <Text style={style.name}>Rent From</Text>
                <DatePicker
                  fromDate={rentalStartDate}
                  toDate={rentalEndDate}
                  onFromDateChange={setRentalStartDate}
                  onToDateChange={setRentalEndDate}
                />
                <TouchableOpacity
                  style={style.RemoveButton}
                  onPress={() => handleRemove(item.product.id)}>
                  <Text style={style.RemoveButtonText}>remove</Text>
                </TouchableOpacity>
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
                    <TouchableOpacity onPress={decrementQuantity}>
                      <View
                        style={{
                          borderRightWidth: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingRight: 5,
                        }}>
                        <Icon name="minus" size={15} />
                      </View>
                    </TouchableOpacity>
                    <View style={{alignItems: 'center', bottom: 2}}>
                      <Text>{quantity}</Text>
                    </View>
                    <TouchableOpacity onPress={incrementQuantity}>
                      <View
                        style={{
                          borderLeftWidth: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingLeft: 5,
                        }}>
                        <Icon name="plus" size={15} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
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
              <Text>Total Amount</Text>
              <Text>{'₹' + totalCost}</Text>
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
