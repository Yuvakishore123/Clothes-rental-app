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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useCart from './useCart';
import style from './CartItemStyles';
import Colors from '../../constants/Colors';
import CustomModal from '../../components/atoms/CustomModel/CustomModel';
import Lottie from 'lottie-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  route: {name: string};
  navigation: any;
};

const Cart = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {
    CartProducts,
    handleCheckout,
    handlePayment,
    handlecartstate,
    handleRemove,
    refreshing,
    onRefresh,
    handleUpdate,
    closeModal,
    showModal,
    iscartVisible,
  } = useCart();

  const cartData = useSelector(state => state.CartProducts.data) || {
    cartItems: [],
  };

  const totalPrice = useSelector(state => state.CartProducts.totalPrice);
  const isLoading = useSelector(state => state.CartProducts.isLoader);
  const error = useSelector(state => state.CartProducts.error);
  const [isQuantity, setIsQuantity] = useState(true);
  const [isMinusDisabled, setIsMinusDisabled] = useState(false);
  const [isPlusDisabled, setIsPlusDisabled] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const Quantity = cartData.cartItems.quantity;
  console.log(cartData.cartItems.quantity);
  console.log('cartData is ', cartData);
  const handleDecrement = () => {
    setQuantity(quantity - 1);
    setIsQuantity(true);
    if (quantity === 2) {
      setIsMinusDisabled(true);
    }
    setIsPlusDisabled(false);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setIsQuantity(true);
    if (quantity === Quantity - 1) {
      setIsPlusDisabled(true);
    }
    setIsMinusDisabled(false);
  };

  const [rentalStartDates, setRentalStartDates] = useState(
    cartData?.cartItems?.map(item => new Date(item.rentalStartDate)),
  );
  const [rentalEndDates, setRentalEndDates] = useState(
    cartData?.cartItems?.map(item => new Date(item.rentalEndDate)),
  );

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
      <View style={{width: 50, height: 29, left: 65, marginTop: 40}}>
        <View style={{}}>
          <Text
            style={{
              color: '#3E54AC',
              fontSize: 20,
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
          {cartData && cartData.cartItems.length === 0 ? (
            <View style={style.noAddressContainer1}>
              <View style={style.titleTextContainer1}>
                <Lottie
                  style={style.imageS1}
                  autoPlay
                  source={require('../../../Assets/emptycart.json')}
                />
              </View>
              <View style={style.textContainer1}>
                <Text style={style.noAddressText1}>
                  Hey, it feels so light!
                </Text>
              </View>
            </View>
          ) : (
            <View>
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
                    <Image source={{uri: item.imageUrl}} style={style.image} />
                    <View style={style.cardTextContainer}>
                      <Text style={style.productname}>{item.product.name}</Text>
                      <Text style={style.name}>Rent From</Text>
                      {/* <View style={style.datePickerContainer}>
                        <DateTimePicker
                          // value={rentalStartDates[index]}
                          mode="datetime"
                          is24Hour={true}
                          display="default"
                          onChange={(event, date) => {
                            const newDates = [...rentalStartDates];
                            newDates[index] = date;
                            setRentalStartDates(newDates);
                          }}
                        />
                        <DateTimePicker
                          // value={rentalEndDates[index]}  
                          mode="datetime"
                          is24Hour={true}
                          display="default"
                          onChange={(event, date) => {
                            const newDates = [...rentalEndDates];
                            newDates[index] = date;
                            setRentalEndDates(newDates);
                          }}
                        />
                      </View> */}
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          style={style.RemoveButton}
                          onPress={() => handleRemove(item.product.id)}>
                          <Text style={style.RemoveButtonText}>remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={style.UpdateButton}
                          onPress={handleUpdate}>
                          <Text style={style.UpdateButtonText}>Update</Text>
                        </TouchableOpacity>
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
                          <TouchableOpacity
                            onPress={handleDecrement}
                            disabled={quantity === 1 || isMinusDisabled}>
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
                            <Text style={style.quantityTxt}>{quantity}</Text>
                          </View>
                          <TouchableOpacity
                            onPress={handleIncrement}
                            disabled={
                              quantity === item.quantity || isPlusDisabled
                            }>
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
            </View>
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
          {console.log(cartData.cartItems.length)}
          {cartData.cartItems.length === 0 ? (
            <TouchableOpacity
              style={[style.PaymentButton, !iscartVisible && style.Disabled]}
              onPress={handlecartstate}
              disabled={true}>
              <Text style={style.PaymentButtonText}>Proceed To CheckOut</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[style.PaymentButton, iscartVisible && style.Disabled]}
              onPress={handlecartstate}
              disabled={false}>
              <Text style={style.PaymentButtonText}>Proceed To CheckOut</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <CustomModal
        showModal={showModal}
        onClose={closeModal}
        message="Item Remove From cart!"
      />
    </>
  );
};
export default Cart;
