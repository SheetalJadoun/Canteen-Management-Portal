import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemServiceService } from '../item-service.service';
import { ItemsR } from '../ItemsR';

@Component({
  selector: 'app-adm-ad-in-master',
  templateUrl: './adm-ad-in-master.component.html',
  styleUrls: ['./adm-ad-in-master.component.css']
})
export class AdmAdInMasterComponent implements OnInit {

  item = new ItemsR();
  msg = "";
  constructor(private _service: ItemServiceService, private _router: Router) { }

  ngOnInit(): void {

  }
  addNewItem() {
    this._service.addMasterItemFromRemote(this.item).subscribe(
      data => {
        console.log("response received");
        this.msg = "Item Added Successfully"
        this._router.navigate(['/admin/viewMasterItemsAdm']);
      },
      error => {
        console.log("exception occured")
        // this.msg = error.error();

      }
    )
  }

}
