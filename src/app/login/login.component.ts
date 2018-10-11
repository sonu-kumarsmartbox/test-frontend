import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { UserService } from '../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hasError:boolean = false;
  loginGroup:FormGroup;
  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.loginGroup =  this.fb.group({
      'email':['',[
        Validators.required,
        Validators.pattern("^([a-zA-Z0-9.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$")
      ]],
      'password':['',Validators.required]

    });
  }

  login(){
    if(this.loginGroup.valid){
      this.userService.attemptAuth(this.loginGroup.value).subscribe(
        (data) => {
          this.router.navigateByUrl('/');
        },
        (error)=>{
          alert("please activate your email");
        }
      );
    }else{
      
      this.hasError = true;
    }
  }

}