import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {Component} from 'react';

import Feather from 'react-native-vector-icons/dist/Feather';

interface IProps {
  navigation: any;
  Products: any;
}
interface IState {
  data: any[];
  isLoaded: boolean;
  inputValue: string;
  text: any;
  searchButton: boolean;
}

export class Catalog extends Component<IProps, IState> {
  state = {
    data: [],
    isLoaded: false,
    inputValue: '',
    text: '',
    searchButton: false,
  };

  componentDidMount = () => {
    fetch(`https://dummyjson.com/products`)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({data: resp.products, isLoaded: true});
      });
  };

  onChangeText = (text: any) => {
    this.setState({inputValue: text});
  };
  displayProducts = () => {
    const filteredProducts = this.state.data.filter((each: any) => {
      if (
        each.title
          .toLowerCase()
          .includes(this.state.inputValue.trim().toLowerCase())
      ) {
        return each;
      }
    });
    if (filteredProducts) {
      return filteredProducts;
      // console.log(filteredProducts);
    } else {
      return [];
    }
  };
  handleDropdown = (val: any) => {
    let filtervalue = val.value;

    this.setState({text: filtervalue});
  };
  render() {
    const {isLoaded} = this.state;

    const displayProducts = this.displayProducts();

    return (
      <View style={{backgroundColor: '#F4F4F4', padding: 16}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', height: 80}}>
            <Feather name="arrow-left" size={18} color="#2E2D2D" />
            <Text
              style={{
                color: '#2E2D2D',
                fontSize: 24,
                fontWeight: '500',
                paddingLeft: 25,
              }}>
              Bridal Bouquet
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {this.state.searchButton ? (
              <TextInput
                placeholder="Search here"
                inputMode="text"
                placeholderTextColor={'black'}
                style={{
                  borderColor: 'black',
                  borderWidth: 2,
                  padding: 4,
                  marginRight: 10,
                  borderRadius: 9,
                  color: 'black',
                }}
                onChangeText={text => this.onChangeText(text)}
              />
            ) : null}
            <TouchableOpacity
              onPress={() =>
                this.setState({searchButton: !this.state.searchButton})
              }>
              <Feather name="search" size={24} color="#2E2D2D" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 20,
          }}>
          <Text style={{color: '#2E2D2D', fontSize: 18, fontWeight: '500'}}>
            Catalog
          </Text>
          <Image
            style={{tintColor: '#2E2D2D'}}
            source={require('./images/filter.png')}
          />
        </View>
        {isLoaded ? (
          <FlatList
            numColumns={2}
            data={displayProducts}
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                      this.props.navigation.navigate('ProductDescription', {
                        ...item,
                      })
                    }>
                    <View style={styles.cardContainer}>
                      <View style={styles.imagecontainer}>
                        <Image
                          resizeMode="contain"
                          style={{height: 100, borderRadius: 12}}
                          source={{uri: `${item.images[0]}`}}
                        />
                      </View>
                      <View style={styles.detailscontainer}>
                        <Text style={styles.productheading}>{name}</Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                          }}>
                          <Text style={styles.productprice}>
                            ₹ {item.price}
                          </Text>
                          <Feather
                            name="shopping-cart"
                            size={18}
                            color="#4B194F"
                          />
                        </View>
                        {/* <Text
                          style={{
                            color: 'green',
                            fontWeight: '800',
                            fontSize: 18,
                          }}>
                          {item.discountPercentage} %off
                          <Text> </Text>
                          <Text
                            style={{
                              color: 'grey',
                              textDecorationLine: 'line-through',
                            }}>
                            {item.price}
                          </Text>
                          <Text style={{color: 'black', padding: 13}}>
                            {' ' +
                              Math.ceil(
                                parseInt(item.price) -
                                  (parseInt(item.price) *
                                    parseInt(item.discountPercentage)) /
                                    100,
                              )}
                          </Text>
                        </Text> */}
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    height: 171,
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
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 24,
    marginRight: 10,
    width: 150,
    height: 178,
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

export default Catalog;
