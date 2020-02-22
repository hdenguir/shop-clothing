import { ShopActionsTypes } from './shop.types';
const initstate = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

const shopReducer = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case ShopActionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload
      };
    case ShopActionsTypes.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
