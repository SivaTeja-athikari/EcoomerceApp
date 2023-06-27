import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import Ionicons from 'react-native-vector-icons/dist/MaterialIcons';

import MusicContext from '../context/MusicContext';

const {width, height} = Dimensions.get('window');
export class Playlist extends Component {
  static contextType?: React.Context<any> | undefined = MusicContext;
  declare context: React.ContextType<typeof MusicContext>;
  render() {
    return (
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: '#100a1e',
          padding: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 26,
              color: '#ffffff',
              fontWeight: '800',
              paddingBottom: 20,
            }}>
            Play List
          </Text>
          <FlatList
            data={this.context.musicList}
            renderItem={({item, index}: {item: any; index: number}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        modalVisible: true,
                        index: item.id - 1,
                      })
                    }>
                    <View
                      style={{
                        flexDirection: 'row',

                        alignItems: 'center',
                        marginBottom: 13,
                      }}>
                      <Text
                        style={{
                          color: '#ffffff',
                          fontSize: 14,
                          fontWeight: '700',
                          paddingRight: 5,
                        }}>
                        {item.id}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',

                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: 36,
                            width: 36,
                            borderRadius: 5,
                            marginRight: 9,
                          }}
                          source={{uri: item.artwork}}
                        />
                        <View>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '400',
                              color: '#FFFFFF',
                            }}>
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '400',
                              color: '#D9D9D9',
                            }}>
                            {item.artist}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.context.handleDelete(item.id)}>
                    <Ionicons name="delete-outline" size={30} color="#ffffff" />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default Playlist;
