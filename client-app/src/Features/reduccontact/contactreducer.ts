import { AnyAction } from "redux";
import { ContactActions } from "./contactactions";

const initialState = {};

export default function contactReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
      case ContactActions.Get_ALL_BY_ORG:
        return action.payload.organisationId;
      case ContactActions.GET_ALL_BY_ORG_SUCCESS:
        return action.payload.contact;
      case ContactActions.GET_ALL_BY_ORG_FAILURE:
        return null;
      default:
        return state;
    }
  }