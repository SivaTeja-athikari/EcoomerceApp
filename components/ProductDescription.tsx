import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

import Feather from 'react-native-vector-icons/dist/Feather';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';

import {SliderBox} from 'react-native-image-slider-box';

import CartContext from '../context/CartContext';
interface IProps {
  item: any;
  route: any;
  navigation: any;
  context: any;
  quantity: any;
}
interface IState {
  quantity: number;
}

class ProductDescription extends Component<IProps, IState> {
  state = {
    quantity: 1,
  };
  static contextType?: React.Context<any> | undefined = CartContext;
  declare context: React.ContextType<typeof CartContext>;
  renderItem({item}: {item: any}) {
    return (
      <View>
        <Image source={{uri: `${item}`}} style={styles.tinyLogo} />
      </View>
    );
  }
  render() {
    console.log(this.context.cartList);
    if (this.context.cartList.length !== 0) {
      console.log(this.context.cartList[0].quantity, 'caret');
    }
    const items = this.props.route.params;
    const image = items.images;
    // console.log(items);
    return (
      <View style={{flex: 1}}>
        {/* <Image
          resizeMode="contain"
          style={styles.tinyLogo}
          source={{uri: `${image[0]}`}}
        /> */}
        <SliderBox
          images={image}
          sliderBoxHeight={300}
          dotColor="#9682B6"
          autoplay={true}
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 40,
            height: 4,
            borderRadius: 15,
            marginHorizontal: 10,
            padding: 0,
            margin: 0,
          }}
        />
        <View style={styles.bgcontainer}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 10,
                }}></View>

              <View style={{padding: 4}}>
                <View
                  style={{
                    flexDirection: 'column',

                    justifyContent: 'center',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'black',
                      fontWeight: '800',
                    }}>
                    {items.title}
                  </Text>
                  <Text style={{color: '#9682B6', fontSize: 22}}>
                    {' '}
                    $ {items.price}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 6,
                  }}>
                  <Text style={{color: 'black'}}>Availability</Text>
                  {items.stock > 0 ? (
                    <Text style={{color: '#1ECA2F'}}>In Stock</Text>
                  ) : (
                    <Text style={{color: 'red'}}>Out Of Stock</Text>
                  )}
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  paddingBottom: 20,
                  borderBottomColor: '#2E2D2D',
                }}>
                <Text style={{color: 'black', fontSize: 18}}> Rating:</Text>
                {/* <Text style={{color: 'red'}}>{items.rating}</Text> */}
                <Image source={require('./images/star.png')} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 18,
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#2E2D2D'}}>
                  Quantity
                </Text>
                {/* <Image
                  resizeMode="cover"
                  source={require('./images/Counter.png')}
                /> */}
                <View
                  style={{
                    flexDirection: 'row',
                    height: 30,
                    width: 120,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 7,
                  }}>
                  <Text
                    onPress={() => {
                      this.context.decrementCartItemQuantity({
                        ...items,
                        quantity: this.state.quantity,
                      });
                      if (this.state.quantity > 1) {
                        this.setState({quantity: this.state.quantity - 1});
                      }
                    }}
                    style={{
                      color: '#2E2D2D',
                      textAlign: 'center',
                      paddingRight: 20,
                    }}>
                    -
                  </Text>
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
                      {/* {this.context.cartList[0]
                        ? this.context.cartList[0].quantity
                        : 0} */}
                      {this.context.cartList.find(each => each.id == items.id)
                        ? this.context.cartList.find(
                            each => each.id == items.id,
                          ).quantity
                        : this.state.quantity}
                      {/* {this.context.cartList.length !== 0
                        ? this.context.cartList[
                            this.context.cartList.length - 1
                          ].quantity
                        : 1} */}
                    </Text>
                  </View>
                  <Text
                    onPress={() => {
                      this.context.incrementCartItemQuantity({
                        ...items,
                        quantity: 0,
                      });
                      this.setState({quantity: this.state.quantity + 1});
                    }}
                    style={{color: '#2E2D2D', paddingLeft: 20}}>
                    +
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 20,
                  paddingBottom: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '400',
                  }}>
                  Total
                </Text>
                <Text style={{color: '#9682B6', fontSize: 22}}>
                  {' '}
                  ${' '}
                  {this.context.cartList.find(
                    (each: {id: number}) => each.id == items.id,
                  )
                    ? this.context.cartList.find(
                        (each: {id: number}) => each.id == items.id,
                      ).quantity * items.price
                    : this.state.quantity * items.price}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Item is added to the cart');
                  this.context.addCartItem({
                    ...items,
                    quantity: this.state.quantity,
                  });
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 205,
                  height: 60,
                  backgroundColor: '#9682B6',
                  borderRadius: 10,
                  marginBottom: 12,
                  alignSelf: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Feather name="shopping-cart" size={22} color="#F4F4F4" />
                  <Text
                    style={{color: '#F4F4F4', fontSize: 22, paddingLeft: 17}}>
                    Add to cart
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgcontainer: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'column',
    paddingTop: 3,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  container: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: '100%',
    height: 350,
    alignItems: 'center',
    borderRadius: 0,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'center',
    height: '50%',
  },
  itemImage: {
    width: 400,
    height: 400,
  },
  view: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  viewtext: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '300',
  },
  viewcontainer: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'blue',
    margin: 10,
    padding: 13,
  },
  category: {
    color: 'black',
    fontSize: 18,
    padding: 15,
  },
  category1: {
    color: 'green',
    fontSize: 19,
  },
  detailCategory: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailCategory1: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default ProductDescription;
