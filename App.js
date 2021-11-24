import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Ionicons} from '@expo/vector-icons';
import stock from './screens/stock.js';
import menu from './screens/menu.js';

const Stack = createNativeStackNavigator();
function App() {
  return (
    //CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='stock' component={stock} 
          options={({ navigation }) => ({
            title: 'STOCK',
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerTitle,
            })} />
          <Stack.Screen name='menu' component={menu} 
          options={({ navigation }) => ({
            title: "NASKY'S",
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <Ionicons style={styles.morebutton} name='ios-menu' size={28} onPress={() => {navigation.navigate('stock');}}/>
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    //CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#f09b5a'
  },
  morebutton:{
    marginRight: '2%',
  }
});
export default App;