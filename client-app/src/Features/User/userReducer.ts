import { AnyAction } from 'redux'

import { UserActions } from "./actions";

const initialState = {}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case UserActions.LOGIN_USER_SUCCESS:
            return action.payload.user
        default:
            return state;
    }
}