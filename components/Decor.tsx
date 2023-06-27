import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';

export class Decor extends Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 400, height: 400, alignSelf: 'center'}}
          source={require('./images/decorr.png')}
        />
      </View>
    );
  }
}

export default Decor;
