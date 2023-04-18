import {Image, View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import styles from './Owneredititemsstyles';
import Mainbutton from '../../components/atoms/MainButton';
import useEdititems from './Useowneredititems';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../Ownereditprofile/Ownereditprofilestyle';
import {useNavigation} from '@react-navigation/native';

const Owneredititems = () => {
  const navigation = useNavigation();
  const {data} = useEdititems();

  if (!data || data.length === 0) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Image
          source={require('../../../Assets/LoginImage.png')}
          style={{
            height: 200,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <Text>The Items are Loading...</Text>
      </View>
    );
  }

  const handleEdit = (productDetails: any) => {
    navigation.navigate('Additems', {productDetails});
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: Colors.main,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={style.backBtn}>
            <MaterialCommunityIcons
              name="arrow-left"
              color={Colors.iconscolor}
              onPress={() => {
                navigation.navigate('OwnerProfile');
              }}
              size={26}
            />
          </TouchableOpacity>
          <Text style={styles.Titletext}>Edit Items</Text>
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.Container}>
            {data.map(item => (
              <View key={item.id} style={styles.card}>
                <Image
                  style={styles.imageContainer}
                  source={{uri: item.image}}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>Rs {item.price}</Text>
                </View>
                <View style={styles.buttenContainer}>
                  <TouchableOpacity onPress={() => handleEdit(item)}>
                    <View
                      style={{
                        backgroundColor: Colors.green,
                        borderRadius: 5,
                        height: 25,
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 8,
                      }}>
                      <Text>Edit</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: Colors.red,
                        borderRadius: 5,
                        height: 25,
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>Delete</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Owneredititems;
