import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';

export class Gift extends Component {
  render() {
    return (
      <View>
        <Image
          style={{height: 400, width: 300, alignSelf: 'center'}}
          resizeMode="contain"
          source={require('./images/gift.png')}
        />
        <Text
          style={{fontSize: 30, textAlign: 'center', color: '#2D2D2D'}}></Text>
      </View>
    );
  }
}

export default Gift;
