import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
  buttenContainer: {
    flexDirection: 'row',
    height: 200,
    width: 145,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  card: {
    height: 300,
    width: '39%',
    borderRadius: 10,
    // opacity: 0.5,
    flexDirection: 'column',
    backgroundColor: '#d2e5f1',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20
  },
  Container: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    marginRight: 10,
    marginLeft: 10,
    // marginBottom: 50,
  },
  imageContainer: {
    height: '55%',
    width: 145,
    borderRadius: 10,
    opacity: 2,
    justifyContent: 'center',
  },
  text: {
    color: Colors.black,
    flexDirection: 'column',
    marginLeft: 8,
    marginTop: 8,
    marginRight: 8,
    marginBottom: 5,
    // marginRight: 10,
  },
  mainContainer: {
    backgroundColor: Colors.main,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  Titletext: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.iconscolor,
    marginLeft: 20,
    marginTop: 10,
  },
  TotalContainer: {
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'column',
  },
  textContainer: {
    flexDirection: 'column',
  },
});
export default styles;
