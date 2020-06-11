import { IOrder } from "../../app/models/order"

export enum OrderActions{
    GET_ORDERDETAILS = 'GET_ORDERDETAILS',
    GET_ORDERDETAILS_SUCCESS = 'GET_ORDERDETAILS_SUCCESS',
    GET_ORDERDETAILS_FAILURE = 'GET_ORDERDETAILS_FAILURE',

}

export const getOrderDetails = (OrderId:string) => ({
    type: 'GET_ORDERDETAILS',
    payload: {searchId: OrderId}
})

export const getOrderDetailsSuccess = (order:IOrder) => ({
    type: 'GET_ORDERDETAILS_SUCCESS',
    payload: {order}
})

export const getOrderDetailsFailure = (error:string) => ({
    type: 'GET_ORDERDETAILS_FAILURE',
    payload: {error},
    error: true,
})