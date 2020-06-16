import { takeLatest, call, put } from "redux-saga/effects";
import agent from "../../app/api/agent";
import { AnyAction } from "redux";
import { ContractActions, setCurrentContractSuccess, setCurrentContractFailure, setCurrentContract } from "./contractactions";
import { useSelector } from "react-redux";
import { IStore } from "../../app/models/store";



function* handleOnSetCurrentContract(action: AnyAction) {
  const contract = action.payload.clicked;

  if(contract){
    yield put(setCurrentContractSuccess(contract));
  }
  else{
    yield put(setCurrentContractFailure("Something went wrong, try again"))
  };
      
    
}

export const contractSagas = [
  takeLatest(ContractActions.CLICKED_CURRENTCONTRACT, handleOnSetCurrentContract),
];