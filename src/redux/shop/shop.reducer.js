import { ShopActionsTypes } from './shop.types';
const initstate = {
  collections: null
};

const shopReducer = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case ShopActionsTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
