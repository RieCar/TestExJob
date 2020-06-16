import { IContract } from "../../app/models/contract"

export enum ContractActions{
    CLICKED_CURRENTCONTRACT = 'CLICKED_CURRENTCONTRACT',
    SET_CURRENTCONTRACT_SUCCESS = 'SET_CURRENTCONTRACT_SUCCESS',
    SET_CURRENTCONTRACT_FAILURE = 'SET_CURRENTCONTRACT_FAILURE',

}

export const setCurrentContract = (contract:IContract) => ({
    type: 'CLICKED_CURRENTCONTRACT',
    payload: {clicked : contract}
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