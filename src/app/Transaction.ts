export class Transaction {
    id: number;
    user_name: string;
    amount: number;
    type: string;
    date: Date;
    constructor(id: number, user_name: string, amount: number, type: string, date: Date) {
        this.id = id;
        this.user_name = user_name;
        this.amount = amount;
        this.type = type;
        this.date = date;
    }
}