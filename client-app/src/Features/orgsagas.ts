import { takeLatest, call, put } from "redux-saga/effects";
import { OrgActions, getCurrentSuccess, getCurrentFailure } from "./orgactions";
import agent from "../app/api/agent";

function* handleOnGetCurrent(action: any) {
  const organisationId = action.payload.organisationId;
  try {
    const organisation = yield call(
      agent.Organisations.details,
      organisationId
    );

    if (organisation) {
      yield put(getCurrentSuccess(organisation));
    }
  } catch (error) {
      yield put(getCurrentFailure(error.message))
  }
}

export const userSagas = [
  takeLatest(OrgActions.GET_CURRENT_SUCCESS, handleOnGetCurrent),
];
