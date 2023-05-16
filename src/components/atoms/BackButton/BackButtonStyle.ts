import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  headerS: {
    marginTop: 23,

    justifyContent: 'space-between',
    paddingHorizontal: 10,
    zIndex: 1,
    marginLeft: 10,
  },

  backButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redCircle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default style;
