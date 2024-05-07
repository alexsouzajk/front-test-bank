import { Account } from "./Account";

export interface Transaction {
    id: number;
    date: string;
    value: number;
    originAccount: Account;
    destinationAccount: Account;
}