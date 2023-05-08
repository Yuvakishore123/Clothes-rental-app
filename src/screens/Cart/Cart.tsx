/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable react-native/no-inline-styles */
// import {
//   Image,
//   RefreshControl,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {useSelector} from 'react-redux';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import useCart from './useCart';
// import style from './CartItemStyles';
// import Colors from '../../constants/Colors';
// import CustomModal from '../../components/atoms/CustomModel/CustomModel';
// import Lottie from 'lottie-react-native';

// type Props = {
//   route: {name: string};
//   navigation: any;
// };
// const Cart = ({navigation}: Props) => {
//   const {
//     CartProducts,
//     handleRemove,
//     refreshing,
//     onRefresh,
//     handleCheckout,
//     closeModal,
//     showModal,
//   } = useCart();
//   const cartData = useSelector(state => state.CartProducts.data);
//   console.log('cartItems:', cartData);

//   if (!CartProducts) {
//     return (
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '100%',
//           backgroundColor: Colors.main,
//         }}>
//         <Lottie
//           source={require('../../../Assets/loading.json')}
//           autoPlay
//           style={{
//             height: 200,
//             width: 200,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         />
//         <Text style={{color: Colors.iconscolor}}>The Items are Loading...</Text>
//       </View>
//     );
//   }
//   return (
//     <>
//       <View style={{width: 50, height: 29, left: 65, marginTop: 40}}>
//         <View style={{}}>
//           <Text
//             style={{
//               color: '#3E54AC',
//               fontSize: 20,
//               fontFamily: 'poppins',
//               fontWeight: 'bold',
//             }}>
//             Cart
//           </Text>
//         </View>
//       </View>
//       <View style={{flex: 1, alignItems: 'center'}}>
//         <ScrollView
//           style={style.mainContainer}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }>
//           {cartData?.cartItems.length === 0 ? (
//             <View style={style.noAddressContainer1}>
//               <View style={style.titleTextContainer1}>
//                 <Lottie
//                   style={style.imageS1}
//                   autoPlay
//                   source={require('../../../Assets/emptycart.json')}
//                 />
//               </View>
//               <View style={style.textContainer1}>
//                 <Text style={style.noAddressText1}>Hey,it feels so light!</Text>
//               </View>
//             </View>
//           ) : (
//             <View>
//               {cartData?.cartItems?.map(
//                 (
//                   item: {
//                     rentalEndDate: ReactNode;
//                     rentalStartDate: ReactNode;
//                     product: {
//                       imageURL: any;
//                       name:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined;
//                       id: any;
//                       size:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined;
//                       price: string;
//                     };
//                   },
//                   index: React.Key | null | undefined,
//                 ) => (
//                   <View key={index} style={style.cardContainer}>
//                     <Image source={{uri: item.imageUrl}} style={style.image} />
//                     <View style={style.cardTextContainer}>
//                       <Text style={style.productname}>{item.product.name}</Text>
//                       <Text style={style.name}>Rent From</Text>
//                       <View style={{flexDirection: 'row'}}>
//                         <View style={style.DateContainer}>
//                           <Text style={style.DateTxt}>
//                             {item.rentalStartDate}
//                           </Text>
//                         </View>
//                         <View style={style.DateContainer}>
//                           <Text style={style.DateTxt}>
//                             {item.rentalEndDate}
//                           </Text>
//                         </View>
//                       </View>
//                       <View style={{flexDirection: 'row'}}>
//                         <TouchableOpacity
//                           style={style.RemoveButton}
//                           onPress={() => handleRemove(item.product.id)}>
//                           <Text style={style.RemoveButtonText}>remove</Text>
//                         </TouchableOpacity>
//                       </View>
//                       <Text style={style.name}>Size</Text>
//                       <View style={style.productSizeBox}>
//                         <Text style={style.detailsdescription}>
//                           {item.product.size}
//                         </Text>
//                       </View>
//                       <View
//                         style={{
//                           flexDirection: 'row',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                         }}>
//                         <Text style={style.priceText}>
//                           {'₹' + item.product.price}
//                         </Text>
//                         <View style={style.quantityContainer}>
//                           {/* <View style={{alignItems: 'center', bottom: 2}}> */}
//                           <TouchableOpacity>
//                             <View
//                               style={{
//                                 borderRightWidth: 1,
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 paddingRight: 5,
//                                 marginTop: -2,
//                               }}>
//                               <Icon name="minus" size={15} />
//                             </View>
//                           </TouchableOpacity>
//                           <View style={{alignItems: 'center', bottom: 2}}>
//                             <Text style={style.quantityTxt}>
//                               {item.quantity}
//                             </Text>
//                           </View>
//                           <TouchableOpacity>
//                             <View
//                               style={{
//                                 borderLeftWidth: 1,
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 paddingLeft: 5,
//                                 marginTop: -2,
//                               }}>
//                               <Icon name="plus" size={15} />
//                             </View>
//                           </TouchableOpacity>
//                           {/* </View> */}
//                         </View>
//                       </View>
//                     </View>
//                   </View>
//                 ),
//               )}
//             </View>
//           )}
//         </ScrollView>
//         <View style={{marginTop: 10, padding: 20}}>
//           <Text style={{color: '#3E54AC', fontWeight: '600', fontSize: 18}}>
//             Grand Total
//           </Text>
//           <View style={{alignItems: 'center'}}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 marginBottom: 10,
//                 width: 320,
//                 backgroundColor: '#3E54AC1A',
//                 height: 50,
//                 borderRadius: 5,
//                 alignItems: 'center',
//                 padding: 10,
//               }}>
//               <Text style={{color: '#3E54AC', fontWeight: '900', fontSize: 10}}>
//                 Total Amount
//               </Text>
//               <Text style={{color: '#3E54AC', fontWeight: '900', fontSize: 10}}>
//                 {' '}
//                 ₹ {cartData.totalCost}
//               </Text>
//             </View>
//           </View>
//           <TouchableOpacity
//             style={style.PaymentButton}
//             onPress={handleCheckout}>
//             <Text style={style.PaymentButtonText}>Proceed To CheckOut</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <CustomModal
//         showModal={showModal}
//         onClose={closeModal}
//         message="Item Remove From cart!"
//       />
//     </>
//   );
// };
// export default Cart;

