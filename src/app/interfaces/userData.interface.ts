import { IContact } from "./contact.interface";

export interface IUserData {
    userName: string;
    image: string;
    email: string;
    contacts: Array<IContact>;
    id?: string;
}
