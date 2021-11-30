import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
export function Product({name, price, icon, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={icon}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}.00</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thumb: {
    flex: 0.2,
    height: 70,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.8,
    padding: 16,
  },
  name: {
    flex: 0.7,
    color: 'black',    
    fontSize: 18,
    textAlign: 'center',
  },
  price: {
    flex: 0.2,
    color: 'black',
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
});