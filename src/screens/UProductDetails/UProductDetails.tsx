// /* eslint-disable react/self-closing-comp */
// /* eslint-disable react-native/no-inline-styles */
// import React, {useState} from 'react';
// import {
//   StatusBar,
//   Text,
//   View,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import DatePicker from '../../components/atoms/DatePicker Detail';
// import {ScrollView} from 'react-native-gesture-handler';
// import styles from './UProductDetailsStyle';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useDispatch} from 'react-redux';
// import {url} from '../../constants/Apis';
// import CustomModal from '../../components/atoms/CustomModel/CustomModel';
// type Props = {
//   route: {params: {product: any}};
//   navigation: any;
// };
// export default function UDetailScreen({route, navigation}: Props) {
//   const {product} = route.params;
//   const [rentalStartDate, setRentalStartDate] = useState(new Date());
//   const [rentalEndDate, setRentalEndDate] = useState(new Date());
//   const [quantity, setQuantity] = useState(1);
//   const [showModal, setShowModal] = useState(false);
//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };
//   console.log('hey bhai', product);
//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };
//   const handleSubmit = async () => {
//     const item = {
//       productId: product.id,
//       quantity: quantity,
//       rentalEndDate: rentalEndDate.toISOString(),
//       rentalStartDate: rentalStartDate.toISOString(),
//     };
//     const token = await AsyncStorage.getItem('token');
//     fetch(`${url}/cart/add`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(item),
//     })
//       // .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//         openModal();
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };
//   const openModal = () => {
//     setShowModal(true);
//   };
//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
//         <View style={styles.dheader}>
//           <Icon
//             name="arrow-back-ios"
//             size={28}
//             color="black"
//             onPress={() => navigation.goBack()}
//           />
//         </View>
//         <View>
//           <ScrollView horizontal={true}>
//             {product.imageUrl.map((item, index) => (
//               <ImageBackground
//                 key={index}
//                 style={{
//                   height: 500,
//                   width: 405,
//                   // zIndex: 2,
//                   backgroundColor: '#3E54AC1A',
//                   marginLeft: -5,
//                   marginTop: -5,
//                 }}
//                 source={{uri: item}}></ImageBackground>
//             ))}
//           </ScrollView>
//         </View>
//         <View style={[styles.detailsContainer, {marginTop: -50}]}>
//           <Text style={styles.startext}>{product.name}</Text>
//           <Text style={styles.detailsdescription}>{product.description}</Text>
//           <View style={{marginTop: 10}}>
//             <Text style={styles.headingtext}>Size</Text>
//           </View>
//           <View style={styles.productSizeBox}>
//             <Text style={styles.detailsSize}>{product.size}</Text>
//           </View>
//           <View style={{marginTop: 10, marginBottom: 3}}>
//             <Text style={styles.headingtext}>Rent</Text>
//           </View>
//           <View style={{marginBottom: 20}}>
//             <DatePicker
//               fromDate={rentalStartDate}
//               toDate={rentalEndDate}
//               onFromDateChange={setRentalStartDate}
//               onToDateChange={setRentalEndDate}
//             />
//             <View style={{marginTop: 10}}>
//               <Text style={styles.headingtext}>Quantity</Text>
//             </View>
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity
//                 style={styles.quantityButton}
//                 onPress={decrementQuantity}>
//                 <Text style={styles.quantityButtonText}>-</Text>
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{quantity}</Text>
//               <TouchableOpacity
//                 style={styles.quantityButton}
//                 onPress={incrementQuantity}>
//                 <Text style={styles.quantityButtonText}>+</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={{marginTop: 10}}>
//             <Text style={styles.headingtext}>Price</Text>
//           </View>
//           <Text style={styles.detailsdescription}>₹{product.price}</Text>
//           <View style={styles.touchablebtnContainer}>
//             <TouchableOpacity
//               style={styles.touchablebtn}
//               onPress={handleSubmit}>
//               <Text style={styles.touchableText}>Add to cart</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <CustomModal
//         showModal={showModal}
//         onClose={closeModal}
//         message="Item added successfully!"
//       />
//     </ScrollView>
//   );
// }


