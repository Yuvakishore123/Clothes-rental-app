/* eslint-disable react/react-in-jsx-scope */
import {useState, useEffect, SetStateAction} from 'react';
import {setRole} from '../../redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../constants/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from '../../constants/Apis';
const SwitchAccountButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  const userType = useSelector(state => state.Rolereducer.role);
  const [accountType, setAccountType] = useState(
    userType === 'borrower' ? 'borrower' : 'owner',
  );
  useEffect(() => {
    setAccountType(userType === 'owner' ? 'owner' : 'borrower');
  }, [userType]);
  const handlePress = () => {
    setShowOptions(!showOptions);
  };
  const handleOptionPress = async (option: SetStateAction<string>) => {
    try {
      setShowOptions(false);
      const token = await AsyncStorage.getItem('token');
      const response = await axios.post(
        `${url}/user/switch?profile=${option}`,
        null,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 200) {
        const newToken = response.headers.access_token;
        await AsyncStorage.removeItem('token');
        await AsyncStorage.setItem('token', newToken);
        console.log(newToken);
        // dispatch(setRole(option === 'borrower' ? 'borrower' : 'owner'));
        dispatch(setRole(option));
        setAccountType(option);
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.button}
        accessibilityLabel={`Switch account type to ${
          accountType === 'borrower' ? 'owner' : 'borrower'
        }`}>
        <Text style={styles.label}>{accountType}</Text>
        <IonIcon
          name="chevron-down"
          color={'#FFF'}
          size={20}
          marginRight={90}
        />
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.options}>
          <TouchableOpacity
            onPress={() => handleOptionPress('borrower')}
            accessibilityLabel="borrower">
            <View
              style={
                accountType === 'borrower'
                  ? styles.buttonContainer
                  : styles.buttonUnselected
              }>
              <Text
                style={
                  accountType === 'borrower'
                    ? styles.optionSelected
                    : styles.option
                }>
                {'borrower'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOptionPress('owner')}
            accessibilityLabel="owner">
            <View
              style={
                accountType === 'owner'
                  ? styles.buttonContainer
                  : styles.buttonUnselected
              }>
              <Text
                style={
                  accountType === 'owner'
                    ? styles.optionSelected
                    : styles.option
                }>
                {'owner'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: '#000000',
    borderRadius: 100,
    height: 50,
    width: '50%',
    marginLeft: 100,
    marginTop: 10,
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: 'white',
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
    // fontWeight: 'bold',
    marginTop: 3,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginLeft: 100,
    color: 'white',
  },
  options: {
    position: 'absolute',
    top: '100%',
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(5, 5, 5, 0.5)',
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
    // elevation: 5,
  },
  option: {
    fontWeight: '700',
    fontSize: 16,
    paddingVertical: 5,
    color: Colors.white,
  },
  optionSelected: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
    color: '#000000',
  },
  buttonContainer: {
    backgroundColor: Colors.buttonColor,
    width: 270,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonUnselected: {
    backgroundColor: '#000000',
    marginTop: 3,
    marginBottom: 3,
    width: 270,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SwitchAccountButton;
