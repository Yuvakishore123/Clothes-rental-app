import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import styles from './OwnerHomestyle';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Useownerhome from './Useownerhome';
import Mainbutton from '../../components/atoms/MainButton';
import Ownerstyles from '../Additems/Additemsstyle';
import OwnerImagestyles from '../OwnerImage/OwnerImagestyles';
type Props = {
  route: {name: string};
  navigation: any;
};
export default function OwnerHome({navigation}: Props) {
  const {products, handleAdditems, handleMyrentals} = Useownerhome();
  if (!products) {
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
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <Text style={styles.headertxt}>Welcome John</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.rentalitemscard}>
          <Text style={styles.renteditems1}>Rented Items</Text>
          <Text style={styles.renteditems2}>Total Earnings</Text>
        </View>
        <View style={styles.rentalitemscard}>
          <Text style={styles.cardsrentalprices}>100</Text>
          <Text style={styles.cardsTotalprices}>2000</Text>
        </View>
      </View>
      <View>
        <Text style={styles.headertxt}>Recently Added</Text>
      </View>
      <View>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.id}
              style={styles.recentlyaddedcard}
              onPress={() =>
                navigation.navigate('OproductDetails', {product: item})
              }>
              <View style={styles.cardContainer}>
                <Image
                  source={{uri: item.imageURL}}
                  style={styles.recentlyaddedimage}
                />
              </View>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>{item.description}</Text>
                <Text style={styles.cardText}>₹ {item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        {/* <View style={styles.touchableContainer}>
          <TouchableOpacity
            onPress={handleAdditems}
            style={OwnerImagestyles.touchableContainer}>
            <Text style={Ownerstyles.touchableText}>Add Items</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleMyrentals}
            style={OwnerImagestyles.touchableContainer}>
            <Text style={Ownerstyles.touchableText}>My rentals</Text>
          </TouchableOpacity>
        </View> */}
        {/* <Mainbutton onPress={() => navigation.navigate(OwnerHome)} /> */}
      </View>
      {/* <View>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.id}
              style={styles.recentlyaddedcard}
              onPress={() =>
                navigation.navigate('OproductDetails', {product: item})
              }>
              <Image
                source={{uri: item.imageURL}}
                style={styles.recentlyaddedimage}
              />
              <View></View>
              <View style={styles.cardText}>
                <Text style={styles.cardText}>{item.description}</Text>
                <Text style={styles.cardText}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View> */}
      <View>
        <Text style={styles.headertxt}>Rental History</Text>
      </View>
      <View>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            // Check if it's an even index to render 2 products side by side
            if (index % 2 === 0) {
              return (
                <View style={styles.row}>
                  <TouchableOpacity
                    key={item.id}
                    style={styles.recentlyaddedcard}
                    onPress={() =>
                      navigation.navigate('OproductDetails', {product: item})
                    }>
                    <Image
                      source={{uri: item.imageURL}}
                      style={styles.recentlyaddedimage}
                    />
                    <View style={styles.cardTextContainer}>
                      <Text style={styles.cardText}>{item.description}</Text>
                      <Text style={styles.cardText}>₹ {item.price}</Text>
                    </View>
                  </TouchableOpacity>
                  {products[index + 1] && (
                    <TouchableOpacity
                      key={products[index + 1].id}
                      style={styles.recentlyaddedcard}
                      onPress={() =>
                        navigation.navigate('OproductDetails', {
                          product: products[index + 1],
                        })
                      }>
                      <Image
                        source={{uri: products[index + 1].imageURL}}
                        style={styles.recentlyaddedimage}
                      />
                      <View style={styles.cardTextContainer}>
                        <Text style={styles.cardText}>
                          {products[index + 1].description}
                        </Text>
                        <Text style={styles.cardText}>
                          ₹ {products[index + 1].price}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }
            // Render only 1 product for odd indices
            return null;
          }}
        />
        <View style={styles.touchableContainer}>
          <TouchableOpacity
            onPress={handleAdditems}
            style={OwnerImagestyles.touchableContainer}>
            <Text style={Ownerstyles.touchableText}>Add Items</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleMyrentals}
            style={OwnerImagestyles.touchableContainer}>
            <Text style={Ownerstyles.touchableText}>My rentals</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}






























