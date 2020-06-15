import { IContract } from "../../app/models/contract"

export enum ContractActions{
    SET_CURRENTCONTRACT = 'SET_CURRENTCONTRACT',
    SET_CURRENTCONTRACT_SUCCESS = 'SET_CURRENTCONTRACT_SUCCESS',
    SET_CURRENTCONTRACT_FAILURE = 'SET_CURRENTCONTRACT_FAILURE',

}

export const setCurrentContract = (contract:IContract) => ({
    type: 'SET_CURRENTCONTRACT',
    payload: {contract}
})

export const setCurrentContractSuccess = (contract:IContract) => ({
    type: 'SET_CURRENTCONTRACT_SUCCESS',
    payload: {contract}
})

export const setCurrentContractFailure = (error:string) => ({
    type: 'SET_CURRENTCONTRACT_FAILURE',
    payload: {error},
    error: true,
})