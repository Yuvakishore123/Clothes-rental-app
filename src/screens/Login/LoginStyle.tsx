import {StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.main,
    height: '100%',
    width: '100%',
  },
  DropdownContainer: {
    width: 250,
    height: 100,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  DropConatiner: {
    height: 50,
    width: 100,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    //flex: 1,
    width: '100%',
    //margin: 26,
    //backgroundColor: '#000',
    // shadowColor: '#3E54AC',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity:15,
    // shadowRadius: 10,
    // elevation:0.1,
  },
  titleText: {
    marginTop: '30%',
    fontSize: 30,
    fontWeight: '700',
    color: '#3E54AC',
    marginLeft: 60,
    alignSelf: 'flex-start',
    // marginLeft: 20,
  },
  titleTextContainer: {
    // backgroundColor: 'green',
    //height: 150,
    //justifyContent: 'space-around',
    // flex: 1,
    flexDirection: 'row',
    //display: 'flex',
    // gap: 100,
    //alignItems: 'center',
  },
  card: {
    backgroundColor: '#3E54AC26',
    // height: 300,
    width: '75%',
    padding: 30,
    borderRadius: 10,
    //margin: 15,
    justifyContent: 'center',
    shadowColor: '#52006A',
    // elevation: 1,
    marginTop: 70,
  },
  cardText: {
    color: '#3E54AC',
    fontSize: 18,
    fontWeight: '700',
  },
  textinput: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: '#3E54AC',
  },
  touchableText: {
    // margin:15,
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    justifyContent: 'center',
  },
  touchablebtn: {
    height: 59,
    width: 309,
    backgroundColor: '#3E54AC',
    margin: 15,
    marginTop: 30,
    borderRadius: 8,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchablebtnContainer: {
    justifyContent: 'center',
    // alignItems:"center",
  },
  subTitileText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  signuptext: {
    marginTop: 20,
    alignItems: 'center',
    //marginRight: 20,
    //margin: 15,
    //paddingLeft: 25,
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
    // alignItems:"center",
    // justifyContent:"center"
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
    width: 155,
    height: 165,
    // paddingRight: 30,
    marginTop: 50,
    marginLeft: 90,
  },
  errorText: {
    color: 'red',
  },
  mainButton: {
    // marginLeft: 85,
    alignItems: 'center',
    height: '50%',
  },
  mainTouchable: {
    height: 48,
    width: 133,
    backgroundColor: '#3E54AC',
    marginTop: 30,
    borderRadius: 8,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 50,
  },
});
export default Styles;
