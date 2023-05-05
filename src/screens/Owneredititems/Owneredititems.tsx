import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
} from 'react-native';
import axios from 'axios';
import {EditItemsUrl} from '../../constants/Apis';
import Useowneredititems from './Useowneredititems';
import GenderDropdown from '../../components/atoms/GenderDropdown';
import Ownerstyles from '../Additems/Additemsstyle';
import TypeDropdown from '../../components/atoms/TypeDropdown';
import EventsDropdown from '../../components/atoms/EventsDropdown';
import OutfitDropdown from '../../components/atoms/OutfitDropdown';
import OwnerImagestyles from '../OwnerImage/OwnerImagestyles';
import Sizeselection from '../../components/atoms/Sizeselect';
import Useownerimage from '../OwnerImage/Useownerimage';
import OwnerEditItemstyles from './Owneredititemsstyles';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import useEditItems from './useEdititems';
const App = () => {
  const [visible, setViisble] = useState(false);
  const {data, setEditProductId} = Useowneredititems();
  const {handleEditItems, itemsData, handleClick} = useEditItems();
  const [status, setStatus] = useState(1);
  const [hideId, setHideId] = useState(null);

  // const handleEdit = () => {
  //   setViisble(true);
  // };

  const handleVisibleModal = () => {
    setViisble(!visible);
    setHideId(null);
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={OwnerEditItemstyles.backContainer}>
            <Icons name="chevron-back" color={'#3E54AC'} size={30} />
            <Text style={OwnerEditItemstyles.backButtonText}>My Products</Text>
          </View>
        </TouchableOpacity>
        {data.map(item => {
          return (
            <>
              <View style={styles.item_course} key={item}>
                <View style={OwnerEditItemstyles.imagePriceContainer}>
                  <View style={OwnerEditItemstyles.cardImageContainer}>
                    <Image
                      style={OwnerEditItemstyles.cardImage}
                      source={{uri: item.image}}
                    />
                  </View>
                  <View style={OwnerEditItemstyles.priceContainer}>
                    <Text style={styles.txt_name}>{item.name}</Text>
                    <Text style={styles.txt_item}>₹ {item.price}</Text>
                  </View>
                </View>
                <View style={OwnerEditItemstyles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => handleClick()}
                    onPressIn={() => setEditProductId(item.id)}>
                    <View style={OwnerEditItemstyles.button}>
                      <Text style={styles.txt_edit}>Edit</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleClick}>
                    <View style={OwnerEditItemstyles.button}>
                      <Text onPress={handleEditItems} style={styles.txt_del}>
                        Delete
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  form: {
    // padding: 15,
    // backgroundColor : "#e3e3e3",
    marginTop: 10,
    backgroundColor: Colors.main,
  },

  txtClose: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'right',
    marginRight: 15,
    color: Colors.iconscolor,
  },
  text_input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 10,
  },
  header_container: {
    // padding: 15,
    // backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt_main: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  item_course: {
    // padding: 15,
    marginLeft: 30,
    marginTop: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#e2e2e2',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  txt_name: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: '600',
    color: '#3E54ACCC',
  },
  txt_item: {
    fontSize: 10,
    // marginTop: 5,
    fontWeight: '600',
    color: '#3E54AC99',
  },
  txt_enabled: {
    fontSize: 14,
    marginTop: 5,
    color: 'green',
    fontWeight: 'bold',
  },
  txt_disabled: {
    fontSize: 14,
    marginTop: 5,
    color: 'green',
    fontWeight: 'bold',
  },
  txt_del: {
    fontSize: 15,
    // marginTop: 5,
    color: 'white',
    fontWeight: '500',
  },
  txt_edit: {
    fontSize: 15,
    // marginTop: 5,
    color: 'white',
    fontWeight: '500',
  },
  btnContainer: {
    display: 'flex',
    padding: 15,
    backgroundColor: '#000',
    marginTop: 20,
  },
  btnNewContainer: {
    padding: 10,
    backgroundColor: '#000',
  },
  textButton: {
    textAlign: 'center',
    color: '#FFF',
  },
});
