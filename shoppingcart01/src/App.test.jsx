import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './store/actions'
import {BUY, DELETE} from './store/constants';
import reducer from './store/reducers/products';

const threePerTwo = {
  type: 'threePerTwo',
  everyThree: 3,
  oneFree: 1,
  text: '3 per 2'
}
const noOffer = {
  text: 'No'
}
const content = [
  {
    id: 1,
    price: 0.50,
    name: 'Papayas',
    quantity: 1,
    discount: threePerTwo,
    img: 'https://abortiontips.com/wp-content/uploads/2017/05/papaya-for-abortion.jpg'
  }
]
/*********************
      Actions
*********************/
//add a fruit to basket
describe('actions', () => {
  it('add a item in the basket', () => {
    const expectedAction = {
      type: BUY,
      content
    }
    expect(actions.buyFruit(content)).toEqual(expectedAction)
  })
})

//delete a fruit from basket
describe('actions', () => {
  it('delete item from basket', () => {
    const threePerTwo = {
      type: 'threePerTwo',
      everyThree: 3,
      oneFree: 1,
      text: '3 per 2'
    }
    const expectedAction = {
      type: DELETE,
      content
    }
    expect(actions.deleteFruit(content)).toEqual(expectedAction)
  })
})

/*********************
      Reducers
*********************/
describe('reducers', () => {
  it('when default should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('when BUY, should add new item (with discounts) in the basket', () => {
    expect(reducer([], {
      type: BUY,
      content: {
        id: 1,
        price: 0.50,
        name: 'Papayas',
        quantity: 2,
        discount: threePerTwo,
        img: 'https://abortiontips.com/wp-content/uploads/2017/05/papaya-for-abortion.jpg'
      }
    })).toEqual([
      {
        id: 1,
        price: 0.50,
        name: 'Papayas',
        quantity: 2,
        discount: threePerTwo,
        finalPrice: 1
      }
    ])

    expect(reducer([
      {
        id: 1,
        price: 0.50,
        name: 'Papayas',
        quantity: 2,
        discount: threePerTwo,
        finalPrice: 1
      }
    ], {
      type: BUY,
      content: {
        id: 1,
        price: 0.50,
        name: 'Papayas',
        quantity: 1,
        discount: threePerTwo,
        img: 'https://abortiontips.com/wp-content/uploads/2017/05/papaya-for-abortion.jpg'
      }
    })).toEqual([
      {
        id: 1,
        price: 0.50,
        name: 'Papayas',
        quantity: 3,
        discount: threePerTwo,
        finalPrice: 1
      }
    ])
  })
  it('when BUY, should add new item (without discounts) in the basket', () => {
    expect(reducer([], {
      type: BUY,
      content: {
        id: 2,
        price: 0.15,
        name: 'Bananas',
        quantity: 2,
        img: 'https://static.vinepair.com/wp-content/uploads/2015/04/banana-beer-header.jpg'
      }
    })).toEqual([
      {
        discount: undefined,
        id: 2,
        price: 0.15,
        name: 'Bananas',
        quantity: 2,
        finalPrice: 0.3
      }
    ])
  })
  it('when DELETE, should delete items without disccount', () => {
    expect(reducer([
      {
        discount: undefined,
        id: 2,
        price: 0.15,
        name: 'Bananas',
        quantity: 1,
        finalPrice: 0.15
      }
    ], {
      type: DELETE,
      content: {
        id: 2,
        price: 0.15,
        name: 'Bananas',
        quantity: 1,
        img: 'https://static.vinepair.com/wp-content/uploads/2015/04/banana-beer-header.jpg'
      }
    })).toEqual([])
  })
  it('when DELETE && quantity >3 || quantity <=3 should return an object with [quantity-1]', () => {
    expect(reducer([
      {
        id: 1,
        price: 0.50,
        name: 'Papayas',
        quantity: 4,
        discount: threePerTwo,
        finalPrice: 1
      }
    ], {
      type: DELETE,
      content: {
        id: 1,
        price: 0.50,
        name: 'Papayas',
        quantity: 2,
        discount: threePerTwo,
        img: 'https://abortiontips.com/wp-content/uploads/2017/05/papaya-for-abortion.jpg'
      }
    })).toEqual([
      {
        id: 1,
        price: 0.50,
        name: 'Papayas',
        quantity: 3,
        discount: threePerTwo,
        finalPrice: 1
      }
    ])
  })
  it('when DELETE && quantity === 1, should return empty array', () => {
    expect(reducer([
      {
        id: 1,
        price: 0.50,
        name: 'Papayas',
        quantity: 4,
        discount: threePerTwo,
        finalPrice: 1
      }
    ], {
      type: DELETE,
      content: {
        id: 1,
        price: 0.50,
        name: 'Papayas',
        quantity: 1,
        discount: threePerTwo,
        img: 'https://abortiontips.com/wp-content/uploads/2017/05/papaya-for-abortion.jpg'
      }
    })).toEqual([])
  })
})
