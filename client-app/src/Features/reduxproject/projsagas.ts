import { takeLatest, call, put } from "redux-saga/effects";
import agent from "../../app/api/agent";
import { AnyAction } from "redux";
import { ProjectActions, getProjectDetailsSuccess, getProjectDetailsFailure } from "./projactions";
import {history} from '../../index';


function* handleOnGetDetails(action: AnyAction) {
  const projectid = action.payload.searchId;
 
  console.log("contact orgid", projectid);
  try {
    const project = yield call(
      agent.Projects.ProjectDetails,
      projectid
    );
console.log("project",  project);
    if (project) {
      yield put(getProjectDetailsSuccess(project));
      // history.push({pathname:'/ProjectDetail'});
      
    }
  } catch (error) {
      yield put(getProjectDetailsFailure(error.message))
  }
}

export const projectSagas = [
  takeLatest(ProjectActions.GET_PROJECTDETAILS, handleOnGetDetails),
];