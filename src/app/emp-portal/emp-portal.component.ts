import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ItemServiceService } from '../item-service.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-emp-portal',
  templateUrl: './emp-portal.component.html',
  styleUrls: ['./emp-portal.component.css']
})
export class EmpPortalComponent implements OnInit {

  constructor(private _service: ItemServiceService, private _router: Router, private userService: RegistrationService) { }

  ngOnInit(): void {
    let us = JSON.parse(localStorage.getItem('user_details') || '{}');
    if (typeof (us) == null) {
      Swal.fire({
        title: "Please Log in first",
        text: "If you do not having an Account pls Register",
        icon: 'error',
      })
    }
    const role = us.role;
    console.log(role);
    if (role != 'Employee') {
      Swal.fire({
        title: "Access Denied",
        icon: 'error',
        confirmButtonColor: "red"
      }
      );
      this._router.navigate(['/'])
    }
  }
  signout() {
    localStorage.removeItem('user_details');
    this._router.navigate(['/']);
  }
}
