import { AnyAction } from 'redux';
import { takeLatest, call, put } from 'redux-saga/effects'

import agent from '../../api/agent'

// Actions
import { UserActions, LoginUserSuccess, LoginUserFailure } from './actions';


function* handleOnLoginUser(action: AnyAction) {
    const loginInformation = action.payload.loginInformation
    console.log('loginInformation', loginInformation)
    try {
        const user = yield call(agent.Users.login, loginInformation)

        console.log('user', user)

        if ( user ) {
            localStorage.setItem("token", user.token)
            localStorage.setItem("organisation", user.organisation)
            yield put(LoginUserSuccess(user))
        }

    } catch (error) {
        console.log(error)
        yield put(LoginUserFailure(error.message))
    }
    
}


export const userSagas = [
    takeLatest(UserActions.LOGIN_USER, handleOnLoginUser),
]