import { AnyAction } from 'redux'

import { UserActions } from "./useractions";

const initialState = {}

export default function userReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case UserActions.LOGIN_USER:
           return  action.payload.loginformation
        case UserActions.LOGIN_USER_SUCCESS:
            return action.payload.user
        case UserActions.LOGOUT_USER_SUCCESS:
            return null
        default:
            return state;
    }
}