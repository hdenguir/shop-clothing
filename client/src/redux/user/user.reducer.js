import { userActionTypes } from './user.types';
const initState = {
  currentUser: null,
  errorMessage: null
};

const userReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        errorMessage: null
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case userActionTypes.SIGN_IN_FAIL:
    case userActionTypes.SIGN_UP_FAIL:
    case userActionTypes.SIGN_OUT_FAIL:
      return {
        ...state,
        errorMessage: payload
      };
    default:
      return state;
  }
};

export default userReducer;
