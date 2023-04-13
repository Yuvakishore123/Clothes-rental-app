import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import styles from '../OwnerHomepage/OwnerHomestyle';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Usemyrental from './Usemyrental';
type Props = {
  navigation: any;
};

export default function OwnerHome({navigation}: Props) {
  const {products} = Usemyrental();

  if (!products) {
    return <Text>Loading products...</Text>;
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Icon
            style={{marginLeft: 20, marginTop: 41}}
            name="arrow-back-ios"
            size={23}
            color="#3E54AC"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headertxt}>My Rentals</Text>
        </View>
        <View>
          <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              // Check if it's an even index to render 2 products side by side
              if (index % 2 === 0) {
                return (
                  <View style={styles.row}>
                    <TouchableOpacity
                      key={item.id}
                      style={styles.recentlyaddedcard}
                      onPress={() =>
                        navigation.navigate('OproductDetails', {product: item})
                      }>
                      <Image
                        source={{uri: item.imageURL}}
                        style={styles.recentlyaddedimage}
                      />
                      <View style={styles.cardText}>
                        <Text style={styles.cardText}>{item.description}</Text>
                        <Text style={styles.cardText}>{item.price}</Text>
                      </View>
                    </TouchableOpacity>
                    {products[index + 1] && (
                      <TouchableOpacity
                        key={products[index + 1].id}
                        style={styles.recentlyaddedcard}
                        onPress={() =>
                          navigation.navigate('OproductDetails', {
                            product: products[index + 1],
                          })
                        }>
                        <Image
                          source={{uri: products[index + 1].imageURL}}
                          style={styles.recentlyaddedimage}
                        />
                        <View style={styles.cardText}>
                          <Text style={styles.cardText}>
                            {products[index + 1].description}
                          </Text>
                          <Text style={styles.cardText}>
                            {products[index + 1].price}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              }
              return null;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
