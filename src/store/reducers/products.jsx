import { BUY, DELETE } from '../constants';

export const products = (state = [], action) => {
  switch (action.type) {
    case BUY:
      if ((state.filter((fruit) => fruit.id === action.content.id).length > 0)) {
        return state.map((fruit) => {
          if (fruit.id === action.content.id && fruit.discount && fruit.quantity >= 2) {
            const freeFruits = Math.floor(fruit.quantity / fruit.discount.everyThree);
            const discountedPrice = fruit.quantity - freeFruits;
            const newQuantity = fruit.quantity + 1;
            return Object.assign({}, fruit, {
              quantity: newQuantity,
              finalPrice: +((fruit.price * discountedPrice).toFixed(2))
            })
          }
          else if (fruit.id === action.content.id) {
            const newQuantity = fruit.quantity + 1;
            return Object.assign({}, fruit, {
              quantity: newQuantity,
              finalPrice: + ((fruit.price * newQuantity).toFixed(2))
            })
          }
          return fruit;
        })
      } else {
        const fruit = {
          id: action.content.id,
          price: action.content.price,
          name: action.content.name,
          quantity: action.content.quantity,
          discount: action.content.discount,
          finalPrice: + ((action.content.price * action.content.quantity).toFixed(2))
        }
        const fruits = [
          ...state,
          fruit
        ];
        return fruits;
      }
    case DELETE:
      if (action.content.quantity === 1) {
        return state.filter(fruit => fruit.id !== action.content.id);
      }
      return state.map(fruit => {
        if (fruit.id === action.content.id && fruit.discount && fruit.quantity > 3) {
          const newQuantity = fruit.quantity - 1;
          return Object.assign({}, fruit, {
            quantity: newQuantity,
            finalPrice: + (((fruit.price * newQuantity) - fruit.price).toFixed(2))
          })
        } else if (fruit.id === action.content.id && fruit.quantity <= 3) {
          const newQuantity = fruit.quantity - 1;
          return Object.assign({}, fruit, {
            quantity: newQuantity,
            finalPrice: + ((fruit.price * newQuantity).toFixed(2))
          })
        } else if (fruit.id === action.content.id && !fruit.discount && fruit.quantity > 3) {
          const newQuantity = fruit.quantity - 1;
          return Object.assign({}, fruit, {
            quantity: newQuantity,
            finalPrice: + ((fruit.price * newQuantity).toFixed(2))
          })
        }
        return fruit;
      })
    default:
      return state;
  }
}

export default products;
