import { AnyAction } from "redux";
import { OrgActions } from "./orgactions";

const initialState = {};

export default function orgReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
      case OrgActions.GET_CURRENT:
        return action.payload.organisation;
      case OrgActions.GET_CURRENT_SUCCESS:
        return action.payload.organisation;
      case OrgActions.GET_CURRENT_FAILURE:
        return null;
      default:
        return state;
    }
  }