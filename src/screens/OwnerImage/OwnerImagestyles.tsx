import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const OwnerImagestyles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: 400,
    backgroundColor: Colors.main,
  },
  TitletextContainer: {
    flexDirection: 'row',
    margin: 15,
    padding: 10,
  },
  Icon: {
    color: Colors.iconscolor,
    fontSize: 20,
    marginTop: 20,
  },
  TitleText: {
    fontSize: 18,
    color: Colors.iconscolor,
    fontWeight: '700',
    marginTop: 20,
  },
  ImageContainer: {
    height: '30%',
    // width: '100%',
    marginTop: 5,
    alignItems: 'center',
    // backgroundColor:'#000',
    // marginLeft: 30,
    // justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
    justifyContent: 'center',
  },
  Addimage: {
    height: 109,
    width: 252,
    backgroundColor: Colors.white,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  ImageBox: {
    marginLeft: 55,
  },
  AddIcon: {
    alignItems: 'center',
    color: Colors.iconscolor,
    fontSize: 20,
    marginTop: 40,
    justifyContent: 'center',
  },
  imagesText: {
    fontSize: 18,
    color: Colors.iconscolor,
    fontWeight: '700',
  },
  Price: {
    width: 252,
    height: 48,
    backgroundColor: Colors.white,
    elevation: 4,
    marginTop: 10,
    borderRadius: 10,
  },
  Pricetext: {
    fontSize: 18,
    color: Colors.iconscolor,
    fontWeight: '700',
    marginTop: 10,
  },
});
export default OwnerImagestyles;
