import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  role:any;
  isLoggedIn:boolean=false;
  isCustomer:boolean=false;
  isManager:boolean=false;
  isEngineer:boolean=false;
  isAdmin:boolean=false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getRole();
    let user = sessionStorage.getItem('user');
    if(user==undefined || user==null || user==''){
      this.isLoggedIn = false;
    }else{
      this.isLoggedIn=true;
    }
    let role = sessionStorage.getItem('role');

    if(role==undefined || role==null || role==''){}
    else{
      if(role=='admin')
        this.isAdmin=true;
      else if(role=='customer')
        this.isCustomer=true;
      else if(role=='engineer')
        this.isEngineer=true;
        else if(role=='manager')
        this.isManager=true;
    }
  }

  getRole(){
    this.role=sessionStorage.getItem('role');
  }
}
