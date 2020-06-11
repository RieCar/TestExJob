import { all } from "redux-saga/effects";

// Sagas
import { userSagas } from "./reduxuser/usersagas";
import { orgSagas } from "./reduxorganisation/orgsagas";
import { contactSagas } from "./reduccontact/contactsagas";
import { projectSagas } from "./reduxproject/projsagas";
import { orderSagas } from "./reduxorder/ordersagas";

export default function* rootSaga() {
  yield all([
    ...userSagas,
    ...orgSagas,
    ...contactSagas,
    ...projectSagas,
    ...orderSagas,
  ]);
}
