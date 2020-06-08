export interface IOrganisation{

    customerId?:string;
    companyName?:string; 
    imageUrl?: string; 
    //customerDescription?:string; 
    description?: string;
    projects?: any[];
    orders?: any[];
    updatedAt?: string;
}