import {Text, View} from 'react-native';
import React, {Component} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Home1 from './Home1';
import Search from './Search';
import Feed from './Feed';
import Playlist from './Playlist';

const Tab = createBottomTabNavigator();

export class Bottom extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 75,
            paddingTop: 5,
            backgroundColor: '#100724',
          },
          tabBarActiveTintColor: '#844DFB',
          tabBarInactiveTintColor: '#E4DEEF',
        }}>
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#844DFB',
            tabBarInactiveTintColor: '#adadad',
            tabBarIcon: ({focused}) => (
              <Entypo
                name="home"
                size={30}
                color={focused ? '#844DFB' : '#E4DEEF'}
              />
            ),
            tabBarLabel: 'Home',
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '400',

              paddingBottom: 11,
              paddingTop: 11,
            },
          }}
          name="Home1"
          component={Home1}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="search-sharp"
                size={30}
                color={focused ? '#844DFB' : '#E4DEEF'}
              />
            ),
            tabBarLabel: 'Search',
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '400',

              paddingBottom: 11,
              paddingTop: 11,
            },
          }}
          name="Search"
          component={Search}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="group"
                size={30}
                color={focused ? '#844DFB' : '#E4DEEF'}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '400',

              paddingBottom: 11,
              paddingTop: 11,
            },
          }}
          name="Feed"
          component={Feed}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="library-music"
                size={30}
                color={focused ? '#844DFB' : '#E4DEEF'}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '400',

              paddingBottom: 11,
              paddingTop: 11,
            },
          }}
          name="Playlist"
          component={Playlist}
        />
      </Tab.Navigator>
    );
  }
}

export default Bottom;
