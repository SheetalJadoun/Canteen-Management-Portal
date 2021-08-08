import { HttpClientModule } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  msg = "";
  roles: any = ['Admin', 'Employee'];
  // @ViewChild('Registerform', { static: true })
  // form!: NgForm;
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  radioChangedHandler(event: any) {
    this.user.role = event.target.value;
  }

  registerUser() {

    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this.msg = "Registration Successful"
        this._router.navigate(['/login']);
      },
      error => {
        console.log("exception occured")
        // this.msg = error.error();
      }
    )


  }
}
