import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.main,
  },
  image: {
    height: 200,
    width: '100%',
    marginTop: 40,
  },
  textinput: {
    backgroundColor: Colors.Textinput,
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 6,
    width: '90%',
    padding: 10,
  },
  touchablebtnContainer: {
    marginTop: 20,
    marginLeft: 5,
    height: 100,
    width: '100%',
    // backgroundColor: 'red',
  },
  touchablebtn: {
    height: 60,
    width: '90%',
    backgroundColor: '#9747FF',
    marginLeft: 15,
    // marginTop: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    // fontWeight: '700',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
  },
  otp: {
    marginLeft: '69%',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    // backgroundColor: 'white',
  },
  otptext: {
    // marginTop: 20,
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: 'Poppins-Regular',
  },
  Otptext: {
    marginTop: 15,
    alignItems: 'center',
    color: Colors.buttonColor,
    // fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },
  sign: {
    marginLeft: '45%',
    marginTop: '45%',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signuptext: {
    // marginTop: '60%',
    // marginLeft: '22%',
    alignItems: 'center',
    color: Colors.white,
    fontFamily: 'Poppins-Regular',
  },
  Signuptext: {
    // marginTop: 230,
    alignItems: 'center',
    color: Colors.buttonColor,
    fontFamily: 'Poppins-Regular',
  },
});

export default Styles;
