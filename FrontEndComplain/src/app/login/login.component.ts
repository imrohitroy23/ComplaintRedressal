import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login = new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required]),
  });

  ngOnInit(){
    let data = sessionStorage.getItem('user');
    if(data=='admin'){
      this.router.navigate(['/admin/create/customer']);
    }
  }
  constructor(private loginService:LoginService,private router:Router){}

  onSubmit(){
    this.loginService.login(this.login.value).subscribe(data => {
      if(data!=='failure'){
        sessionStorage.setItem("user",data);
        if(data=='admin'){
          sessionStorage.setItem("role",'admin');
          this.router.navigate(['/admin/create/customer']);
        }
        else if(this.login.value.role == 'customer'){
          sessionStorage.setItem("role",'customer');
          this.router.navigate(['/customer/complaint']);
        }
        else if(this.login.value.role == 'manager'){
          sessionStorage.setItem("role",'manager');
          this.router.navigate(['/manager/complaints']);
        }
        else if(this.login.value.role == 'engineer'){
          sessionStorage.setItem("role",'engineer');
          this.router.navigate(['/engineer/complaints']);
        }
      }else{
        this.login.reset();
        alert("Wrong Credentials..");
      }
    });
  }
}
