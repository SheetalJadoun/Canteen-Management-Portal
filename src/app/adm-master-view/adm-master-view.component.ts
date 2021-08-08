import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../Item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-adm-master-view',
  templateUrl: './adm-master-view.component.html',
  styleUrls: ['./adm-master-view.component.css']
})
export class AdmMasterViewComponent implements OnInit {

  item: Item[] = [];
  itemtoUpdate = {
    id: "",
    name: "",
    quantity: "",
    price: ""
  }
  constructor(private _service: ItemServiceService, private _router: Router) { }

  ngOnInit(): void {
    this._service.fetchMasterListFromRemote().subscribe(
      // data => console.log("response received"),
      data => this.item = data,
      error => console.log("exception occured"),
    )
  }

  edit(it: any) {
    this.itemtoUpdate = it;
  }

  deleteItem(it: any) {
    this._service.deleteMasterItem(it.id).subscribe(
      (data) => {
        console.log(data);
        this._router.navigate(['/admin/viewMasterItemsAdm'])
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
