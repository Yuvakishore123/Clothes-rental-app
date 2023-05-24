// import {StyleSheet} from 'react-native';
// import Colors from '../../constants/Colors';
// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: '#3E54AC1A',
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
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     width: 80,
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
//     // marginTop: 10,
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
//     // marginTop: 10,
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
//     // margin: 15,
//     // marginTop: 5,
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
//     // margin: 15,
//     marginTop: 5,
//     // marginLeft: 25,
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
//   // cardContainer: {
//   //   borderWidth: 1,
//   //   borderColor: '#3E54AC1A',
//   //   backgroundColor: '#3E54AC1AA',
//   //   borderRadius: 5,
//   //   padding: 10,
//   //   height: 160,
//   //   width: 330,
//   //   left: 30,
//   //   top: 0,
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   // },
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
//     // marginBottom: 10,
//     // top: 55,
//     // left: 12,
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
//   quantityTxt: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: Colors.iconscolor,
//     fontSize: 10,
//     // marginLeft: 23,
//   },
//   DateTxt: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: Colors.iconscolor,
//     fontSize: 7,
//     fontWeight: '800',
//     // marginLeft: 23,
//   },
//   button: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 60,
//     paddingVertical: 5,
//     borderRadius: 5,
//     // height: 10,
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
//   buttonQuantity: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 2,
//     paddingVertical: 2,
//     height: 18,
//     width: 18,
//     borderRadius: 5,
//     borderColor: '#3E54AC',
//     borderWidth: 1,
//     top: 55,
//     left: -190,
//   },
//   buttonText: {
//     fontSize: 9,
//     fontWeight: 'bold',
//     marginLeft: 5,
//     marginRight: 5,
//   },
//   TextSize: {
//     fontSize: 8,
//     fontWeight: 'bold',
//     color: '#3E54AC',
//     top: 10,
//     left: -289,
//   },
//   TextSizeTo: {
//     fontSize: 10,
//     fontWeight: 'bold',
//     color: '#3E54AC',
//     top: -10,
//     left: -110,
//   },
//   TextItemname: {
//     fontSize: 10,
//     fontWeight: 'bold',
//     color: '#3E54AC',
//     top: -30,
//     left: -10,
//     width: 70,
//     height: 69,
//   },
//   TextRentfrom: {
//     fontSize: 8,
//     fontWeight: 'bold',
//     color: '#3E54AC',
//     top: -10,
//     left: -75,
//     width: 70,
//     height: 69,
//   },
//   buttonTextRentfrom: {
//     fontSize: 5,
//     fontWeight: 'bold',
//     marginLeft: 5,
//     marginRight: 5,
//     alignContent: 'center',
//   },
//   buttonTextRentto: {
//     fontSize: 5,
//     fontWeight: 'bold',
//     // marginLeft: 5,
//     // marginRight: 5,
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
//   noAddressContainer1: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   titleTextContainer1: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 15,
//     marginLeft: 60,
//   },
//   imageS1: {
//     width: 300,
//     height: 300,
//     borderRadius: 130,
//     marginLeft: -25,
//   },
//   textContainer1: {
//     alignItems: 'center',
//   },
//   noAddressText1: {
//     fontWeight: '500',
//     fontSize: 20,
//     marginTop: 20,
//     marginBottom: 10,
//     color: '#3E54AC',
//   },
//   line21: {
//     fontSize: 16,
//     color: '#8E8E8E',
//   },
//   Disabled: {
//     backgroundColor: 'grey',
//   },
// });
// export default styles;
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.main,
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.Inputtext,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 10,
    height: 150,
    width: '90%',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  MainTitleText: {
    alignItems: 'center',
    fontFamily: 'Poppins-Bold',
    color: Colors.black,
    marginLeft: '42%',
    marginTop: 10,
    fontSize: 24,
  },
  images: {
    width: 64,
    height: 100,
    marginRight: 10,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  cardTextContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '85%',
    marginLeft: 10,
    marginTop: 10,
    // marginRight: 40,
    // backgroundColor: Colors.white,
  },
  name: {
    fontSize: 12,
    // fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    // marginTop: 5,
    // marginLeft: 2,
    marginRight: 10,
  },
  subContainer: {
    height: '100%',
    width: '85%',
    // backgroundColor: Colors.blue,
  },
  backContainer: {
    backgroundColor: Colors.Inputtext,
    height: 40,
    width: 40,
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
    // marginLeft: 10,
  },
  Backicon: {
    marginLeft: 10,
  },
  disabled: {
    backgroundColor: Colors.gray,
  },
  productname: {
    fontSize: 12,
    // width: '10%',
    // height: '30%',
    // fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Poppins-SemiBold',
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
    // borderRadius: 5,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    width: 80,
    marginTop: 10,
    height: 25,
    justifyContent: 'space-between',
  },
  DateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#3E54AC',
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    width: 72,
    height: 20,
    marginLeft: 10,
    // marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  quantityButton: {
    borderRadius: 100,
    height: 24,
    width: 24,
    backgroundColor: Colors.buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 40,
    height: 20,
    marginLeft: 6,
    marginTop: 15,
    // alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#3E54AC',
    // borderRadius: 5,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // marginTop: 10,
  },
  sizeButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#3E54AC',
  },
  GrandtotalContainer: {
    // backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginLeft: 25,
    // marginTop: 20,
  },
  sizeText: {
    fontSize: 12,
    color: 'black',
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    marginHorizontal: 5,
  },
  errorContainer: {
    backgroundColor: '#FDD',
    padding: 10,
    borderRadius: 5,
    // marginTop: 10,
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
    fontWeight: 'semibold',
    height: 29,
    width: 130,
    top: -20,
    left: 20,
    color: '#3E54AC',
    fontSize: 18,
  },
  RemoveButton: {
    height: 25,
    width: '40%',
    backgroundColor: Colors.buttonColor,
    // margin: 15,
    marginTop: 10,
    // marginLeft: 25,
    borderRadius: 5,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RemoveContainer: {
    // flexDirection: 'row',
    marginTop: 10,
  },
  UpdateButton: {
    height: 20,
    width: 40,
    backgroundColor: 'white',
    // margin: 15,
    // marginTop: 5,
    marginLeft: 30,
    borderRadius: 3,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PaymentButton: {
    height: 60,
    width: '90%',
    backgroundColor: Colors.buttonColor,
    // margin: 15,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 100,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PaymentButtonText: {
    color: 'white',
    fontSize: 16,
    height: 25,
    // fontWeight: '700',
    fontFamily: 'Poppins-Medium',
    justifyContent: 'center',
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
  removeAndQuantity: {
    flexDirection: 'row',
    marginLeft: 12,
    width: '70%',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  titleContainer: {
    height: 30,
    width: '100%',
    // backgroundColor: Colors.white,
    // marginTop: 50,
    marginLeft: 17,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 20,
    // fontWeight: '700',
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
    marginLeft: 5,
  },
  CartText: {
    color: Colors.black,
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    marginLeft: 140,
  },
  ScrollContainer: {
    height: '66%',
    width: '100%',
    marginTop: 16,
    marginLeft: 10,
  },
  productSizeBox: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 3,
    // borderColor: '#3E54AC',
    backgroundColor: Colors.iconscolor,
    // width: 18, // set a width that works for your layout
    // height: 18, // set a height that works for your layout
    justifyContent: 'center', // vertically center the text
    alignItems: 'center', // horizontally center the text
  },
  detailsdescription: {
    fontSize: 12,
    color: Colors.black,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
  // cardContainer: {
  //   borderWidth: 1,
  //   borderColor: '#3E54AC1A',
  //   backgroundColor: '#3E54AC1AA',
  //   borderRadius: 5,
  //   padding: 10,
  //   height: 160,
  //   width: 330,
  //   left: 30,
  //   top: 0,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
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
  image: {
    width: '100%',
    height: '100%',
    // marginRight: 10,
    // backgroundColor: 'green',
    borderRadius: 3,
  },
  imageContainer: {
    width: '30%',
    height: '82%',
    marginTop: 10,
    marginLeft: 10,
    // backgroundColor: Colors.white,
    // marginBottom: 10,
  },
  priceText: {
    fontSize: 12,
    // fontWeight: 'bold',
    // marginBottom: 10,
    // top: 55,
    // left: 12,
    fontFamily: 'Poppins-Bold',
    color: Colors.buttonColor,
    marginRight: 50,
  },
  priceTotalText: {
    fontSize: 16,
    // fontWeight: 'bold',
    // left: 130,
    // marginTop: 5,
    color: Colors.black,
    fontFamily: 'Poppins-Medium',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: -47,
  },
  GrandtotalText: {
    color: Colors.black,
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
    fontSize: 16,
  },
  quantityTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.black,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    // marginLeft: 23,
  },
  DateTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.black,
    fontSize: 9,
    width: 55,
    height: 12,
    marginLeft: 7,
    fontFamily: 'Poppins-Medium',
    // fontWeight: '800',
    // marginLeft: 23,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 60,
    paddingVertical: 5,
    borderRadius: 5,
    // height: 10,
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
  buttonQuantity: {
    backgroundColor: '#fff',
    paddingHorizontal: 2,
    paddingVertical: 2,
    height: 18,
    width: 18,
    borderRadius: 5,
    borderColor: '#3E54AC',
    borderWidth: 1,
    top: 55,
    left: -190,
  },
  buttonText: {
    fontSize: 9,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
  },
  TextSize: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#3E54AC',
    top: 10,
    left: -289,
  },
  TextSizeTo: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#3E54AC',
    top: -10,
    left: -110,
  },
  TextItemname: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#3E54AC',
    top: -30,
    left: -10,
    width: 70,
    height: 69,
  },
  TextRentfrom: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#3E54AC',
    top: -10,
    left: -75,
    width: 70,
    height: 69,
  },
  buttonTextRentfrom: {
    fontSize: 5,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    alignContent: 'center',
  },
  buttonTextRentto: {
    fontSize: 5,
    fontWeight: 'bold',
    // marginLeft: 5,
    // marginRight: 5,
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
  quantityText: {
    fontSize: 14,
    marginHorizontal: 10,
    fontWeight: 'bold',
    top: 55,
    left: -190,
  },
  activeButtonText: {
    color: '#fff',
    backgroundColor: '#3E54AC',
    height: 17,
    width: 17,
    borderRadius: 5,
    top: -5,
    left: -6,
  },
  noAddressContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  titleTextContainer1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginLeft: 60,
  },
  imageS1: {
    width: 300,
    height: 300,
    borderRadius: 130,
    marginLeft: -25,
  },
  textContainer1: {
    alignItems: 'center',
  },
  noAddressText1: {
    fontWeight: '500',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
  },
  line21: {
    fontSize: 16,
    color: '#8E8E8E',
  },
  Disabled: {
    backgroundColor: 'grey',
  },
});
export default styles;
