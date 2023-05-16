import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const Ownerstyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.black,
    height: '100%',
    width: 342,
  },
  Titletext: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3E54AC',
    marginTop: 40,
    marginLeft: 40,
  },
  mainButton: {
    alignItems: 'center',
    height: '50%',
    marginBottom: 40,
  },
  mainTouchable: {
    height: 49,
    width: '110%',
    backgroundColor: '#9747FF',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 100,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  touchableText: {
    // margin:15,
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    justifyContent: 'center',
  },
  Imageitem: {
    height: 190,
    width: 190,
    marginLeft: 100,
    marginRight: 90,
  },
  scrollView: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
  },
  Itemname: {
    color: '#3E54AC',
    fontSize: 18,
    fontFamily: 'poppins',
    // marginLeft: 35,
    fontWeight: '700',
    marginTop: 5,
  },
  Namefield: {
    fontSize: 18,
    color: '#FFFFFF',

    height: 56,
    width: '111%',

    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 15,
    borderRadius: 8,
  },
  scroll: {
    marginLeft: 27,
    width: '79%',
    height: 700,
    // alignItems : 'center',
  },
  scrolledit: {
    marginLeft: 27,
    width: '79%',
    height: 1080,
    // alignItems : 'center',
  },
  Descriptionfield: {
    width: '111%',
    height: 56,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    borderRadius: 8,
    marginTop: 23,

    fontSize: 18,
    color: '#FFFFFF',
  },
  Scrollcontainer: {
    backgroundColor: Colors.main,
  },
  genderText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3E54AC',
    marginTop: 26,
    alignItems: 'center',
  },
  dropdowntext: {
    justifyContent: 'center',
    color: '#3E54AC',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '700',

    alignItems: 'center',
  },
  dropdownContainer: {
    height: 48,
    width: 250,
    backgroundColor: '#FFFFFF',
    marginTop: 2,
    borderRadius: 10,
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    borderRadius: 10,
    height: 48,
    width: 250,
    alignItems: 'center',
  },
  dropConatiner: {
    height: '100%',
    alignItems: 'center',
  },
});
export default Ownerstyles;
