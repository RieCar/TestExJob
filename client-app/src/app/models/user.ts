import { AxiosResponse } from "axios";

export interface IUser{

    userName: string, 
    displayName: string,
    token: string,
    organisation: string,
    isLoggedIn?: boolean,
    error?: {},
    message: AxiosResponse 

}

export interface IFormValues{
    email: string,
    password:string,
    displayname?:string,
    username?: string,
    organisation?: string
   

}