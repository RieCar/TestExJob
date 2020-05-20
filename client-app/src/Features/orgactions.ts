import {IOrganisation} from "../app/models/organisation";


export enum OrgActions{
    Get_DETAIL = 'GET_DETAIL',
    GET_DETAIL_SUCCESS = 'GET_DETAIL_SUCCESS',
    GET_DETAIL_FAILURE = 'GET_DETAIL_FAILURE',
    GET_CURRENT = 'GET_CURRENT',
    GET_CURRENT_SUCCESS = 'GET_CURRENT_SUCCESS',
    GET_CURRENT_FAILURE = 'GET_CURRENT_FAILURE',
}

export const getCurrent = (organisationId:any) => ({
    type: 'GET_CURRENT',
    payload: {organisationId: organisationId}
})

export const getCurrentSuccess = (organisation:IOrganisation) => ({
    type: 'GET_CURRENT_SUCCESS',
    payload: {organisation}
})

export const getCurrentFailure = (error:string) => ({
    type: 'GET_CURRENT_FAILURE',
    payload: {error},
    error: true,
})