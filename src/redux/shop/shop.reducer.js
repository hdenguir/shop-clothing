import SHOP_DATA from './shop.data';

const initstate = {
  collections: SHOP_DATA
};

const shopReducer = (state = initstate, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
