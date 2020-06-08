import { AnyAction } from "redux";

import { UserActions } from "./useractions";

const initialState = {
  error: null,
  data:null,
  message:null
};

export default function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case UserActions.LOGIN_USER:
       var newState = {
        data: action.payload.loginformation,
        error: null,
        message:null
      };
      return Object.assign({}, state, newState); //action.payload.loginformation;
    case UserActions.LOGIN_USER_SUCCESS:
      return action.payload.user;
    case UserActions.LOGIN_USER_FAILURE:
      newState = {
        data: null,
        error: action.error,
        message: action.payload
      };
    return Object.assign({}, state, newState); //action.payload.error; 
    case UserActions.LOGOUT_USER:
      return null;
    case UserActions.LOGOUT_USER_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
