// import React, {useState, useEffect} from 'react';
// import {Text, TouchableOpacity, View, Image} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {OwnerAddressCustomHook} from './Useowneraddress';
// import style from './Owneraddressstyle';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// const Owneraddresspage = () => {
//   const {
//     addressList,
//     handleOwnerAddAddress,
//     handleDeleteAddress,
//     goBackButton,
//   } = OwnerAddressCustomHook();
//   const [storedData, setStoredData] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const jsonValue = await AsyncStorage.getItem('addressList');
//         if (jsonValue !== null) {
//           setStoredData(JSON.parse(jsonValue));
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getData();
//   }, []);
//   useEffect(() => {
//     const storeData = async (value: any) => {
//       try {
//         const jsonValue = JSON.stringify(value);
//         await AsyncStorage.setItem('addressList', jsonValue);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     storeData(storedData);
//   }, [storedData]);
//   return (
//     <View>
//       <View style={style.header}>
//         <View style={style.addAddressHeader}>
//           <TouchableOpacity style={style.backBtn} onPress={goBackButton}>
//             <MaterialIcons
//               color={Colors.iconscolor}
//               size={26}
//               name="arrow-back-ios"
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
//                 <Text style={style.stateName}>{'City:' + item.city}</Text>
//                 <Text style={style.stateName}>
//                   {'Address Type:' + item.addressType}
//                 </Text>
//               </View>
//               <TouchableOpacity
//                 style={style.deleteBtn}
//                 onPress={() => {
//                   handleDeleteAddress(index);
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
//============================================

import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {OwnerAddressCustomHook} from './Useowneraddress';
import style from './Owneraddressstyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
const Owneraddresspage = () => {
  const [address, setAddress] = useState(['wait']);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    axios
      .get(
        'http://d38a-122-171-148-208.ngrok-free.app/api/v1/address/2f93efb5-8c32-45e6-a093-7cddc02e7710',
      )
      .then(response => {
        console.log(response.data + 'in this page');
        setAddress(response.data);
        setFlag(true);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log('---------------');
  console.log(address[0].addressLine1);
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
    <>
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
        {flag ? (
          <View>
            <View
              style={{
                backgroundColor: '#ECF2FF',
                width: '100%',
                borderWidth: 0.2,
                borderColor: '#8E8E8E',
                // backgroundColor: 'pink',
                alignSelf: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 30,
                borderRadius: 5,
                shadowOffset: {
                  width: 0,
                  height: 40,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <View>
                <Text>{address[4].addressLine1}</Text>
                {/* {"Hello",console.log(address[0].addressLine1)} */}
                <Text>{address[3].addressLine2}</Text>
                <Text>{address[3].city}</Text>
                <Text>{address[3].addressType}</Text>
                <Text>{address[3].postalCode}</Text>
                <Text>{address[3].state}</Text>
              </View>
              <TouchableOpacity
                style={style.deleteBtn}
                onPress={() => {
                  handleDeleteAddress(index);
                }}>
                <Text style={style.deleteBtnText}>Delete Address</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Text>wait...</Text>
        )}
        {/* <View style={style.header}>
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
        </View> */}
        <FlatList
          data={addressList}
          renderItem={({item, index}) => {
            return (
              <View style={style.card}>
                <View>
                  <Text style={style.city}>
                    {'address:' + address[0].addressLine1}
                  </Text>
                  <Text style={style.input}>
                    {'state:' + address[0].addressLine2}
                  </Text>
                  <Text style={style.input}>
                    {'postalCode:' + address[0].postalCode}
                  </Text>
                  <Text style={style.stateName}>
                    {'City:' + address[0].city}
                  </Text>
                  <Text style={style.stateName}>
                    {'Address Type:' + address[3].addressType}
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
    </>
  );
};
export default Owneraddresspage;
