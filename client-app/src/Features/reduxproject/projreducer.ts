import { AnyAction } from "redux";
import { ProjectActions } from "./projactions";

const initialState = {};

export default function projectReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
      case ProjectActions.GET_PROJECTDETAILS:
        return action.payload.searchId;
      case ProjectActions.GET_PROJECTDETAILS_SUCCESS:
        return action.payload.project;
      case ProjectActions.GET_PROJECTDETAILS_FAILURE:
        return null;
      default:
        return state;
    }
  }