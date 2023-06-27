import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';

interface IProps {
  navigation: any;
}

interface IState {}

export class Wedding extends Component<IProps, IState> {
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#9682B6',
            height: 90,
            width: '100%',
            marginTop: 24,
            justifyContent: 'space-between',
            padding: 15,
            alignItems: 'center',
            alignSelf: 'center',
            borderTopRightRadius: 9,
            borderBottomRightRadius: 9,
            borderTopLeftRadius: 9,
            flexDirection: 'row',
          }}>
          <View>
            <Text style={{fontSize: 30, fontWeight: '500', color: '#F4F4F4'}}>
              Need help?
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#F4F4F4'}}>
              Make an appointment or chat with us.
            </Text>
          </View>
          <AntDesign name="calendar" size={30} color="#F4F4F4" />
        </View>
        <ScrollView horizontal>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Catalog')}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 24,
                  backgroundColor: '#9682B6',
                  borderRadius: 7,
                }}
                source={require('./images/all.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#2E2D2D',
                }}>
                All
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginTop: 24,
                marginLeft: 16,
                backgroundColor: '#9682B6',
                borderRadius: 7,
              }}
              source={require('./images/boquet.png')}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#2E2D2D',
              }}>
              Boquet
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginTop: 24,
                marginLeft: 16,
                backgroundColor: '#9682B6',
                borderRadius: 7,
              }}
              source={require('./images/table.png')}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#2E2D2D',
              }}>
              Table
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginTop: 24,
                marginLeft: 16,
                backgroundColor: '#9682B6',
                borderRadius: 7,
              }}
              source={require('./images/asile.png')}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#2E2D2D',
              }}>
              Asile
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginTop: 24,
                marginLeft: 16,
                backgroundColor: '#9682B6',
                borderRadius: 7,
              }}
              source={require('./images/accessories.png')}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#2E2D2D',
              }}>
              Accessories
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginTop: 24,
                marginLeft: 16,
                backgroundColor: '#9682B6',
                borderRadius: 7,
              }}
              source={require('./images/boquet.png')}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#2E2D2D',
              }}>
              Boquet
            </Text>
          </View>
        </ScrollView>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#2E2D2D',
            paddingTop: 13,
            paddingBottom: 13,
          }}>
          Popularity
        </Text>
        <ScrollView horizontal>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              height: '100%',
              marginRight: 24,
              padding: 12,
              borderRadius: 10,
            }}>
            <Image
              style={{height: 120, borderRadius: 9, width: 250}}
              source={require('./images/spark.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{fontSize: 23, color: '#9682B6', fontWeight: '600'}}>
                  Spark
                </Text>
                <Text
                  style={{color: '#2E2D2D', fontSize: 16, fontWeight: '600'}}>
                  $90
                </Text>
              </View>
              <Image source={require('./images/star.png')} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              height: '100%',
              padding: 12,
              marginRight: 24,
              borderRadius: 10,
            }}>
            <Image
              style={{height: 120, borderRadius: 9, width: 250}}
              source={require('./images/spark.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{fontSize: 23, color: '#9682B6', fontWeight: '600'}}>
                  Spark
                </Text>
                <Text
                  style={{color: '#2E2D2D', fontSize: 16, fontWeight: '600'}}>
                  $90
                </Text>
              </View>
              <Image source={require('./images/star.png')} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Wedding;
