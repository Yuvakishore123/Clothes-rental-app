import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ECF2FF',
    height: 800,
    width: 800,
  },
  container: {
    width: 300,
    margin: 26,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#3E54AC',
    margin: 25,
    marginLeft: 55,
  },
  titleTextContainer: {
    height: 150,
    justifyContent: 'center',
    // flex: 1,
    flexDirection: 'row',
    display: 'flex',
    gap: 80,
    marginLeft: 15,
  },
  card: {
    backgroundColor: '#3E54AC26',
    height: 500,
    width: 320,
    padding: 35,
    borderRadius: 15,
    margin: 15,
    justifyContent: 'center',
    shadowColor: '#52006A',
    // elevation: 1,
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
    // alignItems:"center",
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
    // marginBottom: 20,
    // flexDirection: 'row',
  },
  image: {
    width: 139,
    height: 165,
    // paddingRight: 30,
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
    // position: 'absolute',
    // bottom: -18, // Adjust this value to position the error text as desired
    // width: '100%', // Make sure the error text spans the full width of the card container
    // textAlign: 'center', // Center the error text horizontally within the card container
  },
});
export default styles;
