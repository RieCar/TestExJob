import { IUser } from './user';
import { IOrganisation } from './organisation';
import { IContact, IContacts } from './contact';
import { IProject } from './project';
import { IOrder } from './order';


export interface IStore {
    currentUser?: IUser,
    currentOrg?: IOrganisation,
    currentContacts?: IContact[],
    currentProject?: IProject,
    currentOrder?: IOrder
}