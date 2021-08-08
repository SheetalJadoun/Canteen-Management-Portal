import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemServiceService } from '../item-service.service';
import { RegistrationService } from '../registration.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.css']
})
export class ViewBalanceComponent implements OnInit {
  balance = Number;

  constructor(private _service: ItemServiceService, private _router: Router, private userService: RegistrationService) { }

  ngOnInit(): void {
    let us = JSON.parse(localStorage.getItem('user_details') || '{}');
    const email = us.emailId;
    console.log(email);

    this.userService.fetchUserByEmailFromRemote(email).subscribe(response => {
      this.balance = response['walletAmt'];
    });
  }

  addMoney() {
    // swal.fire({
    //   title: 'Add Money',
    //   text: "Enter Amount that you want to add in wallet",
    //   input: "text",
    // }).then((data) => {
    //   const i = Number(data);
    //   console.log(i);
    //   let user = JSON.parse(localStorage.getItem('user_details') || '{}');
    //   console.log(user);
    //   const email = user.emailId;

    //   this.userService.fetchUserByEmailFromRemote(email).subscribe((value) => {
    //     console.log(value);
    //     // value.walletAmt += data;
    //     console.log(value.walletAmt);
    //     console.log(value['walletAmt'] += data);
    //     // this.balance = value['walletAmt'];
    //     this.userService.updateUser(value).subscribe((val) => {
    //       swal.fire("Success", "Balance Added successfully!!", "success");
    //     },
    //       error => console.log("error occurs")
    //     )
    //   })
    // })

  }

}
