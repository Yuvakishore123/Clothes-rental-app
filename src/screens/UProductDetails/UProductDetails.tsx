import React from 'react';
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
// import styles from '../OwnerProductdetailsPage/OproductdetailsStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from '../../components/atoms/DatePicker';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './UProductDetailsStyle';

type Props = {
  route: {params: {product: any}};
  navigation: any;
};

export default function UDetailScreen({route, navigation}: Props) {
  const {product} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />

        <ImageBackground
          style={{height: 500, backgroundColor: 'green'}}
          source={{uri: product.imageURL}}>
          <View style={styles.dheader}>
            <Icon
              name="arrow-back-ios"
              size={28}
              color="black"
              onPress={() => navigation.goBack()}
            />
            {/* <Icon name="more-vert" size={28} color="black" /> */}
          </View>
        </ImageBackground>
        <View style={[styles.detailsContainer, {marginTop: -50}]}>
          {/* <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={styles.headingtext}>Name</Text>
        </View> */}
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
            <DatePicker />
          </View>

          <View style={{marginTop: 10}}>
            <Text style={styles.headingtext}>Price</Text>
          </View>
          <Text style={styles.detailsdescription}>₹{product.price}</Text>
          {/* <DatePicker /> */}

          <View style={styles.touchablebtnContainer}>
            <TouchableOpacity style={styles.touchablebtn}>
              <Text style={styles.touchableText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
