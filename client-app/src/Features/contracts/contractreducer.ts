import { AnyAction } from "redux";
import { ContractActions } from "./contractactions";

const initialState = {};

export default function contractReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
      case ContractActions.CLICKED_CURRENTCONTRACT:
        return action.payload.organisationId;
      case ContractActions.SET_CURRENTCONTRACT_SUCCESS:
        return action.payload.contract;
      case ContractActions.SET_CURRENTCONTRACT_FAILURE:
        return null;
      default:
        return state;
    }
  }