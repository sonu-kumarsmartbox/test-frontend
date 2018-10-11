import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from '../core/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hasError: boolean = false;
  isSuccess: boolean = false;
  signupGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.signupGroup = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', [
        Validators.required,
        Validators.pattern("^([a-zA-Z0-9.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$")
      ]],
      'password': ['', [
        Validators.required,
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}")
      ]],
      'cpassword': ['', Validators.required]

    }, { validator: this.pwdMatchValidator });
  }
  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('cpassword').value
      ? null : { 'mismatch': true };
  }

  signup() {
    if (this.signupGroup.valid) {
      this.userService.signup(this.signupGroup.value).subscribe(
       
        data => {
          if (data.error) {
            alert("email already exists")
          } else {
            this.hasError = false;
            this.isSuccess = true;
            this.signupGroup.reset()
          }
        },
        error => {
          alert("email already exists")
        }
      );
    }
    else {
      this.hasError = true;
    }
  }

}