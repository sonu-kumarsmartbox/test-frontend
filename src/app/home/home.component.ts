import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser:string;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(data=>{
      this.currentUser = data.firstname;
    })
  }

}