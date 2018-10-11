import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-confirm-mailstatus',
  templateUrl: './confirm-mailstatus.component.html',
  styleUrls: ['./confirm-mailstatus.component.css']
})
export class ConfirmMailstatusComponent implements OnInit {
  activation_code:string;
  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
     this.activation_code = data.params['activation-code'];
      
    });
  }



  activate(activatecode) {
    this.userService.activateAccount(activatecode).subscribe(data=>{
      alert("Activated");
    });
  }

}
