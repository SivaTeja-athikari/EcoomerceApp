import {Text, View} from 'react-native';
import React, {Component} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Wedding from './Wedding';
import Decor from './Decor';
import Gift from './Gift';

const Tab = createMaterialTopTabNavigator();

export class TopTab extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarStyle: {
            backgroundColor: '#e1e0e0',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#9682B6',
            height: 50,
            borderRadius: 7,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarStyle: {
              borderRightWidth: 1,
              borderRightColor: '#2E2D2D',
            },
            tabBarActiveTintColor: '#F4F4F4',
            tabBarInactiveTintColor: '#2E2D2D',
            tabBarLabel: 'Wedding',
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: '400',
              textTransform: 'capitalize',
            },
          }}
          name="Wedding"
          component={Wedding}
        />
        <Tab.Screen
          options={{
            title: 'Decor',
            tabBarActiveTintColor: '#F4F4F4',
            tabBarInactiveTintColor: '#2E2D2D',

            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: '400',
              textTransform: 'capitalize',
            },
          }}
          name="Decor"
          component={Decor}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#F4F4F4',
            tabBarInactiveTintColor: '#2E2D2D',

            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: '400',
              textTransform: 'capitalize',
            },
          }}
          name="Gift"
          component={Gift}
        />
      </Tab.Navigator>
    );
  }
}

export default TopTab;
