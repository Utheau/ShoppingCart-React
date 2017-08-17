const threePerTwo = {
  type: 'threePerTwo',
  everyThree: 3,
  oneFree: 1,
  text: '3 per 2'
}

const items = [
  {
    id: 1,
    price: 0.50,
    name: 'Papayas',
    quantity: 1,
    discount: threePerTwo,
    img: 'https://abortiontips.com/wp-content/uploads/2017/05/papaya-for-abortion.jpg'
  }, {
    id: 2,
    price: 0.15,
    name: 'Bananas',
    quantity: 1,
    img: 'https://static.vinepair.com/wp-content/uploads/2015/04/banana-beer-header.jpg'
  }, {
    id: 3,
    price: 0.30,
    name: 'Blueberries',
    quantity: 1,
    discount: threePerTwo,
    img: 'http://www.stronggirl.com/wp-content/uploads/bfi_thumb/10-superfoods-n6ckomb1wd1c55roel8k6juaeyffx9a8b32kla98zc.png'
  }, {
    id: 4,
    price: 0.40,
    name: 'Kiwi',
    quantity: 1,
    img: 'http://www.fruittime.it/wp-content/uploads/2016/01/kiwi-700x300.jpeg'
  }, {
    id: 5,
    price: 0.30,
    name: 'Oranges',
    quantity: 1,
    img: 'http://plus55.com/wp-content/uploads/2016/09/laranja.jpg'
  }, {
    id: 6,
    price: 0.25,
    name: 'Apples',
    quantity: 1,
    discount: threePerTwo,
    img: 'https://mnhardy.umn.edu/sites/mnhardy.umn.edu/files/styles/hero_800x300/public/apples-hero.jpg?itok=2O_m1LBt'
  }, {
    id: 7,
    price: 0.50,
    name: 'Strawberry',
    quantity: 1,
    discount: threePerTwo,
    img: 'https://i2.wp.com/files.hungryforever.com/wp-content/uploads/2014/12/strawberry-ice-cream-recipe-featured-image.jpg?fit=800%2C300'
  }, {
    id: 8,
    price: 0.10,
    name: 'Cherry',
    quantity: 1,
    img: 'http://www.willungafarmersmarket.com.au/wp-content/uploads/2015/11/newcherries-800x300.jpg'
  }
];

export default items;
