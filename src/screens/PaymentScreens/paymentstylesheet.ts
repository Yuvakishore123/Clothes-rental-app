import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF2FF',
    paddingVertical: 30,
  },
  failcontainer: {
    flex: 1,
    backgroundColor: '#ECF2FF',
    paddingVertical: 30,
    flexDirection: 'row',
  },
  headerText: {
    color: '#3E54AC',
    fontWeight: 'bold',
    left: 45,
    top: 15,
    fontSize: 16,
  },
  failheaderText: {
    color: '#3E54AC',
    fontWeight: 'bold',
    left: 45,
    // top: 15,
    fontSize: 16,
  },
  btnfield: {
    alignItems: 'center',
    width: 300,
    height: 59,
    marginTop: 80,
    // marginLeft: 10,
    backgroundColor: '#3E54AC',
    borderRadius: 13,
  },
  btntext: {
    // position: 'absolute',
    left: 165,
    top: 15,
    height: 29,
    width: 304,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
  },
  obtnfield: {
    alignItems: 'center',
    width: 300,
    height: 59,
    marginTop: 40,
    // marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: 13,
  },
  obtntext: {
    // position: 'absolute',
    left: 148,
    top: 15,
    height: 29,
    width: 204,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: '#3E54AC',
  },
  successText: {
    color: '#3E54AC',
    textAlign: 'center',
    top: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  successText1: {
    color: '#3E54AC',
    textAlign: 'center',
    top: 30,
    fontWeight: '400',
    fontSize: 16,
  },
  successContainer: {
    alignItems: 'center',
    top: 210,
  },
});
export default styles;