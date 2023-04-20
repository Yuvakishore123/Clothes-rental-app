import {useState, useEffect} from 'react';
import {setRole} from '../../redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../constants/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';

const SwitchAccountButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  const userType = useSelector(state => state.Rolereducer.role);

  const [accountType, setAccountType] = useState(
    userType === 1 ? 'Owner' : 'Borrower',
  );

  useEffect(() => {
    setAccountType(userType === 1 ? 'Owner' : 'Borrower');
  }, [userType]);

  const handlePress = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionPress = option => {
    setAccountType(option);
    dispatch(setRole(option === 'Owner' ? 1 : 2));
    setShowOptions(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.button}
        accessibilityLabel={`Switch account type to ${
          accountType === 'Borrower' ? 'Owner' : 'Borrower'
        }`}>
        <Text style={styles.label}>Switch</Text>
        <IonIcon name="chevron-down" color={'#FFF'} size={20} />
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.options}>
          <TouchableOpacity
            onPress={() => handleOptionPress('Owner')}
            accessibilityLabel=" Owner">
            <View
              style={
                accountType === 'Owner'
                  ? styles.buttonContainer
                  : styles.buttonUnselected
              }>
              <Text
                style={
                  accountType === 'Owner'
                    ? styles.optionSelected
                    : styles.option
                }>
                {'Owner'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOptionPress('Borrower')}
            accessibilityLabel=" Borrower">
            <View
              style={
                accountType === 'Borrower'
                  ? styles.buttonContainer
                  : styles.buttonUnselected
              }>
              <Text
                style={
                  accountType === 'Borrower'
                    ? styles.optionSelected
                    : styles.option
                }>
                {'Borrower'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    // zIndex: 2,
    // justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E54AC',
    // borderWidth: 1,
    // borderColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 50,
    width: 100,
    marginLeft: 250,
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: '#3E54AC',
    borderRadius: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  options: {
    position: 'absolute',
    top: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 300,
    zIndex: 2,
    alignSelf: 'center',
    marginLeft: 45,
    marginTop: 8,
    alignItems: 'center',
    shadowColor: Colors.iconscolor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
    // color: '#FFF'
  },
  optionSelected: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
    color: '#FFF',
  },
  buttonContainer: {
    backgroundColor: Colors.iconscolor,
    width: 270,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonUnselected: {
    backgroundColor: Colors.white,
    width: 270,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SwitchAccountButton;
