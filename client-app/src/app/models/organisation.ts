import { IContract } from "./contract";

export interface IOrganisation{

    customerId?:string;
    companyName?:string; 
    imageUrl?: string; 
    description?: any;
    projects?: any[];
    orders?: any[];
    contract?: IContract; 
    updatedAt?: string;
    message?: string;
}