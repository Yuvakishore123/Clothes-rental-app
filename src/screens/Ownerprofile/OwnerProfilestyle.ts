import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const style = StyleSheet.create({
  btnfield: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    marginTop: 0,
    marginLeft: 45,
    backgroundColor: '#3E54AC',
    borderRadius: 13,
  },
  btntext: {
    width: '30%',
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginLeft: '37%',
    marginTop: -40,
    color: '#FB6565',
    // backgroundColor: '#FFFFFF',
    // color: 'red',
  },
  profileImg: {
    height: 50,
    borderRadius: 50,
    borderColor: 'red',
    shadowColor: '#3E54AC',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    marginTop: 80,
  },
  imageContainer: {},
  profileStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.main,
  },
  profileText: {
    marginLeft: 15,
    width: '100%',
    marginTop: 8,
    // fontWeight: 'bold',
    // color: '#FFFFFF',
    color: Colors.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    // padding: 5,
  },
  profileText1: {
    textAlign: 'left',
    marginLeft: 15,
    width: '87%',
    // color: 'rgba(255, 255, 255, 0.2)',
    color: 'rgba(5, 5, 5, 0.5)',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    // padding: 5,
  },
  profileFields: {
    height: 300,
    marginLeft: 23,
    marginTop: 40,
  },
  editprofileicon: {
    marginLeft: 30,
    // color: 'rgba(255, 255, 255, 0.5)',
    color: 'rgba(5, 5, 5, 0.5)',
  },
  addressicon: {
    marginLeft: 30,
    // color: 'rgba(255, 255, 255, 0.5)',
    color: 'rgba(5, 5, 5, 0.5)',
  },
  producticon: {
    marginLeft: 30,
    // color: 'rgba(255, 255, 255, 0.5)',
    color: 'rgba(5, 5, 5, 0.5)',
  },
  editprofile: {
    backgroundColor: Colors.white,
    color: 'white',
  },
  whiteBtn: {
    alignItems: 'center',
    textAlign: 'center',
    width: '92%',
    height: 56,
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: 10,
    marginLeft: 3,
    marginBottom: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // backgroundColor: Colors.white,
    width: '87%',
    height: 96,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 20,
    borderRadius: 10,
    elevation: 4,
  },
  btnPText: {
    marginLeft: 20,
    width: '57%',
    marginTop: 3,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    // color: 'rgba(255, 255, 255, 0.5)',
    color: 'hsla(0, 0%, 2%, 1)',
    // color: '#FFFFFF',
    alignItems: 'center',
  },
  forwardios: {
    marginLeft: '5%',
    // color: 'rgba(255, 255, 255, 0.5)',
    color: 'rgba(5, 5, 5, 0.5)',
    // color: '#FFFFFF',
  },
  addressforwardios: {
    marginLeft: '68%',
    // color: 'rgba(255, 255, 255, 0.5)',
    color: 'rgba(5, 5, 5, 0.5)',
    // color: '#FFFFFF',
  },
  productforwardios: {
    marginLeft: '5%',
    // color: 'rgba(255, 255, 255, 0.5)',
    color: 'rgba(5, 5, 5, 0.5)',
    // color: '#FFFFFF',
  },
  AddressbtnPText: {
    position: 'absolute',
    marginLeft: 83,
    fontWeight: '700',
    fontFamily: 'Poppins',
    fontSize: 16,
    color: 'hsla(0, 0%, 2%, 1)',
    // color: 'rgba(5, 5, 5, 0.5)',
    alignItems: 'center',
  },
  //switch button css
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  icon: {
    backgroundColor: '#3E54AC',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 15,
    zIndex: 2,
    // flexDirection: 'row',
  },
});
export default style;
