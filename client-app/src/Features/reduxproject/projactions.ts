import { IProject } from "../../app/models/project"

export enum ProjectActions{
    GET_PROJECTDETAILS = 'GET_PROJECTDETAILS',
    GET_PROJECTDETAILS_SUCCESS = 'GET_PROJECTDETAILS_SUCCESS',
    GET_PROJECTDETAILS_FAILURE = 'GET_PROJECTDETAILS_FAILURE',

}

export const getProjectDetails = (ProjectId:string) => ({
    type: 'GET_PROJECTDETAILS',
    payload: {searchId: ProjectId}
})

export const getProjectDetailsSuccess = (project:IProject) => ({
    type: 'GET_PROJECTDETAILS_SUCCESS',
    payload: {project}
})

export const getProjectDetailsFailure = (error:string) => ({
    type: 'GET_PROJECTDETAILS_FAILURE',
    payload: {error},
    error: true,
})
