import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import Colors from '../../constants/Colors';
const style = StyleSheet.create({
textStyle:{
    color: '#3E54AC',
            fontSize: 15,
            fontFamily: 'poppins',
            fontWeight: 'bold',

},

  rentText: {color: '#3E54AC', fontWeight: 'bold', fontSize: 10},
container:{flex: 1},
textConatiner:{marginLeft: 63, marginTop: 20},
 cartItemContainer: {
    marginTop: 20,
    marginRight: 10,
    width: '40%',
    height: 200,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#deeaee',
    marginLeft: 20,
    marginBottom: 10,
  },
  //   image: {
  //     width: '100%',
  //     height: '50%',
  //     borderTopRightRadius: 10,
  //     borderBottomRightRadius: 10,
  //     borderBottomLeftRadius: 10,
  //   },
  itemName: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#3E54AC',
  },
  itemDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3E54AC',
  },
  itemSize: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3E54AC',
  },
  //   rentButton: {
  //     borderColor: '#3E54AC',
  //     borderWidth: 1,
  //     borderRadius: 3,
  //     paddingLeft: 7,
  //     paddingRight: 7,
  //     paddingBottom: 5,
  //     paddingTop: 5,
  //   },
  rentButtonText: {
    color: '#3E54AC',
    fontSize: 12,
  },
  removeButton: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
    paddingTop: 7,
  },
  removeButtonText: {
    color: 'black',
  },
  wishlistButtonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishlistButtonImage: {
    width: 24,
    height: 24,
  },
  wishlistButtonImageTint: {
    tintColor: 'red',
  },
  removeBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
    paddingTop: 7,
  },
  wishlistBtn: {
   
      width: 35,
      height: 35,

      borderRadius: 20,
      // elevation: 5,
      position: 'relative',
      top: 10,
      right: 10,
      justifyContent: 'center',
      alignItems: 'center',
    
  },

  //   imageContainer: {
  //     backgroundColor: 'green',
  //     width: 145,
  //     height: 145,
  //     borderRadius: 8,
  //   },
  //   image: {
  //     width: '100%',
  //     height: 100,
  //     borderTopLeftRadius: 10,
  //     borderTopRightRadius: 10,
  //     borderBottomRightRadius: 10,
  //     borderBottomLeftRadius: 10,
  //   },

  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  name: {
    fontSize: 10,
    fontWeight: '600',
    color: '#3E54ACCC',
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
    fontSize: 8,
    fontWeight: '600',
    color: '#3E54AC',
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

  //   cardTextContainer: {
  //     height: 50,
  //     width: 140,
  //     backgroundColor: '#3E54AC1A',
  //     marginTop: 6,
  //     borderRadius: 5,
  //     padding: 6,
  //   },

  //changes


  imageContainer: {
    backgroundColor: 'green',
    width: 145,
    height: 145,
    borderRadius: 8,
  },
  cardTextContainer: {
    height: 50,
    width: 140,
    backgroundColor: '#3E54AC1A',
    marginTop: 6,
    borderRadius: 5,
    padding: 6,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },




});
export default style;
