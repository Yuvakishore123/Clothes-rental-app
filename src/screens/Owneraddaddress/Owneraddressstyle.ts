import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const OwnerAddressStyles = StyleSheet.create({
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  maincontainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000000',
  },
  textField: {
    color: '#3E54AC',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 30,
  },
  headerText: {
    marginTop: 25,
    marginLeft: 25,
    fontSize: 20,
    color: '#3E54AC',
    flexDirection: 'row',
    fontWeight: '600',
  },
  btnContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 0.2,
    padding: 8,
    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btnText: {
    fontWeight: '700',
    fontFamily: 'Poppins',
    fontSize: 14,
    marginTop: 26,
    marginRight: 45,
    color: 'hsla(266, 100%, 64%, 1)',
  },
  card: {
    // height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '90%',
    // borderWidth: 0.2,
    borderColor: '#8E8E8E',
    // backgroundColor: 'pink',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deleteBtn: {
    padding: 7,
    borderWidth: 0.2,
    marginRight: 20,
    backgroundColor: '#3E54AC',
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBtnText: {
    fontWeight: '700',
    fontFamily: 'Poppins',
    marginTop: 20,
    marginRight: 40,
    fontSize: 12,
    color: 'hsla(266, 100%, 64%, 1)',
  },
  editBtnText: {
    fontWeight: '700',
    fontFamily: 'Poppins',
    fontSize: 12,
    marginLeft: 6,
    color: 'hsla(266, 100%, 64%, 1)',
  },
  btnfield: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 60,
    height: 59,
    marginTop: 30,
    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btntext: {
    position: 'absolute',
    alignItems: 'center',
    left: 120,
    top: 15,
    height: 29,
    width: 104,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 18,
    color: 'white',
  },
  input: {marginLeft: 15, color: Colors.white, fontWeight: '400'},
  stateName: {
    marginLeft: 15,
    marginBottom: 10,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  liststyle: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.main,
  },
  city: {
    marginLeft: 15,
    marginTop: 10,
    color: Colors.white,
    fontWeight: '400',
  },
  addAddressHeader: {flexDirection: 'row'},
  backBtn: {
    marginTop: 17,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginLeft: 23,
    borderRadius: 100,
    width: '21%',
    height: 35,
    padding: 9,
    flexDirection: 'row',
  },
  btnImage: {width: 24, height: 24, marginTop: 15},
  addAddressContainer: {
    justifyContent: 'center',
    width: '100%',
  },
  addAddressText: {
    marginTop: 65,
    fontSize: 20,
    marginLeft: -20,
    color: '#FFFFFF',
    fontWeight: '900',
  },
  inputAddress: {
    backgroundColor: Colors.main,
    marginLeft: 30,
    paddingHorizontal: 10,
    width: 252,
    height: 40,
    fontSize: 18,
    color: Colors.iconscolor,
    alignItems: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: '#000',
    elevation: 5,
  },
  btnfieldAddress: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 179,
    height: 59,
    marginTop: 50,
    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btntextAddress: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
  },
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    width: 250,
    marginLeft: 30,
    borderRadius: 5,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    width: 250,
    marginLeft: 5,
    borderRadius: 5,
  },
  smalltextInputs: {
    height: 40,
    width: 105,
    backgroundColor: Colors.main,
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: '#000',
    elevation: 5,
    fontSize: 18,
    color: Colors.iconscolor,
    fontWeight: 'bold',
    borderRadius: 5,
  },
  Titletext: {
    marginTop: 15,
    marginLeft: 90,
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  titleContainer: {
    color: Colors.iconscolor,
    marginLeft: 20,
    fontSize: 20,
  },
  containerRadio: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 8,
  },
  optionRadio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRadio: {
    marginLeft: 5,
    color: '#3E54AC',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '700',
  },
  containerCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 30,
  },
  textCheckbox: {
    color: '#3E54AC',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '700',
    marginLeft: 10,
  },
  checkboxContainer: {
    borderColor: 'black',
    marginLeft: 30,
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  noAddressText: {
    color: '#3E54AC',
    fontSize: 18,
    textAlign: 'center',

    fontWeight: 'bold',
  },
  line2: {
    color: '#3E54AC',
    fontSize: 14,
    textAlign: 'center',
    marginLeft: -90,
  },
  titleTextContainer: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  imageS: {
    borderRadius: 150,
    width: 300,
    height: 300,
    marginLeft: 40,
  },
  noAddressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textContainerAddress: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 45,
    width: 250,
    marginTop: 50,
    marginLeft: 30,
    borderRadius: 5,
  },
  noAddressContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  titleTextContainer1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  imageS1: {
    width: 250,
    height: 250,
    borderRadius: 130,
  },
  textContainer1: {
    alignItems: 'center',
  },
  noAddressText1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: '#3E54AC',
  },
  line21: {
    fontSize: 16,
    color: '#8E8E8E',
  },
});
export default OwnerAddressStyles;
