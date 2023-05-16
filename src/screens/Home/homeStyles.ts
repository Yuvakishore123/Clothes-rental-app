// // ProductItem.styles.js
// import {StyleSheet} from 'react-native';
// import Colors from '../../constants/Colors';

// const style = StyleSheet.create({
//   container: {
//     width: '38%',
//     height: '32%',
//     borderRadius: 10,
//     backgroundColor: Colors.main,
//     marginLeft: '6%',
//     marginRight: '3%',
//     marginBottom: 10,
//   },
//   imageContainer: {
//     backgroundColor: '#3E54AC1A',
//     width: 155,
//     height: 145,
//     marginTop: 5,
//     borderRadius: 8,
//   },
//   image: {
//     width: '100%',
//     height: 145,
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//     borderBottomRightRadius: 8,
//     borderBottomLeftRadius: 8,
//   },
//   name: {
//     fontSize: 10,
//     fontWeight: '600',
//     color: '#3E54ACCC',
//   },
//   addButton: {
//     borderColor: '#3E54AC',
//     borderWidth: 1,
//     borderRadius: 4,

//     alignItems: 'center',

//     height: 18,
//     width: 18,
//     backgroundColor: '#fff',
//   },
//   price: {
//     fontSize: 8,
//     fontWeight: '600',
//     color: '#3E54AC',
//   },
//   rentButton: {
//     borderWidth: 1,
//     borderRadius: 4,

//     borderColor: '#3E54AC',

//     width: 57,
//     height: 18,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 3,
//   },
//   wishlistButton: {
//     width: 35,
//     height: 35,

//     borderRadius: 20,
//     // elevation: 5,
//     position: 'absolute',
//     top: 5,
//     marginLeft: 110,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',

//     alignItems: 'center',
//   },
//   rentText: {color: '#3E54AC', fontWeight: 'bold', fontSize: 10},

//   searchInputContainer: {
//     height: 40,
//     width: '75%',
//     backgroundColor: Colors.Inputtext,
//     marginTop: 15,
//     marginLeft: 20,
//     // borderColor: '#3E54AC',
//     borderWidth: 2,
//     borderRadius: 25,

//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   cardTextContainer: {
//     height: 50,
//     width: 155,
//     backgroundColor: '#3E54AC1A',
//     marginTop: 6,
//     borderRadius: 5,
//     // marginLeft: 2,
//     padding: 6,
//   },
// });

// export default style;
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const style = StyleSheet.create({
  container: {
    width: '42%',
    height: 207,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginLeft: '3.5%',
    marginRight: '5%',
    marginTop: 10,
    marginBottom: 10,
  },
  CategoriesText: {
    fontSize: 24,
    // fontWeight: '700',
    fontFamily: 'Poppins-Medium',
    color: Colors.white,
    marginTop: 15,
    marginLeft: 15,
  },
  Seetext: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.buttonColor,
    marginTop: 25,
    // marginLeft: 15,
    marginRight: 5,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    // backgroundColor: Colors.white,
    // height: '10%',
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.black,
  },
  Productstext: {
    color: Colors.white,
    // fontWeight: '700',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginLeft: 20,
    // marginTop: 10,
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: '#3E54AC1A',
    width: '100%',
    height: 150,
    // marginTop: 5,
    // borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // borderBottomRightRadius: 8,
    // borderBottomLeftRadius: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.white,
    marginLeft: 10,
    marginTop: 10,
  },
  addButton: {
    borderColor: '#3E54AC',
    borderWidth: 1,
    borderRadius: 4,

    alignItems: 'center',

    height: 18,
    width: 18,
    // backgroundColor: '#fff',
  },
  price: {
    fontSize: 12,
    fontWeight: '900',
    color: Colors.buttonColor,
    marginLeft: 10,
    marginTop: 5,
  },
  rentButton: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#3E54AC',
    width: 57,
    height: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  wishlistButton: {
    width: 30,
    height: 30,
    borderRadius: 20,
    // elevation: 5,
    position: 'absolute',
    backgroundColor: Colors.Textinput,
    top: 5,
    marginLeft: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  rentText: {color: '#3E54AC', fontWeight: 'bold', fontSize: 10},

  searchInputContainer: {
    height: 45,
    width: '90%',
    backgroundColor: Colors.Inputtext,
    // marginTop: 5,
    marginLeft: 20,
    // borderColor: '#3E54AC',
    borderWidth: 2,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // cardTextContainer: {
  //   backgroundColor: Colors.Inputtext,
  //   height: 100,
  // },
});

export default style;