import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from '../../components/atoms/DatePicker Detail';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './UProductDetailsStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {url} from '../../constants/Apis';
import CustomModal from '../../components/atoms/CustomModel/CustomModel';
type Props = {
  route: {params: {product: any}};
  navigation: any;
};
export default function UDetailScreen({route, navigation}: Props) {
  const dispatch = useDispatch();
  const {product} = route.params;
  const [rentalStartDate, setRentalStartDate] = useState(new Date());
  const [rentalEndDate, setRentalEndDate] = useState(new Date());
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showwModal, settShowModal] = useState(false);
  const [isQuantity, setIsQuantity] = useState(true);
  const [isMinusDisabled, setIsMinusDisabled] = useState(true);
  const [isPlusDisabled, setIsPlusDisabled] = useState(false);
  // const Quantity = product.quantity;
  const Quantity = product.quantity;
  console.log('Product Quantity is :', Quantity);
  // const handleQuantity = () => {
  //   if (Quantity === 1) {
  //     setIsQuantity(false);
  //   }
  // };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
    setIsQuantity(true);
    if (quantity === 1) {
      setIsMinusDisabled(true);
    }
    setIsPlusDisabled(false);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setIsQuantity(true);
    if (quantity === product.quantity - 1) {
      setIsPlusDisabled(true);
    }
    setIsMinusDisabled(false);
  };

  const handleSubmit = async () => {
    const item = {
      productId: product.id,
      quantity: quantity,
      rentalEndDate: rentalEndDate.toISOString(),
      rentalStartDate: rentalStartDate.toISOString(),
    };
    console.log('quantity is:', quantity);
    const token = await AsyncStorage.getItem('token');
    fetch(`${url}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    })
      // .then(response => response.json())
      .then(response => {
        console.log('Success:', response);
        if (response.status === 400) {
          // console.log('john bhaiyaa error');
          opennModal();
        }
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        openModal();
      })
      .catch(error => {
        console.log(error);
        // console.error('Error:', error);
      });
  };
  const openModal = () => {
    setShowModal(true);
  };
  const opennModal = () => {
    settShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const closeeModal = () => {
    settShowModal(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <View style={styles.dheader}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View>
          <ScrollView horizontal={true}>
            {product.imageUrl.map((item, index) => (
              <ImageBackground
                key={index}
                style={{
                  height: 500,
                  width: 405,
                  // zIndex: 2,
                  backgroundColor: '#3E54AC1A',
                  marginLeft: -5,
                  marginTop: -5,
                }}
                source={{uri: item}}></ImageBackground>
            ))}
          </ScrollView>
        </View>
        <View style={[styles.detailsContainer, {marginTop: -50}]}>
          <Text style={styles.startext}>{product.name}</Text>
          <Text style={styles.detailsdescription}>{product.description}</Text>
          <View style={{marginTop: 10}}>
            <Text style={styles.headingtext}>Size</Text>
          </View>
          <View style={styles.productSizeBox}>
            <Text style={styles.detailsSize}>{product.size}</Text>
          </View>
          <View style={{marginTop: 10, marginBottom: 3}}>
            <Text style={styles.headingtext}>Rent</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <DatePicker
              fromDate={rentalStartDate}
              toDate={rentalEndDate}
              onFromDateChange={setRentalStartDate}
              onToDateChange={setRentalEndDate}
            />
            <View style={{marginTop: 10}}>
              <Text style={styles.headingtext}>Quantity</Text>
            </View>
            <View style={styles.quantityContainer}>
              {console.log(isMinusDisabled)}
              <TouchableOpacity
                style={[
                  styles.quantityButton,
                  isMinusDisabled && styles.disabledButton,
                ]}
                onPress={handleDecrement}
                disabled={quantity === 1 || isMinusDisabled}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={[
                  styles.quantityButton,
                  isPlusDisabled && styles.disabledButton,
                ]}
                onPress={handleIncrement}
                disabled={quantity === Quantity || isPlusDisabled}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.headingtext}>Price</Text>
          </View>
          <Text style={styles.detailsdescription}>₹{product.price}</Text>
          <View style={styles.touchablebtnContainer}>
            <TouchableOpacity
              style={styles.touchablebtn}
              onPress={handleSubmit}>
              <Text style={styles.touchableText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CustomModal
        showModal={showModal}
        onClose={closeModal}
        message="Item added successfully!"
      />
      <CustomModal
        showModal={showwModal}
        onClose={closeeModal}
        message="Quantity is unavailable"
      />
    </ScrollView>
  );
}