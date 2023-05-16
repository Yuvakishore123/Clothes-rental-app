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
    <View style={{backgroundColor: Colors.main}}>
      <View style={style.addAddressHeader}>
        <TouchableOpacity style={style.backBtn} onPress={goBackButton}>
          <MaterialIcons color={Colors.white} size={26} name="arrow-back-ios" />
        </TouchableOpacity>
        <Text style={style.addAddressText}>Search results</Text>
      </View>
      {searchResults && searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  // backgroundColor:'white',
                }}>
                <View
                  style={{
                    // alignItems: 'center',
                    width: '100%',
                  }}>
                  <View style={style.container}>
                    <TouchableOpacity
                      key={item.id}
                      style={{width: '100%'}}
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
                      <View style={{marginTop: 20}}>
                        <Text style={style.name}>{item.name}</Text>
                      </View>
                      <View style={style.textContainer}>
                        <Text style={style.price}>{'₹' + item.price}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          numColumns={2}
        />
      ) : (
        <View style={{backgroundColor: 'black', width: '100%', height: '100%'}}>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: Colors.main,
            }}>
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
  );
};
export default SearchResultsScreen;
