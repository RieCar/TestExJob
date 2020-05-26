import { IContact } from "../app/models/contact"

export enum ContactActions{
    Get_ALL_BY_ORG = 'GET_ALL_BY_ORG',
    GET_ALL_BY_ORG_SUCCESS = 'GET_ALL_BY_ORG_SUCCESS',
    GET_ALL_BY_ORG_FAILURE = 'GET_ALL_BY_ORG_FAILURE',

}

export const getAllByOrg = (organisationId:string) => ({
    type: 'GET_ALL_BY_ORG',
    payload: {organisationId: organisationId}
})

export const getAllByOrgSuccess = (contact:IContact) => ({
    type: 'GET_ALL_BY_ORG_SUCCESS',
    payload: {contact}
})

export const getAllByOrgFailure = (error:string) => ({
    type: 'GET_ALL_BY_ORG_FAILURE',
    payload: {error},
    error: true,
})