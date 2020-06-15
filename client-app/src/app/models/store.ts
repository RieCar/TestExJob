import { IUser } from './user';
import { IOrganisation } from './organisation';
import { IContact, IContacts } from './contact';
import { IProject } from './project';
import { IOrder } from './order';
import { IContract } from './contract';


export interface IStore {
    currentUser?: IUser,
    currentOrg?: IOrganisation,
    currentContacts?: IContact[],
    currentProject?: IProject,
    currentOrder?: IOrder,
    currentContract?: IContract
}