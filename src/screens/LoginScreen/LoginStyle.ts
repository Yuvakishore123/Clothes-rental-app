import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.main,
  },
  mainButton: {
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
  },
  mainTouchable: {
    height: 48,
    width: '145%',
    backgroundColor: '#3E54AC',
    marginTop: 30,
    borderRadius: 14,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '50%',
  },
  image: {
    height: 200,
    width: '100%',
    marginTop: 40,
    marginLeft: 50,
  },
  textinput: {
    backgroundColor: Colors.white,
    fontFamily: 'Poppins-Regular',
    color: Colors.black,
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
    color: Colors.black,
    fontFamily: 'Poppins-Regular',
  },
  Otptext: {
    marginTop: 15,
  Otptext: {
    marginTop: 15,
    alignItems: 'center',
    color: Colors.buttonColor,
    // fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },
  sign: {
    marginLeft: '45%',
    marginTop: 30,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignSelf: 'center',
  },
  TitleText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: Colors.black,
    marginTop: 70,
    marginLeft: 20,
  },
  signuptext: {
    // marginTop: '60%',
    // marginLeft: '22%',
    alignItems: 'center',
    color: Colors.black,
    // marginTop: 20,
    fontFamily: 'Poppins-Regular',
  },
  Signuptext: {
    // marginTop: 230,
  Signuptext: {
    // marginTop: 230,
    alignItems: 'center',
    color: Colors.buttonColor,
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
