// import {Text, View} from 'react-native';
// import React, {Component} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import BottomTab from './components/BottomTab';
// import TopTab from './components/TopTab';
// import ProductDescription from './components/ProductDescription';
// import CartContext from './context/CartContext';

// const Stack = createNativeStackNavigator();

// export class App extends Component {
//   state = {
//     cartList: [],
//     totalPrice: 0,
//   };

//   addCartItem = (product: any) => {
//     console.log(product);
//     const {cartList} = this.state;
//     const productObject = cartList.find(
//       (eachCartItem: any) => eachCartItem.id === product.id,
//     );

//     if (productObject) {
//       this.setState((prevState: any) => ({
//         cartList: prevState.cartList.map((eachCartItem: any) => {
//           console.log(eachCartItem);
//           if (productObject.id === eachCartItem.id) {
//             const updatedQuantity = eachCartItem.quantity + 1;

//             return {
//               ...eachCartItem,
//               quantity: updatedQuantity ? updatedQuantity : 0,
//             };
//           }

//           return eachCartItem;
//         }),
//       }));
//     } else {
//       const updatedCartList = [...cartList, product];

//       this.setState({cartList: updatedCartList});
//     }
//   };

//   incrementCartItemQuantity = (item: any) => {
//     // console.log(item);
//     this.setState((prevState: any) => ({
//       cartList: prevState.cartList.map((eachCartItem: any) => {
//         if (item.id === eachCartItem.id) {
//           // console.log(eachCartItem);
//           const updatedQuantity = eachCartItem.quantity + 1;
//           return {...eachCartItem, quantity: updatedQuantity};
//         }
//         // console.log('Not increment');
//         return eachCartItem;
//       }),
//     }));
//   };
//   removeCartItem = (id: any) => {
//     const {cartList} = this.state;
//     const updatedCartList = cartList.filter(
//       (eachCartItem: any) => eachCartItem.id !== id,
//     );

//     this.setState({cartList: updatedCartList});
//   };
//   decrementCartItemQuantity = (item: any) => {
//     const {cartList} = this.state;
//     const productObject = cartList.find(
//       (eachCartItem: any) => eachCartItem.id === item.id,
//     );
//     console.log(productObject);
//     if (item.quantity > 1) {
//       this.setState((prevState: any) => ({
//         cartList: prevState.cartList.map((eachCartItem: any) => {
//           if (item.id === eachCartItem.id) {
//             const updatedQuantity = eachCartItem.quantity - 1;
//             return {...eachCartItem, quantity: updatedQuantity};
//           }
//           return eachCartItem;
//         }),
//       }));
//     } else {
//       this.removeCartItem(item.id);
//     }
//   };

//   render() {
//     // console.log(this.state.cartList);
//     return (
//       <CartContext.Provider
//         value={{
//           cartList: this.state.cartList,
//           addCartItem: this.addCartItem,
//           incrementCartItemQuantity: this.incrementCartItemQuantity,
//           decrementCartItemQuantity: this.decrementCartItemQuantity,
//           removeCartItem: this.removeCartItem,
//           totalPrice: this.state.totalPrice,
//         }}>
//         <NavigationContainer>
//           <Stack.Navigator screenOptions={{headerShown: false}}>
//             <Stack.Screen name="BottomTab" component={BottomTab} />
//             <Stack.Screen name="TopTab" component={TopTab} />
//             <Stack.Screen
//               name="ProductDescription"
//               component={ProductDescription}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </CartContext.Provider>
//     );
//   }
// }

// export default App;

import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home1 from './components/Home1';
import Search from './components/Search';
import Feed from './components/Feed';
import Playlist from './components/Playlist';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bottom from './components/Bottom';
import Splashscreen from './components/Splashscreen';
import MusicContext from './context/MusicContext';

const Stack = createNativeStackNavigator();

export class App extends Component {
  state = {
    musicList: [],
  };

  addMusicTrack = (product: any) => {
    console.log(product);
    const {musicList} = this.state;
    const productObject = musicList.find(
      (eachCartItem: any) => eachCartItem.id === product.id,
    );

    if (productObject) {
      this.setState((prevState: any) => ({
        musicList: prevState.musicList.map((eachCartItem: any) => {
          console.log(eachCartItem);
          if (productObject.id === eachCartItem.id) {
            return {
              ...eachCartItem,
              isLiked: true,
            };
          }

          return {...eachCartItem, isLiked: true};
        }),
      }));
    } else {
      const updatedCartList = [...musicList, product];

      this.setState({musicList: updatedCartList});
    }
  };

  handleDelete = (id: number) => {
    const {musicList} = this.state;
    const updatedCartList = musicList.filter(
      (eachCartItem: any) => eachCartItem.id !== id,
    );

    this.setState({musicList: updatedCartList});
  };
  render() {
    return (
      <MusicContext.Provider
        value={{
          musicList: this.state.musicList,
          addMusicTrack: this.addMusicTrack,
          handleDelete: this.handleDelete,
        }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splashscreen" component={Splashscreen} />
            <Stack.Screen name="Bottom" component={Bottom} />
          </Stack.Navigator>
        </NavigationContainer>
      </MusicContext.Provider>
    );
  }
}

export default App;
