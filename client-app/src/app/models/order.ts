import { IContact } from "./contact";
import { IEmployee } from "./employee";

export interface IOrder{

    id?:string;
    titel?:string; 
    description?:string; 
    startDate?: string;
    endDate?: string;
    status?: string;
    contact?: IContact;
    contactAtCamelonta?: IEmployee;
    estimatedcost?: number; 
    totalOrderDays?: number; 
}