import {
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useCart from './useCart';
import style from './CartItemStyles';
import Colors from '../../constants/Colors';
import CustomModal from '../../components/atoms/CustomModel/CustomModel';
import Lottie from 'lottie-react-native';
import {useState} from 'react';

type Props = {
  route: {name: string};
  navigation: any;
};
const Cart = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {
    CartProducts,
    handleCheckout,
    handlecartstate,
    handleRemove,
    refreshing,
    onRefresh,
    closeModal,
    showModal,
    iscartVisible,
  } = useCart();
  // const cartData = useSelector(state => state.CartProducts.data);
  // console.log('cartItems:', cartData);
  const cartData = useSelector(state => state.CartProducts.data) || {
    cartItems: [],
  };
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

  if (!CartProducts) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: Colors.main,
        }}>
        <Lottie
          source={require('../../../Assets/loading.json')}
          autoPlay
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
      <View
        style={{width: '100%', height: '100%', backgroundColor: Colors.main}}>
        <View
          style={{
            width: 50,
            height: 29,
            marginLeft: 65,
            marginTop: 10,
            backgroundColor: Colors.main,
          }}>
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
        <View
          style={{flex: 1, alignItems: 'center', backgroundColor: Colors.main}}>
          <ScrollView
            style={style.mainContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {cartData?.cartItems.length === 0 ? (
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
                    Hey,it feels so light!
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
                      <Image
                        source={{uri: item.imageUrl}}
                        style={style.image}
                      />
                      <View style={style.cardTextContainer}>
                        <Text style={style.productname}>
                          {item.product.name}
                        </Text>
                        <Text style={style.name}>Rent From</Text>
                        <View style={{flexDirection: 'row'}}>
                          <View style={style.DateContainer}>
                            <Text style={style.DateTxt}>
                              {item.rentalStartDate}
                            </Text>
                          </View>
                          <View style={style.DateContainer}>
                            <Text style={style.DateTxt}>
                              {item.rentalEndDate}
                            </Text>
                          </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <TouchableOpacity
                            style={style.RemoveButton}
                            onPress={() => handleRemove(item.product.id)}>
                            <Text style={style.RemoveButtonText}>remove</Text>
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
                            <TouchableOpacity onPress={handleDecrement}>
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
                            <TouchableOpacity onPress={handleIncrement}>
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
                <Text
                  style={{color: '#3E54AC', fontWeight: '900', fontSize: 10}}>
                  Total Amount
                </Text>
                <Text
                  style={{color: '#3E54AC', fontWeight: '900', fontSize: 10}}>
                  {' '}
                  ₹ {cartData.totalCost}
                </Text>
              </View>
            </View>
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
                onPress={handleCheckout}
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
      </View>
    </>
  );
};
export default Cart;
