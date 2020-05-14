import { IUser } from './../../app/models/user';

export enum UserActions {
    LOGIN_USER = 'LOGIN_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE',
}

export const loginUser = (userObj: any) => ({
    type: UserActions.LOGIN_USER,
    payload: { loginInformation: userObj }
})

export const LoginUserSuccess = (user: IUser) => ({
    type: UserActions.LOGIN_USER_SUCCESS,
    payload: { user }
})

export const LoginUserFailure = (error: string) => ({
    type: UserActions.LOGIN_USER_SUCCESS,
    payload: { error },
    error: true
})