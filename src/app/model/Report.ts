import { Transaction } from "./Transaction";

export interface Report {
    total: number;
    date: string;
    transactions: Transaction[];
}