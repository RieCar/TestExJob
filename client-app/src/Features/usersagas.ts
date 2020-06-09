import { AnyAction } from "redux";
import { put, call, takeLatest } from "redux-saga/effects";
import {history} from '../index';
//UserActions
import {
  UserActions,
  LoginUserSuccess,
  LoginUserFailure,
  LogoutUserSuccess,
} from "./useractions";
import agent from "../app/api/agent";

function* handleOnLoginUser(action: AnyAction) {
  const loginInformation = action.payload.loginformation;
  console.log("loginInformation", loginInformation);
  try {
    const user =  yield call(agent.Users.login, loginInformation);

    console.log("user", user);

    if (user) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("organisation", user.organisation);
      yield put(LoginUserSuccess(user));
      history.push({pathname:'/Card'});
    }
  } catch (Error) {
    console.log('sagaerror',Error.data);
    var errormsg = Error.data.Errors.user; 
  
    yield put(LoginUserFailure(errormsg));
    history.push({pathname:'/Login'});
   
  }
}



function* handleOnLogOutUser(action: AnyAction) {
  console.log('logout user');
  localStorage.removeItem("token");
  localStorage.removeItem("organisation");
  yield put(LogoutUserSuccess());
}

export const userSagas = [  
   takeLatest(UserActions.LOGIN_USER, handleOnLoginUser),
   takeLatest(UserActions.LOGOUT_USER, handleOnLogOutUser)
]