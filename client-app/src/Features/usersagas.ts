import { AnyAction } from "redux";
import { put, call, takeLatest } from "redux-saga/effects";

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
    }
  } catch (error) {
    console.log(error);
    yield put(LoginUserFailure(error));
  }
}

function* handleOnLogOutUser(action: AnyAction) {
  console.log('logout user');
  localStorage.removeItem("token");
  localStorage.removeItem("organisation");
  yield put(LogoutUserSuccess());
}

 
// function* mySaga(){
//   yield takeLatest(UserActions.LOGIN_USER, handleOnLoginUser)
// }
// export default mySaga;
export const userSagas = [  
   takeLatest(UserActions.LOGIN_USER, handleOnLoginUser),
   takeLatest(UserActions.LOGOUT_USER, handleOnLogOutUser),
]