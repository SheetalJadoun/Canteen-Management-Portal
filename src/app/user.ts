import { ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

export class User {
    id: number | undefined;
    emailId: string | undefined;
    userName: string | undefined;
    password: string | undefined;
    cpassword: string | undefined;
    role: string | undefined;
    walletAmt: number | undefined;
    constructor() { }
    // @ViewChild(NgForm) form: NgForm | undefined;
}
