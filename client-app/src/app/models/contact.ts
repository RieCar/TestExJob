export interface IContacts{
    currentcontacts: IContact[];
}

export interface IContact{
    id?:string;
    titel?:string; 
    fullName?:string;
    organisationName?: string;
    organisationId?: string; 
    phoneNumber?: string;
    email?: string;
}