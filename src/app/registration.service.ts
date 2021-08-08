import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { Item } from './Item';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/login", user)
  }
  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/registeruser", user)
  }
  public loginAdminFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/loginAdmin", user)
  }
  public fetchUserListFromRemote(): Observable<any> {
    return this._http.get<Item[]>("http://localhost:8080/viewUsers");
  }

  public fetchUserByEmailFromRemote(email: any): Observable<any> {
    return this._http.get<Item[]>("http://localhost:8080" + '/getUserByEmail?email=' + email);
  }
  public updateWalletFromRemote(email: any): Observable<any> {
    return this._http.get<Item[]>("http://localhost:8080" + '/getUserByEmail?email=' + email);
  }
  public deleteUser(id: any) {
    return this._http.delete("http://localhost:8080" + '/deleteUser?id=' + id);
  }
  public updateUser(user: User): Observable<any> {
    return this._http.put<any>("http://localhost:8080/updateUser", user);
  }
}
