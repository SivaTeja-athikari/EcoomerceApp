import {Image, ImageBackground, Text, View} from 'react-native';
import React, {Component} from 'react';

export class Chat extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={{fontSize: 30, textAlign: 'center', color: '#2D2D2D'}}>
          Chat
        </Text>
        <View>
          {/* <Image
            style={{width: 300, height: 500}}
            source={require('./images/chat.gif')}
          /> */}
          <ImageBackground
            style={{width: 300, height: 500}}
            source={require('./images/chat.gif')}
          />

          {/* <WebView
            source={{
              html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            }}
            style={{marginTop: 20}}
          /> */}
        </View>
      </View>
    );
  }
}

export default Chat;
