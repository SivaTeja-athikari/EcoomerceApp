import {Text, View} from 'react-native';
import React, {Component} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Catalog from './Catalog';
import Chat from './Chat';
import Cart from './Cart';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import Nested from './Nested';

const Tab = createBottomTabNavigator();

export class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 75,
            paddingTop: 5,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#4B194F',
            tabBarInactiveTintColor: '#adadad',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="home-sharp"
                size={30}
                color={focused ? '#4B194F' : '#adadad'}
              />
            ),
            tabBarLabel: 'Home',
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '400',
              color: '#4B194F',
              paddingBottom: 11,
              paddingTop: 11,
            },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="book"
                size={30}
                color={focused ? '#4B194F' : '#adadad'}
              />
            ),
            tabBarLabel: 'Catalog',
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '400',
              color: '#4B194F',
              paddingBottom: 11,
              paddingTop: 11,
            },
          }}
          name="Nested"
          component={Nested}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="chatbubble-sharp"
                size={30}
                color={focused ? '#4B194F' : '#adadad'}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '400',
              color: '#4B194F',
              paddingBottom: 11,
              paddingTop: 11,
            },
          }}
          name="Chat"
          component={Chat}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Feather
                name="shopping-cart"
                size={30}
                color={focused ? '#4B194F' : '#adadad'}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '400',
              color: '#4B194F',
              paddingBottom: 11,
              paddingTop: 11,
            },
          }}
          name="Cart"
          component={Cart}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTab;
