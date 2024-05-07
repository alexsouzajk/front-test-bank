import { Account } from "./Account";

export interface Customer {
    accountNumber?: number;
    accountBalance?: number;
    id?: number;
    name: string;
    age: number;
    email: string;
    account: Account;
}