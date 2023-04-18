import React from 'react';
import {StatusBar, Text, View, ImageBackground} from 'react-native';
import styles from '../OwnerProductdetailsPage/OproductdetailsStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  route: {params: {product: any}};
  navigation: any;
};

export default function DetailScreen({route, navigation}: Props) {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <ImageBackground style={{flex: 0.7}} source={{uri: product.image}}>
        <View style={styles.dheader}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Icon name="more-vert" size={28} color="black" />
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={styles.headingtext}>Name</Text>
        </View>
        <Text style={styles.startext}>{product.name}</Text>
        <View style={{marginTop: 10}}>
          <Text style={styles.headingtext}>Price</Text>
        </View>
        <Text style={styles.detailsdescription}>${product.price}</Text>
        <View style={{marginTop: 10}}>
          <Text style={styles.headingtext}>Description</Text>
        </View>
        <Text style={styles.detailsdescription}>{product.description}</Text>
      </View>
      </View>
  );
}
