import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { HttpTokenInterceptor } from './core/interceptors/http.token.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllProductComponent } from './all-product/all-product.component';
import { MyProductComponent } from './my-product/my-product.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ApiService } from './core/services/api.service';
import { UserService } from './core/services/user.service';
import { ProductService } from './core/services/product.service';
import { JwtService } from './core/services/jwt.service';
import { AuthGuard } from './core/services/auth-guard.service';
import { ConfirmMailstatusComponent } from './confirm-mailstatus/confirm-mailstatus.component';


@NgModule({
  imports:      [ BrowserModule, SharedModule,AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, AllProductComponent, MyProductComponent,LoginComponent,SignupComponent, ConfirmMailstatusComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass:HttpTokenInterceptor, multi:true},
    ApiService, 
    UserService, 
    ProductService, 
    JwtService,
  ]
})
export class AppModule { }
