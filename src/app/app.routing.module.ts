import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductComponent } from './all-product/all-product.component';
import { MyProductComponent } from './my-product/my-product.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './core/services/auth-guard.service';

import { ConfirmMailstatusComponent } from './confirm-mailstatus/confirm-mailstatus.component';



const routes:Routes = [
  { path:'', pathMatch:'full', component:HomeComponent },
  { path:'products', component:AllProductComponent },
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent}, 
  {path:'confirm-email/:activation-code', component:ConfirmMailstatusComponent}, 
  { path:'my-products', canActivate:[AuthGuard], component:MyProductComponent }, 
  { path:'**', component:HomeComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {
  
}