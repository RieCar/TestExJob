 import { all } from 'redux-saga/effects'

// Sagas
import {userSagas} from './usersagas';


export default function* rootSaga() {
    yield all([
        ...userSagas,
    ])
} 