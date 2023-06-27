import React from 'react';

const CartContext = React.createContext({
  cartList: [],
  totalPrice: 0,
  addCartItem: (items: any) => {},
  incrementCartItemQuantity: (item: any) => {},
  decrementCartItemQuantity: (item: any) => {},
  removeCartItem: (id: number) => {},
});

export default CartContext;
