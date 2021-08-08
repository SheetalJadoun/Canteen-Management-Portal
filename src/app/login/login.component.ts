import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import swal from 'sweetalert2';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  roles: any = ['Admin', 'Employee'];
  msg = "";

  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;
  componentName = "user";
  // loginForm: FormGroup;
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  radioChangedHandler(event: any) {
    this.user.role = event.target.value;
  }

  loginUser() {
    if (this.user.role == "Admin") {
      this._service.loginUserFromRemote(this.user).subscribe(
        data => {
          console.log("response received")
          this._router.navigate(['/admin'])
          this.msg = "Log in successful";
          localStorage.setItem('user_details', JSON.stringify(this.user));

        },
        error => {
          console.log("exception occurs")
          this.msg = "Bad Credentials, Please enter valid emailId and password"
        }
      )
    }
    else {
      this._service.loginUserFromRemote(this.user).subscribe(
        data => {
          console.log("response received")
          this._router.navigate(['/employee'])
          localStorage.setItem('user_details', JSON.stringify(this.user));
          swal.fire({
            title: "Successful",
            icon: 'success',
            text: "Logged in successful",
            iconColor: "blue",

          })
        },
        error => {
          console.log("exception occurs")
          this.msg = "Bad Credentials, Please enter valid emailId and password"
          swal.fire({
            title: 'Bad Credentials',
            text: "Please check the email and password again",
            icon: 'error',
            iconColor: 'red',
            confirmButtonColor: "green",

          });
        }
      )
    }
  }
}
