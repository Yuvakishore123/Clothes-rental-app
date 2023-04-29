import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF2FF',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  TextTotal: {
    fontWeight: 'semibold',
    height: 29,
    width: 130,
    top: 5,
    color: '#3E54AC',
  },
  TextGrand: {
    fontWeight: 'semibold',
    height: 29,
    width: 130,
    top: -20,
    left: 20,
    color: '#3E54AC',
    fontSize: 18,
  },
  PaymentButton: {
    height: 59,
    width: 320,
    backgroundColor: '#3E54AC',
    margin: 15,
    marginTop: 10,
    marginLeft: 25,
    borderRadius: 8,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PaymentButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: -390,
    width: 355,
    height: 452,
    top: 30,
    backgroundColor: '#3E54AC1A',
    borderRadius: 5,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#3E54AC',
    width: 34,
    height: 29,
    left: 25,
    top: -40,
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: '#3E54AC1A',
    backgroundColor: '#3E54AC1AA',
    borderRadius: 5,
    padding: 10,
    height: 160,
    width: 330,
    left: 30,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContaineramount: {
    borderWidth: 1,
    borderColor: '#3E54AC1A',
    backgroundColor: '#3E54AC1A',
    borderRadius: 5,
    padding: 10,
    height: 48,
    width: 355,
    left: 20,
    top: -10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  priceText: {
    fontSize: 8,
    fontWeight: 'bold',
    // marginBottom: 10,
    top: 55,
    left: 12,
    color: '#3E54AC',
  },
  priceTotalText: {
    fontSize: 12,
    fontWeight: 'bold',
    left: 130,
    color: '#3E54AC',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: -47,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 60,
    paddingVertical: 5,
    borderRadius: 5,
    // height: 10,
  },
  buttonSize: {
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderRadius: 5,
    top: 29,
    left: -310,
    borderColor: '#3E54AC',
    height: 19,
    width: 19,
  },
  buttonRentTo: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    left: -75,
    borderColor: '#3E54AC',
    borderWidth: 1,
    width: 57,
    height: 18,
    marginLeft: 25,
    top: -12,
  },
  buttonRentFrom: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    left: -15,
    width: 57,
    borderColor: '#3E54AC',
    borderWidth: 1,
    height: 18,
    marginRight: 25,
    top: -12,
    left: -95,
  },
  buttonQuantity: {
    backgroundColor: '#fff',
    paddingHorizontal: 2,
    paddingVertical: 2,
    height: 18,
    width: 18,
    borderRadius: 5,
    borderColor: '#3E54AC',
    borderWidth: 1,
    top: 55,
    left: -190,
  },
  buttonText: {
    fontSize: 9,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
  },
  TextSize: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#3E54AC',
    top: 10,
    left: -289,
  },
  TextSizeTo: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#3E54AC',
    top: -10,
    left: -110,
  },
  TextItemname: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#3E54AC',
    top: -30,
    left: -10,
    width: 70,
    height: 69,
  },
  TextRentfrom: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#3E54AC',
    top: -10,
    left: -75,
    width: 70,
    height: 69,
  },
  buttonTextRentfrom: {
    fontSize: 5,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    alignContent: 'center',
  },
  buttonTextRentto: {
    fontSize: 5,
    fontWeight: 'bold',
    // marginLeft: 5,
    // marginRight: 5,
    alignContent: 'center',
    left: 8,
  },
  buttonSizeText: {
    fontSize: 6,
    fontWeight: 'bold',
    top: -1,
  },
  buttonTextIncrement: {
    fontSize: 12,
    fontWeight: 'bold',
    top: -3,
    left: 3,
  },
  buttonTextDecrement: {
    fontSize: 12,
    fontWeight: 'bold',
    top: -3,
    left: 3,
  },
  quantityText: {
    fontSize: 14,
    marginHorizontal: 10,
    fontWeight: 'bold',
    top: 55,
    left: -190,
  },
  activeButtonText: {
    color: '#fff',
    backgroundColor: '#3E54AC',
    height: 17,
    width: 17,
    borderRadius: 5,
    top: -5,
    left: -6,
  },
});
export default styles;
