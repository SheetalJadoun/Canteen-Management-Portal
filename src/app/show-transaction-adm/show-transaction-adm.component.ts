import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemServiceService } from '../item-service.service';
import { RegistrationService } from '../registration.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-show-transaction-adm',
  templateUrl: './show-transaction-adm.component.html',
  styleUrls: ['./show-transaction-adm.component.css']
})
export class ShowTransactionAdmComponent implements OnInit {

  transaction: Transaction[] = [];
  constructor(private _service: ItemServiceService, private _router: Router, private userService: RegistrationService) { }

  ngOnInit(): void {
    this._service.fetchTransactionList().subscribe((data) => {
      this.transaction = data;
      console.log("list retrieved successfully")
    },
      error => console.log("error occurs")
    )
  }

}
