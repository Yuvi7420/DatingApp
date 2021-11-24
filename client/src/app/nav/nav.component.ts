import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any={}
  loggedIn:boolean;

  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
  
  }

login(){
      this.accountService.login(this.model).subscribe(respose => {
      console.log(respose);
    },error =>{
      console.log(error);
    })
  //console.log(this.model)
}

logout()
{
  this.accountService.logout();
}
}
