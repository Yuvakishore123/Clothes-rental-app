import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.main,
    height: '100%',
    width: '100%',
  },
  container: {
    width: '100%',
  },
  titleText: {
    marginTop: '30%',
    fontSize: 30,
    fontWeight: '900',
    color: '#FFFFFF',
    marginLeft: 30,
    alignSelf: 'flex-start',
  },
  titleTextContainer: {
    // flexDirection: 'row',
    width: '100%',
    height: 200,
    // marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#3E54AC26',
    width: '75%',
    padding: 30,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#52006A',
    marginTop: 40,
  },
  Textphonenumber: {
    color: Colors.black,
    fontSize: 16,
    marginTop: '8%',
    marginLeft: '10%',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
  },
  TextOTP: {
    color: 'black',
    fontSize: 16,
    marginTop: '5%',
    marginLeft: '11%',
    fontFamily: 'Poppins-Medium',
    // fontWeight: '400',
  },
  cardTextOTP: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 20,
    marginLeft: 20,
    fontFamily: 'poppins',
    fontWeight: '400',
  },
  textinputphone: {
    backgroundColor: 'white',
    marginTop: '3%',
    marginLeft: 33,
    width: '85%',
    borderRadius: 6,
    padding: 10,
  },
  textinputOTP: {
    backgroundColor: 'white',
    marginTop: '3%',
    marginLeft: 33,
    width: '85%',
    borderRadius: 6,
    padding: 10,
  },
  touchableTextOTP: {
    color: 'hsla(266, 100%, 64%, 1)',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: '50%',
    marginTop: '-6.0%',
    justifyContent: 'center',
  },
  touchableTextcontinue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    justifyContent: 'center',
  },
  Text: {
    color: Colors.buttonColor,
    fontSize: 18,
    marginLeft: '42%',
    fontWeight: '400',
    justifyContent: 'center',
    marginTop: '10%',
  },
  touchablebtn: {
    height: 59,
    width: '85%',
    backgroundColor: '#9747FF',
    margin: 35,
    marginTop: '10%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchablebtnContainer: {
    justifyContent: 'center',
  },
  subTitileText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  signuptext: {
    marginTop: 20,
    alignItems: 'center',
    color: '#3E54AC',
  },
  sign: {
    color: '#3E54AC',
    fontSize: 14,
    opacity: 3,
    flexDirection: 'row',
  },
  guest: {
    color: '#3E54AC',
    fontSize: 14,
    marginRight: 15,
    marginTop: 10,
    margin: 15,
  },
  orText: {
    marginLeft: 1,
    fontSize: 14,
  },
  dontText: {
    margin: 25,
    marginTop: 5,
    marginRight: 2,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 235,
    marginTop: '10%',
  },
  errorText: {
    color: 'red',
  },
});
export default Styles;
