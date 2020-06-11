import { IContact } from "./contact";
import { IEmployee } from "./employee";

export interface IProject{

    id:string;
    titel:string; 
    description?:string; 
    startDate?: string;
    endDate?: string;
    currentStatus?: string; 
    totalProjectDays?: number;
    contact?: IContact;
    projectLeader?: IEmployee
    
}