import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {OwnerAddressCustomHook} from './Useowneraddress';
import style from './Owneraddressstyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Owneraddresspage = () => {
  const {
    addressList,
    handleOwnerAddAddress,
    handleDeleteAddress,
    goBackButton,
  } = OwnerAddressCustomHook();
  const [storedData, setStoredData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('addressList');
        if (jsonValue !== null) {
          setStoredData(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    const storeData = async (value: any) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('addressList', jsonValue);
      } catch (e) {
        console.log(e);
      }
    };
    storeData(storedData);
  }, [storedData]);
  return (
    <View>
      <View style={style.header}>
        <View style={style.addAddressHeader}>
          <TouchableOpacity style={style.backBtn} onPress={goBackButton}>
            <MaterialIcons
              color={Colors.iconscolor}
              size={26}
              name="arrow-back-ios"
            />
          </TouchableOpacity>
          <Text style={style.addAddressText}>Add Address</Text>
        </View>
        <TouchableOpacity
          style={style.btnContainer}
          onPress={handleOwnerAddAddress}>
          <Text style={style.btnText}>Add Address</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addressList}
        renderItem={({item, index}) => {
          return (
            <View style={style.card}>
              <View>
                <Text style={style.city}>
                  {'address:' + item.adddressLine1}
                </Text>
                <Text style={style.input}>{'state:' + item.state}</Text>
                <Text style={style.input}>
                  {'postalCode:' + item.postalCode}
                </Text>
                <Text style={style.stateName}>{'City:' + item.city}</Text>
                <Text style={style.stateName}>
                  {'Address Type:' + item.addressType}
                </Text>
              </View>
              <TouchableOpacity
                style={style.deleteBtn}
                onPress={() => {
                  handleDeleteAddress(index);
                }}>
                <Text style={style.deleteBtnText}>Delete Address</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Owneraddresspage;

// import React from 'react';
// import {Text, TouchableOpacity, View, Image} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
// // import {useAddress} from './useAddress';
// import {OwnerAddressCustomHook} from './Useowneraddress';
// import style from './Owneraddressstyle';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// const Owneraddresspage = () => {
//   const {
//     addressList,
//     handleOwnerAddAddress,
//     handleDeleteAddress,
//     goBackButton,
//   } = OwnerAddressCustomHook();
//   return (
//     <View>
//       <View style={style.header}>
//         <View style={style.addAddressHeader}>
//           <TouchableOpacity style={style.backBtn} onPress={goBackButton}>
//             <MaterialCommunityIcons
//               name="arrow-left"
//               color={Colors.iconscolor}
//               size={26}
//             />
//           </TouchableOpacity>
//           <Text style={style.addAddressText}>Add Address</Text>
//         </View>
//         <TouchableOpacity
//           style={style.btnContainer}
//           onPress={handleOwnerAddAddress}>
//           <Text style={style.btnText}>Add Address</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={addressList}
//         renderItem={({item, index}) => {
//           return (
//             <View style={style.card}>
//               <View>
//                 <Text style={style.city}>
//                   {'address:' + item.adddressLine1}
//                 </Text>
//                 <Text style={style.input}>{'state:' + item.state}</Text>
//                 <Text style={style.input}>
//                   {'postalCode:' + item.postalCode}
//                 </Text>
//                 <Text style={style.stateName}>{'Country:' + item.country}</Text>
//               </View>
//               <TouchableOpacity
//                 style={style.deleteBtn}
//                 onPress={() => {
//                   handleDeleteAddress(id, index);
//                 }}>
//                 <Text style={style.deleteBtnText}>Delete Address</Text>
//               </TouchableOpacity>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };
// export default Owneraddresspage;
