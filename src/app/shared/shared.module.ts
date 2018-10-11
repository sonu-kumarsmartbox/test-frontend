import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ShowAuthedDirective } from './show-authed.directive';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ProductComponent, HeaderComponent, ShowAuthedDirective],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductComponent,
    FormsModule,
    HeaderComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule { }