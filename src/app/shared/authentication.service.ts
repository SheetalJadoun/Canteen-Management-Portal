import { Injectable } from '@angular/core';
// import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userState: any;

  constructor() { }
}
