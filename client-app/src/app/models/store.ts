import { IUser } from './user';
import { IOrganisation } from './organisation';


export interface IStore {
    currentUser?: IUser,
    currentOrg?: IOrganisation
}