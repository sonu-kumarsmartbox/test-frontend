import { Component, OnInit, Input ,EventEmitter, Output } from '@angular/core';
import { Product } from '../../core/model/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:Product;
  @Output() addProductEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output() removeProductEvent:EventEmitter<string> = new EventEmitter<string>();

  marked:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
    if(this.marked) {
      //remove item
      this.addProductEvent.emit(this.product._id);
    }else{
      //add item
      this.removeProductEvent.emit(this.product._id);

    }
    console.log(this.marked);
  }

}