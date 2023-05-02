import {
  CardField,
  StripeProvider,
  useStripe,
} from '@stripe/stripe-react-native';
import React, {useState} from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import createPaymentIntent from '../CheckoutScreen/useCheckout';
//import {publish_key} from '@env';
import {publish_key} from '../../constants/Api_keys';
import styles from './PaymentStyles';
const PaymentScreen = ({route}) => {
  const {confirmPayment} = useStripe();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const sessionId = route.params?.sessionId;
  const items = route.params?.items;
  const [cardInfo, setCardInfo] = useState(null);

  const handleCardDetailsChange = cardDetails => {
    if (cardDetails.complete) {
      setCardInfo(cardDetails);
    } else {
      setCardInfo(null);
    }
  };

  const handlePayment = async () => {
    if (!cardInfo) {
      Alert.alert('Please enter valid card details');
      return;
    }

    try {
      // Create a payment intent on your server
      const response = await createPaymentIntent({sessionId});

      if (response?.data?.clientSecret) {
        // Confirm the payment with Stripe
        const {clientSecret} = response.data;
        const paymentResult = await confirmPayment(clientSecret, {
          payment_method: {
            card: cardInfo,
          },
        });

        if (paymentResult.error) {
          Alert.alert(`Payment failed: ${paymentResult.error.message}`);
          console.log(paymentResult.error);
        } else if (paymentResult.paymentIntent.status === 'succeeded') {
          setPaymentStatus('succeeded');
        } else {
          setPaymentStatus('failed');
        }
      } else {
        Alert.alert('Payment failed: invalid payment intent');
      }
    } catch (error) {
      Alert.alert(`Payment failed: ${error.message}`);
    }
  };

  return (
    <SafeAreaView>
      <StripeProvider publishableKey="publish_key">
        <View>
          {items && (
            <View>
              <Text>Items:</Text>
              {items.map(item => (
                <View key={item.id}>
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                </View>
              ))}
            </View>
          )}
          <View>
            <CardField
              postalCodeEnabled={false}
              style={styles.cardField} // add this line and define the style object in PaymentStyles.js
              onCardChange={handleCardDetailsChange}
            />
          </View>

          <TouchableOpacity onPress={handlePayment}>
            <Text>Pay Now</Text>
          </TouchableOpacity>

          {paymentStatus === 'succeeded' && (
            <View>
              <Text>Payment succeeded!</Text>
            </View>
          )}

          {paymentStatus === 'failed' && (
            <View>
              <Text>Payment failed. Please try again.</Text>
            </View>
          )}
        </View>
      </StripeProvider>
    </SafeAreaView>
  );
};

export default PaymentScreen;
