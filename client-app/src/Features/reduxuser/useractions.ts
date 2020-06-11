import {IUser} from "../../app/models/user";
import { AxiosResponse } from "axios";
import { actionChannel } from "redux-saga/effects";
// import { actionChannel } from "redux-saga/effects";

export enum UserActions{
    LOGIN_USER = 'LOGIN_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE',
    LOGOUT_USER = 'LOGOUT_USER',
    LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
}

export const loginUser = (userObj:any) => ({
    type: 'LOGIN_USER',
    payload: {loginformation: userObj}
})

export const LoginUserSuccess = (user: IUser) => ({
    type: UserActions.LOGIN_USER_SUCCESS,
    payload: { user }
})

export const LoginUserFailure = (error: AxiosResponse) => ({
    type: UserActions.LOGIN_USER_FAILURE,
    payload: { error },
    error: true
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER',
    payload: undefined
})

export const LogoutUserSuccess = () => ({
    type: UserActions.LOGOUT_USER_SUCCESS,
    payload: {logoutinformation: "Logged out"}
})





// export const LogoutUserFailure = (error: string) => ({
//     type: UserActions.LOGIN_USER_FAILURE,
//     payload: { error },
//     error: true
// })