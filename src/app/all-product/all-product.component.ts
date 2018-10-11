import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product.model';
import { ProductService } from '../core/services/product.service';
import { UserService } from '../core/services/user.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products:Product[];
  selectedProducts:string[] = [];
  isAddedtoDB:boolean = false;
  constructor(
    private productService:ProductService,
    private userService:UserService,
    private router:Router,
  ) { }

  ngOnInit() {
    //fetch products from backend
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      }
    );
  }

  addProduct(productId:string) {
    //add product to the selected product
     this.selectedProducts.push(productId);
  }

  removeProduct(productId:string) {
    //add product to the selected product
    let index = this.selectedProducts.indexOf(productId);
    if(index != -1) {
      this.selectedProducts.splice(index,1);
    }
  }

  addtoMyProducts(){
    this.userService.isAuthenticated.pipe(concatMap(isAuth => {
      if(!isAuth) {
        this.router.navigateByUrl('/login');
        return of(null);
      } else {
        return this.userService.addProducts(this.selectedProducts).pipe(
          tap(
            (data) =>{
              this.isAddedtoDB = true;
            },
            (error) =>{
              console.log("error while adding to db");
            }
          )
        );
      }
    })).subscribe();
    // this.userService.addProducts(this.selectedProducts).subscribe(
    //   (data)=>{
    //     this.isAddedtoDB = true;
    //   },
    //   (error) =>{
    //   }
    // );
  }

}