import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.main,
    height: '100%',
    width: '100%',
  },
  touchableContainer: {
    height: 90,
    width: 300,
    flexDirection: 'row',
    // backgroundColor: 'black',
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headertxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.iconscolor,
    marginTop: 35,
    marginLeft: 25,
  },
  // bottomTabWrapper: {
  //  position: 'absolute',
  //  bottom: 0,
  //  width: '100%',
  //  flexDirection: 'row',
  //  justifyContent: 'space-between',
  // },
  card: {
    backgroundColor: Colors.iconscolor,
    borderRadius: 10,
    padding: 20,
    margin: 10,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.white,
    marginLeft: 100,
  },
  renteditems1: {
    fontSize: 16,
    marginLeft: 20,
    color: Colors.white,
  },
  rentalitemscard: {
    flexDirection: 'row',
  },
  renteditems2: {
    fontSize: 16,
    marginLeft: 100,
    color: Colors.white,
  },
  cardsrentalprices: {
    fontSize: 16,
    marginLeft: 50,
    color: Colors.white,
    marginTop: 10,
  },
  cardsTotalprices: {
    fontSize: 16,
    marginLeft: 170,
    color: Colors.white,
    marginTop: 10,
  },
  recentlyaddedcontainer: {
    height: 150,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  recentlyaddedcard: {
    // backgroundColor: Colors.black,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    width: 150,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: -15,
  },
  recentlyaddedimage: {
    width: 160,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  recentlyaddedname: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.iconscolor,
  },
  cardText: {
    color: Colors.iconscolor,
    textAlign: 'left',
    fontWeight: 'bold',
    height: 20,
    width: 100,
    marginBottom: 3,
    left: 10,
  },
  cardContainer: {
    width: 100,
    height: 150,
    alignSelf: 'center',
    // marginBottom: 10,
    // marginTop: 10,
    // color: 'red',
    // padding: 10,
    // backgroundColor: "#000",
    marginBottom: 7,
  },
  cardTextContainer: {
    width: 160,
    height: 45,
    alignSelf: 'center',
    backgroundColor: '#3E54AC1A',
    // marginBottom: 10,
    // marginVertical: 5,
    // marginTop: 10,
    // color: 'red',
    borderRadius: 5,
  },
  recentlyaddedprice: {
    fontSize: 16,
    textAlign: 'center',
  },
  Rentalhistory: {
    fontWeight: 'bold',
    fontSize: 20,
    // backgroundColor: '#000',
    color: Colors.iconscolor,
    marginLeft: 25,
  },
});
export default Styles;






















// import {StyleSheet} from 'react-native';
// import Colors from '../../constants/Colors';
// const Styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: Colors.main,
//     height: '100%',
//     width: '100%',
//   },
//   headertxt: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: Colors.iconscolor,
//     marginTop: 35,
//     marginLeft: 25,
//   },
//   // bottomTabWrapper: {
//   //   position: 'absolute',
//   //   bottom: 0,
//   //   width: '100%',
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   // },
//   card: {
//     backgroundColor: Colors.iconscolor,
//     borderRadius: 10,
//     padding: 20,
//     margin: 10,
//     height: 150,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: Colors.white,
//     marginLeft: 100,
//   },
//   renteditems1: {
//     fontSize: 16,
//     marginLeft: 20,
//     color: Colors.white,
//   },
//   rentalitemscard: {
//     flexDirection: 'row',
//   },
//   renteditems2: {
//     fontSize: 16,
//     marginLeft: 100,
//     color: Colors.white,
//   },
//   cardsrentalprices: {
//     fontSize: 16,
//     marginLeft: 50,
//     color: Colors.white,
//     marginTop: 10,
//   },
//   cardsTotalprices: {
//     fontSize: 16,
//     marginLeft: 170,
//     color: Colors.white,
//     marginTop: 10,
//   },
//   recentlyaddedcontainer: {
//     height: 150,
//     width: '100%',
//     backgroundColor: 'white',
//     marginBottom: 10,
//   },
//   recentlyaddedcard: {
//     // backgroundColor: Colors.black,
//     borderRadius: 10,
//     padding: 20,
//     margin: 20,
//     width: 150,
//     marginTop: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: -15,
//   },
//   recentlyaddedimage: {
//     width: 160,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 10,
//     borderRadius: 10,
//     backgroundColor: 'white',
//   },
//   recentlyaddedname: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: Colors.iconscolor,
//   },
//   cardText: {
//     color: Colors.iconscolor,
//     textAlign: 'left',
//     fontWeight: 'bold',
//     height: 20,
//     width: 100,
//     marginBottom: 3,
//     left: 10,
//   },
//   cardContainer: {
//     width: 100,
//     height: 150,
//     alignSelf: 'center',
//     // marginBottom: 10,
//     // marginTop: 10,
//     // color: 'red',
//     // padding: 10,
//     // backgroundColor: "#000",
//     marginBottom: 7,
//   },
//   cardTextContainer: {
//     width: 160,
//     height: 45,
//     alignSelf: 'center',
//     backgroundColor: '#3E54AC1A',
//     // marginBottom: 10,
//     // marginVertical: 5,
//     // marginTop: 10,
//     // color: 'red',
//     borderRadius: 5,
//   },
//   recentlyaddedprice: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   Rentalhistory: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     // backgroundColor: '#000',
//     color: Colors.iconscolor,
//     marginLeft: 25,
//   },
// });
// export default Styles;