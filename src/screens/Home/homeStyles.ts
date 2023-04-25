// ProductItem.styles.js
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    width: 145,
    height: 200,
    borderRadius: 10,

    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: 'green',
    width: 145,
    height: 145,
    borderRadius: 8,
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
    width: 140,
    backgroundColor: '#3E54AC1A',
    marginTop: 6,
    borderRadius: 5,
    padding: 6,
  },
});

export default style;