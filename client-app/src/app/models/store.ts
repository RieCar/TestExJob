import { IUser } from './user';
import { IOrganisation } from './organisation';
import { IContact, IContacts } from './contact';


export interface IStore {
    currentUser?: IUser,
    currentOrg?: IOrganisation,
    currentContacts?: IContact[]
}