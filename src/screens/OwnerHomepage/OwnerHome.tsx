/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import styles from './OwnerHomestyle';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Useownerhome from './Useownerhome';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
type Props = {
  route: {name: string};
  navigation: any;
};
export default function OwnerHome({navigation}: Props) {
  const {products, name, isLoading, totalEarnings, rentedItems} =
    Useownerhome();
  // if (isLoading) {
  //   return (
  //     <View
  //       style={{
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         height: '100%',
  //       }}>
  //       <Image
  //         source={require('../../../Assets/LoginImage.png')}
  //         style={{
  //           height: 200,
  //           width: 200,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}
  //       />
  //       <Text>The Items are Loading...</Text>
  //     </View>
  //   );
  // }
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <Text style={styles.headertxt}>Welcome {name}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.rentalitemscard}>
          <Text style={styles.renteditems1}>Rented Items</Text>
          <Text style={styles.renteditems2}>Total Earnings</Text>
        </View>
        <View style={styles.rentalitemscard}>
          <Text style={styles.cardsrentalprices}>{rentedItems}</Text>
          <Text style={styles.cardsTotalprices}>₹{totalEarnings}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.headertxt}>Recently Added</Text>
      </View>

      {isLoading ? (
        <SkeletonPlaceholder>
          <>
            <ScrollView style={styles.mainContainer}>
              <View></View>
              <TouchableOpacity style={styles.recentlyaddedcard}>
                <View style={styles.cardContainer}>
                  <Text style={styles.recentlyaddedimage}></Text>
                </View>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardText}></Text>
                  <Text style={styles.cardText}></Text>
                </View>
              </TouchableOpacity>
              <View
                style={{flex: 1, backgroundColor: '#ECF2FF', flexWrap: 'wrap'}}>
                {/* Other code */}
                <View
                  style={{
                    marginTop: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 100,
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity style={styles.recentlyaddedcard}>
                    <View style={styles.cardContainer}>
                      <Text style={styles.recentlyaddedimage}></Text>
                    </View>
                    <View style={styles.cardTextContainer}>
                      <Text style={styles.cardText}></Text>
                      <Text style={styles.cardText}></Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </>
        </SkeletonPlaceholder>
      ) : (
        <>
          <View>
            <FlatList
              data={products}
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              renderItem={({item}) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.recentlyaddedcard}
                  onPress={() =>
                    navigation.navigate('OproductDetails', {product: item})
                  }>
                  <View style={styles.cardContainer}>
                    <Image
                      source={{uri: item.imageUrl[0]}}
                      style={styles.recentlyaddedimage}
                    />
                  </View>
                  <View style={styles.cardTextContainer}>
                    <Text style={styles.cardText}>{item.description}</Text>
                    <Text style={styles.cardText}>₹ {item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View>
            <Text style={styles.headertxt}>Rental History</Text>
          </View>
          <View style={{flex: 1, backgroundColor: '#ECF2FF', flexWrap: 'wrap'}}>
            {/* Other code */}
            <View
              style={{
                marginTop: 20,
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 100,
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {products &&
                products.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.recentlyaddedcard}
                    onPress={() =>
                      navigation.navigate('OproductDetails', {product: item})
                    }>
                    <View style={styles.cardContainer}>
                      <Image
                        source={{uri: item.imageUrl[0]}}
                        style={styles.recentlyaddedimage}
                      />
                    </View>
                    <View style={styles.cardTextContainer}>
                      <Text style={styles.cardText}>{item.description}</Text>
                      <Text style={styles.cardText}>₹ {item.price}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}
