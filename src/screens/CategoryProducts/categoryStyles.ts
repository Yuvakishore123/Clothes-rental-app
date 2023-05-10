// ProductItem.styles.js
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const style = StyleSheet.create({
  container: {
    width: 145,
    height: 200,
    borderRadius: 10,

    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: Colors.main,
  },
  dheader: {
    marginTop: 3,
    // top: 90,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 1,
    marginLeft: -50,
  },
  imageContainer: {
    backgroundColor: 'green',
    width: 145,
    height: 145,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 145,
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
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
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
    height: 50,
    width: 145,
    backgroundColor: '#3E54AC1A',
    marginTop: 6,
    borderRadius: 5,
    padding: 6,
  },
  textConatiner: {marginLeft: 63, marginTop: 20, flexDirection: 'row'},

  textStyle: {
    color: '#3E54AC',
    fontSize: 17,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    // marginTop: 10,
  },
  loadtextStyle: {
    color: '#3E54AC9d',
    fontSize: 17,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    marginLeft: 35,
  },
  maincontainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.main,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default style;
