import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  btnfield: {
    position: 'absolute',
    width: 330,
    height: 59,
    left: 26,
    top: 650,
    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  dbtnfield: {
    position: 'absolute',
    width: 330,
    height: 59,
    left: 26,
    top: 370,
    backgroundColor: '#3E54AC',
    borderRadius: 8,
    elevation: 10,
  },
  btntext: {
    position: 'absolute',
    left: 120,
    top: 15,
    height: 29,
    width: 104,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
  },
  dheader: {
    marginTop: -30,
    top: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 1,
    marginLeft: 15,
  },
  detailsContainer: {
    height: '100%',
    width: '100%',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.main,
    flex: 20,
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: 'white',
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headTxt: {
    width: 276,
    top: 265,
    left: 95,
    fontSize: 64,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#3E54AC',
  },
  headphoto: {
    position: 'absolute',
    width: 186,
    height: 173,
    left: 95,
    top: 288,
  },
  headingtext: {
    fontSize: 20,
    // fontWeight: '900',
    fontFamily: 'Poppins-SemiBold',
    color: Colors.white,
    // width: '80%',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  startext: {
    marginTop: -70,
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // shadowRadius: 90,
    // shadowOpacity: 0.9,
    marginLeft: 10,
    // fontWeight: '700',
    zIndex: 1,
    fontSize: 35,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Shadow color
    textShadowOffset: {width: -1, height: 1}, // Shadow offset
    textShadowRadius: 5, // Shadow blur radius
  },
  title: {
    fontFamily: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  detailsdescription: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '400',
    color: Colors.buttonColor,
  },
  sizelabel: {
    width: 200,
    height: 48.66,
    left: 20,
    top: 480,
  },
  sizebutton: {
    width: 60,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(62, 84, 172, 0.65)',
    borderRadius: 3,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizebuttontext: {
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3E54AC',
  },
  datePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 9,
  },
  dateInput: {
    fontSize: 16,
  },
  categoriesslidescontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    marginTop: 20,
    width: 350,
    height: 100,
    margin: 10,
    marginLeft: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '110%',
  },
  cardImagetextView: {
    position: 'absolute',
    top: '90%',
    left: '55%',
    transform: [{translateX: -50}, {translateY: -50}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardtext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'poppins',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 45,
    paddingRight: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#3E54AC',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 100,
    color: '#3E54AC',
  },
  searchIcon: {
    position: 'absolute',
    top: 12.5,
    left: 35,
    zIndex: 1,
    opacity: 0.5,
  },
});
export default styles;
