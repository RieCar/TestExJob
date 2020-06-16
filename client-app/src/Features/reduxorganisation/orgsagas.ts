import { takeLatest, call, put } from "redux-saga/effects";
import { OrgActions, getCurrentSuccess, getCurrentFailure } from "./orgactions";
import agent from "../../app/api/agent";
import { AnyAction } from "redux";
import { useState } from "react";
import { IOrganisation } from "../../app/models/organisation";

const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown');

function* handleOnGetCurrent(action: AnyAction) {
  const organisationId = action.payload.organisationId;
 
  console.log("orgid", organisationId);
  try {
    const organisation = yield call(
      agent.Organisations.details,
      organisationId
    );
console.log("org",  organisation);
    if (organisation) {
      // yield(richTextFromMarkdown(organisation.description))
      // console.log("saga desc", organisation.description);
      yield put(getCurrentSuccess(organisation));
    }
  } catch (error) {
      yield put(getCurrentFailure(error.message))
  }
}

export const orgSagas = [
  takeLatest(OrgActions.GET_CURRENT, handleOnGetCurrent),
];
