import axios, {AxiosResponse, AxiosRequestConfig} from "axios";
import { IOrganisation } from "../models/organisation";
import { IUser, IFormValues } from "../models/user";

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use((config) => {
const token = window.localStorage.getItem("token");
if(token)config.headers.Authorization = `Bearer ${token}`;
    return config
},error=>{
    return Promise.reject(error);
}
);

const responsBody = (response: AxiosResponse) => response.data; 

const requests = {

get: (url:string) => axios.get(url).then(responsBody),
post: (url:string, body: {})=> axios.post(url, body).then(responsBody),
//Todo make a function in app to edit contactinfo?
put: (url:string, body: {})=> axios.put(url,body).then(responsBody)
}

const Organisations ={
    list: ():Promise<IOrganisation[]> =>requests.get('/organisation'),
    details: (name:string) => requests.get(`/organisation/${name}`)
}

const Users ={
    current: ():Promise<IUser> => requests.get('/user'),
    //login: (user:IFormValues):Promise<IUser>=>requests.post(`/user/login`,user),
    login: (loginInformation: IFormValues):Promise<IUser> => requests.post(`/user/login`, loginInformation),
    create: (user:IFormValues):Promise<IUser> => requests.post(`/user/create`,user)
}

export default {
    Organisations,
    Users
}