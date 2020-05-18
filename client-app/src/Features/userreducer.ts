import { AnyAction } from 'redux'

import { UserActions } from "./useractions";

const initialState = {}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case UserActions.LOGIN_USER_SUCCESS:
            return action.payload.user
        case UserActions.LOGOUT_USER_SUCCESS:
            return undefined
        default:
            return state;
    }
}