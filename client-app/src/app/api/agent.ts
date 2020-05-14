import axios, { AxiosResponse } from "axios";
import { IOrganisation } from "../models/organisation";
import { IUser, IFormValues } from "../models/user";

axios.defaults.baseURL = 'http://localhost:5000/api';

// Add token to header from local storage
axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        return config
    } else {
        return Promise.reject('A token must be given in order to request');
    }
});

// Get data from the response
const responsBody = <T>(response: AxiosResponse<T>) => response.data; 

/**
 * Requests 
 * 
 * @TODO make a function in app to edit contactinfo?
 */
const requests = {
    get: <T>(url:string) => axios.get<T>(url).then(responsBody),
    post: <T>(url:string, body: any = {})=> axios.post<T>(url, body).then(responsBody),    
    put: <T>(url:string, body: any = {})=> axios.put<T>(url, body).then(responsBody)
}

/**
 * Organisations
 */
const Organisations = {
    list: () => requests.get<IOrganisation[]>('/organisation'),
    getById: (id: string) => requests.get<IOrganisation>(`/organisation/${id}`),
}

/**
 * Users
 */
const Users ={
    current: () => requests.get<IUser>('/user'),
    login: (user: IFormValues) => requests.post<IUser>(`/user/login`, user),
    create: (user: IFormValues) => requests.post<IUser>(`/user/create`, user)
}

export default {
    Organisations,
    Users
}