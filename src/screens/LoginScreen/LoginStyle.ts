import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.main,
    height: '100%',
    width: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    //flex: 1,
    width: '100%',
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
    flexDirection: 'row',
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
    color: '#3E54AC',
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
    marginTop: 20,
    borderRadius: 8,
    color: '#FFFFFF',
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
    width: 155,
    height: 165,
    marginTop: 50,
    marginLeft: 70,
  },
  errorText: {
    color: 'red',
  },
  mainButton: {
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
  },
  mainTouchable: {
    height: 48,
    width: 250,
    backgroundColor: '#3E54AC',
    marginTop: 30,
    borderRadius: 14,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
  },
});
export default Styles;
