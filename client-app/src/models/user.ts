export interface IUser {
    username: string, 
    displayname: string,
    token: string,
    organisation: string
}

export interface IFormValues {
    email: string,
    password:string,
    displayname?:string,
    username?: string,
    organisation?: string
}