// import React from 'react';
// import {FlatList, Image, TouchableOpacity, View} from 'react-native';
// import styles from './OwnerHomestyle';
// import {Text} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
// import Useownerhome from './Useownerhome';
// type Props = {
//   route: {name: string};
//   navigation: any;
// };
// export default function OwnerHome({navigation}: Props) {
//   const {products} = Useownerhome();
//   if (!products) {
//     return (
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '100%',
//         }}>
//         <Image
//           source={require('../../../Assets/LoginImage.png')}
//           style={{
//             height: 200,
//             width: 200,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         />
//         <Text>The Items are Loading...</Text>
//       </View>
//     );
//   }
//   return (
//     <ScrollView style={styles.mainContainer}>
//       <View>
//         <Text style={styles.headertxt}>Welcome John</Text>
//       </View>
//       <View style={styles.card}>
//         <Text style={styles.title}>Dashboard</Text>
//         <View style={styles.rentalitemscard}>
//           <Text style={styles.renteditems1}>Rented Items</Text>
//           <Text style={styles.renteditems2}>Total Earnings</Text>
//         </View>
//         <View style={styles.rentalitemscard}>
//           <Text style={styles.cardsrentalprices}>100</Text>
//           <Text style={styles.cardsTotalprices}>2000</Text>
//         </View>
//       </View>
//       <View>
//         <Text style={styles.headertxt}>Recently Added</Text>
//       </View>
//       <View>
//         <FlatList
//           data={products}
//           keyExtractor={item => item.id.toString()}
//           horizontal={true}
//           renderItem={({item}) => (
//             <TouchableOpacity
//               key={item.id}
//               style={styles.recentlyaddedcard}
//               onPress={() =>
//                 navigation.navigate('OproductDetails', {product: item})
//               }>
//               <View style={styles.cardContainer}>
//                 <Image
//                   source={{uri: item.imageURL}}
//                   style={styles.recentlyaddedimage}
//                 />
//               </View>
//               <View style={styles.cardTextContainer}>
//                 <Text style={styles.cardText}>{item.description}</Text>
//                 <Text style={styles.cardText}>₹ {item.price}</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//       {/* <View>
//         <FlatList
//           data={products}
//           keyExtractor={item => item.id}
//           horizontal={true}
//           renderItem={({item}) => (
//             <TouchableOpacity
//               key={item.id}
//               style={styles.recentlyaddedcard}
//               onPress={() =>
//                 navigation.navigate('OproductDetails', {product: item})
//               }>
//               <Image
//                 source={{uri: item.imageURL}}
//                 style={styles.recentlyaddedimage}
//               />
//               <View></View>
//               <View style={styles.cardText}>
//                 <Text style={styles.cardText}>{item.description}</Text>
//                 <Text style={styles.cardText}>{item.price}</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View> */}
//       <View>
//         <Text style={styles.headertxt}>Rental History</Text>
//       </View>
//       <View>
//         <FlatList
//           data={products}
//           keyExtractor={item => item.id}
//           renderItem={({item, index}) => {
//             // Check if it's an even index to render 2 products side by side
//             if (index % 2 === 0) {
//               return (
//                 <View style={styles.row}>
//                   <TouchableOpacity
//                     key={item.id}
//                     style={styles.recentlyaddedcard}
//                     onPress={() =>
//                       navigation.navigate('OproductDetails', {product: item})
//                     }>
//                     <Image
//                       source={{uri: item.imageURL}}
//                       style={styles.recentlyaddedimage}
//                     />
//                     <View style={styles.cardTextContainer}>
//                       <Text style={styles.cardText}>{item.description}</Text>
//                       <Text style={styles.cardText}>₹ {item.price}</Text>
//                     </View>
//                   </TouchableOpacity>
//                   {products[index + 1] && (
//                     <TouchableOpacity
//                       key={products[index + 1].id}
//                       style={styles.recentlyaddedcard}
//                       onPress={() =>
//                         navigation.navigate('OproductDetails', {
//                           product: products[index + 1],
//                         })
//                       }>
//                       <Image
//                         source={{uri: products[index + 1].imageURL}}
//                         style={styles.recentlyaddedimage}
//                       />
//                       <View style={styles.cardTextContainer}>
//                         <Text style={styles.cardText}>
//                           {products[index + 1].description}
//                         </Text>
//                         <Text style={styles.cardText}>
//                           ₹ {products[index + 1].price}
//                         </Text>
//                       </View>
//                     </TouchableOpacity>
//                   )}
//                 </View>
//               );
//             }
//             // Render only 1 product for odd indices
//             return null;
//           }}
//         />
//       </View>
//     </ScrollView>
//   );
// }
