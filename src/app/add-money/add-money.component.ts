import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import swal from 'sweetalert2';
import { User } from '../user';
import { FormGroup } from '@angular/forms';
import { ItemServiceService } from '../item-service.service';
@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
  // amount = Number;
  // addMoney = FormGroup;
  user = new User();
  constructor(private _service: ItemServiceService, private _router: Router, private userService: RegistrationService) { }

  ngOnInit(): void {
  }

  addMoney() {
    const amt = this.user.walletAmt;
    console.log(amt);
    let user = JSON.parse(localStorage.getItem('user_details') || '{}');
    console.log(user);
    const email = user.emailId;

    this.userService.fetchUserByEmailFromRemote(email).subscribe((value) => {
      // console.log(amount);
      value.walletAmt += amt;
      console.log(value['walletAmt'])
      console.log(value);
      // value.walletAmt += val;
      this.userService.updateUser(value).subscribe((data) => {
        swal.fire("Success", "Balance Added successfully!!", "success");
        console.log(data);
      },
        error => console.log("error occurs")
      )

      let transaction = {
        'user_name': value['userName'],
        'amount': amt,
        'type': 'Credit',
        'date': new Date()
      }
      this._service.addtransaction(transaction).subscribe((trans) => {
        console.log("successfully added")
      },
        error => console.log("error occurs")
      )
    })
  }
}
