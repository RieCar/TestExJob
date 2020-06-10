import { takeLatest, call, put } from "redux-saga/effects";
import agent from "../../app/api/agent";
import { AnyAction } from "redux";
import { ContactActions, getAllByOrgSuccess, getAllByOrgFailure } from "./contactactions";



function* handleOnGetAllByOrg(action: AnyAction) {
  const organisationId = action.payload.organisationId;
 
  console.log("contact orgid", organisationId);
  try {
    const contacts = yield call(
      agent.Contacts.getAllByOrg,
      organisationId
    );
console.log("contacts",  contacts);
    if (contacts) {
      yield put(getAllByOrgSuccess(contacts));
    }
  } catch (error) {
      yield put(getAllByOrgFailure(error.message))
  }
}

export const contactSagas = [
  takeLatest(ContactActions.Get_ALL_BY_ORG, handleOnGetAllByOrg),
];