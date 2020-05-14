import { all } from 'redux-saga/effects'

// Sagas
import { userSagas } from './User/userSagas';

export default function* rootSaga() {
    yield all([
        ...userSagas,
    ])
}