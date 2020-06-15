import { takeLatest, call, put } from "redux-saga/effects";
import agent from "../../app/api/agent";
import { AnyAction } from "redux";
import { ContractActions, setCurrentContractSuccess, setCurrentContractFailure, setCurrentContract } from "./contractactions";
import { useSelector } from "react-redux";
import { IStore } from "../../app/models/store";



function* handleOnSetCurrentContract(action: AnyAction) {
  const contract = action.payload.contract;
//   const contract = useSelector((store: IStore) => store.currentOrg?.contract);
//   console.log("contract orgid", contractId);
  if(contract){
    yield put(setCurrentContractSuccess(contract));
  }
      
    
}

export const contractSagas = [
  takeLatest(ContractActions.SET_CURRENTCONTRACT, handleOnSetCurrentContract),
];