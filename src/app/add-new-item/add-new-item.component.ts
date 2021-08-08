import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../Item';
import { ItemServiceService } from '../item-service.service';
import { ItemsR } from '../ItemsR';
import { User } from '../user';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {
  // item: Item[] = [];
  item = new ItemsR();
  msg = "";
  constructor(private _service: ItemServiceService, private _router: Router) { }

  ngOnInit(): void {
  }
  addNewItem() {
    this._service.addItemFromRemote(this.item).subscribe(
      data => {
        console.log("response received");
        swal.fire({
          title: "Added",
          icon: 'success',
          text: "Item Added successfully",
          confirmButtonColor: "green"


        })
        this._router.navigate(['/admin/viewItemsAdm']);
      },
      error => {
        console.log("exception occured")
        // this.msg = error.error();
        swal.fire({
          title: "Something went wrong",
          icon: 'error',
          text: "Please Try Again",
          iconColor: "red",

        })
      }
    )

  }
}
