export interface IProject{

    id:string;
    titel:string; 
    customerDescription?:string; 
    startDate?: string;
    endDate?: string;
    currentStatus?: string; 
    days?: number;
    orgcontact?: {};
    
}