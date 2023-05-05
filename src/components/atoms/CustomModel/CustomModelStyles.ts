import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 400,
    height: 340,
    marginTop: 500,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: '#3E54AC',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default style;
