import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Colors.main,
    height: '100%',
    width: '100%',
  },
  mainContainer: {
    backgroundColor: Colors.main,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    marginTop: 60,
    fontSize: 30,
    fontWeight: '700',
    color: '#3E54AC',
    // margin: 25,
    // marginLeft: 55,
  },
  titleTextContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  card: {
    backgroundColor: '#3E54AC26',
    width: 320,
    padding: 35,
    borderRadius: 15,
    margin: 15,
    justifyContent: 'center',
    shadowColor: '#52006A',
  },
  cardText: {
    color: '#3E54AC',
    fontSize: 18,
    fontWeight: '700',
  },
  cardText1: {
    color: '#3E54AC',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 20,
  },
  textinput: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: '#3E54AC',
    color: '#3E54AC',
  },
  touchableText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    justifyContent: 'center',
  },
  touchablebtn: {
    height: 59,
    width: 320,
    backgroundColor: '#3E54AC',
    margin: 15,
    marginTop: 10,
    borderRadius: 8,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchablebtnContainer: {
    justifyContent: 'center',
    marginTop: -20,
  },
  subTitileText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  Logintext: {
    marginTop: 10,
    alignItems: 'center',
    marginRight: 20,
    margin: 15,
  },
  sign: {
    color: '#3E54AC',
    fontSize: 14,
    opacity: 3,
  },
  dontText: {
    margin: 25,
    marginTop: 1,
    marginRight: 2,
    marginBottom: 10,
  },
  textfirst: {
    height: 40,
    width: 115,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: 139,
    height: 165,
    marginLeft: 50,
  },
  emailText: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: '#3E54AC',
  },
  errorTxt: {
    fontSize: 12,
    color: 'red',
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signText: {
    color: '#3E54AC',
    fontSize: 14,
    opacity: 3,
    flexDirection: 'row',
  },
  signuptext: {
    marginTop: 20,
    alignItems: 'center',
    color: '#3E54AC',
  },
});
export default styles;