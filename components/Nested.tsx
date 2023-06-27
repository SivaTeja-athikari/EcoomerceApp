import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Catalog from './Catalog';
import ProductDescription from './ProductDescription';

const Stack = createNativeStackNavigator();

export class Nested extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Catalog" component={Catalog} />
        <Stack.Screen
          name="ProductDescription"
          component={ProductDescription}
        />
      </Stack.Navigator>
    );
  }
}

export default Nested;
