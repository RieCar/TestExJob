export interface IUser{

    userName: string, 
    displayName: string,
    token: string,
    organisation: string,
    isLoggedIn?: boolean,
    Errors? : {}

}

export interface IFormValues{
    email: string,
    password:string,
    displayname?:string,
    username?: string,
    organisation?: string
   

}