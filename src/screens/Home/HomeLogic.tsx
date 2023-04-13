import styles from './Homestyle';
import {TouchableOpacity} from 'react-native';
import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import UseHome from './UseHome';
function Homelogic() {
  const {products} = UseHome();
  if (!products) {
    return <Text>Loading products...</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      {products.map(
        (product: {
          id: React.Key | null | undefined;
          image: any;
          name:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <TouchableOpacity key={product.id} style={styles.card}>
            <Image source={{uri: product.image}} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>{product.name}</Text>
              {/* <Text style={styles.cardText}>{product.description}</Text> */}
            </View>
          </TouchableOpacity>
        ),
      )}
    </ScrollView>
  );
}
export default Homelogic;
