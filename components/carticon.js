import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CartContext } from '../CartContext';
export const carticon = ({route}) => {
  const {getItemsCount} = useContext(CartContext);
  const {onRemoveFromCart} = useContext(CartContext);
  const {onAddToCart} = useContext(CartContext);
  return (
    <TouchableOpacity>
      <Text style={styles.text} 
        onPress={onRemoveFromCart()}
      >-</Text>
      <Text style={styles.text}>
          ({getItemsCount()})
          </Text>
      <Text style={styles.text} 
        onPress={onAddToCart()}
      >+</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'black',
    height: 32,
    width: 80,
    padding: 5,
    borderRadius: 32/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});