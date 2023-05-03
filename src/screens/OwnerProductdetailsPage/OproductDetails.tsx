/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, Text, View, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
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
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row'}}>
          {product.imageURL.map((item, index) => (
            <TouchableOpacity
              key={index.toString()}
              // style={{marginHorizontal: 5}}
              onPress={() => navigation.goBack()}>
              <ImageBackground
                style={{
                  height: 500,
                  width: 405,
                  backgroundColor: 'green',
                  marginLeft: -5,
                }}
                source={{uri: item}}></ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={[styles.detailsContainer, {marginTop: -50}]}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={styles.headingtext}>Name</Text>
        </View>
        <Text style={styles.startext}>{product.name}</Text>
        <View style={{marginTop: 10}}>
          <Text style={styles.headingtext}>Price</Text>
        </View>
        <Text style={styles.detailsdescription}>₹ {product.price}</Text>
        <View style={{marginTop: 10}}>
          <Text style={styles.headingtext}>Description</Text>
        </View>
        <Text style={styles.detailsdescription}>{product.description}</Text>
      </View>
    </View>
  );
}
