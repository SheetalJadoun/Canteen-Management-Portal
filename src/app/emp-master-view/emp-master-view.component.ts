import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../Item';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-emp-master-view',
  templateUrl: './emp-master-view.component.html',
  styleUrls: ['./emp-master-view.component.css']
})
export class EmpMasterViewComponent implements OnInit {

  constructor(private _service: ItemServiceService, private _router: Router) { }

  item: Item[] = [];
  ngOnInit(): void {
    this._service.fetchMasterListFromRemote().subscribe(
      // data => console.log("response received"),
      data => this.item = data,
      error => console.log("exception occured"),
    )
  }
}
