import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import CartContext from '../context/CartContext';

import Feather from 'react-native-vector-icons/dist/Feather';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';

interface IProps {
  navigation: any;
  cart: any;
  context: any;
  price: any;
}
interface IState {}

export class Cart extends Component<IProps, IState> {
  state = {
    total: 0,
  };
  static contextType?: React.Context<any> | undefined = CartContext;
  declare context: React.ContextType<typeof CartContext>;
  render() {
    let total = 0;
    for (let i = 0; i < this.context.cartList.length; i++) {
      total +=
        this.context.cartList[i].price * this.context.cartList[i].quantity;
    }
    console.log(this.context);
    return (
      <View>
        <Text
          style={{
            fontSize: 26,
            color: '#2D2D2D',
            paddingLeft: 12,
            paddingTop: 12,
            paddingBottom: 13,
          }}>
          Cart
        </Text>
        {this.context.cartList.length !== 0 ? (
          <View>
            {this.context.cartList.length !== 0 ? (
              <View>
                <FlatList
                  data={this.context.cartList}
                  renderItem={({item}: {item: any}) => {
                    const name =
                      item.title.length > 0
                        ? `${item.title.slice(0, 8)}...`
                        : item.title;
                    return (
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: '#F4F4F4',
                          width: 100,
                          height: '50%',
                          flexWrap: 'wrap',
                        }}>
                        <TouchableOpacity style={styles.button}>
                          <View style={styles.cardContainer}>
                            <View style={styles.imagecontainer}>
                              <Image
                                resizeMode="contain"
                                style={{height: 100, borderRadius: 12}}
                                source={{uri: `${item.images[0]}`}}
                              />
                            </View>
                            <View style={styles.detailscontainer}>
                              <View
                                style={{
                                  width: 150,
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                }}>
                                <Text style={styles.productheading}>
                                  {name}
                                </Text>
                                <TouchableOpacity
                                  onPress={() =>
                                    this.context.removeCartItem(item.id)
                                  }>
                                  <EvilIcons
                                    name="close-o"
                                    size={30}
                                    color="grey"
                                  />
                                </TouchableOpacity>
                              </View>
                              <Text
                                style={{color: '#2D2D2D', paddingBottom: 6}}>
                                by {item.brand}
                              </Text>

                              <View
                                style={{
                                  flexDirection: 'row',
                                  height: 30,
                                  width: 120,
                                  backgroundColor: '#ffffff',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  borderRadius: 7,
                                  marginBottom: 6,
                                }}>
                                {item.quantity > 1 ? (
                                  <Text
                                    onPress={() =>
                                      this.context.decrementCartItemQuantity(
                                        item,
                                      )
                                    }
                                    style={{
                                      color: '#2E2D2D',
                                      textAlign: 'center',
                                      paddingRight: 20,
                                    }}>
                                    -
                                  </Text>
                                ) : (
                                  <Text
                                    style={{
                                      color: '#2E2D2D',
                                      textAlign: 'center',
                                      paddingRight: 20,
                                    }}>
                                    -
                                  </Text>
                                )}
                                <View
                                  style={{
                                    height: 28,
                                    width: 32,
                                    backgroundColor: '#F4F4F4',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 7,
                                  }}>
                                  <Text
                                    style={{
                                      color: '#2E2D2D',

                                      textAlign: 'center',
                                    }}>
                                    {item.quantity ? item.quantity : 1}
                                  </Text>
                                </View>
                                <Text
                                  onPress={() =>
                                    this.context.incrementCartItemQuantity(item)
                                  }
                                  style={{color: '#2E2D2D', paddingLeft: 20}}>
                                  +
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  width: '100%',
                                }}>
                                <Text style={styles.productprice}>
                                  $ {item.price}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                  keyExtractor={item => item.id}
                />
              </View>
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 500,
                }}>
                <Image
                  resizeMode="contain"
                  style={{height: 300, width: 360}}
                  source={require('./images/images.png')}
                />
                <Text style={{fontSize: 24, color: '#2D2D2D'}}>
                  Your cart is empty
                </Text>
              </View>
            )}
            <View
              style={{
                position: 'absolute',
                top: 430,
                width: '100%',
                backgroundColor: '#D9D9D9',
                paddingBottom: 20,
                borderRadius: 9,
              }}>
              <View style={{alignSelf: 'flex-end'}}>
                <Text
                  style={{
                    color: '#9682B6',
                    paddingTop: 10,
                    paddingRight: 30,
                    fontSize: 20,
                    fontWeight: '600',
                  }}>
                  Order total = $ {total}/-
                </Text>
                <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
                  {this.context.cartList.length} Items in cart
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                  width: '90%',
                  height: 50,
                  backgroundColor: '#9682B6',
                  borderRadius: 10,
                  marginBottom: 12,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  Checkout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 500,
            }}>
            <Image
              resizeMode="contain"
              style={{height: 300, width: 360}}
              source={require('./images/images.png')}
            />
            <Text style={{fontSize: 24, color: '#2D2D2D'}}>
              Your cart is empty
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 180,
    width: '100%',
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 24,
  },
  mainheading: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginLeft: 15,
    marginTop: 30,
    marginBottom: 30,
  },
  productheading: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    paddingTop: 6,
    paddingBottom: 6,
  },
  productrating: {
    fontSize: 12,
    color: 'black',
  },
  productprice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9682B6',
  },
  imagecontainer: {
    width: '100%',
  },
  detailscontainer: {
    width: '100%',
    paddingLeft: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 24,
    marginRight: 10,
    height: 150,
    borderRadius: 14,
  },

  icon: {
    marginRight: 5,
    color: 'black',
  },
  item: {
    padding: 17,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },

  label: {
    position: 'absolute',
    backgroundColor: 'grey',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'black',
  },
  dropdownText: {
    color: 'black',
  },
});

export default Cart;
