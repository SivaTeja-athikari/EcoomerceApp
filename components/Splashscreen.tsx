import {Text, View, ImageBackground, Image} from 'react-native';
import React, {Component} from 'react';

interface IProps {
  navigation?: any;
}
interface IState {}

export class Splashscreen extends Component<IProps, IState> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Bottom');
    }, 3000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#100a1e'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <ImageBackground
            style={{
              width: 300,
              height: 300,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            source={require('./images/splashbg.png')}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('./images/splashimage.png')}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '800',
                color: '#FFFFFF',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Home of Music
            </Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Splashscreen;
