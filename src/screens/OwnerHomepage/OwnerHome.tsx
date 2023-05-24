/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import styles from './OwnerHomestyle';
import {Text} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import Useownerhome from './Useownerhome';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Colors from '../../constants/Colors';
import Donut from '../../components/atoms/DonutChart';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useAnalytics from '../AnalyticsPage/useAnalytics';
type Props = {
  route: {name: string};
  navigation: any;
};
export default function OwnerHome({navigation}: Props) {
  const {
    products,
    name,
    isLoading,
    totalEarnings,
    rentedItems,
    refreshing,
    onRefresh,
    handleAnalatyics,
    recentyAdded,
  } = Useownerhome();
  const {handleOrders, HandlePiechart} = useAnalytics();
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [rentedItemsPercentage, setRentedItemsPercentage] =
    useState(rentedItems);
  const [totalEarningsPercentage, setTotalEarningsPercentage] =
    useState(totalEarnings);
  useEffect(() => {
    setRentedItemsPercentage(rentedItems);
    setTotalEarningsPercentage(totalEarnings);
  }, [rentedItems, totalEarnings]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Trigger auto-refresh when navigating to this screen
      setRefreshTrigger(prev => !prev);
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <ScrollView
      style={styles.mainContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
          {/* <Text style={styles.cardsrentalprices}>{rentedItems}</Text>
          <Text style={styles.cardsTotalprices}>₹{totalEarnings}</Text> */}
          <View style={styles.cardsrentalprices}>
            <Donut
              percentage={rentedItemsPercentage}
              color={Colors.white}
              delay={1000}
              max={200}
              refreshTrigger={refreshTrigger}
            />
          </View>
          <View style={styles.cardsTotalprices}>
            <Donut
              percentage={totalEarningsPercentage}
              color={Colors.white}
              delay={1000}
              max={1000000}
              refreshTrigger={refreshTrigger}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleAnalatyics();
            handleOrders();
          }}
          style={styles.Viewmore}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 10,
              // marginTop: 3,
              marginLeft: 20,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            View More
          </Text>
          <Icon
            name="arrow-forward-ios"
            size={10}
            color="white"
            style={{marginTop: 5}}
          />
        </TouchableOpacity>
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
                  <Text style={styles.cardTextPrice}></Text>
                </View>
              </TouchableOpacity>
              <View>
                {/* Other code */}
                <View
                  style={{
                    marginTop: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 100,
                    width: '100%',
                    flexWrap: 'wrap',
                    backgroundColor: Colors.Inputtext,
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity style={styles.recentlyaddedcard}>
                    <View style={styles.cardContainer}>
                      <Text style={styles.recentlyaddedimage}></Text>
                    </View>
                    <View style={styles.cardTextContainer}>
                      <Text style={styles.cardText}></Text>
                      <Text style={styles.cardTextPrice}></Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </>
        </SkeletonPlaceholder>
      ) : (
        <>
          {recentyAdded && recentyAdded.length === 0 ? (
            <View style={{height: 200, width: 400}}>
              <Lottie
                source={require('../../../assets/ownerHome.json')}
                autoPlay
              />
            </View>
          ) : (
            <View>
              <FlatList
                data={recentyAdded}
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
                      <Text style={styles.cardText}>{item.name}</Text>
                      <Text style={styles.cardTextPrice}>₹ {item.price}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
          <View>
            <Text style={styles.headertxt}>Rental History</Text>
          </View>
          {products && products.length === 0 ? (
            <View style={{height: 200, width: 400}}>
              <Lottie
                source={require('../../../assets/ownerHome.json')}
                autoPlay
              />
            </View>
          ) : (
            <View
              style={{flex: 1, backgroundColor: Colors.main, flexWrap: 'wrap'}}>
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
                        <Text style={styles.cardText}>{item.name}</Text>
                        <Text style={styles.cardTextPrice}>₹ {item.price}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}
