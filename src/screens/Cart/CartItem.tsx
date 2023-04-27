import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './CartItemStyles';

const CartItem = ({
  item,
  onRemoveItem,
  onAddWishlist,
  onRemoveFromWishlist,
  isWishlist,
  onAddToCart,
}) => {
  return (
   
   
   
   
   <View style={style.container}>
      <TouchableOpacity>
        <View style={style.imageContainer}>
          <Image source={{uri: item.image}} style={style.image} />
        </View>
      </TouchableOpacity>

      <View style={style.cardTextContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={style.name}>{item.name}</Text>
          <TouchableOpacity style={style.addButton} onPress={() => {}}>
            <Text
              style={{
                color: '#3E54AC',
                fontWeight: 'bold',
                fontSize: 12,
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.textContainer}>
          <Text style={style.name}>{'₹' + item.price}</Text>

          {isWishlist ? (
            <TouchableOpacity
              style={style.rentButton}
              onPress={() => {
                onAddToCart(item);
              }}>
              <Text style={style.rentText}>Rent</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={style.rentButton}
              onPress={() => {
                onRemoveItem();
              }}>
              <Text style={style.rentText}>Remove Item</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {isWishlist ? (
        <TouchableOpacity
          style={style.wishlistBtn}
          onPress={() => {
            onRemoveFromWishlist(item);
          }}>
          <Image
            source={require('../../../Assets/fillheart.png')}
            style={{width: 24, height: 24, tintColor: 'red'}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={style.wishlistBtn}
          onPress={() => {
            onAddWishlist(item);
          }}>
          <Image
            // source={require('../../../assets/images/heart.jpg')}
            source={require('../../../Assets/heart.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CartItem;
