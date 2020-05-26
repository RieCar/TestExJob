 import { all } from 'redux-saga/effects'

// Sagas
import {userSagas} from './usersagas';
import { orgSagas } from './orgsagas';
import { contactSagas } from './contactsagas';


export default function* rootSaga() {
    yield all([
        ...userSagas,
        ...orgSagas,
        ...contactSagas
    ])
} 