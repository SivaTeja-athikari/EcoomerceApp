import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ImageBackground,
} from 'react-native';
import React, {Component} from 'react';
import data from './data';

import Slider from '@react-native-community/slider';

import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

import LinearGradient from 'react-native-linear-gradient';
import MusicContext from '../context/MusicContext';
const {width, height} = Dimensions.get('window');

interface IProps {
  navigation: any;
}
interface IState {}

export class Home1 extends Component<IProps, IState> {
  state = {
    modalVisible: false,
    index: 0,
    like: false,
    isPlayed: '',
  };

  static contextType: React.Context<any> | undefined = MusicContext;
  declare context: React.ContextType<typeof MusicContext>;

  handleModal = () => {
    this.setState({modalVisible: true});
  };

  handlePrevious = async () => {
    if (this.state.index !== 0) {
      this.setState({index: this.state.index - 1});
    }
  };

  handleNext = async () => {
    this.setState({index: this.state.index + 1});
  };
  render() {
    console.log(this.context.musicList, 'maknsdksnfs');
    const selectedData = data[this.state.index];
    console.log(data);
    return (
      <SafeAreaView
        style={{
          width: width,
          height: height,
          backgroundColor: '#100a1e',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#844DFB',
                fontSize: 16,
                fontWeight: '800',
                paddingRight: 29,
              }}>
              For You
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: '800',
              }}>
              Trending
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <MaterialIcons
              name="notifications-none"
              size={23}
              color="#FFFFFF"
            />
            <View style={{paddingLeft: 20}}>
              <Feather name="settings" size={20} color="#FFFFFF" />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 20}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: '800',
              paddingBottom: 6,
            }}>
            Recently Played
          </Text>
          <LinearGradient
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            colors={['rgba(217, 217, 217, 0.23)', 'rgba(217, 217, 217, 0.06)']}
            style={styles.linearGradient1}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Image source={require('./images/recentplayed.png')} />
              <View style={{height: 120}}>
                <FlatList
                  data={data}
                  renderItem={({item, index}: {item: any; index: number}) => {
                    return (
                      <View>
                        <View style={{}}>
                          <Text
                            style={{
                              color: '#ffffff',
                              fontSize: 14,
                              fontWeight: '400',
                              paddingBottom: 15,
                              paddingRight: 35,
                            }}>
                            {index + 1}. {item.title}
                          </Text>
                          {/* <Text>1.Man on the moon</Text>
                          <Text>2.Milky way (Rupe...</Text>
                          <Text>3.Big Picture (Lon..</Text> */}
                        </View>
                      </View>
                    );
                  }}
                />
                <View style={{alignSelf: 'flex-end'}}>
                  <MaterialIcons
                    name="play-circle-outline"
                    size={27}
                    color="#FFFFFF"
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: '800',
              paddingBottom: 6,
              marginTop: 10,
            }}>
            Daily Mix
          </Text>
          <View>
            <FlatList
              horizontal
              data={data}
              renderItem={({item, index}: {item: any; index: number}) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          modalVisible: true,
                          index: item.id - 1,
                          isPlayed: item.id,
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: 110,
                            width: 110,
                            borderRadius: 10,
                            marginRight: 20,
                          }}
                          source={{uri: item.artwork}}
                        />
                        <Text
                          style={{
                            color: '#FFFFFF',
                            fontSize: 14,
                            fontWeight: '400',
                            paddingRight: 20,
                            paddingTop: 4,
                          }}>
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 12,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#FFFFFF',
                paddingBottom: 7,
              }}>
              Charts
            </Text>
            <Text style={{color: '#844DFB', fontSize: 14, fontWeight: '800'}}>
              More {'>'}
            </Text>
          </View>
          <View>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              colors={[
                'rgba(217, 217, 217, 0.23)',
                'rgba(217, 217, 217, 0.06)',
              ]}
              style={styles.linearGradient}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 12,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '800',
                    color: '#FFFFFF',
                    paddingBottom: 12,
                  }}>
                  Top 100 Nigeria
                </Text>
                <Text
                  style={{color: '#D9D9D9', fontSize: 14, fontWeight: '400'}}>
                  More {'>'}
                </Text>
              </View>
              <View style={{height: 140}}>
                <FlatList
                  data={data}
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
                              isPlayed: item.id,
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
                        <View style={{flexDirection: 'row'}}>
                          {this.state.isPlayed == item.id && (
                            <View style={{paddingRight: 20}}>
                              <MaterialCommunityIcons
                                name="pause-circle-outline"
                                size={30}
                                color="#FFFFFF"
                              />
                            </View>
                          )}

                          <MaterialCommunityIcons
                            name="download-circle-outline"
                            size={30}
                            color="#844DFB"
                          />
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            </LinearGradient>
          </View>
        </View>
        <Modal
          style={{
            padding: 20,
            width: width,
            height: height,
            backgroundColor: '#100a1e',
          }}
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: !this.state.modalVisible});
          }}>
          <SafeAreaView
            style={{width: width, height: height, backgroundColor: '#100a1e'}}>
            <View style={{}}>
              <View style={{}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: width,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({modalVisible: false})}>
                    <Feather name="chevron-down" size={30} color="#FFFFFF" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#FFFFFF',
                    }}>
                    {' '}
                    “Top 100 Nigeria”
                  </Text>
                  <View style={{paddingBottom: 20}}>
                    <MaterialCommunityIcons
                      name="settings-helper"
                      size={30}
                      color="#FFFFFF"
                    />
                  </View>
                </View>
                <View>
                  <Image
                    style={{
                      height: 300,
                      width: 300,
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginTop: 30,
                    }}
                    source={{
                      uri: selectedData.artwork,
                    }}
                  />
                </View>
                <ImageBackground
                  style={{
                    width: 357,
                    height: 300,
                  }}
                  source={require('./images/splashbg.png')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingTop: 18,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '800',
                          color: '#FFFFFF',
                        }}>
                        {selectedData.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '500',
                          color: '#FFFFFF',
                        }}>
                        {selectedData.artist}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        this.context.addMusicTrack({
                          ...selectedData,
                          isLiked: true,
                        });
                        this.setState({like: true});
                      }}>
                      {this.context.musicList.find(
                        (each: {id: any}) => each.id == selectedData.id,
                      ) ? (
                        this.context.musicList.find(
                          (each: {id: any}) => each.id == selectedData.id,
                        ).isLiked ? (
                          <TouchableOpacity
                            onPress={() =>
                              this.context.handleDelete(selectedData.id)
                            }>
                            <FontAwesome name="heart" color="#fff" size={20} />
                          </TouchableOpacity>
                        ) : (
                          <FontAwesome name="heart" color="#844DFB" size={20} />
                        )
                      ) : (
                        <FontAwesome name="heart" color="#844DFB" size={20} />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Slider
                      style={{width: '90%', height: 60}}
                      minimumValue={0}
                      maximumValue={1}
                      minimumTrackTintColor="#FFFFFF"
                      maximumTrackTintColor="#6D6666"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>
                    <Ionicons name="shuffle" size={20} color="#FFFFFF" />
                    <TouchableOpacity onPress={() => this.handlePrevious()}>
                      <Ionicons
                        name="ios-play-skip-back"
                        size={20}
                        color="#FFFFFF"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Ionicons
                        name="md-play-circle-outline"
                        size={50}
                        color="#FFFFFF"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleNext()}>
                      <Ionicons
                        name="ios-play-skip-forward"
                        size={20}
                        color="#FFFFFF"
                      />
                    </TouchableOpacity>

                    <Feather name="rotate-ccw" size={20} color="#FFFFFF" />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingLeft: 20,
                      paddingRight: 20,
                      bottom: 0,
                      width: width,
                      position: 'absolute',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',

                        alignItems: 'center',
                      }}>
                      <MaterialCommunityIcons
                        name="music-note-bluetooth"
                        size={30}
                        color="#FFFFFF"
                      />
                      <Text
                        style={{
                          color: '#FFFFFF',
                          fontSize: 20,
                          fontWeight: '600',
                          paddingLeft: 9,
                        }}>
                        Earpods
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',

                        alignItems: 'center',
                      }}>
                      <Entypo
                        name="share-alternative"
                        size={30}
                        color="#FFFFFF"
                      />
                      <TouchableOpacity
                        style={{paddingLeft: 31}}
                        onPress={() => {
                          this.props.navigation.navigate('Playlist');
                          this.setState({modalVisible: false});
                        }}>
                        <Fontisto name="play-list" size={30} color="#FFFFFF" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 190,
  },
  linearGradient1: {
    borderRadius: 5,
    height: 140,
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Home1;
