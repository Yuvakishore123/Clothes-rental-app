import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from '../../components/atoms/DatePicker';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './UProductDetailsStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
type Props = {
  route: {params: {product: any}};
  navigation: any;
};
export default function UDetailScreen({route, navigation}: Props) {
  const {product} = route.params;
  const [rentalStartDate, setRentalStartDate] = useState(new Date());
  const [rentalEndDate, setRentalEndDate] = useState(new Date());
  const [quantity, setQuantity] = useState(1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleSubmit = async () => {
    const token = await AsyncStorage.getItem('token');
    const data = {
      id: 0,
      productId: product.id,
      quantity: quantity,
      rentalEndDate: rentalEndDate.toISOString(),
      rentalStartDate: rentalStartDate.toISOString(),
    };
    fetch('https://fa68-103-146-217-155.ngrok-free.app/api/v1/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <ImageBackground
          style={{height: 500, backgroundColor: 'green'}}
          source={{uri: product.image}}>
          <View style={styles.dheader}>
            <Icon
              name="arrow-back-ios"
              size={28}
              color="black"
              onPress={() => navigation.goBack()}
            />
          </View>
        </ImageBackground>
        <View style={[styles.detailsContainer, {marginTop: -50}]}>
          <Text style={styles.startext}>{product.name}</Text>
          <Text style={styles.detailsdescription}>{product.description}</Text>
          <View style={{marginTop: 10}}>
            <Text style={styles.headingtext}>Size</Text>
          </View>
          <View style={styles.productSizeBox}>
            <Text style={styles.detailsdescription}>{product.size}</Text>
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
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={decrementQuantity}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={incrementQuantity}>
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
    </ScrollView>
  );
}
