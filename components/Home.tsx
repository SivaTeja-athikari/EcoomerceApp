import {Text, View, Dimensions} from 'react-native';
import React, {Component} from 'react';
import TopTab from './TopTab';

import Feather from 'react-native-vector-icons/dist/Feather';

interface IProps {
  navigation: any;
}
interface IState {}

export class Home extends Component<IProps, IState> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F4F4F4', padding: 16}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#2E2D2D',
            letterSpacing: 2,
            fontSize: 18,
            fontFamily: 'NATS',
            paddingTop: 20,
            paddingBottom: 10,
          }}>
          FLORIST
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 16,
            paddingBottom: 22,
          }}>
          <Text style={{color: '#2E2D2D', fontSize: 28, fontWeight: '400'}}>
            Welcome!
          </Text>
          <Feather name="user" size={28} color="#2E2D2D" />
        </View>
        <TopTab />
      </View>
    );
  }
}

export default Home;
