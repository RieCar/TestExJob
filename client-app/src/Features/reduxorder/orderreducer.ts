import { AnyAction } from "redux";
import { OrderActions } from "./orderactions";

const initialState = {};

export default function orderReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
      case OrderActions.GET_ORDERDETAILS:
        return action.payload.searchId;
      case OrderActions.GET_ORDERDETAILS_SUCCESS:
        return action.payload.order;
      case OrderActions.GET_ORDERDETAILS_FAILURE:
        return null;
      default:
        return state;
    }
  }