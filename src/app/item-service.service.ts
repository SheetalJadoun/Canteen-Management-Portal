import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './Item';
import { ItemsR } from './ItemsR';
import { Transaction } from './Transaction';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private _http: HttpClient) { }

  public fetchItemListFromRemote(): Observable<any> {
    return this._http.get<Item[]>("http://localhost:8080/viewItems");
  }

  public fetchMasterListFromRemote(): Observable<any> {
    return this._http.get<Item[]>("http://localhost:8080/viewMasterItems");
  }

  public addItemFromRemote(item: ItemsR): Observable<any> {
    return this._http.post<any>("http://localhost:8080//addItem", item);
  }

  public fetchItemByIdFromRemote(id: any): Observable<any> {
    return this._http.get<Item[]>("http://localhost:8080" + '/getItem?id=' + id);
  }
  // public deleteItemFromRemote(id: number) {
  //   return this._http.delete<any>("http://localhost:8080/deleteItem" + id);
  // }

  public deleteItem(id: any) {
    return this._http.delete("http://localhost:8080" + '/deleteItem?id=' + id);
  }

  public updateItem(item: ItemsR) {
    return this._http.put("http://localhost:8080" + '/updateItem', item);
  }

  public updateItemQuantity(id: any, item: ItemsR): Observable<any> {
    return this._http.put<any>("http://localhost:8080/updateItemQty/" + id, item);
  }
  public deleteMasterItem(id: any) {
    return this._http.delete("http://localhost:8080" + '/deleteMasterItem?id=' + id);
  }
  public addMasterItemFromRemote(item: ItemsR): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addMasterItem", item);
  }
  public addtransaction(transaction: any): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addTransaction", transaction)
  }
  public fetchTransactionList(): Observable<any> {
    return this._http.get<Transaction[]>("http://localhost:8080/allTransaction");
  }
}
