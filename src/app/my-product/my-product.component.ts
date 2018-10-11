import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product.model';
import { UserService } from '../core/services/user.service';



@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {
   products:Product[];
  constructor(
    private userService:UserService,
  ) { }

  ngOnInit() {

    this.userService.getMyProducts().subscribe(
      data => {
        this.products = data;
      }
    );
  }

}