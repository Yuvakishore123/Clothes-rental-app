import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const style = StyleSheet.create({
  categoryBox: {
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 64,
    flexDirection: 'row',
    backgroundColor: Colors.Textinput,
    borderRadius: 8,
    marginLeft: 20,
    marginTop: 10,
  },
  imageContainer: {
    marginLeft: 20,
  },
  MainView: {
    width: '90%',
    backgroundColor: 'black',
  },
  categoryImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignSelf: 'center',
  },
  categoryText: {
    color: Colors.white,
    width: '100%',
    // justifyContent: 'space-evenly',
    fontSize: 20,
    // marginRight: 100,
    padding: 20,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  textStyle: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    // fontWeight: '700',
    marginTop: 20,
    marginLeft: 30,
  },
  productforwardios: {
    marginLeft: 120,
    // justifyContent:'flex-end',
    // flexDirection:'row',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  backBtn: {
    marginTop: 10,
    marginLeft: 25,
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 100,
    width: '9%',
    height: 35,
    flexDirection: 'row',
  },
  maincontainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.main,
  },
  loaderContainer: {
    flex: 1,
    height: 200,
    width: 200,
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 145,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
export default style;
