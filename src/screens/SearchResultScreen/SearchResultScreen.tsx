/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import style from './searchResultStyle';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import Lottie from 'lottie-react-native';
const SearchResultsScreen = ({route}) => {
  const navigation = useNavigation();
  const {searchResults} = route.params;
  const goBackButton = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.main}}>
      <View style={style.addAddressHeader}>
        <TouchableOpacity style={style.backBtn} onPress={goBackButton}>
          <MaterialIcons
            color={Colors.iconscolor}
            size={26}
            name="arrow-back-ios"
          />
        </TouchableOpacity>
        <Text style={style.addAddressText}>Search results</Text>
      </View>
      <View style={{flex: 1}}>
        {searchResults && searchResults.length > 0 ? (
          <FlatList
            data={searchResults}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View style={style.container}>
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      navigation.navigate('UProductDetails', {
                        product: item,
                      })
                    }>
                    <View style={style.imageContainer}>
                      <Image
                        source={{uri: item.imageUrl[0]}}
                        style={style.image}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={style.cardTextContainer}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={style.name}>{item.name}</Text>
                      {/* <TouchableOpacity
                        style={style.addButton}
                        onPress={() => {}}>
                        <Text
                          style={{
                            color: '#3E54AC',
                            fontWeight: 'bold',
                            fontSize: 12,
                          }}>
                          +
                        </Text>
                      </TouchableOpacity> */}
                    </View>
                    <View style={style.textContainer}>
                      <Text style={style.price}>{'₹' + item.price}</Text>
                      {/* <TouchableOpacity
                        style={style.rentButton}
                        onPress={() => {
                          Alert.alert('Need to set Rental Dates');
                        }}>
                        <Text style={style.rentText}>Rent</Text>
                      </TouchableOpacity> */}
                    </View>
                  </View>
                </View>
              );
            }}
            numColumns={2}
          />
        ) : (
          <View style={{flex: 1, backgroundColor: Colors.main}}>
            <View style={{justifyContent: 'center', alignSelf: 'center'}}>
              <Text style={style.titleText}>Umm...No results found</Text>
            </View>
            <View style={style.titleTextContainer}>
              <Lottie
                style={style.imageS}
                source={require('../../../assets/search.json')}
                autoPlay
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
export default SearchResultsScreen;
