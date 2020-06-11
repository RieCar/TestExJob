import { takeLatest, call, put } from "redux-saga/effects";
import agent from "../../app/api/agent";
import { AnyAction } from "redux";
import { OrderActions, getOrderDetailsSuccess, getOrderDetailsFailure } from "./orderactions";
import {history} from '../../index';


function* handleOnGetOrderDetails(action: AnyAction) {
  const orderid = action.payload.searchId;
 
  console.log("order orderID", orderid);
  try {
    const order = yield call(
      agent.Orders.OrderDetails,
      orderid
    );
console.log("order",  order);
    if (order) {
      yield put(getOrderDetailsSuccess(order));
      //history.push({pathname:'/Order'});
      
    }
  } catch (error) {
      yield put(getOrderDetailsFailure(error.message))
  }
}

export const orderSagas = [
  takeLatest(OrderActions.GET_ORDERDETAILS, handleOnGetOrderDetails),
];