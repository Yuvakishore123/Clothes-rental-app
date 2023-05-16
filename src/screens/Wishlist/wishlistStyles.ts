// import {StyleSheet} from 'react-native';
// import Colors from '../../constants/Colors';
// const style = StyleSheet.create({
//   textStyle: {
//     color: '#3E54AC',
//     fontSize: 15,
//     fontFamily: 'poppins',
//     fontWeight: 'bold',
//   },
//   maincontainer: {
//     height: '100%',
//     width: '100%',
//     backgroundColor: Colors.main,
//   },
//   textConatiner: {marginLeft: 63, marginTop: 20},
//   container: {
//     width: 145,
//     height: 200,
//     borderRadius: 10,
//     // backgroundColor: '#000',
//     marginLeft: 20,
//     marginRight: 20,
//     marginBottom: 10,
//   },
//   imageContainer: {
//     backgroundColor: 'green',
//     width: 145,
//     height: 145,
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
//     top: 10,
//     right: 10,
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
//     height: 50,
//     width: 350,
//     backgroundColor: 'white',
//     marginTop: 15,
//     marginLeft: 20,
//     borderColor: '#3E54AC',
//     borderWidth: 2,
//     borderRadius: 12,

//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   cardTextContainer: {
//     height: 50,
//     width: 145,
//     backgroundColor: '#3E54AC1A',
//     marginTop: 6,
//     borderRadius: 5,
//     padding: 6,
//   },
// });
// export default style;
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {color} from 'react-native-elements/dist/helpers';
const style = StyleSheet.create({
  textStyle: {
    color: Colors.white,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: 'bold',
  },
  maincontainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.main,
  },
  textConatiner: {marginLeft: 20, marginTop: 40},
  container: {
    width: '83%',
    height: 200,
    borderRadius: 8,
    // flexDirection: 'row',
    // backgroundColor: '#000',
    backgroundColor: Colors.Textinput,
    marginLeft: 20,
    // marginRight: 20,
    // marginBottom: 10,
    margin: 10,
  },
  imageContainer: {
    // backgroundColor: 'green',
    width: '100%',
    height: '30%',
    // borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    width: '100%',
    height: 145,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // borderBottomRightRadius: 8,
    // borderBottomLeftRadius: 8,
  },
  name: {
    fontSize: 12,
    // fontWeight: '600',
    fontFamily: 'Poppins-Medium',
    color: Colors.white,
  },
  addButton: {
    borderColor: '#3E54AC',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    height: 18,
    width: 18,
    backgroundColor: '#fff',
  },
  price: {
    fontSize: 12,
    // fontWeight: '600',
    color: Colors.buttonColor,
    fontFamily: 'Poppins-SemiBold',
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
    width: 35,
    height: 35,

    borderRadius: 20,
    // elevation: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {},
  rentText: {color: '#3E54AC', fontWeight: 'bold', fontSize: 10},

  searchInputContainer: {
    height: 50,
    width: 350,
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 20,
    borderColor: '#3E54AC',
    borderWidth: 2,
    borderRadius: 12,

    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTextContainer: {
    // height: 40,
    width: '100%',
    // backgroundColor: Colors.white,
    marginTop: 60,
    borderRadius: 5,
    padding: 6,
    marginLeft: 5,
  },
  Cartcontents: {
    marginTop: 25,
    // flexDirection: 'row',
    // backgroundColor: Colors.white,
  },
});
export default style;
