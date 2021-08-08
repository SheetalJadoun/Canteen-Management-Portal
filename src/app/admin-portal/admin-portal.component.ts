import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let us = JSON.parse(localStorage.getItem('user_details') || '{}');
    if (us === null) {
      swal.fire({
        title: "Please Log in first",
        text: "If you do not having an Account pls Register",
        icon: 'error',
      })
    }
    const role = us.role;
    console.log(role);
    if (role != 'Admin') {
      swal.fire({
        title: "Access Denied",
        denyButtonText: "Access Denied",
        icon: 'error',
        confirmButtonColor: "red"
      }
      );
      this.router.navigate(['/'])
    }
  }

  signout() {
    localStorage.removeItem('user_details');
    this.router.navigate(['/']);
  }

}
