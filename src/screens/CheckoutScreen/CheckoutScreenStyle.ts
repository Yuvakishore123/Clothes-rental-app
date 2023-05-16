// import {StyleSheet} from 'react-native';
// import Colors from '../../constants/Colors';
// const styles = StyleSheet.create({
//   mainContainer: {
//     width: 340,
//     padding: 7,
//     borderRadius: 10,
//   },
//   cardContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#3E54AC0D',
//     borderRadius: 10,
//     padding: 10,
//     marginLeft: 10,
//     marginBottom: 10,
//     height: 200,
//     width: 310,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   containerCheckbox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 18,
//     marginLeft: 30,
//   },
//   textCheckbox: {
//     color: '#3E54AC',
//     fontSize: 14,
//     fontWeight: '900',
//     marginRight: 10,
//     textDecorationLine: 'underline',
//   },
//   backBtn: {
//     // marginTop: 10,
//     marginLeft: -25,
//     // padding: 10,
//     // flexDirection: 'row',
//     // backgroundColor: '#3E54AC1A',
//     color: 'black',
//   },
//   addressText: {
//     color: Colors.iconscolor,
//     fontWeight: '500',
//     fontSize: 14,
//     marginLeft: -10,
//   },
//   checkboxContainer: {
//     borderColor: 'black',
//     marginLeft: 0,
//     margin: 0,
//     padding: 0,
//     backgroundColor: 'transparent',
//     borderWidth: 0,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     marginRight: 10,
//     resizeMode: 'cover',
//     borderRadius: 5,
//   },
//   cardTextContainer: {
//     justifyContent: 'space-between',
//   },
//   name: {
//     fontSize: 9,
//     fontWeight: 'bold',
//     color: '#3E54AC',
//     fontFamily: 'poppins',
//     marginTop: 5,
//     marginLeft: 2,
//   },
//   productname: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#3E54AC',
//     fontFamily: 'poppins',
//   },
//   textContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   addButton: {
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 5,
//     borderWidth: 1,
//     borderColor: '#3E54AC',
//   },
//   editButton: {
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 5,
//     borderWidth: 1,
//     borderColor: '#3E54AC',
//   },
//   addresscard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     paddingLeft: 20,
//     paddingRight: 20,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   addresschangeText: {
//     Color: '#0000FF',
//     fontSize: 15,
//     fontWeight: '900',
//     textDecorationLine: 'underline',
//   },
//   rentButton: {
//     backgroundColor: '#3E54AC',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#3E54AC',
//     backgroundColor: '#3E54AC',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     width: 50,
//     height: 25,
//     justifyContent: 'space-between',
//   },
//   DateContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#3E54AC',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginLeft: 2,
//     width: 80,
//     height: 20,
//     marginTop: 10,
//     marginBottom: 10,
//     justifyContent: 'space-between',
//   },
//   quantityButton: {
//     borderRadius: 5,
//   },
//   quantityText: {
//     fontSize: 16,
//     color: '#3E54AC',
//     fontWeight: 'bold',
//   },
//   sizeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#3E54AC',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   sizeButton: {
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 5,
//     borderWidth: 1,
//     borderColor: '#3E54AC',
//   },
//   sizeText: {
//     fontSize: 16,
//     color: '#3E54AC',
//     fontWeight: 'bold',
//     marginHorizontal: 5,
//   },
//   errorContainer: {
//     backgroundColor: '#FDD',
//     padding: 10,
//     borderRadius: 5,
//   },
//   errorText: {
//     color: '#F00',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   container: {
//     // flex: 1,
//     backgroundColor: '#ECF2FF',
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   TextTotal: {
//     fontWeight: 'semibold',
//     height: 29,
//     width: 130,
//     top: 5,
//     color: '#3E54AC',
//   },
//   TextGrand: {
//     fontWeight: 'semibold',
//     height: 29,
//     width: 130,
//     top: -20,
//     left: 20,
//     color: '#3E54AC',
//     fontSize: 18,
//   },
//   RemoveButton: {
//     height: 20,
//     width: 40,
//     backgroundColor: '#3E54AC',
//     // margin: 15,
//     // marginTop: 5,
//     // marginLeft: 25,
//     borderRadius: 3,
//     color: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   UpdateButton: {
//     height: 20,
//     width: 40,
//     backgroundColor: 'white',
//     marginLeft: 30,
//     borderRadius: 3,
//     color: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   PaymentButton: {
//     height: 60,
//     width: 320,
//     backgroundColor: '#3E54AC',
//     marginTop: 5,
//     borderRadius: 8,
//     color: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   PaymentButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '700',
//     justifyContent: 'center',
//   },
//   RemoveButtonText: {
//     color: 'white',
//     fontSize: 9,
//     fontWeight: '500',
//     justifyContent: 'center',
//   },
//   UpdateButtonText: {
//     color: Colors.iconscolor,
//     fontSize: 9,
//     fontWeight: '900',
//     justifyContent: 'center',
//   },
//   titleContainer: {
//     marginBottom: -390,
//     width: 355,
//     height: 452,
//     top: 30,
//     backgroundColor: '#3E54AC1A',
//     borderRadius: 5,
//   },
//   titleText: {
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#3E54AC',
//     width: 34,
//     height: 29,
//     left: 25,
//     top: -40,
//   },
//   productSizeBox: {
//     marginTop: 5,
//     borderWidth: 1,
//     borderRadius: 5,
//     marginLeft: 3,
//     borderColor: '#3E54AC',
//     backgroundColor: Colors.iconscolor,
//     width: 18, // set a width that works for your layout
//     height: 18, // set a height that works for your layout
//     justifyContent: 'center', // vertically center the text
//     alignItems: 'center', // horizontally center the text
//   },
//   detailsdescription: {
//     fontSize: 8,
//     color: Colors.white,
//     fontWeight: 'bold',
//   },
//   cardContaineramount: {
//     borderWidth: 1,
//     borderColor: '#3E54AC1A',
//     backgroundColor: '#3E54AC1A',
//     borderRadius: 5,
//     padding: 10,
//     height: 48,
//     width: 355,
//     left: 20,
//     top: -10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 120,
//     height: 120,
//     marginRight: 10,
//     backgroundColor: 'green',
//     borderRadius: 5,
//   },
//   priceText: {
//     fontSize: 10,
//     fontWeight: 'bold',
//     color: '#3E54AC',
//     marginRight: 35,
//   },
//   priceTotalText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     left: 130,
//     color: '#3E54AC',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     left: -47,
//   },
//   input: {marginLeft: 15, color: Colors.iconscolor, fontWeight: '500'},
//   stateName: {
//     marginLeft: 15,
//     marginBottom: 10,
//     color: Colors.iconscolor,
//     fontWeight: '500',
//   },
//   city: {
//     marginLeft: 15,
//     marginTop: 10,
//     color: Colors.iconscolor,
//     fontWeight: '500',
//   },
//   addAddressHeader: {flexDirection: 'row'},
//   card: {
//     backgroundColor: '#3E54AC0D',
//     width: '90%',
//     borderColor: '#8E8E8E',
//     alignSelf: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 30,
//     borderRadius: 10,
//   },
//   quantityTxt: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     fontSize: 10,
//     marginLeft: 10,
//   },
//   DateTxt: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: Colors.iconscolor,
//     fontSize: 8,
//     fontWeight: '800',
//     marginTop: -2,
//   },
//   button: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 60,
//     paddingVertical: 5,
//     borderRadius: 5,
//   },
//   buttonSize: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 6,
//     paddingVertical: 5,
//     marginLeft: 5,
//     borderWidth: 1,
//     borderRadius: 5,
//     top: 29,
//     left: -310,
//     borderColor: '#3E54AC',
//     height: 19,
//     width: 19,
//   },
//   buttonRentTo: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//     left: -75,
//     borderColor: '#3E54AC',
//     borderWidth: 1,
//     width: 57,
//     height: 18,
//     marginLeft: 25,
//     top: -12,
//   },
//   buttonRentFrom: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//     left: -15,
//     width: 57,
//     borderColor: '#3E54AC',
//     borderWidth: 1,
//     height: 18,
//     marginRight: 25,
//     top: -12,
//     left: -95,
//   },
//   buttonTextRentto: {
//     fontSize: 5,
//     fontWeight: 'bold',
//     alignContent: 'center',
//     left: 8,
//   },
//   buttonSizeText: {
//     fontSize: 6,
//     fontWeight: 'bold',
//     top: -1,
//   },
//   buttonTextIncrement: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     top: -3,
//     left: 3,
//   },
//   buttonTextDecrement: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     top: -3,
//     left: 3,
//   },
//   quantityText: {
//     fontSize: 14,
//     marginHorizontal: 10,
//     fontWeight: 'bold',
//     top: 55,
//     left: -190,
//   },
//   activeButtonText: {
//     color: '#fff',
//     backgroundColor: '#3E54AC',
//     height: 17,
//     width: 17,
//     borderRadius: 5,
//     top: -5,
//     left: -6,
//   },
// });
// export default styles;




import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {colors} from 'react-native-elements';
const styles = StyleSheet.create({
  Fullcontainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.main,
  },
  backButtonContainer: {
    height: 40,
    width: 40,
    backgroundColor: Colors.Textinput,
    borderRadius: 100,
    marginTop: 30,
    marginLeft: 20,
  },
  mainContainer: {
    width: '100%',
    // backgroundColor: Colors.white,
    borderRadius: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    // padding: 10,
    marginLeft: 23,
    // marginBottom: 10,
    marginTop: 15,
    height: 140,
    width: '90%',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  containerCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 30,
  },
  textCheckbox: {
    color: Colors.black,
    fontSize: 14,
    // fontWeight: '900',
    marginRight: 10,
    marginBottom: 20,
    fontFamily: 'Poppins-Medium',
    textDecorationLine: 'underline',
  },
  backBtn: {
    marginTop: 10,
    marginLeft: 5,
    // padding: 10,
    // flexDirection: 'row',
    // backgroundColor: '#3E54AC1A',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  addressText: {
    color: Colors.white,
    // fontWeight: '500',
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
    // marginLeft: 10,
  },
  addressButton: {
    height: 35,
    // marginLeft: 50,
    width: 100,
    borderRadius: 4,
    // marginRight: 40,
    backgroundColor: Colors.buttonColor,
  },
  imageContainer: {
    width: '30%',
    height: '90%',
    marginTop: 5,
    marginLeft: 5,
    // backgroundColor: 'red',
  },
  checkboxContainer: {
    borderColor: 'black',
    marginLeft: 0,
    margin: 0,
    padding: 0,
    backgroundColor: 'white ',
    borderWidth: 0,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    // marginRight: 10,
    // resizeMode: 'cover',
    borderRadius: 5,
  },
  cardTextContainer: {
    // justifyContent: 'space-between',
    width: '60%',
    // backgroundColor: Colors.white,
  },
  productContainer: {
    flexDirection: 'row',
    width: '100%',
    // height: 40,
    // backgroundColor: Colors.white,
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 12,
    // fontWeight: 'bold',
    color: Colors.black,
    fontFamily: 'Poppins-Regular',
    // marginTop: 5,
    marginRight: 25,
  },
  productname: {
    fontSize: 12,
    // fontWeight: 'bold',
    color: Colors.black,
    fontFamily: 'Poppins-Regular',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#3E54AC',
  },
  editButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#3E54AC',
  },
  addresscard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    // paddingLeft: 20,
    // paddingRight: 20,
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  addresschangeText: {
    Color: Colors.white,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.white,
    // justifyContent: 'center',
    marginTop: 10,
    marginLeft: 5,
    alignItems: 'center',
    // fontWeight: '900',
    // textDecorationLine: 'underline',
  },
  rentButton: {
    backgroundColor: '#3E54AC',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#3E54AC',
    // backgroundColor: '#3E54AC',
    // borderRadius: 5,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // width: 50,
    // height: 25,
    justifyContent: 'space-between',
  },
  SizeandDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  DateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#3E54AC',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 2,
    width: 68,
    height: 20,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  quantityButton: {
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 12,
    color: Colors.black,
    // fontWeight: '',
    fontFamily: 'Poppins-Regular',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: 10,
    // backgroundColor: Colors.white,
    marginLeft: 8,
    // alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#3E54AC',
    // borderRadius: 5,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
  },
  sizeButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#3E54AC',
  },
  sizeText: {
    fontSize: 12,
    color: Colors.black,
    fontFamily: 'Poppins-Regular',
    // fontWeight: 'bold',
    // marginHorizontal: 5,
  },
  errorContainer: {
    backgroundColor: '#FDD',
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: '#F00',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    // flex: 1,
    backgroundColor: '#ECF2FF',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  TextTotal: {
    fontWeight: 'semibold',
    height: 29,
    width: 130,
    top: 5,
    color: '#3E54AC',
  },
  TextGrand: {
    // fontWeight: 'semibold',
    height: 29,
    width: '100%',
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 20,
  },
  RemoveButton: {
    height: 20,
    width: 40,
    backgroundColor: '#3E54AC',
    // margin: 15,
    // marginTop: 5,
    // marginLeft: 25,
    borderRadius: 3,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UpdateButton: {
    height: 20,
    width: 40,
    backgroundColor: 'white',
    marginLeft: 30,
    borderRadius: 3,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PaymentButton: {
    flexDirection: 'row',
    height: 60,
    width: '90%',
    backgroundColor: Colors.buttonColor,
    marginTop: 5,
    borderRadius: 100,
    marginLeft: 20,
    marginBottom: 10,
    // color: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PaymentButtonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 20,
    fontFamily: 'Poppins-Medium',
    // fontWeight: '700',
    // justifyContent: 'center',
  },
  RemoveButtonText: {
    color: 'white',
    fontSize: 9,
    fontWeight: '500',
    justifyContent: 'center',
  },
  UpdateButtonText: {
    color: Colors.iconscolor,
    fontSize: 9,
    fontWeight: '900',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '100%',
    marginLeft: 20,
    marginTop: 18,
    // marginBottom: -390,
    // width: 355,
    // height: 452,
    // top: 30,
    // backgroundColor: Colors.white,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 24,
    // fontWeight: '500',
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
  },
  productSizeBox: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 3,
    borderColor: '#3E54AC',
    backgroundColor: Colors.iconscolor,
    width: 18, // set a width that works for your layout
    height: 18, // set a height that works for your layout
    justifyContent: 'center', // vertically center the text
    alignItems: 'center', // horizontally center the text
  },
  detailsdescription: {
    fontSize: 8,
    color: Colors.white,
    fontWeight: 'bold',
  },
  cardContaineramount: {
    borderWidth: 1,
    borderColor: '#3E54AC1A',
    backgroundColor: '#3E54AC1A',
    borderRadius: 5,
    padding: 10,
    height: 48,
    width: 355,
    left: 20,
    top: -10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // image: {
  //   width: 120,
  //   height: 120,
  //   marginRight: 10,
  //   backgroundColor: 'green',
  //   borderRadius: 5,
  // },
  priceText: {
    fontSize: 12,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    color: Colors.buttonColor,
    marginLeft: 40,
    // marginRight: 35,
  },
  priceTotalText: {
    fontSize: 14,
    // fontWeight: 'bold',
    // left: 130,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 10,
    color: Colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: -47,
  },
  input: {marginLeft: 15, color: Colors.iconscolor, fontWeight: '500'},
  stateName: {
    marginLeft: 15,
    marginBottom: 10,
    color: Colors.iconscolor,
    fontWeight: '500',
  },
  addressContainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
  },
  city: {
    marginLeft: 15,
    // marginTop: 10,
    color: Colors.black,
    // fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  addAddressHeader: {flexDirection: 'row'},
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '90%',
    borderColor: '#8E8E8E',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
  quantityTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 10,
    marginLeft: 10,
  },
  DateTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.black,
    width: '100%',
    height: 12,
    fontSize: 8,
    fontFamily: 'Poppins-Regular',
    // fontWeight: '800',
    // marginTop: -2,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 60,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonSize: {
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderRadius: 5,
    top: 29,
    left: -310,
    borderColor: '#3E54AC',
    height: 19,
    width: 19,
  },
  buttonRentTo: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    left: -75,
    borderColor: '#3E54AC',
    borderWidth: 1,
    width: 57,
    height: 18,
    marginLeft: 25,
    top: -12,
  },
  buttonRentFrom: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    left: -15,
    width: 57,
    borderColor: '#3E54AC',
    borderWidth: 1,
    height: 18,
    marginRight: 25,
    top: -12,
    left: -95,
  },
  buttonTextRentto: {
    fontSize: 5,
    fontWeight: 'bold',
    alignContent: 'center',
    left: 8,
  },
  buttonSizeText: {
    fontSize: 6,
    fontWeight: 'bold',
    top: -1,
  },
  buttonTextIncrement: {
    fontSize: 12,
    fontWeight: 'bold',
    top: -3,
    left: 3,
  },
  buttonTextDecrement: {
    fontSize: 12,
    fontWeight: 'bold',
    top: -3,
    left: 3,
  },
  // quantityText: {
  //   fontSize: 14,
  //   marginHorizontal: 10,
  //   fontWeight: 'bold',
  //   top: 55,
  //   left: -190,
  // },
  activeButtonText: {
    color: '#fff',
    backgroundColor: '#3E54AC',
    height: 17,
    width: 17,
    borderRadius: 5,
    top: -5,
    left: -6,
  },
  PlaceOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: 320,
    backgroundColor: '#3E54AC1A',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
  },
});
export default styles;