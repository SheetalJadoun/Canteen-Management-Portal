import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../Item';
import { ItemServiceService } from '../item-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { RegistrationService } from '../registration.service';
import Swal from 'sweetalert2';
import { User } from '../user';
import { ItemsR } from '../ItemsR';

@Component({
  selector: 'app-emp-item-view',
  templateUrl: './emp-item-view.component.html',
  styleUrls: ['./emp-item-view.component.css']
})
export class EmpItemViewComponent implements OnInit {



  item: Item[] = [];
  curItem = new ItemsR();
  users: User[] = [];
  constructor(private _service: ItemServiceService, private _router: Router, private userService: RegistrationService) { }

  ngOnInit(): void {
    this._service.fetchItemListFromRemote().subscribe((data) => {
      this.item = data.filter((dataObj: { quantity: number; }) => {
        return dataObj.quantity > 0;
      });
    },
      error => console.log("exception occured"),
    )
  }

  buyItem(it: any) {
    const self = this;
    const tprice = it.price;
    let us = JSON.parse(localStorage.getItem('user_details') || '{}');
    console.log(us);
    const email = us.emailId;
    console.log(email);

    this.userService.fetchUserByEmailFromRemote(email).subscribe(
      (data) => {
        if ((data['walletAmt'] -= tprice) > 0) {
          // Swal.fire('Successful');
          this.userService
          console.log(data['walletAmt'])
          console.log(it.id);
          it.quantity--;

          this._service.fetchItemByIdFromRemote(it.id).subscribe((res) => {
            this.curItem = res;
            console.log(this.curItem)
          },
            error => console.log("item cannot fetched")
          )


          this._service.updateItemQuantity(it.id, it).subscribe(user => {
            console.log("item updated successfully")
          },
            error => console.log("failure")
          )
          this.userService.updateUser(data).subscribe(user => {
            Swal.fire({
              title: "Done",
              text: "Item Purchasing Done",
              icon: "success",

            });
          })
          let transaction = {
            'user_name': data['userName'],
            'amount': tprice,
            'type': 'Debit',
            'date': new Date()
          }
          this._service.addtransaction(transaction).subscribe((trans) => {
            console.log("successfully added")
          },
            error => console.log("error occurs")
          )

        }
        else {
          data['balance'] += tprice;
          Swal.fire("Oops!", "Not Enough Balance.Please add amount into your account.", "error");
        }
      }

    )
  }
  updateQuantity(it: any) {
    it.quantity = it.quantity--;
    this._service.fetchItemByIdFromRemote(it.id).subscribe((data => {
      data.quantity = data.quantity - 1;
      this._service.updateItem(data).subscribe((list) => {
        this.item = data;
      })
    }))
  }
}