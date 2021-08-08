import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../Item';
import { ItemServiceService } from '../item-service.service';
import { ItemsR } from '../ItemsR';

@Component({
  selector: 'app-admin-item-view',
  templateUrl: './admin-item-view.component.html',
  styleUrls: ['./admin-item-view.component.css']
})
export class AdminItemViewComponent implements OnInit {

  item: Item[] = [];

  // itemtoUpdate = new ItemsR();
  itemtoUpdate = {
    id: "",
    name: "",
    quantity: "",
    price: ""
  }
  constructor(private _service: ItemServiceService, private _router: Router) { }

  ngOnInit(): void {
    this._service.fetchItemListFromRemote().subscribe(
      // data => console.log("response received"),
      data => this.item = data,
      error => console.log("exception occured"),
    )
  }
  // gotoEditItem(id: number) {
  //   console.log("id" + id);
  //   this._router.navigate(['/admin/editItem', id]);
  // }
  // gotoDeleteItem(id: number) {
  //   this._service.deleteItemFromRemote(id).subscribe(
  //     data => {
  //       console.log("deleted Successfully");
  //       this._router.navigate(['/viewItemsAdm'])
  //     },
  //     error => console.log("exception occured")
  //   )
  // }

  deleteItem(it: any) {
    this._service.deleteItem(it.id).subscribe(
      (data) => {
        console.log(data);
        this._router.navigate(['/admin/viewItemsAdm'])
      },
      (error) => {
        console.log(error);
      }
    );
  }

  edit(it: any) {
    this.itemtoUpdate = it;
  }

  updateItem() {
    // this._service.updateItem(this.itemtoUpdate).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
