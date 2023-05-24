/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import style from './searchResultStyle';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import Lottie from 'lottie-react-native';
import useCart from '../Cart/useCart';
import Styles from '../../constants/themeColors';
import useSearchresults from './useSearchresults';
import Sizeselection from '../../components/atoms/Sizeselect';
import FilterSelectSize from '../../components/atoms/FilterSizes/FilterSizeSelect';
import PriceRangeDropdown from '../../components/atoms/PriceRange/PriceDropdown';
const SearchResultsScreen = ({route}) => {
  const navigation = useNavigation();
  const {searchResults} = route.params;
  const goBackButton = () => {
    navigation.goBack();
  };
  const {colorScheme} = useCart();
  const {
    FilterData,
    minimumPrice,
    setMinimumPrice,
    maximumPrice,
    setMaximumPrice,
    selectedSize,
    setSelectedSize,
    sizes,
    modalVisible,
    setModalVisible,
    handleFilterButtonPress,
  } = useSearchresults();
  return (
    <View
      style={colorScheme === 'dark' ? Styles.blacktheme : Styles.whiteTheme}>
      <View style={style.addAddressHeader}>
        <TouchableOpacity style={style.backBtn} onPress={goBackButton}>
          <MaterialIcons color={Colors.black} size={20} name="arrow-back-ios" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={[
              style.addAddressText,
              colorScheme === 'dark' ? Styles.whitetext : Styles.blackText,
            ]}>
            Search results
          </Text>
          <MaterialIcons
            onPress={handleFilterButtonPress}
            style={style.filter}
            size={24}
            name="filter-list-alt"
          />
        </View>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
        style={style.mainContainer}
        onRequestClose={() => setModalVisible(false)}>
        {/* Add your modal content here */}
        <View style={style.mainContainer}>
          <View style={style.modalContainer}>
            <View style={style.sizeDropdown}>
              <Text style={style.FilterText}>Select size</Text>
              <FilterSelectSize
                selectedSize={selectedSize}
                sizes={sizes}
                onSelectSize={setSelectedSize}
              />
            </View>
            <PriceRangeDropdown
              minPrice={minimumPrice}
              maxPrice={maximumPrice}
              onSelectPriceRange={(min, max) => {
                setMinimumPrice(min);
                setMaximumPrice(max);
              }}
            />
            <TouchableOpacity
              style={style.touchableContainer}
              onPress={FilterData}>
              <Text style={style.FilterText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
                  <View
                    style={[
                      style.container,
                      colorScheme === 'dark' ? Styles.cardColor : Styles.main,
                    ]}>
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
                        <Text
                          style={[
                            style.name,
                            colorScheme === 'dark'
                              ? Styles.whitetext
                              : Styles.blackText,
                          ]}>
                          {item.name}
                        </Text>
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
        <View
          style={{backgroundColor: Colors.main, width: '100%', height: '100%'}}>
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
