import { userActionTypes } from './user.types';
const initState = {
  currentUser: null
};

const userReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};

export default userReducer;
