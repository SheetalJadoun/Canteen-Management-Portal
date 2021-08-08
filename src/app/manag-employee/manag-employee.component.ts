import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-manag-employee',
  templateUrl: './manag-employee.component.html',
  styleUrls: ['./manag-employee.component.css']
})
export class ManagEmployeeComponent implements OnInit {

  user: User[] = [];
  usertoUpdate = {
    id: "",
    userName: "",
    emailId: "",
    role: "",
    wallletAmt: ""
  }
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this._service.fetchUserListFromRemote().subscribe(
      // data => console.log("response received"),
      data => this.user = data,
      error => console.log("exception occured"),
    )
  } edit(it: any) {
    this.usertoUpdate = it;
  }
  deleteItem(it: any) {
    this.user.splice(this.user.indexOf(it), 1);
    this._service.deleteUser(it.id).subscribe(
      (data) => {
        console.log(data);
        this._router.navigate(['/admin/manageEmp'])
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
