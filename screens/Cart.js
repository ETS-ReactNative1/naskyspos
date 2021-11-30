import React, { useEffect, useState, useContext } from 'react';
import { render } from 'react-dom';
import { View, Text, Button, FlatList, StyleSheet, TextInput } from 'react-native';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import { CartContext } from '../CartContext';
export function Cart ({navigation}) {
const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
const [cash, setcash] = React.useState('');

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });

    var c = parseInt({cash});
    var t = {total};
    var bal = c - t

    return (
      <View>
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>GH₵ {total}</Text>
       </View>
       <View style={styles.fittext}>
       <TextInput
       style={styles.input}
       onChangeText={(cash) => setcash(cash)}
       value={cash}
       keyboardType="numeric"
       />
       <Text style={styles.bal}>Balance:{'\n'}</Text>
       </View>
       </View>
    );

  };
function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>GH₵ {item.totalPrice}</Text>
       </View>
    );
  };

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
    
  );

  

    
};
  
const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  CheckoutBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "25%",
    marginTop: "10%",
    backgroundColor: "black",
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  },
  input: {
    marginTop: "20%",
    flex: 0.2,
    fontSize: 22,
    height: 50,
    shadowColor: "#f19c5b",
    padding: 10,
    borderWidth: 1,
    borderColor: '#f19c5b',
  },
  fittext: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 10,
    marginBottom: "20%"
  },
  bal: {
    marginTop: "20%",
    flex: 0.5,
    fontSize: 30,
    textAlign: 'right',
  },
});